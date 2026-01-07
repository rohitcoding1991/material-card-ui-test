import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://efibgdxqyanuoijjkkqq.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmaWJnZHhxeWFudW9pampra3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODQ0NjIsImV4cCI6MjA2Mzc2MDQ2Mn0.VJ2jkaJkcnQ2wYYTlJWmAzsbODQE8hrhMWzwn9WEA8o";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
