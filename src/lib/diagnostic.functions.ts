import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const submissionSchema = z.object({
  first_name: z.string().trim().max(100),
  email: z.string().trim().email().max(255),
  answers: z.record(z.string(), z.union([z.string().max(2000), z.array(z.string().max(300))])),
  scores: z.record(z.string(), z.number()),
  primary: z.string().max(40),
  secondary: z.string().max(40).nullable(),
  seriousness: z.string().max(40).optional().nullable(),
  interest: z.string().max(40).optional().nullable(),
});

export const saveDiagnostic = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
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

    const { error } = await supabase.from("diagnostic_submissions").insert({
      first_name: data.first_name,
      email: data.email,
      answers: data.answers,
      scores: data.scores,
      primary_diagnosis: data.primary,
      secondary_diagnosis: data.secondary,
      seriousness: data.seriousness ?? null,
      interest: data.interest ?? null,
    });

    if (error) throw new Error("Could not save your diagnostic. Please try again.");
    return { ok: true };
  });
