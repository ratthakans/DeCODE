import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/courses";
import { priceFormatter } from "@/lib/courses";
import { Button, LineIcon } from "./ui/Button";
import { courseLineLink } from "@/lib/line";
import { Reveal } from "./ui/Reveal";

/** Featured (available) course promo — pitch on the left, instructor on the right. */
export function FeaturedCourse({ course }: { course: Course }) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[26px] border border-white/16 bg-ink-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_100%_0,rgba(45,212,191,0.18),transparent_60%)]" />
        <div className="relative grid md:grid-cols-[1.2fr_0.9fr]">
          {/* left — pitch */}
          <div className="p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#04211d] aurora-bg">
              ● {course.statusLabel} · เหลือ {course.seatsAvailable} ที่นั่ง
            </span>
            <h3 className="mt-5 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              {course.title}
              {course.edition && (
                <span className="mt-2.5 block font-grotesk text-[0.42em] font-semibold aurora-text">
                  {course.edition}
                </span>
              )}
            </h3>
            <p className="mt-4 max-w-[46ch] text-white/60">{course.subtitle}</p>

            <ul className="mt-6 grid gap-2.5">
              {course.outcomes.slice(0, 3).map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-white/90">
                  <svg className="mt-0.5 h-[18px] w-[18px] shrink-0 stroke-aurora-200" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex items-baseline gap-2">
                <b className="font-grotesk text-3xl font-bold tracking-[-0.02em] text-white tabular-nums">
                  {priceFormatter.format(course.price)}
                </b>
                {course.priceCompareAt && (
                  <s className="font-grotesk text-white/35">{priceFormatter.format(course.priceCompareAt)}</s>
                )}
              </div>
              <Button href={courseLineLink(course.title, course.schedule)} external variant="aurora" size="md">
                <LineIcon /> จองที่นั่ง
              </Button>
            </div>
          </div>

          {/* right — instructor */}
          <div className="relative min-h-[320px] overflow-hidden bg-ink-100">
            {course.instructor.photoUrl && (
              <Image
                src={course.instructor.photoUrl}
                alt={course.instructor.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[50%_30%]"
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.28),transparent_55%),linear-gradient(0deg,rgba(6,8,9,0.55),transparent_60%)]" />
            <div className="absolute right-4 top-4 z-[2] min-w-[180px] rounded-[14px] border border-white/20 bg-black/60 p-4 backdrop-blur-md">
              <div className="font-grotesk text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-white">
                {course.duration.replace(/\s*\(.*\)/, "")}
              </div>
              <div className="mt-1 text-[11px] text-white/60">Intensive Bootcamp</div>
              <div className="mt-3 text-[12.5px] font-semibold text-aurora-200">
                🔥 เหลือ {course.seatsAvailable} / {course.seatsTotal} ที่นั่งสุดท้าย
              </div>
            </div>
            <div className="absolute bottom-5 left-5 z-[2]">
              <div className="font-bold text-white">{course.instructor.name}</div>
              <div className="font-grotesk text-[11px] text-aurora-200">{course.instructor.title}</div>
            </div>
            <Link href={`/courses/${course.slug}`} className="absolute inset-0 z-[3]" aria-label={course.title} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
