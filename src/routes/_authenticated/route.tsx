import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Note: the auth gate runs client-side inside the component. Using
// `ssr: false` + an async `beforeLoad` on this pathless layout route made the
// server and client match sets diverge, which produced a hydration error
// ("Could not find match for matchId /_authenticated/") and a blank screen.
export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"checking" | "authed">("checking");

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      if (data.session?.user) setStatus("authed");
      else navigate({ to: "/auth", replace: true });
    });
    return () => {
      active = false;
    };
  }, [navigate]);

  if (status !== "authed") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" aria-label="Loading" />
      </div>
    );
  }

  return <Outlet />;
}
