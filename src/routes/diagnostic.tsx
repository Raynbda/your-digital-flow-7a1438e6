import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SECTIONS, visibleQuestions, isAnswered, type Answers } from "@/lib/diagnostic-questions";

const title = "Workflow Diagnostic — Digital Work OS";
const description =
  "Answer a few questions about how you actually work and get a personal read on what is slowing your digital workflow down.";

export const Route = createFileRoute("/diagnostic")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiagnosticPage,
});

function DiagnosticPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const section = SECTIONS[step] ?? SECTIONS[0]!;
  const questions = visibleQuestions(section, answers);
  const canContinue = questions.every((q) => q.optional || isAnswered(q, answers));

  const set = (id: string, value: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const toggle = (id: string, option: string, maxSelect?: number) => {
    const current = Array.isArray(answers[id]) ? (answers[id] as string[]) : [];
    if (current.includes(option)) {
      set(
        id,
        current.filter((v) => v !== option),
      );
      return;
    }
    if (maxSelect && current.length >= maxSelect) return;
    set(id, [...current, option]);
  };

  return (
    <main className="w-full px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-[760px]">
        <Link to="/" className="text-sm font-semibold text-primary">
          &lt;- Back
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Step {step + 1} of {SECTIONS.length}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {section.title}
        </h1>

        <div className="mt-10 space-y-10">
          {questions.map((q) => (
            <div key={q.id}>
              <label className="block text-base font-semibold text-foreground">{q.label}</label>
              {q.help ? (
                <p className="mt-1 text-sm text-muted-foreground">{q.help}</p>
              ) : null}

              {q.type === "text" || q.type === "textarea" ? (
                <textarea
                  rows={q.type === "textarea" ? 4 : 2}
                  placeholder={q.placeholder}
                  value={(answers[q.id] as string) ?? ""}
                  onChange={(e) => set(q.id, e.target.value)}
                  className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              ) : (
                <ul className="mt-3 space-y-2">
                  {(q.options ?? []).map((option) => {
                    const selected =
                      q.type === "multi"
                        ? Array.isArray(answers[q.id]) &&
                          (answers[q.id] as string[]).includes(option)
                        : answers[q.id] === option;
                    return (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() =>
                            q.type === "multi"
                              ? toggle(q.id, option, q.maxSelect)
                              : set(q.id, option)
                          }
                          className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                            selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {option}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground"
            >
              Back
            </button>
          ) : null}
          {step < SECTIONS.length - 1 ? (
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep((s) => s + 1)}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50"
            >
              Continue
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
}
