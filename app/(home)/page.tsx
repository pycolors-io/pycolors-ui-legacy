import { MarketingShell } from '@/components/shells/marketing-shell';

export default function HomePage() {
  return (
    <MarketingShell>
      <section className="space-y-6 text-center sm:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          PyColors UI v1 · Design system in progress
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ship modern React interfaces
            <span className="block font-bold">
              with a minimal, open UI kit.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
            PyColors UI combines a clean design system, Radix-based
            components, and production-ready docs so you can focus on
            your product, not your primitives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/docs"
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Explore the docs
          </a>
          <a
            href="https://github.com/pycolors-io/pycolors-ui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </MarketingShell>
  );
}
