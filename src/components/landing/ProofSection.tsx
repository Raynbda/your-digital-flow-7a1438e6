import { Eyebrow, Section } from "./primitives";
import { Reveal } from "./Reveal";
import { Cpu, Gauge, Minus, SlidersHorizontal } from "lucide-react";
import youtubeShot from "@/assets/proof/youtube-metrics.png.asset.json";
import wpmShot from "@/assets/proof/wpm-chart.png.asset.json";
import notesShot from "@/assets/proof/notes-count.png.asset.json";
import bookmarksShot from "@/assets/proof/bookmarks-count.png.asset.json";

const cardStats = [
  { value: "3+ Yrs", label: "Producing YouTube videos" },
  { value: "100+", label: "Apps & tools used, broken, and replaced in real work" },
  { value: "Scratch", label: "A workflow built from scratch,  not copied from a listicle" },
  { value: "Windows", label: "Deep in the apps space: I know what’s possible and a dead end" },
];

const proofCards = [
  {
    icon: SlidersHorizontal,
    title: "3+ years in public",
    body: "Making Windows content since 2023. Over 1.25M views.",
    image: youtubeShot.url,
    alt: "YouTube channel stats: joined Jul 12, 2023 with 1,252,847 views",
    fit: "cover",
  },
  {
    icon: Gauge,
    title: "Speed I actually built",
    body: "Went from 20 to 80+ WPM on purpose. Input speed is the base layer of every system I build.",
    image: wpmShot.url,
    alt: "Typing speed result of 84 words per minute",
    fit: "contain",
  },
  {
    icon: Cpu,
    title: "A real knowledge system",
    body: "3,000+ notes I still use and can find in seconds, not an abandoned second brain.",
    image: notesShot.url,
    alt: "Note search showing 3,154 results",
    fit: "cover",
  },
  {
    icon: Minus,
    title: "Curation over collecting",
    body: "3K bookmarks, all structured and retrievable. Subtraction first: a simple system is a better system.",
    image: bookmarksShot.url,
    alt: "Bookmark manager showing the All bookmarks collection with a count of 3K",
    fit: "contain",
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
                I’ve spent three years obsessing over building better workflows for creating content.
              </h2>
              <p className="mt-6 text-base leading-relaxed opacity-90">
                 I make YouTube videos independently, which means I handle everything myself: research, writing, recording, editing, file management, publishing, and everything in between.
              </p>
              <p className="mt-4 text-base leading-relaxed opacity-90">
                Over the years, I&rsquo;ve tested and replaced dozens of apps, built systems from
                scratch, and spent thousands of hours working on a computer. What you are buying is
                judgment and integration, not more options.
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
            {proofCards.map(({ icon: Icon, title, body, image, alt, fit }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                    <p className="font-bold text-foreground">{title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-4 overflow-hidden rounded-xl border border-border bg-[#262626] p-2">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className={`mx-auto h-24 w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <p className="mt-10 text-center text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Built through thousands of hours of actual digital work. Not productivity theory.
        </p>
      </Reveal>
    </Section>
  );
}
