import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ORG, isPublishable, privacyContactEmail } from "../data/organization";
import { pageMetadata } from "../lib/page-metadata";

export const metadata: Metadata = {
  ...pageMetadata("นโยบายความเป็นส่วนตัว — DeCODE", "การเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลของ DeCODE Business AI Institute ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล", "/privacy"),
  // Never let an unnamed controller's notice into the index.
  robots: isPublishable ? undefined : { index: false, follow: false },
};

const collected = [
  ["ข้อมูลที่คุณกรอกในแบบฟอร์ม", "ชื่อ–นามสกุล อีเมล เบอร์โทร องค์กร บทบาท โปรแกรมที่สนใจ เป้าหมายที่เล่าให้เราฟัง และช่วงเวลาที่ต้องการเริ่ม"],
  ["ข้อมูลบริบทของคำขอ", "หน้าเว็บที่คุณส่งแบบฟอร์มมา และเวลาที่ส่ง เพื่อให้เราตอบกลับได้ตรงบริบท"],
];

const purposes = [
  "ติดต่อกลับเพื่อให้คำแนะนำเกี่ยวกับโปรแกรมและเส้นทางการเรียนที่เหมาะกับคุณ",
  "จัดเตรียมข้อเสนอ ใบเสนอราคา หรือรายละเอียดรอบเรียนตามที่คุณร้องขอ",
  "ปรับปรุงเนื้อหาและการออกแบบโปรแกรมจากภาพรวมของคำขอที่ได้รับ",
];

const rights = [
  ["สิทธิขอเข้าถึงและขอสำเนา", "ขอทราบว่าเราเก็บข้อมูลใดของคุณไว้บ้าง และขอสำเนาได้"],
  ["สิทธิขอแก้ไข", "ขอให้แก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่เป็นปัจจุบัน"],
  ["สิทธิขอลบหรือทำลาย", "ขอให้ลบข้อมูลเมื่อหมดความจำเป็นตามวัตถุประสงค์ข้างต้น"],
  ["สิทธิถอนความยินยอม", "ถอนความยินยอมเมื่อใดก็ได้ โดยไม่กระทบการดำเนินการที่ทำไปแล้วก่อนถอน"],
  ["สิทธิคัดค้านและขอระงับการใช้", "คัดค้านหรือขอให้ระงับการใช้ข้อมูลของคุณชั่วคราว"],
  ["สิทธิร้องเรียน", "ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้ หากเห็นว่าเราไม่ปฏิบัติตามกฎหมาย"],
];

export default function PrivacyPage() {
  // The notice names a data controller by law. Until ORG is filled in there is
  // no lawful notice to publish, so the route does not exist.
  if (!isPublishable) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="inner-hero grid-lines">
        <span className="hero-kicker mono" data-reveal="fast">PRIVACY NOTICE · PDPA</span>
        <h1 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">นโยบาย</span><span className="headline-line"><em>ความเป็นส่วนตัว</em></span></h1>
        <p className="mixed-hero-copy" data-reveal="fade"><span>ประกาศนี้อธิบายว่าเราเก็บข้อมูลส่วนบุคคลใดจากคุณ ใช้เพื่ออะไร เก็บไว้นานเท่าใด และคุณมีสิทธิอะไรบ้าง ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</span></p>
      </section>

      <section className="legal-body page-shell">
        <article>
          <h2>ผู้ควบคุมข้อมูลส่วนบุคคล</h2>
          <p>{ORG.legalName}{ORG.taxId && <> · เลขประจำตัวผู้เสียภาษี {ORG.taxId}</>}</p>
          <p>{ORG.address}</p>
          <p>ติดต่อเรื่องข้อมูลส่วนบุคคล: <a href={`mailto:${privacyContactEmail}`}>{privacyContactEmail}</a></p>
        </article>

        <article>
          <h2>ข้อมูลที่เราเก็บ</h2>
          <dl>{collected.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
          <p>เราไม่เก็บข้อมูลส่วนบุคคลที่มีความอ่อนไหว และไม่ขอข้อมูลบัตรประชาชนหรือข้อมูลทางการเงินผ่านแบบฟอร์มบนเว็บไซต์นี้</p>
        </article>

        <article>
          <h2>ฐานทางกฎหมายและวัตถุประสงค์</h2>
          <p>เราประมวลผลข้อมูลของคุณบนฐาน <strong>ความยินยอม</strong> ที่คุณให้ไว้ตอนส่งแบบฟอร์ม เพื่อวัตถุประสงค์ดังนี้</p>
          <ul>{purposes.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>เราจะไม่นำข้อมูลของคุณไปใช้เพื่อวัตถุประสงค์อื่นนอกเหนือจากนี้ โดยไม่ขอความยินยอมใหม่</p>
        </article>

        <article>
          <h2>การเปิดเผยข้อมูล</h2>
          <p>เราไม่ขาย ไม่ให้เช่า และไม่แลกเปลี่ยนข้อมูลส่วนบุคคลของคุณกับบุคคลที่สาม ข้อมูลจะถูกเข้าถึงได้เฉพาะทีมงานที่รับผิดชอบการติดต่อกลับ และผู้ให้บริการโครงสร้างพื้นฐานที่จำเป็นต่อการทำงานของเว็บไซต์และการจัดเก็บข้อมูลเท่านั้น โดยผู้ให้บริการเหล่านั้นประมวลผลข้อมูลตามคำสั่งของเราภายใต้ข้อตกลงรักษาความลับ</p>
        </article>

        <article>
          <h2>ระยะเวลาการเก็บรักษา</h2>
          <p>เราเก็บข้อมูลคำขอไว้เท่าที่จำเป็นต่อการติดต่อและให้คำแนะนำ และจะลบหรือทำให้ไม่สามารถระบุตัวบุคคลได้เมื่อหมดความจำเป็น เว้นแต่มีหน้าที่ตามกฎหมายที่ต้องเก็บไว้นานกว่านั้น</p>
        </article>

        <article>
          <h2>สิทธิของเจ้าของข้อมูล</h2>
          <dl>{rights.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
          <p>หากต้องการใช้สิทธิข้างต้น ติดต่อเราที่ <a href={`mailto:${privacyContactEmail}`}>{privacyContactEmail}</a> เราจะดำเนินการภายในระยะเวลาที่กฎหมายกำหนด</p>
        </article>

        {ORG.privacyUpdated && <p className="legal-updated mono">LAST UPDATED · {ORG.privacyUpdated}</p>}
      </section>

      <SiteFooter />
    </main>
  );
}
