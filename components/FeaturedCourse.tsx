import Link from "next/link";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";
import { CourseArt } from "./ui/CourseArt";
import { StatusBadge } from "./ui/StatusBadge";
import { SeatMeter } from "./ui/SeatMeter";
import { Countdown } from "./ui/Countdown";
import { Avatar } from "./ui/Avatar";
import { ArrowIcon, Button, LineIcon } from "./ui/Button";
import { courseLineLink } from "@/lib/line";
import { Reveal } from "./ui/Reveal";

/**
 * The available course is the HERO, not 1 of 6. Full-width, seats + schedule
 * + big instructor + loud CTA. Lime is spent only here on this page.
 */
export function FeaturedCourse({ course }: { course: Course }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-sm">
        <CourseArt course={course} big className="absolute inset-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

        <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* left: pitch */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <StatusBadge course={course} />
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-white/55">
                {course.category}
              </span>
            </div>

            <h3 className="max-w-xl font-display text-fluid-xl font-extrabold leading-[1.08] text-white">
              {course.title}
            </h3>
            <p className="mt-4 max-w-xl text-fluid-base leading-relaxed text-teal-50/80">
              {course.subtitle}
            </p>

            {/* schedule — shown clearly for available */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-aurora-300/15 bg-aurora-300/[0.04] backdrop-blur-sm px-4 py-3">
              <CalendarIcon />
              <span className="text-sm font-medium text-white/85">
                {course.schedule}
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href={courseLineLink(course.title, course.schedule)}
                external
                variant="lime"
                size="lg"
              >
                <LineIcon /> สอบถาม / จองที่นั่ง
              </Button>
              <Link
                href={`/courses/${course.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent"
              >
                ดูรายละเอียดคอร์ส
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* right: proof panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-5 flex items-center gap-3">
              <Avatar name={course.instructor.name} src={course.instructor.photoUrl} accent={course.accent} size={64} />
              <div>
                <p className="font-display font-semibold text-white">
                  {course.instructor.name}
                </p>
                <p className="text-xs text-white/50">{course.instructor.title}</p>
              </div>
            </div>

            <SeatMeter course={course} className="mb-6" />

            {course.launchDate && (
              <div className="mb-6">
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal-300/80">
                  เริ่มเรียนใน
                </p>
                <Countdown iso={course.launchDate} />
              </div>
            )}

            <div className="flex items-end justify-between border-t border-aurora-300/10 pt-4">
              <div>
                <p className="text-xs text-white/45">ราคาคอร์ส</p>
                <p className="font-display text-2xl font-bold text-white">
                  {priceFormatter.format(course.price)}
                </p>
              </div>
              {course.priceCompareAt && (
                <span className="font-mono text-sm text-white/35 line-through">
                  {priceFormatter.format(course.priceCompareAt)}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
