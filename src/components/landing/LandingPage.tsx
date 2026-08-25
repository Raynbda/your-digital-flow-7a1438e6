import {
  ArrowRight,
  BookOpen,
  Boxes,
  Brain,
  CheckCircle2,
  Clock,
  FolderTree,
  Keyboard,
  Layers,
  ListChecks,
  Mail,
  Monitor,
  Repeat,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { ApplyButton, Chip, Section, SectionHead } from "./primitives";
import { ProofSection } from "./ProofSection";
import { MyAppsSection } from "./MyAppsSection";
import { FAQSection } from "./FAQSection";
import { RoiCalculator } from "./RoiCalculator";
import { CONTACT_EMAIL } from "@/lib/diagnosis-content";

const heroFrictions = [
  "The script you can't find.",
  "The thumbnail file buried three folders deep.",
  "The project you're rebuilding from zero, again.",
  "The note you know you wrote somewhere.",
  "The same AI prompt you're rewriting for the tenth time.",
  "The fifteen minutes lost every time you switch between your editor, notes app, file explorer, browser, and project manager just to get one thing done.",
];

const heroWidgets = [
  { icon: Zap, title: "Faster", body: "Fewer clicks, fewer steps" },
  { icon: Search, title: "Findable", body: "Stop losing your work" },
  { icon: Repeat, title: "Reusable", body: "Never start from zero" },
  { icon: FolderTree, title: "Clear", body: "Everything has a place" },
];

const frictionPoints = [
  "You're rebuilding your project setup from zero, every time.",
  "You know you saved that asset, but can't find it.",
  "You're doing the same repetitive steps manually, project after project.",
  "Your footage, scripts, notes, ideas, and references live in different places.",
  "You have useful information everywhere, but no clear system for retrieving it.",
  "You know your software can do more, but don't know which features actually matter.",
  "You create things you could reuse, but end up recreating them instead.",
  "Your project management system doesn't reflect how your videos actually get made.",
];

const toolsList = [
  "New AI features.",
  "New editing software.",
  "New plugins.",
  "New productivity apps.",
  "New note-taking systems.",
  "New project management tools.",
];

const workflowList = [
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

const outcomes = [
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
    icon: Monitor,
    title: "Get More From Your Tools",
    body: "Find the shortcuts, features, configurations, utilities, and workflows you're not taking advantage of.",
  },
  {
    icon: Layers,
    title: "Reduce Creative Friction",
    body: "Create simple systems and rules so you spend less time managing your workflow and more time actually creating.",
  },
];

const rebuildCategories = [
  {
    icon: Monitor,
    title: "Your Creative Tools",
    body: "Make the software you already use work harder for you.",
    items: [
      "Better configurations",
      "Hidden features",
      "App-specific workflows",
      "Keyboard shortcuts",
      "Custom shortcuts",
      "Useful utilities",
      "Faster navigation",
      "Tool recommendations",
      "AI workflows",
      "Better ways to connect your tools",
    ],
  },
  {
    icon: FolderTree,
    title: "Your Files & Assets",
    body: "Stop losing things you've already created.",
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
      "Rules for where things belong",
    ],
  },
  {
    icon: Brain,
    title: "Your Notes & Knowledge",
    body: "Turn scattered information into a system you can actually use.",
    items: [
      "Note-taking systems",
      "Idea capture",
      "Research organization",
      "Content research",
      "Knowledge management",
      "Bookmark organization",
      "Saved resources",
      "Prompt libraries",
      "AI/Claude workflows",
      "Systems for turning information into content",
    ],
  },
  {
    icon: ListChecks,
    title: "Your Project Management",
    body: "Stop keeping your entire production pipeline in your head.",
    items: [
      "Notion project management",
      "Content pipelines",
      "Project dashboards",
      "Production databases",
      "Project templates",
      "Status systems",
      "Task management",
      "Recurring workflows",
      "Editorial calendars",
      "Systems for starting projects",
      "Systems for finishing projects",
      "Systems for archiving completed work",
    ],
  },
  {
    icon: Repeat,
    title: "Your Templates & Reusable Systems",
    body: "Stop rebuilding things you've already built.",
    items: [
      "Project templates",
      "Folder templates",
      "Notion templates",
      "Note templates",
      "Email templates",
      "AI prompts",
      "SOPs",
      "Checklists",
      "Presets",
      "Reusable assets",
      "Starting structures",
      "Content systems",
    ],
  },
];

const operatingQuestions = [
  "Where does this go?",
  "What happens next?",
  "How did I do this last time?",
  "Should I save this?",
  "Where should I put this idea?",
  "When should this project be archived?",
];

const operatingRules = [
  "Where information belongs",
  "How ideas get captured",
  "How ideas become projects",
  "How projects move through your pipeline",
  "How files are named",
  "How assets are stored",
  "What gets templated",
  "What gets reused",
  "What gets archived",
  "What gets deleted",
];

const deliverables = [
  {
    icon: Search,
    title: "The Workflow Diagnostic",
    body: "A full breakdown of your recorded work week. Where you're losing time, repeating work, searching, switching context, and where your current systems break. You'll know exactly where the friction is coming from.",
  },
  {
    icon: ListChecks,
    title: "Your Project Management System",
    body: "A project system built around how you actually make content. This can include your Notion workspace, databases, dashboards, production stages, tasks, templates, and recurring workflows. So you always know what you're working on, what's next, and where every project stands.",
  },
  {
    icon: FolderTree,
    title: "Your File & Asset System",
    body: "A structure for your projects, footage, graphics, thumbnails, exports, resources, and reusable assets. So finding something doesn't require remembering where you put it.",
  },
  {
    icon: Brain,
    title: "Your Note-Taking & Knowledge System",
    body: "A system for capturing ideas, research, references, and information. So your knowledge becomes something you can actually use — not another pile of notes.",
  },
  {
    icon: Repeat,
    title: "Your Template & Reuse System",
    body: "Templates, presets, prompts, project structures, SOPs, checklists, and reusable assets based on the work you repeat. So every new project benefits from everything you've already built.",
  },
  {
    icon: Keyboard,
    title: "Your Shortcut System",
    body: "The fastest ways to perform the actions you repeat most. Mapped to the actual software you use. So your tools become faster to operate without changing your entire workflow.",
  },
  {
    icon: BookOpen,
    title: "Your Operating Manual",
    body: "A written reference explaining how your new system works. Where things go, how projects move, how information is captured, what gets reused, and what happens at each stage. So the system doesn't slowly turn back into chaos a month later.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Record Your Normal Work",
    paragraphs: [
      "Don't show me your ideal workflow. Show me your real one.",
      "Record yourself doing normal work across your production process.",
      "Whatever applies to you. Don't clean anything up first. I want to see where the problems actually happen.",
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
    footer: "The system gets tested where it matters: inside your actual creative work.",
  },
];

const recordWeekDontNeed = [
  "Reorganize your files beforehand",
  "Document your workflow",
  "Fill out complicated forms",
  "Prepare a presentation",
  "Clean up your desktop",
  "Pretend you're working efficiently",
];

const recordWeekExamples = [
  "If you search for a file for five minutes, I want to see it.",
  "If you rebuild the same project structure again, I want to see it.",
  "If you switch between four apps to complete one simple task, I want to see it.",
  "If you can't remember where you saved something, that's exactly the kind of friction I'm looking for.",
];

const imagineList = [
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

const differences = [
  {
    dont: "I don't tell you how creators should work.",
    do: "I look at how you work.",
  },
  {
    dont: "I don't hand you a generic Notion template.",
    do: "I build your project system around your actual production process.",
  },
  {
    dont: "I don't tell you to use a particular note-taking methodology.",
    do: "I build a system around the information you actually collect and use.",
  },
  {
    dont: "I don't give you a list of 50 shortcuts.",
    do: "I identify the shortcuts that matter for your actual workflow.",
  },
  {
    dont: "I don't tell you to organize every file on your computer.",
    do: "I create the structure and rules that make your important work easy to manage.",
  },
  {
    dont: "I don't add complexity for the sake of optimization.",
    do: "I remove friction.",
  },
];

const investmentDetails = [
  {
    label: "Your outcome",
    value:
      "Start every project already organized instead of rebuilding your setup from zero.",
  },
  {
    label: "Why this can work",
    value:
      "Built from 3+ years of real content production and experience with 100+ tools, not generic productivity theory.",
  },
  {
    label: "Time to result",
    value: "14 days. Not months of trying to redesign your workflow yourself.",
  },
  {
    label: "Effort required",
    value:
      "You don't need to figure out the solution. You record your normal work. I analyze it and build the system.",
  },
];

const engagementIncludes = [
  "Workflow Diagnostic",
  "Project management system",
  "Notion setup where relevant",
  "File & asset system",
  "Note-taking system where relevant",
  "Templates and reusable structures",
  "Shortcut system",
  "Operating rules",
  "SOPs and checklists where useful",
  "Personal Operating Manual",
  "Written implementation plan",
  "Video walkthrough",
  "Async support",
];

const bonuses = [
  {
    icon: Keyboard,
    title: "The Shortcut Vault",
    body: "A living reference of the shortcuts and custom hotkeys that matter most for your actual software. Stop breaking flow to remember how to do something faster.",
  },
  {
    icon: FolderTree,
    title: "The Next-Project Starter Kit",
    body: "A pre-built folder and project structure for your next piece of content. Open it. Duplicate it. Start working.",
  },
  {
    icon: Clock,
    title: "The 14-Day Implementation Check-ins",
    body: "Async support while you start using your new system. Find the problems in real use and fix them before they become habits.",
  },
  {
    icon: Boxes,
    title: "The Tool Stack Audit",
    body: "Your current tools flagged: KEEP · REPLACE · CUT. With reasoning behind each recommendation. Stop collecting tools. Start curating your stack.",
  },
];

const pipelineStages = [
  "Ideation",
  "Research",
  "Scripting",
  "Recording",
  "Editing",
  "Thumbnail design",
  "File management",
  "Project management",
  "Publishing",
];

const especiallyIf = [
  "Spend a significant part of your week creating",
  "Feel like your workflow has accumulated too much friction",
  "Rebuild the same things repeatedly",
  "Have files, notes, tools, and projects scattered across your system",
  "Want to work faster without adopting an entirely new productivity philosophy",
  "Already use serious software for real creative work",
];

const dontNeedCards = [
  "You don't need to use a particular app.",
  "You don't need to switch your entire setup.",
  "We start with what you already use and improve it from there.",
];

export function LandingPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Top bar */}
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 bg-panel px-4 py-2 text-center text-xs font-semibold text-panel-foreground">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" aria-hidden="true" />
          Only 1 client per 2 weeks &middot; For content creators
        </div>
        <header className="border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-3 sm:px-8">
            <span className="flex items-center gap-2 font-extrabold tracking-tight text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Layers className="h-4 w-4" aria-hidden="true" />
              </span>
              Deep Work OS
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
            You know your own workflow better than anyone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            You also know exactly where it breaks.
          </p>

          <ul className="mx-auto mt-8 max-w-xl space-y-2 text-left">
            {heroFrictions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.975rem] leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold text-foreground">
            Your creative work shouldn't require so much work just to manage the creative work.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Record a normal week of how you create: ideation, research, scripting, recording,
            editing, thumbnails, file management, publishing, whatever your process actually
            looks like. I'll analyze it from the inside and rebuild the systems around it: your
            tools, files, notes, projects, templates, shortcuts, and rules. So your next project
            starts faster than the last one ended.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3">
            <ApplyButton label="Get My Deep Work OS Audit" />
            <span className="text-sm text-muted-foreground">
              For content creators on macOS or Windows &middot; 14-day turnaround &middot; Only 1
              client per 2 weeks
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            No new productivity philosophy. No mandatory app stack. You keep your tools. I make them
            work around the way you actually create.
          </p>

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

      <ProofSection />

      {/* Friction */}
      <Section band>
        <SectionHead
          eyebrow="The problem"
          title="The work behind the work is slowing you down."
          lead="You're probably losing time in places that don't look important."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {frictionPoints.map((item) => (
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
          Individually, these problems seem small. Together, they're the difference between a
          creative workflow that flows and one that fights you at every step.
        </p>
      </Section>

      {/* More content, more tools */}
      <Section>
        <SectionHead
          eyebrow="The real problem"
          title="More content. More tools. Same broken workflow."
          lead="Creators are producing more content, more often, with more tools than ever."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="space-y-3">
              {toolsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.975rem] text-card-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              But your workflow doesn't automatically get better just because your tools get
              better.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              You can have the best apps in the world and still have a terrible system connecting
              them.
            </p>
            <p className="mt-6 text-xl font-bold text-foreground">
              The answer isn't another app. It's building the system behind the apps.
            </p>
          </div>
        </div>
      </Section>

      {/* I don't give you a productivity system */}
      <Section band>
        <SectionHead
          eyebrow="The approach"
          title="I don't give you a productivity system. I build the system behind your creative work."
          lead="There is no universal “perfect” creator workflow. Your content is different. Your tools are different. Your projects are different. Your creative process is different."
        />
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            So I don't give you a generic folder structure, Notion template, or list of
            productivity apps and tell you to change the way you work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I start with the way you already work. You show me the real process. I find the
            friction. Then I rebuild the parts that are slowing you down.
          </p>
        </div>
      </Section>

      {/* The approach — workflow list + outcomes */}
      <Section>
        <SectionHead
          eyebrow="The approach"
          title="Your creative workflow, analyzed from the inside."
          lead="This isn't a generic productivity consultation. I want to see how you actually create. You show me your normal workflow:"
        />
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {workflowList.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </ul>
        <p className="mt-8 text-center text-lg font-semibold text-foreground">
          Then I look for opportunities to make five things better.
        </p>
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

      {/* What we can rebuild */}
      <Section band>
        <SectionHead
          eyebrow="What changes"
          title="What we can rebuild"
          lead="Your workflow determines what changes. There isn't a fixed checklist I'll apply to every creator. I'll look at your workflow and identify what's actually worth fixing."
        />
        <div className="mt-12 space-y-5">
          {rebuildCategories.map(({ icon: Icon, title, body, items }) => (
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

          {/* Operating Rules — special block */}
          <article className="rounded-xl border border-border bg-card p-6 sm:p-8 md:flex md:gap-10">
            <div className="md:w-2/5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-card-foreground">Your Operating Rules</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Make your workflow easier to run.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-3/5">
              <p className="text-sm font-semibold text-foreground">
                Instead of constantly asking yourself:
              </p>
              <ul className="mt-3 space-y-2">
                {operatingQuestions.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-2 text-[0.9rem] italic text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-foreground">
                We'll create clear rules for things like:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {operatingRules.map((rule) => (
                  <Chip key={rule}>{rule}</Chip>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <p className="mt-8 text-center text-lg font-medium text-foreground">
          The goal is fewer decisions, not more systems to manage.
        </p>
      </Section>

      {/* What you actually get */}
      <Section>
        <SectionHead
          eyebrow="Deliverables"
          title="Not a list of recommendations. A rebuilt creative operating system."
          lead="Your exact deliverables depend on what I find in your workflow. That might mean:"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {deliverables.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-bold text-card-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* How we'll work together */}
      <Section band id="how-it-works">
        <SectionHead eyebrow="Process" title="How we'll work together" />
        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {processSteps.map((step) => (
            <li key={step.number} className="relative">
              <span className="absolute -left-[1.9rem] top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-[0.65rem] font-bold text-primary-foreground sm:-left-[3.15rem] sm:h-8 sm:w-8 sm:text-xs">
                {step.number}
              </span>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-card-foreground sm:text-2xl">
                  {step.number} {"—"} {step.title}
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
                {step.footer ? (
                  <p className="mt-5 font-semibold text-foreground">{step.footer}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* What "record a week" actually means */}
      <Section>
        <SectionHead
          eyebrow="Recording"
          title="What “record a week” actually means"
          lead="Hit record. Work normally. Stop recording. That's it."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Video className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-card-foreground">
              You don't need to:
            </h3>
            <ul className="mt-4 space-y-3">
              {recordWeekDontNeed.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.975rem] text-muted-foreground"
                >
                  <span className="mt-0.5 text-primary" aria-hidden="true">
                    {"✗"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-panel p-8 text-panel-foreground">
            <p className="text-lg font-bold">The mess is useful.</p>
            <ul className="mt-4 space-y-3">
              {recordWeekExamples.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.975rem] leading-relaxed opacity-90"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Your creative work, turned into a system */}
      <Section band>
        <SectionHead
          eyebrow="The outcome"
          title="Your creative work, turned into a system"
          lead="Imagine opening your next project and already having:"
        />
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 sm:p-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {imagineList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-secondary px-4 py-3 text-[0.925rem] text-secondary-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xl font-bold text-foreground">
            Instead of figuring everything out again. That's the goal of Deep Work OS.
          </p>
        </div>
      </Section>

      {/* The difference */}
      <Section>
        <SectionHead
          eyebrow="The difference"
          title="I don't tell you how creators should work. I look at how you work."
        />
        <div className="mt-10 space-y-4">
          {differences.map(({ dont, do: doText }, i) => (
            <div
              key={i}
              className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 sm:gap-8 sm:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xl text-muted-foreground" aria-hidden="true">
                  {"✗"}
                </span>
                <p className="text-[0.975rem] leading-relaxed text-muted-foreground line-through opacity-70">
                  {dont}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-[0.975rem] font-semibold leading-relaxed text-foreground">
                  {doText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The investment */}
      <Section band id="investment">
        <SectionHead eyebrow="The investment" title="Deep Work OS" />
        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-primary bg-card shadow-[var(--shadow-soft)]">
          <div className="p-8 sm:p-10">
            <p className="text-lg font-semibold text-muted-foreground">
              A personalized rebuild of the systems behind your creative workflow.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <p className="text-6xl font-extrabold tracking-tight text-foreground">$500</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {investmentDetails.map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-secondary p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Your engagement includes
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {engagementIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.925rem] text-card-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">
                Your exact system is determined by your workflow.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <ApplyButton label="Reserve My Slot" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              For content creators on macOS or Windows &middot; 14-day turnaround &middot; 1 client
              per 2 weeks
            </p>
          </div>
        </div>
      </Section>

      {/* Included at no extra cost */}
      <Section>
        <SectionHead
          eyebrow="Bonuses"
          title="Included at no extra cost"
          lead="Four additions that make the system easier to actually use."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bonuses.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Why only 1 client per 2 weeks */}
      <Section band>
        <SectionHead
          eyebrow="Capacity"
          title="Why only 1 client per 2 weeks?"
          lead="I work directly with every client."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="space-y-3">
              {[
                "No team.",
                "No generic templates applied blindly.",
                "No automated audit that gives everyone the same recommendations.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.975rem] text-card-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground">
              I personally watch your workflow, diagnose the friction, design your systems, and
              build the improvements. That creates a real capacity limit. So I only take 1 client
              every 2 weeks. That's what it takes to build something that fits how you actually
              create.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-panel p-8 text-center text-panel-foreground">
            <p className="text-lg font-semibold">
              Price increases with each new client I take on.
            </p>
            <p className="mt-2 text-base opacity-80">
              Reserve your slot at the current rate.
            </p>
            <div className="mt-6">
              <ApplyButton label="Reserve My Slot" variant="invert" />
            </div>
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-card-foreground sm:text-3xl">
            Guarantee
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I'll keep working until the system fits.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Record your workflow as instructed and implement the system as delivered. If you
            don't feel more in control of your creative workflow within 14 days of receiving
            it, I'll do one additional round of revisions at no charge.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            And if after our intake you decide this isn't for you before your recording week
            starts, I'll refund you. No questions asked.
          </p>
        </div>
      </Section>

      {/* Who this is for */}
      <Section band>
        <SectionHead
          eyebrow="Audience"
          title="Who this is for"
          lead="Deep Work OS is built for creators who handle multiple parts of production themselves:"
        />
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {pipelineStages.map((stage) => (
            <Chip key={stage}>{stage}</Chip>
          ))}
        </ul>
        <p className="mt-8 text-center text-lg font-semibold text-foreground">
          Especially if you:
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {especiallyIf.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-[0.975rem] text-card-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {dontNeedCards.map((item) => (
            <p
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-[0.95rem] text-card-foreground"
            >
              <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </p>
          ))}
        </div>
      </Section>

      <RoiCalculator />

      <MyAppsSection />

      <FAQSection />

      {/* Final CTA */}
      <Section id="apply">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <Sparkles
            aria-hidden="true"
            className="absolute right-6 top-6 h-10 w-10 opacity-25"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Your creative work is unique. Your workflow should be too.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-90">
            There is no universal setup that makes every creator work better. The best workflow is
            the one that fits your content, your tools, your projects, your information, and your
            creative process. You don't need another productivity philosophy. You don't
            need another app. You don't need another generic template. You need a system built
            around the way you actually create. Show me how you work. I'll rebuild the system
            behind it.
          </p>
          <div className="mt-9 flex justify-center">
            <ApplyButton label="Get My Deep Work OS Audit" variant="invert" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm opacity-85">
            14-day transformation &middot; $500 &middot; 1 client every 2 weeks
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
            Still not sure?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Send me an email. Happy to help clear up any questions.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Deep%20Work%20OS%20-%20Question`}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Email me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Deep Work OS</p>
          <p>Your creative workflow, rebuilt around the way you actually work. macOS & Windows.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <ApplyButton size="sm" className="w-full" />
      </div>
    </main>
  );
}
