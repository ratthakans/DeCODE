import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This is a basic Supabase client for client-side and simple server-side actions.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
