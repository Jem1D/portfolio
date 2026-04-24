"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  side: "left" | "right";
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  side,
  link, // 👈 add link to props
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isLeft = side === "left";

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <section
          className={`relative overflow-hidden rounded-xl border-[3px] border-[var(--line-color)] bg-[var(--bg-strong)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--line-color)] sm:h-[21rem] ${
            isLeft ? "sm:pl-8" : "sm:pr-8"
          }`}
        >
          <div
            className={`flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[52%] sm:pt-10 ${
              isLeft ? "sm:ml-[18rem]" : "sm:pl-10 sm:pr-2"
            }`}
          >
            <h3 className="text-2xl font-bold leading-tight">{title}</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="chip rounded-md bg-white px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-black dark:bg-transparent dark:text-[var(--ink)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={500}
            height={400}
            className={`absolute top-8 hidden w-[28.25rem] border-[3px] border-[var(--line-color)] rounded-lg shadow-[7px_7px_0_0_var(--line-color)] transition sm:block
              group-hover:translate-y-2 group-hover:scale-[1.02]
              ${
                isLeft
                  ? "-left-40 group-hover:translate-x-3 group-hover:rotate-2"
                  : "-right-40 group-hover:-translate-x-3 group-hover:-rotate-2"
              }
            `}
          />
        </section>
      </Link>
    </motion.div>
  );
}
