import type { Metadata } from "next";
import { getComingSoonCourses } from "@/lib/courses";
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
            <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              THE CORE <span className="aurora-text">8</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-fluid-base leading-relaxed text-white/60">
              ระบบพัฒนาความสามารถ 8 สเตจ จาก OPERATE ถึง MASTER
              เลือกเส้นทางตามบทบาท ไม่ต้องเรียนครบ
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
        <CourseExplorer />
      </section>

      <CourseComparison />
      <CoursePhilosophy />

      <CtaSection />
    </>
  );
}
