import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { getDocsNavLinks, source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteHeader } from '@/components/layout/site-header';
import { Footer } from '@/components/footer';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const docsLinks = getDocsNavLinks();

  return (
    <div className="min-h-screen flex flex-col">
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
