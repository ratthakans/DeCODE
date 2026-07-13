import type { Course } from "@/lib/courses";
import { accentMap } from "@/lib/accents";
import Image from "next/image";

/** Shows real cover image if available, else clean fallback. */
export function CourseArt({
  course,
  className = "",
  big = false,
}: {
  course: Course;
  className?: string;
  big?: boolean;
}) {
  const a = accentMap[course.accent];
  
  if (course.coverImage) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <Image 
          src={course.coverImage}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
          {course.category}
        </span>
      </div>
    );
  }

  // Clean fallback
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden
      style={{
        background: `linear-gradient(150deg, #111, #000 80%)`,
      }}
    >
      <div
        className="absolute -right-1/4 -top-1/4 h-[120%] w-[80%] rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${a.from}, transparent 65%)`,
        }}
      />
      <span
        className="absolute bottom-4 left-5 font-display leading-none opacity-90"
        style={{
          color: a.text,
          fontSize: big ? "5rem" : "2.5rem",
        }}
      >
        {a.glyph}
      </span>
      <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-white/70 backdrop-blur">
        {course.category}
      </span>
    </div>
  );
}
