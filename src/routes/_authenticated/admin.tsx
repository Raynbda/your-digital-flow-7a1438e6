import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { ChevronDown, Loader2, LogOut } from "lucide-react";
import { listSubmissions } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { SummaryBar } from "@/components/admin/SummaryBar";
import { FilterBar } from "@/components/admin/FilterBar";
import { SubmissionDetail } from "@/components/admin/SubmissionDetail";
import {
  buildCsv,
  defaultFilters,
  diagnosisLabel,
  downloadCsv,
  filterRows,
  relativeDate,
  type Filters,
  type SubmissionRow,
} from "@/lib/admin-view";

const title = "Diagnostic Submissions - Creator OS";
const description = "Admin view of Workflow Diagnostic submissions.";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const fetchList = useServerFn(listSubmissions);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["diagnostic-submissions"],
    queryFn: () => fetchList({ data: undefined }),
  });

  const rows = (data ?? []) as SubmissionRow[];
  const visible = useMemo(() => filterRows(rows, filters), [rows, filters]);

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const copy = async (text: string, onDone: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      onDone();
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyAllEmails = () =>
    copy(visible.map((r) => r.email).join(", "), () => {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1800);
    });

  const exportCsv = () =>
    downloadCsv(`creator-os-submissions-${new Date().toISOString().slice(0, 10)}.csv`, buildCsv(visible));

  const move = (id: string, delta: number) => {
    const index = visible.findIndex((r) => r.id === id);
    const next = visible[index + delta];
    if (next) setOpen(next.id);
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4">
          <Link to="/" className="font-extrabold tracking-tight text-foreground">
            Creator OS
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1100px] px-5 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Diagnostic submissions
        </h1>
        <p className="mt-2 text-muted-foreground">
          {data
            ? `Showing ${visible.length} of ${rows.length} submission${rows.length === 1 ? "" : "s"}`
            : "Loading entries"}
        </p>

        {isLoading ? (
          <div className="mt-10 flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading
          </div>
        ) : error ? (
          <p className="mt-10 rounded-xl border border-border bg-card p-6 text-sm text-destructive">
            {error instanceof Error && error.message.includes("Forbidden")
              ? "This account is not an admin yet. Ask for the admin role to be granted, then reload."
              : "Could not load submissions."}
          </p>
        ) : (
          <>
            <SummaryBar rows={rows} />
            <FilterBar
              rows={rows}
              filters={filters}
              onChange={setFilters}
              onCopyEmails={copyAllEmails}
              onExport={exportCsv}
              copied={copiedAll}
            />

            <div className="mt-6 space-y-3">
              {visible.map((row, index) => {
                const isOpen = open === row.id;
                return (
                  <article key={row.id} className="rounded-2xl border border-border bg-card">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : row.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-bold text-card-foreground">
                          {row.first_name || "No name"} &middot; {row.email}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {diagnosisLabel(row.primary_diagnosis)}
                          {row.secondary_diagnosis
                            ? ` + ${diagnosisLabel(row.secondary_diagnosis)}`
                            : ""}
                          {" · "}
                          <span title={new Date(row.created_at).toLocaleString()}>
                            {relativeDate(row.created_at)}
                          </span>
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {row.seriousness ? (
                            <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                              {row.seriousness}
                            </span>
                          ) : null}
                          {row.interest ? (
                            <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                              {row.interest}
                            </span>
                          ) : null}
                          {row.newsletter_opt_in ? (
                            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                              Newsletter
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <SubmissionDetail
                        row={row}
                        hasPrev={index > 0}
                        hasNext={index < visible.length - 1}
                        onPrev={() => move(row.id, -1)}
                        onNext={() => move(row.id, 1)}
                        emailCopied={copiedEmail === row.id}
                        onCopyEmail={() =>
                          copy(row.email, () => {
                            setCopiedEmail(row.id);
                            setTimeout(() => setCopiedEmail(null), 1800);
                          })
                        }
                      />
                    ) : null}
                  </article>
                );
              })}
              {visible.length === 0 ? (
                <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
                  {rows.length === 0
                    ? "No submissions yet."
                    : "No submissions match these filters."}
                </p>
              ) : null}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
