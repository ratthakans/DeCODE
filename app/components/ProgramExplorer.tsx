"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useEffect, useId, useMemo, useState } from "react";
import { tracks, type Course } from "../data/courses";

const trackOptions = [
  ["all", "ทุกเส้นทาง"], ["business", "Business"], ["builder", "Builder"], ["creative", "Creative"],
] as const;

type InitialFilters = { query?: string; track?: string; level?: string; format?: string };

export function ProgramExplorer({ courses, initial = {} }: { courses: Course[]; initial?: InitialFilters }) {
  const [query, setQuery] = useState(initial.query ?? "");
  const [track, setTrack] = useState(initial.track ?? "all");
  const [level, setLevel] = useState(initial.level ?? "all");
  const [format, setFormat] = useState(initial.format ?? "all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterPanelId = useId();

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (track !== "all") params.set("track", track);
    if (level !== "all") params.set("level", level);
    if (format !== "all") params.set("format", format);
    const search = params.toString();
    window.history.replaceState(null, "", search ? `/programs?${search}` : "/programs");
  }, [query, track, level, format]);

  const filtered = useMemo(() => courses.filter((course) => {
    const text = `${course.title} ${course.promise} ${course.verb}`.toLowerCase();
    const courseTracks = tracks.filter((item) => item.courseIds.includes(course.id));
    const trackMatch = track === "all" || courseTracks.some((item) => item.name.toLowerCase() === track);
    const levelMatch = level === "all" || (level === "executive" ? course.level.includes("ผู้บริหาร") : level === "advanced" ? course.level.includes("สูง") : !course.level.includes("สูง") && !course.level.includes("ผู้บริหาร"));
    const formatMatch = format === "all" || (format === "cohort" ? course.duration.includes("สัปดาห์") : !course.duration.includes("สัปดาห์"));
    return text.includes(query.trim().toLowerCase()) && trackMatch && levelMatch && formatMatch;
  }), [courses, query, track, level, format]);
  const displayedCourses = useDeferredValue(filtered);
  const isUpdating = displayedCourses !== filtered;

  const activeFilterCount = [track !== "all", level !== "all", format !== "all"].filter(Boolean).length;

  return (
    <>
      <div className="program-filter glass-surface" aria-label="ตัวกรองโปรแกรม" data-reveal="fast">
        <label className="search-field"><span className="mono">SEARCH</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาจากชื่อหรือสิ่งที่อยากสร้าง" /></label>
        <button className="filter-toggle" type="button" aria-expanded={filtersOpen} aria-controls={filterPanelId} onClick={() => setFiltersOpen((value) => !value)}><span>ตัวกรอง{activeFilterCount ? ` · ${activeFilterCount}` : ""}</span><b aria-hidden="true">{filtersOpen ? "−" : "+"}</b></button>
        <div className={`filter-options ${filtersOpen ? "is-open" : ""}`} id={filterPanelId}>
          <fieldset><legend className="mono">TRACK</legend><div>{trackOptions.map(([value, label]) => <button type="button" aria-pressed={track === value} onClick={() => setTrack(value)} key={value}>{label}</button>)}</div></fieldset>
          <label><span className="mono">LEVEL</span><select value={level} onChange={(event) => setLevel(event.target.value)}><option value="all">ทุกระดับ</option><option value="foundation">พื้นฐาน–กลาง</option><option value="advanced">ระดับสูง</option><option value="executive">ผู้บริหาร</option></select></label>
          <label><span className="mono">FORMAT</span><select value={format} onChange={(event) => setFormat(event.target.value)}><option value="all">ทุกรูปแบบ</option><option value="workshop">Workshop</option><option value="cohort">Cohort</option></select></label>
        </div>
      </div>

      <div className="program-results-head"><span className="mono">{filtered.length.toString().padStart(2, "0")} PROGRAMS</span><button type="button" onClick={() => { setQuery(""); setTrack("all"); setLevel("all"); setFormat("all"); }}>ล้างตัวกรอง</button></div>
      <div className={`program-catalog ${isUpdating ? "is-updating" : ""}`} aria-live="polite" data-reveal="stagger">
        {displayedCourses.map((course) => {
          const courseTracks = tracks.filter((item) => item.courseIds.includes(course.id)).map((item) => item.name).join(" + ");
          return (
            <Link href={`/programs/${course.slug}`} key={course.slug} className="catalog-card">
              <div className="catalog-number mono">{course.id}</div>
              <div className="catalog-image"><Image src={course.image} alt="" fill sizes="(max-width: 820px) 100vw, 28vw" unoptimized /></div>
              <div className="catalog-main"><span className="mono">{course.verb} · {courseTracks}</span><h2 lang="en">{course.title}</h2><p>{course.promise}</p><strong><small className="mono">LEAVE WITH</small>{course.outcomes[0]}</strong></div>
              <div className="catalog-meta"><span>{course.duration}</span><span>{course.level}</span><span>{course.format.split(" · ")[0]}</span><b aria-hidden="true">↗</b></div>
            </Link>
          );
        })}
        {displayedCourses.length === 0 && <div className="empty-state"><h2>ยังไม่มีโปรแกรมที่ตรงกับตัวกรอง</h2><p>ลองเปลี่ยน Track หรือค้นหาด้วยผลลัพธ์ที่คุณต้องการสร้าง</p></div>}
      </div>
    </>
  );
}
