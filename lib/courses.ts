export type CourseStatus = "available" | "coming_soon";

export type ProofMode = "countdown" | "waitlist";

export type BusinessType = "b2c" | "b2b";

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  syllabus: { day: string; items: string[] }[];
  duration: string;
  level: string;
  instructor: Instructor;
  price: number;
  priceCompareAt?: number;
  seatsTotal: number;
  seatsAvailable: number;
  schedule: string;
  status: CourseStatus;
  statusLabel: string;
  waitlistCount?: number;
  launchDate?: string;
  proofMode: ProofMode;
  category: string;
  tags: string[];
  coverImage: string;
  accent: "teal" | "neutral";
  businessType: BusinessType;
  outcomes: string[];
  bonuses: string[];
}

export const courses: Course[] = [
  {
    id: "c-operator",
    slug: "claude-operator",
    title: "CLAUDE OPERATOR",
    subtitle: "เลิกเป็นแรงงานในออฟฟิศ ขึ้นมาเป็นผู้บริหาร AI ที่สั่งงานยากให้เสร็จก่อนกาแฟเย็นจะละลาย",
    description: "แคมป์ 2 วันเต็ม ที่ไม่ได้สอนใช้โปรแกรมพื้นฐาน แต่เปลี่ยนระบบคิดของคุณให้เป็น AI Director — เซตอัป Claude ให้เข้าใจธุรกิจคุณระดับพนักงานอาวุโส แล้ววางระบบอัตโนมัติที่ทำงานแทนคุณตั้งแต่วันแรกที่เดินออกจากห้อง",
    syllabus: [
      {
        day: "DAY 1 — THE BRAIN & THE AUTOMATION",
        items: [
          "ถอดรหัส Claude: ใช้ XML Tags และ System Prompt สั่งงานซับซ้อนให้จบม้วนเดียว",
          "โคลนนิ่งสมองธุรกิจ: สร้าง Knowledge Base ผ่าน Claude Projects ยัดคู่มือ + สไตล์แบรนด์",
          "เสกงานด้วยหน้าต่างเดียว: ร่างเอกสาร โค้ด และ Interactive UI แบบ Rapid Prototyping",
          "พนักงานล่องหน: วาง Workflow อัตโนมัติ ยิง Task เข้า ClickUp / ดึงข้อมูลผ่าน n8n",
        ],
      },
      {
        day: "DAY 2 — THE STRATEGIST & THE CAPSTONE",
        items: [
          "พลิกตัวเลขเป็นเงิน: โยนไฟล์ CSV / ข้อมูล BI ให้ Claude สแกนหา Insight และจุดรั่วไหล",
          "ร่างแผนกลยุทธ์: แก้ปัญหางานคอขวด + จัดโครงสร้าง Presentation ระดับบริหารใน 15 นาที",
          "ปล่อยของจริง: Workshop เอาระบบธุรกิจตัวเองมาเซต มีทีมโค้ชประกบรายโต๊ะ",
        ],
      },
    ],
    duration: "2 วันเต็ม (Intensive Bootcamp)",
    level: "เหมาะกับทุกระดับ — ไม่ต้องมีพื้นฐานเขียนโปรแกรม",
    instructor: {
      name: "ธนกร วรรธนะกุล",
      title: "Founder & Lead Operator, DeCODE",
      bio: "อดีตที่ปรึกษาระบบองค์กร ผู้วางระบบ AI automation ให้ธุรกิจ SME กว่า 40 แห่ง เชื่อว่าคนเก่งที่สุดคือคนที่เซตระบบให้ทำงานแทนตัวเองได้",
      photoUrl: "/instructor-claude.jpg",
    },
    price: 12900,
    priceCompareAt: 15900,
    seatsTotal: 24,
    seatsAvailable: 4,
    schedule: "เสาร์–อาทิตย์ 25–26 กรกฎาคม 2026 · 09:00–17:00 น. · onsite กรุงเทพฯ",
    status: "available",
    statusLabel: "รอบเดียวก่อนปิดปีนี้",
    launchDate: "2026-07-25",
    proofMode: "countdown",
    category: "บริหาร & ระบบอัตโนมัติ",
    tags: ["Claude Projects", "Automation", "n8n", "ClickUp", "Business Intelligence"],
    coverImage: "https://images.pexels.com/photos/15389577/pexels-photo-15389577.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "teal",
    businessType: "b2c",
    outcomes: [
      "เซต Claude ให้เข้าใจธุรกิจคุณแบบพนักงานอาวุโส",
      "วางระบบอัตโนมัติที่เคลียร์งานแอดมินโดยไม่ต้องลงมือ",
      "อ่านข้อมูล BI แล้วสรุปเป็นรายงานผู้บริหารได้เอง",
    ],
    bonuses: [
      "The Operator Cheat Sheet — คู่มือคีย์ลัด + โครงสร้างคำสั่ง",
      "Prompt & Template Vault — คลังคำสั่งงานแอดมิน/การตลาด",
      "1-on-1 Automation Audit — ปรึกษา 20 นาทีหลังเรียนจบ",
    ],
  },
  {
    id: "c-10x",
    slug: "claude-code-10x-engineer",
    title: "CLAUDE CODE: THE 10X ENGINEER",
    subtitle: "หมดยุคกรรมกรหน้าจอ สั่ง AI เขียนโครง ไล่บัค และ Deploy ระบบแทนคุณ จบงานเท่าทีม Dev 5 คนในร่างเดียว",
    description: "ไม่ได้สอนให้คุณเขียนโค้ดเก่งขึ้น แต่สอนให้คุณเขียนโค้ดน้อยลง 90% โดยได้แอปพลิเคชันสเกลใหญ่กว่าเดิม เปลี่ยนช่วงเวลาน่าเบื่อที่สุดของ Dev — เซตโปรเจกต์ ไล่บัค เขียน Boilerplate — ให้เป็นหน้าที่ของ Claude",
    syllabus: [
      {
        day: "DAY 1 — THE HACKER",
        items: [
          "The Master Prompt: บรีฟให้ Claude เข้าใจโครงสร้างโฟลเดอร์ Design Pattern และ Tech Stack เป๊ะ",
          "Codebase Reverse: โยนโปรเจกต์มรดกให้ AI แกะการทำงานและ Refactor ให้คลีนใน 1 นาที",
          "The Bug Killer: โยน Error Log + Stack Trace ให้ Claude ชี้บรรทัดที่พัง พร้อมโค้ดที่รันผ่าน",
        ],
      },
      {
        day: "DAY 2 — THE ARCHITECT",
        items: [
          "Instant Backend: สั่ง Claude วาง Database Schema และเขียน API เชื่อม Supabase",
          "Auto-Deploy: ให้ AI เขียน GitHub Actions ดันโค้ดขึ้น Railway อัตโนมัติ ไม่ต้องเซต Server เอง",
          "Capstone: จับเวลาสร้าง Web App ตั้งแต่หน้าบ้านยัน Deploy จริง โดยคุณเป็นแค่ผู้คุมสถาปัตยกรรม",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "มีพื้นฐานการเขียนโปรแกรมเล็กน้อย",
    instructor: {
      name: "ปวริศ อินทรโชติ",
      title: "Staff Engineer & AI Pair-Programming Coach",
      bio: " full-stack engineer ที่สร้างและ ship product เดี่ยวมากกว่าทีมทั้งทีม ผู้เชี่ยวชาญการใช้ Claude Code เป็น Senior Dev ประจำตัว",
      photoUrl: "",
    },
    price: 13900,
    seatsTotal: 20,
    seatsAvailable: 20,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "ใกล้เปิดจอง",
    launchDate: "2026-08-16",
    proofMode: "countdown",
    category: "Coding & Deployment",
    tags: ["React", "Supabase", "GitHub Actions", "Railway", "CI/CD"],
    coverImage: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "สั่ง AI ประกอบ UI, เชื่อม Database, และ Deploy จบใน 20 นาที",
      "ไล่บัคด้วยการโยน Error ให้ Claude แทนการนั่งงมเอง",
      "วางระบบ Auto-Deploy ที่รันเองหลังกด Push",
    ],
    bonuses: [
      "The Boilerplate Prompt Repo — System Prompt ขั้นเทพแยกตามภาษา",
      "Tech Stack Cheat Sheet — แผนผังเชื่อมระบบสไตล์พิมพ์เขียว",
    ],
  },
  {
    id: "c-aesthetic",
    slug: "claude-code-aesthetic-frontend",
    title: "CLAUDE CODE: THE AESTHETIC FRONT-END",
    subtitle: "AI สร้างเว็บได้ใน 1 นาที แต่เว็บที่ ‘เท่และโคตรแพง’ ต้องใช้ชั้นเชิงการสั่งการระดับ Art Director",
    description: "ก้าวข้ามเว็บหน้าตา Template สี่เหลี่ยมแข็งๆ สอนวิธีบรีฟ Claude Code ให้เข้าใจรสนิยมทางศิลปะ และสั่งเขียนโค้ด Web Animation ระดับสูง (GSAP, Framer Motion, Three.js) สร้างเว็บที่พร้อมส่งประกวดเวที Awwwards",
    syllabus: [
      {
        day: "DAY 1 — BREAKING THE GRID",
        items: [
          "The Designer's Prompt: เซต System Prompt ให้ Claude เข้าใจ Visual Hierarchy และ Whitespace",
          "Typography & Micro-Interactions: Custom Cursor, Magnetic Buttons, Hover ที่เหนือความคาดหมาย",
          "Glassmorphism & Brutalism Code: สั่ง CSS สร้าง Frosted Glass และสไตล์ดิบโดยไม่พึ่งรูปภาพ",
        ],
      },
      {
        day: "DAY 2 — THE MOTION & MAGIC",
        items: [
          "Master of Scroll: สั่ง GSAP ScrollTrigger ทำ Parallax, Text Reveal, Pinned Section ลื่น 60fps",
          "3D WebGL Gateway: ร่างโครงสร้าง Three.js / R3F ดึงโมเดล 3D มาโต้ตอบกับเมาส์",
          "Awwwards Capstone: สร้าง Landing Page สาย Creative แล้ว Deploy จริงก่อนออกจากคลาส",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "เหมาะกับ Designer / Front-End ที่อยากยกระดับงานภาพ",
    instructor: {
      name: "มนัสวี เจริญศิลป์",
      title: "Creative Developer & Motion Director",
      bio: "นักออกแบบสาย Creative Dev ที่ผสานงานอาร์ตเข้ากับโค้ด ผลงานติดเวที Awwwards และ FWA เชื่อว่าความแพงซ่อนอยู่ในดีเทลของ motion",
      photoUrl: "",
    },
    price: 13900,
    seatsTotal: 18,
    seatsAvailable: 18,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 63,
    proofMode: "waitlist",
    category: "Creative & Front-End",
    tags: ["GSAP", "Framer Motion", "Three.js", "Awwwards", "Typography"],
    coverImage: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "บรีฟ AI ให้เขียนเว็บที่ไม่เหมือน Template สำเร็จรูป",
      "สั่งเขียน Scroll Animation ระดับ Awwwards ภายในไม่กี่ prompt",
      "ประกอบ Landing Page สาย Creative แล้ว Deploy จริง",
    ],
    bonuses: [
      "The Aesthetic Component Library — Navbar/Preloader อาร์ตๆ ก๊อปวางได้เลย",
      "Creative Prompt Framework — สูตร Prompt สั่ง Animation เฉพาะทาง",
    ],
  },
  {
    id: "c-coworker",
    slug: "claude-co-worker",
    title: "CLAUDE CO-WORKER",
    subtitle: "ศิลปะการโยนงานให้ AI: บริหารระบบให้รันเอง 100% แล้วเอาเวลาไปทำเรื่องไร้สาระ",
    description: "ไม่ได้สอนให้คุณทำงานได้มากขึ้น แต่สอนให้คุณ ‘ทำน้อยลง’ ด้วยการเซตอัป Claude ให้เป็นเลขาและผู้ช่วยส่วนตัวที่ไม่มีวันลาพักร้อน — สำหรับผู้บริหารและเจ้าของธุรกิจที่บ้างานจนไม่มีเวลาใช้ชีวิต",
    syllabus: [
      {
        day: "DAY 1 — ONBOARDING THE AI EMPLOYEE",
        items: [
          "The AI Job Description: ใช้ Claude Projects บรีฟงานให้พนักงานใหม่เข้าใจคู่มือองค์กร",
          "The Daily Operation: โยนอีเมลยาว สรุปประชุม ร่างสัญญา ให้ Claude จบใน 3 วินาที",
          "The Transaction Reader: ให้ Claude อ่านสลิป/ใบแจ้งหนี้ จัดฟอร์แมตส่งเข้าโปรแกรมบัญชี",
        ],
      },
      {
        day: "DAY 2 — THE AUTOMATED MANAGER",
        items: [
          "The Task Router: ย่อยโปรเจกต์เป็น Task เล็ก ยิงเข้ากระดานงานทีมบน ClickUp อัตโนมัติ",
          "The BI Robot: เชื่อม n8n ดึงข่าว/เทรนด์ตลาด ให้ Claude วิเคราะห์เป็นรายงานทุกเช้า",
          "Capstone — The Do-Nothing Workflow: เชื่อม Flow ทั้งหมดให้แทรกแซงระบบน้อยที่สุด",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "เหมาะกับผู้บริหาร PM แอดมิน เจ้าของธุรกิจ",
    instructor: {
      name: "ธนกร วรรธนะกุล",
      title: "Founder & Lead Operator, DeCODE",
      bio: "ผู้วางระบบ AI automation ให้ธุรกิจ SME เชื่อว่าเป็นหัวหน้าไม่จำเป็นต้องเหนื่อยที่สุด",
      photoUrl: "/instructor-claude.jpg",
    },
    price: 12900,
    seatsTotal: 24,
    seatsAvailable: 24,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 128,
    proofMode: "waitlist",
    category: "บริหาร & ระบบอัตโนมัติ",
    tags: ["Claude Projects", "n8n", "ClickUp", "Delegation", "SMEMOVE"],
    coverImage: "https://images.pexels.com/photos/3582392/pexels-photo-3582392.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "เซต Claude เป็นเลขาที่ไม่มีวันลาพักร้อน",
      "วางระบบแจกจ่ายงานทีมแบบอัตโนมัติ",
      "รับรายงาน BI สรุปสั้นๆ ทุกเช้าโดยไม่ต้องลงมือ",
    ],
    bonuses: [
      "The Lazy Boss Prompt Library — คำสั่งสรุปแชท ร่างอีเมล คิด Agenda",
      "Workflow Blueprint — แผนผัง n8n & ClickUp พร้อมอิมพอร์ต",
    ],
  },
  {
    id: "c-godmode",
    slug: "claude-godmode-creative-director",
    title: "CLAUDE GODMODE",
    subtitle: "ปลดล็อกพลังพระเจ้า สั่ง Claude ขยี้ไอเดีย เปลี่ยนนามธรรมทางศิลปะให้เป็นชิ้นงานระดับมาสเตอร์พีซ",
    description: "ไม่ใช่คอร์สสอนเจนรูป แต่สอนวิธีคิดและวิธีสั่ง — แปลงสัมผัสทางอาร์ตให้เป็นโครงสร้างตรรกะที่ Claude เข้าใจและทำงานต่อได้จริง สำหรับ Creative Director, Art Director และเจ้าของเอเจนซี่",
    syllabus: [
      {
        day: "DAY 1 — THE VISIONARY MIND",
        items: [
          "The Aesthetic Code: ใช้ XML Tags สั่ง Claude เข้าใจ Color Theory, Mood & Tone",
          "Reverse Engineering: โยน Reference ให้ Claude สกัดเป็นสูตรคำสั่งคุมทิศทางอาร์ต",
          "The Multi-Sensory Pitch: สร้างโครงสร้าง Pitching ครบประสาทสัมผัส ต่อยอด Gamma / Suno",
        ],
      },
      {
        day: "DAY 2 — THE COMMAND CENTER",
        items: [
          "The Bulletproof Brief: แตก Big Idea เป็น Actionable Brief ที่สเปกเป๊ะจนลูกน้องเถียงไม่ได้",
          "The Automated Agency: เปลี่ยนบรีฟให้วิ่งเข้าสร้าง Task ใน ClickUp ผ่าน n8n",
          "Godmode Capstone: จำลองรับบรีฟแบรนด์ใหญ่ รันระบบตั้งแต่แกนไอเดียยันบรีฟส่งทีม",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "เหมาะกับสาย Creative / Agency",
    instructor: {
      name: "มนัสวี เจริญศิลป์",
      title: "Creative Director & Aesthetic Architect",
      bio: "ผู้กำกับงานสร้างสรรค์ที่ใช้ AI เป็นสมองซีกขวา แปลงบรีฟนามธรรมให้เป็นระบบสั่งงานที่ทีมโปรดักชันทำต่อได้ทันที",
      photoUrl: "",
    },
    price: 14900,
    seatsTotal: 18,
    seatsAvailable: 18,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 41,
    proofMode: "waitlist",
    category: "Creative Direction",
    tags: ["Art Direction", "XML Prompt", "Gamma", "Pitching", "Agency Workflow"],
    coverImage: "https://images.pexels.com/photos/29506609/pexels-photo-29506609.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "แปลงความรู้สึกทางอาร์ตให้เป็นคำสั่งที่ AI ทำงานต่อได้",
      "ร่าง Moodboard และ Art Direction ระดับ Global Agency",
      "แตกบรีฟกันกระสุนส่งทีมโปรดักชันได้ใน 5 นาที",
    ],
    bonuses: [
      "The Master Prompt Library — คำสั่งคุมโทนสี/สคริปต์วิดีโอ/บรีฟ Motion",
      "Agency System Blueprint — Flowchart ระบบรับบรีฟ > Claude > ทีม",
    ],
  },
  {
    id: "c-architect",
    slug: "claude-code-one-man-startup",
    title: "CLAUDE CODE: THE ONE-MAN STARTUP",
    subtitle: "เลิกง้อโปรแกรมเมอร์ ประกอบร่าง Tech Startup ของคุณเอง ด้วยโค้ดที่ AI เขียนตั้งแต่บรรทัดแรกจนถึง Deploy",
    description: "เปลี่ยนสาย Business / Marketing ให้กลายเป็น System Architect ที่สร้าง Web App เชื่อม Database และวางระบบชำระเงินได้ด้วยตัวเอง — From Prompt to Production",
    syllabus: [
      {
        day: "DAY 1 — THE FRONT-END HACKER",
        items: [
          "The Developer's System Prompt: เซต Claude ให้เข้าใจ Tech Stack และ Coding Standard",
          "Rapid Prototyping: โยน Wireframe ให้ Claude เขียนโครงหน้าเว็บที่พร้อมใช้ทันที",
          "The Debugging Matrix: โยน Error Log ให้ Claude patch โค้ดให้บรรทัดต่อบรรทัด",
        ],
      },
      {
        day: "DAY 2 — THE FULL-STACK DEPLOYMENT",
        items: [
          "The Backend Brain: ให้ Claude เขียน Schema และเชื่อม Supabase (Auth + Data)",
          "The CI/CD Pipeline: สั่ง GitHub Actions รันเทสต์และ Deploy ขึ้น Cloud อัตโนมัติ",
          "The Monetization API: เชื่อม Stripe ตัดบัตร + Webhook และ Capstone ปล่อยของขึ้น Production",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "เหมาะกับคนอยากทำ SaaS แม้ไม่เคยเขียนโค้ด",
    instructor: {
      name: "ปวริศ อินทรโชติ",
      title: "Full-Stack Architect & SaaS Builder",
      bio: "ผู้สร้างและ ship SaaS เดี่ยวหลายตัว เชี่ยวชาญการวาง Infrastructure หลังบ้านด้วย AI ตั้งแต่ Database ยันระบบตัดบัตร",
      photoUrl: "",
    },
    price: 15900,
    seatsTotal: 16,
    seatsAvailable: 16,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "ใกล้เปิดจอง",
    launchDate: "2026-08-30",
    proofMode: "countdown",
    category: "Full-Stack & SaaS",
    tags: ["Supabase", "Stripe", "GitHub Actions", "Railway", "SaaS"],
    coverImage: "https://images.pexels.com/photos/3747115/pexels-photo-3747115.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "สร้าง Web App ตั้งแต่หน้าบ้านยันหลังบ้านด้วยตัวคนเดียว",
      "เชื่อม Database และระบบ Auth ด้วยคำสั่งภาษาคน",
      "ต่อระบบตัดบัตร Stripe และ Deploy ขึ้นโดเมนจริง",
    ],
    bonuses: [
      "The Boilerplate Vault — Starter Kit มีระบบล็อกอิน + Stripe พร้อมใช้",
      "Architecture Diagram Cheatsheet — โปสเตอร์ Blueprint การเชื่อมระบบ",
    ],
  },
  {
    id: "c-performance",
    slug: "claude-performance-deep-core",
    title: "PERFORMANCE CLAUDE: THE DEEP CORE",
    subtitle: "ปลดล็อกศักยภาพขั้นสุด เข้าถึง Deep Function ของ Claude ที่คน 99% ไม่เคยรู้ว่าทำได้",
    description: "คอร์สสำหรับ Power User ที่ต้องการรีดประสิทธิภาพของ Claude ออกมาให้ถึงขีดสุด เจาะลึกเทคนิคการใช้งาน Context Window ให้คุ้มค่า, การเขียน System Prompts ระดับวิศวกรรม, การรีด Logical Reasoning ขั้นสูง และเทคนิคลับเพื่อปลดล็อกขีดจำกัดเดิมๆ",
    syllabus: [
      {
        day: "DAY 1 — THE CONTEXT MASTER",
        items: [
          "Context Window Architecture: เข้าใจวิธีที่ Claude จำและลืมข้อมูล เพื่อยัดเอกสาร 100 หน้าโดยที่ AI ไม่หลอน",
          "Advanced Prompt Engineering: ใช้ XML, Chain of Thought และ Few-Shot Prompting อย่างมีกลยุทธ์",
          "Hallucination Control: เทคนิคบังคับ Claude ให้อ้างอิงบรรทัดต่อบรรทัด และยอมรับว่า 'ไม่รู้' แทนการมั่ว",
        ],
      },
      {
        day: "DAY 2 — THE LOGIC & INTEGRATION",
        items: [
          "Logical Reasoning Hacks: ท่าไม้ตายรีดความสามารถในการคิดเชิงตรรกะและคณิตศาสตร์",
          "Tool Use & API Deep Dive:เจาะลึกการให้ Claude เรียกใช้เครื่องมือภายนอก (Function Calling)",
          "Performance Capstone: ออกแบบ AI Agent ที่ทำงานซับซ้อนหลายขั้นตอนด้วยความแม่นยำ 99%",
        ],
      },
    ],
    duration: "2 วันเต็ม (Deep Dive)",
    level: "สำหรับผู้ที่ใช้ Claude เป็นประจำและต้องการทะลุขีดจำกัด",
    instructor: {
      name: "ปวริศ อินทรโชติ",
      title: "AI Researcher & Prompt Engineer",
      bio: "ผู้คลุกคลีกับโมเดลภาษาขนาดใหญ่ รีดศักยภาพ AI ด้วยเทคนิควิศวกรรม Prompt ขั้นสูง",
      photoUrl: "",
    },
    price: 13900,
    priceCompareAt: 16900,
    seatsTotal: 20,
    seatsAvailable: 20,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "กำลังเปิดรับความสนใจ",
    waitlistCount: 89,
    proofMode: "waitlist",
    category: "AI Deep Tech",
    tags: ["Prompt Engineering", "Context Window", "API", "Function Calling"],
    coverImage: "https://images.pexels.com/photos/12060425/pexels-photo-12060425.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "คุม Context Window ได้อยู่หมัด ยัดข้อมูลเยอะแค่ไหนก็ไม่หลอน",
      "เขียน Prompt เชิงวิศวกรรมที่ให้ผลลัพธ์แม่นยำระดับ 99%",
      "สร้าง AI Agent ที่เชื่อมต่อกับ API และเครื่องมือภายนอกได้",
    ],
    bonuses: [
      "The Master Prompt Architecture — โครงสร้าง Prompt ระดับพระเจ้า",
      "Token Optimization Guide — คู่มือลดค่าใช้จ่าย API",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAvailableCourse(): Course | undefined {
  return courses.find((c) => c.status === "available");
}

export function getComingSoonCourses(): Course[] {
  return courses.filter((c) => c.status === "coming_soon");
}

export const priceFormatter = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});
