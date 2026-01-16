import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight,
  Boxes,
  LayoutTemplate,
  Sparkles,
  Workflow,
  ShieldCheck,
  FileText,
  Zap,
} from 'lucide-react';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/layout/site-header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Production-ready templates aligned with the PyColors UI direction. Early releases ship fast today, with progressive migration to PyColors UI.',
  alternates: { canonical: '/templates' },
  openGraph: {
    title: 'Templates · PyColors UI',
    description:
      'Production-ready templates aligned with the PyColors UI direction. Early releases ship fast today, with progressive migration to PyColors UI.',
    url: '/templates',
    images: ['/seo/og-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templates · PyColors UI',
    description:
      'Production-ready templates aligned with the PyColors UI direction. Early releases ship fast today, with progressive migration to PyColors UI.',
    images: ['/seo/twitter-main.png'],
  },
};

type Template = {
  name: string;
  description: string;
  badge: 'Early' | 'Planned';
  migrationNote: string;
  href: string;
  tags: string[];
};

const templates: Template[] = [
  {
    name: 'NA-AI Landing Page',
    description:
      'A commercial landing page template for AI and SaaS products. Designed for clarity, conversion, and real-world usage.',
    badge: 'Early',
    migrationNote: 'Usable today — migration to PyColors UI planned.',
    href: '/templates/na-ai',
    tags: ['Landing', 'SaaS', 'Tailwind'],
  },
];

const principles = [
  {
    title: 'Production-first',
    description:
      'Templates are opinionated starting points meant for real products, not demo-only kits.',
    icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Aligned with PyColors UI',
    description:
      'Same direction: semantic tokens, consistent structure, docs-first mindset.',
    icon: <Sparkles className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Blocks → Templates → Products',
    description:
      'Templates evolve from reusable blocks into sellable, product-grade packaging.',
    icon: <Boxes className="h-4 w-4" aria-hidden="true" />,
  },
];

const trust = [
  {
    title: 'Structured & documented',
    description:
      'Each template ships with a clear README, setup steps, and a predictable project structure.',
    icon: <FileText className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Accessibility & tokens',
    description:
      'Sane defaults (focus states, spacing, semantics) so you can ship without rebuilding foundations.',
    icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Fast integration',
    description:
      'Drop into a real Next.js app quickly, then adapt to your brand and product constraints.',
    icon: <Zap className="h-4 w-4" aria-hidden="true" />,
  },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {label}
    </span>
  );
}

function TemplateCard({ t }: { t: Template }) {
  const badgeVariant = t.badge === 'Early' ? 'secondary' : 'outline';

  return (
    <Card className="p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-brand text-lg font-semibold tracking-tight">
              {t.name}
            </h2>
            <Badge variant={badgeVariant} className="text-[11px]">
              {t.badge}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="hidden sm:block">
          <LayoutTemplate
            className="h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {t.tags.map((tag) => (
          <Pill key={tag} label={tag} />
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Status:</span>{' '}
        {t.migrationNote}
      </p>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Button asChild className={cn(focusRing)}>
          <Link href={t.href}>
            View details{' '}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1 bg-background text-foreground">
        <Container className="py-20 sm:py-20 lg:py-24">
          <header className="mx-auto w-full max-w-4xl text-center">
            <div className="flex justify-center">
              <Badge variant="secondary" className="gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                Templates & distribution
              </Badge>
            </div>

            <h1 className="font-brand mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Templates
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              Production-ready templates aligned with the PyColors UI
              direction. Early releases ship fast today — with
              progressive migration to PyColors UI.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className={cn(focusRing)}>
                <Link href="/roadmap">View roadmap</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn(focusRing)}
              >
                <Link href="/docs">Read the docs</Link>
              </Button>
            </div>
          </header>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {principles.map((p) => (
                <Card key={p.title} className="p-5">
                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    {p.icon}
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <Card className="p-6 sm:p-7">
              <div className="space-y-2">
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  Trust & shipping guarantees (the practical kind)
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Templates are built to reduce risk: clean structure,
                  sane defaults, and documentation you can actually
                  follow.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {trust.map((t) => (
                  <div key={t.title} className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-sm font-medium">
                      {t.icon}
                      {t.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  className={cn(focusRing)}
                >
                  <Link href="/license">
                    License details{' '}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className={cn(focusRing)}
                >
                  <a
                    href="https://github.com/pycolors-io/pycolors-ui"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See PyColors UI repo{' '}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <Card className="p-6 sm:p-7">
              <div className="space-y-2">
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  What are PyColors templates?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Templates are opinionated starting points for real
                  products: landing pages, dashboards, and SaaS
                  interfaces. They’re designed to save weeks of setup
                  and ship with production constraints in mind.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  'Structured layouts and real navigation patterns (not “demo pages”).',
                  'Clean conventions to scale: tokens, spacing, accessibility defaults.',
                  'A clear evolution path: early template → PyColors UI integration → sellable packaging.',
                ].map((it) => (
                  <li key={it} className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  Available templates
                </h2>
                <p className="text-sm text-muted-foreground">
                  Early releases are usable today. Full PyColors UI
                  migration is planned.
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                {templates.length} template
                {templates.length === 1 ? '' : 's'}
              </div>
            </div>

            <div className="grid gap-4">
              {templates.map((t) => (
                <TemplateCard key={t.name} t={t} />
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Each template includes a README, setup steps, and a
              clean structure — built for real deployment, not
              screenshots.
            </p>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <Card className="p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-medium">
                    Want to influence what ships next?
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Requests and issues help prioritize templates,
                    blocks, and future commercial releases.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className={cn(focusRing)}
                  >
                    <a
                      href="https://github.com/pycolors-io/pycolors-ui/issues"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Open an issue{' '}
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                  <Button asChild className={cn(focusRing)}>
                    <Link href="/changelog">
                      View changelog{' '}
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Note: templates are released progressively. Some are
              “early” while PyColors UI integration is in progress.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
