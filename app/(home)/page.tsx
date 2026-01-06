import Link from 'next/link';

import { MarketingShell } from '@/components/shells/marketing-shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const highlights = [
  {
    title: 'Production-first components',
    description:
      'Radix-based primitives with consistent variants, tokens, and docs — built to ship real products.',
  },
  {
    title: 'Design tokens & semantics',
    description:
      'A clean token system (bg-card, border-border, text-muted-foreground) to scale themes and UI density.',
  },
  {
    title: 'Docs that don’t waste time',
    description:
      'Preview → Usage → Code → Props. Copy/paste fast, then adapt with confidence.',
  },
];

const v1Components = [
  {
    name: 'Button',
    desc: 'Variants + sizes, asChild support, consistent tokens.',
    href: '/docs/ui/button',
    status: 'Ready',
  },
  {
    name: 'Input',
    desc: 'Label, helper, error, icons — form-ready patterns.',
    href: '/docs/ui/input',
    status: 'v1',
  },
  {
    name: 'Badge',
    desc: 'Default / secondary / outline — lightweight labeling.',
    href: '/docs/ui/badge',
    status: 'v1',
  },
  {
    name: 'Card',
    desc: 'Header / content / footer — layout foundation for UIs.',
    href: '/docs/ui/card',
    status: 'v1',
  },
  {
    name: 'Alert',
    desc: 'Info / success / warning / destructive — clear feedback.',
    href: '/docs/ui/alert',
    status: 'v1',
  },
];

const quickLinks = [
  { label: 'Getting started', href: '/docs' },
  { label: 'Components', href: '/docs/ui' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Roadmap', href: '/roadmap' },
];

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {label}
    </span>
  );
}

export default function HomePage() {
  return (
    <MarketingShell>
      <div className="mx-auto w-full max-w-5xl">
        {/* HERO */}
        <section className="relative py-10 sm:py-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-[-220px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute left-1/2 top-[120px] h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-muted/25 blur-3xl" />
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary" className="gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                PyColors UI v1 · shipping Jan 2026
              </Badge>

              <a
                href="https://github.com/pycolors-io/pycolors-ui"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub ↗
              </a>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Ship modern React interfaces
                <span className="block font-bold">
                  with a minimal UI kit.
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
                PyColors UI is a documentation-first design system
                built on semantic tokens, Radix primitives, and
                production-ready patterns — so you can move faster
                without losing consistency.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/docs">Explore the docs</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/docs/ui">Browse components</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="p-5">
                <div className="space-y-2">
                  <div className="text-sm font-medium">
                    {item.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-1">
              <div className="text-sm font-medium">
                What’s in v1.0
              </div>
              <p className="text-sm text-muted-foreground">
                The core primitives to build real SaaS UIs —
                documented, consistent, and extensible.
              </p>
            </div>

            <Button
              asChild
              variant="secondary"
              className="sm:self-start"
            >
              <Link href="/docs/ui">See all components</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {v1Components.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">
                      {c.name}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <StatusPill label={c.status} />
                  </div>
                </div>

                <div className="mt-3 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  Open docs →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            Next up: Modal / Tabs / Toast / Dropdown — tracked in{' '}
            <Link
              href="/roadmap"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Roadmap
            </Link>
            .
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <Card className="p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="text-sm font-medium">Start here</div>
                <p className="text-sm text-muted-foreground">
                  Get productive in minutes: install, theme, and ship
                  your first screen with PyColors UI.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/docs">Quick start</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://github.com/pycolors-io/pycolors-ui"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View repository
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </MarketingShell>
  );
}
