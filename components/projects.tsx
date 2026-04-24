"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="section-shell mb-20 w-full max-w-5xl scroll-mt-28 rounded-2xl p-6 sm:p-10"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project
            key={index}
            {...project}
            index={index}
            side={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
