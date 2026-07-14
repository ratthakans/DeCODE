import type { Course } from "@/lib/courses";
import { Countdown } from "./Countdown";

/**
 * Urgency for a coming-soon course — honest signals only.
 * countdown → real time-left until a scheduled launch date
 * otherwise → a neutral "opening soon" status (no fabricated counts)
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
        <p className="mb-2 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-aurora-200/80">
          <span className="h-1 w-1 animate-pulse rounded-full bg-aurora-200" />
          เปิดจองใน
        </p>
        <Countdown iso={course.launchDate} compact />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-aurora-200 shadow-[0_0_8px_2px_rgba(45,212,191,0.5)]" />
      <p className="text-sm text-white/60">
        รอประกาศรอบเรียน — กดแจ้งเตือนเพื่อรู้ก่อนใคร
      </p>
    </div>
  );
}
