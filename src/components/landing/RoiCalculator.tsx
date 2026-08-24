import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { ApplyButton, Section } from "./primitives";

export function RoiCalculator() {
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
    <Section id="roi">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 sm:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          The cost
        </p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-card-foreground sm:text-4xl">
          What is this actually costing you?
        </h2>

        <div className="mt-10 space-y-10">
          <div>
            <label htmlFor="roi-hours" className="block text-sm font-medium text-card-foreground">
              Roughly how many hours a week do you lose to disorganization, tool-switching, or
              redoing work?
            </label>
            <div className="mt-5 flex items-center gap-5">
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
              What&rsquo;s your hourly rate or project value?{" "}
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
          className="mt-10 text-pretty text-2xl font-bold leading-snug tracking-tight text-card-foreground sm:text-3xl"
        >
          That&rsquo;s ~<span className="text-primary">{monthly} hours a month</span>
          {yearlyMoney !== null ? (
            <>
              , or ~
              <span className="text-primary">${yearlyMoney.toLocaleString("en-US")}/year</span>
            </>
          ) : (
            <>
              , or ~<span className="text-primary">{yearlyHours} hours a year</span>
            </>
          )}
          , quietly disappearing.
        </p>

        <div className="mt-8">
          <ApplyButton />
        </div>
      </div>
    </Section>
  );
}
