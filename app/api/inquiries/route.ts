import { createInquiry } from "../../lib/inquiry-store";
import { validateInquiry } from "../../lib/inquiry-validation.mjs";
import type { InquiryPayload } from "../../lib/inquiries";

export async function POST(request: Request) {
  try {
    const payload = await request.json() as InquiryPayload;
    const result = validateInquiry(payload);
    if (!result.data) return Response.json({ ok: false, errors: result.errors }, { status: 422 });
    const id = crypto.randomUUID();
    await createInquiry(id, result.data);
    return Response.json({ ok: true, id }, { status: 201 });
  } catch {
    return Response.json({ ok: false, message: "ระบบยังไม่สามารถรับข้อมูลได้ในขณะนี้ กรุณาลองอีกครั้ง" }, { status: 500 });
  }
}
