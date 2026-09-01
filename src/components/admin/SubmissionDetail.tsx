import { ChevronLeft, ChevronRight, Copy } from "lucide-react";
import {
  asScores,
  diagnosisFor,
  diagnosisLabel,
  groupAnswers,
  ownWords,
  toolsList,
  type SubmissionRow,
} from "@/lib/admin-view";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
      {children}
    </li>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">{children}</p>
  );
}

export function SubmissionDetail({
  row,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onCopyEmail,
  emailCopied,
}: {
  row: SubmissionRow;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onCopyEmail: () => void;
  emailCopied: boolean;
}) {
  const sections = groupAnswers(row.answers);
  const words = ownWords(row.answers);
  const tools = toolsList(row.answers);
  const scores = asScores(row.scores);
  const primary = diagnosisFor(row.primary_diagnosis);
  const secondary = diagnosisFor(row.secondary_diagnosis);

  return (
    <div className="border-t border-border p-5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onCopyEmail}
          className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
          {emailCopied ? "Copied" : "Copy email"}
        </button>
        <a
          href={`mailto:${row.email}?subject=${encodeURIComponent("Creative Workflow Transformation - Your diagnostic")}`}
          className="rounded-xl border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Email them
        </a>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className="inline-flex items-center gap-1 rounded-xl border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Prev
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="inline-flex items-center gap-1 rounded-xl border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {primary ? (
        <>
          <Heading>Their result</Heading>
          <div className="mt-3 rounded-2xl border border-border p-5">
            <p className="text-lg font-extrabold tracking-tight text-card-foreground">
              {primary.headline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{primary.summary}</p>
            {secondary ? (
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-card-foreground">
                  Secondary opportunity: {secondary.label}.
                </span>{" "}
                {secondary.secondary}
              </p>
            ) : null}
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              First action they were given
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {primary.firstAction.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}

      {words.length > 0 ? (
        <>
          <Heading>In their own words</Heading>
          <dl className="mt-3 space-y-3">
            {words.map((item) => (
              <div key={item.id} className="rounded-xl border border-border bg-secondary/40 p-4">
                <dt className="text-sm font-semibold text-card-foreground">{item.question}</dt>
                <dd className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}

      {tools.length > 0 ? (
        <>
          <Heading>Their current tools</Heading>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Pill key={tool}>{tool}</Pill>
            ))}
          </ul>
        </>
      ) : null}

      {Object.keys(scores).length > 0 ? (
        <>
          <Heading>Scores</Heading>
          <ul className="mt-3 flex flex-wrap gap-2">
            {Object.entries(scores).map(([key, value]) => (
              <Pill key={key}>
                {diagnosisLabel(key)}: {value}
              </Pill>
            ))}
          </ul>
        </>
      ) : null}

      <Heading>All answers</Heading>
      <div className="mt-3 space-y-5">
        {sections.map((section) => (
          <div key={section.key}>
            <p className="text-sm font-bold text-card-foreground">{section.label}</p>
            <dl className="mt-2 space-y-2">
              {section.items.map((item) => (
                <div key={item.id} className="rounded-xl border border-border p-4">
                  <dt className="text-sm font-semibold text-card-foreground">{item.question}</dt>
                  <dd className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">
                    {item.answered ? (
                      <>
                        {item.value}
                        {item.other ? (
                          <span className="text-card-foreground"> — “{item.other}”</span>
                        ) : null}
                      </>
                    ) : (
                      <span className="italic opacity-70">Not answered / skipped</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
