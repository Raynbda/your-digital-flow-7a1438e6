# Landing page visual refinements

Five presentation changes, all inside `src/components/landing/LandingPage.tsx` (plus the capacity widget in `visuals.tsx`). No copy or logic changes.

## 1. "Show me your workflow" items become pills

The nine bordered cards under "Your creative workflow, analyzed from the inside." turn into a centered, wrapping row of soft rounded-full pills (muted background, no bullet dot), matching the reference screenshot.

## 2. Hover shadow on the five improvement cards

Each of the five cards under "Then I look for opportunities to make five things better." gets a smooth transition to an elevated shadow (and slight border emphasis) on hover.

## 3. Recording section: two-column layout

Replace the single stacked card with a two-column grid:
- Left: light card with a video icon, "You don't need to:" and the six items as a ✕ list.
- Right: dark panel card titled "The mess is useful." with the friction lines as check-marked items.
Keep the existing copy, including the privacy line (placed under the grid).

## 4. Outcome section: one framed card of checked tiles

Wrap the twelve "Imagine opening your next project…" items in a single large bordered card containing a 3-column grid of soft tinted tiles with check icons, and keep the closing line inside that card.

## 5. Capacity section: two-column layout

Left: card with the three "No team / No generic templates / No automated audit" items plus the "I personally watch your workflow…" paragraph. Right: dark panel with "Price increases with each new client I take on.", "Reserve your slot at the current rate." and a white "Reserve My Slot" button. The existing "Who does the work" widget stays — kept as a row below the two columns.

## 6. Bonuses move under the offer card

Reorder so the Bonuses section (including the maintenance system panel) renders directly after the pricing card section, before the Guarantee.

## Technical notes

- Pills, tiles, and panels use existing semantic tokens (`bg-secondary`, `bg-panel`, `text-primary`, `--shadow-soft`) — no hardcoded colors.
- `CapacityVisual` in `src/components/landing/visuals.tsx` is restructured to the new layout while preserving the "Who does the work" widget markup.
- The 14-day calendar grid currently in the capacity visual is dropped since the new layout has no place for it (say the word if you want it kept).
