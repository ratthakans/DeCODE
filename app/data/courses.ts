export type CourseModule = {
  index: string;
  title: string;
  summary: string;
  topics: string[];
};

export type Course = {
  id: string;
  slug: string;
  verb: string;
  title: string;
  subtitle: string;
  promise: string;
  description: string;
  audience: string[];
  notFor: string;
  duration: string;
  schedule: string;
  level: string;
  format: string;
  skills: string[];
  stack: string[];
  outcomes: string[];
  modules: CourseModule[];
  capstone: string;
  nextStep: string;
  image: string;
  imagePage: string;
};

export const courses: Course[] = [
  {
    id: "01",
    slug: "claude-operator",
    verb: "OPERATE",
    title: "Claude Operator",
    subtitle: "BECOME AN AI DIRECTOR",
    promise: "เปลี่ยน Claude ให้เข้าใจธุรกิจ และรับงานยากได้เหมือนพนักงานอาวุโส",
    description: "เลิกใช้ AI แบบถามทีละคำถาม แล้วสร้างพื้นที่ทำงานที่มีบริบทธุรกิจครบถ้วน คุณจะเรียนรู้วิธีวางบทบาท จัดข้อมูล และออกแบบขั้นตอนมอบหมายงานให้ AI ทำงานได้อย่างสม่ำเสมอ ตรวจสอบได้ และนำกลับมาใช้ซ้ำได้จริง",
    audience: ["ผู้ประกอบการที่ต้องการลดงานประจำ", "ผู้บริหารและหัวหน้าทีม", "ผู้ใช้ Claude หรือ ChatGPT ที่ยังได้ผลลัพธ์ไม่สม่ำเสมอ", "ทีมที่ต้องการเริ่มต้นสร้าง AI SOP"],
    notFor: "ไม่จำเป็นต้องเขียนโค้ด แต่ไม่เหมาะกับผู้ที่ต้องการเพียงรายการ Prompt สำเร็จรูปโดยไม่ปรับให้เข้ากับธุรกิจ",
    duration: "2 วัน · 12 ชั่วโมง",
    schedule: "09:30–16:30 น.",
    level: "พื้นฐาน–กลาง",
    format: "Workshop · ลงมือทำกับธุรกิจของผู้เรียน",
    skills: ["Prompt Engineering", "Context Engineering", "Claude Projects", "Business Knowledge Setup", "Role Architecture", "Task Architecture", "AI SOP", "Workflow Design"],
    stack: ["Claude", "ChatGPT", "Gemini", "NotebookLM", "Notion", "Google Workspace", "Perplexity"],
    outcomes: ["Claude Business Workspace", "Business Master Context", "System Prompt ประจำธุรกิจ", "AI SOP อย่างน้อย 3 กระบวนการ", "Workflow ที่พร้อมใช้งานจริง"],
    modules: [
      { index: "01", title: "จาก User สู่ Director", summary: "เข้าใจข้อจำกัดของโมเดลและเปลี่ยนวิธีสั่งงานจากคำถามเป็น Brief", topics: ["AI delegation model", "คุณภาพของคำสั่ง", "เกณฑ์ตรวจงาน"] },
      { index: "02", title: "Business Context", summary: "จัดระเบียบข้อมูลธุรกิจให้ Claude เข้าใจเป้าหมาย ลูกค้า ภาษา และข้อจำกัด", topics: ["Master context", "Knowledge hierarchy", "Claude Projects"] },
      { index: "03", title: "Role & Task Architecture", summary: "ออกแบบบทบาทและขั้นตอนงานให้ผลลัพธ์สม่ำเสมอและส่งต่อง่าย", topics: ["System prompt", "Role architecture", "Task template"] },
      { index: "04", title: "AI SOP in Practice", summary: "เปลี่ยนงานประจำให้เป็น SOP ที่คนและ AI ใช้ร่วมกันได้", topics: ["Workflow mapping", "Quality gate", "Iteration loop"] },
    ],
    capstone: "สร้าง Claude Business Workspace ของตัวเอง พร้อม Master Context, System Prompt และ AI SOP 3 กระบวนการ",
    nextStep: "เรียนต่อ Claude Co-worker เพื่อสร้างระบบผู้ช่วยส่วนตัว หรือ Claude with Automated Ads Management เพื่อนำบริบทไปใช้กับงานการตลาด",
    image: "/media/course-01.jpg",
    imagePage: "https://www.pexels.com/photo/programming-code-on-laptop-with-developer-hands-37880001/",
  },
  {
    id: "02",
    slug: "claude-co-worker",
    verb: "DELEGATE",
    title: "Claude Co-worker",
    subtitle: "BUILD YOUR SECOND BRAIN",
    promise: "โยนงานให้ AI อย่างเป็นระบบ แล้วนำเวลากลับไปใช้กับเรื่องที่สำคัญกว่า",
    description: "คอร์สนี้ไม่ได้สอนให้คุณทำงานมากขึ้น แต่สอนให้คุณทำน้อยลง เปลี่ยน Claude ให้เป็นเลขา นักวิเคราะห์ และผู้ช่วยส่วนตัวที่เตรียมประชุม สรุปเอกสาร วางแผนสัปดาห์ และช่วยตัดสินใจได้อย่างต่อเนื่อง",
    audience: ["ผู้บริหารและ Founder ที่มีข้อมูลล้นมือ", "ที่ปรึกษาและ Knowledge Worker", "คนที่ประชุมและอ่านเอกสารจำนวนมาก", "ผู้ที่ต้องการระบบจัดการความรู้ส่วนตัว"],
    notFor: "ไม่ใช่คอร์ส Automation แบบไร้คนควบคุม ผู้เรียนยังเป็นผู้ตัดสินใจและตรวจคุณภาพงานสำคัญ",
    duration: "2 วัน · 12 ชั่วโมง",
    schedule: "09:30–16:30 น.",
    level: "พื้นฐาน–กลาง",
    format: "Workshop · ใช้เอกสารและตารางงานจริง",
    skills: ["Executive AI Assistant", "Personal Knowledge System", "Meeting Preparation", "Meeting Summaries", "Research Workflow", "Calendar Planning", "Decision Support"],
    stack: ["Claude", "ChatGPT", "Notion", "NotebookLM", "Granola", "Gmail", "Google Calendar", "Slack"],
    outcomes: ["Executive AI Assistant", "Personal Knowledge Base", "Meeting Workflow", "Weekly Planning System", "Decision Framework", "Personal AI Operating Manual"],
    modules: [
      { index: "01", title: "Your Work OS", summary: "สำรวจภาระงานและเลือกสิ่งที่ AI ควรช่วย ไม่ควรช่วย และต้องขออนุมัติ", topics: ["Work audit", "Delegation matrix", "Privacy boundary"] },
      { index: "02", title: "Personal Knowledge", summary: "สร้างโครงสร้างความรู้ที่ค้นง่ายและป้อนบริบทให้ AI ได้ทันที", topics: ["Capture", "Organise", "Retrieve"] },
      { index: "03", title: "Meetings & Research", summary: "เตรียมประชุม สรุป และเปลี่ยนข้อมูลเป็น Action ที่ตามต่อได้", topics: ["Meeting brief", "Decision log", "Research memo"] },
      { index: "04", title: "Weekly Executive Loop", summary: "ออกแบบจังหวะวางแผนรายวันและรายสัปดาห์ที่ผู้ช่วย AI ทำงานร่วมกับคุณ", topics: ["Weekly review", "Priority planning", "Follow-up"] },
    ],
    capstone: "สร้าง Personal AI Operating Manual พร้อมระบบประชุม ฐานความรู้ และ Weekly Planning ที่ใช้ต่อได้ทันที",
    nextStep: "เรียนต่อ Claude Operator หากต้องการยกระดับบริบทธุรกิจ หรือ Claude with Automated Ads Management เพื่อสร้างระบบดูแลแคมเปญ",
    image: "/media/course-02.jpg",
    imagePage: "https://www.pexels.com/photo/hands-and-laptop-computer-4968535/",
  },
  {
    id: "03",
    slug: "claude-godmode",
    verb: "CREATE",
    title: "Claude Godmode",
    subtitle: "CREATIVE INTELLIGENCE",
    promise: "คิด บรีฟ และกำกับ AI โดยไม่สูญเสียรสนิยมของมนุษย์",
    description: "นี่ไม่ใช่คอร์สสอนเจนรูป แต่เป็นห้องทดลองสำหรับเปลี่ยนความคิดนามธรรมให้เป็นภาษาที่ AI เข้าใจ เรียนรู้การวางคอนเซปต์ สร้างโลกของแบรนด์ และกำกับภาพ เสียง และเรื่องเล่าในฐานะ Creative Director",
    audience: ["Creative Director และ Art Director", "Designer และ Content Creator", "เจ้าของเอเจนซีและ Production", "Brand Owner ที่ต้องควบคุมคุณภาพงานสร้างสรรค์"],
    notFor: "ไม่ใช่คลาสรวมสูตร Prompt หรือคลาสสอนใช้เครื่องมือทีละปุ่ม ผู้เรียนควรพร้อมวิจารณ์และพัฒนางานหลายรอบ",
    duration: "2 วัน · 14 ชั่วโมง",
    schedule: "09:30–17:30 น.",
    level: "กลาง",
    format: "Creative Lab · Critique · Production Sprint",
    skills: ["Visual Thinking", "Creative Direction", "Prompt Art Direction", "Style Translation", "Concept Development", "Narrative Design", "Brand World Building"],
    stack: ["Claude", "Midjourney", "Flux", "Krea", "Runway", "Veo", "ElevenLabs", "Suno", "Adobe Firefly"],
    outcomes: ["Creative Direction Framework", "Visual Prompt System", "Brand Mood & World", "Campaign Concept", "Key Visual Series", "Creative AI Workflow"],
    modules: [
      { index: "01", title: "Taste Before Tools", summary: "แยก Mood, Style, Form และความรู้สึก เพื่อบอกได้ว่างานดีเพราะอะไร", topics: ["Visual vocabulary", "Reference analysis", "Taste framework"] },
      { index: "02", title: "Concept Architecture", summary: "เปลี่ยนโจทย์ธุรกิจเป็นแก่นความคิด เรื่องเล่า และระบบภาพที่ขยายต่อได้", topics: ["Big idea", "Narrative", "Visual territory"] },
      { index: "03", title: "Prompt Art Direction", summary: "สร้างภาษากำกับภาพที่ชัดและรักษาความต่อเนื่องของโลกแบรนด์", topics: ["Style translation", "Shot system", "Consistency"] },
      { index: "04", title: "Campaign Production", summary: "ผลิต Key Visual หลายชิ้นและใช้ Critique Loop ยกระดับคุณภาพ", topics: ["Selection", "Critique", "Production workflow"] },
    ],
    capstone: "สร้าง Campaign Concept, Brand World และชุด Key Visual พร้อมคู่มือกำกับการผลิตด้วย AI",
    nextStep: "เรียนต่อ The Aesthetic Front-End เพื่อนำ Visual Direction ไปสร้างประสบการณ์ดิจิทัล",
    image: "/media/course-03.jpg",
    imagePage: "https://www.pexels.com/photo/creative-design-studio-mood-board-arrangement-37178210/",
  },
  {
    id: "04",
    slug: "aesthetic-front-end",
    verb: "DESIGN",
    title: "Claude Code: The Aesthetic Front-End",
    subtitle: "CLAUDE CODE · DESIGN-FIRST DEVELOPMENT",
    promise: "สร้างเว็บไซต์ที่ AI ทำได้เร็ว และมนุษย์อยากใช้จริง",
    description: "AI สร้างเว็บได้ในไม่กี่นาที แต่เว็บที่มีรสนิยม จังหวะ และมูลค่าที่รับรู้ได้ยังต้องการสายตาของ Art Director คอร์สนี้พาคุณออกจากเทมเพลตสำเร็จรูป สู่ประสบการณ์ดิจิทัลที่มีคาแรกเตอร์และเคลื่อนไหวอย่างมีเหตุผล",
    audience: ["Designer และ Art Director ที่อยากสร้างเว็บเอง", "Creative และ Marketer ที่ต้องกำกับ Developer", "ผู้ใช้ Claude Code หรือ Cursor ระดับเริ่มต้น", "เจ้าของแบรนด์ที่ต้องการเว็บไซต์มีเอกลักษณ์"],
    notFor: "ไม่ต้องเป็น Developer แต่ควรเข้าใจพื้นฐาน Layout และพร้อมอ่านโค้ดบางส่วน คอร์สไม่เน้นระบบหลังบ้านซับซ้อน",
    duration: "3 วัน · 18 ชั่วโมง",
    schedule: "09:30–16:30 น.",
    level: "กลาง",
    format: "Design-to-Code Workshop",
    skills: ["Art Direction for Web", "Editorial Layout", "Responsive Design", "Design Systems", "Interaction Design", "Motion Design", "Creative Coding"],
    stack: ["Claude Code", "Cursor", "GitHub", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Figma"],
    outcomes: ["เว็บไซต์ที่เผยแพร่ใช้งานจริง", "Responsive Design System", "Web Animation", "Interactive Section", "Reusable Components", "Design & Code Documentation"],
    modules: [
      { index: "01", title: "Direction, Not Decoration", summary: "กำหนดคอนเซปต์ ประสบการณ์ และระบบอ้างอิงก่อนเริ่มเขียนโค้ด", topics: ["Creative brief", "Reference system", "Visual hierarchy"] },
      { index: "02", title: "Editorial Interface", summary: "แปลง Grid, Type, Spacing และ Color ให้เป็น Design System ที่ยืดหยุ่น", topics: ["12-column grid", "Type scale", "Design tokens"] },
      { index: "03", title: "Code with Taste", summary: "สั่ง Claude Code ให้สร้าง Component โดยรักษาทิศทางภาพและคุณภาพโค้ด", topics: ["Component brief", "Responsive states", "Review code"] },
      { index: "04", title: "Motion & Launch", summary: "เพิ่ม Interaction ที่มีเหตุผล ตรวจ Accessibility และเผยแพร่เว็บไซต์", topics: ["Motion principles", "Performance", "Deployment"] },
    ],
    capstone: "ออกแบบและเผยแพร่เว็บไซต์ Responsive ที่มี Design System, Motion และ Interactive Section ของตัวเอง",
    nextStep: "เรียนต่อ The One-Man Startup เพื่อเพิ่ม Database, Login และระบบธุรกิจหลังบ้าน",
    image: "/media/course-04.jpg",
    imagePage: "https://www.pexels.com/photo/designers-working-together-with-templates-6322375/",
  },
  {
    id: "05",
    slug: "one-man-startup",
    verb: "BUILD",
    title: "Claude Code: The One-Man Startup",
    subtitle: "CLAUDE CODE · PROMPT TO PRODUCTION",
    promise: "ลดระยะห่างระหว่างไอเดีย กับผลิตภัณฑ์ที่ใช้งานได้จริง",
    description: "เปลี่ยนคนสายธุรกิจ การตลาด และครีเอทีฟให้คิดแบบ System Architect คุณจะสร้าง Web Application ตั้งแต่โจทย์แรก โครงสร้างข้อมูล ระบบสมาชิก การรับชำระเงิน ไปจนถึงการเผยแพร่และวัดผลผลิตภัณฑ์",
    audience: ["Founder ที่ต้องการทดสอบไอเดียเร็วขึ้น", "Business, Marketer และ Creative Builder", "Product Manager ที่ต้องการสร้าง Prototype เอง", "ผู้ที่ผ่านพื้นฐาน Claude Code มาแล้ว"],
    notFor: "ไม่ใช่ทางลัดแทนวิศวกรรมซอฟต์แวร์สำหรับระบบความเสี่ยงสูง แต่เหมาะกับ MVP และผลิตภัณฑ์ธุรกิจที่มีขอบเขตชัด",
    duration: "4 สัปดาห์ · 24 ชั่วโมง",
    schedule: "สัปดาห์ละ 2 ครั้ง · ครั้งละ 3 ชั่วโมง",
    level: "กลาง–สูง",
    format: "Cohort Lab · Office Hours · Build Sprint",
    skills: ["Product Thinking", "System Architecture", "Front-End", "Back-End", "Database Design", "Authentication", "API Integration", "Payment", "Deployment"],
    stack: ["Claude Code", "Cursor", "GitHub", "Next.js", "Supabase", "Vercel", "Stripe", "Clerk", "Resend", "PostHog"],
    outcomes: ["Deployed Web Application", "Login & User System", "Database", "Admin Dashboard", "Payment หรือ Booking", "Analytics Setup", "Product Roadmap"],
    modules: [
      { index: "01", title: "Product Definition", summary: "ลดไอเดียให้เหลือ Core Loop และขอบเขต MVP ที่สร้างเสร็จได้", topics: ["User problem", "Core loop", "MVP scope"] },
      { index: "02", title: "System Architecture", summary: "วาง Data Model, User Flow และโครงสร้างระบบก่อนลงมือเขียน", topics: ["Data schema", "Auth flow", "API map"] },
      { index: "03", title: "Build the Product", summary: "สร้าง Front-end, Back-end และเชื่อมบริการภายนอกอย่างเป็นขั้นตอน", topics: ["Feature sprint", "Integration", "Error handling"] },
      { index: "04", title: "Launch & Learn", summary: "เพิ่ม Analytics ทดสอบกับผู้ใช้ และวาง Roadmap รอบถัดไป", topics: ["Deployment", "Analytics", "Product iteration"] },
    ],
    capstone: "สร้าง Web Application ที่มีระบบสมาชิก ฐานข้อมูล Admin และ Payment หรือ Booking พร้อมเผยแพร่ใช้งานจริง",
    nextStep: "เรียนต่อ Claude with Automated Ads Management เพื่อประยุกต์ Product Thinking กับระบบการตลาดและการวัดผล",
    image: "/media/course-05.jpg",
    imagePage: "https://www.pexels.com/photo/person-coding-on-laptop-3862142/",
  },
  {
    id: "06",
    slug: "claude-automated-ads-management",
    verb: "OPTIMISE",
    title: "Claude with Automated Ads Management",
    subtitle: "AI-ASSISTED CAMPAIGN OPERATIONS",
    promise: "เปลี่ยนข้อมูลโฆษณาให้เป็นการตัดสินใจที่เร็วขึ้น โดยยังควบคุมงบและคุณภาพได้",
    description: "สร้างระบบดูแลโฆษณาที่ให้ Claude ช่วยอ่านผลลัพธ์ สรุป Insight เสนอการปรับงบ เตรียม Creative Brief และจัดทำรายงาน โดยมี Approval Gate ก่อนทุกการเปลี่ยนแปลงสำคัญ ผู้เรียนจะออกแบบ Workflow จากข้อมูลจริงของธุรกิจและกำหนดกติกาที่ทีมตรวจสอบย้อนหลังได้",
    audience: ["เจ้าของธุรกิจที่ดูแลโฆษณาด้วยตัวเอง", "Performance Marketer และ Growth Team", "เอเจนซีที่ต้องดูแลหลายแคมเปญ", "ทีมการตลาดที่ต้องการลดเวลาทำ Report และหา Insight"],
    notFor: "ไม่ใช่ระบบเปิดให้ AI ใช้งบแทนมนุษย์โดยอัตโนมัติ และไม่รับประกันผลตอบแทนจากโฆษณา ผู้เรียนต้องมีบัญชีโฆษณาหรือชุดข้อมูลตัวอย่างสำหรับ Workshop",
    duration: "3 วัน · 18 ชั่วโมง",
    schedule: "09:30–16:30 น.",
    level: "กลาง",
    format: "Ads Operations Lab · Human-approved Automation",
    skills: ["Campaign Context", "Ads Performance Analysis", "Creative Briefing", "Budget Recommendation", "Reporting Automation", "Workflow Design", "Approval Gates", "Experiment Design"],
    stack: ["Claude", "Google Ads", "Meta Ads Manager", "Google Analytics 4", "Looker Studio", "Google Sheets", "n8n", "Make", "Airtable"],
    outcomes: ["Ads Management Workspace", "Campaign Analysis Prompt System", "Budget Recommendation Workflow", "Creative Brief Generator", "Weekly Performance Report", "Human Approval Checklist"],
    modules: [
      { index: "01", title: "Business & Ads Context", summary: "จัดโครงสร้างเป้าหมาย กลุ่มลูกค้า Offer งบประมาณ และตัวชี้วัดให้ Claude อ่านบริบทแคมเปญได้ถูกต้อง", topics: ["Business context", "Campaign objective", "Metric hierarchy"] },
      { index: "02", title: "Campaign Copilot", summary: "สร้างระบบวิเคราะห์ Search Term, Audience, Creative และ Landing Page พร้อมคำแนะนำที่มีเหตุผลรองรับ", topics: ["Performance diagnosis", "Insight brief", "Creative feedback"] },
      { index: "03", title: "Optimisation Loop", summary: "ออกแบบวงจรทดลอง ตั้งสมมติฐาน เสนอการปรับงบ และติดตามผลโดยไม่ตัดสินจากตัวเลขระยะสั้นเพียงอย่างเดียว", topics: ["Experiment design", "Budget recommendation", "Learning agenda"] },
      { index: "04", title: "Safe Ads Automation", summary: "เชื่อมข้อมูล รายงาน และการแจ้งเตือน พร้อม Approval Gate, Log และกติกาหยุดระบบเมื่อข้อมูลผิดปกติ", topics: ["Workflow trigger", "Human approval", "Audit log"] },
    ],
    capstone: "สร้าง Ads Management Workspace ที่รับข้อมูลแคมเปญ วิเคราะห์ผล เสนอ Action และจัดทำ Weekly Report พร้อม Approval Gate ก่อนปรับงบ",
    nextStep: "นำระบบไปต่อยอดกับทีมการตลาดหรือเอเจนซี โดยเพิ่ม Data Source และกติกาการอนุมัติตามขนาดงบของธุรกิจ",
    image: "/media/course-06.jpg",
    imagePage: "https://www.pexels.com/photo/hands-typing-on-a-laptop-computer-5385526/",
  },
];

export const tracks = [
  { name: "BUSINESS", thai: "สำหรับผู้ประกอบการ ผู้บริหาร และทีมการตลาด", courseIds: ["01", "02", "06"] },
  { name: "BUILDER", thai: "สำหรับคนที่ต้องการสร้างเว็บไซต์ ผลิตภัณฑ์ และระบบ", courseIds: ["01", "04", "05", "06"] },
  { name: "CREATIVE", thai: "สำหรับ Creative Director, Designer และ Agency", courseIds: ["01", "03", "04", "06"] },
];

export const courseAccents = ["#C7FF43", "#78FFD6", "#55E6FF", "#C7FF43", "#78FFD6", "#55E6FF"];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getAdjacentCourses(slug: string) {
  const index = courses.findIndex((course) => course.slug === slug);
  return {
    previous: index > 0 ? courses[index - 1] : null,
    next: index < courses.length - 1 ? courses[index + 1] : null,
  };
}
