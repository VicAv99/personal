import { createClient } from "@supabase/supabase-js";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_KEY
) {
  throw new Error(
    "Missing env vars NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_KEY"
  );
}

export const supabasePrivate = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);
