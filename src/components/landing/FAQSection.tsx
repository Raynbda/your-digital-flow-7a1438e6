import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHead } from "./primitives";

export const faqs = [
  {
    q: "How does the screen recording review work?",
    a: "You record yourself completing a real project from start to finish using OBS, Loom, or another screen recorder. Include the normal friction, such as searching for files, switching apps, getting distracted, or repeating tasks. You can hide or skip anything private. I review the recording to identify exactly where time and attention are being lost.",
  },
  {
    q: "What exactly do I need to record?",
    a: "One real project from the first click to the final deliverable. Don't try to make your workflow look perfect. The messy parts are often where the biggest opportunities are.",
  },
  {
    q: "Do I have to share sensitive work?",
    a: "No. You control what you share. Blur, hide, or skip passwords, financial information, private messages, client information, or anything else you're not comfortable showing.",
  },
  {
    q: "What happens to my recordings?",
    a: "Your recordings are used only to analyze your workflow and build your recommendations. They are kept private, never published or shared, and deleted after the engagement.",
  },
  {
    q: "Is this only for Windows?",
    a: "No. The system works across Windows and macOS. I use a MacBook for the majority of my own work and am fluent in both operating systems. Some recommendations will be OS specific, but the underlying workflow principles apply to both.",
  },
  {
    q: "Do I need to buy new software?",
    a: "No. I prioritize tools you already have, native OS features, and free or affordable utilities. If I recommend a paid tool, I'll explain why it's worth it and provide alternatives where possible.",
  },
  {
    q: "Do I need to install anything?",
    a: "Not to get started. Depending on your workflow, I may recommend lightweight tools, scripts, or utilities, but nothing is added without a clear reason.",
  },
  {
    q: "What if you don't know one of the tools I use?",
    a: "I'll learn it. The goal isn't to force you into my preferred tools. It's to understand your workflow and improve it.",
  },
  {
    q: "Is this only for video editors?",
    a: "No. It's designed for anyone who spends significant time working on a computer, including creators, freelancers, researchers, students, and knowledge workers.",
  },
  {
    q: "How much time does the process take?",
    a: "The main requirement is recording yourself doing your normal work. After that, I handle the analysis and turn what I find into a clear, actionable system.",
  },
  {
    q: "How is this different from a generic productivity guide?",
    a: "Generic productivity advice tells you what you should do. This service starts with how you actually work. I analyze your real workflow, identify your specific bottlenecks, and build recommendations around them.",
  },
  {
    q: "What do I get at the end?",
    a: "You get a personalized Creator OS: a structured system for your workspace, files, apps, workflows, shortcuts, and recurring processes, designed around the way you actually work.",
  },
  {
    q: "What happens after I complete the assessment?",
    a: "You'll receive your results and see your biggest sources of digital friction. If the assessment indicates that a workflow audit could meaningfully help you, you'll be able to continue to the next step.",
  },
  {
    q: "How quickly will I receive my results?",
    a: "Your assessment results appear immediately. For the full workflow review, you'll receive your analysis and recommendations according to the timeline specified when you book.",
  },
];

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionHead
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        lead="Everything you need to know about how the workflow diagnostic and audit work."
      />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-border rounded-2xl border border-border bg-card px-5 sm:px-6"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b-0"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-card-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
