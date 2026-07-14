import type { Metadata } from "next";
import { courses, getComingSoonCourses } from "@/lib/courses";
import { Reveal } from "@/components/ui/Reveal";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { CourseComparison } from "@/components/sections/CourseComparison";
import { CoursePhilosophy } from "@/components/sections/CoursePhilosophy";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "คอร์สเรียน",
  description:
    "THE CORE 8 — หลักสูตร AI ของ DeCODE: Operate, Delegate, Create, Design, Build, Automate, Transform, Master ตั้งแต่ระดับบุคคลจนถึงองค์กร",
};

export default function CoursesPage() {
  const comingSoon = getComingSoonCourses();

  return (
    <>
      <section className="relative overflow-hidden bg-black pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-x relative">
          <Reveal>
            <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] aurora-text">
              หลักสูตรทั้งหมดของ DeCODE
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              THE CORE <span className="aurora-text">8</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-fluid-base leading-relaxed text-white/60">
              ไม่ใช่คลาสสอนเครื่องมือแยกกัน แต่คือระบบพัฒนาความสามารถ 8 สเตจ
              ตั้งแต่ระดับบุคคลจนถึงองค์กร — เริ่มที่ OPERATE จบที่ MASTER
              เลือกเส้นทางตามบทบาทของคุณ ไม่ต้องเรียนครบ
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-sm text-white/45">
              1 คอร์สเปิดจองตอนนี้ · อีก {comingSoon.length} คอร์สกดแจ้งเตือนไว้ก่อนได้
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

        <CourseExplorer />
      </section>

      <CourseComparison />
      <CoursePhilosophy />

      <CtaSection />
    </>
  );
}
