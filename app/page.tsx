import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "./lib/page-metadata";
import { FluidField } from "./components/FluidField";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { courses, tracks } from "./data/courses";
import { featuredToolLogos, institutePhotos } from "./data/institute";

export const metadata = pageMetadata(
  "DeCODE — Business AI Institute",
  "เปลี่ยน AI จากเครื่องมือช่วยงาน ให้กลายเป็นระบบ ความสามารถ และแรงทวีคูณที่ใช้ได้จริง",
  "/",
);

const evolution = [
  ["01", "User", "เริ่มใช้ AI เพื่อช่วยงานบางครั้ง"],
  ["02", "Operator", "กำกับ AI ด้วยบริบทและมาตรฐาน"],
  ["03", "Builder", "สร้าง Product และ Workflow ได้เอง"],
  ["04", "Architect", "ออกแบบธุรกิจให้ทำงานร่วมกับ AI"],
];

export default function InstituteHome() {
  return (
    <main>
      <SiteHeader />

      <section className="academy-hero">
        <FluidField className="hero-fluid" variant="ambient" intensity="low" />
        <div className="academy-hero-media" data-reveal="image">
          <Image src="/media/institute-studio.jpg" alt="บรรยากาศการเรียนรู้และเวิร์กช็อปในสตูดิโอ" fill priority sizes="(max-width: 820px) 100vw, 1200px" unoptimized />
        </div>
        <div className="academy-hero-title" data-reveal="line">
          <span className="mono">BUSINESS AI INSTITUTE · BANGKOK</span>
          <h1 lang="th"><b>พัฒนาทักษะ</b><b><em>/AI</em> ที่ธุรกิจใช้ได้จริง</b></h1>
        </div>
        <div className="academy-start-card" data-reveal="fade" data-delay="120">
          <div className="academy-start-actions">
            <Link className="button-primary" href="/programs">สำรวจ 6 โปรแกรม <span aria-hidden="true">↗</span></Link>
            <Link className="button-quiet" href="/contact?intent=unsure">ช่วยเลือกเส้นทางให้ฉัน <span aria-hidden="true">→</span></Link>
          </div>
          <div className="academy-start-copy">
            <strong>เปลี่ยน AI จากเครื่องมือทดลอง ให้เป็นความสามารถที่สร้างผลลัพธ์ได้จริง</strong>
            <p>เรียนผ่านโจทย์ธุรกิจ ลงมือสร้าง Workflow และออกจากห้องพร้อมระบบที่นำกลับไปใช้ต่อได้</p>
          </div>
        </div>
      </section>

      <section className="academy-facts" aria-label="ข้อมูลสถาบัน" data-reveal="stagger">
        <div><strong>6</strong><span className="mono">PROGRAMS</span></div>
        <div><strong>3</strong><span className="mono">LEARNING TRACKS</span></div>
        <div><strong>Build</strong><span className="mono">WORKSHOP-FIRST</span></div>
        <div><strong>Bangkok</strong><span className="mono">THAILAND</span></div>
      </section>

      <section className="goal-directory page-shell" id="start-with-goal">
        <div className="goal-directory-heading">
          <span className="section-label mono">START WITH YOUR GOAL</span>
          <h2 className="thai-heading" lang="th" data-reveal="line"><span>เริ่มจากสิ่งที่คุณ</span><span>อยากทำให้เกิดขึ้น</span></h2>
          <p>ไม่ต้องเริ่มจากชื่อเครื่องมือ เลือกเส้นทางจากบทบาทและผลลัพธ์ที่คุณต้องการสร้าง</p>
        </div>
        <div className="goal-track-grid" data-reveal="stagger">
          {tracks.map((track, index) => (
            <Link href={`/programs?track=${track.name.toLowerCase()}`} key={track.name}>
              <span className="mono">0{index + 1}</span>
              <h3 lang="en">{track.name}</h3>
              <p>{track.thai}</p>
              <strong>{track.courseIds.length} โปรแกรม <b aria-hidden="true">→</b></strong>
            </Link>
          ))}
          <Link className="goal-unsure" href="/contact?intent=unsure">
            <span className="mono">NOT SURE YET?</span>
            <h3>เล่าบริบทให้เราฟัง</h3>
            <p>เราจะช่วยแนะนำ Track และโปรแกรมที่เหมาะกับเป้าหมายของคุณ</p>
            <strong>รับคำแนะนำ <b aria-hidden="true">↗</b></strong>
          </Link>
        </div>
      </section>

      <section className="positioning-section page-shell" data-reveal="fade">
        <div className="section-label mono">01 / THE INSTITUTE</div>
        <div className="positioning-grid">
          <h2 lang="en">We don’t teach AI.<br /><em>We teach business leverage.</em></h2>
          <div>
            <p className="lead">ช่องว่างไม่ได้เกิดจากการไม่มีเครื่องมือ แต่เกิดจากธุรกิจยังไม่มีระบบที่เปลี่ยนความสามารถของ AI ให้เป็นผลลัพธ์</p>
            <p>DeCODE อยู่ระหว่างโลกของธุรกิจ ความคิดสร้างสรรค์ และเทคโนโลยี เราแปลสิ่งที่ซับซ้อนให้เข้าใจได้ วางมันลงใน Workflow และพาผู้เรียนลงมือสร้างจนใช้ต่อได้จริง</p>
            <Link className="text-link" href="/institute">รู้จัก DeCODE Institute <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="evolution-section page-shell">
        <div className="section-heading">
          <span className="section-label mono">02 / THE EVOLUTION</span>
          <h2 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">จากผู้ใช้เครื่องมือ</span><span className="headline-line">สู่คนออกแบบระบบ</span></h2>
        </div>
        <div className="evolution-path" data-reveal="stagger">
          {evolution.map(([number, title, copy]) => (
            <article key={title}>
              <span className="mono">{number}</span>
              <h3 lang="en">{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-programs page-shell">
        <div className="section-heading split-heading">
          <div><span className="section-label mono">03 / THE CORE 6</span><h2 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">เลือกสิ่งที่คุณ</span><span className="headline-line">ต้องการเปลี่ยน</span></h2></div>
          <p>ทุกโปรแกรมจบด้วยระบบ ผลงาน หรือ Workflow ที่นำกลับไปใช้กับงานจริง ไม่ใช่เพียง Slide และ Prompt สำเร็จรูป</p>
        </div>
        <div className="featured-program-grid" data-reveal="stagger">
          {courses.slice(0, 4).map((course) => (
            <Link href={`/programs/${course.slug}`} key={course.slug} className="featured-program-card">
              <div className="program-image"><Image src={course.image} alt="" fill sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized /></div>
              <div className="program-card-copy">
                <span className="mono">{course.id} · {course.verb}</span>
                <h3 lang="en">{course.title}</h3>
                <p>{course.promise}</p>
                <strong>ดูรายละเอียด <b aria-hidden="true">↗</b></strong>
              </div>
            </Link>
          ))}
        </div>
        <Link className="directory-link" href="/programs"><span>ดู Program Directory ทั้งหมด</span><b aria-hidden="true">→</b></Link>
      </section>

      <section className="learning-philosophy page-shell">
        <FluidField className="section-fluid" variant="lens" intensity="low" />
        <div className="learning-copy">
          <span className="section-label mono">04 / LEARNING PHILOSOPHY</span>
          <h2 lang="en" data-reveal="line">Learn by building.</h2>
          <p>เราไม่สอน Feature by Feature และไม่วัดผลจากจำนวนเครื่องมือที่ได้ลอง ทุกคอร์สต้องจบด้วยสิ่งที่ธุรกิจนำไปใช้ต่อได้</p>
        </div>
        <blockquote lang="en" data-reveal="line">“Don’t leave with slides.<br /><em>Leave with a system.</em>”</blockquote>
      </section>

      <section className="institute-photo-story" aria-label="ภาพบรรยากาศของสถาบัน">
        {institutePhotos.map((photo) => (
          <div key={photo.src} data-reveal="image" data-parallax="16">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 820px) 100vw, 50vw" unoptimized />
            <span>{photo.caption}</span>
          </div>
        ))}
      </section>

      <section className="tool-system page-shell">
        <div className="tool-copy" data-reveal="fade">
          <span className="section-label mono">05 / MODERN AI STACK</span>
          <h2 className="thai-heading" lang="th"><span className="headline-line">เลือกเครื่องมือจากหน้าที่</span><span className="headline-line">ไม่ใช่จากกระแส</span></h2>
          <p>เครื่องมือเป็นส่วนหนึ่งของระบบ ไม่ใช่ Partner หรือคำตอบสำเร็จรูป ผู้เรียนจะเข้าใจว่าแต่ละแพลตฟอร์มควรอยู่ตรงไหนในกระบวนการทำงาน</p>
        </div>
        <div className="tool-logo-strip" aria-label="เครื่องมือที่ใช้ในการเรียน" data-reveal="stagger">
          {featuredToolLogos.map(([name, slug]) => (
            <div key={name}><Image src={`/brands/${slug}.svg`} alt={`${name} logo`} width={28} height={28} unoptimized /><span>{name}</span></div>
          ))}
        </div>
      </section>

      <section className="organizations-preview page-shell grid-lines" data-reveal="fade">
        <div><span className="section-label mono">FOR ORGANIZATIONS</span><h2 className="thai-heading" lang="th"><span className="headline-line">เปลี่ยน AI จาก Initiative</span><span className="headline-line">ให้เป็น Operating System</span></h2></div>
        <div><p>สำหรับทีมและองค์กรที่ต้องการเริ่มจาก Opportunity Audit วาง AI Policy สร้าง Pilot และเดินหน้า Transformation ด้วย Roadmap ที่ชัดเจน</p><Link className="button-primary" href="/organizations">สำรวจโปรแกรมองค์กร <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="final-inquiry">
        <FluidField className="cta-fluid" variant="cta" />
        <span className="section-label mono">CLOSE THE GAP.</span>
        <h2 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">เริ่มจากงานที่คุณ</span><span className="headline-line"><em>ไม่ควรต้องทำเองอีกต่อไป</em></span></h2>
        <p>เล่าเป้าหมายและบริบทของคุณให้เราฟัง เราจะช่วยแนะนำโปรแกรมหรือเส้นทางที่เหมาะสม</p>
        <Link className="button-primary" href="/contact">ปรึกษาเส้นทางเรียน <span aria-hidden="true">↗</span></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
