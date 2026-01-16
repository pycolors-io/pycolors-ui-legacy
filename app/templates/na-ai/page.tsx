import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Package,
  BadgeCheck,
} from 'lucide-react';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'NA-AI Landing Page Template · PyColors UI',
  description:
    'A premium AI/SaaS landing page template — early release with planned PyColors UI migration.',
  alternates: {
    canonical: 'https://pycolors.io/templates/na-ai',
  },
  openGraph: {
    title: 'NA-AI · Templates · PyColors UI',
    description:
      'Premium AI analytics landing page template (Next.js). Production-ready structure, modern stack, commercial license included.',
    url: '/templates/na-ai',
    images: ['/seo/og-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NA-AI · Templates · PyColors UI',
    description:
      'Premium AI analytics landing page template (Next.js). Production-ready structure, modern stack, commercial license included.',
    images: ['/seo/twitter-main.png'],
  },
};

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const PRODUCT = {
  name: 'NA-AI',
  title: 'NA-AI — Premium AI Analytics Landing Page (Next.js)',
  subtitle:
    'A commercial landing page template for SaaS & AI products.',
  status: 'Available',
  note: 'Early template — migration to PyColors UI planned.',
  price: '$49',
  demoUrl: 'https://na-ai-landing-template.vercel.app',
  buyUrl:
    'https://pycolors.gumroad.com/l/na-ai-nextjs-landing?layout=profile',
};

const included = [
  'Next.js (App Router) project structure',
  'TypeScript + Tailwind CSS v4',
  'shadcn/ui + Radix UI components',
  'Pricing section + monthly/yearly toggle',
  'FAQ + testimonials + integrations sections',
  'Dark / Light mode (system-aware)',
  'SEO baseline (OG, sitemap, robots)',
  'Frontend-only (no auth/backend)',
];

const stack = [
  'Next.js (App Router)',
  'TypeScript',
  'Tailwind CSS v4',
  'shadcn/ui + Radix UI',
  'Framer Motion',
  'Lucide Icons',
];

const license = [
  'Commercial license included (personal + client work).',
  'No reselling / redistribution.',
  'No source sharing.',
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span
            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60"
            aria-hidden="true"
          />
          <span className="text-pretty">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NaAiTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1 bg-background text-foreground">
        <Container className="py-20 sm:py-20 lg:py-24">
          <header className="mx-auto w-full max-w-4xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary" className="gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Templates
              </Badge>

              <Badge variant="outline" className="text-[11px]">
                {PRODUCT.status}
              </Badge>

              <span className="text-xs text-muted-foreground">
                {PRODUCT.price}
              </span>
            </div>

            <h1 className="font-brand mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {PRODUCT.title}
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              {PRODUCT.subtitle}
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-balance text-xs text-muted-foreground">
              {PRODUCT.note}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className={focusRing}>
                <a
                  href={PRODUCT.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open NA-AI live demo (opens in a new tab)"
                >
                  Live demo
                  <ExternalLink
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </Button>

              <Button asChild variant="outline" className={focusRing}>
                <a
                  href={PRODUCT.buyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Buy NA-AI on Gumroad (opens in a new tab)"
                >
                  Buy on Gumroad
                  <ExternalLink
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link
                href="/templates"
                className={[
                  'text-xs text-muted-foreground transition-colors hover:text-foreground',
                  focusRing,
                  'rounded-md',
                ].join(' ')}
                aria-label="Back to Templates"
              >
                ← Back to Templates
              </Link>

              <Link
                href="/license"
                className={[
                  'text-xs text-muted-foreground transition-colors hover:text-foreground',
                  focusRing,
                  'rounded-md',
                ].join(' ')}
                aria-label="Read licensing information"
              >
                License →
              </Link>
            </div>
          </header>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Built to ship
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Designed as a real product foundation — clean
                  structure, solid UX, and scalable sections.
                </p>
              </Card>

              <Card className="p-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium">
                  <Package className="h-4 w-4" aria-hidden="true" />
                  Production-ready bundle
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Full source code delivered as a template you can
                  customize and deploy quickly.
                </p>
              </Card>

              <Card className="p-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Commercial license
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Use for personal projects and client work. No
                  redistribution.
                </p>
              </Card>
            </div>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-6 sm:p-7">
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  What’s included
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A focused set of sections and patterns for SaaS/AI
                  launches — without backend complexity.
                </p>
                <BulletList items={included} />
              </Card>

              <Card className="p-6 sm:p-7">
                <h2 className="font-brand text-lg font-semibold tracking-tight">
                  Tech stack
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Modern defaults with sensible architecture and UI
                  primitives.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    <BadgeCheck
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Notes
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Frontend-only by design — no authentication,
                    database, or API included.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <Card className="p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h2 className="font-brand text-lg font-semibold tracking-tight">
                    License summary
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear rules so you can ship confidently.
                  </p>
                  <BulletList items={license} />
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                  <Button asChild className={focusRing}>
                    <a
                      href={PRODUCT.buyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Buy NA-AI on Gumroad (opens in a new tab)"
                    >
                      Buy NA-AI
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              NA-AI is sold on Gumroad. This page is a curated product
              hub and may evolve as PyColors UI grows.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
