import { site } from "./site";

/**
 * Build a Line OA link that pre-fills a message, so a lead doesn't get lost
 * when switching apps. Uses the oaMessage deep-link format:
 *   https://line.me/R/oaMessage/{@id}/?{urlEncodedText}
 *
 * If no message is given, falls back to the plain "add friend / chat" link.
 */
export function lineLink(message?: string): string {
  if (!message) return site.lineBaseUrl;
  const encoded = encodeURIComponent(message);
  return `https://line.me/R/oaMessage/${site.lineOaId}/?${encoded}`;
}

/** Pre-filled enquiry for a specific course + round. */
export function courseLineLink(courseTitle: string, roundLabel?: string): string {
  const round = roundLabel ? ` รอบ ${roundLabel}` : "";
  return lineLink(`สนใจคอร์ส ${courseTitle}${round} ครับ/ค่ะ ขอสอบถามรายละเอียดและที่ว่างครับ/ค่ะ`);
}

/** Pre-filled "notify me when it opens" for a coming-soon course. */
export function notifyLineLink(courseTitle: string): string {
  return lineLink(`อยากได้รับแจ้งเตือนเมื่อคอร์ส ${courseTitle} เปิดจองครับ/ค่ะ`);
}
