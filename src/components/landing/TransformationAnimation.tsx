import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Command, FolderOpen, Inbox, MousePointerClick } from "lucide-react";

import { Section, SectionHead } from "./primitives";

/* ------------------------------- mess mocks ------------------------------- */

function MessyTabsMock() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-end gap-[2px] bg-secondary/70 px-2 pt-2">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="flex h-6 items-center justify-center rounded-t-md bg-background/90"
            style={{ width: `${Math.max(9, 26 - i * 1.4)}px` }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          </span>
        ))}
        <span className="ml-1 mb-1 rounded bg-destructive/15 px-1.5 py-0.5 text-[10px] font-semibold text-destructive">
          +31
        </span>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-2 w-2/3 rounded bg-muted" />
        <div className="h-2 w-1/2 rounded bg-muted" />
        <div className="h-2 w-3/5 rounded bg-muted" />
      </div>
    </div>
  );
}

const messyFiles = [
  "Final_v3.mp4",
  "Final_v3_FINAL.mp4",
  "Screenshot 2026-08-14 at 23.11.png",
  "asset (7).zip",
  "untitled.psd",
];

function MessyFilesMock() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-3 py-2">
        <FolderOpen className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[11px] font-semibold text-muted-foreground">Downloads</span>
      </div>
      <ul className="divide-y divide-border/60">
        {messyFiles.map((f) => (
          <li key={f} className="flex items-center gap-2 px-3 py-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-muted-foreground/25" />
            <span className="truncate font-mono text-[11px] text-muted-foreground">{f}</span>
          </li>
        ))}
        <li className="px-3 py-2 text-[11px] font-semibold text-destructive">+312 more</li>
      </ul>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

const scatterPlaces = [
  ["Notes app", "hook idea for ep 12…"],
  ["Phone notes", "b-roll list ??"],
  ["Voice memo", "0:47 unlabeled"],
  ["Random doc", "outline (old?)"],
  ["Chat with myself", "link + 'use this'"],
  ["Sticky note", "don't forget intro"],
];

function ScatterMock() {
  return (
    <div aria-hidden="true" className="flex flex-wrap gap-2">
      {scatterPlaces.map(([place, note], i) => (
        <div
          key={place}
          className="w-[calc(50%-0.25rem)] rounded-md border border-border bg-background px-2.5 py-2"
          style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground/70">{place}</p>
          <p className="mt-1 truncate text-[11px] text-muted-foreground">{note}</p>
        </div>
      ))}
    </div>
  );
}

function ClickTrailMock() {
  return (
    <div aria-hidden="true" className="rounded-lg border border-border bg-background p-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {Array.from({ length: 17 }).map((_, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className={
                i === 5 || i === 11
                  ? "h-2.5 w-2.5 rounded-full bg-destructive/50"
                  : "h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
              }
            />
            {i < 16 ? <span className="h-px w-2.5 bg-border" /> : null}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        17 clicks · 2 wrong turns · one recurring action
      </p>
    </div>
  );
}

/* ------------------------------ system mocks ------------------------------ */

function CleanTabsMock() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-lg border border-panel-foreground/15 bg-panel-foreground/5">
      <div className="flex items-end gap-1.5 px-2 pt-2">
        <span className="flex h-6 w-7 items-center justify-center rounded-t-md bg-primary/25">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
        </span>
        {["Script", "Footage", "Thumbnail", "Publish", "Research"].map((t) => (
          <span
            key={t}
            className="rounded-t-md bg-panel-foreground/10 px-2.5 py-1 text-[10px] font-medium text-panel-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-2 w-2/3 rounded bg-panel-foreground/15" />
        <div className="h-2 w-1/2 rounded bg-panel-foreground/10" />
      </div>
    </div>
  );
}

const cleanTree: Array<[string, string[]]> = [
  ["01 Projects", ["2026-08-27 ep12-deep-work/", "2026-08-20 ep11-systems/"]],
  ["02 Assets", ["broll/", "music/", "overlays/"]],
  ["03 Archive", ["2026-Q2/"]],
];

function CleanTreeMock() {
  return (
    <div aria-hidden="true" className="rounded-lg border border-panel-foreground/15 bg-panel-foreground/5 p-3">
      {cleanTree.map(([folder, kids]) => (
        <div key={folder} className="mb-2 last:mb-0">
          <p className="flex items-center gap-2 font-mono text-[11px] font-semibold text-panel-foreground">
            <FolderOpen className="h-3.5 w-3.5 text-primary-glow" />
            {folder}
          </p>
          <ul className="ml-5 mt-1 space-y-1 border-l border-panel-foreground/15 pl-3">
            {kids.map((k) => (
              <li key={k} className="font-mono text-[11px] text-panel-foreground/70">
                {k}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function InboxMock() {
  return (
    <div aria-hidden="true" className="rounded-lg border border-panel-foreground/15 bg-panel-foreground/5 p-3">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-panel-foreground/80">
        <Inbox className="h-3.5 w-3.5 text-primary-glow" />
        Capture inbox
      </p>
      <div className="mt-2 rounded-md border border-dashed border-panel-foreground/20 px-2.5 py-2 text-[11px] text-panel-foreground/50">
        Type anything here…
      </div>
      <ul className="mt-2 space-y-1.5">
        {[
          ["Hook idea for ep 12", "→ Script"],
          ["B-roll list", "→ Shot list"],
          ["Reference link", "→ Research"],
        ].map(([item, dest]) => (
          <li
            key={item}
            className="flex items-center justify-between gap-2 rounded-md bg-panel-foreground/10 px-2.5 py-1.5 text-[11px] text-panel-foreground"
          >
            <span className="truncate">{item}</span>
            <span className="shrink-0 text-primary-glow">{dest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShortcutMock() {
  return (
    <div aria-hidden="true" className="rounded-lg border border-panel-foreground/15 bg-panel-foreground/5 p-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-primary-glow" />
        <span className="h-px w-4 bg-panel-foreground/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary-glow" />
        <span className="ml-3 inline-flex items-center gap-1 rounded-md border border-panel-foreground/20 bg-panel-foreground/10 px-2 py-1 font-mono text-[11px] text-panel-foreground">
          <Command className="h-3 w-3" />
          ⇧K
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-[11px] text-panel-foreground/75">
        <MousePointerClick className="h-3.5 w-3.5 text-primary-glow" />
        2 clicks · same recurring action
      </p>
    </div>
  );
}

/* --------------------------------- section -------------------------------- */

const pairs = [
  {
    beforeLabel: "47 browser tabs, none of them findable",
    afterLabel: "5 named tabs plus a pinned workspace",
    before: <MessyTabsMock />,
    after: <CleanTabsMock />,
  },
  {
    beforeLabel: "A Downloads folder doing the job of a library",
    afterLabel: "A named folder system with dated projects",
    before: <MessyFilesMock />,
    after: <CleanTreeMock />,
  },
  {
    beforeLabel: "Ideas scattered across 6 different places",
    afterLabel: "One capture inbox with clear destinations",
    before: <ScatterMock />,
    after: <InboxMock />,
  },
  {
    beforeLabel: "17 clicks to do the same thing again",
    afterLabel: "2 clicks, or one shortcut",
    before: <ClickTrailMock />,
    after: <ShortcutMock />,
  },
];

export function TransformationAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const reveal = (delay: number, from: string) => ({
    opacity: active ? 1 : 0,
    transform: active ? "none" : from,
    transitionDelay: instant ? "0ms" : `${delay}ms`,
  });

  return (
    <Section>
      <SectionHead
        eyebrow="The transformation"
        title="This is what actually changes on your screen"
        subtitle="Not productivity theory. The same four things, rebuilt."
      />

      <div ref={ref} className="mt-10 space-y-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Before</p>
          <span className="hidden lg:block" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">After</p>
        </div>

        {pairs.map((pair, i) => (
          <div
            key={pair.beforeLabel}
            className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center"
          >
            <div
              className="rounded-2xl border border-border bg-card p-5 transition-all duration-500 sm:p-6"
              style={reveal(i * 140, "translateY(16px)")}
            >
              {pair.before}
              <p className="mt-4 text-[0.9rem] text-muted-foreground">{pair.beforeLabel}</p>
            </div>

            <div className="flex items-center justify-center">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "scale(1)" : "scale(0.6)",
                  transitionDelay: instant ? "0ms" : `${560 + i * 140}ms`,
                }}
                aria-hidden="true"
              >
                <ArrowRight className="h-4 w-4 rotate-90 lg:rotate-0" />
              </span>
            </div>

            <div
              className="rounded-2xl bg-panel p-5 text-panel-foreground transition-all duration-500 sm:p-6"
              style={reveal(700 + i * 140, "translateY(16px)")}
            >
              {pair.after}
              <p className="mt-4 flex items-start gap-2 text-[0.9rem] font-medium">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                {pair.afterLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
