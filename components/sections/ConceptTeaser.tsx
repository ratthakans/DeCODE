import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { ArrowIcon } from "../ui/Button";

export function ConceptTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-neutral-950 py-24 md:py-32 bg-grainy">
      <div className="container-x">
        <div className="mb-12 flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-aurora-400/50" />
              THE DECODE CONCEPT
              <span className="h-px w-6 bg-aurora-400/50" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              ยุคนี้คนที่ใช้ AI เป็น <br className="hidden sm:block" />
              จะวิ่งนำคนอื่นไป <span className="text-aurora-400">10 เท่า</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
          {/* Bento Box 1: The Problem (Spans 2 cols) */}
          <Reveal delay={0.2} className="md:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aurora-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    คู่แข่งร่างสัญญาด้วย Claude ใน 3 นาที
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    ในขณะที่คุณยังคงใช้เวลาเป็นวัน นี่คือช่องว่างที่กำลังขยายตัวขึ้นทุกวัน DeCODE เกิดมาเพื่อติดเครื่องมือให้คุณไล่ตามและแซงหน้า
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/concept"
                    className="inline-flex items-center gap-2 text-sm font-medium text-aurora-400 transition-colors hover:text-aurora-300"
                  >
                    อ่านแนวคิดเต็ม
                    <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bento Box 2: Speed (1 col) */}
          <Reveal delay={0.3}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-aurora-900/40 to-black p-8 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora-500/20 mb-6">
                <svg className="w-6 h-6 text-aurora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Automate Everything</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                เปลี่ยนงานซ้ำซากให้เป็นระบบอัตโนมัติด้วย AI
              </p>
            </div>
          </Reveal>

          {/* Bento Box 3: Quality (1 col) */}
          <Reveal delay={0.4}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Build Ideas Faster</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                เปลี่ยนไอเดียในหัวเป็นชิ้นงานจริงได้ในชั่วข้ามคืน
              </p>
            </div>
          </Reveal>

          {/* Bento Box 4: Architecture (Spans 2 cols) */}
          <Reveal delay={0.5} className="md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" className="text-aurora-500">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  ไม่ใช่แค่ Prompt แต่คือ System
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md">
                  เราไม่ได้สอนให้คุณก๊อปปี้คำสั่ง แต่เราสอนให้คุณเข้าใจโครงสร้างและตรรกะของการสั่งงาน AI ให้สอดคล้องกับระบบของธุรกิจคุณ
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
