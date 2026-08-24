import { Section, SectionHead } from "./primitives";
import { Reveal } from "./Reveal";

type App = { name: string; slug?: string; group: string };

const apps: App[] = [
  // Creative
  { name: "Premiere Pro", slug: "adobepremierepro", group: "Creative" },
  { name: "After Effects", slug: "adobeaftereffects", group: "Creative" },
  { name: "Photoshop", slug: "adobephotoshop", group: "Creative" },
  { name: "Illustrator", slug: "adobeillustrator", group: "Creative" },
  { name: "Lightroom", slug: "adobelightroom", group: "Creative" },
  { name: "DaVinci Resolve", slug: "davinciresolve", group: "Creative" },
  { name: "Blender", slug: "blender", group: "Creative" },
  { name: "Figma", slug: "figma", group: "Creative" },
  { name: "Canva", slug: "canva", group: "Creative" },
  { name: "Audacity", slug: "audacity", group: "Creative" },
  { name: "OBS Studio", slug: "obsstudio", group: "Creative" },
  { name: "CapCut", slug: "capcut", group: "Creative" },
  // Notes and knowledge
  { name: "Obsidian", slug: "obsidian", group: "Notes & knowledge" },
  { name: "Notion", slug: "notion", group: "Notes & knowledge" },
  { name: "Apple Notes", group: "Notes & knowledge" },
  { name: "Craft", group: "Notes & knowledge" },
  { name: "Readwise", slug: "readwise", group: "Notes & knowledge" },
  { name: "Raindrop", slug: "raindropio", group: "Notes & knowledge" },
  { name: "Zotero", slug: "zotero", group: "Notes & knowledge" },
  { name: "Anki", slug: "anki", group: "Notes & knowledge" },
  // Tasks and planning
  { name: "Todoist", slug: "todoist", group: "Tasks & planning" },
  { name: "Things", group: "Tasks & planning" },
  { name: "Asana", slug: "asana", group: "Tasks & planning" },
  { name: "Trello", slug: "trello", group: "Tasks & planning" },
  { name: "ClickUp", slug: "clickup", group: "Tasks & planning" },
  { name: "Google Calendar", slug: "googlecalendar", group: "Tasks & planning" },
  // Automation and utilities
  { name: "Raycast", slug: "raycast", group: "Automation & utilities" },
  { name: "Alfred", slug: "alfred", group: "Automation & utilities" },
  { name: "Keyboard Maestro", group: "Automation & utilities" },
  { name: "AutoHotkey", slug: "autohotkey", group: "Automation & utilities" },
  { name: "PowerToys", group: "Automation & utilities" },
  { name: "Hazel", group: "Automation & utilities" },
  { name: "Zapier", slug: "zapier", group: "Automation & utilities" },
  { name: "Make", slug: "make", group: "Automation & utilities" },
  // AI
  { name: "ChatGPT", slug: "openai", group: "AI" },
  { name: "Claude", slug: "anthropic", group: "AI" },
  { name: "Perplexity", slug: "perplexity", group: "AI" },
  { name: "Gemini", slug: "googlegemini", group: "AI" },
  // Files and storage
  { name: "Dropbox", slug: "dropbox", group: "Files & storage" },
  { name: "Google Drive", slug: "googledrive", group: "Files & storage" },
  { name: "OneDrive", slug: "microsoftonedrive", group: "Files & storage" },
  { name: "Finder", group: "Files & storage" },
  { name: "File Explorer", group: "Files & storage" },
  // Writing and comms
  { name: "Slack", slug: "slack", group: "Writing & comms" },
  { name: "Gmail", slug: "gmail", group: "Writing & comms" },
  { name: "Notion Calendar", group: "Writing & comms" },
  { name: "Google Docs", slug: "googledocs", group: "Writing & comms" },
];

const groups = [...new Set(apps.map((a) => a.group))];

function AppIcon({ app }: { app: App }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/60 group-hover:shadow-[var(--shadow-lift)] sm:h-16 sm:w-16">
        {app.slug ? (
          <img
            src={`https://cdn.simpleicons.org/${app.slug}`}
            alt={`${app.name} icon`}
            loading="lazy"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
        ) : null}
        <span
          style={{ display: app.slug ? "none" : "flex" }}
          className="h-7 w-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-primary"
        >
          {app.name.slice(0, 2)}
        </span>
      </div>
      <span className="max-w-[5.5rem] text-center text-[0.7rem] leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
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
                <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {group}
                </p>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-6 sm:gap-x-7">
                {groupApps.map((app, i) => (
                  <Reveal key={app.name} delay={groupIndex * 60 + i * 45}>
                    <AppIcon app={app} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-14 max-w-2xl text-center text-[0.975rem] text-muted-foreground">
        Do not see your app here? That is fine. The systems matter more than the software, and I
        learn new tools quickly.
      </p>
    </Section>
  );
}
