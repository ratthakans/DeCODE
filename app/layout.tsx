import type { Metadata } from "next";
import { MotionOrchestrator } from "./components/MotionOrchestrator";
import { OrganizationSchema } from "./components/StructuredData";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DeCODE — Business AI Institute",
  description: SITE_DESCRIPTION,
  keywords: ["Business AI", "AI Course Thailand", "Claude", "AI Automation", "DeCODE"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "DeCODE — Business AI Institute",
    description: "Close the gap. Build beyond human capacity.",
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: SITE_NAME,
    images: [{ url: "/og-fluid-v2.png", width: 1672, height: 941, alt: "DeCODE Business AI Institute — Liquid glass identity." }],
  },
  twitter: { card: "summary_large_image", title: "DeCODE — Business AI Institute", description: "Close the gap. Build beyond human capacity.", images: ["/og-fluid-v2.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <link rel="preload" href="/fonts/line-seed-th-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/instrument-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body><OrganizationSchema /><MotionOrchestrator />{children}</body>
    </html>
  );
}
