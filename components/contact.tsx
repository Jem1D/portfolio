"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="section-shell mb-20 w-full max-w-5xl rounded-2xl p-6 text-center sm:mb-28 sm:p-10"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-3 text-[var(--muted)]">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          dhariajemil@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mx-auto mt-10 flex max-w-2xl flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg border-2 border-[var(--line-color)] bg-white px-4 shadow-[4px_4px_0_0_var(--line-color)] transition-all focus:-translate-y-0.5 focus:outline-none dark:bg-transparent"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52 rounded-lg border-2 border-[var(--line-color)] bg-white p-4 shadow-[4px_4px_0_0_var(--line-color)] transition-all focus:-translate-y-0.5 focus:outline-none dark:bg-transparent"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
