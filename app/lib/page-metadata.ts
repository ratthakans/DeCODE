import type { Metadata } from "next";

const defaultImage = {
  url: "/og-fluid-v2.png",
  width: 1672,
  height: 941,
  alt: "DeCODE Business AI Institute — Liquid glass identity.",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "th_TH",
      url: path,
      siteName: "DeCODE Business AI Institute",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage.url],
    },
  };
}
