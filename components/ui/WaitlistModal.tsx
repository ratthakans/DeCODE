"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitWaitlist } from "@/app/actions/waitlist";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug: string;
  courseTitle: string;
}

export function WaitlistModal({ isOpen, onClose, courseSlug, courseTitle }: WaitlistModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    formData.append("course_slug", courseSlug);

    const result = await submitWaitlist(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-100 shadow-2xl pointer-events-auto"
            >
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  ลงชื่อรับการแจ้งเตือน
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  สำหรับคอร์ส <span className="text-aurora-200 font-medium">{courseTitle}</span>
                </p>

                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-aurora-500/10 p-6 text-center"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-aurora-500/20 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-aurora-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">ลงชื่อสำเร็จ!</h4>
                    <p className="text-sm text-aurora-100/70">
                      เราจะติดต่อกลับไปทางอีเมลทันทีที่คอร์สนี้เปิดให้จองสิทธิ์
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 w-full rounded-full bg-white/10 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      ปิดหน้าต่าง
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">ชื่อ - นามสกุล</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-aurora-200/50 focus:outline-none focus:ring-1 focus:ring-aurora-200/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">อีเมล</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-aurora-200/50 focus:outline-none focus:ring-1 focus:ring-aurora-200/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">เบอร์โทรศัพท์ (ถ้ามี)</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-aurora-200/50 focus:outline-none focus:ring-1 focus:ring-aurora-200/50 transition-colors"
                        placeholder="08X-XXX-XXXX"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
                    )}

                    <div className="mt-8 flex gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-full bg-white/[0.06] py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                      >
                        ยกเลิก
                      </button>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex-1 rounded-full bg-aurora-200 py-3 text-sm font-semibold text-[#022b26] hover:bg-aurora-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? "กำลังส่ง..." : "ลงชื่อเลย"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
