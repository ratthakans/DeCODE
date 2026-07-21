"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { courses } from "../data/courses";
import { isPublishable } from "../data/organization";

type FormErrors = Record<string, string>;

export function InquiryForm({ initialIntent = "program", initialProgram = "" }: { initialIntent?: string; initialProgram?: string }) {
  const startedAt = useRef(0);
  const [intent, setIntent] = useState(initialIntent);
  const [programSlug, setProgramSlug] = useState(initialProgram);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({}); setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"), email: form.get("email"), phone: form.get("phone"), organization: form.get("organization"), role: form.get("role"),
      intent, programSlug, goal: form.get("goal"), timeline: form.get("timeline"), consent: form.get("consent") === "on",
      website: form.get("website"), sourcePath: window.location.pathname + window.location.search, startedAt: startedAt.current,
    };
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json() as { ok?: boolean; errors?: FormErrors };
      if (!response.ok) { setErrors(data.errors ?? { form: "ไม่สามารถส่งข้อมูลได้ กรุณาลองอีกครั้ง" }); setStatus("error"); return; }
      setStatus("success");
    } catch { setErrors({ form: "การเชื่อมต่อขัดข้อง กรุณาลองอีกครั้ง" }); setStatus("error"); }
  }

  if (status === "success") return <div className="inquiry-success glass-surface" data-reveal="fade"><span className="mono">INQUIRY RECEIVED</span><h2>ขอบคุณที่เล่าบริบทให้เราฟัง</h2><p>เราได้รับข้อมูลแล้ว และจะติดต่อกลับตามช่องทางที่คุณให้ไว้ภายใน 2 วันทำการ</p><Link className="button-quiet" href="/programs">กลับไปดูโปรแกรม <span aria-hidden="true">→</span></Link></div>;

  return <form className="inquiry-form" onSubmit={submit} noValidate>
    {errors.form && <div className="form-alert" role="alert">{errors.form}</div>}
    <div className="form-grid" data-reveal="stagger">
      <label><span>ชื่อ–นามสกุล *</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} />{errors.name && <small>{errors.name}</small>}</label>
      <label><span>อีเมล *</span><input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />{errors.email && <small>{errors.email}</small>}</label>
      <label><span>เบอร์โทร</span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label><span>องค์กร</span><input name="organization" autoComplete="organization" /></label>
      <label><span>บทบาท</span><input name="role" autoComplete="organization-title" placeholder="Founder, Executive, Designer…" /></label>
      <label><span>สิ่งที่สนใจ *</span><select value={intent} onChange={(event) => setIntent(event.target.value)}><option value="program">Program สำหรับบุคคล</option><option value="organization">Program สำหรับองค์กร</option><option value="unsure">ยังไม่แน่ใจ ต้องการคำแนะนำ</option></select>{errors.intent && <small>{errors.intent}</small>}</label>
      {intent === "program" && <label className="form-full"><span>โปรแกรมที่สนใจ *</span><select value={programSlug} onChange={(event) => setProgramSlug(event.target.value)} aria-invalid={!!errors.programSlug}><option value="">เลือกโปรแกรม</option>{courses.map((course) => <option value={course.slug} key={course.slug}>{course.title}</option>)}</select>{errors.programSlug && <small>{errors.programSlug}</small>}</label>}
      <label className="form-full"><span>เป้าหมายหรือ Workflow ที่อยากเปลี่ยน *</span><textarea name="goal" rows={6} placeholder="เล่างานที่กำลังใช้เวลามาก ปัญหาของทีม หรือสิ่งที่คุณอยากสร้าง…" aria-invalid={!!errors.goal} />{errors.goal && <small>{errors.goal}</small>}</label>
      <label className="form-full"><span>ต้องการเริ่มเมื่อไร *</span><select name="timeline" defaultValue=""><option value="" disabled>เลือกช่วงเวลา</option><option value="now">เร็วที่สุด</option><option value="1-3m">ภายใน 1–3 เดือน</option><option value="3-6m">ภายใน 3–6 เดือน</option><option value="research">กำลังศึกษาข้อมูล</option></select>{errors.timeline && <small>{errors.timeline}</small>}</label>
      <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    <label className="consent"><input name="consent" type="checkbox" /><span>ยินยอมให้ DeCODE เก็บและใช้ข้อมูลที่ส่งมาเพื่อติดต่อกลับและให้คำแนะนำเกี่ยวกับโปรแกรม{isPublishable && <> ตาม<Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></>}</span></label>{errors.consent && <small className="consent-error">{errors.consent}</small>}
    <button className="button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "กำลังส่งข้อมูล…" : "ส่งคำขอรับคำแนะนำ"}<span aria-hidden="true">↗</span></button>
  </form>;
}
