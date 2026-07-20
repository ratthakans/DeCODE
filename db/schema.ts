import { sql } from "drizzle-orm";
import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  organization: text("organization"),
  role: text("role"),
  intent: text("intent", { enum: ["program", "organization", "unsure"] }).notNull(),
  programSlug: text("program_slug"),
  goal: text("goal").notNull(),
  timeline: text("timeline", { enum: ["now", "1-3m", "3-6m", "research"] }).notNull(),
  status: text("status", { enum: ["new", "contacted", "qualified", "closed"] }).notNull().default("new"),
  sourcePath: text("source_path").notNull().default("/contact"),
}, (table) => [
  index("inquiries_created_at_idx").on(table.createdAt),
  index("inquiries_status_idx").on(table.status),
  index("inquiries_program_slug_idx").on(table.programSlug),
]);
