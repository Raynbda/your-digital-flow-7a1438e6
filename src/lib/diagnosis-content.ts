import type { DiagnosisKey } from "./diagnostic-scoring";

export const CONTACT_EMAIL = "rayentechyt@gmail.com";
export const PAYMENT_LINK = "#payment-link";

export type Diagnosis = {
  key: DiagnosisKey;
  label: string;
  headline: string;
  summary: string;
  points: string[];
  lookAtFirstTitle: string;
  lookAtFirst: string[];
  doToday: string[];
  ifWeWorked: string;
  secondary: string;
  firstAction: string[];
};

export const diagnoses: Record<DiagnosisKey, Diagnosis> = {
  speed: {
    key: "speed",
    label: "Speed",
    headline: "Your biggest opportunity: Speed",
    summary:
      "Your answers suggest that you're losing time through small repeated actions and inefficient ways of doing things. The problem probably isn't one huge inefficiency. It's the accumulation of dozens of small ones.",
    points: [
      "Repeating the same actions",
      "Navigating through menus",
      "Switching between apps",
      "Doing manually what could be a shortcut",
      "Using only the basic features of software you use every day",
    ],
    lookAtFirstTitle:
      "I'd start by identifying the 10 to 20 actions you perform most frequently and looking for faster ways to perform them.",
    lookAtFirst: [
      "Keyboard shortcuts",
      "Custom shortcuts",
      "Better navigation",
      "Hidden software features",
      "Better app configurations",
      "Small utilities",
      "Templates",
      "Presets",
    ],
    doToday: [
      "Pick the one action you repeat most often.",
      "Search the app's keyboard shortcuts or command palette for a faster way to perform it.",
      "Then use that method exclusively for the next week.",
    ],
    ifWeWorked:
      "I'd analyze your actual workflow and identify the highest-frequency actions where a shortcut, feature, tool, or workflow change could save you time.",
    secondary:
      "You also have several opportunities to reduce repetitive work through shortcuts, better software features, templates, and small workflow changes.",
    firstAction: [
      "Find one shortcut for the most repetitive action you perform.",
      "Use it exclusively for seven days.",
    ],
  },
  organization: {
    key: "organization",
    label: "Organization",
    headline: "Your biggest opportunity: Organization",
    summary:
      "Your answers suggest that you're spending too much mental energy managing where things are instead of using them. The underlying problem isn't that you have too much stuff. It's that your digital environment doesn't have clear enough rules for where things belong.",
    points: [
      "Files without a permanent home",
      "Several overlapping storage locations",
      "Digital clutter accumulating quietly",
      "Time lost re-finding things you already have",
    ],
    lookAtFirstTitle: "I'd map the major types of information you deal with.",
    lookAtFirst: [
      "Files",
      "Notes",
      "Tasks",
      "Ideas",
      "Resources",
      "Assets",
      "Projects",
      "Archives",
    ],
    doToday: [
      "Create one temporary folder called _SORT.",
      "Put the loose files from your desktop, Downloads folder, and other messy locations inside it.",
      "Then create 5 to 7 categories based on what you actually use, not a complicated hierarchy.",
    ],
    ifWeWorked:
      "I'd look at your actual files, notes, resources, and information sources and help you create a system where everything has a place, you know where that place is, and you can find it again.",
    secondary:
      "Your workflow would also benefit from clearer rules for where files, notes, resources, and other information belong.",
    firstAction: [
      "Choose one category of information and give it one permanent home.",
      "Don't reorganize everything. Establish one rule and start following it.",
    ],
  },
  reuse: {
    key: "reuse",
    label: "Reuse",
    headline: "Your biggest opportunity: Reuse",
    summary:
      "Your answers suggest you're creating useful work but not extracting enough value from what you've already created. Every time you start from a blank project, you're paying the setup cost again.",
    points: [
      "Projects that start from nothing",
      "Work recreated instead of reused",
      "Finished projects that disappear into folders",
      "No templates for things you repeat",
    ],
    lookAtFirstTitle: "I'd identify the things that appear repeatedly across your projects.",
    lookAtFirst: [
      "Folder structures",
      "Templates",
      "Assets",
      "Prompts",
      "Research",
      "Documents",
      "Designs",
      "Processes",
      "Checklists",
      "Project setup",
    ],
    doToday: [
      "Open your last three similar projects.",
      "Find everything that appears in at least two of them.",
      "Those repeated elements should become your first reusable template.",
    ],
    ifWeWorked:
      "I'd identify the repeated patterns in your existing work and turn them into reusable building blocks so your next project starts with work already done, rather than a blank folder.",
    secondary:
      "You're also leaving value on the table by not consistently turning previous work into templates, assets, presets, and reusable building blocks.",
    firstAction: [
      "Compare your last three similar projects and extract everything you repeated.",
      "Turn those repeated elements into your first reusable template.",
    ],
  },
  information: {
    key: "information",
    label: "Information",
    headline: "Your biggest opportunity: Information",
    summary:
      "Your answers suggest that you're good at collecting information, but your system isn't consistently helping you turn that information into something useful. The problem isn't capture. It's what happens after capture.",
    points: [
      "Notes and research spread across apps",
      "Saved items that never get used again",
      "No clear rule for what becomes a task or a project",
      "Ideas that lose their context",
    ],
    lookAtFirstTitle: "I'd map the lifecycle of your information.",
    lookAtFirst: ["Capture", "Clarify", "Organize", "Find", "Use", "Reuse"],
    doToday: [
      "Look at the last 10 things you saved.",
      "For each one ask: what will I actually do with this?",
      "If the answer is nothing, delete it. If it has future value, give it a specific home and purpose.",
    ],
    ifWeWorked:
      "I'd help you create simple rules for capturing, organizing, finding, using, and reusing information across your actual tools.",
    secondary:
      "Your information system could be improved by creating clearer rules for capturing, organizing, finding, and reusing what you collect.",
    firstAction: [
      "Review your last ten saved items and give each one a purpose.",
      "Delete what has no future value.",
    ],
  },
  workflow: {
    key: "workflow",
    label: "Workflow",
    headline: "Your biggest opportunity: Workflow",
    summary:
      "Your individual tools may not be the problem. The bigger issue is how they connect. You may have good apps for notes, tasks, files, research, and projects, but no clear system for how information moves between them.",
    points: [
      "Too many disconnected tools",
      "Context switching between apps",
      "Losing your place between sessions",
      "No clear answer to what happens next",
    ],
    lookAtFirstTitle: "I'd map your workflow end to end.",
    lookAtFirst: ["Capture", "Plan", "Start", "Work", "Finish", "Archive", "Reuse"],
    doToday: [
      "Pick one recurring type of work.",
      "Write down the actual steps from \"I need to do this\" to \"it's finished\".",
      "Circle every point where you stop to decide, search, switch tools, recreate something, or lose your place.",
    ],
    ifWeWorked:
      "I'd map your actual workflow and redesign the connections between your tools, information, projects, and recurring processes.",
    secondary:
      "Your tools would likely work better together with clearer responsibilities and processes connecting them.",
    firstAction: [
      "Write down the actual steps of one recurring process from start to finish.",
      "Mark every place where you stop, search, switch, decide, or recreate something.",
    ],
  },
};

export const serviceCoverage = [
  {
    title: "Your tools",
    body: "App features, configurations, utilities, software recommendations.",
  },
  {
    title: "Your speed",
    body: "Shortcuts, custom shortcuts, faster navigation, repetitive actions.",
  },
  {
    title: "Your digital organization",
    body: "Files, folders, smart folders, assets, resources, bookmarks.",
  },
  { title: "Your information", body: "Notes, PKM, ideas, research, content consumption, AI systems." },
  {
    title: "Your reuse",
    body: "Templates, presets, SOPs, checklists, project structures, reusable assets.",
  },
  {
    title: "Your workflow",
    body: "Project setup, project completion, handoffs, archiving, continuity.",
  },
  {
    title: "Your focus",
    body: "Digital decluttering, distraction reduction, focus workflows, simpler execution.",
  },
];
