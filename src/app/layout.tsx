import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.siteUrl),
  description: siteConfig.description,
  keywords: [
    'react',
    'nextjs',
    'component library',
    'tailwindcss',
    'shadcn-ui',
    'blockwise-ui',
    'uilab',
  ],
  authors: [...siteConfig.authors],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={cn('relative bg-background', inter.className)}>
        {/* Background Grid */}
        <div className="container absolute left-1/2 top-0 z-0 h-full -translate-x-1/2 ">
          <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-2 px-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="h-full w-full border-l border-dashed border-border" />
            <div className="hidden h-full w-full border-l border-dashed border-border lg:block" />
            <div className="hidden h-full w-full border-l border-dashed border-border lg:block" />
            <div className="hidden h-full w-full border-l border-dashed border-border md:block" />
            <div className="hidden h-full w-full border-l border-dashed border-border md:block" />
            <div className="h-full w-full border-x border-dashed border-border" />
          </div>
        </div>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
