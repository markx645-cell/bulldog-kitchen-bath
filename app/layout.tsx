import type { Metadata } from 'next';
import { Anton, Oswald, Inter } from 'next/font/google';
import './globals.css';
import { site, ogImage } from '@/content/site';
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
    default: `${site.name} | Kitchen, Bath & Basement Remodeling in Cincinnati & N. Kentucky`,
    template: `%s | ${site.name}`,
  },
  description:
    'Whole-home remodeling for Greater Cincinnati and Northern Kentucky — kitchens, bathrooms, basements, ADUs and custom builds. Fixed pricing, in-house design, one accountable team, and a lifetime workmanship warranty.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Kitchen, Bath & Basement Remodeling`,
    description:
      'Kitchen & bath remodeling across Greater Cincinnati and Northern Kentucky. Fixed pricing, in-house design, lifetime workmanship warranty.',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Kitchen, Bath & Basement Remodeling`,
    description:
      'Kitchen & bath remodeling across Greater Cincinnati and Northern Kentucky. Fixed pricing, in-house design, lifetime workmanship warranty.',
    images: [ogImage.url],
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
    '@id': `${site.url}/#business`,
    url: `${site.url}/`,
    logo: `${site.url}/logo.webp`,
    image: `${site.url}/og.png`,
    telephone: '+1-513-657-3750',
    email: site.email,
    priceRange: '$$$',
    openingHours: 'Mo-Fr 09:00-17:00',
    // Locality only — the real business publishes no street address, and an
    // aggregateRating would be fabricated (there are no published reviews).
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Cincinnati, OH' },
      { '@type': 'AdministrativeArea', name: 'Northern Kentucky' },
      { '@type': 'AdministrativeArea', name: 'Southeast Indiana' },
    ],
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
