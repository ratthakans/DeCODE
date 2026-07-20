"use client";

import { useMemo, useState } from "react";

export type InquiryRow = {
  id: string; createdAt: string; name: string; email: string; phone: string | null; organization: string | null; role: string | null;
  intent: string; programSlug: string | null; goal: string; timeline: string; status: "new" | "contacted" | "qualified" | "closed"; sourcePath: string;
};

export function AdminDashboard({ initialRows }: { initialRows: InquiryRow[] }) {
  const [rows, setRows] = useState(initialRows);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [program, setProgram] = useState("all");
  const programs = [...new Set(rows.map((row) => row.programSlug).filter(Boolean))] as string[];
  const filtered = useMemo(() => rows.filter((row) => {
    const haystack = `${row.name} ${row.email} ${row.organization ?? ""}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (status === "all" || row.status === status) && (program === "all" || row.programSlug === program);
  }), [rows, query, status, program]);

  async function updateStatus(id: string, nextStatus: InquiryRow["status"]) {
    const previous = rows;
    setRows((items) => items.map((row) => row.id === id ? { ...row, status: nextStatus } : row));
    const response = await fetch(`/api/admin/inquiries/${id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: nextStatus }) });
    if (!response.ok) setRows(previous);
  }

  function exportCsv() {
    const header = ["created_at","name","email","phone","organization","role","intent","program","timeline","status","goal"];
    const escape = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const csv = [header.join(","), ...filtered.map((row) => [row.createdAt,row.name,row.email,row.phone,row.organization,row.role,row.intent,row.programSlug,row.timeline,row.status,row.goal].map(escape).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = `decode-inquiries-${new Date().toISOString().slice(0,10)}.csv`; anchor.click(); URL.revokeObjectURL(url);
  }

  return <>
    <div className="admin-controls glass-surface" data-reveal="fade">
      <label><span className="mono">SEARCH</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ชื่อ อีเมล หรือองค์กร" /></label>
      <label><span className="mono">STATUS</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option value="all">ทุกสถานะ</option><option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="closed">Closed</option></select></label>
      <label><span className="mono">PROGRAM</span><select value={program} onChange={(event) => setProgram(event.target.value)}><option value="all">ทุกโปรแกรม</option>{programs.map((item) => <option key={item}>{item}</option>)}</select></label>
      <button type="button" onClick={exportCsv}>Export CSV ↗</button>
    </div>
    <div className="admin-count mono">{filtered.length} INQUIRIES</div>
    <div className="inquiry-table" data-reveal="fade">
      {filtered.map((row) => <article key={row.id}>
        <div className="inquiry-person"><span className="mono">{new Date(row.createdAt).toLocaleDateString("th-TH")}</span><h2>{row.name}</h2><a href={`mailto:${row.email}`}>{row.email}</a><p>{[row.role,row.organization].filter(Boolean).join(" · ")}</p></div>
        <div className="inquiry-context"><span className="mono">{row.intent} · {row.programSlug ?? "NO PROGRAM"}</span><p>{row.goal}</p><small>Timeline: {row.timeline} · Source: {row.sourcePath}</small></div>
        <label className="status-control"><span className="mono">STATUS</span><select value={row.status} onChange={(event) => updateStatus(row.id, event.target.value as InquiryRow["status"])}><option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="closed">Closed</option></select></label>
      </article>)}
      {filtered.length === 0 && <div className="empty-state"><h2>ยังไม่มี Inquiry ในตัวกรองนี้</h2></div>}
    </div>
  </>;
}
