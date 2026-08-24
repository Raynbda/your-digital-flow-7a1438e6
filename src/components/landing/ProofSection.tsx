import { BookMarked, Clock3, FileText, Gauge, Quote, Youtube } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Youtube, value: "3+ years", label: "making videos about windows" },
  { icon: Gauge, value: "80 WPM", label: "sustained typing speed, tracked over years" },
  { icon: FileText, value: "3000+", label: "notes in my knowledge system" },
  { icon: BookMarked, value: "3000+", label: "bookmarks and saved resources, all findable" },
  { icon: Clock3, value: "1,000s of hours", label: "inside creative and productivity apps" },
];

const comments = [
  {
    name: "@mattbuilds",
    body: "This is the first workflow video I have watched that did not feel generic. You clearly actually work this way.",
  },
  {
    name: "@sarah.edits",
    body: "I restructured my project folders after this video and my edits are noticeably faster. Thank you.",
  },
  {
    name: "@notionnerd",
    body: "The depth of knowledge here is unreal. You explained in 10 minutes what took me a year to figure out.",
  },
  {
    name: "@creator_j",
    body: "Been following since the early videos. The consistency and expertise is why I trust these systems.",
  },
];

export function ProofSection() {
  return (
    <Section id="proof">
      <SectionHead
        eyebrow="Proof"
        title="This comes from years of doing the work, not reading about it."
        lead="I have spent years building, breaking, and rebuilding my own digital systems."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <Reveal key={value} delay={i * 70}>
            <article className="h-full rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-2xl font-extrabold tracking-tight text-card-foreground">
                {value}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{label}</p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={stats.length * 70}>
          <div className="flex h-full flex-col justify-center rounded-2xl bg-panel p-6 text-panel-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">
              Works on both
            </p>
            <p className="mt-3 text-lg font-bold">macOS and Windows</p>
            <p className="mt-2 text-sm leading-relaxed opacity-80">
              The systems are built around your setup, whichever platform you work on.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {comments.map(({ name, body }, i) => (
          <Reveal key={name} delay={i * 80}>
            <figure className="h-full rounded-2xl border border-border bg-card p-6">
              <Quote className="h-4 w-4 text-primary" aria-hidden="true" />
              <blockquote className="mt-3 text-[0.975rem] leading-relaxed text-card-foreground">
                {body}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Youtube className="h-4 w-4 text-primary" aria-hidden="true" />
                {name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
