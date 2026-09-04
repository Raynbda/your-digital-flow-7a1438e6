import { questions, sectionOrder, type Question } from "./diagnostic-questions";
import { diagnoses } from "./diagnosis-content";
import type { DiagnosisKey } from "./diagnostic-scoring";

export type SubmissionRow = {
  id: string;
  first_name: string;
  email: string;
  answers: unknown;
  scores: unknown;
  primary_diagnosis: string;
  secondary_diagnosis: string | null;
  seriousness: string | null;
  interest: string | null;
  newsletter_opt_in: boolean;
  created_at: string;
};

const questionById = new Map<string, Question>(questions.map((q) => [q.id, q]));

export const OTHER_SUFFIX = "__other";

export function diagnosisLabel(key: string | null | undefined): string {
  if (!key) return "";
  return key in diagnoses ? diagnoses[key as DiagnosisKey].label : key;
}

export function diagnosisFor(key: string | null | undefined) {
  if (!key) return null;
  return key in diagnoses ? diagnoses[key as DiagnosisKey] : null;
}

export function asAnswers(value: unknown): Record<string, string | string[]> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, string | string[]>)
    : {};
}

export function asScores(value: unknown): Record<string, number> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, number>)
    : {};
}

export type AnswerItem = {
  id: string;
  question: string;
  value: string;
  other: string | null;
  answered: boolean;
  isFreeText: boolean;
};

export type AnswerSection = { key: string; label: string; items: AnswerItem[] };

function formatValue(value: string | string[] | undefined): string {
  if (value === undefined || value === null) return "";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

/**
 * Groups a submission's answers by the diagnostic's sections, in form order,
 * using real question wording. `__other` free-text is merged into its parent
 * answer. Keys that no longer exist in the schema are appended as an
 * "Other recorded answers" group so historical entries never break.
 */
export function groupAnswers(rawAnswers: unknown): AnswerSection[] {
  const answers = asAnswers(rawAnswers);
  const sections: AnswerSection[] = sectionOrder.map((s) => ({
    key: s.key,
    label: s.label,
    items: [],
  }));
  const byKey = new Map(sections.map((s) => [s.key, s]));
  const consumed = new Set<string>();

  for (const q of questions) {
    const raw = answers[q.id];
    const otherRaw = answers[`${q.id}${OTHER_SUFFIX}`];
    consumed.add(q.id);
    consumed.add(`${q.id}${OTHER_SUFFIX}`);
    const value = formatValue(raw);
    // Conditional questions are only shown when their branch matched, so an
    // unmatched branch was never asked — don't list it as "skipped".
    if (!value && !otherRaw && q.showIf && !q.showIf(answers)) continue;
    if (!value && !otherRaw) {

      byKey.get(q.section)?.items.push({
        id: q.id,
        question: q.title,
        value: "",
        other: null,
        answered: false,
        isFreeText: q.type === "text" || q.type === "longtext",
      });
      continue;
    }
    byKey.get(q.section)?.items.push({
      id: q.id,
      question: q.title,
      value,
      other: otherRaw ? formatValue(otherRaw) : null,
      answered: true,
      isFreeText: q.type === "text" || q.type === "longtext",
    });
  }

  const leftovers = Object.keys(answers).filter((k) => !consumed.has(k));
  if (leftovers.length > 0) {
    sections.push({
      key: "__legacy",
      label: "Other recorded answers",
      items: leftovers.map((k) => ({
        id: k,
        question: k,
        value: formatValue(answers[k]),
        other: null,
        answered: true,
        isFreeText: true,
      })),
    });
  }

  return sections.filter((s) => s.items.length > 0);
}

/** The written answers worth reading before a call. */
export function ownWords(rawAnswers: unknown): AnswerItem[] {
  return groupAnswers(rawAnswers)
    .flatMap((s) => s.items)
    .filter((i) => i.answered && i.isFreeText && i.value.trim().length > 0);
}

export function toolsList(rawAnswers: unknown): string[] {
  const answers = asAnswers(rawAnswers);
  const raw = answers["apps"];
  const text = Array.isArray(raw) ? raw.join(", ") : (raw ?? "");
  return String(text)
    .split(/[,\n;]+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 20);
}

export function relativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.round(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

export type Filters = {
  search: string;
  diagnosis: string;
  seriousness: string;
  newsletter: string;
  sort: "newest" | "oldest";
};

export const defaultFilters: Filters = {
  search: "",
  diagnosis: "all",
  seriousness: "all",
  newsletter: "all",
  sort: "newest",
};

function haystack(row: SubmissionRow): string {
  const answers = asAnswers(row.answers);
  return [
    row.first_name,
    row.email,
    row.primary_diagnosis,
    row.secondary_diagnosis ?? "",
    row.seriousness ?? "",
    row.interest ?? "",
    ...Object.values(answers).map((v) => (Array.isArray(v) ? v.join(" ") : String(v ?? ""))),
  ]
    .join(" ")
    .toLowerCase();
}

export function filterRows(rows: SubmissionRow[], f: Filters): SubmissionRow[] {
  const term = f.search.trim().toLowerCase();
  const out = rows.filter((row) => {
    if (term && !haystack(row).includes(term)) return false;
    if (f.diagnosis !== "all" && row.primary_diagnosis !== f.diagnosis) return false;
    if (f.seriousness !== "all" && (row.seriousness ?? "") !== f.seriousness) return false;
    if (f.newsletter === "yes" && !row.newsletter_opt_in) return false;
    if (f.newsletter === "no" && row.newsletter_opt_in) return false;
    return true;
  });
  return out.sort((a, b) => {
    const da = new Date(a.created_at).getTime();
    const db = new Date(b.created_at).getTime();
    return f.sort === "newest" ? db - da : da - db;
  });
}

export function summarize(rows: SubmissionRow[]) {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const byDiagnosis = new Map<string, number>();
  let recent = 0;
  let newsletter = 0;
  for (const row of rows) {
    if (new Date(row.created_at).getTime() >= weekAgo) recent += 1;
    if (row.newsletter_opt_in) newsletter += 1;
    byDiagnosis.set(row.primary_diagnosis, (byDiagnosis.get(row.primary_diagnosis) ?? 0) + 1);
  }
  return {
    total: rows.length,
    recent,
    newsletter,
    byDiagnosis: [...byDiagnosis.entries()].sort((a, b) => b[1] - a[1]),
  };
}

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export function buildCsv(rows: SubmissionRow[]): string {
  const questionCols = questions.map((q) => q.id);
  const header = [
    "name",
    "email",
    "created_at",
    "primary_diagnosis",
    "secondary_diagnosis",
    "seriousness",
    "interest",
    "newsletter_opt_in",
    ...questions.map((q) => q.title),
  ];
  const lines = [header.map(csvCell).join(",")];
  for (const row of rows) {
    const answers = asAnswers(row.answers);
    const cells = [
      row.first_name ?? "",
      row.email,
      row.created_at,
      diagnosisLabel(row.primary_diagnosis),
      diagnosisLabel(row.secondary_diagnosis),
      row.seriousness ?? "",
      row.interest ?? "",
      row.newsletter_opt_in ? "yes" : "no",
      ...questionCols.map((id) => {
        const main = formatValue(answers[id]);
        const other = formatValue(answers[`${id}${OTHER_SUFFIX}`]);
        return other ? `${main} (${other})` : main;
      }),
    ];
    lines.push(cells.map(csvCell).join(","));
  }
  return lines.join("\r\n");
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
