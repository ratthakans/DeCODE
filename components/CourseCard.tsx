"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";
import { StatusBadge } from "./ui/StatusBadge";
import { Avatar } from "./ui/Avatar";

/** Editorial poster card — full-bleed cover, quiet chrome, teal on hover. */
export function CourseCard({ course }: { course: Course }) {
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
      className="group relative flex aspect-[3/4] cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-100 transition-colors duration-300 hover:border-mint/30"
    >
      {/* cover */}
      <div className="absolute inset-0">
        {course.coverImage ? (
          <Image
            src={course.coverImage}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(150deg,#0c3b36,#000_80%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
      </div>

      {/* top row: status + category */}
      <div className="relative z-10 flex items-start justify-between gap-2 p-5">
        <StatusBadge course={course} size="sm" />
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-white/70 backdrop-blur-sm">
          {course.category}
        </span>
      </div>

      {/* bottom: identity + pitch + price */}
      <div className="relative z-10 mt-auto p-5">
        <div className="mb-3 flex items-center gap-2.5">
          <Avatar name={course.instructor.name} src={course.instructor.photoUrl} accent={course.accent} size={26} />
          <span className="text-xs font-medium text-white/70">{course.instructor.name}</span>
        </div>

        <h3 className="font-display text-xl font-bold leading-tight text-white">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/55">
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

      {/* teal wash on hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/5 bg-gradient-to-t from-mint/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
