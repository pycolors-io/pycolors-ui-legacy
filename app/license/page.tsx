import Link from 'next/link';
import {
  Scale,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/layout/site-header';

type LicenseSection = {
  title: string;
  description: string;
  items: string[];
};

const freeToday: LicenseSection = {
  title: 'What’s free today',
  description:
    'PyColors UI is public and free to explore while the product matures. This includes the current foundation and future core additions.',
  items: [
    'Core UI components shipped as part of the free PyColors UI foundation (including v1.0 and future additions).',
    'Documentation (Preview / Usage / Code / Props).',
    'Examples, patterns, and public pages (Changelog, Roadmap).',
    'Bug fixes and stability patches within the v1.0.x line.',
  ],
};

const mayBecomeCommercial: LicenseSection = {
  title: 'What may become commercial',
  description:
    'As PyColors UI evolves into a sustainable ecosystem, some parts may be introduced under a commercial license.',
  items: [
    'Premium components and advanced UI patterns (dashboard-grade building blocks).',
    'Blocks library (marketing + SaaS) and packaged sections.',
    'Premium templates built on PyColors UI (landing + dashboard).',
    'Commercial distribution assets (starter kits, packaging, screenshot kits).',
    'Priority support and higher-touch help for teams.',
  ],
};

const principles = [
  {
    title: 'Clarity over complexity',
    description:
      'Licensing should be readable and practical. No legal theater, no dark patterns.',
    icon: <Scale className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Trust & sustainability',
    description:
      'Clear boundaries enable long-term maintenance and consistent releases.',
    icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: 'Docs-first mindset',
    description:
      'Whether free or commercial, every shipped artifact must be documented and polished.',
    icon: <Sparkles className="h-4 w-4" aria-hidden="true" />,
  },
];

function SectionCard({ section }: { section: LicenseSection }) {
  return (
    <Card className="p-6 sm:p-7">
      <div className="space-y-2">
        <h2 className="font-brand text-lg font-semibold tracking-tight">
          {section.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {section.description}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {section.items.map((it) => (
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
  );
}

export default function LicensePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1 bg-background text-foreground">
        <Container className="py-20 sm:py-20 lg:py-24">
          <header className="mx-auto w-full max-w-4xl text-center">
            <div className="flex justify-center">
              <Badge variant="secondary" className="gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                Licensing & usage
              </Badge>
            </div>

            <h1 className="font-brand mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              License
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              PyColors UI is built to be production-ready and
              commercially sustainable. This page explains how
              licensing works today—and how it may evolve as the
              ecosystem grows.
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
            <div className="grid gap-4 sm:grid-cols-2">
              <SectionCard section={freeToday} />
              <SectionCard section={mayBecomeCommercial} />
            </div>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <Card className="p-6 sm:p-7">
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  Current status
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  License details will be published as part of the
                  commercialization phase.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For now, PyColors UI is public and free to explore.
                  Licensing terms may evolve as the project matures.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="outline">
                  <Link href="/changelog">
                    View changelog{' '}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button asChild>
                  <a
                    href="https://github.com/pycolors-io/pycolors-ui"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View repository{' '}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>
            </Card>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Note: this page is informational and may be updated as
              PyColors UI evolves.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
