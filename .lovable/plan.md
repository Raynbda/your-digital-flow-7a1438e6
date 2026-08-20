# Digital Work OS — form submission, one-question flow, landing page rebuild

Two problems and a batch of landing-page work. The form currently has no submit step at all (the last section renders no submit button, there is no scoring, and no backend), which is why answers can't be sent.

## 1. Make the form submittable, one question per page

- Flatten the 8 sections into a single ordered list of questions, respecting the existing conditional (`showIf`) logic so skipped follow-ups never appear.
- One question per screen, with Back / Continue, keyboard Enter to advance, and auto-advance on single-select.
- Progress bar at the top showing the current category name (Work, Time, Files, Reuse, Tools, Workflow, Goal) plus "Question X of Y" and section dots, matching the structure used in the prospect-converter-x scorecard.
- Final screen: name + email fields, a newsletter disclaimer ("By submitting you'll also be signed up to the newsletter — unsubscribe anytime"), and a working Submit.
- After submit, show the diagnosis on screen: primary + secondary category, what it means, first actions, and the CTA (payment link placeholder).

## 2. Backend for submissions

- New table `diagnostic_submissions`: name, email, answers (jsonb), category scores, primary/secondary diagnosis, `newsletter_opt_in`, created_at. Public insert only; reads restricted to admins.
- `user_roles` table + `has_role()` function for admin access (no roles on profiles).
- Server function to submit (validated with zod: trimmed name, valid email, length caps) and admin-only functions to list and read entries.
- Admin dashboard at `/admin` (behind `/auth` sign-in) listing entries with detail view. Google sign-in enabled.

## 3. Landing page changes

- Name → **Digital Work OS** everywhere (header, footer, meta).
- Heading → "Get More Done Without Working More Hours".
- Subheading → the record-a-normal-week paragraph.
- Top pill → "Complete OS for creators, knowledge workers and freelancers".
- Persistent top bar: "Only 1 client per 2 weeks" — sticky above the header, always visible.
- Add "Works on both macOS and Windows" as a visible line near the hero and in the audience section.
- **Proof section** (placeholder stats you can edit): years making videos, WPM chart, note count, bookmark count, plus a row of positive YouTube comment cards. Built as stat tiles + comment cards; real screenshots swap in later.
- **Closing section**: "Still not sure, or just want to ask something?" with "Send me an email, happy to help clear up any questions" and a mailto to rayentechyt@gmail.com.
- Make existing dense list sections more visual: turn long bullet lists into icon tiles, stat rows, and grouped cards instead of plain text lists.

## 4. New "My Apps" section

- Eyebrow `MY APPS`, headline "Built around the tools you already use.", plus the supporting paragraph.
- One large rounded container acting as a spacious icon field (Raycast/Linear/Dia feel) — not a grid of cards.
- Apps: DaVinci Resolve, Premiere Pro, Photoshop, OBS, Obsidian, Notion, Apple Notes, Claude, Zen Browser, Chrome, Safari, Todoist, Apple Reminders, Microsoft To Do, TickTick, File Explorer, Finder, Raycast, PowerToys, Flow Launcher, Everything, Winaero Tweaker, Windhawk, StartAllBack, FancyZones, Keyboard Maestro, Karabiner-Elements, BetterDisplay.
- Real official icons fetched from a public icon CDN where available; clean consistent monogram tiles as fallback so the field stays uniform.
- Scroll-reveal: icons start at opacity 0, slightly lower and scaled down, then assemble into place in row-by-row staggered order (~40–80ms), triggered once on entering the viewport and staying visible. Subtle hover scale + name label, no layout shift.
- Responsive: multiple roomy rows on desktop, fewer columns on mobile with the same reveal and no shrunken icons.

## Technical notes

- Form state stays client-side in one component; a flattened question list with a `visibleQuestions` filter drives navigation, so conditional questions never break the progress count.
- Scoring lives in `src/lib/diagnostic-scoring.ts` (signal → 5-category weights, primary/secondary ranking); diagnosis copy in `src/lib/diagnosis-content.ts`.
- Submission goes through a public `createServerFn` with zod validation; admin reads use auth middleware and `has_role`.
- App icon reveal uses an IntersectionObserver hook with CSS transitions and per-icon delay — no animation library needed.
- All colors use existing semantic tokens in `src/styles.css`.
