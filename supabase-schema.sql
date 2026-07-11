-- Run this SQL in your Supabase SQL Editor

CREATE TABLE waitlist_leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course_slug TEXT NOT NULL,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from anonymous users (so anyone can submit the form)
CREATE POLICY "Allow public insert" ON waitlist_leads
  FOR INSERT
  WITH CHECK (true);

-- Allow only authenticated admins to select (optional, if you have auth)
-- CREATE POLICY "Allow admin read" ON waitlist_leads
--   FOR SELECT
--   USING (auth.role() = 'authenticated');
