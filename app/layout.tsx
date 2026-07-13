import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Anuphan, IBM_Plex_Sans_Thai, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

const display = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "คอร์ส AI",
    "เรียน Claude",
    "AI onsite",
    "Claude Code",
    "ChatGPT",
    "automation",
    "DeCODE",
  ],
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "th_TH",
    url: site.url,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${display.variable} ${body.variable} ${mono.variable} ${grotesk.variable}`}>
      <body className="min-h-screen bg-ink text-pale antialiased">
        <AmbientBackground />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        {/* Placeholder for real Google Analytics ID (GA4) */}
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  );
}
