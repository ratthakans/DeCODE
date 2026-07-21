// Canonical origin for the site. Every metadataBase, sitemap entry, and JSON-LD
// URL resolves against this so the three Vercel domains don't produce duplicate
// canonicals. Set NEXT_PUBLIC_SITE_URL when the custom domain goes live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://de-code-lime.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "DeCODE Business AI Institute";
export const SITE_DESCRIPTION =
  "สถาบัน Business AI ที่ช่วยให้ผู้ประกอบการและทีมธุรกิจเปลี่ยน AI ให้เป็นระบบ ความสามารถ และแรงทวีคูณที่ใช้ได้จริง";

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
