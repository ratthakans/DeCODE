import type { Metadata } from "next";
import { headers } from "next/headers";
import { MotionOrchestrator } from "./components/MotionOrchestrator";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "DeCODE — Business AI Institute",
    description: "สถาบัน Business AI ที่ช่วยให้ผู้ประกอบการและทีมธุรกิจเปลี่ยน AI ให้เป็นระบบ ความสามารถ และแรงทวีคูณที่ใช้ได้จริง",
    keywords: ["Business AI", "AI Course Thailand", "Claude", "AI Automation", "DeCODE"],
    openGraph: {
      title: "DeCODE — Business AI Institute",
      description: "Close the gap. Build beyond human capacity.",
      type: "website",
      locale: "th_TH",
      siteName: "DeCODE Business AI Institute",
      images: [{ url: `${origin}/og-fluid-v2.png`, width: 1672, height: 941, alt: "DeCODE Business AI Institute — Liquid glass identity." }],
    },
    twitter: { card: "summary_large_image", title: "DeCODE — Business AI Institute", description: "Close the gap. Build beyond human capacity.", images: [`${origin}/og-fluid-v2.png`] },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <link rel="preload" href="/fonts/line-seed-th-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/instrument-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body><MotionOrchestrator />{children}</body>
    </html>
  );
}
