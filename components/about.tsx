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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        

        I hold a degree in <span className="font-bold">Computer Engineering </span> and am currently pursuing a Master of Science in Computer Science at <span className="font-bold">Arizona State University</span>. Over the years, I’ve developed a deep passion for creating impactful software solutions and tackling challenging problems. My journey has taken me through diverse projects, from building deep learning models to designing scalable web applications. My core stack includes <span className="font-bold"> Python, React.js, Node.js, and MongoDB</span>, and I’m always eager to expand my knowledge by exploring new technologies and frameworks.
      </p>
      <p className="mb-3">
        What excites me most about programming is the blend of <span className="font-bold"> creativity</span> and <span className="font-bold">logic</span> it demands—the thrill of finding elegant solutions to complex problems is unmatched. I’m currently seeking opportunities to contribute as a software developer while continuing to grow professionally.
      </p>

      <p>
        When I am not coding, I enjoy hitting the gym, cycling, watching Sci-Fi movies, and engaging in outdoor adventures. I also love playing a bit of sports, exploring cities, and immersing myself in new experiences.
      </p>
    </motion.section>
  );
}
