import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminSessionValue, verifyAdminPassword } from "../../../lib/admin";

export async function POST(request: Request) {
  const form = await request.formData();
  const cookieStore = await cookies();

  if (form.get("action") === "logout") {
    cookieStore.delete(ADMIN_COOKIE);
    return NextResponse.redirect(new URL("/admin/inquiries", request.url), 303);
  }

  const password = String(form.get("password") ?? "");
  if (!verifyAdminPassword(password)) {
    return NextResponse.redirect(new URL("/admin/inquiries?error=1", request.url), 303);
  }

  cookieStore.set(ADMIN_COOKIE, adminSessionValue(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return NextResponse.redirect(new URL("/admin/inquiries", request.url), 303);
}
