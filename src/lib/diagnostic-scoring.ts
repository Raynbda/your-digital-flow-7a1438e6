import type { Answers } from "./diagnostic-questions";
import { MAIN_PROBLEMS } from "./diagnostic-questions";

export type Category = "speed" | "organization" | "reuse" | "information" | "workflow";

export const CATEGORIES: Category[] = [
  "speed",
  "organization",
  "reuse",
  "information",
  "workflow",
];

export type Scores = Record<Category, number>;

const empty = (): Scores => ({
  speed: 0,
  organization: 0,
  reuse: 0,
  information: 0,
  workflow: 0,
});

/** Problem statements (section 2) -> category weights. */
const PROBLEM_WEIGHTS: Record<string, Partial<Scores>> = {
  "I repeatedly do things manually that feel like they should be faster": { speed: 3 },
  "I know I've saved something but can't find it": { organization: 3 },
  "I keep rebuilding things I've already made": { reuse: 3 },
  "My files are difficult to navigate": { organization: 3 },
  "My notes and information are scattered": { information: 3 },
  "I have too many tools and don't know what each one should be used for": {
    workflow: 2,
    information: 1,
  },
  "I know my software can probably do more, but I don't know how": { speed: 2 },
  "I save lots of information but rarely use it again": { information: 3 },
  "Every project starts from scratch": { reuse: 3 },
  "I don't have clear processes for recurring work": { workflow: 3 },
  "I lose track of where I left off": { workflow: 3 },
  "I have too much digital clutter": { organization: 3 },
  "I switch between too many apps or places to get something done": { workflow: 2, speed: 1 },
  "I have trouble staying focused": { workflow: 2 },
};

/** The single "bothers me most" answer counts heavily. */
const MAIN_WEIGHTS: Record<string, Partial<Scores>> = {
  [MAIN_PROBLEMS.slow]: { speed: 6 },
  [MAIN_PROBLEMS.find]: { organization: 6 },
  [MAIN_PROBLEMS.rebuild]: { reuse: 6 },
  [MAIN_PROBLEMS.clutter]: { organization: 6 },
  [MAIN_PROBLEMS.scattered]: { information: 6 },
  [MAIN_PROBLEMS.tools]: { speed: 6 },
  [MAIN_PROBLEMS.tooMany]: { workflow: 4, information: 2 },
  [MAIN_PROBLEMS.scratch]: { reuse: 6 },
  [MAIN_PROBLEMS.process]: { workflow: 6 },
  [MAIN_PROBLEMS.losing]: { workflow: 6 },
  [MAIN_PROBLEMS.focus]: { workflow: 4 },
  [MAIN_PROBLEMS.other]: {},
};

/** Scale answers: index in the option list -> severity 0..4 mapped onto a category. */
const SCALES: { id: string; category: Category; options: string[]; weight?: number }[] = [
  {
    id: "find_ease",
    category: "organization",
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
    category: "organization",
    options: [
      "I have a clear folder structure that works well",
      "I mostly rely on search",
      "I have a structure, but it has become messy",
      "I mostly organize things as I go",
      "I have several different systems",
      "My files are fairly chaotic",
    ],
  },
  {
    id: "notes_mgmt",
    category: "information",
    options: [
      "I have a clear system I trust",
      "I have a system, but it has become messy",
      "I mostly dump things into one place",
      "I use several different systems",
      "I save things wherever is convenient",
      "I don't really have a system",
    ],
  },
  {
    id: "found_online",
    category: "information",
    options: [
      "I know exactly where it belongs and how I'll use it",
      "It depends on what it is",
      "I usually don't save it",
      "I save it somewhere, but often forget about it",
      "I save it in several different places",
      "I bookmark / save / screenshot it and rarely return to it",
    ],
  },
  {
    id: "reuse_level",
    category: "reuse",
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
    category: "reuse",
    options: [
      "I have a clear process and reusable starting template",
      "I copy an old project and modify it",
      "It depends on the project",
      "I have a rough process but still figure things out each time",
      "I start from scratch",
    ],
  },
  {
    id: "project_finish",
    category: "reuse",
    options: [
      "Everything is properly archived and easy to reuse",
      "I save everything, but organization isn't great",
      "Some things get reused, while others disappear into folders",
      "I usually just move on to the next project",
      "Completed projects mostly become digital clutter",
    ],
  },
  {
    id: "discover_features",
    category: "speed",
    options: ["Almost never", "Occasionally", "Pretty often", "Constantly"],
  },
  {
    id: "repetitive_tasks",
    category: "speed",
    options: [
      "I have shortcuts / templates / systems for most of them",
      "I have systems for some of them",
      "I know I should create systems, but haven't",
      "I mostly do them manually",
      "I haven't really thought about it",
    ],
  },
  {
    id: "whats_next",
    category: "workflow",
    options: ["Almost never", "Occasionally", "A few times a day", "Very often", "Constantly"],
  },
  {
    id: "lose_place",
    category: "workflow",
    options: [
      "Almost never",
      "Occasionally",
      "A few times a week",
      "Every day",
      "Multiple times a day",
    ],
  },
];

/** Desired-outcome answers nudge the ranking toward what the person cares about. */
const OUTCOME_WEIGHTS: Record<string, Partial<Scores>> = {
  "Get more work done in the same amount of time": { speed: 2 },
  "Spend less time on repetitive tasks": { speed: 2 },
  "Find things instantly": { organization: 2 },
  "Start projects faster": { reuse: 2 },
  "Reuse more of my previous work": { reuse: 2 },
  "Keep my digital workspace organized": { organization: 2 },
  "Get more out of my existing apps": { speed: 2 },
  "Better manage my ideas and information": { information: 2 },
  "Reduce the number of small decisions I make": { workflow: 2 },
  "Stay focused more easily": { workflow: 2 },
  "Pick up where I left off more easily": { workflow: 2 },
  "Feel more in control of my digital work": { workflow: 1, organization: 1 },
};

function add(scores: Scores, weights: Partial<Scores> | undefined) {
  if (!weights) return;
  for (const key of CATEGORIES) {
    const value = weights[key];
    if (value) scores[key] += value;
  }
}

export type ScoreResult = {
  scores: Scores;
  percentages: Scores;
  primary: Category;
  secondary: Category;
  ranked: Category[];
};

export function scoreAnswers(answers: Answers): ScoreResult {
  const scores = empty();

  const problems = answers["problems"];
  if (Array.isArray(problems)) {
    for (const problem of problems) add(scores, PROBLEM_WEIGHTS[problem]);
  }

  const main = answers["main_problem"];
  if (typeof main === "string") add(scores, MAIN_WEIGHTS[main]);

  for (const scale of SCALES) {
    const value = answers[scale.id];
    if (typeof value !== "string") continue;
    const index = scale.options.indexOf(value);
    if (index < 0) continue;
    const severity = (index / Math.max(1, scale.options.length - 1)) * 4;
    scores[scale.category] += severity * (scale.weight ?? 1);
  }

  const outcomes = answers["outcomes"];
  if (Array.isArray(outcomes)) {
    for (const outcome of outcomes) add(scores, OUTCOME_WEIGHTS[outcome]);
  }

  const ranked = [...CATEGORIES].sort((a, b) => scores[b] - scores[a]);
  const max = Math.max(...CATEGORIES.map((c) => scores[c]), 1);
  const percentages = empty();
  for (const category of CATEGORIES) {
    percentages[category] = Math.round((scores[category] / max) * 100);
    scores[category] = Math.round(scores[category] * 10) / 10;
  }

  return {
    scores,
    percentages,
    primary: ranked[0]!,
    secondary: ranked[1]!,
    ranked,
  };
}
