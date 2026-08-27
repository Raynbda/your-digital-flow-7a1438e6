# Plan: Reposition Landing Page → "14-Day Creative Workflow Transformation"

## Goal

Rewrite the landing page (`LandingPage.tsx`) and related content to the new creator-focused positioning. The page shifts from a broad "Digital Work OS for knowledge workers and freelancers" to a specific **"14-Day Creative Workflow Transformation"** for content creators. Keep all existing visual design tokens, component primitives (`Section`, `SectionHead`, `Chip`, `ApplyButton`, `Reveal`), and reusable sub-sections (`ProofSection`, `MyAppsSection`, `FAQSection`, `RoiCalculator`). Only content, section order, and layout change.

---

## 1. Hero rewrite (`LandingPage.tsx`)

- Top bar pill → `Only 1 client per 2 weeks · For content creators · macOS & Windows`
- Hero badge pill → `14-DAY CREATIVE WORKFLOW TRANSFORMATION` (keep lightning icon)
- H1 → `Your creative workflow, rebuilt around the way you actually work.`
- Subheading → the new paragraph (too many files/apps/tabs… I'll watch how you actually work… all in 14 days… So creating becomes faster, simpler, and easier to repeat.)
- CTA caption → `14-day transformation · Personalized · Done-with-you`
- Keep the 4 feature widgets (Faster / Findable / Reusable / Clear)  
  
Updated: ProofSection.tsx — bio + receipts
  Bio heading → "Built through real creative work." / "Judgment + integration + experience."
  Bio text → the new 3+ years / YouTube / full-process copy. Emphasize "What you're buying is judgment and integration, not more options."
  Stats card: 3+ YEARS, 1.25M+ VIEWS, 100+ TOOLS, 84 WPM, 3,000+ NOTES, 3K+ BOOKMARKS (update the 4-stat grid to 6 stats, 2×3 or 3×2)
  Keep the 4 screenshot receipts (YouTube, WPM, Notes, Bookmarks) and the footer caption.

## 2. New: Before/After table section

Two-column comparison card (Before → After) with the 8 rows from the spec. Styled as a bordered card with a divider — `bg-card`, left column muted, right column primary-accented check items.

## 3. New: "Your digital environment grew. It was never designed."

Narrative section — heading + the "You added an app…" list + "So now:" bolded list. Use `Section` band, left-aligned text block, max-w prose.

## 4. New: "You don't need another productivity system."

Short punchy section — 4 "You don't need…" lines + bold closer: "You need the system behind your tools to make sense."

## 5. New: "From scattered → coherent." — 6 transformation cards

Grid of 6 cards (Scattered→Coherent, Cluttered→Clear, Fragmented→Connected, Reactive→Intentional, Overwhelming→Calm, Friction→Flow, Collecting→Creating). Each card: arrow label (e.g. `SCATTERED → COHERENT`) + one-line description. Use `Reveal` stagger.

## 6. New: "I don't give you a productivity system. I build the system behind your creative work."

Two-part heading section. Body: "There is no universal perfect creator workflow… I start with you." Emphasized lines.

## 7. Updated: "Your workflow, analyzed from the inside."

Keep existing section layout but update copy to creator focus: list the creative-process stages (Ideation, Project Management, Packaging, Research, Scripting, Recording, Editing, Publishing). Keep "If you search for a file for five minutes, I want to see it" style copy.

## 8. Keep: "How it works." — 4-step process

Only update with stuff from the 6 step process where it fits better.  
PROCESS

## How we'll work together

1. 01
  ### 01 — Record Your Normal Work
  Don't show me your ideal workflow. Show me your real one.
  Record yourself doing normal work across your production process.
  Whatever applies to you. Don't clean anything up first. I want to see where the problems actually happen.
  No performance. No preparation. No workflow documentation. Just work normally.
  - Research
  - Ideation
  - Scripting
  - Recording
  - Editing
  - Thumbnails
  - File management
  - Project management
  Your recordings are private, securely stored, never shared, and deleted after your audit.
2. 02
  ### 02 — I Find The Friction
  I'll go through your workflow and identify:
  - Unnecessary steps
  - Repetitive work
  - Difficult-to-find information
  - Poor file organization
  - Project management problems
  - Unused software features
  - Tool friction
  - Context switching
  - Opportunities for templates
  - Opportunities for reuse
  - Missing systems
  - Unnecessary decisions
  Then I'll prioritize the changes that are actually worth making. Not everything needs fixing. We'll focus on the improvements with the biggest impact on your creative work.
3. 03
  ### 03 — I Build The System
  This is where the audit becomes your Deep Work OS.
  I'll turn the highest-value opportunities into practical systems. That could mean:
  - Building your Notion project system
  - Creating your templates
  - Designing your note-taking system
  - Restructuring your files
  - Creating your asset library
  - Building your shortcut system
  - Writing your SOPs
  - Defining your operating rules
  - Creating reusable workflows
  - Configuring your existing tools
  Everything is built around the way you actually work.
4. 04
  ### 04 — You Start Using It
  You'll receive your completed systems, written documentation, and video walkthrough.
  Then you start using them in real work:
  - Your next video
  - Your next project
  - Your next research session
  - Your next editing session
  The system gets tested where it matters: inside your actual creative work.

## 9. Updated: "What we can rebuild"

Replaces "What we can improve". 6 categories with chip lists: Your Creative Tools, Your Files & Assets, Your Notes & Information, Your Projects, Your Repeated Work, Your Operating Rules. Keep the icon + chips card layout. The Operating Rules card includes the "Where does this go?" questions and the "fewer decisions" closer.

## 10. Updated: Deliverables — "You don't just get recommendations."

7 deliverable cards: Workflow Diagnostic, Project System, File & Asset System, Template & Reuse System, Personalized Shortcut System, Personal Operating Manual, Walkthrough. Closer: "You don't receive a 40-page report… You receive a system built around what you actually do."

## 11. New: "Here's what changes." — Before/After narrative

Two side-by-side cards: BEFORE (messy start-a-project flow) and AFTER (clean flow ending with "You just start creating."). Use `bg-panel` for the After card to visually distinguish.

## 12. Updated: "Remove the unnecessary work…" — questions

Keep the existing "Why it matters" panel layout. Update the questions list to the 6 creator-focused questions. Closer heading: "Creating."

## 13. Updated: `ProofSection.tsx` — bio + receipts. Move under hero section

- Bio heading → "Built through real creative work." / "Judgment + integration + experience."
- Bio text → the new 3+ years / YouTube / full-process copy. Emphasize "What you're buying is judgment and integration, not more options."
- Stats card: `3+ YEARS`, `1.25M+ VIEWS`, `100+ TOOLS`, `84 WPM`, `3,000+ NOTES`, `3K+ BOOKMARKS` (update the 4-stat grid to 6 stats, 2×3 or 3×2)
- Keep the 4 screenshot receipts (YouTube, WPM, Notes, Bookmarks) and the footer caption.

## 14. New: "Why this is different" — Generic vs This comparison

Two-column comparison: left = generic productivity advice (muted, struck-through feel), right = the personalized flow (Show me → I'll find → prioritize → build → system). Use `bg-card` left, `bg-primary` right panel.

## 15. New: "You keep your tools."

Short section. Heading + 4 "You don't have to switch…" lines + bold closers: "No mandatory app stack. No unnecessary complexity."

## 16. Updated: "How it works" — 4 steps

Already exists; update copy to: 01 Show me how you work, 02 I find the friction, 03 I build the system, 04 You start using it. Keep timeline visual.

## 17. New: "What 'record your work' actually means"

Short section: "Hit record. Work normally. That's it." + list of things you don't need to do + "The mess is useful" + privacy note.

## 18. Updated: "Who this is for"

Heading → "For creators whose digital work has outgrown their current systems." Update the audience chips to creator-focused list. Add the "Not for you if" block.

## 19. New: Pricing card —  "Content Creator OS"

A centered pricing card on the landing page: $500, includes list (13 items from spec), CTA `[Apply for a Transformation]` (links to `/diagnostic`), caption `14-day turnaround · macOS & Windows · 1 client every 2 weeks`. Reuse the offer-card visual style already in diagnostic results.

## 20. New: "Why only 1 client every 2 weeks?"

Short narrative section explaining the personal, no-team, no-automation approach.

## 21. Updated: Final CTA — "Your workflow is unique."

Two-part: "Your workflow is unique. Your system should be too." + bold list of what it fits. Then "Show me how you work. I'll rebuild the system behind it." + Apply button + `14-day transformation · $500 · 1 client every 2 weeks`.

## 22. Keep: Contact section, Footer, RoiCalculator, MyAppsSection, FAQSection

- Keep `RoiCalculator`, `MyAppsSection`, `FAQSection` in place (minor copy tweaks to FAQ for creator focus if needed).
- Keep the contact/email section and footer. Footer tagline → creator-focused.
- Keep sticky mobile CTA.

## 23. Meta / head updates (`src/routes/index.tsx`)

- Title → `Creative Workflow Transformation: Rebuild Your Creator Workflow in 14 Days`
- Description → creator-focused, mentions content creators, 14-day, $500.

## 24. Offer card consistency (`src/lib/diagnosis-content.ts`)

Update `offer` object to match the new "Content Creator OS" / "Creative Workflow Transformation" package: title, subtitle, includes list (13 items), price note, guarantee — so the diagnostic results offer card matches the landing page.

---

## Section order (final)

1. Hero (with top bar + widgets)  
Proof
2. Before/After table
3. "Your digital environment grew. It was never designed."
4. "You don't need another productivity system."
5. "From scattered → coherent." (6 cards)
6. "I don't give you a productivity system."
7. "Your workflow, analyzed from the inside."
8. "Then I rebuild the parts that are slowing you down." (6 steps)
9. "What we can rebuild" (6 categories)
10. "You don't just get recommendations." (deliverables)
11. "Here's what changes." (Before/After narrative)
12. "Remove the unnecessary work…" (questions panel)
13. ProofSection (bio + receipts) (moved under hero section)
14. "Why this is different" (Generic vs This)
15. "You keep your tools."
16. "How it works" (4 steps)
17. "What 'record your work' actually means"
18. RoiCalculator
19. MyAppsSection
20. "Who this is for"
21. Pricing card ($500)
22. "Why only 1 client every 2 weeks?"
23. "Your workflow is unique." (final CTA)
24. Contact / email section
25. Footer

---

## Files to edit

- `src/components/landing/LandingPage.tsx` — full rewrite of data arrays + section composition
- `src/components/landing/ProofSection.tsx` — bio text + stats grid (6 stats)
- `src/routes/index.tsx` — title + description
- `src/lib/diagnosis-content.ts` — offer object update for consistency

No new dependencies, no schema changes, no new routes. All within existing component primitives and design tokens.