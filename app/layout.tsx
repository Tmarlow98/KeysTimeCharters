import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import { site } from '@/lib/site';
import './globals.css';

/**
 * Root layout — global <html> shell, font setup, default metadata.
 * Per-page metadata in app/page.tsx (and future pages) will merge with this.
 *
 * Fonts are loaded via next/font/google, which:
 *   - Self-hosts the font files (zero render-blocking external CSS)
 *   - Subsets and preloads only the weights we actually use
 *   - Eliminates layout shift from font swap (CLS = 0 on text)
 *   - Removes the third-party Google Fonts request entirely
 *
 * The two CSS custom properties (`--font-sans`, `--font-display`) are
 * referenced from tailwind.config.ts so the existing `font-sans` and
 * `font-display` classes everywhere in the app keep working unchanged.
 */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: 'Captain Tyler Marlow', url: `${site.url}/meet-your-captain` }],
  creator: 'Captain Tyler Marlow',
  publisher: site.name,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b2238',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6S2KMD5TB9" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6S2KMD5TB9');
        `}</Script>
      </body>
    </html>
  );
}
