import Link from "next/link";
import { ORG, contactEmail, isPublishable } from "../data/organization";

export function SiteFooter() {
  const hasContact = Boolean(contactEmail || ORG.phone || ORG.lineOa);

  return (
    <footer className={`site-footer${hasContact ? " has-contact" : ""}`} data-reveal="fade">
      <div>
        <Link className="brand" href="/" lang="en">De<span>CODE</span></Link>
        <p>เปลี่ยนความซับซ้อนของ AI<br />ให้เป็นความสามารถที่ธุรกิจใช้ได้จริง</p>
      </div>
      <nav aria-label="เมนูท้ายเว็บไซต์" lang="en">
        <Link href="/programs">Programs</Link>
        <Link href="/institute">Institute</Link>
        <Link href="/organizations">Organizations</Link>
        <Link href="/contact">Contact</Link>
        {isPublishable && <Link href="/privacy">Privacy</Link>}
      </nav>
      {hasContact && (
        <address className="footer-contact">
          {contactEmail && <a href={`mailto:${contactEmail}`}>{contactEmail}</a>}
          {ORG.phone && <a href={`tel:${ORG.phone.replace(/[^\d+]/g, "")}`}>{ORG.phone}</a>}
          {ORG.lineOa && <a href={`https://line.me/R/ti/p/${encodeURIComponent(ORG.lineOa)}`} target="_blank" rel="noreferrer">LINE {ORG.lineOa}</a>}
          {ORG.legalName && <span>{ORG.legalName}{ORG.taxId && <> · เลขประจำตัวผู้เสียภาษี {ORG.taxId}</>}</span>}
        </address>
      )}
      <div className="footer-meta mono">BUSINESS AI INSTITUTE<br />BANGKOK · THAILAND · 2026<br /><span>STRUCTURE THE CHAOS.</span><a href="https://seed.line.me/index_th.html" target="_blank" rel="noreferrer">TYPEFACE · LINE SEED SANS TH/EN</a></div>
    </footer>
  );
}
