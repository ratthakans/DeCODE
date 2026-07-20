import { get, list, put } from "@vercel/blob";
import type { InquiryRow } from "../components/AdminDashboard";

type ValidInquiry = Omit<InquiryRow, "id" | "createdAt" | "status">;

const inquiryPath = (id: string) => `inquiries/${id}.json`;

export async function createInquiry(id: string, data: ValidInquiry) {
  const row: InquiryRow = {
    id,
    createdAt: new Date().toISOString(),
    status: "new",
    ...data,
  };
  await put(inquiryPath(id), JSON.stringify(row), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: false,
  });
  return row;
}

async function readInquiry(pathname: string) {
  const result = await get(pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return null;
  return new Response(result.stream).json() as Promise<InquiryRow>;
}

export async function listInquiries() {
  const result = await list({ prefix: "inquiries/", limit: 200 });
  const rows = await Promise.all(result.blobs.map((blob) => readInquiry(blob.pathname)));
  return rows
    .filter((row): row is InquiryRow => Boolean(row))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function updateInquiryStatus(id: string, status: InquiryRow["status"]) {
  const pathname = inquiryPath(id);
  const row = await readInquiry(pathname);
  if (!row) return false;
  await put(pathname, JSON.stringify({ ...row, status }), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return true;
}
