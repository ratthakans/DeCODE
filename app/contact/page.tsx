import type { Metadata } from "next";
import { FluidField } from "../components/FluidField";
import { InquiryForm } from "../components/InquiryForm";
import { MockBadge } from "../components/MockBadge";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { courses } from "../data/courses";
import { pageMetadata } from "../lib/page-metadata";

export const metadata: Metadata = pageMetadata("Program Inquiry — DeCODE", "เล่าเป้าหมายและบริบทของคุณ เพื่อให้ DeCODE แนะนำโปรแกรมหรือเส้นทางที่เหมาะสม", "/contact");

type PageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const first = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] : value;
  const requestedProgram = first(params.program) ?? "";
  const requestedIntent = first(params.intent);
  const initialProgram = courses.some((course) => course.slug === requestedProgram) ? requestedProgram : "";
  const initialIntent = initialProgram ? "program" : requestedIntent === "organization" || requestedIntent === "unsure" ? requestedIntent : "program";
  return <main><SiteHeader /><section className="contact-layout"><FluidField className="contact-fluid" variant="cta" /><div className="contact-copy"><span className="hero-kicker mono" data-reveal="fast">PROGRAM INQUIRY</span><h1 className="thai-heading" lang="th" data-reveal="line"><span className="headline-line">เริ่มจากงานที่คุณ</span><span className="headline-line"><em>ไม่ควรต้องทำเอง</em></span></h1><p data-reveal="fade">เล่าเป้าหมาย ปัญหา และสิ่งที่อยากสร้างให้เราฟัง เราจะช่วยแนะนำ Program, Track หรือรูปแบบการทำงานที่เหมาะกับบริบทของคุณ</p><div className="contact-note glass-surface" data-reveal="fade"><span className="mono">WHAT HAPPENS NEXT</span><ol><li>เราทบทวนเป้าหมายและโปรแกรมที่สนใจ</li><li>ทีมติดต่อกลับภายใน 2 วันทำการ</li><li>แนะนำเส้นทาง รอบเรียน หรือรูปแบบองค์กร</li></ol><MockBadge /></div></div><div className="contact-form-wrap" data-reveal="fade"><InquiryForm initialIntent={initialIntent} initialProgram={initialProgram} /></div></section><SiteFooter /></main>;
}
