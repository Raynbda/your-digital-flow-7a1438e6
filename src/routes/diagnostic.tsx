import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import {
  visibleQuestions,
  type Answers,
  type Question,
} from "@/lib/diagnostic-questions";
import { diagnose } from "@/lib/diagnostic-scoring";
import {
  CONTACT_EMAIL,
  PAYMENT_LINK,
  diagnoses,
  offer,
  serviceCoverage,
} from "@/lib/diagnosis-content";
import { Slider } from "@/components/ui/slider";
import { saveDiagnostic } from "@/lib/diagnostic.functions";

function RoiWidget() {
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState<string>("");
  const monthly = Math.round(hours * 4.33);
  const yearlyHours = Math.round(hours * 52);
  const rateValue = Number(rate);
  const yearlyMoney =
    rate.trim() !== "" && Number.isFinite(rateValue) && rateValue > 0
      ? Math.round(yearlyHours * rateValue)
      : null;

  return (
    <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">The cost</p>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-card-foreground sm:text-3xl">
        What is this actually costing you?
      </h2>
      <div className="mt-8 space-y-8">
        <div>
          <label htmlFor="roi-hours" className="block text-sm font-medium text-card-foreground">
            Roughly how many hours a week do you lose to disorganization, tool-switching, or redoing work?
          </label>
          <div className="mt-4 flex items-center gap-5">
            <Slider
              id="roi-hours"
              value={[hours]}
              onValueChange={(v) => setHours(v[0] ?? 0)}
              min={0}
              max={15}
              step={1}
              className="flex-1"
            />
            <span className="w-16 shrink-0 text-right text-2xl font-bold tabular-nums text-primary">
              {hours}
              {hours === 15 ? "+" : ""}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="roi-rate" className="block text-sm font-medium text-card-foreground">
            What's your hourly rate or project value?{" "}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-input bg-background px-4 py-3 focus-within:ring-2 focus-within:ring-ring/40">
            <span className="text-muted-foreground">$</span>
            <input
              id="roi-rate"
              type="number"
              min={0}
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="50"
              className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/70"
            />
            <span className="text-sm text-muted-foreground">/ hour</span>
          </div>
        </div>
      </div>
      <p
        aria-live="polite"
        className="mt-8 text-pretty text-xl font-bold leading-snug tracking-tight text-card-foreground sm:text-2xl"
      >
        That's ~<span className="text-primary">{monthly} hours a month</span>
        {yearlyMoney !== null ? (
          <>
            , or ~<span className="text-primary">${yearlyMoney.toLocaleString("en-US")}/year</span>
          </>
        ) : (
          <>
            , or ~<span className="text-primary">{yearlyHours} hours a year</span>
          </>
        )}
        , quietly disappearing.
      </p>
    </div>
  );
}

const title = "Workflow Diagnostic - Creator OS";
const description =
  "Answer a short questionnaire and find out what is holding your digital work back: speed, organization, reuse, information, or workflow.";

export const Route = createFileRoute("/diagnostic")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { preview?: string | undefined } => {
    const preview = search["preview"] as string | undefined;
    return preview ? { preview } : {};
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://creator-os.the-control-panel.com/diagnostic" },
      { property: "og:image", content: "https://creator-os.the-control-panel.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://creator-os.the-control-panel.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://creator-os.the-control-panel.com/diagnostic" }],
  }),
  component: DiagnosticPage,
});

// Sample answers used only by the ?preview=results shortcut so the final
// results page can be viewed without walking through the full form.
const SAMPLE_ANSWERS: Answers = {
  work_types: ["Creating content", "Writing", "Research"],
  apps: "Chrome, Notion, Obsidian, Claude, DaVinci Resolve",
  digital_share: "Almost everything",
  problems: [
    "I repeatedly do things manually that feel like they should be faster",
    "I know I've saved something but can't find it",
    "I keep rebuilding things I've already made",
    "Every project starts from scratch",
  ],
  main_problem: "Doing things manually / too slowly",
  cond_manual:
    "Exporting videos with the same settings every time, renaming files by hand, copying tags between uploads.",
  wish: "Feel like everything I make has a permanent home and a faster path to get there.",
  find_ease: "I regularly spend several minutes looking",
  files_org: "I have a structure, but it has become messy",
  notes_system: "I use several different systems",
  save_behavior: "I save it somewhere, but often forget about it",
  reuse_level: "I reuse some things, but inconsistently",
  project_start: "I have a rough process but still figure things out each time",
  project_end: "Some things get reused, while others disappear into folders",
  app_discovery: "Pretty often",
  apps_to_learn: "Notion, DaVinci Resolve, Obsidian",
  repetitive_handling: "I know I should create systems, but haven't",
  task_tools: ["Task manager", "Notes app", "Notion", "Calendar"],
  next_action_freq: "A few times a day",
  lose_place_freq: "Every day",
  one_thing: "Stop losing time recreating things I've already made.",
  better_outcomes: [
    "Spend less time on repetitive tasks",
    "Reuse more of my previous work",
    "Find things instantly",
  ],
  seriousness: "I'm actively looking for a better system",
  interest: "Yes, that's exactly what I'm looking for",
};

function isAnswered(q: Question, answers: Answers) {
  if (q.optional) return true;
  const value = answers[q.id];
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "string" && value.trim().length > 0;
}

function DiagnosticPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [newsletter, setNewsletter] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const save = useServerFn(saveDiagnostic);
  const list = useMemo(() => visibleQuestions(answers), [answers]);
  const total = list.length + 1;
  const current = list[Math.min(step, list.length - 1)];
  const onContactStep = step >= list.length;
  const ranking = useMemo(() => diagnose(answers), [answers]);

  // Preview shortcut: /diagnostic?preview=results renders the final results
  // page with a sample answer set, so the end state can be reviewed without
  // filling the whole form each time.
  const previewResults = Route.useSearch().preview === "results";
  const previewRanking = useMemo(() => diagnose(SAMPLE_ANSWERS), []);
  if (previewResults) {
    return (
      <Results
        primary={previewRanking.primary}
        secondary={previewRanking.secondary}
        answers={SAMPLE_ANSWERS}
      />
    );
  }

  const setValue = (id: string, value: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const toggleMulti = (q: Question, option: string) => {
    const currentValue = (answers[q.id] as string[] | undefined) ?? [];
    const has = currentValue.includes(option);
    if (!has && q.maxSelect && currentValue.length >= q.maxSelect) return;
    setValue(q.id, has ? currentValue.filter((o) => o !== option) : [...currentValue, option]);
  };

  const submit = async () => {
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError(null);
    setSaving(true);
    setSaveError(null);
    try {
      await save({
        data: {
          first_name: name.trim().slice(0, 100),
          email: trimmed,
          answers,
          scores: ranking.scores,
          primary: ranking.primary,
          secondary: ranking.secondary,
          seriousness: (answers["seriousness"] as string) ?? null,
          interest: (answers["interest"] as string) ?? null,
          newsletter_opt_in: newsletter,
        },
      });
      setDone(true);
    } catch {
      setSaveError("Something went wrong saving your answers. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (done)
    return (
      <Results
        primary={ranking.primary}
        secondary={ranking.secondary}
        answers={answers}
      />
    );

  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[760px] items-center justify-between px-5 py-3">
          <Link to="/" className="text-sm font-bold tracking-tight text-foreground">
            Creator OS
          </Link>
          {started ? (
            <span className="text-xs font-medium text-muted-foreground">
              Step {Math.min(step + 1, total)} of {total}
            </span>
          ) : null}
        </div>
        {started ? (
          <div className="h-1 w-full bg-secondary">
            <div
              className="h-1 bg-primary transition-all duration-300"
              style={{ width: `${((step + (onContactStep ? 1 : 0)) / total) * 100}%` }}
            />
          </div>
        ) : null}
      </header>

      <div className="mx-auto w-full max-w-[760px] px-5 py-14">
        {!started ? (
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Free diagnostic
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              See Where Your Workflow Is <span className="text-primary">Slowing You Down</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Answer a few questions about how you work, the tools you use, and where things currently feel harder than they should. I’ll use your answers to identify where your biggest opportunities are.
            </p>
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Start the diagnostic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-sm text-muted-foreground">Takes about 10 minutes.</p>
          </div>
        ) : onContactStep ? (
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Where should I send your diagnosis?
            </h2>
            <p className="mt-3 text-muted-foreground">
              You will see your result right away. I use your email to send the full written
              breakdown.
            </p>
            <div className="mt-8 space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Name (optional)</span>
                <input
                  value={name}
                  maxLength={100}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Email</span>
                <input
                  value={email}
                  type="email"
                  maxLength={255}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
              {emailError ? <p className="text-sm text-destructive">{emailError}</p> : null}
              {saveError ? <p className="text-sm text-destructive">{saveError}</p> : null}
              <label className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--primary)]"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  By submitting this diagnostic you will also be signed up to the newsletter, where
                  I share workflow systems, tools, and templates. You can unsubscribe at any time.
                </span>
              </label>
            </div>
            <NavRow
              onBack={() => setStep((s) => s - 1)}
              nextLabel={saving ? "Sending" : "See my diagnosis"}
              nextDisabled={saving}
              nextIcon={saving ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
              onNext={submit}
            />
          </div>
        ) : current ? (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {current.section}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
              {current.title}
            </h2>
            {current.help ? (
              <p className="mt-3 text-sm text-muted-foreground">{current.help}</p>
            ) : null}

            <div className="mt-8">
              <QuestionField
                question={current}
                answers={answers}
                setValue={setValue}
                toggleMulti={toggleMulti}
              />
            </div>

            <NavRow
              onBack={step === 0 ? undefined : () => setStep((s) => s - 1)}
              nextLabel="Continue"
              nextDisabled={!isAnswered(current, answers)}
              onNext={() => setStep((s) => s + 1)}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}

function QuestionField({
  question,
  answers,
  setValue,
  toggleMulti,
}: {
  question: Question;
  answers: Answers;
  setValue: (id: string, value: string | string[]) => void;
  toggleMulti: (q: Question, option: string) => void;
}) {
  if (question.type === "text" || question.type === "longtext") {
    const value = (answers[question.id] as string | undefined) ?? "";
    return question.type === "longtext" ? (
      <textarea
        value={value}
        rows={5}
        maxLength={2000}
        placeholder={question.placeholder}
        onChange={(e) => setValue(question.id, e.target.value)}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"
      />
    ) : (
      <input
        value={value}
        maxLength={500}
        placeholder={question.placeholder}
        onChange={(e) => setValue(question.id, e.target.value)}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"
      />
    );
  }

  const options = question.options ?? [];
  if (question.type === "single") {
    const value = answers[question.id] as string | undefined;
    return (
      <div className="grid gap-2.5">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setValue(question.id, option)}
              className={`flex items-center justify-between gap-3 rounded-xl border p-4 text-left text-[0.975rem] transition-colors ${
                active
                  ? "border-primary bg-accent text-foreground"
                  : "border-border bg-card text-card-foreground hover:border-primary/50"
              }`}
            >
              {option}
              {active ? <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> : null}
            </button>
          );
        })}
      </div>
    );
  }

  const selected = (answers[question.id] as string[] | undefined) ?? [];
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {options.map((option) => {
        const active = selected.includes(option);
        const blocked =
          !active && question.maxSelect ? selected.length >= question.maxSelect : false;
        return (
          <button
            key={option}
            type="button"
            disabled={blocked}
            onClick={() => toggleMulti(question, option)}
            className={`flex items-center justify-between gap-3 rounded-xl border p-4 text-left text-[0.95rem] transition-colors ${
              active
                ? "border-primary bg-accent text-foreground"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            } ${blocked ? "opacity-40" : ""}`}
          >
            {option}
            {active ? <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> : null}
          </button>
        );
      })}
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  nextLabel,
  nextDisabled,
  nextIcon,
}: {
  onBack?: (() => void) | undefined;
  onNext: () => void;
  nextLabel: string;
  nextDisabled?: boolean | undefined;
  nextIcon?: React.ReactNode | undefined;
}) {
  return (
    <div className="mt-10 flex items-center justify-between gap-3">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-40"
      >
        {nextLabel}
        {nextIcon ?? <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}

function Results({
  primary,
  secondary,
  answers,
}: {
  primary: keyof typeof diagnoses;
  secondary: keyof typeof diagnoses | null;
  answers: Answers;
}) {
  const d = diagnoses[primary];
  const s = secondary ? diagnoses[secondary] : null;

  const appsRaw = (answers["apps"] as string | undefined) ?? "";
  const apps = appsRaw
    .split(/[,\n]/)
    .map((a) => a.trim())
    .filter((a) => a.length > 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[820px] px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Your diagnosis</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
          {d.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{d.summary}</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {d.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-[0.95rem] text-card-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        <Block title={d.lookAtFirstTitle} items={d.lookAtFirst} />
        <Block title="What you can do today" items={d.doToday} />
        <Block title="Your first action" items={d.firstAction} />

        {apps.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-foreground">Your current tools</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These are the apps you told me you use right now.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {apps.map((app) => (
                <li
                  key={app}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {app}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {s ? (
          <div className="mt-10 rounded-2xl bg-panel p-6 text-panel-foreground sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-glow">
              Secondary opportunity: {s.label}
            </p>
            <p className="mt-3 leading-relaxed opacity-85">{d.secondary}</p>
          </div>
        ) : null}

        <RoiWidget />

        <div className="mt-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {offer.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              Get your Creator OS built
            </h2>
            <p className="mt-3 text-muted-foreground">{d.ifWeWorked}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border-2 border-primary bg-card shadow-[var(--shadow-soft)]">
            <div className="grid gap-8 p-6 sm:p-9 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground">
                  {offer.badge}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-card-foreground">{offer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {offer.subtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] text-card-foreground">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-band p-6 text-center">
                <p className="text-5xl font-extrabold tracking-tight text-foreground">
                  {offer.price}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">{offer.priceNote}</p>
                <a
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                >
                  {offer.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  {offer.guarantee}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Digital%20Work%20OS%20-%20question`}
                  className="mt-3 text-xs text-muted-foreground underline"
                >
                  Email me a question first
                </a>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {serviceCoverage.map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-bold text-card-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>


        <Link to="/" className="mt-10 inline-block text-sm text-muted-foreground underline">
          Back to the main page
        </Link>
      </div>
    </main>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-[0.95rem] text-card-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
