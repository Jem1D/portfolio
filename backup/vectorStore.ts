// lib/vectorStore.ts
import fs from "fs"
import path from "path"
import { embed as openaiEmbed, cosineSim } from "./embeddings"
import { getAllProfileTexts } from "./data"

export type Chunk = {
  id: string
  file: string
  text: string
  embedding: number[]
}

const EMB_PATH = path.join(process.cwd(), "public", "embeddings.json")

export function loadStore(): Chunk[] {
  if (!fs.existsSync(EMB_PATH)) return []
  try {
    const raw = fs.readFileSync(EMB_PATH, "utf8")
    return JSON.parse(raw) as Chunk[]
  } catch {
    return []
  }
}

function chunkText(text: string, maxWords = 400) {
  const words = text.split(/\s+/)
  const chunks: string[] = []
  let i = 0
  while (i < words.length) {
    const slice = words.slice(i, i + maxWords)
    chunks.push(slice.join(" "))
    i += Math.floor(maxWords * 0.8)
  }
  return chunks
}

/**
 * Build embeddings from lib/data.ts and write public/embeddings.json
 * Run this once locally to avoid serverless time limits
 */
export async function buildStoreFromData(): Promise<Chunk[]> {
  const items = getAllProfileTexts()
  const out: Chunk[] = []
  for (let i = 0; i < items.length; i++) {
    const it = items[i]
    const chunks = chunkText(it.text, 400)
    for (let j = 0; j < chunks.length; j++) {
      const txt = chunks[j]
      const id = `${it.id}::${j}`
      const emb = await openaiEmbed(txt)
      out.push({ id, file: it.file, text: txt, embedding: emb })
    }
  }
  fs.writeFileSync(EMB_PATH, JSON.stringify(out, null, 2))
  return out
}

/**
 * Query top K chunks. If public/embeddings.json is missing it returns an empty array.
 */
export async function queryTopK(q: string, topK = 4) {
  const store = loadStore()
  if (!store || store.length === 0) return []
  const qEmb = await openaiEmbed(q)
  const scored = store.map((s) => ({ s, score: cosineSim(qEmb, s.embedding) }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK).map((x) => ({ id: x.s.id, file: x.s.file, text: x.s.text, score: x.score }))
}
