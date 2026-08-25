import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHead } from "./primitives";

const faqs = [
  {
    q: "Is this only for YouTubers?",
    a: "No. It's designed for creators who manage a substantial part of their own digital production workflow. That can include YouTubers, educators, streamers, designers, writers, video creators, and other solo creators.",
  },
  {
    q: "Do I have to record my entire life for a week?",
    a: "No. The goal is to capture representative examples of your normal creative workflow. You'll record the work that gives me a useful view of how you actually create.",
  },
  {
    q: "What if my workflow is messy?",
    a: "That's exactly what I want to see. Don't clean it up beforehand. The friction is the thing I'm trying to find.",
  },
  {
    q: "Do I have to share sensitive work?",
    a: "No. You control what you record and can exclude confidential or sensitive material.",
  },
  {
    q: "What happens to my recordings?",
    a: "They're securely stored, never shared, and deleted after your audit.",
  },
  {
    q: "Do I need to buy new software?",
    a: "No. I start with your existing tools. If I recommend something new, it will be because there's a specific problem it solves — not because you need another app.",
  },
  {
    q: "Will you build my Notion workspace?",
    a: "If Notion is useful for your workflow, yes. That can include project management, content pipelines, databases, dashboards, templates, and workflows.",
  },
  {
    q: "Will you build my note-taking system?",
    a: "If your workflow needs one, yes. The system will be designed around the information you actually collect, use, and need to retrieve.",
  },
  {
    q: "What if I already have a productivity system?",
    a: "That's fine. I'm not trying to replace something that's already working. I'll keep what's useful and improve what's creating friction.",
  },
  {
    q: "What if you don't know one of the tools I use?",
    a: "That's fine. The systems matter more than any individual app, and I learn new tools quickly.",
  },
  {
    q: "Is this a course?",
    a: "No. It's a personalized 1-on-1 service built around your actual workflow.",
  },
  {
    q: "How is this different from a generic productivity guide?",
    a: "A guide tells you what someone else thinks you should do. Deep Work OS starts with how you actually work. Your tools, projects, habits, files, information, and bottlenecks determine what gets changed.",
  },
  {
    q: "What do I receive at the end?",
    a: "You'll receive the systems, templates, structures, rules, recommendations, documentation, and walkthroughs that your workflow requires. Your exact deliverables are determined by the audit.",
  },
  {
    q: "How long does it take?",
    a: "The complete process takes 14 days from receiving the required recordings and information to delivery.",
  },
];

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionHead
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        lead="Everything you need to know about how Deep Work OS works."
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
