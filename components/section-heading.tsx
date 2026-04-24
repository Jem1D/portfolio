import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="ai-heading text-center text-3xl font-bold leading-tight sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 accent-line" />
    </div>
  );
}
