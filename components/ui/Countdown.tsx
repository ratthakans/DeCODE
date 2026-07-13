"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    minutes: Math.floor((d % 3600000) / 60000),
    seconds: Math.floor((d % 60000) / 1000),
    done: d === 0,
  };
}

export function Countdown({
  iso,
  compact = false,
  className = "",
}: {
  iso: string;
  compact?: boolean;
  className?: string;
}) {
  const target = new Date(iso).getTime();
  // Avoid hydration mismatch: render nothing time-based until mounted.
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { v: t?.days ?? 0, l: "วัน" },
    { v: t?.hours ?? 0, l: "ชม." },
    { v: t?.minutes ?? 0, l: "นาที" },
    { v: t?.seconds ?? 0, l: "วิ" },
  ];

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 font-mono ${className}`}>
        {units.map((u, i) => (
          <span key={u.l} className="flex items-baseline gap-1.5">
            <span className="tabular-nums text-aurora-100">
              {t ? String(u.v).padStart(2, "0") : "--"}
            </span>
            <span className="text-[0.65rem] text-white/40">{u.l}</span>
            {i < units.length - 1 && <span className="text-white/20">·</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-2.5 ${className}`}>
      {units.map((u) => (
        <div
          key={u.l}
          className="flex min-w-[64px] flex-col items-center rounded-xl border border-aurora-200/10 bg-aurora-200/[0.04] backdrop-blur-sm px-3 py-2.5"
        >
          <span className="font-display text-2xl font-semibold tabular-nums text-white">
            {t ? String(u.v).padStart(2, "0") : "--"}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/45">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}
