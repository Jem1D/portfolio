"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="section-shell mb-20 w-full max-w-5xl scroll-mt-28 rounded-2xl p-6 sm:mb-28 sm:p-10"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#fffdf6" : "rgba(255, 255, 255, 0.06)",
                boxShadow:
                  theme === "light"
                    ? "4px 4px 0 0 #111111"
                    : "4px 4px 0 0 rgba(255, 255, 255, 0.55)",
                border:
                  theme === "light"
                    ? "2px solid #111111"
                    : "2px solid rgba(255,255,255,0.55)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.6rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.55rem solid #111111"
                    : "0.55rem solid rgba(255, 255, 255, 0.6)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#ffd84f" : "#23252a",
                fontSize: "1.5rem",
                color: theme === "light" ? "#111111" : "#c9ff3f",
                boxShadow:
                  theme === "light"
                    ? "0 0 0 3px #111111"
                    : "0 0 0 3px rgba(255,255,255,0.35)",
              }}
            >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 text-[var(--muted)]">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-[var(--muted)]">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
