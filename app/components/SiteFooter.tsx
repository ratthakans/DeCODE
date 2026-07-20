import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-reveal="fade">
      <div>
        <Link className="brand" href="/" lang="en">De<span>CODE</span></Link>
        <p>เปลี่ยนความซับซ้อนของ AI<br />ให้เป็นความสามารถที่ธุรกิจใช้ได้จริง</p>
      </div>
      <nav aria-label="เมนูท้ายเว็บไซต์" lang="en">
        <Link href="/programs">Programs</Link>
        <Link href="/institute">Institute</Link>
        <Link href="/organizations">Organizations</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="footer-meta mono">BUSINESS AI INSTITUTE<br />BANGKOK · THAILAND · 2026<br /><span>STRUCTURE THE CHAOS.</span><a href="https://seed.line.me/index_th.html" target="_blank" rel="noreferrer">TYPEFACE · LINE SEED SANS TH/EN</a></div>
    </footer>
  );
}
