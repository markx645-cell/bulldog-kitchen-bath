import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/content/site';

// Solid black — not translucent. At bg-ink/80 the crimson backdrop bleeds
// through and the footer reads brown instead of black.
export default function Footer() {
  const year = 2026;

  const services = [
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Kitchen Remodeling', href: '/kitchens' },
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Accessory Dwelling Units', href: '/accessory-dwelling-units' },
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/our-process' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
    { label: 'Featured Projects', href: '/projects' },
    { label: 'Financing', href: '/financing' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative z-10 bg-ink text-white">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={site.name} className="inline-block">
            <Image
              src="/logo.webp"
              alt={`${site.name} — kitchen and bathroom remodel`}
              width={750}
              height={900}
              className="mb-4 h-40 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/90">
            Cincinnati’s full-service kitchen &amp; bath remodeler. Built to last, backed for life.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-sm uppercase tracking-widest text-white/80">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-crimson">{c.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-crimson">All Services →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-sm uppercase tracking-widest text-white/80">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-crimson">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-sm uppercase tracking-widest text-white/80">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-crimson">{site.phone}</a>
            </li>
            <li>
              {site.address.city}, {site.address.state}
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex justify-between py-6 text-xs text-white/60">
          <span>© {year} {site.parent}. All rights reserved.</span>
          <span>Cincinnati, Ohio</span>
        </div>
      </div>
    </footer>
  );
}
