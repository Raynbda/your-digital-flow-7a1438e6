import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { SubmissionInput } from "./diagnostic-schema";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export async function insertSubmission(data: SubmissionInput) {
  const supabase = publicClient();
  const { error } = await supabase.from("diagnostic_submissions").insert({
    first_name: data.first_name,
    email: data.email,
    answers: data.answers,
    scores: data.scores,
    primary_diagnosis: data.primary,
    secondary_diagnosis: data.secondary,
    seriousness: data.seriousness ?? null,
    interest: data.interest ?? null,
    newsletter_opt_in: data.newsletter_opt_in,
  });
  if (error) throw new Error("Could not save your diagnostic. Please try again.");
  return { ok: true as const };
}
