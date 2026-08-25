import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ChevronDown, Loader2, LogOut } from "lucide-react";
import { listSubmissions } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { diagnoses } from "@/lib/diagnosis-content";

const title = "Diagnostic Submissions - Deep Work OS";
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

function label(key: string) {
  return key in diagnoses ? diagnoses[key as keyof typeof diagnoses].label : key;
}

function AdminPage() {
  const fetchList = useServerFn(listSubmissions);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["diagnostic-submissions"],
    queryFn: () => fetchList({ data: undefined }),
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4">
          <Link to="/" className="font-extrabold tracking-tight text-foreground">
            Deep Work OS
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
          {data ? `${data.length} submission${data.length === 1 ? "" : "s"}` : "Loading entries"}
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
          <div className="mt-8 space-y-3">
            {(data ?? []).map((row) => {
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
                        {label(row.primary_diagnosis)}
                        {row.secondary_diagnosis ? ` + ${label(row.secondary_diagnosis)}` : ""}
                        {" · "}
                        {new Date(row.created_at).toLocaleString()}
                        {row.newsletter_opt_in ? " · newsletter" : ""}
                      </p>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-border p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Scores
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {Object.entries((row.scores ?? {}) as Record<string, number>).map(
                          ([key, value]) => (
                            <li
                              key={key}
                              className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                            >
                              {label(key)}: {value}
                            </li>
                          ),
                        )}
                      </ul>
                      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Answers
                      </p>
                      <dl className="mt-3 space-y-3">
                        {Object.entries((row.answers ?? {}) as Record<string, unknown>).map(
                          ([key, value]) => (
                            <div key={key} className="rounded-xl border border-border p-4">
                              <dt className="text-sm font-semibold text-card-foreground">{key}</dt>
                              <dd className="mt-1 text-sm text-muted-foreground">
                                {Array.isArray(value) ? value.join(", ") : String(value)}
                              </dd>
                            </div>
                          ),
                        )}
                      </dl>
                    </div>
                  ) : null}
                </article>
              );
            })}
            {(data ?? []).length === 0 ? (
              <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
                No submissions yet.
              </p>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
