'use client';

import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="PyColors UI"
      className="
        group inline-flex h-10 items-center gap-2
        rounded-full border border-border
        bg-background px-3
        font-semibold
        transition-colors duration-150
        hover:bg-accent/40
      "
    >
      <span className="font-brand text-sm tracking-tight text-foreground transition-colors duration-150">
        PyColors
      </span>

      <span
        className="
          h-4 w-px bg-border/70
          transition-colors duration-150
          group-hover:bg-border/40
        "
        aria-hidden="true"
      />

      <span
        className="
          font-brand
          inline-flex h-6 min-w-6 items-center justify-center
          rounded-full
          bg-primary
          px-1.5
          text-[11px] font-semibold uppercase
          text-primary-foreground
          transition-all duration-150
          group-hover:scale-[1.04]
          group-hover:bg-primary/90
        "
      >
        UI
      </span>
    </Link>
  );
}
