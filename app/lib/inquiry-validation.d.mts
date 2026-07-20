import type { InquiryPayload } from "./inquiries";

export type ValidInquiry = {
  name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  role: string | null;
  intent: "program" | "organization" | "unsure";
  programSlug: string | null;
  goal: string;
  timeline: "now" | "1-3m" | "3-6m" | "research";
  sourcePath: string;
};

export const validProgramSlugs: string[];

export function validateInquiry(
  payload: InquiryPayload,
  now?: number,
): { data?: ValidInquiry; errors?: Record<string, string> };
