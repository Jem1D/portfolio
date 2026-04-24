import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group chip flex h-[3rem] w-[11rem] items-center justify-center gap-2 rounded-lg bg-[var(--accent-pink)] font-semibold uppercase tracking-[0.08em] text-black outline-none transition-all hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <>
          Send Signal{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
