# Make the story visual, not text blocks

Six text-heavy sections on the landing page get turned into visual explainers, two sections get removed, and one gets moved.

## Section-by-section changes

**1. "Your digital environment grew. It was never designed." — visualize**
Replace the bullet list with a two-panel visual:
- Left: a chaotic "grew" cluster — app/file/note/tab chips scattered at slight random rotations with tangled connector lines behind them, tagged with a timeline ("year 1 → year 3") showing things piling on.
- Right: the same chips arranged in a clean, aligned grid with straight connectors, labelled "designed".
The "each decision made sense at the time / nobody designed the whole thing" line becomes the caption under the left panel. The "so now" consequences become 3 small red-flag stat tiles (searching, rebuilding, friction).

**2. "You don't need another productivity system" — visualize**
Turn into a crossed-out stack visual: a column of greyed, struck-through cards (new app, new template, new method, another course) with a big diagonal "not this" treatment, then an arrow pointing to one highlighted card: "the system behind your tools". The unnecessary-work questions from Why It Matters ("Where did I save that?", "How did I do this last time?", "Is there a faster way?", "Which app should I use?", "Why am I rebuilding this again?", "What do I do with all this info?") move here as small quote chips floating around the struck-out stack, ending on the line "Your digital work should have systems behind it."

**3. "From scattered → coherent" — removed** (whole section deleted).

**4. "I don't give you a productivity system" — visualize**
Becomes a side-by-side flow diagram instead of paragraphs:
- Template-first path: `Template → forced onto your workflow → friction` (muted, dead-ends).
- My path: `Your real workflow → analysis → simplify · organize · optimize · systemize → your system` (primary colour, arrows connecting numbered nodes).
Keeps the headline and the "I start with you" emphasis line.

**5. "You keep your tools" — visualize**
Becomes a "kept vs. changed" visual: your existing app icons (reused from the My Apps icon set) sit inside a card badged "stays", with a small second column of three outcome chips — "used better", "configured properly", "replaced only if I can justify why". The four "you don't have to switch from…" lines become checkmark chips under the app row instead of a bullet list.

**6. Recording section — moved**
The "What 'record your work' actually means" section moves to sit directly after "How we'll work together" (currently it sits far below, after the comparison section). No copy change.

**7. "Why it matters" / "Remove the unnecessary work" — removed**
The section is deleted; its questions live on inside section 2 as described above.

**8. "Why only 1 client every 2 weeks?" — visualize**
Becomes a capacity visual: a 14-day strip of day cells where one client block spans all 14 days and the remaining slots are shown as unavailable, plus three role tiles showing that the same person does analysis, design, and build (no team, no automated report). Short caption keeps the "that forces a capacity limit" point.

**9. Final CTA "Your workflow is unique. Your system should be too." — visualize**
Becomes a fingerprint-style visual: three mini workflow cards (different creators) each with a different node arrangement, over a caption row of your-variables chips (content · tools · projects · information · habits · process). The "you don't need another philosophy/app/template" lines become struck-through chips, ending on the emphasized closing line. CTA panel unchanged.

## Technical notes

- All work is in `src/components/landing/LandingPage.tsx`, plus one or two small presentational sub-components (e.g. `ScatterVisual`, `CapacityVisual`) added under `src/components/landing/` if the file gets unwieldy.
- Visuals are built with divs, Tailwind, existing semantic tokens (`bg-card`, `border-border`, `text-primary`, `bg-panel`), Lucide icons, and inline SVG connectors — no images, no new dependencies.
- App icons for section 5 are reused from the existing `MyAppsSection` asset imports.
- Unused data arrays (`transformations`, `questions`) and now-unused Lucide imports get removed.
- Every visual stacks to a single column on mobile; decorative SVG/connector layers get `aria-hidden`.
