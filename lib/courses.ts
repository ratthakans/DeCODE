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
  edition?: string;
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
  /** ความตรงไปตรงมาแบบ DeCODE — คอร์สนี้ไม่เหมาะกับใคร */
  notFor?: string[];
}

const PEXELS = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const THANAKORN: Instructor = {
  name: "ธนกร วรรธนะกุล",
  title: "Founder & Lead Operator, DeCODE",
  bio: "อดีตที่ปรึกษาระบบองค์กร ผู้วางระบบ AI automation ให้ธุรกิจ SME กว่า 40 แห่ง เชื่อว่าคนเก่งที่สุดคือคนที่เซตระบบให้ทำงานแทนตัวเองได้",
  photoUrl: PEXELS(28446973, 400),
};

const PAWARIS: Instructor = {
  name: "ปวริศ อินทรโชติ",
  title: "Full-Stack Architect & AI Systems Engineer",
  bio: "full-stack engineer ที่สร้างและ ship product เดี่ยวมากกว่าทีมทั้งทีม ผู้เชี่ยวชาญการกำกับ Claude ตั้งแต่ Context Architecture ยันระบบ Production",
  photoUrl: PEXELS(33261955, 400),
};

const MANASWEE: Instructor = {
  name: "มนัสวี เจริญศิลป์",
  title: "Creative Director & Aesthetic Architect",
  bio: "ผู้กำกับงานสร้างสรรค์ที่ผสานงานอาร์ตเข้ากับระบบ ผลงานติดเวที Awwwards และ FWA เชื่อว่าความแพงซ่อนอยู่ในดีเทลของการกำกับ",
  photoUrl: PEXELS(36593089, 400),
};

// ── THE CORE 8 · OPERATE → DELEGATE → CREATE → DESIGN → BUILD → AUTOMATE → TRANSFORM → MASTER ──
export const courses: Course[] = [
  {
    id: "c-operator",
    slug: "claude-operator",
    title: "Claude Operator",
    edition: "Become an AI Director",
    subtitle:
      "เลิกเป็นคนพิมพ์คำถามให้ AI ขึ้นมาเป็น AI Director ที่วางบริบท สั่งงาน และคุมคุณภาพได้แบบมืออาชีพ",
    description:
      "หลักสูตรพื้นฐานที่สำคัญที่สุดของ DeCODE — ไม่ได้แจก Prompt สำเร็จรูป แต่สอนให้ AI เข้าใจธุรกิจ บริบท และกติกา จนทำงานได้เหมือนพนักงานที่เข้าใจงานจริง แล้ววางระบบให้ใช้ซ้ำได้ทั้งทีม",
    syllabus: [
      {
        day: "MODULE 01 — FROM USER TO OPERATOR",
        items: [
          "AI User กับ AI Operator ต่างกันอย่างไร",
          "งานไหนควรให้ AI ทำ งานไหนยังต้องให้คนตัดสินใจ",
          "การเลือก Model และหลักการ Human-in-the-Loop",
        ],
      },
      {
        day: "MODULE 02 — CONTEXT ENGINEERING",
        items: [
          "Context ที่ดีประกอบด้วยอะไร: Background, Product, Audience, Brand Voice",
          "Constraints, Risk และ Reference Material",
          "Workshop: สร้าง Business Master Context ของธุรกิจตัวเอง",
        ],
      },
      {
        day: "MODULE 03 — PROMPT ARCHITECTURE",
        items: [
          "Framework: Role, Objective, Input, Process, Output",
          "Constraints, Quality Criteria และ Examples",
          "ฝึกเขียน Prompt ตั้งแต่งานง่ายถึงหลายขั้นตอน",
        ],
      },
      {
        day: "MODULE 04 — DELEGATION SYSTEM",
        items: [
          "แตก Task, กำหนด Milestone และขอ Plan ก่อนลงมือ",
          "Approval Gate และ Definition of Done",
          "Feedback Loop และการแก้ผลลัพธ์หลุดเป้า",
        ],
      },
      {
        day: "MODULE 05 — BUSINESS WORKSPACE",
        items: [
          "โครงสร้าง Claude Project และ Knowledge File",
          "Prompt Library, Output Template, Version Control",
          "Workspace สำหรับหลายแผนก",
        ],
      },
      {
        day: "MODULE 06 — AI SOP",
        items: [
          "เปลี่ยนวิธีทำงานให้เป็นระบบที่ AI และทีมทำตามได้",
          "Workflow: Research, Competitor, Proposal, Campaign",
          "Report Generation และ Content Review",
        ],
      },
    ],
    duration: "2 วันเต็ม (Foundation Bootcamp)",
    level: "Foundation — ไม่จำเป็นต้องเขียนโค้ด",
    instructor: THANAKORN,
    price: 12900,
    priceCompareAt: 15900,
    seatsTotal: 24,
    seatsAvailable: 4,
    schedule: "เสาร์–อาทิตย์ 25–26 กรกฎาคม 2026 · 09:00–17:00 น. · onsite กรุงเทพฯ",
    status: "available",
    statusLabel: "รอบเดียวก่อนปิดปีนี้",
    launchDate: "2026-07-25",
    proofMode: "countdown",
    category: "01 · OPERATE",
    tags: ["Claude Projects", "Context Engineering", "System Prompt", "AI SOP", "NotebookLM"],
    coverImage: PEXELS(15389577),
    accent: "teal",
    businessType: "b2c",
    outcomes: [
      "ออกแบบ Context ให้ AI เข้าใจธุรกิจระดับพนักงานจริง",
      "สร้าง System Prompt และ Prompt Library ที่ทีมใช้ซ้ำได้",
      "เปลี่ยนกระบวนการทำงานให้เป็น AI SOP",
    ],
    bonuses: [
      "Final Project: AI Business Workspace — Master Context + Core System Prompt",
      "Prompt Library อย่างน้อย 5 ชุด + AI SOP 3 กระบวนการ",
      "AI Operating Manual สำหรับตัวเองหรือทีม",
    ],
    notFor: [
      "คุณอยากได้คลัง Prompt สำเร็จรูปไปก๊อปใช้ โดยไม่อยากเข้าใจว่าทำไมมันเวิร์ก",
      "คุณหาเทคนิคลัดรายเครื่องมือ มากกว่าการวางระบบที่ใช้ซ้ำได้",
    ],
  },
  {
    id: "c-coworker",
    slug: "claude-co-worker",
    title: "Claude Co-Worker",
    edition: "Build Your Second Brain",
    subtitle:
      "ปัญหาของคุณไม่ใช่ทำงานไม่เป็น แต่คืองานมากเกินไป — เซต Claude เป็นเลขา นักวิเคราะห์ และคู่คิดที่ลดภาระในหัวทุกวัน",
    description:
      "สำหรับผู้บริหารและเจ้าของธุรกิจที่งานตามตัวตลอดเวลา สอนแยกให้ออกว่างานไหนทำเอง งานไหนโยนให้ AI งานไหนควรเป็นระบบ แล้วสร้าง Second Brain ที่เตรียมประชุม สรุป และติดตามการตัดสินใจแทนคุณ",
    syllabus: [
      {
        day: "MODULE 01 — PERSONAL OPERATING SYSTEM",
        items: [
          "Personal Workflow Audit และ Cognitive Load",
          "Task vs Project vs Decision",
          "ออกแบบจุดรับข้อมูลและลด Tool Overload",
        ],
      },
      {
        day: "MODULE 02 — BUILD YOUR AI ASSISTANT",
        items: [
          "กำหนดบทบาท: EA, Research, Meeting, Decision Analyst",
          "นิยามหน้าที่ ขอบเขต น้ำเสียง และรูปแบบรายงาน",
          "กำหนดเรื่องที่ AI ต้องถามก่อนทำ",
        ],
      },
      {
        day: "MODULE 03 — SECOND BRAIN ARCHITECTURE",
        items: [
          "Projects, Areas, Resources, Archives",
          "Meeting Notes, Decision Logs, People Notes",
          "File Naming และ Metadata",
        ],
      },
      {
        day: "MODULE 04 — MEETING INTELLIGENCE",
        items: [
          "Pre-meeting Brief, Agenda, Background Research",
          "Meeting Summary, Decision Extraction, Action Items",
          "Owner, Deadline และ Follow-up Draft",
        ],
      },
      {
        day: "MODULE 05 — EXECUTIVE COMMUNICATION",
        items: [
          "Email Drafting และ Tone Adjustment",
          "Executive Summary, Proposal Review, Document Editing",
          "Stakeholder Update และ Message Templates",
        ],
      },
      {
        day: "MODULE 06 — DECISION SUPPORT",
        items: [
          "Decision Context, Options, Pros and Cons, Risks",
          "Reversible vs Irreversible Decisions",
          "Recommendation, Confidence Level, Post-decision Review",
        ],
      },
      {
        day: "MODULE 07 — WEEKLY CONTROL SYSTEM",
        items: [
          "Weekly Review, Project Status, Open Decisions",
          "Risk List, Priority Setting, Calendar Prep",
          "Delegation List และ Personal Reflection",
        ],
      },
    ],
    duration: "2 วันเต็ม",
    level: "Foundation–Intermediate — ไม่จำเป็นต้องเขียนโค้ด",
    instructor: THANAKORN,
    price: 12900,
    seatsTotal: 24,
    seatsAvailable: 24,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 128,
    proofMode: "waitlist",
    category: "02 · DELEGATE",
    tags: ["Personal AI", "Second Brain", "Meeting Intelligence", "Notion", "Granola"],
    coverImage: PEXELS(3582392),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "ออกแบบ Personal AI Assistant ที่เข้าใจวิธีทำงานของคุณ",
      "สร้าง Second Brain รวบข้อมูลกระจัดกระจายให้ดึงกลับมาใช้ได้",
      "สร้างระบบเตรียม–สรุปประชุมและติดตามการตัดสินใจ",
    ],
    bonuses: [
      "Final Project: Personal AI Operating System",
      "Executive System Prompt + Meeting & Decision Workflow",
      "Weekly Review System พร้อม Communication Library",
    ],
    notFor: [
      "คุณยังไม่เคยใช้ AI ทำงานจริงเลย — เริ่มที่ Claude Operator ก่อนจะคุ้มกว่า",
      "งานของคุณยังไม่ล้นมือ และยังไม่มีข้อมูล/การประชุมมากพอให้จัดระบบ",
    ],
  },
  {
    id: "c-godmode",
    slug: "claude-godmode",
    title: "Claude Godmode",
    edition: "Creative Intelligence",
    subtitle:
      "ไม่ใช่คอร์สกดสร้างภาพ แต่คือการเปลี่ยนรสนิยมที่อธิบายยาก ให้เป็นระบบกำกับงานสร้างสรรค์ที่ AI ทำต่อได้",
    description:
      "AI สร้างงานได้เร็ว แต่ยังต้องการคนที่มีวิจารณญาณกำหนดว่าอะไรควรถูกสร้าง สอน Creative Director และ Art Director ให้คิด Concept นิยามรสนิยม และกำกับหลายเครื่องมือให้ไปในทิศทางเดียวกัน",
    syllabus: [
      {
        day: "MODULE 01 — CREATIVE INTELLIGENCE",
        items: [
          "Taste vs Output, Idea vs Execution",
          "Direction vs Generation และ Human Judgement",
          "Originality in the AI Era, Reference Literacy",
        ],
      },
      {
        day: "MODULE 02 — CONCEPT BEFORE PROMPT",
        items: [
          "Framework: Human Truth, Tension, Point of View",
          "Big Idea, Visual Metaphor, Narrative",
          "Workshop: เปลี่ยนโจทย์ธุรกิจเป็น Creative Platform",
        ],
      },
      {
        day: "MODULE 03 — TRANSLATING TASTE",
        items: [
          "Era, Art Movement, Composition, Colour, Lighting",
          "Texture, Material, Lens, Movement, Emotion",
          "Imperfection และ Degree of Realism",
        ],
      },
      {
        day: "MODULE 04 — VISUAL PROMPT ARCHITECTURE",
        items: [
          "Subject, World, Context, Style, Composition",
          "Camera, Lighting, Material, Colour, Emotion",
          "Negative Direction และ Consistency Reference",
        ],
      },
      {
        day: "MODULE 05 — BRAND WORLD BUILDING",
        items: [
          "Visual DNA, Recurring Motif, Character",
          "Environment, Object Language, Image Treatment",
          "Motion Behaviour และ Sound Personality",
        ],
      },
      {
        day: "MODULE 06 — AI CREATIVE PIPELINE",
        items: [
          "Concept → Visual Direction → ภาพต้นแบบ",
          "ปรับ Style/Consistency → Motion → Voice & Sound",
          "ตัดต่อเป็น Campaign Asset หลายช่องทาง",
        ],
      },
      {
        day: "MODULE 07 — CREATIVE REVIEW",
        items: [
          "Conceptual Clarity, Brand Relevance, Consistency",
          "Emotional Impact, Cultural Fit, Craft",
          "Distinctiveness และ Ethical/Legal Risk",
        ],
      },
    ],
    duration: "2–3 วัน (Intensive Lab)",
    level: "Intermediate — ไม่จำเป็นต้องวาดรูปหรือเขียนโค้ด",
    instructor: MANASWEE,
    price: 14900,
    seatsTotal: 18,
    seatsAvailable: 18,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 41,
    proofMode: "waitlist",
    category: "03 · CREATE",
    tags: ["Art Direction", "Midjourney", "Runway", "ElevenLabs", "Creative Pipeline"],
    coverImage: PEXELS(29506609),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "เปลี่ยน Abstract Idea ให้เป็น Creative Framework",
      "สร้าง Visual Language และคุม Consistency ข้ามเครื่องมือ",
      "กำกับ Image, Video, Voice, Sound ให้อยู่ในโลกเดียวกัน",
    ],
    bonuses: [
      "Final Project: AI Creative Direction System",
      "Visual World + Moodboard + Key Visual Series",
      "Creative Review Checklist + Production Pipeline",
    ],
    notFor: [
      "คุณอยากเรียนแค่วิธีกดเจนภาพสวย ๆ — คอร์สนี้เน้น Concept และการกำกับ ไม่ใช่ปุ่ม",
      "คุณยังไม่มีบริบทงาน Creative/Brand/Content ให้เอามาใช้เป็นโจทย์จริง",
    ],
  },
  {
    id: "c-aesthetic",
    slug: "claude-code-aesthetic-frontend",
    title: "Claude Code · The Aesthetic Front-End",
    edition: "Design-First Development",
    subtitle:
      "AI สร้างเว็บได้ใน 1 นาที แต่เว็บที่มีรสนิยมและ Character ต้องใช้ชั้นเชิงการกำกับระดับ Art Director",
    description:
      "อยู่ระหว่าง Design, Creative Direction และ Front-End สอนกำกับ Claude Code ให้สร้างเว็บที่มี Art Direction, Typography, Motion และ Interaction โดยไม่ตกลงไปในรูปแบบ Template ที่เหมือนกันทุกเว็บ — ไม่ต้องเป็น Developer",
    syllabus: [
      {
        day: "MODULE 01 — ART DIRECTION FOR DIGITAL",
        items: [
          "Brand to Interface และ Digital Personality",
          "Visual Hierarchy และ Editorial Composition",
          "Motion Personality และการเลี่ยง Template Aesthetics",
        ],
      },
      {
        day: "MODULE 02 — DESIGN SYSTEM FOR AI",
        items: [
          "Colour Tokens, Typography Scale, Spacing, Grid",
          "Radius, Surface, States, Motion Tokens",
          "Component Rules และ Image Direction",
        ],
      },
      {
        day: "MODULE 03 — PROMPTING CLAUDE CODE",
        items: [
          "Project Brief, Technical & Design Context",
          "Acceptance Criteria และ Asking for Plan First",
          "Incremental Building และ Preventing Regression",
        ],
      },
      {
        day: "MODULE 04 — EDITORIAL LAYOUT",
        items: [
          "Grid, Asymmetry, Scale, Whitespace",
          "Crop, Overlap, Sticky, Scroll Narrative",
          "Thai และ English Typography",
        ],
      },
      {
        day: "MODULE 05 — MOTION SYSTEM",
        items: [
          "Entrance, Scroll, Hover, Page Transition",
          "Mask Reveal, Parallax, Text Animation",
          "Framer Motion, GSAP, Reduced Motion",
        ],
      },
      {
        day: "MODULE 06 — CREATIVE FRONT-END",
        items: [
          "SVG, Canvas, WebGL, Three.js",
          "Shader, Mouse Interaction, Fluid Gradient",
          "Generative Pattern และ Performance Budget",
        ],
      },
      {
        day: "MODULE 07 — RESPONSIVE & PRODUCTION",
        items: [
          "Mobile-first Review และ Image Optimisation",
          "Font Loading, Accessibility, SEO, Open Graph",
          "Performance, Deployment, Error Monitoring",
        ],
      },
    ],
    duration: "3 วัน / 4 สัปดาห์ (Lab)",
    level: "Intermediate — พร้อมอ่านโครงสร้างโค้ด (ไม่ต้องเขียนคล่อง)",
    instructor: MANASWEE,
    price: 15900,
    seatsTotal: 18,
    seatsAvailable: 18,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 63,
    proofMode: "waitlist",
    category: "04 · DESIGN",
    tags: ["Claude Code", "Next.js", "Framer Motion", "GSAP", "Three.js"],
    coverImage: PEXELS(326514),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "แปล Brand Strategy เป็น Digital Art Direction",
      "สั่ง Claude Code สร้าง Design System และ Motion ที่ไม่เหมือน Template",
      "สร้าง Responsive Experience แล้ว Deploy จริง",
    ],
    bonuses: [
      "Final Project: Deployed Digital Experience",
      "Design Tokens + Responsive Component Library",
      "Hero + Motion Section, Deploy บนโดเมนจริง",
    ],
    notFor: [
      "คุณไม่พร้อมแตะโครงสร้างโค้ดเลยแม้แต่น้อย — ต้องอ่านโค้ดเป็นบ้าง (ไม่ต้องเขียนคล่อง)",
      "คุณต้องการเว็บเสร็จเร็ว ๆ แบบไหนก็ได้ — คอร์สนี้เน้นรสนิยมและระบบ ไม่ใช่ความเร็วอย่างเดียว",
    ],
  },
  {
    id: "c-startup",
    slug: "claude-code-one-man-startup",
    title: "Claude Code · The One-Man Startup",
    edition: "From Prompt to Production",
    subtitle:
      "เปลี่ยนไอเดียธุรกิจให้เป็น Web App ที่มีผู้ใช้ ระบบข้อมูล และการชำระเงินจริง โดยกำกับ AI ในฐานะ Product Builder",
    description:
      "ลดระยะห่างระหว่างไอเดียกับ Product ที่ผู้ใช้ทดลองได้จริง สอนสาย Business/Marketing/Creative ให้สร้าง Prototype และ MVP รุ่นแรกได้เร็วพอที่จะทดสอบตลาดก่อนลงทุนใหญ่",
    syllabus: [
      {
        day: "MODULE 01 — PRODUCT BEFORE CODE",
        items: [
          "User, Problem, Value Proposition, Core Action",
          "MVP: Must-have vs Nice-to-have",
          "Workshop: One-page Product Brief",
        ],
      },
      {
        day: "MODULE 02 — USER FLOW & SCOPE",
        items: [
          "User Journey, Entry Point, Registration",
          "Empty State, Error State, Confirmation",
          "Admin Workflow และ Permission",
        ],
      },
      {
        day: "MODULE 03 — SYSTEM ARCHITECTURE",
        items: [
          "Front-end, Back-end, Database, API",
          "Authentication, Storage, Email, Payment",
          "Analytics, Hosting, Environment Variables",
        ],
      },
      {
        day: "MODULE 04 — DATABASE & AUTHENTICATION",
        items: [
          "Table, Field, Relationship, CRUD",
          "Role, Permission, Authentication, Authorisation",
          "Data Validation และ Security Basics",
        ],
      },
      {
        day: "MODULE 05 — BUILDING WITH CLAUDE CODE",
        items: [
          "Repository Setup, Architecture Plan, Milestone",
          "Feature Branch, Component Build, API Integration",
          "Error Review, Testing, Refactoring",
        ],
      },
      {
        day: "MODULE 06 — BUSINESS FUNCTIONS",
        items: [
          "Booking, Membership, Payment, Subscription",
          "Dashboard, Email Confirmation, File Upload",
          "Search, Filter, Admin Management",
        ],
      },
      {
        day: "MODULE 07 — TESTING & DEPLOYMENT",
        items: [
          "Functional & User Testing, Edge Cases",
          "Production Environment, Domain, Deployment",
          "Rollback และ Release Checklist",
        ],
      },
      {
        day: "MODULE 08 — MEASURE & ITERATE",
        items: [
          "Activation, Conversion, Retention, Drop-off",
          "Event Tracking และ Feedback Collection",
          "Product Backlog และ Version Roadmap",
        ],
      },
    ],
    duration: "4–6 สัปดาห์ (Lab) / 4 วัน Intensive",
    level: "Intermediate–Advanced — ไม่ต้องเป็น Developer แต่พร้อมเรียน Technical Concept",
    instructor: PAWARIS,
    price: 18900,
    seatsTotal: 16,
    seatsAvailable: 16,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "ใกล้เปิดจอง",
    launchDate: "2026-08-30",
    proofMode: "countdown",
    category: "05 · BUILD",
    tags: ["Claude Code", "Supabase", "Stripe", "Next.js", "Vercel"],
    coverImage: PEXELS(3747115),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "เปลี่ยน Business Idea เป็น Product Scope และ User Flow",
      "สร้าง Front-end, Database, Auth และ Payment ด้วย AI",
      "Deploy MVP ที่พร้อมให้ผู้ใช้จริงทดลอง",
    ],
    bonuses: [
      "Final Project: MVP พร้อมผู้ใช้จริง",
      "Front-end + Database + Auth + Core Feature",
      "Payment/Booking + Analytics + Deploy + V2 Roadmap",
    ],
    notFor: [
      "คุณยังไม่มีไอเดีย Product หรือปัญหาผู้ใช้ที่อยากแก้จริง ๆ",
      "คุณไม่พร้อมเรียนต่อเนื่องหลายสัปดาห์และทำการบ้านระหว่างสัปดาห์",
    ],
  },
  {
    id: "c-automation",
    slug: "ai-automation-architect",
    title: "AI Automation Architect",
    edition: "Build Your Digital Workforce",
    subtitle:
      "เปลี่ยนงานทำซ้ำที่กระจัดกระจาย ให้เป็น Workflow ที่รับข้อมูล ตัดสินใจ สร้างงาน และส่งต่อระบบได้เอง",
    description:
      "ก้าวจากการใช้ AI แบบแชท สู่การสร้างระบบที่ทำงานได้แม้ไม่มีคนเปิดหน้าต่างแชท — วิเคราะห์ Workflow ออกแบบ Logic คุมความเสี่ยง จัดการ Error และกำหนดจุดที่มนุษย์ต้องอนุมัติ",
    syllabus: [
      {
        day: "MODULE 01 — AUTOMATION OPPORTUNITY MAPPING",
        items: [
          "เกณฑ์: Frequency, Time, Error Rate, Rule Clarity",
          "Business Value, Risk, Human Judgement Required",
          "Workshop: Automation Opportunity Matrix",
        ],
      },
      {
        day: "MODULE 02 — WORKFLOW ARCHITECTURE",
        items: [
          "Trigger, Input, Transformation, Condition",
          "Decision, AI Step, Human Approval, Output",
          "Notification, Logging, Error Path",
        ],
      },
      {
        day: "MODULE 03 — DATA & INTEGRATION",
        items: [
          "API, Webhook, JSON, Authentication",
          "Header, Query Parameter, Data Mapping",
          "Database, Validation, Rate Limit",
        ],
      },
      {
        day: "MODULE 04 — AI INSIDE WORKFLOWS",
        items: [
          "Classification, Extraction, Summarisation",
          "Lead Qualification, Draft Generation, Routing",
          "Recommendation และ Structured Output",
        ],
      },
      {
        day: "MODULE 05 — HUMAN-IN-THE-LOOP",
        items: [
          "Approval Gate และ Confidence Threshold",
          "Escalation, Exception, Sensitive Actions",
          "Audit Trail และ Override",
        ],
      },
      {
        day: "MODULE 06 — ERROR HANDLING",
        items: [
          "Retry, Timeout, Duplicate Prevention",
          "Missing Data, Failed API, Alternate Path",
          "Notification, Logs, Monitoring",
        ],
      },
      {
        day: "MODULE 07 — BUSINESS AUTOMATION PATTERNS",
        items: [
          "Lead Capture, Proposal Generator, Sales Follow-up",
          "Content Pipeline, Support Triage, Invoice Workflow",
          "Weekly Report และ Meeting-to-Task",
        ],
      },
      {
        day: "MODULE 08 — DOCUMENTATION & HANDOVER",
        items: [
          "Workflow Diagram, Tool List, Credential Map",
          "Data Dictionary, Error Guide, SOP",
          "Owner, Maintenance Schedule, Change Log",
        ],
      },
    ],
    duration: "3 วัน / 4 สัปดาห์ (Lab)",
    level: "Intermediate — พร้อมเรียนรู้ API และ Data Structure เบื้องต้น",
    instructor: THANAKORN,
    price: 15900,
    seatsTotal: 20,
    seatsAvailable: 20,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "จองสิทธิ์รอบแรก",
    waitlistCount: 89,
    proofMode: "waitlist",
    category: "06 · AUTOMATE",
    tags: ["n8n", "Make", "Claude API", "Webhooks", "MCP"],
    coverImage: PEXELS(256502),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "วิเคราะห์ Workflow และออกแบบ Logic การตัดสินใจ",
      "เชื่อม API, Webhook และเรียก AI ใน Workflow",
      "วางระบบอนุมัติ, Error Handling และ Log ที่ทีมดูแลต่อได้",
    ],
    bonuses: [
      "Final Project: One Working Business Automation",
      "Workflow Map + Human Approval + Error Handling",
      "SOP + Maintenance Guide ที่ส่งต่อทีมได้",
    ],
    notFor: [
      "คุณอยากจ้างคนทำ Automation ให้ มากกว่าอยากเข้าใจและดูแลระบบเองได้",
      "คุณไม่พร้อมแตะ API, JSON และ Data Structure เบื้องต้น",
    ],
  },
  {
    id: "c-business-os",
    slug: "ai-business-os",
    title: "AI Business OS",
    edition: "Build an AI-Native Company",
    subtitle:
      "เปลี่ยนจากการทดลอง AI แบบกระจัดกระจาย ไปสู่ Transformation Roadmap ที่มีลำดับความสำคัญทั้งองค์กร",
    description:
      "สำหรับผู้นำที่ต้องตอบว่า ควรใช้ AI ตรงไหนก่อน Workflow ใดคุ้มที่สุด ต้องเตรียมข้อมูลอะไร และจะทำให้คนในองค์กรใช้งานจริงได้อย่างไร — ออกแบบระบบปฏิบัติการใหม่ที่คน ข้อมูล กระบวนการ และ AI ทำงานร่วมกัน",
    syllabus: [
      {
        day: "MODULE 01 — AI-NATIVE BUSINESS",
        items: [
          "Business using AI vs AI-enabled vs AI-native",
          "ผลต่อ Cost, Speed, Capacity, Customer Experience",
          "Decision Making และ Competitive Advantage",
        ],
      },
      {
        day: "MODULE 02 — AI READINESS ASSESSMENT",
        items: [
          "ประเมิน 6 ด้าน: Strategy, People, Process",
          "Data, Technology, Governance",
          "เห็นจุดติดขัดขององค์กรก่อนเริ่มลงทุน",
        ],
      },
      {
        day: "MODULE 03 — OPPORTUNITY MAPPING",
        items: [
          "ประเมิน Revenue, Cost, Speed, Quality, CX, Risk",
          "AI Opportunity Matrix ตาม Impact & Feasibility",
          "Data Readiness, Risk, Time to Value",
        ],
      },
      {
        day: "MODULE 04 — AI WORKFLOW REDESIGN",
        items: [
          "Remove, Simplify, Automate, Assist",
          "Escalate, Redesign, Measure",
          "ตั้งคำถามว่า Workflow ควรถูกออกแบบใหม่หรือไม่",
        ],
      },
      {
        day: "MODULE 05 — INTERNAL KNOWLEDGE SYSTEM",
        items: [
          "Source of Truth และ Knowledge Ownership",
          "Taxonomy, Permissions, Update Process",
          "Search, Retrieval, Knowledge Quality",
        ],
      },
      {
        day: "MODULE 06 — PEOPLE & ADOPTION",
        items: [
          "AI Literacy, Role Redesign, Skill Gap",
          "Champion Network, Training Plan, Incentive",
          "Resistance, Communication, Adoption Metrics",
        ],
      },
      {
        day: "MODULE 07 — GOVERNANCE & POLICY",
        items: [
          "Approved Tools, Sensitive Data, Human Review",
          "Customer Disclosure, Copyright, Bias",
          "Audit, Access Control, Incident Reporting",
        ],
      },
      {
        day: "MODULE 08 — MEASUREMENT",
        items: [
          "Hours Saved, Cycle Time, Error Reduction",
          "Adoption Rate, AI-assisted Revenue, CSAT",
          "Quality Score และ Risk Incident",
        ],
      },
      {
        day: "MODULE 09 — 90-DAY TRANSFORMATION ROADMAP",
        items: [
          "0–30: Audit, Select Use Cases, Policy, Train",
          "31–60: Pilot, Measure, Document SOP",
          "61–90: Expand, Integrate, Standardise, Report",
        ],
      },
    ],
    duration: "2 วัน Workshop + 30-Day Follow-up",
    level: "Executive / Strategic — ไม่จำเป็นต้องมีพื้นฐานเทคนิค",
    instructor: THANAKORN,
    price: 39900,
    seatsTotal: 20,
    seatsAvailable: 20,
    schedule: "รอประกาศรอบเปิดเรียน · เหมาะกับเรียนเป็นทีมจากองค์กรเดียวกัน",
    status: "coming_soon",
    statusLabel: "เปิดรับองค์กรที่สนใจ",
    waitlistCount: 22,
    proofMode: "waitlist",
    category: "07 · TRANSFORM",
    tags: ["AI Governance", "Readiness", "Roadmap", "Adoption", "KPI"],
    coverImage: PEXELS(3184465),
    accent: "neutral",
    businessType: "b2b",
    outcomes: [
      "ประเมิน AI Readiness และจัดลำดับ Use Case",
      "ออกแบบ AI Governance และ Internal Knowledge System",
      "สร้าง 90-Day Transformation Roadmap",
    ],
    bonuses: [
      "Final Project: AI Transformation Blueprint",
      "Opportunity Map + Prioritised Use Cases + Governance Model",
      "90-Day Implementation Roadmap + KPI Framework",
    ],
    notFor: [
      "คุณมาคนเดียวโดยไม่มีอำนาจตัดสินใจในองค์กร — คอร์สนี้ออกแบบให้มาเป็นทีม",
      "องค์กรของคุณต้องการแค่สอนพนักงานใช้เครื่องมือ ไม่ใช่วาง Transformation",
    ],
  },
  {
    id: "c-performance",
    slug: "performance-claude-deep-core",
    title: "Performance Claude · The Deep Core",
    edition: "Master the Machine",
    subtitle:
      "สำหรับ Power User ที่ชนกำแพง: Context เต็ม AI ลืมของสำคัญ Agent วนลูป — เจาะลึกกลไกใต้ Interface ของ Claude",
    description:
      "หลักสูตรขั้นสูงเรื่อง Context Architecture, System Prompt, Tool Use, MCP, Agent Workflow และ Evaluation สอนออกแบบ ทดสอบ และปรับปรุง AI System ที่มีโครงสร้าง เชื่อถือได้ และพร้อมสำหรับ Production",
    syllabus: [
      {
        day: "MODULE 01 — HOW CLAUDE USES CONTEXT",
        items: [
          "Context Window, Instruction Priority, Recency",
          "Relevance, Noise, Positioning, Context Dilution",
          "Lost-in-the-middle และ Token Economics",
        ],
      },
      {
        day: "MODULE 02 — CONTEXT ARCHITECTURE",
        items: [
          "การจัดชั้น Global / Role / Business / Task Context",
          "Reference, Memory, Tool Result, Output Schema",
          "อะไรควรใส่ถาวร เรียกเฉพาะงาน สรุป หรือตัดออก",
        ],
      },
      {
        day: "MODULE 03 — SYSTEM PROMPT ENGINEERING",
        items: [
          "Modular Prompt, Policy, Persona, Objective",
          "Workflow, Constraint, Output Contract",
          "Tool Policy, Escalation, Prompt Versioning",
        ],
      },
      {
        day: "MODULE 04 — STRUCTURED PROMPTING",
        items: [
          "XML Structure, Delimiters, Few-shot, Rubric",
          "Chain of Verification และ Self-review",
          "Multi-pass Workflow และ JSON Schema",
        ],
      },
      {
        day: "MODULE 05 — MEMORY DESIGN",
        items: [
          "User Preference, Business Fact, Project State",
          "Conversation Summary, Working Memory",
          "Write Policy, Retrieval, Conflict, Expiration",
        ],
      },
      {
        day: "MODULE 06 — TOOL USE & MCP",
        items: [
          "Tool Definition, Input Schema, Selection",
          "Permissions, Error Response, Retry, Validation",
          "MCP Architecture, Security Boundary, Logging",
        ],
      },
      {
        day: "MODULE 07 — AGENT WORKFLOW",
        items: [
          "Planner–Executor, Router, Reviewer",
          "Multi-agent, Supervisor, Human Approval",
          "State Machine และ Termination Condition",
        ],
      },
      {
        day: "MODULE 08 — RAG & KNOWLEDGE RETRIEVAL",
        items: [
          "Chunking, Metadata, Embedding",
          "Vector & Hybrid Search, Reranking",
          "Citation, Freshness, Permission-aware Retrieval",
        ],
      },
      {
        day: "MODULE 09 — EVALUATION",
        items: [
          "Evaluation Dataset, Expected Output, Rubric",
          "Accuracy, Completeness, Consistency, Safety",
          "Human & Model-based Eval, Regression Test",
        ],
      },
      {
        day: "MODULE 10 — PERFORMANCE OPTIMISATION",
        items: [
          "Prompt Simplification และ Context Compression",
          "Caching, Model Routing, Batch Processing",
          "Latency, Token Cost, Observability, Fallback",
        ],
      },
    ],
    duration: "3 วัน Intensive / 4–6 สัปดาห์ (Lab)",
    level: "Advanced — ใช้ Claude เป็นประจำ อ่าน JSON และโครงสร้างเทคนิคได้",
    instructor: PAWARIS,
    price: 16900,
    priceCompareAt: 19900,
    seatsTotal: 20,
    seatsAvailable: 20,
    schedule: "รอประกาศรอบเปิดเรียน",
    status: "coming_soon",
    statusLabel: "กำลังเปิดรับความสนใจ",
    waitlistCount: 57,
    proofMode: "waitlist",
    category: "08 · MASTER",
    tags: ["Context Architecture", "MCP", "Agent Workflow", "Evaluation", "RAG"],
    coverImage: PEXELS(12060425),
    accent: "neutral",
    businessType: "b2c",
    outcomes: [
      "ออกแบบ Context Architecture และ Memory",
      "สร้าง Tool Use, MCP และ Agent Workflow ที่คุมได้",
      "สร้าง Evaluation Set และลด Token/Latency สู่ Production",
    ],
    bonuses: [
      "Final Project: Advanced AI System",
      "Context Architecture + Memory + Agent Workflow",
      "Evaluation Dataset + Performance Benchmark",
    ],
    notFor: [
      "คุณเพิ่งเริ่มใช้ Claude — เริ่มที่ Claude Operator ก่อน คอร์สนี้ต่อยอดจากการใช้งานจริง",
      "คุณอยากได้เทคนิค Prompt เดี่ยว ๆ — คอร์สนี้ว่าด้วยการออกแบบและวัดผลทั้งระบบ",
    ],
  },
];

export interface LearningPath {
  id: string;
  name: string;
  persona: string;
  slugs: string[];
}

// เลือกเส้นทางตามบทบาท — ไม่ต้องเรียนครบทั้ง 8
export const learningPaths: LearningPath[] = [
  {
    id: "business-owner",
    name: "Business Owner",
    persona: "เจ้าของธุรกิจที่อยากให้ AI ช่วยรันทั้งบริษัท",
    slugs: ["claude-operator", "claude-co-worker", "ai-automation-architect", "ai-business-os"],
  },
  {
    id: "creative-leader",
    name: "Creative Leader",
    persona: "Creative / Art Director ที่อยากกำกับ AI ให้มีรสนิยม",
    slugs: [
      "claude-operator",
      "claude-godmode",
      "claude-code-aesthetic-frontend",
      "performance-claude-deep-core",
    ],
  },
  {
    id: "product-builder",
    name: "Product Builder",
    persona: "คนอยากสร้าง Product ตั้งแต่ไอเดียจนถึงผู้ใช้จริง",
    slugs: [
      "claude-operator",
      "claude-code-aesthetic-frontend",
      "claude-code-one-man-startup",
      "ai-automation-architect",
      "performance-claude-deep-core",
    ],
  },
  {
    id: "executive",
    name: "Executive",
    persona: "ผู้บริหารที่ต้องวางทิศทาง AI ให้ทั้งองค์กร",
    slugs: ["claude-operator", "claude-co-worker", "ai-business-os"],
  },
  {
    id: "ai-power-user",
    name: "AI Power User",
    persona: "คนที่ใช้ AI หนักและอยากทะลุขีดจำกัดเดิม",
    slugs: [
      "claude-operator",
      "ai-automation-architect",
      "claude-code-one-man-startup",
      "performance-claude-deep-core",
    ],
  },
];

// สิ่งที่ได้กลับบ้าน — ดึงจาก Final Project ของแต่ละคอร์ส
export function courseDeliverable(course: Course): string {
  return (course.bonuses[0] ?? "").replace(/^Final Project:\s*/, "").split(" — ")[0];
}

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
