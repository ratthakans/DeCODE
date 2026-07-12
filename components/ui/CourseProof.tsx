"use client";

import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { Countdown } from "./Countdown";

/**
 * ONE social-proof weapon per card, chosen by proofMode — never both.
 * countdown → time-left is its own urgency (near launch)
 * waitlist  → a rising number gives momentum (launch still far)
 */
export function CourseProof({
  course,
  className = "",
}: {
  course: Course;
  className?: string;
}) {
  if (course.proofMode === "countdown" && course.launchDate) {
    return (
      <div className={className}>
        <p className="mb-2 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mint/80">
          <span className="h-1 w-1 animate-pulse rounded-full bg-mint" />
          เปิดจองใน
        </p>
        <Countdown iso={course.launchDate} compact />
      </div>
    );
  }

  // waitlist
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-6 w-6 rounded-full border border-ink"
            style={{
              background:
                i === 0
                  ? "linear-gradient(135deg,#2DD4BF,#0C3B36)"
                  : i === 1
                  ? "linear-gradient(135deg,#38bdf8,#0e7490)"
                  : "linear-gradient(135deg,#34d399,#0f766e)",
            }}
          />
        ))}
      </div>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-sm font-semibold text-mint-soft"
        >
          จองสิทธิ์แล้ว {course.waitlistCount} คน
        </motion.p>
        <p className="font-mono text-[0.65rem] text-white/40">รอรอบเปิดจอง</p>
      </div>
    </div>
  );
}
