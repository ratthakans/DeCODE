import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "decode_admin_session";

function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function verifyAdminPassword(value: string) {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  return secret.length >= 16 && safeEqual(digest(value), digest(secret));
}

export async function getAdminUser() {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  if (secret.length < 16) return null;
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE)?.value ?? "";
  if (!safeEqual(session, digest(secret))) return null;
  return { displayName: "DeCODE Owner" };
}

export function adminSessionValue() {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  return secret.length >= 16 ? digest(secret) : "";
}
