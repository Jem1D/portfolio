"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profilePic from "@/public/profile.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-8 w-full max-w-5xl sm:mb-6"
    >
      <div className="section-shell scanline overflow-hidden rounded-2xl p-6 sm:p-10">
        <div className="mono mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Profile: Jemil Dharia</span>
          <span className="chip bg-[var(--accent-lime)] px-2 py-1 text-black">
            AI x Full Stack
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={profilePic}
                alt="Jemil's portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-xl border-[3px] border-[var(--line-color)] object-cover shadow-[6px_6px_0_0_var(--line-color)] sm:h-28 sm:w-28"
              />
            </motion.div>

            <motion.span
              className="absolute -bottom-2 -right-2 rounded-md border-2 border-[var(--line-color)] bg-[var(--accent-gold)] px-2 py-1 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-3 text-left">
            <div className="chip group rounded-lg bg-white px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)] hover:shadow-[5px_5px_0_0_var(--line-color)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]">
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Focus
              </p>
              <p className="font-semibold">GenAI Apps</p>
            </div>
            <div className="chip group rounded-lg bg-white px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-lime)] hover:shadow-[5px_5px_0_0_var(--line-color)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]">
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Stack
              </p>
              <p className="font-semibold">Python + React</p>
            </div>
            <div className="chip group rounded-lg bg-white px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-gold)] hover:shadow-[5px_5px_0_0_var(--line-color)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]">
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Cloud
              </p>
              <p className="font-semibold">AWS + Databricks</p>
            </div>
            <div className="chip group rounded-lg bg-white px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-pink)] hover:shadow-[5px_5px_0_0_var(--line-color)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]">
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Current Role
              </p>
              <p className="font-semibold">XR + Teaching</p>
            </div>
          </div>
        </div>

        <motion.h1
          className="mb-8 mt-7 max-w-4xl text-justify text-2xl font-medium leading-[1.35] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hey, I am Jemil.</span> I build software
          where
          <span className="bg-[var(--accent-cyan)] px-1.5 font-bold text-black">
            {" "}
            AI systems, product thinking, and scalable engineering{" "}
          </span>
          meet. I specialize in
          <span className="font-bold">
            {" "}
            Python, C++, Node.js, React, and cloud-native development
          </span>
          {" "}to turn ideas into useful products.
        </motion.h1>

        <motion.div
          className="flex flex-col items-start justify-center gap-3 text-base font-semibold sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group chip flex items-center gap-2 rounded-lg bg-[var(--ink)] px-6 py-3 text-[var(--bg)] outline-none transition hover:-translate-y-0.5 dark:bg-[var(--accent-gold)] dark:text-black"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Start a Conversation
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <a
            className="group chip flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--accent-gold)] px-6 py-3 text-black outline-none transition hover:-translate-y-0.5 dark:bg-[var(--accent-cyan)] dark:text-black"
            href="/CV.pdf"
            download
          >
            Download Resume
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>

          <a
            className="chip flex cursor-pointer items-center gap-2 rounded-lg bg-white p-3 text-2xl transition hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]"
            href="https://linkedin.com/in/jemildharia/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="chip flex cursor-pointer items-center gap-2 rounded-lg bg-white p-3 text-2xl transition hover:-translate-y-0.5 hover:bg-[var(--accent-lime)] dark:bg-transparent dark:hover:bg-[rgba(255,255,255,0.08)]"
            href="https://github.com/Jem1D"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
