import type { Category } from "./diagnostic-scoring";

export type Diagnosis = {
  label: string;
  headline: string;
  summary: string;
  signs: string[];
  meaning: string;
  firstActions: string[];
  secondaryBlurb: string;
};

export const DIAGNOSES: Record<Category, Diagnosis> = {
  speed: {
    label: "Speed & Repetition",
    headline: "Your biggest bottleneck is manual, repeated work.",
    summary:
      "You're doing a lot of work by hand that your tools could do for you, or could do in far fewer steps. Nothing here is broken — it's just slower than it needs to be, and the cost is spread across every single day.",
    signs: [
      "The same sequences of clicks, every day",
      "Software you use constantly but haven't configured around your work",
      "Shortcuts, presets and utilities that would pay for themselves in a week",
    ],
    meaning:
      "This is usually the fastest category to improve, because the fixes are concrete: shortcuts, presets, templates, better configurations, and small utilities that remove steps from the work you already do.",
    firstActions: [
      "Write down the 5 actions you perform most often in a day",
      "Learn the real shortcut for each one instead of using the menus",
      "Turn your most-repeated setup into a preset or template",
    ],
    secondaryBlurb:
      "Manual, repeated work is also costing you time — the same actions performed the slow way, many times a day.",
  },
  organization: {
    label: "Organization & Retrieval",
    headline: "Your biggest bottleneck is finding your own work.",
    summary:
      "You're producing and saving plenty — the problem is getting it back. When retrieval is unreliable, you either lose minutes searching or you quietly recreate things you already own.",
    signs: [
      "Multiple half-systems for files that never fully merged",
      "No clear rule for where a new thing belongs",
      "Search doing the job that structure should be doing",
    ],
    meaning:
      "Organization problems compound. Every week without a clear structure adds more things in the wrong place. The fix isn't tidying once — it's a naming and folder system with rules simple enough that you'll actually follow them.",
    firstActions: [
      "Pick one top-level structure and commit to it for everything new",
      "Define a naming pattern for the file types you create most",
      "Create a single inbox folder so nothing lands in a random place",
    ],
    secondaryBlurb:
      "Finding things is also slowing you down — your structure isn't yet doing the work of remembering for you.",
  },
  reuse: {
    label: "Reuse & Starting Points",
    headline: "Your biggest bottleneck is starting from scratch.",
    summary:
      "You've already built most of what you need — it just isn't in a reusable form. Every project begins closer to zero than it should, which makes starting feel heavy.",
    signs: [
      "Copying an old project and stripping it down",
      "Rebuilding structures, documents and setups you've made before",
      "Finished work that disappears into folders instead of becoming an asset",
    ],
    meaning:
      "Reuse is the highest-leverage category, because the work is already done. Turning past output into templates, presets, asset libraries and project starters means each project starts with momentum instead of a blank page.",
    firstActions: [
      "Take your last finished project and strip it into a starting template",
      "Collect your reusable assets into one library instead of per-project folders",
      "Write a 5-line checklist for how a new project gets set up",
    ],
    secondaryBlurb:
      "You're also recreating work you already own — the raw material exists, it just isn't packaged for reuse.",
  },
  information: {
    label: "Information & Knowledge",
    headline: "Your biggest bottleneck is information you save but never use.",
    summary:
      "You're capturing plenty — notes, links, screenshots, research, ideas — but it's spread across places with no shared purpose, so it doesn't come back to you when it would be useful.",
    signs: [
      "Notes, bookmarks and saved links in several disconnected places",
      "Capture without a clear reason for capturing",
      "Research you'd struggle to find again next month",
    ],
    meaning:
      "This isn't about a better notes app. It's about deciding what each place is for, what gets captured, and how it comes back. Once capture has a destination and a purpose, saved information starts paying you back.",
    firstActions: [
      "Choose one destination for notes and one for links — no exceptions",
      "Add a single line of context to anything you save",
      "Schedule a 10-minute weekly pass over what you captured",
    ],
    secondaryBlurb:
      "Your captured information is also underused — a lot goes in, and not much comes back out.",
  },
  workflow: {
    label: "Workflow & Continuity",
    headline: "Your biggest bottleneck is the space between tasks.",
    summary:
      "The individual work is fine. What costs you is the switching, restarting and re-deciding — figuring out what's next, remembering where you left off, and rebuilding context every time you return to something.",
    signs: [
      "Stopping to work out what to do next",
      "Losing your place when moving between projects",
      "Recurring work handled from memory instead of a process",
    ],
    meaning:
      "This is fixed with continuity, not discipline: clear next actions, a place where work-in-progress state lives, and repeatable processes for the things you do again and again. Fewer decisions, less restart cost.",
    firstActions: [
      "End each work session by writing the literal next action",
      "Keep one list that answers \u201cwhat should I do next?\u201d",
      "Turn your most common recurring task into a written checklist",
    ],
    secondaryBlurb:
      "Switching and restarting is also costing you — too much context has to be rebuilt each time.",
  },
};

export const PAYMENT_LINK = "PAYMENT_LINK_PLACEHOLDER";
export const CONTACT_EMAIL = "rayentechyt@gmail.com";

export const SERVICE_COVERAGE = [
  "A recorded review of how you actually work",
  "A prioritized list of the improvements worth making",
  "Systems, templates and configurations built with you",
  "A personal operating manual for your digital work",
];
