import {
  AppWindow,
  ArrowRight,
  Bookmark,
  Brain,
  Check,
  FileText,
  FolderTree,
  Keyboard,
  LayoutTemplate,
  Repeat,
  Search,
  Sparkles,
  StickyNote,
  Users,
  Wand2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* 1. Your digital environment grew — scattered cluster vs. designed grid */
/* ------------------------------------------------------------------ */

const nodes = [
  { label: "App", icon: AppWindow },
  { label: "Folder", icon: FolderTree },
  { label: "Database", icon: Brain },
  { label: "Bookmark", icon: Bookmark },
  { label: "Shortcut", icon: Keyboard },
  { label: "Template", icon: LayoutTemplate },
  { label: "Another tool", icon: Wand2 },
  { label: "Notes", icon: StickyNote },
  { label: "Files", icon: FileText },
];

const scatterPositions = [
  { top: "8%", left: "6%", rotate: -8 },
  { top: "4%", left: "44%", rotate: 6 },
  { top: "17%", left: "72%", rotate: -4 },
  { top: "34%", left: "22%", rotate: 9 },
  { top: "40%", left: "56%", rotate: -11 },
  { top: "56%", left: "8%", rotate: 5 },
  { top: "63%", left: "40%", rotate: -6 },
  { top: "70%", left: "70%", rotate: 10 },
  { top: "28%", left: "1%", rotate: 12 },
];

function NodeChip({
  icon: Icon,
  label,
  muted = false,
}: {
  icon: typeof AppWindow;
  label: string;
  muted?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[0.7rem] font-medium shadow-[var(--shadow-soft)] ${
        muted
          ? "border-border bg-card text-muted-foreground"
          : "border-primary/30 bg-primary/10 text-primary"
      }`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {label}
    </span>
  );
}

export function GrewVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Grew */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            It grew
          </p>
          <span className="rounded-md bg-secondary px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground">
            year 1 → year 3
          </span>
        </div>
        <div className="relative mt-4 h-[268px] overflow-hidden rounded-xl bg-secondary/60">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full text-muted-foreground/40"
            preserveAspectRatio="none"
          >
            {/* dashed path threading through the centre of every scattered chip */}
            <polyline
              points="20,13 58,9 86,22 70,45 36,39 15,33 22,61 54,68 84,75"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {nodes.map((n, i) => {
            const pos = scatterPositions[i]!;
            return (
              <span
                key={n.label}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: `rotate(${pos.rotate}deg)`,
                }}
              >
                <NodeChip icon={n.icon} label={n.label} muted />
              </span>
            );
          })}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Each decision made sense at the time. But nobody designed the whole thing.
        </p>
      </div>

      {/* Designed */}
      <div className="rounded-2xl border border-primary/30 bg-card p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Designed</p>
          <span className="rounded-md bg-primary/10 px-2 py-1 text-[0.65rem] font-semibold text-primary">
            one system
          </span>
        </div>
        <div className="relative mt-4 h-[268px] overflow-hidden rounded-xl bg-primary/5 p-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 300 260"
            className="absolute inset-0 h-full w-full text-primary/25"
            preserveAspectRatio="none"
          >
            <path
              d="M150 20 V240 M20 90 H280 M20 170 H280"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div className="relative grid h-full grid-cols-3 place-items-center gap-2">
            {nodes.map((n) => (
              <NodeChip key={n.label} icon={n.icon} label={n.label} />
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground">
          Same tools. Same work. A structure behind it.
        </p>
      </div>
    </div>
  );
}

export function GrewFlags({ items }: { items: string[] }) {
  const icons = [Search, Repeat, Brain];
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-3">
      {items.map((item, i) => {
        const Icon = icons[i % icons.length]!;
        return (
          <li
            key={item}
            className="rounded-xl border border-border bg-card p-5 text-[0.95rem] font-semibold text-foreground"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="mt-3 block leading-snug">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* 2. You don't need another productivity system                      */
/* ------------------------------------------------------------------ */

export function NotAnotherSystemVisual({
  rejected,
  questions,
}: {
  rejected: string[];
  questions: string[];
}) {
  return (
    <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      {/* Struck-out stack */}
      <div className="relative rounded-2xl border border-border bg-card p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Not this
        </p>
        <ul className="mt-4 space-y-2.5">
          {rejected.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm text-muted-foreground"
              style={{ opacity: 1 - i * 0.12 }}
            >
              <X className="h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
              <span className="line-through decoration-muted-foreground/50">{item}</span>
            </li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full text-destructive/25">
            <line x1="4" y1="8" x2="96" y2="92" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      <ArrowRight
        className="mx-auto h-7 w-7 rotate-90 text-primary lg:rotate-0"
        aria-hidden="true"
      />

      {/* The one thing */}
      <div className="rounded-2xl bg-panel p-6 text-panel-foreground">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">This</p>
        <p className="mt-4 text-xl font-extrabold leading-snug">
          The system <span className="text-primary-glow">behind</span> your tools.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Same apps. Fewer decisions. Everything with a place, a rule, and a reusable version.
        </p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-panel-foreground/10 px-3 py-2 text-sm font-semibold">
          <Sparkles className="h-4 w-4 text-primary-glow" aria-hidden="true" />
          That's what I build.
        </span>
      </div>

      {/* Questions you stop asking */}
      <div className="lg:col-span-3">
        <p className="text-center text-sm font-semibold text-muted-foreground">
          The questions you stop having to ask:
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
          {questions.map((q) => (
            <li
              key={q}
              className="rounded-full border border-border bg-card px-4 py-2 text-[0.85rem] italic text-muted-foreground line-through decoration-destructive/50"
            >
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-7 text-center text-xl font-bold text-foreground">
          Your digital work should have systems behind it.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. I don't give you a productivity system — two paths               */
/* ------------------------------------------------------------------ */

function PathNode({
  label,
  tone,
}: {
  label: string;
  tone: "muted" | "primary";
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
        tone === "muted"
          ? "border-dashed border-border bg-secondary/60 text-muted-foreground"
          : "border-primary/30 bg-primary/10 text-primary"
      }`}
    >
      {label}
    </div>
  );
}

function PathArrow({ tone }: { tone: "muted" | "primary" }) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={`mx-auto h-5 w-5 rotate-90 ${tone === "muted" ? "text-muted-foreground/50" : "text-primary"}`}
    />
  );
}

export function TwoPathsVisual() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          The template-first way
        </p>
        <div className="mt-6 space-y-2">
          <PathNode tone="muted" label="A universal template" />
          <PathArrow tone="muted" />
          <PathNode tone="muted" label="Forced onto your workflow" />
          <PathArrow tone="muted" />
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-center text-sm font-bold text-destructive">
            Friction, then abandoned
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          There is no universal "perfect" creator workflow. Your content, tools, projects, and
          creative process are all different.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-primary bg-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">The way I work</p>
        <div className="mt-6 space-y-2">
          <PathNode tone="primary" label="Your real workflow, recorded" />
          <PathArrow tone="primary" />
          <PathNode tone="primary" label="I find where it breaks down" />
          <PathArrow tone="primary" />
          <ul className="grid grid-cols-2 gap-2">
            {["Simplify", "Organize", "Optimize", "Systemize"].map((s) => (
              <li
                key={s}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-primary"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <PathArrow tone="primary" />
          <div className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground">
            A system built around you
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold leading-relaxed text-foreground">
          I don't start with a template. I start with you.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. You keep your tools                                             */
/* ------------------------------------------------------------------ */

export function KeepToolsVisual({
  icons,
  keepChips,
}: {
  icons: { name: string; src: string }[];
  keepChips: string[];
}) {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border-2 border-primary bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
            Stays
          </span>
          <p className="text-sm font-semibold text-foreground">The stack you already use</p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-4">
          {icons.map((app) => (
            <li key={app.name} className="grid h-10 w-10 place-items-center">
              <img
                src={app.src}
                alt={`${app.name} icon`}
                title={app.name}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
            </li>
          ))}
        </ul>
        <ul className="mt-7 flex flex-wrap gap-2">
          {keepChips.map((chip) => (
            <li
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
            >
              <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {chip}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-panel p-6 text-panel-foreground sm:p-8">
        <span className="rounded-full bg-panel-foreground/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary-glow">
          Changes
        </span>
        <ul className="mt-6 space-y-4">
          {[
            { title: "Used better", body: "The features and methods you're not using yet." },
            { title: "Configured properly", body: "Set up around the way you actually create." },
            {
              title: "Replaced only with a reason",
              body: "If something genuinely needs replacing, I'll tell you why.",
            },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
              <span>
                <span className="block text-[0.975rem] font-bold">{item.title}</span>
                <span className="block text-sm leading-relaxed opacity-80">{item.body}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-sm font-bold">No mandatory app stack. No unnecessary complexity.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Why only 1 client every 2 weeks                                 */
/* ------------------------------------------------------------------ */

export function CapacityVisual({ cta }: { cta?: React.ReactNode }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-panel p-8 text-center text-panel-foreground">
        <p className="text-xl font-bold leading-snug">
          Price increases with each new client I take on.
        </p>
        <p className="mt-3 text-[0.975rem] opacity-80">
          Reserve your slot at the current rate.
        </p>
        {cta ? <div className="mt-8">{cta}</div> : null}
      </div>


      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Who does the work
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Search, label: "Analysis", body: "I watch your workflow myself." },
            { icon: Wand2, label: "Design", body: "I design the improvements myself." },
            { icon: Repeat, label: "Build", body: "I build the systems myself." },
          ].map((r) => (
            <li key={r.label} className="flex items-start gap-3 rounded-xl border border-border p-4">
              <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-bold text-card-foreground">{r.label}</span>
                <span className="block text-sm text-muted-foreground">{r.body}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex items-center gap-2 font-bold text-foreground">
          <Users className="h-5 w-5 text-primary" aria-hidden="true" />
          That forces a capacity limit: 1 creator every 2 weeks.
        </p>
      </div>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* 6. Your workflow is unique                                         */
/* ------------------------------------------------------------------ */

const fingerprints = [
  { label: "Creator A", pattern: [1, 3, 2, 4, 2, 5, 3], note: "Long-form video" },
  { label: "Creator B", pattern: [4, 2, 5, 1, 3, 2, 4], note: "Short-form + design" },
  { label: "You", pattern: [2, 5, 3, 4, 1, 4, 5], note: "Your process" },
];

export function UniqueWorkflowVisual({ variables }: { variables: string[] }) {
  return (
    <div className="mt-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {fingerprints.map((fp, idx) => {
          const isYou = idx === fingerprints.length - 1;
          return (
            <div
              key={fp.label}
              className={`rounded-2xl border p-5 ${
                isYou ? "border-2 border-primary bg-card" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    isYou ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {fp.label}
                </p>
                <span className="text-[0.65rem] text-muted-foreground">{fp.note}</span>
              </div>
              <div className="mt-5 flex h-24 items-end gap-1.5">
                {fp.pattern.map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-sm ${isYou ? "bg-primary" : "bg-muted-foreground/25"}`}
                    style={{ height: `${h * 18}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Different steps. Different tools. Different order.
              </p>
            </div>
          );
        })}
      </div>

      <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
        {variables.map((v) => (
          <li
            key={v}
            className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
          >
            {v}
          </li>
        ))}
      </ul>

      <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
        {["Another productivity philosophy", "Another app", "Another generic template"].map((n) => (
          <li
            key={n}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground line-through decoration-destructive/50"
          >
            <X className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
            {n}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-9 max-w-2xl text-center text-xl font-bold text-foreground">
        You need a digital environment that makes sense for the way you actually work.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. The shift — horizontal timeline: before falls below, after rises */
/* ------------------------------------------------------------------ */

export function ShiftTimeline({
  pairs,
}: {
  pairs: Array<{ before: string; after: string }>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInstant(true);
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
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

  const delay = (ms: number) => (instant ? "0ms" : `${ms}ms`);

  return (
    <div
      ref={ref}
      className="mt-10 overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-8"
    >
      {/* end labels */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          A workflow that fights you
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          A workflow that supports you
        </p>
      </div>

      {/* ---------------- desktop / tablet: horizontal axis ---------------- */}
      <div className="mt-6 hidden sm:block">
        <div className="grid gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {pairs.map((pair, i) => (
            <div key={pair.before} className="flex flex-col items-center">
              {/* after — above the line */}
              <div
                className="flex h-[150px] w-full items-end justify-center px-1 transition-all duration-500 ease-out"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : "translateY(14px)",
                  transitionDelay: delay(420 + i * 110),
                }}
              >
                <div className="w-full rounded-xl border border-primary/25 bg-primary/5 p-2.5 text-center">
                  <Check
                    className="mx-auto h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="mt-1.5 text-[0.72rem] font-semibold leading-snug text-foreground">
                    {pair.after}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="h-4 w-px origin-bottom bg-primary/35 transition-transform duration-300"
                style={{
                  transform: active ? "scaleY(1)" : "scaleY(0)",
                  transitionDelay: delay(420 + i * 110),
                }}
              />

              {/* axis segment */}
              <span
                aria-hidden="true"
                className="relative flex h-[3px] w-full items-center"
              >
                <span
                  className="h-[3px] w-full origin-left rounded-full transition-transform duration-500 ease-out"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-muted-foreground, currentColor), var(--color-primary, currentColor))",
                    opacity: 0.5,
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transitionDelay: delay(i * 70),
                  }}
                />
                <span
                  className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary transition-opacity duration-300"
                  style={{ opacity: active ? 1 : 0, transitionDelay: delay(120 + i * 70) }}
                />
                {i === pairs.length - 1 ? (
                  <ArrowRight className="absolute -right-1 h-4 w-4 shrink-0 text-primary" />
                ) : null}
              </span>

              <span
                aria-hidden="true"
                className="h-4 w-px origin-top bg-border transition-transform duration-300"
                style={{
                  transform: active ? "scaleY(1)" : "scaleY(0)",
                  transitionDelay: delay(200 + i * 110),
                }}
              />

              {/* before — falling below the line */}
              <div
                className="flex h-[96px] w-full items-start justify-center px-1 transition-all duration-500 ease-out"
                style={{
                  opacity: active ? 0.55 : 0,
                  transform: active ? `translateY(6px) rotate(${(i % 3) - 1}deg)` : "none",
                  transitionDelay: delay(200 + i * 110),
                }}
              >
                <p className="rounded-lg border border-border bg-secondary px-2 py-1.5 text-center text-[0.7rem] leading-snug text-muted-foreground line-through decoration-muted-foreground/40">
                  {pair.before}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------- mobile: vertical axis ---------------------- */}
      <div className="mt-6 sm:hidden">
        <ul className="relative space-y-4 pl-4">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-muted-foreground/40 to-primary transition-transform duration-700 ease-out"
            style={{ transform: active ? "scaleY(1)" : "scaleY(0)" }}
          />
          {pairs.map((pair, i) => (
            <li
              key={pair.before}
              className="grid grid-cols-2 items-center gap-3 transition-all duration-500 ease-out"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "none" : "translateY(10px)",
                transitionDelay: delay(120 + i * 90),
              }}
            >
              <p className="rounded-lg border border-border bg-secondary px-2.5 py-2 text-[0.72rem] leading-snug text-muted-foreground line-through decoration-muted-foreground/40">
                {pair.before}
              </p>
              <div className="rounded-lg border border-primary/25 bg-primary/5 px-2.5 py-2">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="mt-1 text-[0.72rem] font-semibold leading-snug text-foreground">
                  {pair.after}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
