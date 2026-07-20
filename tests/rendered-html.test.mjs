import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { validateInquiry } from "../app/lib/inquiry-validation.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("implements the complete institute route architecture", async () => {
  const routes = ["app/page.tsx", "app/programs/page.tsx", "app/institute/page.tsx", "app/organizations/page.tsx", "app/contact/page.tsx", "app/programs/[slug]/page.tsx", "app/admin/inquiries/page.tsx"];
  await Promise.all(routes.map((path) => access(new URL(path, root))));
  const [home, programs, institute, organizations, contact, detail, accordion, styles, header] = await Promise.all([
    ...routes.slice(0, 6).map(read),
    read("app/components/CurriculumAccordion.tsx"),
    read("app/globals.css"),
    read("app/components/SiteHeader.tsx"),
  ]);
  assert.match(home, /พัฒนาทักษะ/);
  assert.match(home, /goal-track-grid/);
  assert.match(home, /institute-studio\.jpg/);
  assert.match(programs, /ProgramExplorer/);
  assert.match(institute, /Editorial intelligence/);
  assert.match(organizations, /Build an organisation/);
  assert.match(contact, /InquiryForm/);
  assert.match(detail, /CurriculumAccordion/);
  assert.match(accordion, /curriculum-accordion/);
  assert.match(accordion, /event\.key !== "Enter"/);
  assert.match(styles, /line-seed-th-regular\.woff2/);
  assert.match(styles, /filter-options\.is-open/);
  assert.match(styles, /\.thai-heading/);
  assert.match(header, /usePathname/);
  assert.match(header, /brand-word/);
});

test("ships the calm cinematic motion and self-hosted type system", async () => {
  const [layout, styles, motion, fluid, detail, imageConfig] = await Promise.all([
    read("app/layout.tsx"),
    read("app/globals.css"),
    read("app/components/MotionOrchestrator.tsx"),
    read("app/components/FluidField.tsx"),
    read("app/programs/[slug]/page.tsx"),
    read("next.config.ts"),
  ]);
  await Promise.all([
    "public/fonts/instrument-sans-latin.woff2",
    "public/fonts/newsreader-italic-latin.woff2",
    "public/fonts/ibm-plex-mono-400-latin.woff2",
    "public/fonts/line-seed-th-regular.woff2",
    "public/og-fluid-v2.png",
  ].map((path) => access(new URL(path, root))));
  assert.match(layout, /MotionOrchestrator/);
  assert.match(layout, /og-fluid-v2\.png/);
  assert.doesNotMatch(layout, /fonts\.googleapis\.com/);
  assert.match(styles, /font-family: "Instrument Sans"/);
  assert.match(styles, /font-family: "Newsreader"/);
  assert.match(styles, /font-family: "IBM Plex Mono"/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /\.header-progress/);
  assert.match(motion, /IntersectionObserver/);
  assert.match(motion, /MutationObserver/);
  assert.match(motion, /requestAnimationFrame/);
  assert.match(motion, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(motion, /pointermove|clientX|clientY/);
  assert.doesNotMatch(styles, /--pointer-x|--pointer-y/);
  assert.match(fluid, /"hero" \| "lens" \| "ambient" \| "cta"/);
  assert.match(fluid, /data-active/);
  assert.match(detail, /from "next\/image"/);
  assert.match(detail, /data-parallax/);
  assert.match(imageConfig, /unoptimized: true/);
});

test("validates rushed, invalid, and honeypot submissions", () => {
  const result = validateInquiry({ name: "A", email: "invalid", intent: "program", goal: "short", timeline: "now", consent: false, website: "spam", startedAt: Date.now() });
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.programSlug);
  assert.ok(result.errors.goal);
  assert.ok(result.errors.consent);
  assert.ok(result.errors.form);
});

test("normalizes a complete inquiry", () => {
  const result = validateInquiry({
    name: "  ทดสอบ ระบบ  ", email: "TEST@EXAMPLE.COM", intent: "program", programSlug: "claude-operator",
    goal: "ต้องการลดเวลาทำข้อเสนอและสร้าง Workflow ที่ทีมใช้งานร่วมกันได้", timeline: "1-3m", consent: true,
    sourcePath: "/contact?program=claude-operator", website: "", startedAt: Date.now() - 5000,
  });
  assert.equal(result.errors, undefined);
  assert.equal(result.data.name, "ทดสอบ ระบบ");
  assert.equal(result.data.email, "test@example.com");
  assert.equal(result.data.programSlug, "claude-operator");
});

test("publishes the six-program directory and accepts the ads program", async () => {
  const [courses, home, programs, validation] = await Promise.all([
    read("app/data/courses.ts"), read("app/page.tsx"), read("app/programs/page.tsx"), read("app/lib/inquiry-validation.mjs"),
  ]);
  assert.equal((courses.match(/\n    id: "0[1-6]"/g) ?? []).length, 6);
  assert.match(courses, /Claude with Automated Ads Management/);
  assert.match(validation, /claude-automated-ads-management/);
  assert.doesNotMatch(validation, /ai-business-os|performance-claude|ai-automation-architect/);
  assert.match(home, /สำรวจ 6 โปรแกรม/);
  assert.match(programs, /6 โปรแกรม/);

  const adsInquiry = validateInquiry({
    name: "ทีมการตลาด", email: "growth@example.com", intent: "program", programSlug: "claude-automated-ads-management",
    goal: "ต้องการสร้างระบบวิเคราะห์ผลโฆษณาและรายงานที่ทีมตรวจสอบก่อนปรับงบได้", timeline: "1-3m", consent: true,
    sourcePath: "/contact?program=claude-automated-ads-management", website: "", startedAt: Date.now() - 5000,
  });
  assert.equal(adsInquiry.errors, undefined);
  assert.equal(adsInquiry.data.programSlug, "claude-automated-ads-management");
});

test("declares persistent inquiry schema, indexes, and protected admin checks", async () => {
  const [schema, migration, admin, store, config] = await Promise.all([
    read("db/schema.ts"), read("drizzle/0000_nostalgic_mariko_yashida.sql"), read("app/lib/admin.ts"), read("app/lib/inquiry-store.ts"), read(".openai/hosting.json"),
  ]);
  assert.match(schema, /inquiries_created_at_idx/);
  assert.match(schema, /inquiries_status_idx/);
  assert.match(schema, /inquiries_program_slug_idx/);
  assert.match(migration, /CREATE TABLE `inquiries`/);
  assert.match(admin, /ADMIN_PASSWORD/);
  assert.match(admin, /timingSafeEqual/);
  assert.match(store, /@vercel\/blob/);
  assert.match(store, /access: "private"/);
  assert.match(config, /"d1": "DB"/);
});
