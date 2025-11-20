'use client';

import Link from 'next/link';

import { Container } from '@/components/container';

export function Footer() {
  return (
    <footer className="mt-auto bg-background border-t border-border">
      <Container className="flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PyColors io.</p>

        <div className="flex flex-wrap gap-3">
          <Link href="/docs" className="hover:text-foreground">
            Design system
          </Link>
          <Link href="/components" className="hover:text-foreground">
            Components
          </Link>
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
        </div>
      </Container>
    </footer>
  );
}
