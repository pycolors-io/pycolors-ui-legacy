import Link from 'next/link';
import { Container } from '@/components/container';

const links = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Roadmap', href: '/roadmap' },
  {
    label: 'GitHub',
    href: 'https://github.com/pycolors-io/pycolors-ui',
    external: true,
  },
  {
    label: 'Gumroad',
    href: 'https://pycolors.gumroad.com',
    external: true,
  },
  { label: 'License', href: '/license' },
  { label: 'Privacy', href: '/privacy' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Meta */}
          <div className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} PyColors — Design system for
            SaaS & AI · v1.0.0
          </div>
        </div>
      </Container>
    </footer>
  );
}
