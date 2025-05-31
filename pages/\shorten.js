const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { url } = req.body;
  if (!url || !url.startsWith("http")) {
    return res.status(400).json({ error: "URL inválida" });
  }

  const slug = Math.random().toString(36).substring(2, 8); // Ex: a1b2c3

  try {
    await fetch(`${UPSTASH_URL}/set/${slug}/${encodeURIComponent(url)}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    });

    return res.status(200).json({ slug });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao salvar no Upstash" });
  }
}
