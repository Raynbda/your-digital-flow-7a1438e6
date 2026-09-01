import { diagnosisLabel, type Filters, type SubmissionRow } from "@/lib/admin-view";

const selectClass =
  "rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground";

export function FilterBar({
  rows,
  filters,
  onChange,
  onCopyEmails,
  onExport,
  copied,
}: {
  rows: SubmissionRow[];
  filters: Filters;
  onChange: (next: Filters) => void;
  onCopyEmails: () => void;
  onExport: () => void;
  copied: boolean;
}) {
  const diagnosisValues = [...new Set(rows.map((r) => r.primary_diagnosis))];
  const seriousnessValues = [...new Set(rows.map((r) => r.seriousness ?? "").filter(Boolean))];

  return (
    <section className="mt-6 rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="admin-search" className="sr-only">
          Search submissions
        </label>
        <input
          id="admin-search"
          type="search"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search name, email, or any answer"
          className="min-w-[240px] flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
        />

        <label htmlFor="admin-diagnosis" className="sr-only">
          Filter by diagnosis
        </label>
        <select
          id="admin-diagnosis"
          value={filters.diagnosis}
          onChange={(e) => onChange({ ...filters, diagnosis: e.target.value })}
          className={selectClass}
        >
          <option value="all">All diagnoses</option>
          {diagnosisValues.map((v) => (
            <option key={v} value={v}>
              {diagnosisLabel(v)}
            </option>
          ))}
        </select>

        <label htmlFor="admin-seriousness" className="sr-only">
          Filter by readiness
        </label>
        <select
          id="admin-seriousness"
          value={filters.seriousness}
          onChange={(e) => onChange({ ...filters, seriousness: e.target.value })}
          className={selectClass}
        >
          <option value="all">All readiness</option>
          {seriousnessValues.map((v) => (
            <option key={v} value={v}>
              {v.length > 40 ? `${v.slice(0, 40)}...` : v}
            </option>
          ))}
        </select>

        <label htmlFor="admin-newsletter" className="sr-only">
          Filter by newsletter opt-in
        </label>
        <select
          id="admin-newsletter"
          value={filters.newsletter}
          onChange={(e) => onChange({ ...filters, newsletter: e.target.value })}
          className={selectClass}
        >
          <option value="all">Newsletter: any</option>
          <option value="yes">Opted in</option>
          <option value="no">Not opted in</option>
        </select>

        <label htmlFor="admin-sort" className="sr-only">
          Sort order
        </label>
        <select
          id="admin-sort"
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value as Filters["sort"] })}
          className={selectClass}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onCopyEmails}
          className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          {copied ? "Emails copied" : "Copy all emails"}
        </button>
        <button
          type="button"
          onClick={onExport}
          className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Export CSV
        </button>
      </div>
    </section>
  );
}
