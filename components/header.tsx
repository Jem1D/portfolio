"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 top-0 z-[999] h-[5.75rem] w-full -translate-x-1/2 border-b-[3px] border-[var(--line-color)] bg-[var(--bg-strong)] px-4 sm:top-5 sm:h-[4.6rem] sm:w-[min(96%,72rem)] sm:rounded-xl sm:border-[3px] sm:px-6 sm:shadow-[6px_6px_0_0_var(--line-color)]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex h-full flex-col justify-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="mono hidden shrink-0 text-xs font-bold tracking-[0.16em] text-[var(--muted)] sm:block">
            PORTFOLIO
          </p>

          <nav className="w-full">
            <ul className="flex flex-wrap items-center justify-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] sm:gap-2 sm:text-[0.76rem]">
              {links.map((link) => (
                <motion.li
                  className="relative flex items-center justify-center"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "relative z-10 flex w-full items-center justify-center rounded-md border-2 border-transparent px-2.5 py-1.5 transition hover:-translate-y-0.5 hover:text-[var(--ink)] sm:px-3 sm:py-2",
                      {
                        "text-[var(--ink)]": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-md border-2 border-[var(--line-color)] bg-[var(--accent-gold)]"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="mono hidden shrink-0 rounded-md border-2 border-[var(--line-color)] bg-[var(--accent-lime)] px-2 py-1 text-[10px] font-bold text-black sm:block">
            STATUS: LIVE
          </p>
        </div>
      </motion.div>
    </header>
  );
}
