import { Plus } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { Reveal } from "./Reveal";
import myAppsGridAsset from "@/assets/proof/my-apps-grid.png.asset.json";

export function MyAppsSection() {
  return (
    <Section band id="my-apps">
      <SectionHead
        eyebrow="My Apps"
        title="I work inside the same apps you do."
        lead="Creative tools, note apps, task managers, AI assistants, and file systems. On both macOS and Windows. If it is part of your day, it is part of the diagnosis."
      />

      <Reveal delay={80} className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-[var(--shadow-soft)]">
          <img
            src={myAppsGridAsset.url}
            alt="Grid of the apps I use every day — creative suite, notes, tasks, mail, and file managers on macOS and Windows"
            loading="lazy"
            className="block w-full"
          />
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-10 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm font-medium text-muted-foreground">
          <Plus className="h-4 w-4 text-primary" />
          and more
        </div>
      </Reveal>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[0.975rem] text-muted-foreground">
        Do not see your app here? That is fine. The systems matter more than the software, and I
        learn new tools quickly.
      </p>
    </Section>
  );
}
