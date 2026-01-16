import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { MarketingShell } from '@/components/shells/marketing-shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { APP_MAJOR, formatVersion } from '@/lib/version';

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const highlights = [
  {
    title: 'Production-first components',
    description:
      'Radix-based primitives with consistent variants, tokens, and docs — designed to ship real products.',
  },
  {
    title: 'Semantic tokens & theming',
    description:
      'A clean token system (bg-card, border-border, text-muted-foreground) so themes scale without breaking UI density.',
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
    status: 'v1.0',
  },
  {
    name: 'Input',
    desc: 'Label, helper, error, icons — form-ready patterns.',
    href: '/docs/ui/input',
    status: 'v1.0',
  },
  {
    name: 'Badge',
    desc: 'Default / secondary / outline — lightweight labeling.',
    href: '/docs/ui/badge',
    status: 'v1.0',
  },
  {
    name: 'Card',
    desc: 'Header / content / footer — layout foundation for UIs.',
    href: '/docs/ui/card',
    status: 'v1.0',
  },
  {
    name: 'Alert',
    desc: 'Info / success / warning / destructive — clear feedback.',
    href: '/docs/ui/alert',
    status: 'v1.0',
  },
];

const quickLinks = [
  { label: 'Getting started', href: '/docs' },
  { label: 'Components', href: '/docs/ui' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'License', href: '/license' },
];

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {label}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function TrustPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
      {label}
    </span>
  );
}

export default function HomePage() {
  return (
    <MarketingShell>
      <div className="mx-auto w-full max-w-5xl">
        <section className="relative py-10 sm:py-14 lg:py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary" className="gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {APP_MAJOR} · stable baseline
              </Badge>

              <Badge variant="outline" className="gap-2">
                Docs-first
              </Badge>

              <a
                href="https://github.com/pycolors-io/pycolors-ui"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open the PyColors UI repository on GitHub"
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-sm text-xs text-muted-foreground transition-colors hover:text-foreground',
                  focusRing
                )}
              >
                GitHub
                <ExternalLink
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="space-y-4">
              <h1 className="font-brand text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                A minimal UI system
                <span className="block font-bold">
                  built to ship SaaS.
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
                PyColors UI is a documentation-first design system
                built on semantic tokens and Radix primitives — so you
                move faster without losing consistency.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/docs">Explore the docs</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/docs/ui">Browse components</Link>
              </Button>

              <Button asChild variant="secondary">
                <Link href="/roadmap">View roadmap</Link>
              </Button>
            </div>

            <div className="mt-2 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              <Stat label="Current version" value={formatVersion()} />
              <Stat
                label="Docs format"
                value="Preview → Usage → Code → Props"
              />
              <Stat label="Release cadence" value="Regular updates" />
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-1">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'rounded-sm text-xs text-muted-foreground transition-colors hover:text-foreground',
                    focusRing
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-8 sm:py-10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div className="space-y-1">
              <h2 className="font-brand text-lg font-semibold tracking-tight">
                Highlights
              </h2>
              <p className="text-sm text-muted-foreground">
                A focused baseline for building product UIs with
                predictable patterns.
              </p>
            </div>
          </div>

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
              <h2 className="font-brand text-lg font-semibold tracking-tight">
                Who it’s for
              </h2>
              <p className="text-sm text-muted-foreground">
                Built for people shipping real interfaces: SaaS apps,
                dashboards, and marketing sites.
              </p>
            </div>

            <Button
              asChild
              variant="secondary"
              className="sm:self-start"
            >
              <Link href="/docs">Get started</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-5">
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  SaaS products
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dashboards, settings, billing pages, CRUD flows —
                  with predictable UI density and tokens.
                </p>
              </div>
            </Card>

            <Card className="p-5">
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  Data-heavy dashboards
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Layout primitives that scale to tables, filters,
                  pagination, empty states, and system feedback.
                </p>
              </div>
            </Card>

            <Card className="p-5">
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  Marketing sites
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Landing pages that stay consistent with your app UI
                  — typography, spacing, and components.
                </p>
              </div>
            </Card>
          </div>
        </section>
        <section className="py-8 sm:py-10">
          <Card className="p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  Quick start
                </h2>
                <p className="text-sm text-muted-foreground">
                  Clone the repo, run docs locally, and start copying
                  components.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <TrustPill label="Node 18+" />
                  <TrustPill label="PNPM recommended" />
                  <TrustPill label="Docs-first workflow" />
                </div>
              </div>

              <div className="w-full sm:max-w-md">
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex h-2 w-2 rounded-full bg-rose-500"
                        aria-hidden="true"
                      />
                      <span
                        className="inline-flex h-2 w-2 rounded-full bg-amber-500"
                        aria-hidden="true"
                      />
                      <span
                        className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-xs text-muted-foreground">
                        terminal
                      </span>
                    </div>

                    <a
                      href="https://github.com/pycolors-io/pycolors-ui"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Open the PyColors UI repository on GitHub"
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-sm text-xs text-muted-foreground transition-colors hover:text-foreground',
                        focusRing
                      )}
                    >
                      GitHub
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <div className="px-4 py-4">
                    <pre className="font-mono overflow-x-auto text-xs leading-relaxed text-foreground">{`git clone https://github.com/pycolors-io/pycolors-ui.git
cd pycolors-ui
pnpm install
pnpm dev`}</pre>

                    <div className="mt-3 rounded-lg border border-border bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
                      Then open{' '}
                      <span className="font-mono text-foreground">
                        http://localhost:3000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-1">
              <h2 className="font-brand text-lg font-semibold tracking-tight">
                What’s in {APP_MAJOR}
              </h2>
              <p className="text-sm text-muted-foreground">
                The core primitives to build real SaaS UIs —
                documented, consistent, extensible.
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
                className={cn(
                  'group rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/30',
                  focusRing
                )}
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

                <div className="mt-3 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  Open docs →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            Next up: Modal / Tabs / Toast / Dropdown — tracked in{' '}
            <Link
              href="/roadmap"
              className={cn(
                'rounded-sm underline underline-offset-4 hover:text-foreground',
                focusRing
              )}
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
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  Start here
                </h2>
                <p className="text-sm text-muted-foreground">
                  Build your first screen with PyColors UI — then
                  follow the changelog for updates.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <TrustPill label="Public roadmap" />
                  <TrustPill label="Changelog updates" />
                  <TrustPill label="Open-source repo" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/docs">Read the docs</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/license">License</Link>
                </Button>

                <Button asChild variant="secondary">
                  <a
                    href="https://github.com/pycolors-io/pycolors-ui"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open the PyColors UI repository on GitHub"
                  >
                    View repository
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Building in public. Shipping consistently.
          </p>
        </section>
      </div>
    </MarketingShell>
  );
}
