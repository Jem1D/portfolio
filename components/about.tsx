"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="section-shell mb-20 w-full max-w-5xl scroll-mt-28 rounded-2xl p-6 leading-8 sm:mb-28 sm:p-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4 text-left text-lg leading-8 text-[var(--muted)]">
        Hi! I have a background in <span className="font-bold">Computer Engineering</span> and am currently getting my Master's in Computer Science at <span className="font-bold">Arizona State University</span>. I fell in love with software development because it lets me build real things out of abstract logic. It is the ultimate creative outlet for problem-solvers.
      </p>
      <p className="mb-4 text-left text-lg leading-8 text-[var(--muted)]">
        I spend most of my time working with <span className="font-bold">Python, JavaScript, React.js, Node.js, and AWS</span>. Recently, I have been having a lot of fun building out generative AI tools, cloud pipelines, and full-stack web apps, but I am always eager to pick up whatever new tech gets the job done best.
      </p>
      <p className="text-left text-lg leading-8 text-[var(--muted)]">
        When I am not staring at a screen, I am probably lifting weights, on my bike, or exploring a new city. I love a good outdoor adventure just as much as a great Sci-Fi movie.
      </p>
    </motion.section>
  );
}
