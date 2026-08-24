import { Plus } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { Reveal } from "./Reveal";

import chatgptAsset from "@/assets/appicons/chatgpt.png.asset.json";
import remindersAsset from "@/assets/appicons/reminders.png.asset.json";
import notesAsset from "@/assets/appicons/notes.png.asset.json";
import finderAsset from "@/assets/appicons/finder.png.asset.json";
import powertoysAsset from "@/assets/appicons/powertoys.png.asset.json";
import mstodoAsset from "@/assets/appicons/mstodo.png.asset.json";
import fileexplorerAsset from "@/assets/appicons/fileexplorer.png.asset.json";
import onedriveAsset from "@/assets/appicons/onedrive.png.asset.json";

type IconKind = "simple" | "devicon" | "asset";
type App = { name: string; kind: IconKind; ref: string; group: string };

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const apps: App[] = [
  // Creative
  { name: "Premiere Pro", kind: "devicon", ref: "premierepro", group: "Creative" },
  { name: "After Effects", kind: "devicon", ref: "aftereffects", group: "Creative" },
  { name: "Photoshop", kind: "devicon", ref: "photoshop", group: "Creative" },
  { name: "DaVinci Resolve", kind: "simple", ref: "davinciresolve", group: "Creative" },
  { name: "Blender", kind: "devicon", ref: "blender", group: "Creative" },
  { name: "Figma", kind: "devicon", ref: "figma", group: "Creative" },
  { name: "Canva", kind: "devicon", ref: "canva", group: "Creative" },
  { name: "Audacity", kind: "simple", ref: "audacity", group: "Creative" },
  { name: "OBS Studio", kind: "simple", ref: "obsstudio", group: "Creative" },
  // Notes & knowledge
  { name: "Obsidian", kind: "simple", ref: "obsidian", group: "Notes & knowledge" },
  { name: "Notion", kind: "simple", ref: "notion", group: "Notes & knowledge" },
  { name: "Apple Notes", kind: "asset", ref: notesAsset.url, group: "Notes & knowledge" },
  { name: "NotebookLM", kind: "simple", ref: "notebooklm", group: "Notes & knowledge" },
  // Tasks & planning
  { name: "Todoist", kind: "simple", ref: "todoist", group: "Tasks & planning" },
  { name: "TickTick", kind: "simple", ref: "ticktick", group: "Tasks & planning" },
  { name: "MS To Do", kind: "asset", ref: mstodoAsset.url, group: "Tasks & planning" },
  { name: "Apple Reminders", kind: "asset", ref: remindersAsset.url, group: "Tasks & planning" },
  { name: "Google Calendar", kind: "simple", ref: "googlecalendar", group: "Tasks & planning" },
  // Automation & utilities
  { name: "Raycast", kind: "simple", ref: "raycast", group: "Automation & utilities" },
  { name: "AutoHotkey", kind: "simple", ref: "autohotkey", group: "Automation & utilities" },
  { name: "PowerToys", kind: "asset", ref: powertoysAsset.url, group: "Automation & utilities" },
  // AI
  { name: "ChatGPT", kind: "asset", ref: chatgptAsset.url, group: "AI" },
  { name: "Claude", kind: "simple", ref: "anthropic", group: "AI" },
  { name: "Perplexity", kind: "simple", ref: "perplexity", group: "AI" },
  { name: "Gemini", kind: "simple", ref: "googlegemini", group: "AI" },
  // Files & storage
  { name: "Google Drive", kind: "simple", ref: "googledrive", group: "Files & storage" },
  { name: "OneDrive", kind: "asset", ref: onedriveAsset.url, group: "Files & storage" },
  { name: "Finder", kind: "asset", ref: finderAsset.url, group: "Files & storage" },
  { name: "File Explorer", kind: "asset", ref: fileexplorerAsset.url, group: "Files & storage" },
  // Writing & email
  { name: "Gmail", kind: "simple", ref: "gmail", group: "Writing & email" },
  { name: "Google Docs", kind: "simple", ref: "googledocs", group: "Writing & email" },
];

const groups = [...new Set(apps.map((a) => a.group))];

function iconSrc(app: App): string {
  if (app.kind === "simple") return `https://cdn.simpleicons.org/${app.ref}`;
  if (app.kind === "devicon") return `${DEVICON}/${app.ref}/${app.ref}-original.svg`;
  return app.ref;
}

function AppIcon({ app }: { app: App }) {
  return (
    <div className="group flex flex-col items-center gap-2.5">
      <div className="flex h-14 w-14 items-center justify-center transition-transform duration-200 group-hover:-translate-y-1 sm:h-16 sm:w-16">
        <img
          src={iconSrc(app)}
          alt={`${app.name} icon`}
          title={app.name}
          loading="lazy"
          className="h-11 w-11 object-contain drop-shadow-[0_5px_9px_rgba(15,23,42,0.16)] transition-all duration-200 group-hover:drop-shadow-[0_8px_14px_rgba(15,23,42,0.22)] sm:h-12 sm:w-12"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.visibility = "hidden";
          }}
        />
      </div>
      <span className="max-w-[5.5rem] text-center text-[0.72rem] leading-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {app.name}
      </span>
    </div>
  );
}

export function MyAppsSection() {
  return (
    <Section band id="my-apps">
      <SectionHead
        eyebrow="My Apps"
        title="I work inside the same apps you do."
        lead="Creative tools, note apps, task managers, AI assistants, and file systems. On both macOS and Windows. If it is part of your day, it is part of the diagnosis."
      />

      <div className="mt-14 space-y-12">
        {groups.map((group, groupIndex) => {
          const groupApps = apps.filter((a) => a.group === group);
          return (
            <div key={group}>
              <Reveal delay={groupIndex * 60}>
                <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {group}
                </p>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 sm:gap-x-8">
                {groupApps.map((app, i) => (
                  <Reveal key={app.name} delay={groupIndex * 60 + i * 45}>
                    <AppIcon app={app} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        {/* and more */}
        <Reveal delay={groups.length * 60}>
          <div className="flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm font-medium text-muted-foreground">
              <Plus className="h-4 w-4 text-primary" />
              and more
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mx-auto mt-14 max-w-2xl text-center text-[0.975rem] text-muted-foreground">
        Do not see your app here? That is fine. The systems matter more than the software, and I
        learn new tools quickly.
      </p>
    </Section>
  );
}
