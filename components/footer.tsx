import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mb-12 mt-10 w-full max-w-6xl px-4 sm:px-6">
      <div className="section-shell rounded-xl px-5 py-4 text-center">
        <small className="mono mb-2 block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          &copy; 2026 Jemil Dharia. All rights reserved.
        </small>
        <p className="text-sm text-[var(--muted)]">
          <span className="font-semibold text-[var(--ink)]">Build profile:</span>{" "}
          Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email, Vercel.
        </p>
      </div>
    </footer>
  );
}
