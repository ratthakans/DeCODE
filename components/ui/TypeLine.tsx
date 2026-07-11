"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Terminal-style typing line — the "prompt" motif of the brand. */
export function TypeLine({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[i % phrases.length];
    let delay = deleting ? 34 : 62;

    if (!deleting && text === current) {
      delay = 1600;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, reduce]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}
