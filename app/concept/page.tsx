import type { Metadata } from "next";
import { GradientField } from "@/components/ui/GradientField";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button, ArrowIcon } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "แนวคิด",
  description:
    "ทำไม DeCODE ถึงมีอยู่ — เราปิด GAP การเรียนรู้ AI ระหว่างคนที่ใช้เป็นกับคนที่ยังไม่เริ่ม",
};

const gaps = [
  {
    before: "คู่แข่งร่างสัญญาด้วย Claude ใน 3 นาที",
    after: "คุณยังก๊อปไปวางใน ChatGPT ฟรี แล้วแก้เองทีละบรรทัด",
  },
  {
    before: "ทีมข้างๆ ปล่อยแคมเปญได้ 3 ตัวต่อสัปดาห์",
    after: "คุณยังรอกราฟิก 1 ชิ้นอยู่ 3 วัน",
  },
  {
    before: "เจ้าของร้านข้างบ้านทำคอนเทนต์เองทุกวัน",
    after: "คุณยังจ้างฟรีแลนซ์เดือนละหลายพัน",
  },
];

const beliefs = [
  {
    n: "01",
    t: "เครื่องมือไม่ใช่ปัญหา วิธีสั่งงานต่างหาก",
    b: "คนส่วนใหญ่มี AI เดียวกับมืออาชีพ แต่ได้ผลลัพธ์คนละชั้น เพราะไม่มีใครสอนวิธี ‘บรีฟ’ ให้มันทำงานจริง เราสอนตรงนี้",
  },
  {
    n: "02",
    t: "ลงมือทำ ชนะการนั่งฟัง",
    b: "คุณจะไม่ได้แค่สไลด์กลับบ้าน แต่ได้ระบบจริงที่เซตในคลาส เดินออกจากห้องแล้วใช้ต่อได้เลย",
  },
  {
    n: "03",
    t: "ไม่ต้องเป็นสายเทคก็ทำได้",
    b: "เจ้าของร้าน คนทำงาน ผู้บริหาร — ทุกคนสั่ง AI ด้วยภาษาคนได้ ไม่ต้องท่องจำโค้ดสักบรรทัด",
  },
];

export default function ConceptPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <GradientField className="h-[130%]" />
        <div className="container-x relative pb-16">
          <Reveal>
            <span className="eyebrow">แนวคิดของ DeCODE</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-fluid-3xl font-semibold leading-[0.98] text-white">
              AI ไม่ได้มาแทนคุณ
              <br />
              แต่คนที่ใช้ AI เป็น
              <span className="text-aurora-200"> กำลังจะแทน</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-2xl text-fluid-lg leading-relaxed text-white/65">
              ทุกวันที่ผ่านไป ช่องว่างระหว่างคนที่สั่ง AI เป็นกับคนที่ยังไม่เริ่ม
              กว้างขึ้นเรื่อยๆ DeCODE เกิดมาเพื่อปิดช่องว่างนั้น —
              ก่อนที่มันจะกว้างเกินกว่าจะข้าม
            </p>
          </Reveal>
        </div>
      </section>

      {/* the specific pain — shame you can picture */}
      <section className="container-x py-20">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow mb-4 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-aurora-200/50" />
              GAP ที่คุณอาจไม่ทันสังเกต
            </span>
            <h2 className="text-balance font-display text-fluid-xl font-semibold leading-tight text-white">
              มันไม่ใช่ &ldquo;AI ไปเร็วเกินจะตามทัน&rdquo; ลอยๆ
              <br />
              มันคือภาพที่เจ็บกว่านั้น
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="space-y-4">
          {gaps.map((g, i) => (
            <RevealItem key={i}>
              <div className="grid items-center gap-4 rounded-3xl border border-white/10 bg-ink-100/40 p-6 sm:grid-cols-[1fr_auto_1fr]">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aurora-200/10 font-mono text-xs text-aurora-200">
                    เขา
                  </span>
                  <p className="font-display font-semibold text-white">
                    {g.before}
                  </p>
                </div>
                <div className="hidden text-white/25 sm:block">
                  <ArrowIcon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-3 sm:justify-end sm:text-right">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral/10 font-mono text-xs text-coral sm:order-2">
                    คุณ
                  </span>
                  <p className="text-sm leading-relaxed text-white/55 sm:order-1">
                    {g.after}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl text-center font-display text-fluid-base italic text-white/45">
            ความอายที่เห็นภาพได้ ขายดีกว่าความกลัวนามธรรม —
            เราไม่ได้อยากให้คุณกลัว เราอยากให้คุณ<span className="text-aurora-200 not-italic"> เริ่ม</span>
          </p>
        </Reveal>
      </section>

      {/* beliefs */}
      <section className="border-y border-white/10 bg-ink-50/40 py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="mb-14 max-w-2xl font-display text-fluid-xl font-semibold leading-tight text-white">
              บทบาทของ DeCODE คือ<span className="text-gradient-teal">ตัวช่วยปิด GAP</span> นั้น
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {beliefs.map((b) => (
              <RevealItem key={b.n}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-100/50 p-7">
                  <span className="font-mono text-sm text-aurora-200">{b.n}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                    {b.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {b.b}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* mission statement */}
      <section className="container-x py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-balance font-display text-fluid-2xl font-semibold leading-[1.15] text-white">
              เราไม่ได้สอนให้คุณ<span className="text-white/40">รู้จัก</span> AI
              <br />
              เราสอนให้คุณ<span className="text-aurora-200">สั่งงาน</span>มันเป็น
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/courses" variant="aurora" size="lg">
                เลือกคอร์สของคุณ <ArrowIcon />
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
