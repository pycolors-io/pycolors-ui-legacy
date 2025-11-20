'use client';

import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 font-semibold"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
        PC
      </span>
      <span className="text-sm tracking-tight">PyColors</span>
    </Link>
  );
}
