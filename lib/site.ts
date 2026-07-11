export const site = {
  name: "DeCODE",
  tagline: "สถาบันสอน AI แบบลงมือทำจริง",
  description:
    "DeCODE — คอร์ส AI แบบ onsite สำหรับผู้ประกอบการและคนทำงาน สอนใช้ Claude, Gemini, ChatGPT, coding และ automation ให้เอาไปใช้กับธุรกิจได้จริง",
  url: "https://decode.academy",
  ogImage: "https://decode.academy/og-image.jpg",
  // Line Official Account handle (mock). Replace with the real @id later.
  lineOaId: "@decode",
  lineBaseUrl: "https://line.me/R/ti/p/@decode",
  email: "hello@decode.academy",
  phone: "02-000-0000",
  address: "ชั้น 8 อาคารสยามสเปซ ถนนพระราม 1 กรุงเทพฯ 10330",
  hours: "จันทร์–เสาร์ 10:00–19:00 น.",
  socials: {
    facebook: "https://facebook.com/decode.academy",
    instagram: "https://instagram.com/decode.academy",
    youtube: "https://youtube.com/@decode.academy",
  },
} as const;

export const nav = [
  { label: "หน้าแรก", href: "/" },
  { label: "คอร์สเรียน", href: "/courses" },
  { label: "แนวคิด", href: "/concept" },
  { label: "คำถามที่พบบ่อย", href: "/faq" },
  { label: "ติดต่อ", href: "/contact" },
] as const;
