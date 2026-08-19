# Digital Work OS — Landing + Workflow Diagnostic + Admin

Combine three of your existing projects into this one app: the `your-digital-flow` landing page as the base, the multi-step form/result engine from `prospect-converter-x`, and the admin dashboard from `workflow-operating-system` — driven by the new 8-section Workflow Diagnostic and 5-category scoring model.

## What you'll get

1. **Landing page at `/`** — the full `your-digital-flow` page (hero, sections, design system, Plus Jakarta Sans type scale), with its CTAs pointing to the diagnostic.
2. **`/diagnostic`** — the Workflow Diagnostic: 8 sections, one step at a time, progress bar, back navigation, conditional follow-up questions driven by the "which ONE bothers you most" answer, and a name + email gate before results.
3. **Result page (same route, after submit)** — a mini-consultation, not a quiz score:
   - Primary diagnosis (Speed / Organization / Reuse / Information / Workflow) from the weighted scoring table.
   - Up to two secondary opportunities.
   - "If we worked together, I'd start here" — numbered 01/02/03 blocks that quote the visitor's own free-text answers.
   - "Your current tools" block listing the apps they typed.
   - "Your first action" — one tactical recommendation matched to the primary diagnosis.
   - "What the service can cover" + closing CTA.
   - Readiness-aware ending: visitors who answered "I'm just curious" see the softer "come back when you're ready" variant instead of the payment push.
   - The CTA button uses a clearly-marked placeholder URL you can swap later.
   - Diagnosis is shown on-screen only — no email sending in this build. Every submission is stored so you can follow up manually.
4. **`/auth` + `/admin`** — sign-in and the admin dashboard: list of all diagnostic entries (name, email, primary/secondary diagnosis, readiness, buying-interest, date) and a detail page showing every answer, free-text included, with prev/next navigation. First account to sign up becomes admin automatically.

## Form content

All questions, options, section titles, intro copy, microcopy, conditional questions, diagnosis bodies, and secondary-opportunity blurbs are taken verbatim from your brief.

## Technical notes

- **Backend**: Lovable Cloud enabled for the database and admin auth.
- **Data model**: one `diagnostic_submissions` table — name, email, `answers` jsonb (full question-id → answer map), `scores` jsonb (the five category totals), `primary_diagnosis`, `secondary_diagnoses`, `readiness`, `interest`, `apps` text[], `created_at`. Public insert via a validated server function; SELECT restricted to admins.
- **Roles**: separate `user_roles` table + `has_role` security-definer function + first-user-admin trigger, ported from `workflow-operating-system`.
- **Question schema**: `src/lib/diagnostic-questions.ts` — declarative list of sections/questions with type (single, multi with max-select, text), signal tags, and `showIf` conditions.
- **Scoring**: `src/lib/diagnostic-scoring.ts` — implements your signal → category weight table (e.g. repetitive manual work +3 Speed / +1 Reuse / +1 Workflow), sums across all answered signals, ranks the five categories; ties broken by the "bothers me most" answer.
- **Diagnosis copy**: `src/lib/diagnosis-content.ts` — the five full diagnoses plus secondary blurbs and first-action snippets, kept separate from logic.
- **Design**: single design system — the landing page's tokens extended to cover the form and result pages; admin reuses the same tokens.
- **Routes**: `/` (landing), `/diagnostic`, `/auth`, `/_authenticated/admin`, `/_authenticated/admin/$id`. Each public route gets its own head metadata; admin routes are `noindex`.

## Out of scope for this build

- Sending the diagnosis email (copy will be reserved for a later pass once you pick an email provider).
- Live payment checkout — the CTA is a placeholder link until you provide the real URL.
