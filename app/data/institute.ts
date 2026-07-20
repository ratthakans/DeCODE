export const mockLabel = "ข้อมูลตัวอย่างสำหรับ Mockup · รอยืนยัน";

export const courseMockMeta: Record<string, {
  price: string;
  cohort: string;
  track: "business" | "builder" | "creative";
  instructorId: string;
  testimonialId: string;
}> = {
  "claude-operator": { price: "฿18,900", cohort: "Q4/2026 · 2 วัน", track: "business", instructorId: "nath", testimonialId: "t1" },
  "claude-co-worker": { price: "฿18,900", cohort: "Q4/2026 · 2 วัน", track: "business", instructorId: "nath", testimonialId: "t2" },
  "claude-godmode": { price: "฿21,900", cohort: "Q4/2026 · 2 วัน", track: "creative", instructorId: "mesa", testimonialId: "t3" },
  "aesthetic-front-end": { price: "฿26,900", cohort: "Q4/2026 · 3 วัน", track: "creative", instructorId: "mesa", testimonialId: "t1" },
  "one-man-startup": { price: "฿42,000", cohort: "Q4/2026 · 4 สัปดาห์", track: "builder", instructorId: "kong", testimonialId: "t2" },
  "claude-automated-ads-management": { price: "฿26,900", cohort: "Q4/2026 · 3 วัน", track: "business", instructorId: "kong", testimonialId: "t3" },
};

export const instructors = [
  {
    id: "nath",
    name: "ณัฐ วรินทร์",
    role: "AI Systems & Business Transformation",
    bio: "ออกแบบระบบการทำงานร่วมกับ AI สำหรับผู้บริหารและทีมธุรกิจ โดยเน้นการตัดสินใจ โครงสร้างความรู้ และการนำไปใช้จริง",
    image: "/media/instructor-nath.jpg",
    source: "https://www.pexels.com/photo/a-man-sitting-on-chair-in-the-office-8101728/",
  },
  {
    id: "mesa",
    name: "เมษา กิตติ",
    role: "Creative Technology & Digital Experience",
    bio: "เชื่อม Creative Direction, Editorial Design และเทคโนโลยีเข้าด้วยกัน เพื่อสร้างประสบการณ์ดิจิทัลที่มีรสนิยมและใช้งานได้จริง",
    image: "/media/instructor-mesa.jpg",
    source: "https://www.pexels.com/photo/woman-working-at-the-office-8101404/",
  },
  {
    id: "kong",
    name: "ก้อง ภัทร",
    role: "Automation & Product Systems",
    bio: "เปลี่ยน Workflow และไอเดียธุรกิจให้กลายเป็น Automation, Product และระบบที่ดูแลต่อได้โดยทีมจริง",
    image: "/media/instructor-kong.jpg",
    source: "https://www.pexels.com/photo/young-man-working-in-an-office-7964239/",
  },
];

export const testimonials = [
  {
    id: "t1",
    quote: "สิ่งที่เปลี่ยนไม่ใช่แค่ความเร็ว แต่คือวิธีตั้งโจทย์และมาตรฐานของงานทั้งทีม เรากลับไปพร้อมระบบที่ใช้ต่อได้ทันที",
    name: "พิม · เจ้าของธุรกิจบริการ",
    result: "ลดเวลาจัดทำข้อเสนอจากหลายวันเหลือไม่กี่ชั่วโมง",
  },
  {
    id: "t2",
    quote: "จากเดิมที่ต้องรอหลายฝ่าย เราสามารถทำ Prototype และทดสอบกับผู้ใช้ได้เองก่อนตัดสินใจลงทุนรอบใหญ่",
    name: "ต้น · Product Lead",
    result: "สร้าง Working Prototype ภายในหนึ่งสัปดาห์",
  },
  {
    id: "t3",
    quote: "Automation ที่ได้ไม่ใช่ Demo แต่มีจุดตรวจ มี Log และมีคู่มือ ทีมจึงรับช่วงต่อได้โดยไม่ต้องพึ่งคนคนเดียว",
    name: "มิน · Operations Director",
    result: "เชื่อมงานรับ Lead และ Follow-up เป็น Workflow เดียว",
  },
];

export const institutePhotos = [
  {
    src: "/media/institute-artifact.jpg",
    source: "https://www.pexels.com/photo/8640080/",
    alt: "มือกำลังจดและจัดโครงสร้างความคิดบนโต๊ะทำงานที่มีโน้ตและแล็ปท็อป",
    caption: "Working artefact · ความคิดต้องถูกเปลี่ยนให้มองเห็นได้",
  },
  {
    src: "/media/institute-collaboration.jpg",
    source: "https://www.pexels.com/photo/7213548/",
    alt: "ทีมกำลังทำงานร่วมกันบนเอกสาร แผนงาน และแล็ปท็อป",
    caption: "Build together · ออกแบบจากหลักฐานและบริบทจริง",
  },
  {
    src: "/media/institute-studio.jpg",
    source: "https://www.pexels.com/photo/presentation-during-course-18999561/",
    alt: "ผู้เรียนกำลังเข้าร่วมการเรียนในสตูดิโอสมัยใหม่",
    caption: "Build together · ออกจากห้องพร้อมสิ่งที่ใช้ได้",
  },
];

export const featuredToolLogos = [
  ["Claude", "anthropic"], ["OpenAI", "openai"], ["Gemini", "googlegemini"],
  ["Notion", "notion"], ["Figma", "figma"], ["GitHub", "github"],
  ["Next.js", "nextdotjs"], ["Supabase", "supabase"], ["n8n", "n8n"],
] as const;
