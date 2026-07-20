import type { Metadata } from "next";
import { FluidField } from "../components/FluidField";
import { ProgramExplorer } from "../components/ProgramExplorer";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { courses } from "../data/courses";
import { pageMetadata } from "../lib/page-metadata";

export const metadata: Metadata = pageMetadata("Programs — DeCODE Business AI Institute", "สำรวจ 6 โปรแกรมของ DeCODE ตั้งแต่การกำกับ AI ไปจนถึงการสร้าง Product, Creative Direction และระบบดูแลโฆษณา", "/programs");

type PageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function ProgramsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const first = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] : value;
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero program-index-hero grid-lines">
        <FluidField className="inner-fluid" variant="hero" intensity="low" />
        <span className="hero-kicker mono" data-reveal="fast">PROGRAM DIRECTORY / 2026</span>
        <h1 lang="en" data-reveal="line">Choose how you<br /><em>want to evolve.</em></h1>
        <p data-reveal="fast">6 โปรแกรมที่เชื่อมจากการกำกับ AI อย่างมีระบบ ไปสู่การสร้างงาน Creative, Product และระบบดูแลโฆษณาที่นำไปใช้กับธุรกิจได้จริง</p>
      </section>
      <section className="program-explorer page-shell">
        <ProgramExplorer courses={courses} initial={{ query: first(params.q), track: first(params.track), level: first(params.level), format: first(params.format) }} />
      </section>
      <SiteFooter />
    </main>
  );
}
