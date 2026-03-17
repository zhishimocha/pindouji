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
          model: "qwen-vl-plus",
          input: {
            messages: [
              {
                role: "user",
                content: [
                  { image: image },
                  {
                    text: "这是一张拼豆图纸。图纸底部有色号统计表，请直接读取统计表里的色号和数量。输出格式：色号-粒数，多个用逗号分隔，例如：A1-20,B3-150,H2-67。只输出数据，不要其他文字。如果找不到统计表就回复：无法识别"
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
