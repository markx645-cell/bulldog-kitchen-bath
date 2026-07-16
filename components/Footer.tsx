import Link from 'next/link';
import Image from 'next/image';
import { site, nav } from '@/content/site';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
            <Image src="/logo.png" alt={site.name} width={72} height={72} className="h-14 w-auto" />
            <span className="leading-none">
              <span className="block font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                Bulldog
              </span>
              <span className="mt-0.5 block whitespace-nowrap font-display text-[13px] font-bold uppercase tracking-[0.12em] text-sage-400">
                Kitchen &amp; Bath
              </span>
            </span>
          </Link>
          <p className="mt-4 font-display text-sm uppercase tracking-widest text-sage-400">
            {site.headline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Full-service kitchen &amp; bath remodeling for Greater Cincinnati and Northern Kentucky —
            one team, fixed pricing, and a lifetime workmanship warranty.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {nav.services.children.slice(0, 8).map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Our Process', href: '/our-process' },
              { label: 'Pricing Guide', href: '/pricing-guide' },
              { label: 'Financing', href: '/financing' },
              { label: 'Projects', href: '/projects' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Contact', href: '/contact' },
            ].map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Get in Touch</h4>
          <div className="space-y-1 text-sm text-white/80">
            <a href={site.phoneHref} className="block font-bold text-white hover:text-sage-400">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            <p className="pt-2">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p className="pt-2">{site.hours}</p>
          </div>
          <Link href="/consult" className="btn-primary mt-5 !py-2.5">
            Book a Free Consult
          </Link>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}, a {site.parent} company. Licensed &amp; insured. BBB A+ rated.
          </p>
          <p>Cincinnati, OH · Northern Kentucky</p>
        </div>
      </div>
    </footer>
  );
}
