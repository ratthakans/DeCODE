"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/** Dim, contained aurora ribbons — a whisper of green over mostly-black. */
type Ribbon = {
  base: number; amp: number; w1: number; w2: number; sp: number; ph: number; h: number;
  col: [string, string, string, string, string]; a: number;
};
const RIBBONS: Ribbon[] = [
  { base: 0.62, amp: 0.09, w1: 0.0045, w2: 0.013, sp: 0.05, ph: 0, h: 0.7,
    col: ["rgba(16,185,129,0)", "rgba(16,185,129,.12)", "rgba(52,211,153,.20)", "rgba(110,231,183,.10)", "rgba(16,185,129,0)"], a: 0.5 },
  { base: 0.70, amp: 0.11, w1: 0.0032, w2: 0.010, sp: -0.037, ph: 2.1, h: 0.8,
    col: ["rgba(6,78,59,0)", "rgba(13,148,136,.10)", "rgba(45,212,191,.16)", "rgba(94,234,212,.10)", "rgba(6,78,59,0)"], a: 0.42 },
  { base: 0.56, amp: 0.07, w1: 0.006, w2: 0.017, sp: 0.072, ph: 4.3, h: 0.55,
    col: ["rgba(52,211,153,0)", "rgba(110,231,183,.12)", "rgba(52,211,153,.12)", "rgba(103,232,249,.08)", "rgba(52,211,153,0)"], a: 0.34 },
];

const BLOCKS = " ▁▂▃▄▅▆▇█";
const WAVE_N = 41;

function buildWave(wt: number): string {
  let s = "";
  for (let i = 0; i < WAVE_N; i++) {
    const v = (Math.sin(i * 0.4 + wt) + Math.sin(i * 0.19 - wt * 1.4) * 0.6 + 1.6) / 3.2;
    s += BLOCKS[Math.max(0, Math.min(8, Math.round(v * 8)))];
  }
  return s;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wave, setWave] = useState(() => buildWave(0));

  // ── aurora canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, raf = 0, t = 0;
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const stars = () => {
      ctx.save();
      for (let i = 0; i < 80; i++) {
        const sx = (i * 137.5) % W, sy = (i * 71.3) % (H * 0.9);
        ctx.globalAlpha = 0.2 + 0.35 * Math.abs(Math.sin(i * 1.7 + t * 0.4));
        ctx.fillStyle = "#fff";
        ctx.fillRect(sx, sy, 1, 1);
      }
      ctx.restore();
    };

    const ribbon = (r: Ribbon) => {
      const step = 16, top: Array<[number, number]> = [], bot: Array<[number, number]> = [];
      for (let px = -60; px <= W + 60; px += step) {
        const y = r.base * H + Math.sin(px * r.w1 + t * r.sp) * r.amp * H +
          Math.sin(px * r.w2 - t * r.sp * 1.7 + r.ph) * r.amp * H * 0.42;
        top.push([px, y]); bot.push([px, y + r.h * H]);
      }
      ctx.beginPath();
      ctx.moveTo(top[0][0], top[0][1]);
      for (let i = 1; i < top.length; i++) ctx.lineTo(top[i][0], top[i][1]);
      for (let j = bot.length - 1; j >= 0; j--) ctx.lineTo(bot[j][0], bot[j][1]);
      ctx.closePath();
      const g = ctx.createLinearGradient(0, r.base * H - r.amp * H, 0, r.base * H + r.h * H);
      g.addColorStop(0, r.col[0]); g.addColorStop(0.12, r.col[1]); g.addColorStop(0.30, r.col[2]);
      g.addColorStop(0.52, r.col[3]); g.addColorStop(1, r.col[4]);
      ctx.globalAlpha = r.a * (0.84 + 0.16 * Math.sin(t * 0.3 + r.ph));
      ctx.fillStyle = g; ctx.fill();
    };

    const sf = "filter" in ctx;
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
      stars();
      ctx.globalCompositeOperation = "lighter";
      if (sf) ctx.filter = "blur(40px)";
      for (const r of RIBBONS) ribbon(r);
      if (sf) ctx.filter = "none";
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
      t += 0.0026;
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    window.addEventListener("resize", size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  }, []);

  // ── ASCII waveform ripple ──
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let wt = 0;
    const id = window.setInterval(() => { wt += 0.032; setWave(buildWave(wt)); }, 180);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      {/* vignette — sink the aurora into pure black */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(115% 85% at 50% 42%,transparent 8%,rgba(0,0,0,.72) 46%,#000 82%)" }}
        aria-hidden
      />

      <h1 className="sr-only">DeCODE — {site.tagline}</h1>

      <div className="hero-glass relative z-10 mx-6 w-full max-w-[600px] overflow-hidden rounded-[28px] px-8 py-12 text-center sm:px-12 sm:py-14">
        {/* HUD corner brackets */}
        <span className="pointer-events-none absolute left-3.5 top-3.5 h-[18px] w-[18px] rounded-tl border-l border-t border-aurora-100/45" aria-hidden />
        <span className="pointer-events-none absolute right-3.5 top-3.5 h-[18px] w-[18px] rounded-tr border-r border-t border-aurora-100/45" aria-hidden />
        <span className="pointer-events-none absolute bottom-3.5 left-3.5 h-[18px] w-[18px] rounded-bl border-b border-l border-aurora-100/45" aria-hidden />
        <span className="pointer-events-none absolute bottom-3.5 right-3.5 h-[18px] w-[18px] rounded-br border-b border-r border-aurora-100/45" aria-hidden />

        {/* badge */}
        <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-aurora-100/20 bg-aurora-200/[0.06] px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mint-soft">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint shadow-[0_0_10px_2px_rgba(52,211,153,0.8)]" />
          เปิดรับรอบ · กรกฎาคม 2026
        </span>

        {/* institute designation */}
        <div className="mb-3.5 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.42em] text-aurora-100">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-aurora-100/50" />
          AI Institute
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-aurora-100/50" />
        </div>

        {/* wordmark */}
        <div className="font-display text-[clamp(3.6rem,2.6rem+6.5vw,7.5rem)] font-bold leading-none tracking-[-0.05em] text-[#f2f7f5]" aria-hidden>
          De<span className="hero-flow">CO</span>DE
        </div>

        <div className="mt-4 text-[15px] font-medium tracking-[0.02em] text-[#c5d6d1]">
          {site.tagline}
        </div>

        {/* ASCII aurora waveform */}
        <div className="hero-wave mx-auto mb-1 mt-5 overflow-hidden whitespace-nowrap font-mono text-[15px] leading-none tracking-[1px]" aria-hidden>
          {wave}
        </div>

        <p className="mx-auto mt-[18px] max-w-[40ch] text-[clamp(0.95rem,0.9rem+0.35vw,1.12rem)] leading-relaxed text-[#8ea39d]">
          เปลี่ยน Claude และ Automation ให้เป็นผู้ช่วยที่เก่งที่สุดของคุณ — เรียน onsite ลงมือทำจริง ได้ระบบกลับไปใช้ทันที
        </p>

        {/* terminal prompt */}
        <div className="mt-6 font-mono text-[11.5px] uppercase tracking-[0.16em] text-aurora-100/70">
          &gt; learn · build · automate
          <span className="hero-cursor ml-1 inline-block h-[14px] w-2 translate-y-[2px] bg-mint align-middle" />
        </div>
        <div className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.24em] text-accent-soft/55">
          EST · 2026 — Bangkok · 13.75°N 100.50°E
        </div>
      </div>
    </section>
  );
}
