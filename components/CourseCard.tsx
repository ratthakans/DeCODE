"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";
import { CourseArt } from "./ui/CourseArt";
import { StatusBadge } from "./ui/StatusBadge";
import { Avatar } from "./ui/Avatar";
import { CourseAction } from "./course/CourseAction";
import { notifyLineLink, courseLineLink } from "@/lib/line";
import { MouseEvent } from "react";

/** A4 Vertical Poster style for CourseCard with Cursor Spotlight */
export function CourseCard({ course }: { course: Course }) {
  const router = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  const available = course.status === "available";
  const ctaHref = available
    ? courseLineLink(course.title, course.schedule)
    : notifyLineLink(course.title);
  const ctaLabel = available ? "จองที่นั่ง" : "แจ้งเตือน";

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-sm aspect-[1/1.414] cursor-pointer"
      onClick={() => router.push(`/courses/${course.slug}`)}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 block z-0">
        <CourseArt course={course} className="h-full w-full opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
        {/* Grainy overlay */}
        <div className="absolute inset-0 bg-grainy" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Top badges */}
        <div className="absolute left-4 top-4 flex justify-between right-4">
          <StatusBadge course={course} size="sm" />
        </div>

        {/* Content at the bottom */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 text-shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Avatar name={course.instructor.name} src={course.instructor.photoUrl} accent={course.accent} size={48} />
            <span className="text-sm font-medium text-white/80">{course.instructor.name}</span>
          </div>

          <h3 className="font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-emerald-400">
            {course.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
            {course.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="font-mono text-sm font-semibold text-white/70 tabular-nums">
              {priceFormatter.format(course.price)}
            </span>
            <div onClick={(e) => e.stopPropagation()}>
              <CourseAction
                available={available}
                ctaHref={ctaHref}
                ctaLabel={ctaLabel}
                courseSlug={course.slug}
                courseTitle={course.title}
                size="sm"
                className="border-white/20 hover:border-emerald-400 hover:text-emerald-400 backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
