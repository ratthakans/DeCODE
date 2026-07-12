import Link from "next/link";
import { Course, priceFormatter } from "@/lib/courses";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CourseArt } from "@/components/ui/CourseArt";
import { Avatar } from "@/components/ui/Avatar";
import { SeatMeter } from "@/components/ui/SeatMeter";
import { CourseProof } from "@/components/ui/CourseProof";
import { Countdown } from "@/components/ui/Countdown";
import { CourseAction } from "./CourseAction";

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4">
      <span className="shrink-0 text-white/45">{label}</span>
      <span
        className={`text-right ${
          highlight ? "font-medium text-mint" : "text-white/80"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function CourseHero({
  course,
  available,
  ctaHref,
  ctaLabel,
}: {
  course: Course;
  available: boolean;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-x relative">
        <Reveal>
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-mint"
          >
            <ArrowIcon className="rotate-180 transition-transform group-hover:-translate-x-1" />
            คอร์สทั้งหมด
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge course={course} />
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-white/55">
                  {course.category}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-2xl text-balance font-display text-fluid-2xl font-bold leading-[1.05] text-white">
                {course.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-fluid-base leading-relaxed text-white/65">
                {course.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-xl leading-relaxed text-white/60">
                {course.description}
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-7 flex flex-wrap gap-2">
                {course.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* sticky booking card */}
          <Reveal delay={0.14} direction="left">
            <aside className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 shadow-sm backdrop-blur">
                <CourseArt course={course} className="h-28 w-full" />
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Avatar
                      name={course.instructor.name}
                      src={course.instructor.photoUrl}
                      accent={course.accent}
                      size={80}
                    />
                    <div>
                      <p className="font-display font-semibold text-white">
                        {course.instructor.name}
                      </p>
                      <p className="text-xs text-white/50">
                        {course.instructor.title}
                      </p>
                    </div>
                  </div>

                  {/* schedule */}
                  <div className="mb-5 space-y-3 border-y border-white/10 py-5 text-sm">
                    <Row label="รูปแบบ" value={course.duration} />
                    <Row label="ระดับ" value={course.level} />
                    <Row
                      label="รอบเรียน"
                      value={course.schedule}
                      highlight={available}
                    />
                  </div>

                  {/* seats — real number, same urgency as card */}
                  {available ? (
                    <SeatMeter course={course} className="mb-5" />
                  ) : (
                    <div className="mb-5">
                      <CourseProof course={course} />
                    </div>
                  )}

                  {available && course.launchDate && (
                    <div className="mb-5">
                      <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mint/80">
                        เริ่มเรียนใน
                      </p>
                      <Countdown iso={course.launchDate} />
                    </div>
                  )}

                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-white/45">ราคาคอร์ส</p>
                      <p className="font-display text-3xl font-bold text-white tabular-nums">
                        {priceFormatter.format(course.price)}
                      </p>
                    </div>
                    {course.priceCompareAt && (
                      <span className="font-mono text-sm text-white/35 line-through">
                        {priceFormatter.format(course.priceCompareAt)}
                      </span>
                    )}
                  </div>

                  <CourseAction
                    available={available}
                    ctaHref={ctaHref}
                    ctaLabel={ctaLabel}
                    courseSlug={course.slug}
                    courseTitle={course.title}
                    className="w-full"
                  />
                  <p className="mt-3 text-center text-xs text-white/40">
                    กดแล้วเปิด Line พร้อมข้อความคอร์สนี้ให้อัตโนมัติ
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
