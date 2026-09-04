import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { adminClient } from "../supabase";
import { asScores, diagnosisFor, diagnosisLabel, groupAnswers, toolsList } from "@/lib/admin-view";

export default defineTool({
  name: "get_submission",
  title: "Get one submission",
  description:
    "Return the full detail of one Workflow Diagnostic submission: every answer grouped by section, category scores, diagnosis summary, and the tools the creator uses. Admin accounts only.",
  inputSchema: {
    id: z.string().describe("The submission id returned by list_submissions."),
  },
  outputSchema: { submission: z.any() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ id }, ctx) => {
    const supabase = await adminClient(ctx);
    if (!supabase) {
      return {
        content: [
          {
            type: "text",
            text: "Access denied: this MCP server is restricted to the site owner's admin account.",
          },
        ],
        isError: true,
      };
    }
    const { data, error } = await supabase
      .from("diagnostic_submissions")
      .select(
        "id, first_name, email, answers, scores, primary_diagnosis, secondary_diagnosis, seriousness, interest, newsletter_opt_in, created_at",
      )
      .eq("id", id)
      .maybeSingle();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data) return { content: [{ type: "text", text: `No submission found for id ${id}` }], isError: true };

    const primary = diagnosisFor(data.primary_diagnosis);
    const detail = {
      id: data.id,
      name: data.first_name,
      email: data.email,
      submitted_at: data.created_at,
      readiness: data.seriousness,
      interest: data.interest,
      newsletter_opt_in: data.newsletter_opt_in,
      primary_diagnosis: diagnosisLabel(data.primary_diagnosis),
      secondary_diagnosis: diagnosisLabel(data.secondary_diagnosis) || null,
      diagnosis_summary: primary?.summary ?? null,
      scores: asScores(data.scores),
      tools: toolsList(data.answers),
      sections: groupAnswers(data.answers).map((section) => ({
        section: section.label,
        answers: section.items.map((item) => ({
          question: item.question,
          answer: item.answered
            ? [item.value, item.other].filter(Boolean).join(" — ")
            : "Not answered / skipped",
        })),
      })),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(detail, null, 2) }],
      structuredContent: { submission: detail },
    };
  },
});
