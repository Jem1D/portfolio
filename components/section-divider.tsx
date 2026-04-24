"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-10 hidden w-full max-w-5xl items-center gap-4 sm:flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="h-[3px] flex-1 bg-[var(--line-color)]" />
      <span className="mono chip rounded-md bg-[var(--accent-pink)] px-2 py-1 text-xs font-bold uppercase tracking-[0.1em] text-black">
        Neural Build Log
      </span>
      <div className="h-[3px] flex-1 bg-[var(--line-color)]" />
    </motion.div>
  );
}
