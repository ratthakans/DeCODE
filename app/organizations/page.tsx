import type { Metadata } from "next";
import Link from "next/link";
import { FluidField } from "../components/FluidField";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/page-metadata";

export const metadata: Metadata = pageMetadata("For Organizations — DeCODE", "AI Opportunity Audit, Executive Workshop และ Transformation Program สำหรับองค์กร", "/organizations");

const offers = [
  ["AI Opportunity Audit", "สำรวจงาน ข้อมูล ความเสี่ยง และโอกาสที่ให้ผลลัพธ์สูงก่อนเริ่มลงทุน"],
  ["Executive Workshop", "สร้างความเข้าใจร่วมและตัดสินใจว่าองค์กรควรเริ่มจากจุดไหน"],
  ["AI Business OS", "วาง Operating Model, Knowledge, SOP, Policy และ Roadmap 90 วัน"],
  ["Custom Build Lab", "ร่วมออกแบบ Pilot, Automation หรือ Internal Tool จาก Workflow จริง"],
];

export default function OrganizationsPage() {
  return <main>
    <SiteHeader />
    <section className="inner-hero organizations-hero grid-lines"><FluidField className="inner-fluid" variant="hero" /><span className="hero-kicker mono" data-reveal="fast">FOR ORGANIZATIONS</span><h1 className="thai-heading responsive-headline" lang="th" data-reveal="line"><span className="headline-set headline-desktop"><span className="headline-line">องค์กรไม่ควรเดินช้า</span><span className="headline-line">เพราะ <em>ระบบยังตามไม่ทัน</em></span></span><span className="headline-set headline-mobile"><span className="headline-line">องค์กรไม่ควรเดินช้า</span><span className="headline-line">เพราะระบบ</span><span className="headline-line"><em>ยังตามไม่ทัน</em></span></span></h1><p className="mixed-hero-copy" data-reveal="fade"><span lang="en">Build an organisation that moves at machine speed.</span><span>เปลี่ยน AI จากโครงการทดลองของคนไม่กี่คน ให้เป็นวิธีทำงานและ Digital Workforce ที่ทั้งองค์กรใช้ร่วมกันได้</span></p></section>
    <section className="organization-offers page-shell"><span className="section-label mono">01 / ENGAGEMENTS</span><div className="offer-grid" data-reveal="stagger">{offers.map(([title, copy], index) => <article key={title}><span className="mono">0{index + 1}</span><h2 lang="en">{title}</h2><p>{copy}</p></article>)}</div></section>
    <section className="organization-process page-shell"><div className="section-heading split-heading"><div><span className="section-label mono">02 / FROM AUDIT TO ADOPTION</span><h2 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">เปลี่ยนความตั้งใจ</span><span className="headline-line">ให้เป็นแผนที่เดินได้</span></h2></div><p>เริ่มจากบริบทธุรกิจ ไม่เริ่มจาก Tool แล้วสร้างจุดทดลองที่วัดผลได้ก่อนขยายไปทั้งองค์กร</p></div><ol className="process-timeline" data-reveal="stagger">{[["Discover","สัมภาษณ์และ Audit กระบวนการ"],["Prioritise","เลือกโอกาสจาก Value × Risk"],["Prototype","สร้าง Pilot และ Quality Gate"],["Enable","วาง Policy, Training และ Ownership"],["Scale","วัดผลและขยายระบบ"]].map(([title, copy], i) => <li key={title}><span className="mono">0{i + 1}</span><h3 lang="en">{title}</h3><p>{copy}</p></li>)}</ol></section>
    <section className="organization-outputs page-shell"><span className="section-label mono">03 / TANGIBLE OUTPUTS</span><div className="output-grid" data-reveal="stagger">{["AI Opportunity Matrix","Workflow & Knowledge Map","Recommended AI Stack","AI Policy & Governance","Pilot System","90-Day Roadmap"].map((item) => <div key={item} lang="en">{item}</div>)}</div></section>
    <section className="organization-quote"><FluidField className="quote-fluid" variant="lens" intensity="low" /><blockquote lang="en" data-reveal="line">“AI transformation is not a software rollout.<br /><em>It is an operating model redesign.</em>”</blockquote></section>
    <section className="simple-cta"><span className="section-label mono">START WITH THE REAL WORK.</span><h2 className="thai-heading" lang="th"><span className="headline-line">เล่า Workflow ที่กำลัง</span><span className="headline-line">เป็นคอขวดขององค์กร</span></h2><Link className="button-primary" href="/contact?intent=organization">ปรึกษาโปรแกรมองค์กร <span aria-hidden="true">↗</span></Link></section>
    <SiteFooter />
  </main>;
}
