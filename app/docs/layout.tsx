import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { getDocsNavLinks, source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteHeader } from '@/components/layout/site-header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Documentation',
    template: '%s · Docs · PyColors UI',
  },
  description:
    'Official documentation for PyColors UI. Components, design tokens, patterns, and best practices to build production-ready SaaS interfaces.',
  openGraph: {
    title: 'PyColors UI Documentation',
    description:
      'Learn how to build consistent, production-ready interfaces with PyColors UI.',
    url: '/docs',
    images: ['/seo/og-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PyColors UI Documentation',
    description:
      'Components, tokens, and patterns for building modern SaaS UIs.',
    images: ['/seo/twitter-main.png'],
  },
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const docsLinks = getDocsNavLinks();

  return (
    <div className="flex min-h-screen flex-col">
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        nav={{
          enabled: true,
          component: <SiteHeader docsLinks={docsLinks} />,
        }}
        sidebar={{ collapsible: false }}
      >
        {children}
      </DocsLayout>

      <Footer />
    </div>
  );
}
