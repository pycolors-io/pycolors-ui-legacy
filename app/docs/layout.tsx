import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { getDocsNavLinks, source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteHeader } from '@/components/layout/site-header';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const docsLinks = getDocsNavLinks();

  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      nav={{
        enabled: true,
        component: <SiteHeader docsLinks={docsLinks} />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
