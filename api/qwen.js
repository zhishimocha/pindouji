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
              { text: '这是一张拼豆图纸。图纸底部有色号统计表，请直接读取统计表里的色号和数量。输出格式：色号-粒数，多个用逗号分隔，例如：A1-20,B3-150,H2-67。只输出数据，不要其他文字。如果找不到统计表就回复：无法识别' }
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
