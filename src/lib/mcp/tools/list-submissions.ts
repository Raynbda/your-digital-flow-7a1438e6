import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";
import { diagnosisLabel } from "@/lib/admin-view";

export default defineTool({
  name: "list_submissions",
  title: "List diagnostic submissions",
  description:
    "List recent Workflow Diagnostic submissions (name, email, diagnosis, readiness, interest, date). Admin accounts only.",
  inputSchema: {
    limit: z.number().int().optional().describe("How many submissions to return (default 25, max 200)."),
    search: z.string().optional().describe("Optional case-insensitive match on name or email."),
  },
  outputSchema: { count: z.number(), submissions: z.array(z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, search }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const take = Math.min(Math.max(limit ?? 25, 1), 200);
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("diagnostic_submissions")
      .select(
        "id, first_name, email, primary_diagnosis, secondary_diagnosis, seriousness, interest, newsletter_opt_in, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(take);
    if (search?.trim()) {
      const term = `%${search.trim()}%`;
      query = query.or(`first_name.ilike.${term},email.ilike.${term}`);
    }
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };

    const rows = (data ?? []).map((row) => ({
      id: row.id,
      name: row.first_name,
      email: row.email,
      primary_diagnosis: diagnosisLabel(row.primary_diagnosis),
      secondary_diagnosis: diagnosisLabel(row.secondary_diagnosis) || null,
      readiness: row.seriousness,
      interest: row.interest,
      newsletter_opt_in: row.newsletter_opt_in,
      submitted_at: row.created_at,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { count: rows.length, submissions: rows },
    };
  },
});
