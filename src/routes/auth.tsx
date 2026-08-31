import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const title = "Admin Sign In - Creator OS";
const description = "Sign in to review Workflow Diagnostic submissions.";

export const Route = createFileRoute("/auth")({
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
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin", replace: true });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        setNotice("Check your inbox to confirm your email, then sign in.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-7">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
          <Lock className="h-5 w-5" aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-card-foreground">
          {mode === "signin" ? "Admin sign in" : "Create admin account"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Diagnostic submissions are only visible to admin accounts.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3">
          <label htmlFor="admin-email" className="sr-only">
            Email address
          </label>
          <input
            id="admin-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
          />
          <label htmlFor="admin-password" className="sr-only">
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            required
            minLength={8}
            placeholder="Password"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
          />

          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          {notice ? <p className="text-sm text-muted-foreground">{notice}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-50"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-5 text-sm text-muted-foreground underline"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
