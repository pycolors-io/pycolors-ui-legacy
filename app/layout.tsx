import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

import { inter } from './fonts';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
