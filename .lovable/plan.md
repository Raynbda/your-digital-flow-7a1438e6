# Make "The shift" the visual before/after moment

The current page has two sections saying the same thing: the mockup section (crushed tabs, Downloads folder, scattered notes, click trail) and the text-list "The shift" table below it. The mockup section gets removed, and "The shift" becomes one strong visual: a single horizontal timeline arrow with the old workflow falling away below the line and the new one rising above it.

## The visual

One wide card containing a horizontal axis:

- A thick line running left to right, dark/muted on the left and turning primary-blue toward the right, ending in an arrowhead.
- Eight pair-columns spaced along the axis. For each pair:
  - **Below the line:** the "before" item as a small greyed chip, slightly rotated and offset downward, with a faint dropping connector to the axis — it reads as debris falling off.
  - **Above the line:** the "after" item as a crisp card with a check icon and primary accent, connected upward to the axis.
- Labels at each end of the axis: "A workflow that fights you" (left, muted) and "A workflow that supports you" (right, primary).

Content stays exactly the current eight pairs (files scattered → obvious home, notes piling up → retrievable, etc.).

## Motion

On scroll into view: the line draws left to right, then each pair resolves in sequence — the before chip drifts down and fades to low opacity while the after card rises and settles. One-shot, respects `prefers-reduced-motion` by rendering the final state instantly.

## Layout

- Desktop: true horizontal timeline, eight columns across, above/below split.
- Tablet: two rows of four columns, each keeping its own axis segment.
- Mobile: rotates to a vertical axis — line runs top to bottom, before chip on the left, after card on the right, so the pairing still reads.

## Section copy

Eyebrow "The shift", title "From a workflow that fights you → one that supports you", and the existing closing line ("Your creative work shouldn't require almost as much work to manage as it does to create.") stay.

## Technical notes

- New `ShiftTimeline` component in `src/components/landing/visuals.tsx`, fed by the existing `beforeAfter` array in `LandingPage.tsx`.
- Remove `TransformationAnimation` from `LandingPage.tsx` and delete `src/components/landing/TransformationAnimation.tsx`.
- Reuse the IntersectionObserver + reduced-motion reveal pattern already in the codebase; axis draw via a CSS `scaleX` transform on a token-colored bar.
- Semantic tokens only (`bg-card`, `border-border`, `text-muted-foreground`, `primary`, `primary-glow`); decorative chrome `aria-hidden`, with each pair's text kept in real DOM order so screen readers read "before → after".
- No other section, copy, or ordering changes.
