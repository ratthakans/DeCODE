import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CurriculumAccordion } from "../../components/CurriculumAccordion";
import { FluidField } from "../../components/FluidField";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { CourseSchema } from "../../components/StructuredData";
import { courses, getAdjacentCourses, getCourse } from "../../data/courses";
import { institutePhotos } from "../../data/institute";
import { pageMetadata } from "../../lib/page-metadata";

type PageProps = { params: Promise<{ slug: string }> };

function toolIcon(tool: string) {
  const rules: [string, string][] = [
    ["Claude", "anthropic"], ["ChatGPT", "openai"], ["OpenAI", "openai"], ["Gemini", "googlegemini"], ["Notion", "notion"],
    ["Perplexity", "perplexity"], ["GitHub", "github"], ["Next.js", "nextdotjs"], ["Tailwind", "tailwindcss"], ["Figma", "figma"],
    ["Supabase", "supabase"], ["Vercel", "vercel"], ["Stripe", "stripe"], ["Cloudflare", "cloudflare"], ["n8n", "n8n"], ["Zapier", "zapier"],
    ["Airtable", "airtable"], ["Slack", "slack"], ["HubSpot", "hubspot"], ["Gmail", "gmail"], ["Google Calendar", "googlecalendar"], ["ElevenLabs", "elevenlabs"],
  ];
  return rules.find(([name]) => tool.includes(name))?.[1] ?? null;
}

export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return pageMetadata(`${course.title} — DeCODE`, course.promise, `/programs/${course.slug}`);
}

export default async function ProgramPage({ params }: PageProps) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  const adjacent = getAdjacentCourses(course.slug);
  const photo = institutePhotos[Number(course.id) % institutePhotos.length];

  return <main className="program-detail">
    <CourseSchema course={course} />
    <SiteHeader />
    <section className="program-detail-hero">
      <FluidField className="program-fluid" variant="hero" />
      <div className="program-hero-copy grid-lines">
        <div className="course-breadcrumb mono" data-reveal="fade"><Link href="/programs">PROGRAMS</Link><span>/</span><span>{course.id}</span></div>
        <div data-reveal="line" data-delay="60"><span className="course-verb mono">{course.verb} · PROGRAM {course.id}</span><h1 lang="en">{course.title}</h1><p className="course-subtitle mono">{course.subtitle}</p></div>
        <p className="course-hero-promise" data-reveal="fade" data-delay="140">{course.promise}</p>
      </div>
      <div className="program-hero-image" data-reveal="image" data-parallax="18"><Image src={course.image} alt={`บรรยากาศการเรียนโปรแกรม ${course.title}`} fill priority sizes="(max-width: 820px) 100vw, 50vw" unoptimized /></div>
      <div className="program-fact-panel glass-surface" data-reveal="fade" data-delay="180">
        <div><span className="mono">DURATION</span><strong>{course.duration}</strong></div>
        <div><span className="mono">LEVEL</span><strong>{course.level}</strong></div>
        <div><span className="mono">FORMAT</span><strong>{course.format}</strong></div>
        <div><span className="mono">SCHEDULE</span><strong>{course.schedule}</strong></div>
        <Link href={`/contact?intent=program&program=${course.slug}`}>สอบถามรอบเรียนและค่าธรรมเนียม <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="program-overview page-shell">
      <span className="section-label mono" data-reveal="fade">01 / COURSE OVERVIEW</span>
      <div className="overview-grid" data-reveal="line"><h2 className="thai-heading" lang="th"><span className="headline-line">สิ่งที่โปรแกรมนี้</span><span className="headline-line"><em>ช่วยให้คุณทำได้</em></span></h2><div><p className="lead">{course.description}</p><div className="outcome-highlight"><span className="mono">LEAVE WITH</span><strong>{course.capstone}</strong></div></div></div>
      <div className="audience-grid" data-reveal="stagger"><div><span className="mono">BUILT FOR</span><ul>{course.audience.map((item) => <li key={item}>{item}</li>)}</ul></div><div><span className="mono">BEFORE YOU JOIN</span><p>{course.notFor}</p></div></div>
    </section>

    <section className="curriculum-section page-shell">
      <div className="section-heading split-heading" data-reveal="line"><div><span className="section-label mono">02 / CURRICULUM</span><h2 className="thai-heading" lang="th"><span className="headline-line">จากความเข้าใจ</span><span className="headline-line">ไปสู่ระบบที่ใช้งานได้</span></h2></div><p>แต่ละ Module เชื่อมต่อกันและใช้โจทย์ของผู้เรียนเป็นพื้นที่ทดลองหลัก</p></div>
      <CurriculumAccordion modules={course.modules} />
    </section>

    <section className="program-output page-shell">
      <span className="section-label mono" data-reveal="fade">03 / BUILD, NOT SLIDES</span>
      <div className="section-heading split-heading" data-reveal="line"><h2 className="thai-heading" lang="th"><span className="headline-line">สิ่งที่คุณสร้าง</span><span className="headline-line">ระหว่างโปรแกรม</span></h2><p>{course.capstone}</p></div>
      <div className="deliverable-grid" data-reveal="stagger">{course.outcomes.map((item, index) => <div key={item}><span className="mono">0{index + 1}</span><strong>{item}</strong></div>)}</div>
    </section>

    <section className="program-photo-break"><div data-reveal="image" data-parallax="20"><Image src={photo.src} alt={photo.alt} fill sizes="100vw" unoptimized /><div><span className="mono">THE WORKING SESSION</span><strong>{photo.caption}</strong></div></div></section>

    <section className="skills-section page-shell">
      <div data-reveal="line"><span className="section-label mono">04 / CAPABILITY</span><h2 className="thai-heading" lang="th"><span className="headline-line">ทักษะที่อยู่ต่อ</span><span className="headline-line">แม้เครื่องมือจะเปลี่ยน</span></h2><div className="skill-tags" data-reveal="stagger">{course.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      <div data-reveal="fade"><span className="section-label mono">TOOLS IN CONTEXT</span><div className="program-tool-grid" data-reveal="stagger">{course.stack.map((tool) => { const slug = toolIcon(tool); return <div key={tool}>{slug ? <Image src={`/brands/${slug}.svg`} alt={`${tool} logo`} width={26} height={26} unoptimized /> : <span className="tool-fallback" aria-hidden="true" />}<strong>{tool}</strong></div>; })}</div></div>
    </section>

    <section className="program-next"><FluidField className="cta-fluid" variant="cta" /><span className="section-label mono" data-reveal="fade">AFTER THIS PROGRAM</span><h2 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">เส้นทางต่อจาก</span><span className="headline-line"><em>โปรแกรมนี้</em></span></h2><p data-reveal="fade">{course.nextStep}</p><Link className="button-primary" href={`/contact?intent=program&program=${course.slug}`} data-reveal="fade">ปรึกษาโปรแกรมนี้ <span aria-hidden="true">↗</span></Link></section>

    <nav className="program-pagination" aria-label="เปลี่ยนโปรแกรม">
      {adjacent.previous ? <Link href={`/programs/${adjacent.previous.slug}`}><span className="mono">← PREVIOUS</span><strong>{adjacent.previous.title}</strong></Link> : <Link href="/programs"><span className="mono">← BACK</span><strong>Program Directory</strong></Link>}
      {adjacent.next ? <Link href={`/programs/${adjacent.next.slug}`}><span className="mono">NEXT →</span><strong>{adjacent.next.title}</strong></Link> : <Link href="/programs"><span className="mono">ALL PROGRAMS →</span><strong>Program Directory</strong></Link>}
    </nav>
    <SiteFooter />
  </main>;
}
