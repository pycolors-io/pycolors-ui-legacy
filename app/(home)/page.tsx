import Link from 'next/link';
import { Metadata } from 'next';

import { MarketingShell } from '@/components/shells/marketing-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://pycolors.io'),
  alternates: { canonical: '/' },
  title: {
    default: 'PyColors',
    template: '%s · PyColors',
  },
  description:
    'PyColors is a product ecosystem for shipping real SaaS: a minimal UI system, premium templates, and production-ready starters.',
  openGraph: {
    title: 'PyColors',
    description:
      'A product ecosystem for shipping real SaaS: UI system, premium templates, and production-ready starters.',
    url: '/',
    siteName: 'PyColors',
    images: ['/seo/og-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PyColors',
    description:
      'A product ecosystem for shipping real SaaS: UI system, premium templates, and production-ready starters.',
    images: ['/seo/twitter-main.png'],
  },
};
function ProductCard({
  title,
  description,
  href,
  badge,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  badge?: string;
  cta: string;
}) {
  return (
    <Card className="flex h-full flex-col justify-between p-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="font-brand text-lg font-semibold tracking-tight">
            {title}
          </h3>
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5">
        <Button asChild className="w-full">
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </Card>
  );
}

export default function HomePage() {
  return (
    <MarketingShell>
      <div className="mx-auto w-full max-w-5xl">
        <section className="py-12 sm:py-16 text-center">
          <div className="flex flex-col items-center gap-6">
            <Badge variant="outline">Production-first</Badge>

            <h1 className="font-brand text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Build real SaaS products
              <span className="block font-bold">
                faster, with less guesswork.
              </span>
            </h1>

            <p className="max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              PyColors is a product ecosystem for founders and teams
              shipping real-world SaaS — combining a minimal UI
              system, production-ready templates, and upcoming SaaS
              starters.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/starters">
                  SaaS Starter (coming soon)
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/templates">View templates</Link>
              </Button>

              <Button asChild variant="secondary">
                <Link href="/ui">Explore UI system</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-10 sm:py-14">
          <div className="mb-6 space-y-1 text-center">
            <h2 className="font-brand text-xl font-semibold tracking-tight">
              What you can build with PyColors
            </h2>
            <p className="text-sm text-muted-foreground">
              One foundation. Multiple ways to ship.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="SaaS Starter"
              badge="Coming soon"
              description="A production-ready SaaS foundation with auth, billing, dashboard layouts, and deployment guides — designed for real shipping, not demos."
              href="/starters"
              cta="Get early access"
            />

            <ProductCard
              title="Premium Templates"
              description="Paid-ready landing pages and dashboards built on PyColors UI — clean structure, consistent tokens, and zero design debt."
              href="/templates"
              cta="Browse templates"
            />

            <ProductCard
              title="UI System"
              description="A minimal, documentation-first UI system built on semantic tokens and Radix primitives — open, predictable, and production-minded."
              href="/ui"
              cta="View UI system"
            />
          </div>
        </section>

        {/* TRUST */}
        <section className="py-10 sm:py-14">
          <Card className="p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="font-brand text-lg font-semibold tracking-tight">
                  Built in public. Shipped with discipline.
                </h3>
                <p className="text-sm text-muted-foreground">
                  Weekly releases, public roadmap, and
                  documentation-first workflow.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link href="/docs">Read the docs</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/changelog">Changelog</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/roadmap">Roadmap</Link>
                </Button>
              </div>
            </div>
          </Card>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            PyColors is designed to last — not to chase trends.
          </p>
        </section>
      </div>
    </MarketingShell>
  );
}
