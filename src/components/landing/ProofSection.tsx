import { Eyebrow, Section } from "./primitives";
import { Reveal } from "./Reveal";
import { Cpu, Gauge, Minus, SlidersHorizontal, Sparkles } from "lucide-react";

import joinedAsset from "@/assets/proof/joined-crop.png.asset.json";
import viewsAsset from "@/assets/proof/views-crop.png.asset.json";
import wpmAsset from "@/assets/proof/wpm-crop.png.asset.json";
import notesAsset from "@/assets/proof/notes-crop.png.asset.json";
import bookmarksAsset from "@/assets/proof/bookmarks-crop.png.asset.json";

const cardStats = [
  { value: "100+", label: "Tools tested" },
  { value: "20 → 80", label: "WPM touch typing speed" },
  { value: "3,000+", label: "Curated work bookmarks" },
  { value: "3+ Yrs", label: "Windows workflow optimization" },
];

const proofCards = [
  {
    icon: SlidersHorizontal,
    title: "3+ years in public",
    body: "Making technical Windows content since 2023 — over 1.25M views of workflow teardowns.",
    images: [
      { src: joinedAsset.url, alt: "YouTube channel joined July 12, 2023" },
      { src: viewsAsset.url, alt: "YouTube channel with 1,252,847 views" },
    ],
  },
  {
    icon: Gauge,
    title: "Speed I actually built",
    body: "Went from 20 to 80+ WPM on purpose. Input speed is the base layer of every system I build.",
    images: [{ src: wpmAsset.url, alt: "Typing test result showing 84 words per minute" }],
  },
  {
    icon: Cpu,
    title: "A real knowledge system",
    body: "3,000+ notes I still use and can find in seconds — not an abandoned second brain.",
    images: [{ src: notesAsset.url, alt: "Note system search showing 3,214 results" }],
  },
  {
    icon: Minus,
    title: "Curation over collecting",
    body: "3K bookmarks, all structured and retrievable. Subtraction first: a simple system is a better system.",
    images: [{ src: bookmarksAsset.url, alt: "Bookmark manager showing 3K bookmarks" }],
  },
];

export function ProofSection() {
  return (
    <Section band id="proof">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
        <Reveal>
          <div
            style={{ backgroundImage: "var(--gradient-primary)" }}
            className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-lift)] sm:p-10"
          >
            <Cpu
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-6 h-56 w-56 opacity-[0.12]"
              strokeWidth={1.25}
            />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">
                Defensible authority
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
                Systems thinker &amp; workflow engineer
              </h2>
              <p className="mt-6 text-base leading-relaxed opacity-90">
                I have spent 3+ years creating technical content on Windows, testing over 100
                utilities, scripts, and productivity tools.
              </p>
              <p className="mt-4 text-base leading-relaxed opacity-90">
                I don&apos;t sell &quot;tips&quot;. I test systems over months under real
                constraints to find what actually scales versus what breaks.
              </p>

              <div className="mt-8 border-t border-primary-foreground/25 pt-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  {cardStats.map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</p>
                      <p className="mt-1 text-sm leading-snug opacity-75">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div>
              <Eyebrow>Why trust my framework</Eyebrow>
              <h3 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
                Judgment + Integration + Real Experience
              </h3>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {proofCards.map(({ icon: Icon, title, body, images }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                    <p className="font-bold text-foreground">{title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
                    {images.map(({ src, alt }) => (
                      <div
                        key={src}
                        className="flex h-11 items-center justify-start overflow-hidden rounded-lg bg-[#232323] px-3"
                      >
                        <img
                          src={src}
                          alt={alt}
                          loading="lazy"
                          className="max-h-8 w-auto max-w-full object-contain object-left"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-primary" />
              Real screenshots from my own machine — not stock proof.
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
