import type { Answers } from "./diagnostic-questions";

export type DiagnosisKey = "speed" | "organization" | "reuse" | "information" | "workflow";

export type Scores = Record<DiagnosisKey, number>;

type Weights = Partial<Scores>;

const signalWeights: Record<string, Weights> = {
  repetitive_manual: { speed: 3, workflow: 1, reuse: 1 },
  cant_find: { organization: 3, information: 1, speed: 1 },
  rebuilding: { reuse: 3, speed: 1, workflow: 1 },
  messy_files: { organization: 3, workflow: 1, information: 1 },
  scattered_info: { information: 3, organization: 1, workflow: 1 },
  unknown_features: { speed: 3, workflow: 1 },
  too_many_tools: { workflow: 3, information: 1, organization: 1, speed: 1 },
  from_scratch: { reuse: 3, workflow: 2, speed: 1 },
  no_processes: { workflow: 3, reuse: 2, speed: 2 },
  loses_place: { workflow: 3, organization: 1 },
  poor_focus: { workflow: 2, organization: 1 },
  saves_no_reuse: { information: 3, reuse: 2, organization: 1 },
  poor_archiving: { reuse: 3, organization: 2, information: 1, workflow: 1 },
};

const problemToSignal: Record<string, string> = {
  "I repeatedly do things manually that feel like they should be faster": "repetitive_manual",
  "I know I've saved something but can't find it": "cant_find",
  "I keep rebuilding things I've already made": "rebuilding",
  "My files are difficult to navigate": "messy_files",
  "My notes and information are scattered": "scattered_info",
  "I have too many tools and don't know what each one should be used for": "too_many_tools",
  "I know my software can probably do more, but I don't know how": "unknown_features",
  "I save lots of information but rarely use it again": "saves_no_reuse",
  "Every project starts from scratch": "from_scratch",
  "I don't have clear processes for recurring work": "no_processes",
  "I lose track of where I left off": "loses_place",
  "I have too much digital clutter": "messy_files",
  "I switch between too many apps or places to get something done": "too_many_tools",
  "I have trouble staying focused": "poor_focus",
};

const mainProblemToSignal: Record<string, string> = {
  "Doing things manually / too slowly": "repetitive_manual",
  "Finding things": "cant_find",
  "Rebuilding things": "rebuilding",
  "Digital clutter / organization": "messy_files",
  "Scattered information": "scattered_info",
  "Not getting enough out of my tools": "unknown_features",
  "Too many tools / unclear systems": "too_many_tools",
  "Starting projects from scratch": "from_scratch",
  "Lack of repeatable processes": "no_processes",
  "Losing track of work": "loses_place",
  "Staying focused": "poor_focus",
};

const scaleSignals: Record<string, Record<string, string>> = {
  find_ease: {
    "I regularly spend several minutes looking": "cant_find",
    "Finding things is a constant problem": "cant_find",
    "I sometimes give up and recreate it": "rebuilding",
  },
  files_org: {
    "I have a structure, but it has become messy": "messy_files",
    "I have several different systems": "messy_files",
    "My files are fairly chaotic": "messy_files",
  },
  notes_system: {
    "I have a system, but it has become messy": "scattered_info",
    "I use several different systems": "scattered_info",
    "I save things wherever is convenient": "scattered_info",
    "I don't really have a system": "scattered_info",
  },
  save_behavior: {
    "I save it somewhere, but often forget about it": "saves_no_reuse",
    "I bookmark / save / screenshot it and rarely return to it": "saves_no_reuse",
    "I save it in several different places": "scattered_info",
  },
  reuse_level: {
    "I mostly recreate things each time": "rebuilding",
    "Almost nothing is deliberately built for reuse": "rebuilding",
    "I reuse some things, but inconsistently": "rebuilding",
  },
  project_start: {
    "I start from scratch": "from_scratch",
    "I have a rough process but still figure things out each time": "no_processes",
  },
  project_end: {
    "I usually just move on to the next project": "poor_archiving",
    "Completed projects mostly become digital clutter": "poor_archiving",
    "I save everything, but organization isn't great": "poor_archiving",
  },
  app_discovery: {
    "Pretty often": "unknown_features",
    Constantly: "unknown_features",
  },
  repetitive_handling: {
    "I know I should create systems, but haven't": "repetitive_manual",
    "I mostly do them manually": "repetitive_manual",
    "I haven't really thought about it": "repetitive_manual",
  },
  next_action_freq: {
    "A few times a day": "no_processes",
    "Very often": "no_processes",
    Constantly: "no_processes",
  },
  lose_place_freq: {
    "A few times a week": "loses_place",
    "Every day": "loses_place",
    "Multiple times a day": "loses_place",
  },
};

const outcomeSignals: Record<string, string> = {
  "Spend less time on repetitive tasks": "repetitive_manual",
  "Find things instantly": "cant_find",
  "Start projects faster": "from_scratch",
  "Reuse more of my previous work": "rebuilding",
  "Keep my digital workspace organized": "messy_files",
  "Get more out of my existing apps": "unknown_features",
  "Better manage my ideas and information": "scattered_info",
  "Stay focused more easily": "poor_focus",
  "Pick up where I left off more easily": "loses_place",
};

const emptyScores = (): Scores => ({
  speed: 0,
  organization: 0,
  reuse: 0,
  information: 0,
  workflow: 0,
});

function apply(scores: Scores, signal: string | undefined, multiplier = 1) {
  if (!signal) return;
  const weights = signalWeights[signal];
  if (!weights) return;
  (Object.keys(weights) as DiagnosisKey[]).forEach((key) => {
    scores[key] += (weights[key] ?? 0) * multiplier;
  });
}

const asArray = (value: string | string[] | undefined): string[] =>
  Array.isArray(value) ? value : value ? [value] : [];

export function scoreAnswers(answers: Answers): Scores {
  const scores = emptyScores();

  asArray(answers["problems"]).forEach((p) => apply(scores, problemToSignal[p]));
  apply(scores, mainProblemToSignal[String(answers["main_problem"] ?? "")], 2);

  Object.entries(scaleSignals).forEach(([questionId, map]) => {
    const value = String(answers[questionId] ?? "");
    apply(scores, map[value]);
  });

  asArray(answers["better_outcomes"]).forEach((o) => apply(scores, outcomeSignals[o], 0.5));

  (Object.keys(scores) as DiagnosisKey[]).forEach((key) => {
    scores[key] = Math.round(scores[key] * 10) / 10;
  });

  return scores;
}

export type Ranking = {
  scores: Scores;
  primary: DiagnosisKey;
  secondary: DiagnosisKey | null;
  tertiary: DiagnosisKey | null;
};

export function rankScores(scores: Scores): Ranking {
  const ordered = (Object.keys(scores) as DiagnosisKey[]).sort((a, b) => scores[b] - scores[a]);
  const primary = ordered[0] ?? "workflow";
  const secondary = ordered[1] && scores[ordered[1]] > 0 ? ordered[1] : null;
  const tertiary = ordered[2] && scores[ordered[2]] > 0 ? ordered[2] : null;
  return { scores, primary, secondary, tertiary };
}

export function diagnose(answers: Answers): Ranking {
  return rankScores(scoreAnswers(answers));
}
