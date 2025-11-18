// scripts/ingestFromData.ts
import "dotenv/config"
import { buildStoreFromData } from "../lib/vectorStore"

async function main() {
  try {
    console.log("building embeddings from lib data")
    await buildStoreFromData()
    console.log("wrote public/embeddings.json")
    process.exit(0)
  } catch (err) {
    console.error("ingest error", err)
    process.exit(1)
  }
}

main()
