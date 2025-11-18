// lib/embeddings.ts
import axios from "axios"

export async function embed(text: string) {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error("OPENAI API KEY missing")
  const resp = await axios.post(
    "https://api.openai.com/v1/embeddings",
    { input: text, model: "text-embedding-3-small" },
    { headers: { Authorization: `Bearer ${key}` } }
  )
  return resp.data.data[0].embedding
}

export function cosineSim(a: number[], b: number[]) {
  let dot = 0
  let na = 0
  let nb = 0
  const len = Math.min(a.length, b.length)
  for (let i = 0; i < len; i++) {
    dot += a[i] * b[i]
    na += a[i] * a[i]
    nb += b[i] * b[i]
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-10)
}
