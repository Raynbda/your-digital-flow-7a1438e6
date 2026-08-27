import {
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  FolderTree,
  Layers,
  ListChecks,
  Mail,
  Quote,
  Repeat,
  Search,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { ApplyButton, Chip, Section, SectionHead } from "./primitives";
import { ProofSection } from "./ProofSection";
import { MyAppsSection } from "./MyAppsSection";
import { FAQSection } from "./FAQSection";
import { RoiCalculator } from "./RoiCalculator";
import { CONTACT_EMAIL } from "@/lib/diagnosis-content";

const heroWidgets = [
  { icon: Zap, title: "Faster", body: "Fewer clicks, fewer steps" },
  { icon: Search, title: "Findable", body: "Stop losing your work" },
  { icon: Repeat, title: "Reusable", body: "Never start from zero" },
  { icon: FolderTree, title: "Clear", body: "Everything has a place" },
];

const beforeAfter = [
  { before: "Files scattered everywhere", after: "Everything has an obvious home" },
  { before: "Notes, tabs & tasks piling up", after: "Information is organized and retrievable" },
  { before: "Rebuilding the same work", after: "Templates, presets & systems handle the repeatable parts" },
  { before: "Starting every project from scratch", after: "Proven project structures are ready to go" },
  { before: "Barely using your software", after: "Your tools are configured around how you work" },
  { before: "Ideas collecting dust", after: "Ideas can move from capture → creation" },
  { before: "Constantly switching & searching", after: "Common actions become faster and easier" },
  { before: "Always wondering \u201cwhat should I do next?\u201d", after: "Your workflow makes the next step obvious" },
];

const grewItems = [
  "an app because you needed it",
  "a folder because you started a project",
  "a database because you had too many ideas",
  "a bookmark because you found something useful",
  "a shortcut because you discovered it",
  "a template because you got tired of starting from scratch",
  "another tool because the previous one wasn't quite enough",
];

const grewNow = [
  "Your ideas are somewhere.",
  "Your files are somewhere else.",
  "Your projects have their own systems.",
  "Your best work is buried in old projects.",
  "Your tools don't always work together.",
  "And you're the one holding everything together in your head.",
];

const dontNeed = [
  "You probably don't need another app.",
  "You don't need a generic Notion template.",
  "You don't need 50 new shortcuts.",
  "And you definitely don't need another productivity philosophy telling you to completely change the way you work.",
];

const transformations = [
  { from: "Scattered", to: "Coherent", body: "Everything important has a logical place." },
  { from: "Cluttered", to: "Clear", body: "Unnecessary tools, information, steps, and decisions disappear." },
  { from: "Fragmented", to: "Connected", body: "Your apps, files, notes, projects, and resources support each other." },
  { from: "Reactive", to: "Intentional", body: "You know what happens next instead of figuring it out every time." },
  { from: "Overwhelming", to: "Calm", body: "Your digital environment asks less of your attention." },
  { from: "Friction", to: "Flow", body: "Common actions become faster and easier." },
  { from: "Collecting", to: "Creating", body: "The things you've already built become building blocks for what's next." },
];

const stages = [
  "Ideation",
  "Project Management",
  "Packaging",
  "Research",
  "Scripting",
  "Recording",
  "Editing",
  "Publishing",
];

const steps = [
  {
    number: "01",
    title: "Record Your Normal Work",
    paragraphs: [
      "Don't show me your ideal workflow. Show me your real one.",
      "Record yourself doing normal work across your production process. Whatever applies to you. Don't clean anything up first. I want to see where the problems actually happen.",
      "No performance. No preparation. No workflow documentation. Just work normally.",
    ],
    list: [
      "Research",
      "Ideation",
      "Scripting",
      "Recording",
      "Editing",
      "Thumbnails",
      "File management",
      "Project management",
    ],
    footer:
      "Your recordings are private, securely stored, never shared, and deleted after your audit.",
  },
  {
    number: "02",
    title: "I Find The Friction",
    paragraphs: ["I'll go through your workflow and identify:"],
    list: [
      "Unnecessary steps",
      "Repetitive work",
      "Difficult-to-find information",
      "Poor file organization",
      "Project management problems",
      "Unused software features",
      "Tool friction",
      "Context switching",
      "Opportunities for templates",
      "Opportunities for reuse",
      "Missing systems",
      "Unnecessary decisions",
    ],
    footer:
      "Then I'll prioritize the changes that are actually worth making. Not everything needs fixing. We'll focus on the improvements with the biggest impact on your creative work.",
  },
  {
    number: "03",
    title: "I Build The System",
    paragraphs: [
      "This is where the audit becomes your Deep Work OS.",
      "I'll turn the highest-value opportunities into practical systems. That could mean:",
    ],
    list: [
      "Building your Notion project system",
      "Creating your templates",
      "Designing your note-taking system",
      "Restructuring your files",
      "Creating your asset library",
      "Building your shortcut system",
      "Writing your SOPs",
      "Defining your operating rules",
      "Creating reusable workflows",
      "Configuring your existing tools",
    ],
    footer: "Everything is built around the way you actually work.",
  },
  {
    number: "04",
    title: "You Start Using It",
    paragraphs: [
      "You'll receive your completed systems, written documentation, and video walkthrough.",
      "Then you start using them in real work:",
    ],
    list: [
      "Your next video",
      "Your next project",
      "Your next research session",
      "Your next editing session",
    ],
    footer:
      "The system gets tested where it matters: inside your actual creative work.",
  },
] as const;

const rebuildCategories = [
  {
    icon: Wand2,
    title: "Your Creative Tools",
    body: "Make the software you already use work harder.",
    items: [
      "Better configurations",
      "Hidden features",
      "App-specific workflows",
      "Keyboard shortcuts",
      "Custom shortcuts",
      "Useful utilities",
      "Faster navigation",
      "AI workflows",
      "Tool integrations",
    ],
  },
  {
    icon: FolderTree,
    title: "Your Files & Assets",
    body: "Make everything you've created easier to find and reuse.",
    items: [
      "Folder structures",
      "Naming systems",
      "Project structures",
      "Asset libraries",
      "Footage organization",
      "Resource libraries",
      "Inspiration libraries",
      "Archive systems",
      "Digital decluttering",
    ],
  },
  {
    icon: Brain,
    title: "Your Notes & Information",
    body: "Turn scattered information into something you can actually use.",
    items: [
      "Idea capture",
      "Research organization",
      "Note-taking",
      "Knowledge management",
      "Bookmark organization",
      "Prompt libraries",
      "Saved resources",
      "AI workflows",
    ],
  },
  {
    icon: Layers,
    title: "Your Projects",
    body: "Give your production process a structure that matches how you actually make content.",
    items: [
      "Project templates",
      "Production pipelines",
      "Dashboards",
      "Recurring workflows",
      "Task systems",
      "Starting structures",
      "Finishing systems",
      "Archive systems",
    ],
  },
  {
    icon: Repeat,
    title: "Your Repeated Work",
    body: "Find what you're doing over and over—and make it reusable.",
    items: [
      "Templates",
      "Presets",
      "SOPs",
      "Checklists",
      "Prompts",
      "Reusable assets",
      "Project structures",
      "Content systems",
    ],
  },
  {
    icon: ListChecks,
    title: "Your Operating Rules",
    body: "Make your system easier to run. Instead of constantly asking where things go, we'll create simple rules.",
    items: [
      "Where information belongs",
      "How ideas are captured",
      "How ideas become projects",
      "How projects move through production",
      "How files are named",
      "What gets templated",
      "What gets reused",
      "What gets archived",
      "What gets deleted",
    ],
  },
];

const deliverables = [
  { title: "A Workflow Diagnostic", body: "A detailed breakdown of where your creative process is losing time, creating friction, or generating unnecessary work." },
  { title: "A Project System", body: "A structure for managing your content from idea → production → publishing → archive." },
  { title: "A File & Asset System", body: "Clear structures and rules for your projects, footage, graphics, thumbnails, exports, references, and reusable assets." },
  { title: "A Template & Reuse System", body: "Templates, presets, prompts, checklists, SOPs, and reusable structures based on the work you actually repeat." },
  { title: "A Personalized Shortcut System", body: "The shortcuts and faster methods that matter for the software you use every day." },
  { title: "A Personal Operating Manual", body: "A simple reference explaining how your new system works—and the rules that keep it from slowly becoming messy again." },
  { title: "A Walkthrough", body: "A guided explanation of what changed, why it changed, and how to use your new system." },
];

const questions = [
  "Where did I save that?",
  "How did I do this last time?",
  "Is there a faster way?",
  "Which app should I use?",
  "Why am I rebuilding this?",
  "What am I supposed to do with all this information?",
];

const recordDontNeed = [
  "Reorganize your files first",
  "Document your workflow",
  "Fill out complicated forms",
  "Prepare a presentation",
  "Clean your desktop",
  "Pretend you're efficient",
];

const audienceList = [
  "Create content regularly",
  "Handle multiple parts of production yourself",
  "Work across many apps and digital tools",
  "Have accumulated years of files, notes, bookmarks, and projects",
  "Frequently search for things you know you've saved",
  "Rebuild the same work repeatedly",
  "Feel like your workflow has accumulated too much friction",
  "Know your tools can do more than you're currently getting from them",
  "Want to work faster without completely changing the way you work",
  "Would rather have someone experienced figure it out than spend months doing it yourself",
];

const notForYou = [
  "You want another productivity course.",
  "You want a generic template.",
  "You want 100 new apps to install.",
  "Or your current workflow already feels completely dialed in.",
];

const pricingIncludes = [
  "Workflow analysis",
  "Friction diagnosis",
  "Digital organization guide",
  "Project system",
  "File & asset architecture",
  "Templates and reusable systems",
  "Personalized shortcuts",
  "Tool & configuration optimization",
  "Operating rules",
  "SOPs/checklists where useful",
  "Personal Operating Manual",
  "Video walkthrough",
  "Post-transformation support",
];

const genericAdvice = [
  "\u201cUse Notion.\u201d",
  "\u201cTry this folder structure.\u201d",
  "\u201cDownload this app.\u201d",
  "\u201cLearn these shortcuts.\u201d",
  "\u201cUse this productivity system.\u201d",
];

const thisFlow = [
  "Show me how you work.",
  "I'll find the friction.",
  "I'll prioritize what actually matters.",
  "We'll build the improvements.",
  "You leave with a system designed around your work.",
];

export function LandingPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 bg-panel px-4 py-2 text-center text-xs font-semibold text-panel-foreground">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" aria-hidden="true" />
          Only 1 client per 2 weeks · For content creators · macOS & Windows
        </div>
        <header className="border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-3 sm:px-8">
            <span className="flex items-center gap-2 font-extrabold tracking-tight text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Layers className="h-4 w-4" aria-hidden="true" />
              </span>
              Digital Work OS
            </span>
            <ApplyButton size="sm" className="hidden sm:inline-flex" />
          </div>
        </header>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-24">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Zap className="h-4 w-4" aria-hidden="true" />
            14-Day Creative Workflow Transformation
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Your creative workflow, rebuilt around the way you actually work.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Too many files, apps, tabs, notes, prompts, projects, shortcuts, features, and ideas competing for your attention. I'll watch how you actually work, find what's slowing you down, and rebuild the systems around <em>your</em> creative process. <strong className="font-semibold text-foreground">All in 14 days.</strong>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-foreground">
            So creating becomes faster, simpler, and easier to repeat.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <ApplyButton />
            <span className="text-sm text-muted-foreground">
              14-day transformation · Personalized · Done-with-you
            </span>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <ul className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {heroWidgets.map((w) => (
                <li key={w.title} className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm text-muted-foreground">{w.title}</span>
                    <span className="block text-[0.975rem] font-semibold text-foreground">{w.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proof — moved under hero */}
      <ProofSection />

      {/* Before / After */}
      <Section band>
        <SectionHead
          eyebrow="The shift"
          title="From a workflow that fights you → one that supports you"
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-b border-border sm:border-b-0 sm:border-r">
              <p className="bg-secondary px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Before
              </p>
              <ul className="divide-y divide-border">
                {beforeAfter.map((row) => (
                  <li key={row.before} className="flex items-start gap-3 px-6 py-4 text-[0.95rem] text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                    {row.before}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="bg-primary/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                After
              </p>
              <ul className="divide-y divide-border">
                {beforeAfter.map((row) => (
                  <li key={row.after} className="flex items-start gap-3 px-6 py-4 text-[0.95rem] font-medium text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {row.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground">
          Your creative work shouldn't require almost as much work to manage as it does to create.
        </p>
      </Section>

      {/* Your digital environment grew */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Your digital environment grew. It was never designed.
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>You added:</p>
            <ul className="space-y-2">
              {grewItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="pt-2">Each decision made sense at the time. But nobody designed the whole thing.</p>
            <p className="pt-2">So now:</p>
            <ul className="space-y-2">
              {grewNow.map((item) => (
                <li key={item} className="font-semibold text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* You don't need another productivity system */}
      <Section band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            You don't need another productivity system.
          </h2>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-muted-foreground">
            {dontNeed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-xl font-bold text-primary">
            You need the system behind your tools to make sense. That's what I build.
          </p>
        </div>
      </Section>

      {/* From scattered → coherent */}
      <Section>
        <SectionHead
          eyebrow="The direction"
          title="From scattered → coherent."
          lead="Your digital environment should feel like one system. Not a pile of disconnected tools."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map(({ from, to, body }, i) => (
            <div
              key={from}
              className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                {from} <span className="text-muted-foreground">→</span> {to}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* I don't give you a productivity system */}
      <Section band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            I don't give you a productivity system.
          </h2>
          <p className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-3xl">
            I build the system behind your creative work.
          </p>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>There is no universal "perfect" creator workflow. Your content is different. Your tools are different. Your projects are different. Your creative process is different.</p>
            <p>So I don't start with a template and force your workflow into it.</p>
            <p className="text-xl font-bold text-foreground">I start with you.</p>
            <p>You show me how you actually work. I identify where your workflow breaks down. Then I simplify, organize, optimize, and systemize the environment around it.</p>
          </div>
        </div>
      </Section>

      {/* Your workflow, analyzed from the inside */}
      <Section>
        <SectionHead
          eyebrow="The approach"
          title="Your workflow, analyzed from the inside."
          lead="This isn't a generic productivity consultation. I want to see how you actually work — the apps you use, the projects you work on, the files you manage, and the things you repeatedly do."
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-lg font-semibold text-foreground">
            Don't show me your ideal workflow. <span className="text-primary">Show me your real one.</span>
          </p>
          <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
            Record yourself doing normal work across your production process:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stages.map((stage) => (
              <Chip key={stage}>{stage}</Chip>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>If you search for a file for five minutes, I want to see it.</p>
            <p>If you rebuild the same project structure again, I want to see it.</p>
            <p>If you switch between four apps to complete one simple task, I want to see it.</p>
            <p>If you can't remember where you saved something, <strong className="font-semibold text-foreground">that's exactly what I'm looking for.</strong></p>
          </div>
          <p className="mt-6 font-semibold text-foreground">
            The mess isn't a problem. <span className="text-primary">It shows me what needs to change.</span>
          </p>
        </div>
      </Section>

      {/* How we'll work together */}
      <Section band id="how-it-works">
        <SectionHead eyebrow="Process" title="How we'll work together" />
        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="absolute -left-[1.9rem] top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-[0.65rem] font-bold text-primary-foreground sm:-left-[3.15rem] sm:h-8 sm:w-8 sm:text-xs">
                {step.number}
              </span>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-card-foreground sm:text-2xl">
                  {step.number} — {step.title}
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

      {/* What we can rebuild */}
      <Section>
        <SectionHead
          eyebrow="What changes"
          title="What we can rebuild"
          lead="Your workflow determines what changes. There isn't a fixed checklist I'll blindly apply to every creator."
        />
        <div className="mt-12 space-y-5">
          {rebuildCategories.map(({ icon: Icon, title, body, items, footer }: { icon: typeof Wand2; title: string; body: string; items: string[]; footer?: string }) => (
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
              {footer ? (
                <p className="mt-5 font-semibold text-foreground md:w-full md:pt-2 md:border-t md:border-border md:mt-4">
                  {footer}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section band>
        <SectionHead
          eyebrow="Deliverables"
          title="You don't just get recommendations."
          lead="You leave with systems you can actually use. Depending on what your workflow needs, that might include:"
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
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground">
          You don't receive a 40-page report telling you what you could improve. You receive a system built around what you actually do.
        </p>
      </Section>

      {/* Here's what changes */}
      <Section>
        <SectionHead eyebrow="The result" title="Here's what changes." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Before</p>
            <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground">
              You start a project. You create the folders again. Find an old project for reference. Search for the template. Look for the footage. Open Notion. Search through old notes. Find the prompt. Switch back to your editor. Realize you forgot something. Open another app. Repeat.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-8 text-panel-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">After</p>
            <div className="mt-5 space-y-2 text-[0.975rem] leading-relaxed opacity-90">
              <p>You start a project.</p>
              <p className="font-bold opacity-100">The structure is already there.</p>
              <p>Your assets have a home. Your templates are ready. Your recurring tasks are already defined. Your useful prompts are accessible. Your shortcuts are familiar. Your previous work is reusable.</p>
              <p>You know what happens next.</p>
              <p className="text-xl font-bold opacity-100">You just start creating.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Remove the unnecessary work */}
      <Section band>
        <div className="rounded-2xl bg-panel px-6 py-14 text-panel-foreground sm:px-12">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">
              Why it matters
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Remove the unnecessary work surrounding the work that matters.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              So you spend less time asking:
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
            And more time doing the thing you actually care about:{" "}
            <span className="text-primary-glow">Creating.</span>
          </p>
        </div>
      </Section>

      {/* Why this is different */}
      <Section>
        <SectionHead eyebrow="Comparison" title="Why this is different" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Generic productivity advice
            </p>
            <ul className="mt-6 space-y-4">
              {genericAdvice.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.975rem] text-muted-foreground">
                  <span className="mt-1 text-muted-foreground/50" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">This</p>
            <ul className="mt-6 space-y-4">
              {thisFlow.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-[0.975rem] font-medium">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 opacity-70" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* You keep your tools */}
      <Section band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            You keep your tools.
          </h2>
          <p className="mt-4 text-xl font-semibold text-primary">
            I make them work around the way you create.
          </p>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-muted-foreground">
            <li>You don't have to switch from Notion.</li>
            <li>You don't have to switch from Obsidian.</li>
            <li>You don't have to abandon your current task manager.</li>
            <li>You don't have to move everything into some "perfect" productivity app.</li>
          </ul>
          <p className="mt-8 text-lg text-muted-foreground">
            If your current tools work, <strong className="font-semibold text-foreground">we keep them.</strong> If they're creating friction, we fix the way you're using them. If something genuinely needs replacing, I'll tell you why.
          </p>
          <p className="mt-6 text-xl font-bold text-foreground">
            No mandatory app stack. No unnecessary complexity.
          </p>
        </div>
      </Section>

      {/* What "record your work" actually means */}
      <Section>
        <SectionHead
          eyebrow="Recording"
          title={<>What "record your work" actually means</>}
          lead="Hit record. Work normally. That's it."
        />
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-[0.975rem] leading-relaxed text-muted-foreground">
              You don't need to:
            </p>
            <ul className="mt-4 space-y-2">
              {recordDontNeed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-muted-foreground">
                  <span className="mt-1 text-muted-foreground/50" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-bold text-foreground">The mess is useful.</p>
            <div className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>If you spend five minutes looking for a file, I want to know.</p>
              <p>If you rebuild something you've already built, I want to know.</p>
              <p>If you switch between six apps to complete one task, I want to know.</p>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Those aren't embarrassing habits to hide.{" "}
              <strong className="font-semibold text-foreground">They're opportunities to improve your system.</strong>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Your recordings are private, securely handled, and deleted after the engagement.
            </p>
          </div>
        </div>
      </Section>

      <RoiCalculator />

      <MyAppsSection />

      {/* Who this is for */}
      <Section band>
        <SectionHead
          eyebrow="Audience"
          title="For creators whose digital work has outgrown their current systems."
          lead="Especially if you:"
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {audienceList.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-[0.95rem] text-card-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Not for you if:
          </p>
          <ul className="mt-4 space-y-2">
            {notForYou.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-muted-foreground">
                <span className="mt-1 text-muted-foreground/50" aria-hidden="true">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Pricing card */}
      <Section id="apply">
        <div className="mx-auto max-w-xl rounded-2xl border-2 border-primary bg-card p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            The Creative Workflow Transformation
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-card-foreground sm:text-3xl">
            Content Creator OS
          </h2>
          <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
            Your digital environment, rebuilt around the way you actually create.
          </p>
          <p className="mt-6 text-5xl font-extrabold tracking-tight text-foreground">$500</p>
          <ul className="mt-8 space-y-2.5 text-left">
            {pricingIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-card-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Your exact system is determined by your workflow, not a fixed checklist.
          </p>
          <div className="mt-8">
            <ApplyButton label="Apply for a Transformation" />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            14-day turnaround · macOS & Windows · 1 client every 2 weeks
          </p>
        </div>
      </Section>

      {/* Why only 1 client every 2 weeks */}
      <Section band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Why only 1 client every 2 weeks?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Because I work directly with every client.</p>
            <p>There is no team applying a template to your setup. No automated report. No generic productivity recommendations. I personally watch your workflow, analyze it, design the improvements, and build the systems around it.</p>
            <p className="font-semibold text-foreground">That forces a capacity limit.</p>
            <p>So I only take on <strong className="font-bold text-primary">1 creator every 2 weeks.</strong></p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Your workflow is unique. Your system should be too.
          </h2>
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p>There is no universal setup that makes every creator work better. The best workflow is the one that fits:</p>
            <p className="font-bold text-foreground">
              your content · your tools · your projects · your information · your habits · your creative process
            </p>
            <p>You don't need another productivity philosophy. You don't need another app. You don't need another generic template.</p>
            <p className="text-xl font-bold text-foreground">
              You need a digital environment that makes sense for the way you actually work.
            </p>
          </div>
        </div>

        <div className="mt-14 relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <Sparkles
            aria-hidden="true"
            className="absolute right-6 top-6 h-10 w-10 opacity-25"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Show me how you work. I'll rebuild the system behind it.
          </h2>
          <div className="mt-9 flex justify-center">
            <ApplyButton variant="invert" label="Apply for a Transformation" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm opacity-85">
            14-day transformation · $500 · 1 client every 2 weeks
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section band id="contact">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-card-foreground sm:text-3xl">
            Still not sure, or just want to ask something?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Send me an email. Happy to help clear up any questions.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Creative%20Workflow%20Transformation%20-%20Question`}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Email me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Digital Work OS</p>
          <p>Better systems for your creative work. macOS and Windows.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <ApplyButton size="sm" className="w-full" label="Apply for a Transformation" />
      </div>
    </main>
  );
}
