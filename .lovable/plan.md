# Deep Work OS — Full Copy Rewrite & Creator Refocus

## Goal
Rebrand "Digital Work OS" → "Deep Work OS", refocus all copy on content creators (especially solo video creators running their own pipeline), and replace every section's text with the detailed new copy the user provided. CTAs still route through `/diagnostic` (quiz → results → Payoneer offer). Rebranding also applies to the diagnostic page and its results/offer card.

## Scope

### A. Landing page — `src/components/landing/LandingPage.tsx`

Rewrite the entire page. Top-to-bottom section order and new copy:

1. **Top bar pill** — `DEEP WORK OS` on the left; right side reads `Only 1 client per 2 weeks · For content creators`.
2. **Hero** — heading "14-Day Creative Workflow Transformation"; new subheading; new 6-line friction bullet list (the script you can't find, etc.); one-liner "Your creative work shouldn't require so much work just to manage the creative work."; paragraph about recording a normal week; CTA label **"Get My Deep Work OS Audit"** (still `<ApplyButton>` → `/diagnostic`); note line "For content creators on macOS or Windows · 14-day turnaround · Only 1 client per 2 weeks"; the "No new productivity philosophy..." line. Keep the 4 hero widgets (Faster / Findable / Reusable / Clear) with updated microcopy matching the new approach section copy.
3. **Friction** (replace existing) — "YOUR CREATIVE WORKFLOW SHOULDN'T FIGHT YOU" with the 9 new friction bullets; closing line about flow vs fighting.
4. **NEW: More content, more tools** — "MORE CONTENT. MORE TOOLS. SAME BROKEN WORKFLOW." — the tools-list paragraph and the "building the system behind the apps" closer.
5. **NEW: I don't give you a productivity system** — "I BUILD THE SYSTEM BEHIND YOUR CREATIVE WORK." — the "your content is different / your tools / your projects / your process" block.
6. **The approach** (update existing) — "Your creative workflow, analyzed from the inside." with new lead copy and the 9-item workflow list (ideas, research, scripts, etc.).
7. **Outcomes** (update existing 5 cards) — Work Faster / Find Things Faster / Reuse More / Get More From Your Tools / Reduce Creative Friction — new body copy from the new copy block.
8. **What we can rebuild** (rename from "What we can improve") — 6 categories with new items: Creative Tools, Files & Assets, Notes & Knowledge, Project Management, Templates & Reusable Systems, Operating Rules. Operating Rules gets the "Instead of constantly asking..." + "We'll create clear rules for..." sub-block.
9. **What you actually get** (rename from "Deliverables") — 7 detailed deliverable cards: Workflow Diagnostic, Project Management System, File & Asset System, Note-Taking & Knowledge System, Template & Reuse System, Shortcut System, Operating Manual. Each with the new body copy.
10. **How we'll work together** (rename from "How it works") — 4 steps with new copy: 01 Record Your Normal Work, 02 I Find The Friction, 03 I Build The System, 04 You Start Using It.
11. **NEW: What "record a week" actually means** — the "Hit record. Work normally. Stop recording." block with the "You don't need to..." list.
12. **NEW: Your creative work, turned into a system** — the "Imagine opening your next project..." list ending with "That's the goal of Deep Work OS."
13. **ProofSection** (update copy) — new bio "I've spent the last 3+ years obsessing over building better workflows for creating content." with the full ideation→publishing pipeline; updated stats: 3+ Years, 1.25M+ Views, 100+ Tools, 84 WPM, 3,000+ Notes, 3K+ Bookmarks. Keep existing screenshots and layout. Keep footer caption.
14. **NEW: The difference** — "I don't tell you how creators should work. I look at how you work." with the 5 contrast pairs.
15. **NEW: The investment** — $500 offer card. Title "Deep Work OS", price $500, subtitle, plus a structured breakdown: Your Outcome / Why This Can Work / Time To Result / Effort Required / Your Engagement Includes (the 13-item list). CTA "Reserve My Slot" → still `/diagnostic`.
16. **NEW: Included at no extra cost** — 4 bonus cards: The Shortcut Vault, The Next-Project Starter Kit, The 14-Day Implementation Check-ins, The Tool Stack Audit.
17. **NEW: Why only 1 client per 2 weeks** — the "I work directly with every client" block + second CTA "Reserve My Slot" → `/diagnostic`.
18. **NEW: Guarantee** — the "I'll keep working until the system fits" block with refund policy.
19. **Who this is for** (update existing) — creator-focused: the production pipeline list + "Especially if you..." list. Keep the 3 "You don't need to..." cards.
20. **RoiCalculator** — keep as-is (CTA → `/diagnostic`). No copy change needed.
21. **MyAppsSection** — keep apps unchanged; update section title/lead copy to "I work inside the same tools creators use every day." Keep existing app list.
22. **FAQSection** — replace all 14 Q&As with the new creator-focused questions from the user's copy.
23. **Final CTA** — "YOUR CREATIVE WORK IS UNIQUE. YOUR WORKFLOW SHOULD BE TOO." with new body copy; CTA "Get My Deep Work OS Audit" → `/diagnostic`.
24. **Contact** — "Still not sure?" → "Email me".
25. **Footer** — "Deep Work OS" / "Your creative workflow, rebuilt around the way you actually work. macOS & Windows."

### B. Diagnostic page — `src/routes/diagnostic.tsx`

- Rebrand "Digital Work OS" → "Deep Work OS" in: intro heading context, results offer heading ("Get your Deep Work OS built"), email subject lines (`mailto:` `subject=` params).
- Keep the quiz questions themselves unchanged (the user specified those in detail previously; this task is about copy/branding, not quiz content).
- Update the results page offer card to reference the new package inclusions.

### C. Offer data — `src/lib/diagnosis-content.ts`

Update `offer` object:
- `title`: "Deep Work OS"
- `subtitle`: new creator-focused subtitle
- `priceNote`: "14-day transformation · 1 client every 2 weeks"
- `ctaLabel`: "Reserve My Slot"
- `includes`: the 13-item engagement list from the new copy
- `guarantee`: new guarantee copy
- Email subject prefix: "Deep Work OS" instead of "Digital Work OS"

### D. Primitives — `src/components/landing/primitives.tsx`

- Update `ApplyButton` default `label` to "Get My Deep Work OS Audit".
- All CTA buttons on the landing page use this label and still link to `/diagnostic`.

## Technical notes
- No new dependencies. No schema or server-function changes.
- All changes are copy/JSX edits across: `LandingPage.tsx`, `primitives.tsx`, `FAQSection.tsx`, `ProofSection.tsx`, `MyAppsSection.tsx`, `diagnostic.tsx`, `diagnosis-content.ts`.
- The new "The investment" offer card on the landing page is a **display-only** card (CTA → `/diagnostic`), distinct from the results-page offer card (CTA → Payoneer). Both pull copy from the same `offer` object where possible.
- Preserve all existing CSS class patterns, `Reveal` animations, `Section`/`SectionHead` primitives, and responsive layouts. New sections reuse the same component primitives.
- Keep the sticky mobile CTA and persistent top bar.

## Verification
- Build passes (typecheck).
- Preview `/` shows the new Deep Work OS branding, hero copy, and all new sections.
- Preview `/diagnostic` shows Deep Work OS branding in intro and results offer card.
- CTA buttons route to `/diagnostic`, not directly to Payoneer.
- `/diagnostic?preview=results` still works for quick results preview.
