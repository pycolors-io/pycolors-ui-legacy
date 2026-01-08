import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

import { inter } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://pycolors.io'),
  title: {
    default: 'PyColors UI',
    template: '%s · PyColors UI',
  },
  description:
    'A documentation-first UI system built on semantic tokens and Radix primitives — designed to ship real SaaS interfaces.',
  applicationName: 'PyColors UI',
  creator: 'PyColors',
  publisher: 'PyColors',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'PyColors UI',
    title: 'PyColors UI',
    description:
      'A documentation-first UI system built to ship modern SaaS interfaces.',
    url: '/',
    images: ['/seo/og-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PyColors UI',
    description:
      'A documentation-first UI system built to ship modern SaaS interfaces.',
    images: ['/seo/twitter-main.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.className}
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
