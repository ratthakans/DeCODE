import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FluidField } from "../components/FluidField";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { institutePhotos } from "../data/institute";
import { pageMetadata } from "../lib/page-metadata";

export const metadata: Metadata = pageMetadata("The Institute — DeCODE", "รู้จักแนวคิด วิธีเรียน และบทบาทของ DeCODE Business AI Institute", "/institute");

const forces = [
  ["Structure", "จัดระเบียบความซับซ้อนให้เป็น Framework, Workflow และระบบที่ดูแลต่อได้"],
  ["Clarity", "ทำให้เทคโนโลยีเข้าใจง่ายพอที่จะตัดสินใจและนำไปใช้กับบริบทธุรกิจ"],
  ["Intelligence", "เปลี่ยนความสามารถของคนและเครื่องจักรให้กลายเป็นศักยภาพใหม่ที่ขยายต่อได้"],
];

const roles = [
  ["Translator", "แปลเทคโนโลยีให้คนทำธุรกิจเข้าใจ"],
  ["Systemizer", "เปลี่ยนความรู้ให้เป็น Framework และ Workflow"],
  ["Director", "สอนให้มนุษย์กำกับ AI แทนการทำตาม AI"],
  ["Builder", "เปลี่ยนแนวคิดให้เป็น Product และผลลัพธ์"],
];

export default function InstitutePage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero institute-page-hero grid-lines">
        <FluidField className="inner-fluid" variant="lens" />
        <span className="hero-kicker mono" data-reveal="fast">THE INSTITUTE / BANGKOK</span>
        <h1 className="thai-heading responsive-headline" lang="th" data-reveal="line">
          <span className="headline-set headline-desktop"><span className="headline-line">พื้นที่สำหรับคนที่อยาก</span><span className="headline-line"><em>สร้างระบบใหม่</em> ให้ธุรกิจ</span></span>
          <span className="headline-set headline-mobile"><span className="headline-line">พื้นที่สำหรับ</span><span className="headline-line">คนที่อยากสร้าง</span><span className="headline-line"><em>ระบบใหม่</em>ให้ธุรกิจ</span></span>
        </h1>
        <p className="mixed-hero-copy" data-reveal="fade"><span lang="en">Editorial intelligence meets fluid technology.</span><span>ความคิดสร้างสรรค์พบกับโครงสร้าง และเปลี่ยน AI ให้เป็นความสามารถที่ขยายต่อได้</span></p>
      </section>

      <section className="force-section page-shell">
        <span className="section-label mono">01 / THE THREE FORCES</span>
        <div className="force-grid" data-reveal="stagger">
          {forces.map(([title, copy], index) => <article key={title}><span className="mono">0{index + 1}</span><h2 lang="en">{title}</h2><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="belief-section page-shell">
        <span className="section-label mono">02 / OUR BELIEF</span>
        <blockquote data-reveal="line">อนาคตไม่ได้เป็นของคนที่รู้จักเครื่องมือมากที่สุด แต่เป็นของคนที่สามารถ <em>กำกับ เลือก และสร้างระบบ</em> ที่เหมาะกับตัวเอง</blockquote>
        <div className="role-grid" data-reveal="stagger">{roles.map(([title, copy]) => <article key={title}><h3 lang="en">{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="method-section page-shell">
        <div className="section-heading split-heading"><div><span className="section-label mono">03 / LEARN BY BUILDING</span><h2 className="thai-heading" lang="th"><span className="headline-line">ความรู้ต้องจบลง</span><span className="headline-line">ที่สิ่งซึ่งใช้งานได้</span></h2></div><p>ผู้เรียนเดินจาก Understand → Structure → Direct → Build → Connect → Transform โดยใช้บริบทของตัวเองเป็นโจทย์หลัก</p></div>
        <ol className="method-steps" data-reveal="stagger">
          {[["Understand","เห็นความสามารถและข้อจำกัด"],["Structure","จัดบริบทและวิธีทำงาน"],["Direct","กำหนดมาตรฐานและทิศทาง"],["Build","สร้างระบบหรือผลงานจริง"],["Expand","นำไปขยายต่อกับทีมและธุรกิจ"]].map(([title, copy], index) => <li key={title}><span className="mono">0{index + 1}</span><h3 lang="en">{title}</h3><p>{copy}</p></li>)}
        </ol>
      </section>

      <section className="studio-section">
        {institutePhotos.map((photo) => <div key={photo.src} data-reveal="image" data-parallax="14"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 820px) 100vw, 33vw" unoptimized /><span>{photo.caption}</span></div>)}
      </section>

      <section className="faq-section page-shell">
        <span className="section-label mono">04 / COMMON QUESTIONS</span>
        <div className="faq-list">
          <details><summary>ต้องเขียนโค้ดเป็นก่อนหรือไม่</summary><p>ไม่จำเป็นสำหรับหลายโปรแกรม แต่คอร์ส Builder และ Deep Core ต้องพร้อมเรียนรู้ Logic และอ่านโครงสร้างทางเทคนิคบางส่วน</p></details>
          <details><summary>DeCODE สอนเฉพาะ Claude หรือไม่</summary><p>Claude เป็น Core Engine สำคัญ แต่สิ่งที่สอนคือหลักคิด Context, Workflow และ System ที่ประยุกต์กับ Modern AI Stack ได้</p></details>
          <details><summary>ผู้เรียนต้องมีโปรเจกต์ของตัวเองหรือไม่</summary><p>แนะนำให้มีโจทย์จริง เพราะทุกโปรแกรมออกแบบให้ผู้เรียนกลับไปพร้อมระบบหรือผลงานที่นำไปใช้ต่อได้</p></details>
        </div>
      </section>

      <section className="simple-cta"><span className="section-label mono">STRUCTURE THE CHAOS.</span><h2 className="thai-heading" lang="th"><span className="headline-line">เริ่มสร้างความสามารถ</span><span className="headline-line">ที่ขยายต่อได้</span></h2><Link className="button-primary" href="/contact">ปรึกษาโปรแกรม <span aria-hidden="true">↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
