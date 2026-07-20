import { AdminDashboard, type InquiryRow } from "../../components/AdminDashboard";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getAdminUser } from "../../lib/admin";
import { listInquiries } from "../../lib/inquiry-store";

export const dynamic = "force-dynamic";

async function DashboardContent() {
  const admin = await getAdminUser();
  if (!admin) return <div className="admin-message admin-login" data-reveal="fade"><span className="mono">OWNER ACCESS</span><h1>เข้าสู่ Inquiry Dashboard</h1><p>พื้นที่นี้สำหรับเจ้าของเว็บไซต์เท่านั้น</p><form action="/api/admin/session" method="post"><label><span>รหัสผ่านผู้ดูแล</span><input name="password" type="password" minLength={16} required autoComplete="current-password" /></label><button className="button-primary" type="submit">เข้าสู่ระบบ <span aria-hidden="true">↗</span></button></form></div>;
  let rows: InquiryRow[] = [];
  let error = "";
  try { rows = await listInquiries(); }
  catch { error = "ระบบจัดเก็บ Inquiry ยังไม่พร้อม กรุณาตรวจสอบ Vercel Blob binding"; }
  return <><div className="admin-heading" data-reveal="fade"><div><span className="mono">OWNER DASHBOARD</span><h1 lang="en">Program inquiries</h1></div><div><strong>{admin.displayName}</strong><form action="/api/admin/session" method="post"><input type="hidden" name="action" value="logout" /><button type="submit">Sign out</button></form></div></div>{error ? <div className="form-alert">{error}</div> : <AdminDashboard initialRows={rows} />}</>;
}

export default function AdminInquiriesPage() {
  return <main><SiteHeader /><section className="admin-page page-shell"><DashboardContent /></section><SiteFooter /></main>;
}
