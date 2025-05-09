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
        I hold a degree in <span className="font-bold">Computer Engineering</span> and am currently pursuing a Master of Science in Computer Science at <span className="font-bold">Arizona State University</span>. My journey as a developer has been shaped by my passion for building impactful software solutions and solving complex problems. I've worked on a wide range of projects, from creating generative AI tools and cloud-based ETL pipelines to developing scalable web applications. My core stack includes <span className="font-bold">Python, JavaScript, React.js, Node.js, and AWS</span>, and I’m always exploring new technologies to enhance my skills.
      </p>
      <p className="mb-3">
        What excites me most about programming is the perfect balance of <span className="font-bold">creativity</span> and <span className="font-bold">logic</span>—the thrill of crafting solutions that are both innovative and efficient. I’m constantly seeking opportunities to contribute as a software developer while continuing to grow and evolve in the tech landscape.
      </p>

      <p>
        When I am not coding, I enjoy hitting the gym, cycling, watching Sci-Fi movies, and engaging in outdoor adventures. I also love playing a bit of sports, exploring cities, and immersing myself in new experiences.
      </p>
    </motion.section>
  );
}
