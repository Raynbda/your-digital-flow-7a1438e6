import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

const title = "Creative Workflow Transformation: Rebuild Your Creator Workflow in 14 Days";
const description =
  "A personalized 14-day rebuild of the systems behind your creative work. I analyze how you actually make content and build templates, file structures, shortcuts, and project systems that make creating faster and easier. For content creators on macOS & Windows.";

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
