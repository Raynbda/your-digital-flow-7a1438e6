import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { adminClient } from "../supabase";
import { diagnosisLabel, summarize, type SubmissionRow } from "@/lib/admin-view";

export default defineTool({
  name: "submission_stats",
  title: "Submission stats",
  description:
    "Summary of Workflow Diagnostic submissions: totals, submissions in the last 7 days, newsletter opt-ins, and the diagnosis breakdown. Admin accounts only.",
  inputSchema: {
    days: z.number().int().optional().describe("Only count submissions from the last N days (default: all time)."),
  },
  outputSchema: { stats: z.any() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ days }, ctx) => {
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
    let query = supabase
      .from("diagnostic_submissions")
      .select(
        "id, first_name, email, answers, scores, primary_diagnosis, secondary_diagnosis, seriousness, interest, newsletter_opt_in, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(1000);
    if (days && days > 0) {
      const since = new Date(Date.now() - days * 86_400_000).toISOString();
      query = query.gte("created_at", since);
    }
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };

    const rows = (data ?? []) as SubmissionRow[];
    const stats = summarize(rows);
    const summary = {
      ...stats,
      byDiagnosis: Object.fromEntries(
        stats.byDiagnosis.map(([key, value]) => [diagnosisLabel(key) || key, value]),
      ),
      window_days: days && days > 0 ? days : null,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { stats: summary },
    };
  },
});
