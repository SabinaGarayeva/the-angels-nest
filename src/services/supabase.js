import { createClient } from "@supabase/supabase-js";
 export const supabaseUrl = "https://jnptzztclduxzvomxhzx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucHR6enRjbGR1eHp2b214aHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMjU3MjgsImV4cCI6MjAzNjgwMTcyOH0.Kq1mVtsQP48IKTCwcL_hOfyuwvglYMPowDis_q_MhfQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
