"use client";

import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";

/**
 * Urgency from a REAL number. "เหลือ 4 ที่นั่งสุดท้าย" — drawn from
 * seatsAvailable, shown identically on card and detail page.
 */
export function SeatMeter({
  course,
  className = "",
}: {
  course: Course;
  className?: string;
}) {
  const taken = course.seatsTotal - course.seatsAvailable;
  const pct = Math.round((taken / course.seatsTotal) * 100);
  const critical = course.seatsAvailable <= 5;

  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between">
        <span
          className={`font-display text-sm font-semibold ${
            critical ? "text-accent" : "text-aurora-100"
          }`}
        >
          {critical
            ? `เหลือ ${course.seatsAvailable} ที่นั่งสุดท้าย`
            : `เหลือ ${course.seatsAvailable} ที่นั่ง`}
        </span>
        <span className="font-mono text-[0.7rem] text-white/45">
          {taken}/{course.seatsTotal} เต็มแล้ว
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${
            critical
              ? "bg-accent"
              : "bg-gradient-to-r from-aurora-300 to-mint"
          }`}
        />
      </div>
    </div>
  );
}
