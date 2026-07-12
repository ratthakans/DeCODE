"use client";

/**
 * Aurora Borealis field — a real flowing northern-lights animation on canvas.
 * Three additive teal→mint ribbons sway on layered sines over pure black,
 * with a faint twinkling starfield. GPU-cheap: ~3 filled paths per frame.
 * Honors prefers-reduced-motion by rendering a single static frame.
 */
import { useEffect, useRef } from "react";

type Ribbon = {
  base: number;
  amp: number;
  w1: number;
  w2: number;
  sp: number;
  ph: number;
  h: number;
  col: [string, string, string, string];
  a: number;
};

const RIBBONS: Ribbon[] = [
  { base: 0.30, amp: 0.10, w1: 0.006, w2: 0.017, sp: 0.16, ph: 0, h: 0.85, col: ["rgba(18,165,148,0)", "rgba(18,165,148,.38)", "rgba(127,243,220,.55)", "rgba(18,165,148,0)"], a: 0.9 },
  { base: 0.42, amp: 0.13, w1: 0.004, w2: 0.012, sp: -0.11, ph: 2, h: 0.95, col: ["rgba(12,59,54,0)", "rgba(45,212,191,.30)", "rgba(127,243,220,.42)", "rgba(12,59,54,0)"], a: 0.8 },
  { base: 0.24, amp: 0.08, w1: 0.009, w2: 0.021, sp: 0.22, ph: 4, h: 0.7, col: ["rgba(18,165,148,0)", "rgba(127,243,220,.32)", "rgba(45,212,191,.28)", "rgba(18,165,148,0)"], a: 0.7 },
];

export function GradientField({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let raf = 0;
    let t = 0;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const stars = () => {
      ctx.save();
      for (let i = 0; i < 70; i++) {
        const sx = (i * 137.5) % W;
        const sy = (i * 89.3) % (H * 0.85);
        ctx.globalAlpha = 0.25 + 0.35 * Math.abs(Math.sin(i * 1.7 + t * 0.6));
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(sx, sy, 1, 1);
      }
      ctx.restore();
    };

    const drawRibbon = (r: Ribbon) => {
      const step = 14;
      const top: Array<[number, number]> = [];
      const bot: Array<[number, number]> = [];
      for (let px = -40; px <= W + 40; px += step) {
        const y =
          r.base * H +
          Math.sin(px * r.w1 + t * r.sp) * r.amp * H +
          Math.sin(px * r.w2 - t * r.sp * 1.6 + r.ph) * r.amp * H * 0.45;
        top.push([px, y]);
        bot.push([px, y + r.h * H]);
      }
      ctx.beginPath();
      ctx.moveTo(top[0][0], top[0][1]);
      for (let i = 1; i < top.length; i++) ctx.lineTo(top[i][0], top[i][1]);
      for (let j = bot.length - 1; j >= 0; j--) ctx.lineTo(bot[j][0], bot[j][1]);
      ctx.closePath();
      const g = ctx.createLinearGradient(0, r.base * H - r.amp * H, 0, r.base * H + r.h * H);
      g.addColorStop(0, r.col[0]);
      g.addColorStop(0.14, r.col[1]);
      g.addColorStop(0.32, r.col[2]);
      g.addColorStop(1, r.col[3]);
      ctx.globalAlpha = r.a * intensity * (0.82 + 0.18 * Math.sin(t * 0.5 + r.ph));
      ctx.fillStyle = g;
      ctx.fill();
    };

    const supportsFilter = "filter" in ctx;

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      stars();
      ctx.globalCompositeOperation = "lighter";
      if (supportsFilter) ctx.filter = "blur(34px)";
      for (const r of RIBBONS) drawRibbon(r);
      if (supportsFilter) ctx.filter = "none";
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      t += 0.012;
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, [intensity]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* soft vignette to sink the aurora into pure black at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
