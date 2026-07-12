import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { ArrowIcon } from "../ui/Button";

export function ConceptTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-mint/50" />
              THE DECODE CONCEPT
              <span className="h-px w-6 bg-mint/50" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              ยุคนี้คนที่ใช้ AI เป็น <br className="hidden sm:block" />
              จะวิ่งนำคนอื่นไป <span className="text-aurora-200">10 เท่า</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-5">
          {/* The problem (spans 2 cols) */}
          <Reveal delay={0.2} className="md:col-span-2">
            <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
              <div>
                <h3 className="mb-3 font-display text-2xl font-semibold text-white">
                  คู่แข่งร่างสัญญาด้วย Claude ใน 3 นาที
                </h3>
                <p className="max-w-md leading-relaxed text-white/55">
                  ในขณะที่คุณยังใช้เวลาเป็นวัน — ช่องว่างนี้ขยายขึ้นทุกวัน DeCODE เกิดมาเพื่อติดเครื่องมือให้คุณไล่ตามและแซงหน้า
                </p>
              </div>
              <Link
                href="/concept"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-mint transition-colors hover:text-mint-soft"
              >
                อ่านแนวคิดเต็ม
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Automate */}
          <Reveal delay={0.3}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
              <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-mint/70">01</span>
              <h3 className="mb-2 font-display text-xl font-semibold text-white">Automate Everything</h3>
              <p className="text-sm leading-relaxed text-white/50">
                เปลี่ยนงานซ้ำซากให้เป็นระบบอัตโนมัติด้วย AI
              </p>
            </div>
          </Reveal>

          {/* Build faster */}
          <Reveal delay={0.4}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
              <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-mint/70">02</span>
              <h3 className="mb-2 font-display text-xl font-semibold text-white">Build Ideas Faster</h3>
              <p className="text-sm leading-relaxed text-white/50">
                เปลี่ยนไอเดียในหัวเป็นชิ้นงานจริงได้ในชั่วข้ามคืน
              </p>
            </div>
          </Reveal>

          {/* System, not prompts (spans 2 cols) */}
          <Reveal delay={0.5} className="md:col-span-2">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
              <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-mint/70">03</span>
              <h3 className="mb-3 font-display text-2xl font-semibold text-white">
                ไม่ใช่แค่ Prompt แต่คือ System
              </h3>
              <p className="max-w-md leading-relaxed text-white/55">
                เราไม่ได้สอนให้คุณก๊อปคำสั่ง แต่สอนให้เข้าใจโครงสร้างและตรรกะของการสั่งงาน AI ให้สอดคล้องกับระบบธุรกิจของคุณ
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
