export type Answers = Record<string, string | string[]>;

export type Question = {
  id: string;
  type: "single" | "multi" | "text" | "textarea";
  label: string;
  help?: string;
  options?: string[];
  maxSelect?: number;
  optional?: boolean;
  placeholder?: string;
  showIf?: (answers: Answers) => boolean;
};

export type Section = {
  id: string;
  title: string;
  questions: Question[];
};

export const MAIN_PROBLEMS = {
  slow: "Doing things manually / too slowly",
  find: "Finding things",
  rebuild: "Rebuilding things",
  clutter: "Digital clutter / organization",
  scattered: "Scattered information",
  tools: "Not getting enough out of my tools",
  tooMany: "Too many tools / unclear systems",
  scratch: "Starting projects from scratch",
  process: "Lack of repeatable processes",
  losing: "Losing track of work",
  focus: "Staying focused",
  other: "Something else",
} as const;

const mainIs = (value: string) => (answers: Answers) => answers["main_problem"] === value;

export const SECTIONS: Section[] = [
  {
    id: "work",
    title: "Your Digital Work",
    questions: [
      {
        id: "work_types",
        type: "multi",
        label: "What does most of your digital work involve?",
        help: "Select up to 3.",
        maxSelect: 3,
        options: [
          "Creating content",
          "Writing",
          "Research",
          "Studying / learning",
          "Client work",
          "Managing projects",
          "Communication / email",
          "Design / editing",
          "Managing information / knowledge",
          "Planning / organization",
          "Coding / technical work",
          "Other",
        ],
      },
      {
        id: "daily_apps",
        type: "text",
        label: "What are the main apps you use every day?",
        help: "List 3–7.",
        placeholder: "Chrome, Notion, Obsidian, Claude, DaVinci Resolve, Google Docs, Slack",
      },
      {
        id: "digital_share",
        type: "single",
        label: "How much of your work happens digitally?",
        options: ["Almost everything", "Most of it", "About half", "Less than half"],
      },
    ],
  },
  {
    id: "time",
    title: "Where Your Time Goes",
    questions: [
      {
        id: "problems",
        type: "multi",
        label: "Which of these problems do you experience regularly?",
        help: "Select all that apply.",
        options: [
          "I repeatedly do things manually that feel like they should be faster",
          "I know I've saved something but can't find it",
          "I keep rebuilding things I've already made",
          "My files are difficult to navigate",
          "My notes and information are scattered",
          "I have too many tools and don't know what each one should be used for",
          "I know my software can probably do more, but I don't know how",
          "I save lots of information but rarely use it again",
          "Every project starts from scratch",
          "I don't have clear processes for recurring work",
          "I lose track of where I left off",
          "I have too much digital clutter",
          "I switch between too many apps or places to get something done",
          "I have trouble staying focused",
        ],
      },
      {
        id: "main_problem",
        type: "single",
        label: "Which ONE of those problems bothers you the most?",
        options: Object.values(MAIN_PROBLEMS) as unknown as string[],
      },
      {
        id: "slow_things",
        type: "textarea",
        label: "What are 1–3 things you do repeatedly that feel unnecessarily slow?",
        showIf: mainIs(MAIN_PROBLEMS.slow),
      },
      {
        id: "hardest_to_find",
        type: "multi",
        label: "What's hardest to find?",
        options: [
          "Files",
          "Notes",
          "Assets",
          "Bookmarks",
          "Research",
          "Ideas",
          "Projects",
          "Previous work",
          "Other",
        ],
        showIf: mainIs(MAIN_PROBLEMS.find),
      },
      {
        id: "recreate_most",
        type: "multi",
        label: "What do you find yourself recreating most often?",
        options: [
          "Documents",
          "Projects",
          "Designs",
          "Videos",
          "Presentations",
          "Emails",
          "Prompts",
          "Research",
          "Folder structures",
          "Other",
        ],
        showIf: mainIs(MAIN_PROBLEMS.rebuild),
      },
      {
        id: "info_lives",
        type: "multi",
        label: "Where does your information currently live?",
        options: [
          "Notion",
          "Obsidian",
          "Apple Notes",
          "Google Docs",
          "OneNote",
          "Browser bookmarks",
          "Email",
          "Local files",
          "Cloud storage",
          "Multiple places with no clear system",
          "Other",
        ],
        showIf: mainIs(MAIN_PROBLEMS.scattered),
      },
      {
        id: "tool_to_master",
        type: "text",
        label: "Which tool do you most wish you could use better?",
        showIf: mainIs(MAIN_PROBLEMS.tools),
      },
      {
        id: "project_types",
        type: "text",
        label: "What type of projects do you repeatedly start?",
        showIf: mainIs(MAIN_PROBLEMS.scratch),
      },
      {
        id: "recurring_process",
        type: "text",
        label: "What recurring process do you wish you had a reliable system for?",
        showIf: mainIs(MAIN_PROBLEMS.process),
      },
      {
        id: "focus_trouble",
        type: "multi",
        label: "When do you have the most trouble staying focused?",
        options: [
          "Starting work",
          "Working for long periods",
          "Switching between tasks",
          "Working from home",
          "Working online",
          "Managing notifications",
          "Social media / websites",
          "Other",
        ],
        showIf: mainIs(MAIN_PROBLEMS.focus),
      },
      {
        id: "wish",
        type: "textarea",
        label: "Finish this sentence: \u201cI wish my digital workflow could\u2026\u201d",
      },
    ],
  },
  {
    id: "files",
    title: "Your Files, Information & Ideas",
    questions: [
      {
        id: "find_ease",
        type: "single",
        label: "How easy is it to find something you've previously saved or created?",
        options: [
          "I can usually find anything immediately",
          "Usually easy, but I occasionally waste time searching",
          "I regularly spend several minutes looking",
          "Finding things is a constant problem",
          "I sometimes give up and recreate it",
        ],
      },
      {
        id: "file_org",
        type: "single",
        label: "How do you currently organize your files?",
        options: [
          "I have a clear folder structure that works well",
          "I have a structure, but it has become messy",
          "I have several different systems",
          "I mostly organize things as I go",
          "My files are fairly chaotic",
          "I mostly rely on search",
        ],
      },
      {
        id: "notes_mgmt",
        type: "single",
        label: "How do you currently manage notes, ideas, and information?",
        options: [
          "I have a clear system I trust",
          "I have a system, but it has become messy",
          "I use several different systems",
          "I mostly dump things into one place",
          "I save things wherever is convenient",
          "I don't really have a system",
        ],
      },
      {
        id: "found_online",
        type: "single",
        label: "When you find something useful online, what usually happens?",
        options: [
          "I know exactly where it belongs and how I'll use it",
          "I save it somewhere, but often forget about it",
          "I bookmark / save / screenshot it and rarely return to it",
          "I save it in several different places",
          "I usually don't save it",
          "It depends on what it is",
        ],
      },
    ],
  },
  {
    id: "reuse",
    title: "Reuse & Repetition",
    questions: [
      {
        id: "reuse_level",
        type: "single",
        label: "How much of your existing work do you reuse?",
        options: [
          "Almost everything is systemized for reuse",
          "I reuse a lot of templates, assets, or processes",
          "I reuse some things, but inconsistently",
          "I mostly recreate things each time",
          "Almost nothing is deliberately built for reuse",
        ],
      },
      {
        id: "project_start",
        type: "single",
        label: "When starting a new project, what usually happens?",
        options: [
          "I have a clear process and reusable starting template",
          "I copy an old project and modify it",
          "I have a rough process but still figure things out each time",
          "I start from scratch",
          "It depends on the project",
        ],
      },
      {
        id: "project_finish",
        type: "single",
        label: "When you finish a project, what happens to the things you created?",
        options: [
          "Everything is properly archived and easy to reuse",
          "I save everything, but organization isn't great",
          "Some things get reused, while others disappear into folders",
          "I usually just move on to the next project",
          "Completed projects mostly become digital clutter",
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Your Tools",
    questions: [
      {
        id: "discover_features",
        type: "single",
        label:
          "How often do you discover that an app you already use can do something you didn't know about?",
        options: ["Almost never", "Occasionally", "Pretty often", "Constantly"],
      },
      {
        id: "apps_to_learn",
        type: "text",
        label: "Which apps do you wish you knew better?",
        help: "Optional",
        optional: true,
      },
      {
        id: "repetitive_tasks",
        type: "single",
        label: "How do you currently handle repetitive tasks?",
        options: [
          "I have shortcuts / templates / systems for most of them",
          "I have systems for some of them",
          "I know I should create systems, but haven't",
          "I mostly do them manually",
          "I haven't really thought about it",
        ],
      },
    ],
  },
  {
    id: "workflow",
    title: "Your Workflow",
    questions: [
      {
        id: "task_tools",
        type: "multi",
        label: "How do you currently manage tasks and projects?",
        help: "Select all that apply.",
        options: [
          "Task manager",
          "Calendar",
          "Notes app",
          "Notion",
          "Obsidian",
          "Spreadsheet",
          "Project management software",
          "Email",
          "Paper",
          "I mostly keep things in my head",
          "Other",
        ],
      },
      {
        id: "whats_next",
        type: "single",
        label: "How often do you have to stop and figure out \u201cwhat should I do next?\u201d",
        options: ["Almost never", "Occasionally", "A few times a day", "Very often", "Constantly"],
      },
      {
        id: "lose_place",
        type: "single",
        label: "How often do you lose your place when switching between projects or tasks?",
        options: [
          "Almost never",
          "Occasionally",
          "A few times a week",
          "Every day",
          "Multiple times a day",
        ],
      },
    ],
  },
  {
    id: "goal",
    title: "Your Goal",
    questions: [
      {
        id: "improve_one",
        type: "textarea",
        label: "If you could improve ONE thing about the way you work, what would it be?",
      },
      {
        id: "outcomes",
        type: "multi",
        label: "What would a noticeably better digital workflow allow you to do?",
        help: "Select up to 3.",
        maxSelect: 3,
        options: [
          "Get more work done in the same amount of time",
          "Spend less time on repetitive tasks",
          "Find things instantly",
          "Start projects faster",
          "Reuse more of my previous work",
          "Keep my digital workspace organized",
          "Get more out of my existing apps",
          "Better manage my ideas and information",
          "Reduce the number of small decisions I make",
          "Stay focused more easily",
          "Pick up where I left off more easily",
          "Feel more in control of my digital work",
          "Other",
        ],
      },
    ],
  },
  {
    id: "diagnosis",
    title: "Getting Your Diagnosis",
    questions: [
      {
        id: "seriousness",
        type: "single",
        label: "How serious are you about improving your workflow?",
        options: [
          "I'm just curious",
          "I'd like to improve it eventually",
          "I've been meaning to fix it for a while",
          "I'm actively looking for a better system",
          "I want to fix it now",
        ],
      },
      {
        id: "interest",
        type: "single",
        label:
          "If I identify clear opportunities to improve your workflow, would you be interested in having me help you implement them?",
        options: [
          "Yes, that's exactly what I'm looking for",
          "Maybe — I'd like to see what you recommend",
          "I'm mainly interested in the free diagnosis",
        ],
      },
      { id: "first_name", type: "text", label: "First name" },
      { id: "email", type: "text", label: "Email", placeholder: "you@example.com" },
    ],
  },
];

export function visibleQuestions(section: Section, answers: Answers): Question[] {
  return section.questions.filter((q) => !q.showIf || q.showIf(answers));
}

export function isAnswered(question: Question, answers: Answers): boolean {
  if (question.optional) return true;
  const value = answers[question.id];
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "string" && value.trim().length > 0;
}
