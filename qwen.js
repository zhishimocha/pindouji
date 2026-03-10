export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image } = req.body;
  if (!image) return res.status(400).json({ error: 'No image' });

  try {
    const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.QWEN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen-vl-plus',
        input: {
          messages: [{
            role: 'user',
            content: [
              { image: image },
              { text: '这是一张拼豆作品图片。请识别图中用到的拼豆色号（格式如A1、B12、C3等）和每个色号大概用了多少粒。只输出格式：色号-粒数，多个用逗号分隔，例如：A1-200,B3-150。如果无法识别就回复：无法识别' }
            ]
          }]
        }
      })
    });

    const data = await response.json();
    const result = data.output?.choices?.[0]?.message?.content?.[0]?.text || '无法识别';
    res.status(200).json({ result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
