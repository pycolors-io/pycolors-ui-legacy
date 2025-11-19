'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface MarketingShellProps {
  children: React.ReactNode;
  /**
   * Show top/bottom borders on header & footer.
   */
  showBorders?: boolean;
}

export function MarketingShell({
  children,
  showBorders = true,
}: MarketingShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Main content */}
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={cn(
          'mt-8 bg-background',
          showBorders && 'border-t border-border'
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} PyColors UI. Built with
            Next.js & Fumadocs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs" className="hover:text-foreground">
              Design system
            </Link>
            <Link
              href="/components"
              className="hover:text-foreground"
            >
              Components
            </Link>
            <Link href="/templates" className="hover:text-foreground">
              Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
