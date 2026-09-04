import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listSubmissions from "./tools/list-submissions";
import getSubmission from "./tools/get-submission";
import submissionStats from "./tools/submission_stats";

// The OAuth issuer must be the direct Supabase host; the project ref is the one
// value that survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "creator-os",
  title: "Creator OS",
  version: "0.1.0",
  instructions:
    "Tools for Creator OS. Use `list_submissions` to browse Workflow Diagnostic submissions, `get_submission` for one person's full answers and diagnosis, and `submission_stats` for totals and diagnosis breakdown. All tools act as the signed-in admin.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listSubmissions, getSubmission, submissionStats],
});
