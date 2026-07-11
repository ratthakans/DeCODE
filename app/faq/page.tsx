import type { Metadata } from "next";
import { faqs, type FaqItem } from "@/lib/faq";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GradientField } from "@/components/ui/GradientField";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย",
  description:
    "เคลียร์ข้อสงสัยก่อนสมัครคอร์ส AI กับ DeCODE — พื้นฐาน อุปกรณ์ ใบกำกับภาษี และอื่นๆ",
};

const groups: FaqItem["group"][] = ["ก่อนสมัคร", "การเรียน", "องค์กร & เอกสาร"];

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <GradientField className="h-[130%]" intensity={0.7} />
        <div className="container-x relative pb-10">
          <Reveal>
            <span className="eyebrow">คำถามที่พบบ่อย</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-fluid-2xl font-extrabold leading-[1.05] text-white">
              เคลียร์ข้อลังเลให้จบ{" "}
              <span className="text-gradient-teal">ก่อนทักแชต</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-fluid-base leading-relaxed text-white/60">
              รวมคำถามที่คนถามบ่อยที่สุด ตอบตรง สั้น มั่นใจ —
              ถ้ายังไม่เจอคำตอบ ทักไลน์มาถามได้เลย
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x space-y-14 py-16">
        {groups.map((g, gi) => {
          const items = faqs.filter((f) => f.group === g);
          return (
            <Reveal key={g} delay={gi * 0.05}>
              <div>
                <h2 className="mb-5 flex items-center gap-3 font-display text-lg font-bold text-white">
                  <span className="font-mono text-sm text-teal-300">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  {g}
                </h2>
                <FaqAccordion items={items} />
              </div>
            </Reveal>
          );
        })}
      </section>

      <CtaSection />
    </>
  );
}
