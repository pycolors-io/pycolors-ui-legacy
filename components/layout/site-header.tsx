'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';

import { cn } from '@/lib/utils';
import { PRIMARY_NAV_ITEMS } from '@/lib/layout.shared';
import { Container } from '@/components/container';
import { Logo } from '../logo';

type DocsLink = {
  label: string;
  href: string;
};

interface SiteHeaderProps {
  docsLinks?: DocsLink[];
}

function matchPathname(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ docsLinks = [] }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Only one active: we take the most specific match (longest href)
  const activeHref = React.useMemo(() => {
    if (!pathname) return null;

    const matches = PRIMARY_NAV_ITEMS.filter((i) =>
      matchPathname(pathname, i.href)
    );

    matches.sort((a, b) => b.href.length - a.href.length);
    return matches[0]?.href ?? null;
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center gap-3">
        <Logo />

        <nav className="ml-6 hidden flex-1 items-center gap-1 text-sm font-medium md:flex">
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isCurrent = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground',
                  isCurrent && 'text-foreground'
                )}
              >
                {item.label}
              </Link>
            );
          })}
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
            className="hidden h-9 items-center rounded-md border border-border px-3 text-xs font-semibold transition-colors hover:bg-accent hover:text-accent-foreground md:inline-flex"
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
      </Container>

      {isMenuOpen ? (
        <Container className="border-t border-border bg-background/95 px-4 pb-6 pt-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <nav className="flex flex-col gap-1">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isCurrent = activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                    isCurrent && 'bg-muted text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {docsLinks.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Documentation
              </p>
              <div className="mt-2 max-h-64 space-y-1 overflow-y-auto pr-1">
                {docsLinks.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
        </Container>
      ) : null}
    </header>
  );
}
