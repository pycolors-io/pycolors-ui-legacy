import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Tag,
  CheckCircle2,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Release notes and product updates for PyColors UI. Clear versions, stable conventions, and documentation-first releases.',
  openGraph: {
    title: 'Changelog · PyColors UI',
    description:
      'Release notes and product updates for PyColors UI. Stable versions, predictable conventions.',
    url: '/changelog',
    images: ['/seo/og-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog · PyColors UI',
    description: 'Release notes and product updates for PyColors UI.',
    images: ['/seo/twitter-main.png'],
  },
};

type ChangelogStatus = 'Stable' | 'Beta';

type ChangelogItem = {
  version: string;
  title: string;
  dateLabel: string;
  dateISO: string;
  status: ChangelogStatus;
  releaseWeekLabel: string;
  summary: string;
  highlights: Array<{
    title: string;
    items: string[];
  }>;
  cta?: { label: string; href: string };
};

const CHANGELOG: ChangelogItem[] = [
  {
    version: 'v1.0.0',
    title: 'UI Core Foundation',
    dateLabel: 'Fri 9 Jan 2026',
    dateISO: '2026-01-09',
    status: 'Stable',
    releaseWeekLabel: 'Release Week (Mon 5 → Fri 9 Jan 2026)',
    summary:
      'Official v1.0 launch of PyColors UI: core components, docs baseline, and release hygiene — a serious, production-ready foundation.',
    highlights: [
      {
        title: 'UI Core Components',
        items: [
          'Button — consistent variants + sizing, loading/disabled states, accessible interactions.',
          'Input — stable sizing, error/helper states, consistent tokens.',
          'Badge — semantic variants, neutral + emphasis use-cases.',
          'Card — structural layout primitive with optional interactive states.',
          'Alert — purpose-driven messaging, minimal but expressive when needed.',
        ],
      },
      {
        title: 'Documentation Baseline',
        items: [
          'Every component ships with Preview / Usage / Code / Props.',
          'Predictable API surface with consistent conventions across components.',
          'Docs quality contract established for future releases.',
        ],
      },
      {
        title: 'Release Hygiene',
        items: [
          'Changelog page + Roadmap page shipped.',
          'Semantic versioning introduced and version bumped to v1.0.0.',
          'Release notes format standardized for future iterations.',
        ],
      },
    ],
    cta: { label: 'View roadmap', href: '/roadmap' },
  },
];

function StatusPill({ status }: { status: ChangelogStatus }) {
  const isStable = status === 'Stable';
  return (
    <Badge variant="secondary" className="gap-2">
      <span
        className={cn(
          'inline-flex h-1.5 w-1.5 rounded-full',
          isStable ? 'bg-success' : 'bg-warning'
        )}
      />
      {status}
    </Badge>
  );
}

function TimelineDot() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center">
      <div className="absolute inset-0 rounded-full border bg-card shadow-sm" />
      <div className="relative rounded-full border bg-background p-1.5">
        <CheckCircle2
          className="h-4 w-4 text-foreground"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1 bg-background text-foreground">
        <Container className="py-20 sm:py-20 lg:py-24">
          <header className="mx-auto w-full max-w-4xl text-center">
            <div className="flex justify-center">
              <Badge variant="secondary" className="gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                Product updates
              </Badge>
            </div>

            <h1 className="font-brand mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Changelog
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              Product updates, improvements, and fixes for PyColors
              UI. Clear versions, stable conventions, and
              documentation-first releases.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/docs">Read the docs</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/roadmap">View roadmap</Link>
              </Button>
            </div>
          </header>

          {/* Timeline */}
          <section className="mx-auto mt-10 w-full max-w-5xl">
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-4 top-0 h-full w-px bg-border/70 sm:left-[18px]"
                aria-hidden="true"
              />

              <div className="space-y-8">
                {CHANGELOG.map((entry) => (
                  <article
                    key={entry.version}
                    className="relative pl-14"
                  >
                    <div className="absolute left-0 top-1">
                      <TimelineDot />
                    </div>

                    <Card className="overflow-hidden">
                      <CardHeader className="border-b bg-card/60">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge
                                variant="secondary"
                                className="font-medium"
                              >
                                {entry.version}
                              </Badge>
                              <StatusPill status={entry.status} />
                            </div>

                            <div className="space-y-1">
                              <h2 className="font-brand text-xl font-semibold tracking-tight">
                                {entry.title}
                              </h2>

                              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                  <Calendar
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  <time dateTime={entry.dateISO}>
                                    {entry.dateLabel}
                                  </time>
                                </span>

                                <span className="inline-flex items-center gap-1.5">
                                  <Tag
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  {entry.releaseWeekLabel}
                                </span>
                              </div>
                            </div>
                          </div>

                          {entry.cta ? (
                            <Button
                              asChild
                              variant="outline"
                              className="sm:mt-1"
                            >
                              <Link href={entry.cta.href}>
                                {entry.cta.label}
                                <ArrowRight
                                  className="ml-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                              </Link>
                            </Button>
                          ) : null}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 p-6">
                        <p className="max-w-3xl text-pretty text-sm text-muted-foreground sm:text-base">
                          {entry.summary}
                        </p>

                        <div className="space-y-6">
                          {entry.highlights.map((block) => (
                            <div
                              key={block.title}
                              className="space-y-2"
                            >
                              <h3 className="text-sm font-semibold tracking-tight">
                                {block.title}
                              </h3>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {block.items.map((it) => (
                                  <li key={it} className="flex gap-2">
                                    <span
                                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60"
                                      aria-hidden="true"
                                    />
                                    <span className="text-pretty">
                                      {it}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl border bg-muted/30 p-4">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              Why v1.0?
                            </span>{' '}
                            Stable APIs, consistent conventions, and
                            complete docs — a serious baseline for
                            building real products.
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button asChild>
                            <Link href="/docs/ui">
                              Browse components{' '}
                              <ArrowRight
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                              />
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link href="/docs">Read docs</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Note: changelog entries reflect shipped work; internal
              tasks and refactors may be grouped into a single release
              item.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
