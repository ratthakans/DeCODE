"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";

/** Modern course card — cover photo, instructor, clean pricing. */
export function CourseCard({ course }: { course: Course }) {
  const router = useRouter();
  const available = course.status === "available";
  const go = () => router.push(`/courses/${course.slug}`);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      onClick={go}
      role="link"
      tabIndex={0}
      aria-label={course.title}
      onKeyDown={(e) => e.key === "Enter" && go()}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white/[0.04] transition-colors hover:bg-white/[0.06]"
    >
      {/* cover */}
      <div className="relative h-40 overflow-hidden bg-ink-200">
        {course.coverImage && (
          <Image
            src={course.coverImage}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/70" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-black/50 px-2.5 py-1 font-grotesk text-[10.5px] font-semibold text-white backdrop-blur-md">
          {course.category}
        </span>
        <span className="absolute right-3.5 top-3.5 rounded-full bg-aurora-200/15 px-2.5 py-1 text-[11px] font-semibold text-aurora-100 backdrop-blur-md">
          {course.statusLabel}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        {course.edition && (
          <span className="font-grotesk text-xs font-semibold text-aurora-200">{course.edition}</span>
        )}
        <h4 className="mt-1 font-display text-xl font-semibold tracking-tight text-white">{course.title}</h4>
        <p className="mt-2 line-clamp-2 text-[0.88rem] leading-relaxed text-white/55">{course.subtitle}</p>

        <div className="mt-3.5 flex items-center gap-2.5">
          {course.instructor.photoUrl && (
            <Image
              src={course.instructor.photoUrl}
              alt={course.instructor.name}
              width={26}
              height={26}
              className="h-[26px] w-[26px] rounded-full object-cover"
            />
          )}
          <span className="text-xs text-white/60">{course.instructor.name}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-grotesk font-semibold text-white/90">
            {priceFormatter.format(course.price)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-aurora-200">
            {available ? "จองที่นั่ง" : "ดูรายละเอียด"}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
