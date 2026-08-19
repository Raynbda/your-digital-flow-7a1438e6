import {
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  FolderTree,
  Keyboard,
  Layers,
  ListChecks,
  Quote,
  Recycle,
  Repeat,
  Search,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { ApplyButton, Chip, Section, SectionHead } from "./primitives";

const frictions = [
  "You keep doing the same things manually.",
  "You know you've saved something, but can't find it.",
  "Every new project starts from scratch.",
  "Your files, notes, tasks, and ideas live in different places.",
  "You know your software can do more, but don't know how.",
  "You keep collecting information without knowing what to do with it.",
  "You use the same tools every day but haven't set them up around the way you actually work.",
];

const outcomes = [
  {
    icon: Zap,
    title: "Work faster",
    body: "Remove unnecessary steps and discover better ways to perform repetitive work.",
  },
  {
    icon: Search,
    title: "Find things faster",
    body: "Create clear systems for your files, notes, assets, resources, and information.",
  },
  {
    icon: Recycle,
    title: "Reuse more of your work",
    body: "Turn things you've already created into templates, presets, assets, and reusable building blocks.",
  },
  {
    icon: Wand2,
    title: "Get more from your tools",
    body: "Discover useful features, shortcuts, utilities, and better ways to use the software you already have.",
  },
  {
    icon: Layers,
    title: "Reduce digital friction",
    body: "Create simple rules and systems that make your digital work easier to manage.",
  },
];

const improvements = [
  {
    icon: Zap,
    title: "Your tools and apps",
    body: "Get more out of the software you already use.",
    items: [
      "Hidden features",
      "Better configurations",
      "Useful utilities",
      "App-specific workflows",
      "Faster ways to perform common tasks",
      "Recommendations for tools that solve specific problems",
    ],
  },
  {
    icon: Keyboard,
    title: "Your shortcuts and repetitive work",
    body: "Stop wasting time on actions you perform hundreds of times.",
    items: [
      "Keyboard shortcuts",
      "Custom shortcuts",
      "Shortcut cheat sheets",
      "Faster navigation",
      "Repetitive workflows",
      "Templates",
      "Presets",
    ],
  },
  {
    icon: FolderTree,
    title: "Your files and digital organization",
    body: "Know exactly where things belong, and find them when you need them.",
    items: [
      "Folder structures",
      "Naming systems",
      "Smart folders",
      "Asset libraries",
      "Resource libraries",
      "Inspiration libraries",
      "Digital decluttering",
      "Rules for where different types of information belong",
    ],
  },
  {
    icon: Brain,
    title: "Your information and knowledge",
    body: "Turn scattered information into something you can actually use.",
    items: [
      "Note-taking system",
      "PKM",
      "Task management",
      "Content consumption",
      "Idea capture",
      "Research",
      "Bookmarks",
      "AI and Claude workflow",
      "Prompt library",
      "Saved resources",
    ],
  },
  {
    icon: Repeat,
    title: "Your project and content workflows",
    body: "Stop starting from a blank page.",
    items: [
      "Project templates",
      "Starting structures",
      "SOPs",
      "Checklists",
      "Reusable assets",
      "Presets",
      "Content systems",
      "Email templates",
      "Systems for storing and reusing old ideas",
      "Processes for starting, finishing, and archiving projects",
    ],
  },
];

const deliverables = [
  { title: "A shortcut cheat sheet", body: "So you know the fastest way to perform your most common actions." },
  { title: "A project template", body: "So your next project starts with the structure already built." },
  { title: "A file organization system", body: "So you know where everything belongs and can find it later." },
  { title: "A prompt library", body: "So you stop rewriting the same AI instructions." },
  { title: "A note template", body: "So recurring types of information are captured consistently." },
  { title: "An SOP or checklist", body: "So you don't have to remember every step of a recurring process." },
  { title: "A digital decluttering system", body: "So your workspace doesn't slowly become a mess again." },
  { title: "A personal operating manual", body: "So you have clear rules for how your digital work is organized and performed." },
];

const steps = [
  {
    number: "01",
    title: "Show me how you work",
    paragraphs: [
      "Record yourself doing your normal work.",
      "Use your normal apps. Open your normal files. Do things the way you normally do them.",
      "Don't optimize your workflow before I see it. I want to see where the problems actually happen.",
    ],
    list: [],
  },
  {
    number: "02",
    title: "I find the opportunities",
    paragraphs: ["I'll go through your workflow and identify:"],
    list: [
      "Unnecessary steps",
      "Repetitive work",
      "Difficult-to-find information",
      "Unused software features",
      "Better tools and utilities",
      "Opportunities for templates and presets",
      "Organization problems",
      "Reuse opportunities",
      "Systems that are creating unnecessary decisions",
    ],
    footer: "Then we'll prioritize the improvements that are actually worth making.",
  },
  {
    number: "03",
    title: "We build the improvements",
    paragraphs: [
      "We implement the changes that make the biggest difference.",
      "That could mean configuring your existing tools, creating templates, restructuring your files, building shortcuts, designing workflows, or introducing a better tool where one is genuinely needed.",
      "Everything is based on your actual work.",
    ],
    list: [],
  },
  {
    number: "04",
    title: "You leave with a system you can keep using",
    paragraphs: [
      "You won't be left with a list of productivity tips.",
      "You'll have practical systems built around your workflow and clear instructions for using them.",
      "So the next time you:",
    ],
    list: [
      "Start a project",
      "Save an idea",
      "Find an asset",
      "Capture information",
      "Repeat a task",
      "Use a piece of software",
      "Finish a project",
    ],
    footer: "you already know what to do.",
  },
] as const;

const questions = [
  "Where did I save that?",
  "How did I do this last time?",
  "Is there a faster way to do this?",
  "Which app should I use for this?",
  "Why am I rebuilding this again?",
  "What am I supposed to do with all this information?",
];

const audiences = [
  "Content creators",
  "Freelancers",
  "Knowledge workers",
  "Consultants",
  "Researchers",
  "Students",
  "Solopreneurs",
];

export function LandingPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="bg-panel px-4 py-2 text-center text-xs font-medium text-panel-foreground">
        Limited number of clients at a time
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-3 sm:px-8">
          <span className="flex items-center gap-2 font-extrabold tracking-tight text-foreground">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layers className="h-4 w-4" aria-hidden="true" />
            </span>
            Workflow Optimization
          </span>
          <ApplyButton size="sm" className="hidden sm:inline-flex" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-24">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            1:1 Workflow Optimization
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build a better system for your <span className="text-primary">digital work</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'll analyze how you work and help you improve your tools, files, information,
            shortcuts, systems, templates, and workflows, so your everyday digital work becomes
            faster, easier, and more organized.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <ApplyButton />
            <span className="text-sm text-muted-foreground">
              Personalized engagements, limited spots
            </span>
          </div>
        </div>
      </section>

      {/* Friction */}
      <Section band>
        <SectionHead
          eyebrow="The problem"
          title="Your digital work has more friction than it should."
          lead="You probably don't need another productivity app. You need to fix the small problems that keep slowing you down:"
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {frictions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-[0.975rem] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground">
          Individually, these problems seem small. Together, they create a huge amount of
          unnecessary work. That's what I help you fix.
        </p>
      </Section>

      {/* Analyzed from the inside */}
      <Section>
        <SectionHead
          eyebrow="The approach"
          title="Your workflow, analyzed from the inside."
          lead="This isn't a generic productivity consultation. I want to see how you actually work. You show me your normal workflow: the apps you use, the projects you work on, the files you manage, the information you collect, and the things you repeatedly do."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* What we can improve */}
      <Section band>
        <SectionHead
          eyebrow="What changes"
          title="What we can improve"
          lead="Your workflow is different from everyone else's, so what we change depends on what you actually need."
        />
        <div className="mt-12 space-y-5">
          {improvements.map(({ icon: Icon, title, body, items }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 sm:p-8 md:flex md:gap-10"
            >
              <div className="md:w-2/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2 md:mt-0 md:w-3/5 md:content-start">
                {items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <SectionHead
          eyebrow="Deliverables"
          title="You won't just get advice."
          lead="We'll turn the improvements into systems you can actually use. Depending on your workflow, this might mean creating:"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {deliverables.map(({ title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <Boxes className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-bold text-card-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section band id="how-it-works">
        <SectionHead eyebrow="Process" title="How it works" />
        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="absolute -left-[1.9rem] top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-[0.65rem] font-bold text-primary-foreground sm:-left-[3.15rem] sm:h-8 sm:w-8 sm:text-xs">
                {step.number}
              </span>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-card-foreground sm:text-2xl">
                  {step.number} - {step.title}
                </h3>
                {step.paragraphs.map((p) => (
                  <p key={p} className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {step.list.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.list.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </ul>
                )}
                {"footer" in step && step.footer ? (
                  <p className="mt-5 font-semibold text-foreground">{step.footer}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why it matters */}
      <Section>
        <div className="rounded-2xl bg-panel px-6 py-14 text-panel-foreground sm:px-12">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">
              Why it matters
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              This isn't about becoming more productive for the sake of it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              It's about removing the unnecessary work surrounding the work that actually matters.
              You shouldn't have to constantly ask:
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {questions.map((q) => (
              <li
                key={q}
                className="flex items-start gap-3 rounded-xl border border-panel-foreground/15 p-5"
              >
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                <span className="text-[0.975rem] italic leading-relaxed opacity-90">{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-xl font-bold">
            Your digital work should have systems behind it.
          </p>
        </div>
      </Section>

      {/* Who is this for */}
      <Section band>
        <SectionHead
          eyebrow="Audience"
          title="Who is this for?"
          lead="This is for people who spend a significant part of their day doing digital work and want to improve the way they work without adopting an entirely new productivity philosophy. Especially:"
        />
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {audiences.map((a) => (
            <Chip key={a}>{a}</Chip>
          ))}
          <Chip>Anyone whose work happens primarily through apps, files, and digital information</Chip>
        </ul>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            "You don't need to use a particular app.",
            "You don't need to switch your entire setup.",
            "You don't need a complicated productivity system.",
          ].map((item) => (
            <p
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-[0.95rem] text-card-foreground"
            >
              <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </p>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-foreground">
          We start with what you already use and improve it from there.
        </p>
      </Section>


      {/* Final CTA */}
      <Section id="apply">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <Sparkles
            aria-hidden="true"
            className="absolute right-6 top-6 h-10 w-10 opacity-25"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Your work is unique. Your workflow should be too.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-90">
            There is no universal setup that makes everyone work better. The best workflow is the
            one that fits your work, your tools, your projects, and the way you think. Show me how
            you work. I'll help you build a better system for it.
          </p>
          <a
            href="mailto:hello@example.com?subject=Apply%20for%201:1%20Workflow%20Optimization"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-semibold text-primary shadow-[var(--shadow-lift)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Apply for 1:1 Workflow Optimization
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mx-auto mt-5 max-w-xl text-sm opacity-85">
            Every engagement is personalized, so I only take on a limited number of clients at a
            time.
          </p>

        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>1:1 Workflow Optimization</p>
          <p>Better systems for your digital work.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <ApplyButton size="sm" className="w-full" />
      </div>
    </main>
  );
}
