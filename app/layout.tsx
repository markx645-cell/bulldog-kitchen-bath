import type { Metadata } from 'next';
import { Inter, Archivo, Playfair_Display } from 'next/font/google';
import './globals.css';
import { site, stats } from '@/content/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Kitchen & Bath Remodeling in Cincinnati & N. Kentucky`,
    template: `%s | ${site.name}`,
  },
  description:
    'Full-service kitchen and bath remodeling for Greater Cincinnati and Northern Kentucky. Fixed pricing, in-house design, one accountable team, and a lifetime workmanship warranty. Book a free consult.',
  keywords: [
    'kitchen remodeling Cincinnati',
    'bathroom remodeling Cincinnati',
    'kitchen and bath remodel Northern Kentucky',
    'Bulldog Kitchen & Bath',
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
  themeColor: '#C8102E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    '@id': site.url,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: ['Cincinnati OH', 'Northern Kentucky'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: stats.googleRating,
      reviewCount: '200',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${playfair.variable}`}
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
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
