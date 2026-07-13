import type { Metadata } from "next";
import { courses, getAvailableCourse, getComingSoonCourses } from "@/lib/courses";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { CourseCard } from "@/components/CourseCard";
import { GradientField } from "@/components/ui/GradientField";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "คอร์สเรียน",
  description:
    "คอร์ส AI แบบ onsite ของ DeCODE — Claude Operator, 10X Engineer, Aesthetic Front-End, Co-Worker, Godmode และ One-Man Startup",
};

export default function CoursesPage() {
  const featured = getAvailableCourse();
  const comingSoon = getComingSoonCourses();

  return (
    <>
      <section className="relative overflow-hidden bg-black pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-x relative">
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-white/80">คอร์สทั้งหมด</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              เลือกเส้นทางของคุณ — <br />
              <span className="text-white/50">แล้วสั่ง AI ให้ทำงานแทน</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-fluid-base leading-relaxed text-white/60">
              1 คอร์สเปิดจองได้เดี๋ยวนี้ และอีก {comingSoon.length} คอร์สกำลังจะตามมา —
              กดจองสิทธิ์ไว้ก่อนได้ เราจะแจ้งเตือนเมื่อเปิด
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            หลักสูตรทั้งหมด ({courses.length})
          </span>
          <span className="hairline flex-1" />
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <RevealItem key={c.id}>
              <CourseCard course={c} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CtaSection />
    </>
  );
}
