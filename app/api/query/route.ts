import { NextResponse } from "next/server"
import { GoogleGenAI } from "@google/genai";
import { projectsData, experiencesData, skillsData } from "@/lib/data"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const q = (body.q || "").toString().trim()
    if (!q) return NextResponse.json({ error: "missing q" }, { status: 400 })

    if (/^(hi|hello|hey|yo|hola|greetings)$/i.test(q)) {
      return NextResponse.json({
        answer: "Hello! I’m Jemil’s virtual assistant — you can ask me about his projects, experience, education, or skills.",
      })
    }

    // Highly condensed context building (This is where we save all the tokens!)
    const contextParts: string[] = []

    if (Array.isArray(projectsData) && projectsData.length > 0) {
      const pData = projectsData.map(p => 
        `- ${p.title}: ${p.description} [${Array.isArray(p.tags) ? p.tags.join(", ") : p.tags}]`
      ).join("\n")
      contextParts.push(`PROJECTS:\n${pData}`)
    }

    if (Array.isArray(experiencesData) && experiencesData.length > 0) {
      const eData = experiencesData.map(e => 
        `- ${e.title} at ${e.location} (${e.date}): ${e.description}`
      ).join("\n")
      contextParts.push(`EXPERIENCE:\n${eData}`)
    }

    if (Array.isArray(skillsData) && skillsData.length > 0) {
      contextParts.push(`SKILLS: ${skillsData.join(", ")}`)
    }

    const context = contextParts.join("\n\n")

    // Restored your original, detailed system instructions
    const systemInstruction = `
You are a professional virtual assistant for Jemil Dharia’s portfolio website.

Purpose:
- Help visitors learn about Jemil’s projects, experience, education, and skills.
- Provide concise, friendly, and relevant answers using third person (“Jemil” / “he”) when referring to Jemil.
- Base answers on the given context (projects, resume, skills, experiences).

Tone & rules:
- Do NOT say generic greetings like “Jemil welcomes inquiries” or “How can I help you today.”
- If a visitor asks what you can do, say you are Jemil's virtual assistant and can answer questions about his work.
- Always skip self-references like “I can assist you…” when answering questions about Jemil — go straight to helpful info.
- Keep answers short (1–3 sentences).
- For project questions: summarize what it is, tools used, and impact.
- For experience questions: state Jemil’s role and what he did.
- For skill questions: list or summarize key skills.
- If unrelated to Jemil’s profile, politely say you can only answer about Jemil’s professional work.
`.trim()

    const userPrompt = `Context:\n${context}\n\nQuestion: ${q}\n\nAnswer concisely and reference Jemil’s projects or experiences by title when relevant.`

    const geminiKey = process.env.GEMINI_API_KEY
    if (!geminiKey) {
      return NextResponse.json({ error: "Gemini API key missing" }, { status: 500 })
    }

    const ai = new GoogleGenAI({ apiKey: geminiKey });
    
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2, 
        maxOutputTokens: 500, 
      }
    })

    const answer = result.text?.trim() || 
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