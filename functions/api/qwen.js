export async function onRequest(context) {
  if (context.request.method === "GET") {
    return new Response(
      JSON.stringify({ ok: true, message: "Cloudflare qwen function is alive" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (context.request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { image } = await context.request.json();

    if (!image) {
      return new Response(
        JSON.stringify({ error: "No image" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const apiKey = context.env.QWEN_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing QWEN_API_KEY" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const response = await fetch(
      "https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen-vl-max",
          input: {
            messages: [
              {
                role: "user",
                content: [
                  { image: image },
                  {
                    text: `这是一张拼豆图纸的色号统计表。请仔细读取统计表中每个色号和对应的粒数。

规则：
1. 色号格式为"字母前缀+数字"，字母前缀只能是以下之一：A、B、C、D、E、F、G、H、M。例如：A7、B14、G18、H2、M3。
2. 字母容易混淆，请特别注意区分：G和E、G和C、H和N、B和P，以图中实际字母为准。
3. 色号后面紧跟的那个独立整数才是粒数，粒数可能是1位到4位数字（如9、37、156、1280），不要截断或遗漏数字。
4. 统计表中色号和粒数是配对出现的，一一对应。

输出格式：色号-粒数，多个用逗号分隔。例如：A7-24,B14-93,G18-9,H2-156
只输出数据，不要任何解释。找不到统计表就回复：无法识别`
                  }
                ]
              }
            ]
          }
        })
      }
    );

    const text = await response.text();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Empty response from DashScope" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return new Response(
        JSON.stringify({ error: "DashScope returned invalid JSON", raw: text }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: data?.message || data?.error || "DashScope request failed",
          raw: data
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const result =
      data?.output?.choices?.[0]?.message?.content?.[0]?.text || "无法识别";

    return new Response(
      JSON.stringify({ result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message || "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
