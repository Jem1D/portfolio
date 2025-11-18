import { NextResponse } from "next/server"
import axios from "axios"
import { projectsData, experiencesData, skillsData, links } from "@/lib/data"
import { cvLatex } from "@/lib/cvLatex" // new import: your LaTeX resume as text

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const q = (body.q || "").toString().trim()
    if (!q) return NextResponse.json({ error: "missing q" }, { status: 400 })

    // Short-circuit greetings (no API call needed)
    if (/^(hi|hello|hey|yo|hola|greetings)$/i.test(q)) {
      return NextResponse.json({
        answer:
          "Hello! I’m Jemil’s virtual assistant — you can ask me about his projects, experience, education, or skills.",
      })
    }

    // Build context from your data file
    const contextParts: string[] = []

    if (Array.isArray(projectsData)) {
      for (const p of projectsData) {
        contextParts.push(
          `Project: ${p.title}\nDescription: ${p.description}\nTags: ${Array.isArray(p.tags) ? p.tags.join(", ") : p.tags}\nLink: ${p.link}`
        )
      }
    }

    if (Array.isArray(experiencesData)) {
      for (const e of experiencesData) {
        contextParts.push(
          `Experience: ${e.title}\nLocation: ${e.location}\nDescription: ${e.description}\nDate: ${e.date}`
        )
      }
    }

    if (Array.isArray(skillsData)) {
      contextParts.push(`Skills: ${skillsData.join(", ")}`)
    }

    if (Array.isArray(links)) {
      const linkText = links.map((l: any) => `${l.name} ${l.hash}`).join(" | ")
      contextParts.push(`Navigation links: ${linkText}`)
    }

    // Include LaTeX CV content from lib/cvLatex.ts if present
    if (typeof cvLatex === "string" && cvLatex.trim().length > 0) {
      // Short label so it is clear in the context
      contextParts.push(`CV LaTeX Source:\n${cvLatex}`)
    }

    const context = contextParts.join("\n\n---\n\n")

    const system = `
You are a professional virtual assistant for Jemil Dharia’s portfolio website.

Purpose:
- Help visitors learn about Jemil’s projects, experience, education, and skills.
- Provide concise, friendly, and relevant answers using third person (“Jemil” / “he”).
- Base answers on the given context (projects, resume, skills, experiences).

Tone & rules:
- Do NOT say generic greetings like “Jemil welcomes inquiries” or “How can I help you today.”
- If a visitor says “hello,” respond briefly and naturally, e.g. “Hello! I’m Jemil’s virtual assistant — feel free to ask about his work or experience.”
- Always skip self-references like “I can assist you…” — go straight to helpful info.
- Keep answers short (1–3 sentences).
- For project questions: summarize what it is, tools used, and impact.
- For experience questions: state Jemil’s role and what he did.
- For skill questions: list or summarize key skills.
- If unrelated to Jemil’s profile, politely say you can only answer about Jemil’s professional work.
`.trim()

    const userPrompt = `Context:\n${context}\n\nQuestion: ${q}\n\nAnswer concisely and reference Jemil’s projects or experiences by title when relevant.`

    const openaiKey = process.env.OPENAI_API_KEY
    if (!openaiKey)
      return NextResponse.json({ error: "openai key missing" }, { status: 500 })

    const resp = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.2,
        max_tokens: 800,
      },
      { headers: { Authorization: `Bearer ${openaiKey}` } }
    )

    const answer =
      resp.data.choices?.[0]?.message?.content?.trim() ||
      "I’m not sure about that, but you can ask me about Jemil’s projects, skills, or experience."

    return NextResponse.json({ answer })
  } catch (err: any) {
    console.error("query error:", err)
    return NextResponse.json(
      { error: err?.message ?? "server error" },
      { status: 500 }
    )
  }
}
