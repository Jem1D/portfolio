"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [q, setQ] = useState("");
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    async function send() {
        if (!q.trim()) return;

        const question = q.trim();
        setLoading(true);
        setHistory((h) => [...h, { q: question, loading: true }]);

        try {
            const res = await fetch("/api/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ q: question }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Server returned an error status");
            }

            const answer = data?.answer ?? "I do not know";
            const sources = data?.sources ?? [];

            setHistory((h) =>
                h.slice(0, -1).concat([{ q: question, a: answer, sources }])
            );
            setQ("");

            setTimeout(() => {
                panelRef.current?.scrollTo({
                    top: panelRef.current.scrollHeight,
                    behavior: "smooth",
                });
            }, 50);
        } catch (err: any) {
            console.error("Fetch caught an error:", err);

            setHistory((h) =>
                h.slice(0, -1).concat([
                    {
                        q: question,
                        a: "I’m having a little trouble connecting right now. Please try again in a moment.",
                    },
                ])
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed bottom-5 right-5 z-[60] sm:bottom-6">
            <div className="flex flex-col items-end">
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="chip rounded-lg border-[3px] border-[var(--line-color)] bg-[var(--accent-cyan)] px-5 py-3 font-semibold text-black shadow-[5px_5px_0_0_var(--line-color)] transition hover:-translate-y-0.5 dark:bg-[var(--accent-gold)]"
                    aria-expanded={open}
                    aria-label="Open portfolio chat"
                >
                    Ask me about my work
                </button>

                {open && (
                    <div
                        ref={panelRef}
                        className="section-shell mt-3 flex h-[520px] w-96 max-w-[92vw] flex-col overflow-hidden rounded-2xl bg-[var(--bg)] backdrop-blur-md"
                    >
                        <div className="border-b border-[var(--line-color)] px-4 py-3">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-sm font-semibold">Portfolio assistant</div>
                                    <div className="mono text-xs text-[var(--muted)]">
                                        Ask about projects, skills, or timeline
                                    </div>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-sm text-[var(--muted)] hover:text-[var(--ink)]"
                                    aria-label="Close chat"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 space-y-3 overflow-auto px-4 py-3">
                            {history.length === 0 ? (
                                <div className="text-sm text-[var(--muted)]">
                                    Try asking for a project summary or skill set.
                                </div>
                            ) : null}

                            {history.map((h, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="text-xs text-[var(--muted)]">
                                        <strong>You</strong>: {h.q}
                                    </div>

                                    {h.a ? (
                                        <div className="rounded-lg border-2 border-[var(--line-color)] bg-[var(--bg-strong)] p-3 text-sm leading-relaxed text-[var(--ink)] shadow-[4px_4px_0_0_var(--line-color)]">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: (h.a || "").replace(/\n/g, "<br/>")
                                                }}
                                            />
                                            {Array.isArray(h.sources) && h.sources.length > 0 && (
                                                <div className="mt-2 text-xs text-[var(--muted)]">
                                                    Sources:{" "}
                                                    {h.sources.map((s: any, i: number) => (
                                                        <span key={s.id} className="mr-2">
                                                            <a
                                                                href={`/${s.file}`}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="underline"
                                                            >
                                                                [{i + 1}] {s.file}
                                                            </a>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-sm text-[var(--muted)]">Thinking...</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-[var(--line-color)] px-4 py-3">
                            <div className="flex gap-2">
                                <input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") send();
                                    }}
                                    placeholder="Ask a question"
                                    className="flex-1 rounded-md border-2 border-[var(--line-color)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] shadow-[3px_3px_0_0_var(--line-color)] focus:outline-none"
                                />
                                <button
                                    onClick={send}
                                    disabled={loading}
                                    className="chip inline-flex items-center justify-center rounded-md bg-[var(--accent-pink)] px-3 py-2 text-sm font-semibold text-black disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
