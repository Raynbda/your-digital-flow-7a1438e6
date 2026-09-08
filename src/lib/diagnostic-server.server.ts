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

  // Notify the owner. Never let a mail failure break the submission.
  try {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const { diagnoses } = await import("@/lib/diagnosis-content");
    const { questions } = await import("@/lib/diagnostic-questions");

    const label = (key: string) =>
      (diagnoses as Record<string, { label: string } | undefined>)[key]?.label ?? key;
    const primaryContent = (
      diagnoses as Record<string, { headline: string; summary: string } | undefined>
    )[data.primary];

    const scoreLines = Object.entries(data.scores)
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => `${label(key)}: ${value}`);

    const answerLines = questions
      .filter((q) => data.answers[q.id] !== undefined)
      .map((q) => {
        const value = data.answers[q.id];
        const text = Array.isArray(value) ? value.join(", ") : String(value ?? "");
        return `${q.title} — ${text || "—"}`;
      })
      .filter((line) => !line.endsWith("— —"));

    await sendTemplateEmail("new-submission", "rayen@the-control-panel.com", {
      templateData: {
        firstName: data.first_name,
        email: data.email,
        primary: label(data.primary),
        secondary: data.secondary ? label(data.secondary) : null,
        headline: primaryContent?.headline ?? null,
        summary: primaryContent?.summary ?? null,
        scoreLines,
        answerLines,
        seriousness: data.seriousness ?? null,
        interest: data.interest ?? null,
        newsletterOptIn: data.newsletter_opt_in,
      },
      replyTo: data.email,
      idempotencyKey: `new-submission-${data.email}-${new Date().toISOString().slice(0, 16)}`,
    });
  } catch (mailError) {
    console.error("submission notification failed", mailError);
  }

  return { ok: true as const };
}
