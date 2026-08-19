import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

const title = "1:1 Workflow Optimization: Build a Better Digital Work System";
const description =
  "Personal 1:1 workflow optimization. I analyze how you actually work and build systems, templates, shortcuts, and file structures that make your digital work faster and easier.";

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
