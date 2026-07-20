export const inquiryIntents = ["program", "organization", "unsure"] as const;
export const inquiryTimelines = ["now", "1-3m", "3-6m", "research"] as const;
export const inquiryStatuses = ["new", "contacted", "qualified", "closed"] as const;

export type InquiryPayload = {
  name?: unknown; email?: unknown; phone?: unknown; organization?: unknown; role?: unknown;
  intent?: unknown; programSlug?: unknown; goal?: unknown; timeline?: unknown;
  consent?: unknown; sourcePath?: unknown; startedAt?: unknown; website?: unknown;
};
