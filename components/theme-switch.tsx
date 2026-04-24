"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed right-5 top-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-lg border-[3px] border-[var(--line-color)] bg-[var(--accent-cyan)] text-black shadow-[5px_5px_0_0_var(--line-color)] transition-all hover:-translate-y-0.5"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
