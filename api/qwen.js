const SUPABASE_URL = process.env.SUPABASE_URL || "https://xqteklgmxdslndswaftn.supabase.co";

const OCR_PROMPT = `这是一张拼豆图纸的色号统计表。请仔细读取统计表中每个色号和对应的粒数。

规则：
1. 色号格式为"字母前缀+数字"，字母前缀只能是以下之一：A、B、C、D、E、F、G、H、M。例如：A7、B14、G18、H2、M3。
2. 字母容易混淆，请特别注意区分：G和E、G和C、H和N、B和P，以图中实际字母为准。
3. 色号后面紧跟的那个独立整数才是粒数，粒数可能是1位到4位数字（如9、37、156、1280），不要截断或遗漏数字。
4. 统计表中色号和粒数是配对出现的，一一对应。

输出格式：色号-粒数，多个用逗号分隔。例如：A7-24,B14-93,G18-9,H2-156
只输出数据，不要任何解释。找不到统计表就回复：无法识别`;

function getBearerToken(req) {
  const raw = req.headers.authorization || req.headers.Authorization || "";
  const m = String(raw).match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : "";
}

function supabaseHeaders(extra = {}) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error("缺少 SUPABASE_SERVICE_ROLE_KEY 环境变量");
  }
  return {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function getUserIdFromToken(accessToken) {
  if (!accessToken) return null;

  const resp = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    method: "GET",
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!resp.ok) return null;
  const user = await resp.json();
  return user?.id || null;
}

async function getAiCredits(userId) {
  const resp = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?user_id=eq.${encodeURIComponent(userId)}&select=user_id,ai_credits`,
    {
      method: "GET",
      headers: supabaseHeaders(),
    }
  );

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`读取AI次数失败：${text}`);
  }

  const rows = await resp.json();
  const row = rows?.[0];
  return Number(row?.ai_credits || 0);
}

async function setAiCredits(userId, nextCredits) {
  const safeCredits = Math.max(0, Number(nextCredits || 0));

  const resp = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?user_id=eq.${encodeURIComponent(userId)}&select=user_id,ai_credits`,
    {
      method: "PATCH",
      headers: supabaseHeaders({ Prefer: "return=representation" }),
      body: JSON.stringify({ ai_credits: safeCredits }),
    }
  );

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`更新AI次数失败：${text}`);
  }

  const rows = await resp.json();
  return Number(rows?.[0]?.ai_credits || safeCredits);
}

async function writeCreditLog(userId, changeAmount, type, note = "") {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/ai_credit_logs`, {
      method: "POST",
      headers: supabaseHeaders(),
      body: JSON.stringify({
        user_id: userId,
        change_amount: changeAmount,
        type,
        note,
      }),
    });
  } catch (e) {
    console.error("write ai_credit_logs failed:", e);
  }
}

async function consumeOneCredit(userId) {
  const current = await getAiCredits(userId);

  if (current <= 0) {
    return { ok: false, credits: 0 };
  }

  const next = await setAiCredits(userId, current - 1);
  await writeCreditLog(userId, -1, "consume", "AI识图预扣1次");
  return { ok: true, credits: next };
}

async function refundOneCredit(userId, note = "AI识图失败返还1次") {
  const current = await getAiCredits(userId);
  const next = await setAiCredits(userId, current + 1);
  await writeCreditLog(userId, 1, "refund", note);
  return next;
}

function normalizeBaseUrl(baseUrl = "") {
  const clean = String(baseUrl || "").trim().replace(/\/+$/, "");
  if (!clean) return "";
  if (clean.endsWith("/chat/completions")) return clean;
  return `${clean}/chat/completions`;
}

async function callOwnOpenAiCompatible({ image, apiConfig }) {
  const apiKey = String(apiConfig?.apiKey || "").trim();
  const baseUrl = normalizeBaseUrl(apiConfig?.baseUrl || "");
  const model = String(apiConfig?.model || "").trim();

  if (!apiKey) throw new Error("请先在AI接口端填写API Key");
  if (!baseUrl || !baseUrl.startsWith("https://")) throw new Error("基础URL必须以 https:// 开头");
  if (!model) throw new Error("请先填写模型名称");

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: OCR_PROMPT },
            { type: "image_url", image_url: { url: image } },
          ],
        },
      ],
      temperature: 0,
      max_tokens: 1200,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || "自带API请求失败");
  }

  const content = data?.choices?.[0]?.message?.content;
  if (Array.isArray(content)) {
    const textPart = content.find((x) => x?.type === "text" || x?.text);
    return textPart?.text || "无法识别";
  }

  return String(content || "无法识别").trim();
}

async function callPlatformQwen(image) {
  const apiKey = process.env.QWEN_API_KEY;
  if (!apiKey) throw new Error("缺少 QWEN_API_KEY 环境变量");

  const response = await fetch(
    "https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen-vl-max",
        input: {
          messages: [
            {
              role: "user",
              content: [
                { image },
                { text: OCR_PROMPT },
              ],
            },
          ],
        },
      }),
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || data?.error?.message || "平台AI请求失败");
  }

  return (
    data.output?.choices?.[0]?.message?.content?.[0]?.text ||
    data.output?.text ||
    "无法识别"
  );
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { image, aiMode = "credits", apiConfig = null } = req.body || {};

  if (!image) {
    return res.status(400).json({ error: "No image" });
  }

  // 使用自己的API：不扣AI次数
  if (aiMode === "own_api") {
    try {
      const result = await callOwnOpenAiCompatible({ image, apiConfig });
      return res.status(200).json({ result, usedOwnApi: true });
    } catch (e) {
      return res.status(500).json({ error: e.message || "自带API识别失败" });
    }
  }

  // 使用平台AI次数：需要登录 + 有剩余次数
  const accessToken = getBearerToken(req);
  const userId = await getUserIdFromToken(accessToken);

  if (!userId) {
    return res.status(401).json({ error: "请先登录后再使用AI识图" });
  }

  let creditsAfterConsume = 0;
  let consumed = false;

  try {
    const consume = await consumeOneCredit(userId);
    if (!consume.ok) {
      return res.status(402).json({ error: "AI次数不足，请购买次数或使用自己的API", aiCredits: consume.credits });
    }

    consumed = true;
    creditsAfterConsume = consume.credits;

    const result = await callPlatformQwen(image);

    if (!result || result === "无法识别") {
      const refundedCredits = await refundOneCredit(userId, "AI未能识别，返还1次");
      return res.status(200).json({ result: "无法识别", aiCredits: refundedCredits });
    }

    return res.status(200).json({ result, aiCredits: creditsAfterConsume });
  } catch (e) {
    if (consumed) {
      try {
        const refundedCredits = await refundOneCredit(userId, "AI接口失败，返还1次");
        return res.status(500).json({ error: e.message || "AI识图失败", aiCredits: refundedCredits });
      } catch (refundErr) {
        return res.status(500).json({ error: `${e.message || "AI识图失败"}；次数返还失败：${refundErr.message}` });
      }
    }

    return res.status(500).json({ error: e.message || "AI识图失败" });
  }
}
