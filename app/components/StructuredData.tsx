import type { Course } from "../data/courses";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "../lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: SITE_NAME,
        alternateName: "DeCODE",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        logo: absoluteUrl("/favicon.svg"),
        image: absoluteUrl("/og-fluid-v2.png"),
        slogan: "Structure the chaos.",
        areaServed: "TH",
        address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
      }}
    />
  );
}

export function CourseSchema({ course }: { course: Course }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description,
        url: absoluteUrl(`/programs/${course.slug}`),
        image: absoluteUrl(course.image),
        inLanguage: "th",
        teaches: course.skills,
        educationalLevel: course.level,
        provider: { "@type": "EducationalOrganization", name: SITE_NAME, url: SITE_URL },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          courseWorkload: course.duration,
          location: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" } },
        },
      }}
    />
  );
}
