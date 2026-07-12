"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";
import { StatusBadge } from "./ui/StatusBadge";

/** Cinematic poster card — a moody cover, glass edge, blueprint grid, teal on hover. */
export function CourseCard({ course, index }: { course: Course; index?: number }) {
  const router = useRouter();
  const available = course.status === "available";
  const go = () => router.push(`/courses/${course.slug}`);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      onClick={go}
      role="link"
      tabIndex={0}
      aria-label={course.title}
      onKeyDown={(e) => e.key === "Enter" && go()}
      className="glass-edge group relative flex aspect-[5/6] cursor-pointer flex-col overflow-hidden rounded-[20px] border border-white/10 bg-ink-100 transition-[transform,border-color,box-shadow] duration-300 hover:border-mint/40"
    >
      {/* cover */}
      <div className="blueprint absolute inset-0">
        {course.coverImage ? (
          <Image
            src={course.coverImage}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(150deg,#0c3b36,#000_80%)]" />
        )}
        <div className="scrim-cine absolute inset-0" />
      </div>

      {/* top row */}
      <div className="relative z-10 flex items-start justify-between gap-2 p-4">
        <StatusBadge course={course} size="sm" />
        <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-white/75 backdrop-blur-sm">
          {course.category}
        </span>
      </div>

      {/* bottom */}
      <div className="relative z-10 mt-auto p-5">
        {typeof index === "number" && (
          <span className="font-mono text-[11px] tracking-[0.1em] text-aurora-200">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="mt-1.5 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-[#f8fbfa]">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.86rem] leading-relaxed text-white/55">
          {course.subtitle}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-semibold tabular-nums text-white/90">
              {priceFormatter.format(course.price)}
            </span>
            {course.priceCompareAt && (
              <span className="font-mono text-xs text-white/35 line-through">
                {priceFormatter.format(course.priceCompareAt)}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint">
            {available ? "จองที่นั่ง" : "ดูรายละเอียด"}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
