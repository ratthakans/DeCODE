export const validProgramSlugs = [
  "claude-operator", "claude-co-worker", "claude-godmode", "aesthetic-front-end",
  "one-man-startup", "claude-automated-ads-management",
];

const intents = ["program", "organization", "unsure"];
const timelines = ["now", "1-3m", "3-6m", "research"];
const clean = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";

export function validateInquiry(payload, now = Date.now()) {
  const errors = {};
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254).toLowerCase();
  const phone = clean(payload.phone, 32);
  const organization = clean(payload.organization, 120);
  const role = clean(payload.role, 120);
  const intent = clean(payload.intent, 20);
  const programSlug = clean(payload.programSlug, 80);
  const goal = clean(payload.goal, 2000);
  const timeline = clean(payload.timeline, 20);
  const sourcePath = clean(payload.sourcePath, 200) || "/contact";
  const website = clean(payload.website, 200);
  const startedAt = Number(payload.startedAt);

  if (name.length < 2) errors.name = "กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
  if (!intents.includes(intent)) errors.intent = "กรุณาเลือกสิ่งที่สนใจ";
  if (intent === "program" && !validProgramSlugs.includes(programSlug)) errors.programSlug = "กรุณาเลือกโปรแกรม";
  if (goal.length < 20) errors.goal = "กรุณาเล่าเป้าหมายอย่างน้อย 20 ตัวอักษร";
  if (!timelines.includes(timeline)) errors.timeline = "กรุณาเลือกช่วงเวลาที่ต้องการเริ่ม";
  if (payload.consent !== true) errors.consent = "กรุณายอมรับการติดต่อกลับ";
  if (website) errors.form = "ไม่สามารถส่งแบบฟอร์มได้";
  if (!Number.isFinite(startedAt) || now - startedAt < 3000 || now - startedAt > 86_400_000) errors.form = "กรุณาตรวจสอบแบบฟอร์มแล้วลองอีกครั้ง";
  if (Object.keys(errors).length) return { errors };

  return { data: {
    name, email, phone: phone || null, organization: organization || null, role: role || null,
    intent, programSlug: intent === "program" ? programSlug : null, goal, timeline,
    sourcePath: sourcePath.startsWith("/") ? sourcePath : "/contact",
  } };
}
