'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';
import { cn } from '@/lib/utils';
import { PRIMARY_NAV_ITEMS } from '@/lib/layout.shared';

type DocsLink = {
  label: string;
  href: string;
};

interface SiteHeaderProps {
  docsLinks?: DocsLink[];
}

export function SiteHeader({ docsLinks = [] }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = React.useCallback(
    (href: string) => {
      if (!pathname) return false;
      if (href === '/') return pathname === '/';
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            PC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              PyColors UI
            </span>
            <span className="text-xs text-muted-foreground">
              Design system & kit
            </span>
          </span>
        </Link>

        <nav className="ml-6 hidden flex-1 items-center gap-1 text-sm font-medium md:flex">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground',
                isActive(item.href) && 'bg-muted text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <LargeSearchToggle className="w-60" />
            <ThemeToggle
              mode="light-dark-system"
              className="inline-flex h-9 items-center rounded-full border border-border px-1"
            />
          </div>

          <a
            href="https://github.com/pycolors-io/pycolors-ui"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex h-9 items-center rounded-md border border-border px-3 text-xs font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-border bg-background/95 px-4 pb-6 pt-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col gap-1">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                  isActive(item.href) && 'bg-muted text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {docsLinks.length > 0 && (
            <div className="mt-5 =">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Documentation
              </p>
              <div className="mt-2 max-h-64 space-y-1 overflow-y-auto pr-1">
                {docsLinks.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                      isActive(doc.href) && 'bg-muted text-foreground'
                    )}
                  >
                    {doc.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3">
            <LargeSearchToggle className="w-full justify-between rounded-md border border-border px-3 py-2 text-sm font-medium" />

            <div className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm font-medium">
              <span>Theme</span>
              <ThemeToggle
                mode="light-dark-system"
                className="inline-flex items-center rounded-full border border-border px-1"
              />
            </div>
            <a
              href="https://github.com/pycolors-io/pycolors-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
