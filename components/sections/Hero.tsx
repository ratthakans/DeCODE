"use client";

import { Reveal } from "../ui/Reveal";
import { ArrowIcon, Button } from "../ui/Button";
import { getAvailableCourse } from "@/lib/courses";
import { OpenAI, Supabase, NextJsIcon, ClaudeIcon } from "@/components/ui/icons";
import { Countdown } from "../ui/Countdown";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const featured = getAvailableCourse();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container-x relative">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          
          {/* LEFT: Copy & CTA */}
          <div className="flex flex-col justify-center text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                เปิดรับรอบ กรกฎาคม 2026
              </div>
            </Reveal>

            <div className="mt-8 font-display text-5xl font-bold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                }}
              >
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }} className="inline-block mr-4">ลดเวลาทำงาน</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }} className="inline-block mr-4">10</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }} className="inline-block">เท่า</motion.span>
                <br />
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }} className="inline-block mr-4">ด้วย</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } } }} className="inline-block text-emerald-400">AI</motion.span>
              </motion.div>
            </div>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
                เลิกทำงานซ้ำซาก เปลี่ยน Claude และ Automation เป็นผู้ช่วยส่วนตัวที่เก่งที่สุดของคุณ
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/courses" variant="lime" size="lg">
                  ดูคอร์สทั้งหมด <ArrowIcon />
                </Button>
                <Button href="/concept" variant="ghost" size="lg" magnetic={false}>
                  ทำไมต้อง DeCODE
                </Button>
              </div>
            </Reveal>

            {/* Tools Logos Section */}
            <Reveal delay={0.32}>
              <div className="mt-16 border-t border-white/10 pt-8">
                <p className="mb-5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
                  Powered by real-world tools
                </p>
                <div className="flex flex-wrap items-center gap-8 text-white/40">
                  {/* Claude (Anthropic) */}
                  <div className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                    <ClaudeIcon className="h-6 w-6" />
                    <span className="font-sans text-sm font-bold tracking-tight">Claude</span>
                  </div>
                  {/* OpenAI */}
                  <div className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                    <OpenAI className="h-6 w-6" />
                    <span className="font-sans text-sm font-bold tracking-tight">OpenAI</span>
                  </div>
                  {/* Next.js */}
                  <div className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                    <NextJsIcon className="h-5 w-16" />
                  </div>
                  {/* Supabase */}
                  <div className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                    <Supabase className="h-6 w-6" />
                    <span className="font-sans text-sm font-bold tracking-tight">Supabase</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Instructor Poster */}
          <div className="relative mt-8 lg:mt-0">
            <Reveal delay={0.2} className="relative z-10 mx-auto w-full max-w-[460px]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[#0a0a0a]">
                <Image
                  src="/hero-mockup.jpg"
                  alt="DeCODE"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Poster Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-end">
                  {/* We can put something else here if needed, or leave it empty so the team image shines */}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
