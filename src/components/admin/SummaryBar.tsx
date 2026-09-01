import { diagnosisLabel, summarize, type SubmissionRow } from "@/lib/admin-view";

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-extrabold tracking-tight text-card-foreground">{value}</p>
    </div>
  );
}

export function SummaryBar({ rows }: { rows: SubmissionRow[] }) {
  const s = summarize(rows);
  return (
    <section className="mt-8">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Total submissions" value={s.total} />
        <Stat label="Last 7 days" value={s.recent} />
        <Stat label="Newsletter opt-ins" value={s.newsletter} />
      </div>
      {s.byDiagnosis.length > 0 ? (
        <div className="mt-3 rounded-2xl border border-border bg-card p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Primary diagnosis breakdown
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.byDiagnosis.map(([key, count]) => (
              <li
                key={key}
                className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
              >
                {diagnosisLabel(key)}: <span className="font-bold">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
