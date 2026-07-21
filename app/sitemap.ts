import type { MetadataRoute } from "next";
import { courses } from "./data/courses";
import { isPublishable } from "./data/organization";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/programs", priority: 0.9 },
    { path: "/institute", priority: 0.8 },
    { path: "/organizations", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    // Only listed once there is a lawful notice to serve.
    ...(isPublishable ? [{ path: "/privacy", priority: 0.3 }] : []),
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/programs/${course.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
