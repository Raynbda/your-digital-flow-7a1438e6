import {
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  Clock,
  FolderTree,
  Gauge,
  KeyRound,
  Layers,
  ListChecks,
  Mail,
  MessageSquare,
  Repeat,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  Wand2,
  Waves,
  Wrench,
  X,
  Zap,

} from "lucide-react";

import { ApplyButton, Chip, Section, SectionHead } from "./primitives";
import { ProofSection } from "./ProofSection";
import { appIconList } from "./MyAppsSection";
import { FAQSection } from "./FAQSection";
import { RoiCalculator } from "./RoiCalculator";
import {
  CapacityVisual,
  GrewFlags,
  GrewVisual,
  KeepToolsVisual,
  NotAnotherSystemVisual,
  TwoPathsVisual,
  UniqueWorkflowVisual,
} from "./visuals";
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

const grewNow = [
  "You search for things you know you saved.",
  "You rebuild work you already built.",
  "Your best work is buried in old projects.",
];

const dontNeed = [
  "You probably don't need another app.",
  "You don't need a generic Notion template.",
  "You don't need 50 new shortcuts.",
  "And you definitely don't need another productivity philosophy telling you to completely change the way you work.",
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

const showMeItems = [
  "The ideas you capture.",
  "The research you collect.",
  "The scripts you write.",
  "The projects you manage.",
  "The footage you record.",
  "The files you organize.",
  "The thumbnails you design.",
  "The tools you switch between.",
  "The things you repeat every week.",
];

const fiveImprovements = [
  {
    icon: Zap,
    title: "Work Faster",
    body: "Remove unnecessary steps and find faster ways to perform repetitive work.",
  },
  {
    icon: Search,
    title: "Find Things Faster",
    body: "Create clear systems for your footage, assets, scripts, notes, references, ideas, and resources.",
  },
  {
    icon: Repeat,
    title: "Reuse More of Your Work",
    body: "Turn previous projects into templates, presets, prompts, assets, structures, and reusable building blocks.",
  },
  {
    icon: Wand2,
    title: "Get More From Your Tools",
    body: "Find the shortcuts, features, configurations, utilities, and workflows you're not taking advantage of.",
  },
  {
    icon: Waves,
    title: "Reduce Creative Friction",
    body: "Create simple systems and rules so you spend less time managing your workflow and more time actually creating.",
  },
];

const deliverables = [
  {
    title: "The Workflow Diagnostic",
    body: "A full breakdown of your recorded work week. Where you're losing time, repeating work, searching, switching context, and where your current systems break. You'll know exactly where the friction is coming from.",
  },
  {
    title: "Your Project Management System",
    body: "A project system built around how you actually make content. This can include your Notion workspace, databases, dashboards, production stages, tasks, templates, and recurring workflows. So you always know what you're working on, what's next, and where every project stands.",
  },
  {
    title: "Your File & Asset System",
    body: "A structure for your projects, footage, graphics, thumbnails, exports, resources, and reusable assets. So finding something doesn't require remembering where you put it.",
  },
  {
    title: "Your Note-Taking & Knowledge System",
    body: "A system for capturing ideas, research, references, and information. So your knowledge becomes something you can actually use — not another pile of notes.",
  },
  {
    title: "Your Template & Reuse System",
    body: "Templates, presets, prompts, project structures, SOPs, checklists, and reusable assets based on the work you repeat. So every new project benefits from everything you've already built.",
  },
  {
    title: "Your Shortcut System",
    body: "The fastest ways to perform the actions you repeat most. Mapped to the actual software you use. So your tools become faster to operate without changing your entire workflow.",
  },
  {
    title: "Your Operating Manual",
    body: "A written reference explaining how your new system works. Where things go, how projects move, how information is captured, what gets reused, and what happens at each stage. So the system doesn't slowly turn back into chaos a month later.",
  },
];

const outcomeItems = [
  "Your folder structure.",
  "Your project template.",
  "Your Notion project.",
  "Your recurring tasks.",
  "Your notes system.",
  "Your shortcuts.",
  "Your prompts.",
  "Your reusable assets.",
  "Your SOPs.",
  "Your naming rules.",
  "Your archive system.",
  "Your operating rules.",
];

const offerValue = [
  {
    icon: Target,
    label: "Your outcome",
    body: "Start every project already organized instead of rebuilding your setup from zero.",
  },
  {
    icon: ShieldCheck,
    label: "Why this can work",
    body: "Built from 3+ years of real content production and experience with 100+ tools, not generic productivity theory.",
  },
  {
    icon: Clock,
    label: "Time to result",
    body: "14 days. Not months of trying to redesign your workflow yourself.",
  },
  {
    icon: Gauge,
    label: "Effort required",
    body: "You don't need to figure out the solution. You record your normal work. I analyze it and build the system.",
  },
];

const bonuses = [
  {
    icon: KeyRound,
    title: "The Shortcut Vault",
    body: "A living reference of the shortcuts and custom hotkeys that matter most for your actual software, plus a personalized cheat sheet of your highest-value keys.",
    problem: "“I know I could work faster, but I don't know what shortcuts actually matter.”",
  },
  {
    icon: Rocket,
    title: "The Next-Project Starter Kit",
    body: "A pre-built folder and project structure for your next piece of content, with a quickstart guide for your new system. Open it. Duplicate it. Start working.",
    problem: "“Okay… what do I actually do now?”",
  },
  {
    icon: MessageSquare,
    title: "The 14-Day Implementation Check-ins",
    body: "Async support while you start using your new system. Find the problems in real use and fix them before they become habits.",
    problem: "“I'll get stuck the first time something doesn't fit.”",
  },
  {
    icon: Wrench,
    title: "The Tool Stack Audit",
    body: "Your current tools flagged KEEP · REPLACE · CUT, with reasoning behind each call, plus a curated setup library of tools, configurations, and utilities worth having.",
    problem: "“I keep collecting tools and don't know what's worth setting up.”",
  },
  {
    icon: Boxes,
    title: "The Reusable Work Vault",
    body: "A ready-made structure for storing templates, presets, scripts, hooks, assets, references, and checklists.",
    problem: "“I keep recreating things I've already made.”",
  },
  {
    icon: Search,
    title: "The Friction Finder",
    body: "A recurring checklist for spotting new sources of friction before they pile up again.",
    problem: "“My system will eventually become messy again.”",
  },
];

const maintenanceRules = [
  "New app → Where does it fit?",
  "New project → How do I set it up?",
  "New idea → Where does it go?",
  "New asset → Where is it stored?",
  "Repeated task → Should it become a template?",
  "New friction → How do I fix it?",
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
        <SectionHead
          eyebrow="The problem"
          title="Your digital environment grew. It was never designed."
          lead="An app here. A folder there. A database, a bookmark, a shortcut, a template, another tool. It accumulated."
        />
        <div className="mt-10">
          <GrewVisual />
          <GrewFlags items={grewNow} />
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold text-foreground">
            And you're the one holding everything together in your head.
          </p>
        </div>
      </Section>

      {/* You don't need another productivity system */}
      <Section band>
        <SectionHead
          eyebrow="The real issue"
          title="You don't need another productivity system."
        />
        <NotAnotherSystemVisual rejected={dontNeed} questions={questions} />
      </Section>

      {/* I don't give you a productivity system */}
      <Section>
        <SectionHead
          eyebrow="The approach"
          title="I don't give you a productivity system."
          lead="I build the system behind your creative work."
        />
        <TwoPathsVisual />
      </Section>

      {/* Your creative workflow, analyzed from the inside */}
      <Section>
        <SectionHead
          eyebrow="The approach"
          title="Your creative workflow, analyzed from the inside."
          lead="This isn't a generic productivity consultation. I want to see how you actually create. You show me your normal workflow:"
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {showMeItems.map((item) => (
            <li
              key={item}
              className="rounded-full bg-secondary px-4 py-2 text-[0.95rem] text-secondary-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-semibold text-foreground">
          Then I look for opportunities to make five things better.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fiveImprovements.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated,0_18px_40px_-18px_rgba(15,23,42,0.28))]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
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

      {/* What "record your work" actually means */}
      <Section>
        <SectionHead
          eyebrow="Recording"
          title={<>What "record your work" actually means</>}
          lead="Hit record. Work normally. Stop recording. That's it."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <Video className="h-7 w-7 text-primary" aria-hidden="true" />
            <p className="mt-6 text-lg font-bold text-foreground">You don't need to:</p>
            <ul className="mt-5 space-y-3.5">
              {recordDontNeed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.975rem] text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-panel p-6 text-panel-foreground sm:p-8">
            <p className="text-lg font-bold">The mess is useful.</p>
            <ul className="mt-5 space-y-3.5">
              {[
                "If you search for a file for five minutes, I want to see it.",
                "If you rebuild the same project structure again, I want to see it.",
                "If you switch between four apps to complete one simple task, I want to see it.",
                "If you can't remember where you saved something, that's exactly the kind of friction I'm looking for.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.975rem] leading-relaxed opacity-90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Those aren't embarrassing habits to hide — they're opportunities to improve your system. Your recordings are private, securely handled, and deleted after the engagement.
        </p>
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
          title="Not a list of recommendations. A rebuilt creative operating system."
          lead="Your exact deliverables depend on what I find in your workflow. That might mean:"
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

      {/* The outcome */}
      <Section>
        <SectionHead
          eyebrow="The outcome"
          title="Your creative work, turned into a system"
          lead="Imagine opening your next project and already having:"
        />
        <div className="mt-10 rounded-2xl border border-border bg-card p-5 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomeItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-accent/60 px-4 py-3.5 text-[0.95rem] text-card-foreground"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-bold text-foreground">
            Instead of figuring everything out again. That's the goal of Content Creator OS.
          </p>
        </div>

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
        <SectionHead
          eyebrow="Your stack"
          title="You keep your tools."
          lead="I make them work around the way you create."
        />
        <KeepToolsVisual
          icons={appIconList}
          keepChips={[
            "Stay on Notion",
            "Stay on Obsidian",
            "Keep your task manager",
            "No move to a \u201cperfect\u201d app",
          ]}
        />
      </Section>


      <RoiCalculator />



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
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground">
          We start with what you already use and improve it from there.
        </p>
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

          <div className="mt-8 grid gap-3 text-left">
            {offerValue.map(({ icon: Icon, label, body }) => (
              <div key={label} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-card-foreground">{body}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Your exact system is determined by your workflow, not a fixed checklist.
          </p>
          <div className="mt-8">
            <ApplyButton label="Reserve My Slot" />
          </div>
          <p className="mt-5 text-sm font-semibold text-foreground">
            Price increases with each new client I take on. Reserve your slot at the current rate.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            14-day turnaround · macOS &amp; Windows · 1 client every 2 weeks
          </p>
        </div>
      </Section>

      {/* Guarantee */}
      <Section band>
        <SectionHead
          eyebrow="Guarantee"
          title="I'll keep working until the system fits."
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div className="space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                Record your workflow as instructed and implement the system as delivered. If you don't feel more in control of your creative workflow within 14 days of receiving it, I'll do one additional round of revisions at no charge.
              </p>
              <p>
                And if after our intake you decide this isn't for you before your recording week starts,{" "}
                <strong className="font-semibold text-foreground">I'll refund you. No questions asked.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>


      {/* Why only 1 client every 2 weeks */}
      <Section band>
        <SectionHead
          eyebrow="Capacity"
          title="Why only 1 client every 2 weeks?"
          lead="Because I work directly with every client, start to finish."
        />
        <CapacityVisual />
      </Section>

      {/* Bonuses */}
      <Section band>
        <SectionHead
          eyebrow="Bonuses"
          title="Included at no extra cost"
          lead="Six additions that make the system easier to actually use."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bonuses.map(({ icon: Icon, title, body, problem }) => (
            <article key={title} className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-2 text-base font-bold text-card-foreground">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <p className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Problem solved: </span>
                {problem}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-panel p-6 text-panel-foreground sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">
            The maintenance system
          </p>
          <p className="mt-4 text-[0.975rem] leading-relaxed opacity-90">
            A simple rule set for the question “What do I do when I encounter something new?”
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {maintenanceRules.map((rule) => (
              <li
                key={rule}
                className="rounded-lg border border-panel-foreground/15 px-4 py-2.5 text-sm opacity-90"
              >
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold">Your environment doesn't just get cleaned. It becomes self-maintaining.</p>
        </div>
      </Section>


      {/* Final CTA */}
      <Section>
        <SectionHead
          eyebrow="The point"
          title="Your workflow is unique. Your system should be too."
          lead="There is no universal setup that makes every creator work better. The best workflow is the one that fits yours."
        />
        <UniqueWorkflowVisual
          variables={[
            "your content",
            "your tools",
            "your projects",
            "your information",
            "your habits",
            "your creative process",
          ]}
        />

        <div className="mt-14 relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <Sparkles
            aria-hidden="true"
            className="absolute right-6 top-6 h-10 w-10 opacity-25"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Show me how you work. I'll rebuild the system behind it.
          </h2>
          <div className="mt-9 flex justify-center">
            <ApplyButton variant="invert" label="Get a Free Workflow Audit" />
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
        <ApplyButton size="sm" className="w-full" label="Get a Free Workflow Audit" />
      </div>
    </main>
  );
}
