"use server";

import { supabase } from "@/lib/supabase";

export async function submitWaitlist(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const course_slug = formData.get("course_slug") as string;

  if (!name || !email || !course_slug) {
    return { error: "Please fill in all required fields." };
  }

  // Attempt to insert data into Supabase
  const { error } = await supabase
    .from("waitlist_leads")
    .insert([{ name, email, phone, course_slug }]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: "Failed to submit. Please try again later." };
  }

  return { success: true };
}
