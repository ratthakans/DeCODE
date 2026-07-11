"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

type Variant = "lime" | "teal" | "ghost" | "outline";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink select-none";

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  lime: "bg-[linear-gradient(110deg,#10b981,45%,#34d399,55%,#10b981)] bg-[length:200%_100%] animate-shimmer text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5",
  teal: "bg-neutral-800 text-white hover:bg-neutral-700", // Flat dark secondary button
  ghost: "bg-transparent text-white hover:bg-white/5 border border-white/10",
  outline: "bg-transparent text-white/70 border border-white/20 hover:border-white/50 hover:bg-white/5",
};

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "lime",
  size = "md",
  className = "",
  external,
  magnetic = true,
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const inner = (
    <motion.span
      ref={ref}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </motion.span>
  );

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cls}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...linkProps}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cls}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 ${className}`} aria-hidden>
      <path d="M12 2C6.5 2 2 5.7 2 10.2c0 4 3.6 7.4 8.4 8 .3.07.78.22.9.5.1.26.06.66.03.92l-.14.87c-.04.26-.2 1.02.9.56 1.1-.46 5.9-3.48 8.06-5.96C21.4 13.4 22 11.9 22 10.2 22 5.7 17.5 2 12 2ZM8.1 12.9H6.06a.53.53 0 0 1-.53-.53V8.3a.53.53 0 0 1 1.06 0v3.54H8.1a.53.53 0 0 1 0 1.06Zm2.08-.53a.53.53 0 0 1-1.06 0V8.3a.53.53 0 0 1 1.06 0v4.07Zm4.77 0a.53.53 0 0 1-.36.5.55.55 0 0 1-.17.03.53.53 0 0 1-.43-.21l-2.08-2.83v2.51a.53.53 0 0 1-1.06 0V8.3a.53.53 0 0 1 .36-.5.53.53 0 0 1 .6.18l2.09 2.84V8.3a.53.53 0 0 1 1.06 0v4.07Zm3.35-2.57a.53.53 0 0 1 0 1.06h-1.5v.98h1.5a.53.53 0 0 1 0 1.06h-2.03a.53.53 0 0 1-.53-.53V8.3a.53.53 0 0 1 .53-.53h2.03a.53.53 0 0 1 0 1.06h-1.5v.97h1.5Z" />
    </svg>
  );
}
