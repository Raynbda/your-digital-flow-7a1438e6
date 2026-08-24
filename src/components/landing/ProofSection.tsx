import { Eyebrow, Section } from "./primitives";
import { Reveal } from "./Reveal";

import joinedAsset from "@/assets/proof/joined.png.asset.json";
import viewsAsset from "@/assets/proof/views.png.asset.json";
import wpmAsset from "@/assets/proof/wpm.png.asset.json";
import notesAsset from "@/assets/proof/notes.png.asset.json";
import bookmarksAsset from "@/assets/proof/bookmarks.png.asset.json";

const bullets = [
  "3+ years producing YouTube videos entirely on a Windows machine",
  "100+ productivity apps and tools used, broken and replaced in real work",
  "A workflow built from scratch, not copied from a listicle",
  "Deep in the Windows tooling space: I know what is possible and what is a dead end",
];

const cardStats = [
  { value: "100+", label: "Tools tested" },
  { value: "20 → 80", label: "WPM typing speed" },
  { value: "3,000+", label: "Curated bookmarks" },
  { value: "3,000+", label: "Notes written" },
];

const screenshots = [
  { src: joinedAsset.url, alt: "YouTube channel joined July 12, 2023", caption: "Channel started Jul 2023" },
  { src: viewsAsset.url, alt: "YouTube channel with 1,252,847 views", caption: "1.25M+ views on Windows workflow videos" },
  { src: wpmAsset.url, alt: "Typing test result showing 84 words per minute", caption: "84 WPM sustained typing speed" },
  { src: notesAsset.url, alt: "Note system search showing 3,214 results", caption: "3,214 notes in my knowledge system" },
  { src: bookmarksAsset.url, alt: "Bookmark manager showing 3K bookmarks", caption: "3K bookmarks, all findable" },
];

export function ProofSection() {
  return (
    <Section band id="proof">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="text-left">
            <Eyebrow>Who built this</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
              I have spent three years obsessing over making one Windows machine fast
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Everything here comes out of my own work: making videos on Windows, testing every tool
              in the space, and combining features across apps into a workflow nobody handed me.
              What you are buying is judgment and integration — not more options.
            </p>

            <div className="mt-8 rounded-2xl bg-[image:var(--gradient-primary)] p-7 text-primary-foreground shadow-[var(--shadow-lift)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">
                By the numbers
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                {cardStats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</p>
                    <p className="mt-1 text-sm opacity-75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <ul className="divide-y divide-border border-y border-border">
            {bullets.map((text, i) => (
              <Reveal key={text} delay={i * 70}>
                <li className="flex items-start gap-4 py-5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-primary"
                  />
                  <span className="text-[1.0125rem] leading-relaxed text-foreground">{text}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Receipts
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {screenshots.map(({ src, alt, caption }, i) => (
              <Reveal key={caption} delay={i * 70}>
                <figure className="h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex h-24 items-center justify-center bg-panel px-3">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="max-h-20 w-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm leading-snug text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
