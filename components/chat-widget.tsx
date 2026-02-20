"use client"

import { useState, useRef, useEffect } from "react"

export default function ChatWidget() {
    const [open, setOpen] = useState(false)
    const [q, setQ] = useState("")
    const [history, setHistory] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const panelRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    // async function send() {
    //     if (!q.trim()) return
    //     const question = q.trim()
    //     setLoading(true)
    //     setHistory((h) => [...h, { q: question, loading: true }])
    //     try {
    //         const res = await fetch("/api/query", {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },
    //             body: JSON.stringify({ q: question })
    //         })
    //         const data = await res.json()
    //         const answer = data?.answer ?? "I do not know"
    //         const sources = data?.sources ?? []
    //         setHistory((h) => h.slice(0, -1).concat([{ q: question, a: answer, sources }]))
    //         setQ("")
    //         setTimeout(() => {
    //             panelRef.current?.scrollTo({ top: panelRef.current.scrollHeight, behavior: "smooth" })
    //         }, 50)
    //     } catch (err) {
    //         setHistory((h) => h.slice(0, -1).concat([{ q: question, a: "Error contacting server" }]))
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    async function send() {
        if (!q.trim()) return
        const question = q.trim()
        setLoading(true)
        setHistory((h) => [...h, { q: question, loading: true }])
        
        try {
            const res = await fetch("/api/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ q: question })
            })
            
            const data = await res.json()
            
            // Check if the response status is 4xx or 5xx
            if (!res.ok) {
                console.error("Backend Error Response:", data)
                throw new Error(data.error || "Server returned an error status")
            }

            const answer = data?.answer ?? "I do not know"
            const sources = data?.sources ?? []
            
            setHistory((h) => h.slice(0, -1).concat([{ q: question, a: answer, sources }]))
            setQ("")
            
            setTimeout(() => {
                panelRef.current?.scrollTo({ top: panelRef.current.scrollHeight, behavior: "smooth" })
            }, 50)
            
        } catch (err: any) {
            // Keep the error in the console for your own debugging
            console.error("Fetch caught an error:", err)
            
            // Show a friendly, generic message to the user instead of the raw error
            setHistory((h) => h.slice(0, -1).concat([{ 
                q: question, 
                a: "I'm having a little trouble connecting right now. Please try again in a moment!" 
            }]))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed right-5 bottom-5 z-[60] sm:bottom-6">
            <div className="flex flex-col items-end">
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="rounded-full border-2 border-blue-300/80 bg-slate-900/80 text-white px-5 py-3 shadow-lg hover:scale-[1.02] transform transition"
                    aria-expanded={open}
                    aria-label="Open portfolio chat"
                >
                    Ask me about my work
                </button>

                {/* panel opens above the button */}
                {open && (
                    <div
                        ref={panelRef}
                        className="mt-3 w-96 max-w-[92vw] h-[520px] rounded-2xl flex flex-col overflow-hidden
             border border-gray-300/60 dark:border-gray-700/70
             bg-white/95 dark:bg-gray-900/95 
             backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                    >

                        <div className="px-4 py-3 border-b dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-semibold">Portfolio assistant</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Ask about projects skills or timeline</div>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
                                    aria-label="Close chat"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 px-4 py-3 overflow-auto space-y-3">
                            {history.length === 0 ? (
                                <div className="text-sm text-gray-500 dark:text-gray-400">Try asking for a project summary or skill set</div>
                            ) : null}

                            {history.map((h, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="text-xs text-slate-700 dark:text-slate-300"><strong>You</strong>: {h.q}</div>

                                    {h.a ? (
                                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm leading-relaxed text-slate-800 dark:text-slate-100">
                                            <div dangerouslySetInnerHTML={{ __html: (h.a || "").replace(/\n/g, "<br/>") }} />
                                            {Array.isArray(h.sources) && h.sources.length > 0 && (
                                                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Sources:{" "}
                                                    {h.sources.map((s: any, i: number) => (
                                                        <span key={s.id} className="mr-2">
                                                            <a href={`/${s.file}`} target="_blank" rel="noreferrer" className="underline">
                                                                [{i + 1}] {s.file}
                                                            </a>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-sm text-gray-500">Thinking...</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="px-4 py-3 border-t dark:border-gray-800">
                            <div className="flex gap-2">
                                <input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") send()
                                    }}
                                    placeholder="Ask a question"
                                    className="flex-1 rounded-md border px-3 py-2 text-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    onClick={send}
                                    disabled={loading}
                                    className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-3 py-2 text-sm disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
