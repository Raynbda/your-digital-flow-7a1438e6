# Make the Before/After transformation literal, not a list

Right now the transformation section is two lists of text ("47 browser tabs", "Downloads overflowing"). It will be replaced with small, hand-built UI mockups that actually *show* the chaos on the left and the calm system on the right, so the visitor recognises their own screen.

## Left side — the mess (recognisable, slightly chaotic)

Four stacked mini-mockups, built in HTML/CSS (no screenshots, no real app logos):

1. **Browser window with 47 tabs** — a window chrome bar with ~14 crushed, favicon-only tabs that get narrower toward the right, ending in a "+31" overflow chip. Badge: "47 tabs open".
2. **Downloads folder overflowing** — a file-list panel with rows like `Final_v3.mp4`, `Final_v3_FINAL.mp4`, `Screenshot 2026-08-14 at 23.11.png`, `asset (7).zip`, `untitled.psd`, fading out at the bottom under a "+312 more" row.
3. **Ideas scattered across 6 places** — six small sticky-note cards labelled Notes app, Phone notes, Voice memo, Random doc, Chat with myself, Sticky note — each holding a half-finished idea, tilted at slightly different angles.
4. **Same task, 17 clicks** — a horizontal trail of 17 small dots/steps with a couple of "wrong turn" branches, labelled "one recurring action".

Styling: muted/desaturated palette, faint red-ish accents for the friction markers, cards very slightly rotated and overlapping to feel unmanaged.

## Right side — the system (calm, aligned)

The same four things, rebuilt:

1. **One browser window, 5 named tabs** + a pinned workspace tab. Badge: "5 tabs, on purpose".
2. **A named folder tree** — `01 Projects / 02 Assets / 03 Archive` with consistent, dated filenames.
3. **One capture inbox** — a single card, one input row, three triaged items with clear destinations.
4. **Same task, 2 clicks** — the 17-dot trail collapsed into 2 dots plus a shortcut key chip (`⌘⇧K`).

Styling: dark panel, aligned grid, no rotation, primary-blue accents and check markers.

## Motion

On scroll into view: the mess renders first (tabs crushing in, file rows piling up), then a centre arrow pulses, then each right-hand mockup snaps into place in sequence. One-shot animation, respects `prefers-reduced-motion` (renders the final state instantly).

## Layout

Desktop: two columns with the arrow between them, each row of the left column aligned to its counterpart on the right so the pairing is obvious. Mobile: stacks to before-block then after-block, keeping pair order.

## Technical notes

- Rewrite `src/components/landing/TransformationAnimation.tsx`; keep the existing IntersectionObserver reveal pattern and add a reduced-motion check.
- New sub-components (`TabBarMock`, `FileListMock`, `ScatterMock`, `ClickTrailMock`) live in the same file, all pure presentational markup.
- Only semantic design tokens (`bg-card`, `bg-panel`, `text-muted-foreground`, `border-border`, `primary`) — no hardcoded colours.
- Mockups are decorative: `aria-hidden` on the visual chrome, with a concise text label per pair so the meaning is still readable to screen readers.
- No copy or section-order changes elsewhere on the page; section stays right after the proof section.
