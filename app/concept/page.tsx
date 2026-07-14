import type { Metadata } from "next";
import { GradientField } from "@/components/ui/GradientField";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "แนวคิด",
  description:
    "แนวคิดของ DeCODE — The Intelligence Between Systems: เชื่อมความคิดสร้างสรรค์ของมนุษย์เข้ากับระบบที่ใช้งานได้จริง แล้วเปลี่ยน AI ให้เป็นความสามารถของธุรกิจ",
};

// Brand Tension — แก่นของแบรนด์เกิดจากแรงตึงระหว่างสองสิ่ง
const TENSIONS = [
  {
    a: "LOGIC",
    b: "CREATIVITY",
    body: "ความคิดสร้างสรรค์ที่ไม่มีระบบ นำไปใช้จริงไม่ได้ และระบบที่ไม่มีความคิดสร้างสรรค์ ก็สร้างสิ่งใหม่ไม่ได้ — เราสอนให้คิดอย่างสร้างสรรค์ พร้อมโครงสร้างที่ทำให้ความคิดนั้นเกิดขึ้นจริง",
  },
  {
    a: "HUMAN",
    b: "MACHINE",
    body: "AI ไม่ได้มาแทนมนุษย์ แต่มาขยายความสามารถ — มนุษย์กำหนดทิศทาง ใช้วิจารณญาณ และรับผิดชอบผลลัพธ์ ส่วน AI ประมวลผล ทำงานซ้ำ และเพิ่มความเร็ว",
  },
  {
    a: "CHAOS",
    b: "SYSTEM",
    body: "เครื่องมือเยอะเกิน ข้อมูลเยอะเกิน เปลี่ยนเร็วเกิน — เราเปลี่ยน Chaos ให้เป็น System ไม่ใช่ด้วยสูตรสำเร็จ แต่ด้วยความเข้าใจที่ทำให้คุณปรับตัวต่อได้เอง",
  },
];

// The DeCODE Journey — การเปลี่ยนผ่านที่ทุกประสบการณ์ควรพาไปถึง
const JOURNEY = [
  { step: "UNDERSTAND", gloss: "เข้าใจว่า AI ทำอะไรได้ และควรใช้ตรงไหน" },
  { step: "STRUCTURE", gloss: "เปลี่ยนความรู้เป็น Framework และ Workflow" },
  { step: "DIRECT", gloss: "กำกับ AI ให้ทำงานตามทิศทางและมาตรฐาน" },
  { step: "BUILD", gloss: "สร้างงาน Product และระบบที่ใช้ได้จริง" },
  { step: "CONNECT", gloss: "เชื่อมคน ข้อมูล และเครื่องมือเข้าด้วยกัน" },
  { step: "TRANSFORM", gloss: "เปลี่ยนวิธีทำงานของทีมและองค์กร" },
  { step: "EXPAND", gloss: "สร้างได้มากกว่าข้อจำกัดเดิมของตัวเอง" },
];

// Emotional Territory — เรียนกับเราแล้วคุณควรรู้สึกแบบนี้
const FEELINGS = [
  { en: "I can understand this.", th: "AI ไม่ใช่เรื่องไกลตัวหรือซับซ้อนเกินไป" },
  { en: "I can control this.", th: "คุณกำหนดทิศทางและมาตรฐานได้ ไม่ใช่แค่ผู้ใช้" },
  { en: "I can build with this.", th: "ความรู้เปลี่ยนเป็นงาน Product และระบบจริง" },
  { en: "I can move faster.", th: "สิ่งที่เคยใช้เวลานาน ถูกออกแบบใหม่ได้" },
  { en: "I am not falling behind.", th: "ปรับตัวทันโลกที่เปลี่ยน โดยไม่ต้องวิ่งตามทุก Tool" },
  { en: "I have more capacity.", th: "ขยายขอบเขตของสิ่งที่หนึ่งคนหรือหนึ่งธุรกิจทำได้" },
];

export default function ConceptPage() {
  return (
    <>
      {/* hero — the core concept */}
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <GradientField className="h-[130%]" />
        <div className="container-x relative pb-16">
          <Reveal>
            <h1 className="max-w-4xl text-balance font-display text-fluid-3xl font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              The Intelligence
              <br />
              <span className="aurora-text">Between Systems</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-2xl text-fluid-lg leading-relaxed text-white/65">
              DeCODE อยู่ระหว่างสองโลก — โลกของความคิดสร้างสรรค์และความเป็นมนุษย์
              กับโลกของระบบและเทคโนโลยีที่ใช้งานได้จริง
              หน้าที่ของเราคือเชื่อมสองโลกนี้เข้าด้วยกัน
              แล้วเปลี่ยน AI จากสิ่งที่ดูไกลตัว ให้เป็นสิ่งที่คุณควบคุม สั่งงาน
              และใช้สร้างผลลัพธ์ได้จริง
            </p>
          </Reveal>
        </div>
      </section>

      {/* brand tension */}
      <section className="container-x py-20">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-balance font-display text-fluid-xl font-semibold leading-tight tracking-[-0.03em] text-white">
              แก่นของเราเกิดจากแรงตึง
              <br />
              ระหว่างสองสิ่งที่ต้องอยู่ด้วยกัน
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {TENSIONS.map((t) => (
            <RevealItem key={t.a}>
              <div className="flex h-full flex-col rounded-[20px] bg-white/[0.04] p-8">
                <p className="font-grotesk text-lg font-semibold tracking-[0.04em]">
                  <span className="text-white">{t.a}</span>
                  <span className="mx-2 aurora-text">×</span>
                  <span className="text-white">{t.b}</span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* the DeCODE journey */}
      <section className="bg-gradient-to-b from-aurora-200/[0.03] to-transparent py-24">
        <div className="container-x">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="font-display text-fluid-xl font-semibold leading-tight tracking-[-0.03em] text-white">
                ทุกประสบการณ์ คือการเปลี่ยนผ่าน
              </h2>
              <p className="mt-4 leading-relaxed text-white/55">
                จากความสับสนสู่ความเข้าใจ จากการถาม AI สู่การกำกับ AI
                จากผู้ใช้ สู่ Operator, Builder และ Architect
              </p>
            </div>
          </Reveal>

          <RevealGroup className="flex flex-col gap-px">
            {JOURNEY.map((j, i) => (
              <RevealItem key={j.step}>
                <div className="group flex flex-col gap-1.5 border-t border-white/[0.05] py-5 transition-colors first:border-t-0 hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="flex items-baseline gap-4 sm:w-64 sm:shrink-0">
                    <span className="font-grotesk text-xs font-semibold tabular-nums aurora-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-grotesk text-lg font-semibold uppercase tracking-[0.06em] text-white">
                      {j.step}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed text-white/55 sm:text-base">{j.gloss}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* emotional territory */}
      <section className="container-x py-24">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-fluid-xl font-semibold tracking-[-0.03em] text-white">
              เรียนกับเราแล้ว คุณควรรู้สึกแบบนี้
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEELINGS.map((f) => (
            <RevealItem key={f.en}>
              <div className="flex h-full flex-col rounded-[20px] bg-white/[0.04] p-7">
                <p className="font-display text-lg font-semibold text-white">“{f.en}”</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{f.th}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* closing statement */}
      <section className="container-x pb-8 pt-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-balance font-display text-fluid-2xl font-semibold leading-[1.12] tracking-[-0.03em] text-white">
              Close the gap.
              <br />
              <span className="aurora-text">Build beyond human capacity.</span>
            </p>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/55">
              เราไม่ได้สอนให้คุณวิ่งตามอนาคต
              แต่สอนให้เข้าใจ กำกับ และสร้างอนาคตนั้นด้วยตัวเอง
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/courses" variant="aurora" size="lg">
                ดู THE CORE 8 <ArrowIcon />
              </Button>
              <Button href="/faq" variant="ghost" size="lg" magnetic={false}>
                ยังมีคำถามอยู่?
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
