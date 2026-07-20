import { updateInquiryStatus } from "../../../../lib/inquiry-store";
import { getAdminUser } from "../../../../lib/admin";
import { inquiryStatuses } from "../../../../lib/inquiries";

type RouteProps = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteProps) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ ok: false }, { status: 403 });
  const { id } = await params;
  const payload = await request.json() as { status?: string };
  if (!inquiryStatuses.includes(payload.status as typeof inquiryStatuses[number])) return Response.json({ ok: false, message: "Invalid status" }, { status: 422 });
  try {
    const updated = await updateInquiryStatus(id, payload.status as typeof inquiryStatuses[number]);
    return Response.json({ ok: updated }, { status: updated ? 200 : 404 });
  } catch { return Response.json({ ok: false }, { status: 500 }); }
}
