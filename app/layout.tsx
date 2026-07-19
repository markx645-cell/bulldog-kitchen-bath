import type { Metadata } from 'next';
import { Anton, Oswald, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Backdrop from '@/components/Backdrop';
import RevealObserver from '@/components/RevealObserver';

// Matches the production stack:
// --font-display: Anton | --font-serif: Oswald | --font-sans: Inter
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'], // Anton ships a single weight
  variable: '--font-display',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Kitchen & Bath Remodeling in Cincinnati & N. Kentucky`,
    template: `%s | ${site.name}`,
  },
  description:
    'Full-service kitchen and bath remodeling for Greater Cincinnati and Northern Kentucky. Fixed pricing, in-house design, one accountable team, and a lifetime workmanship warranty. Book a consult.',
  keywords: [
    'kitchen remodeling Cincinnati',
    'bathroom remodeling Cincinnati',
    'kitchen and bath remodel Northern Kentucky',
    'Bulldog Remodel Group',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.headline}`,
    description:
      'Kitchen & bath remodeling across Greater Cincinnati and Northern Kentucky. Fixed pricing, in-house design, lifetime workmanship warranty.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16181a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    '@id': site.url,
    url: site.url,
    telephone: '+1-513-657-3750',
    priceRange: '$$$',
    // Locality only — the real business publishes no street address, and an
    // aggregateRating would be fabricated (there are no published reviews).
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: 'US',
    },
    areaServed: site.serviceArea,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{document.documentElement.classList.add('reveal-js')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Backdrop />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
