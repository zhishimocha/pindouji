// cf function
export async function onRequest(context) {
  try {
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

    const body = await context.request.json();
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

    const resp = await fetch(
      "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      }
    );

    const text = await resp.text();

    return new Response(
      text || JSON.stringify({ error: "Empty response from DashScope" }),
      {
        status: resp.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err?.message || "Server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
