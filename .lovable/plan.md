# Fuller admin view for diagnostic submissions

Submissions are already being stored — the database holds 3 real entries, and the form's submit path writes every answer, score, and diagnosis. The gap is the admin page: it dumps raw question IDs and gives no way to scan, filter, or export. This plan rebuilds `/admin` into a real inbox.

## What you'll get

1. **Summary bar** — total submissions, count in the last 7 days, newsletter opt-ins, and a breakdown of how many people got each primary diagnosis.
2. **Scannable list** — each row shows name, email, primary + secondary diagnosis, readiness ("how serious"), buying interest, and a relative date ("2 days ago") with the exact timestamp on hover. Newsletter opt-in shown as a small tag.
3. **Search and filters** — free-text search across name, email, and all answer text; filter by primary diagnosis, by readiness, and by newsletter opt-in; sort newest/oldest first.
4. **Readable detail view** — opening an entry shows answers grouped by the diagnostic's 8 sections, using the real question wording instead of IDs, in the same order as the form. "Other" free-text is merged into its parent answer rather than appearing as a separate `x__other` row. Unanswered/skipped questions are marked instead of hidden, so you can tell a skip from a blank.
5. **Prev / next navigation** — move between entries from inside the detail view without collapsing back to the list.
6. **Copy + export** — one-click copy of an entry's email, a "copy all emails" button for the filtered set, and a CSV export of the filtered set (name, email, date, diagnoses, readiness, interest, newsletter, one column per question).
7. **Free-text highlight** — the longer written answers (the ones worth reading before a call) are pulled to the top of the detail view in a "In their own words" block.

## Technical notes

- No schema change: everything needed is already in `diagnostic_submissions` (`answers`, `scores`, `primary_diagnosis`, `secondary_diagnosis`, `seriousness`, `interest`, `newsletter_opt_in`, `created_at`). No migration in this build.
- `listSubmissions` in `src/lib/admin.functions.ts` stays the source of data (admin role verified server-side, RLS applies). It gains an explicit column projection and keeps the 500-row cap; filtering/sorting/search happen client-side over that set.
- Question wording and section grouping come from the existing `src/lib/diagnostic-questions.ts` via a new lookup helper, so the admin labels stay in sync automatically when questions change; unknown keys from older submissions fall back to the raw ID so historical entries never break.
- Admin UI split out of the single `src/routes/_authenticated/admin.tsx` file into small components (summary, filter bar, row, detail panel) under `src/components/admin/`, reusing existing design tokens and shadcn primitives — no new colors.
- CSV built client-side from the filtered rows (blob download), values quoted/escaped; no server round-trip.
- `/admin` stays `noindex` and under the authenticated layout.

## Out of scope

- Editing or deleting submissions (the table currently denies updates and deletes).
- Emailing leads from the dashboard.
- Pagination beyond the existing 500-row cap.
