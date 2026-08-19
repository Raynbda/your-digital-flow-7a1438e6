import type { ReactNode } from "react";

export function Section({
  id,
  band = false,
  children,
}: {
  id?: string;
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`w-full px-5 py-20 sm:px-8 md:py-24 ${band ? "bg-band" : "bg-background"}`}
    >
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">{children}</p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      {lead ? <Lead>{lead}</Lead> : null}
    </div>
  );
}

export function ApplyButton({
  size = "lg",
  className = "",
  variant = "primary",
}: {
  size?: "lg" | "sm";
  className?: string;
  variant?: "primary" | "invert";
}) {
  const base =
    variant === "invert"
      ? "bg-background text-primary hover:bg-background/90"
      : "bg-primary text-primary-foreground hover:bg-primary-deep";
  return (
    <a
      href="#apply"
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold shadow-[var(--shadow-soft)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${base} ${
        size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
      } ${className}`}
    >
      Apply for 1:1 Workflow Optimization
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
      {children}
    </li>
  );
}
