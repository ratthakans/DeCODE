"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, LineIcon } from "./ui/Button";
import { courses } from "@/lib/courses";
import { lineLink } from "@/lib/line";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-aurora-200/50 focus:bg-ink/80";
const labelCls = "mb-1.5 block text-xs font-medium text-white/60";

function SuccessNote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-aurora-200/25 bg-aurora-200/[0.06] p-6 text-center"
    >
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-aurora-200 text-ink">
        ✓
      </div>
      <p className="text-sm text-white/80">{text}</p>
    </motion.div>
  );
}

/** B2C enquiry — friendly. Also offers Line as the fast path. */
export function ContactFormB2C() {
  const [sent, setSent] = useState(false);
  const [course, setCourse] = useState("");

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <SuccessNote
          key="ok"
          text="ได้รับข้อความแล้ว! ทีมงานจะติดต่อกลับโดยเร็ว หรือทักไลน์มาคุยได้ทันทีเลย"
        />
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelCls}>ชื่อ</label>
              <input required className={inputCls} placeholder="ชื่อของคุณ" />
            </div>
            <div>
              <label className={labelCls}>เบอร์โทร / Line ID</label>
              <input required className={inputCls} placeholder="0xx-xxx-xxxx" />
            </div>
          </div>
          <div>
            <label className={labelCls}>สนใจคอร์ส</label>
            <select
              className={inputCls}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">ยังไม่แน่ใจ — ขอคำแนะนำ</option>
              {courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>อยากใช้ AI กับงานส่วนไหน (ไม่บังคับ)</label>
            <textarea
              rows={3}
              className={inputCls}
              placeholder="เล่าคร่าวๆ ว่าคุณทำธุรกิจอะไร อยากแก้ปัญหาอะไร"
            />
          </div>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Button type="submit" variant="teal" size="md" className="w-full sm:w-auto">
              ส่งข้อความ
            </Button>
            <Button
              href={lineLink(
                course ? `สนใจคอร์ส ${course} ครับ/ค่ะ` : undefined
              )}
              external
              variant="aurora"
              size="md"
              className="w-full sm:w-auto"
              magnetic={false}
            >
              <LineIcon /> ทักไลน์เลย
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/** B2B — more formal. Short form: name, company, phone. */
export function ContactFormB2B() {
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <SuccessNote
          key="ok"
          text="ขอบคุณครับ — ผู้เชี่ยวชาญของเราจะติดต่อกลับพร้อมใบเสนอราคาภายใน 1 วันทำการ"
        />
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className={labelCls}>ชื่อผู้ติดต่อ *</label>
            <input required className={inputCls} placeholder="ชื่อ-นามสกุล" />
          </div>
          <div>
            <label className={labelCls}>บริษัท / องค์กร *</label>
            <input required className={inputCls} placeholder="ชื่อบริษัท" />
          </div>
          <div>
            <label className={labelCls}>เบอร์โทรติดต่อ *</label>
            <input
              required
              type="tel"
              className={inputCls}
              placeholder="0x-xxx-xxxx"
            />
          </div>
          <div>
            <label className={labelCls}>จำนวนผู้เข้าอบรม (ไม่บังคับ)</label>
            <input className={inputCls} placeholder="เช่น 10–20 คน" />
          </div>
          <div className="pt-1">
            <Button type="submit" variant="teal" size="md" className="w-full">
              ขอใบเสนอราคา
            </Button>
            <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-widest text-white/35">
              ช่องทางสำหรับลูกค้าองค์กร · ตอบกลับเป็นทางการ
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
