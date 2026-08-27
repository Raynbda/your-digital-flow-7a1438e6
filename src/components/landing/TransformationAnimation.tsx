import { useEffect, useRef, useState } from "react";
import { ArrowDown, CheckCircle2, X } from "lucide-react";

import { Section, SectionHead } from "./primitives";

const before = [
  "47 browser tabs",
  "6 places for ideas",
  "Downloads overflowing",
  "4 different project structures",
  "No reusable templates",
  "17 clicks to perform a recurring action",
];

const after = [
  "One capture location",
  "Clear project architecture",
  "Reusable templates",
  "Keyboard shortcuts",
  "Automated/reduced steps",
  "Everything has an obvious home",
];

export function TransformationAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section>
      <SectionHead
        eyebrow="The transformation"
        title="From digital chaos to a system that runs itself"
      />
      <div ref={ref} className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        {/* Before */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Before</p>
          <ul className="mt-6 space-y-3">
            {before.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-secondary/60 px-4 py-3 text-[0.95rem] text-muted-foreground transition-all duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : `translateX(-14px) rotate(${i % 2 ? 1.5 : -1.5}deg)`,
                  transitionDelay: `${i * 90}ms`,
                }}
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center py-2 lg:h-full">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-700"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(0.6)",
              transitionDelay: "540ms",
            }}
          >
            <ArrowDown className="h-5 w-5 lg:-rotate-90" aria-hidden="true" />
          </span>
        </div>

        {/* After */}
        <div className="rounded-2xl bg-panel p-6 text-panel-foreground sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">After</p>
          <ul className="mt-6 space-y-3">
            {after.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-panel-foreground/15 px-4 py-3 text-[0.95rem] font-medium transition-all duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : "translateY(14px)",
                  transitionDelay: `${700 + i * 110}ms`,
                }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
