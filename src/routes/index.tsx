import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

const title = "Deep Work OS: Rebuilt Systems for Creative Work";
const description =
  "A 14-day creative workflow transformation for solo content creators. Record a normal week of work. I analyze it from the inside and rebuild the systems behind your tools, files, notes, projects, templates, and shortcuts.";

export const Route = createFileRoute("/")({
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
  component: LandingPage,
});
