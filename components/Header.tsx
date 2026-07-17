'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site, nav } from '@/content/site';

const OFFER_TEXT = '0% Financing for 18 Months — Ask How';

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [showOffer, setShowOffer] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowOffer((v) => !v), showOffer ? 10000 : 5000);
    return () => clearTimeout(id);
  }, [showOffer]);

  const close = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const renderMobileGroup = (group: {
    label: string;
    href: string;
    children: readonly { label: string; href: string }[];
  }) => {
    const isOpen = openGroup === group.label;
    return (
      <div key={group.label} className="border-b border-white/30">
        <button
          type="button"
          onClick={() => setOpenGroup(isOpen ? null : group.label)}
          className="flex w-full items-center justify-between py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-ink"
          aria-expanded={isOpen}
        >
          {group.label}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16181a"
            strokeWidth="2.5"
            className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 gap-x-4 pb-3">
            {group.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={close}
                className="block py-2 font-sans text-sm uppercase tracking-[0.04em] text-ink hover:text-crimson"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top utility bar — desktop */}
        <div className="hidden bg-ink text-ink md:block">
          <div className="relative h-9 w-full overflow-hidden font-sans text-xs uppercase tracking-widest text-ink">
            {/* Offer layer */}
            <div
              className={`absolute inset-0 flex items-center justify-center px-5 transition-all duration-500 ease-in-out sm:px-8 ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-[15px] font-semibold text-ink">Offer:</span>
                <Link
                  href="/financing"
                  className="inline-flex items-center whitespace-nowrap rounded-sm bg-crimson px-4 py-1 text-[15px] font-bold leading-none text-white shadow-sm transition hover:opacity-90"
                >
                  {OFFER_TEXT}
                </Link>
              </div>
            </div>
            {/* Info layer */}
            <div
              className={`absolute inset-0 flex items-center px-5 transition-all duration-500 ease-in-out sm:px-8 ${
                showOffer ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="grid w-full grid-cols-3 items-center">
                <span className="justify-self-start whitespace-nowrap">{site.headline}</span>
                <span className="justify-self-center whitespace-nowrap text-center">
                  Serving {site.serviceArea}
                </span>
                <span className="justify-self-end whitespace-nowrap text-right">{site.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile bar 1 */}
        <div className="bg-cream md:hidden">
          <div className="relative h-9 w-full overflow-hidden font-sans text-[9px] font-bold uppercase tracking-normal">
            <div
              className={`absolute inset-0 flex items-center justify-center px-3 transition-all duration-500 ease-in-out ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap text-[12px] text-ink">Offer:</span>
                <Link
                  href="/financing"
                  onClick={close}
                  className="inline-flex items-center whitespace-nowrap rounded-sm bg-crimson px-3 py-1 text-[12px] font-bold leading-none text-white shadow-sm"
                >
                  {OFFER_TEXT}
                </Link>
              </div>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-between gap-2 px-3 transition-all duration-500 ease-in-out ${
                showOffer ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <span className="whitespace-nowrap text-ink">Serving Cincinnati &amp; N. Kentucky</span>
              <span className="whitespace-nowrap text-ink">{site.hours}</span>
            </div>
          </div>
        </div>

        {/* Mobile bar 2 — CTA + phone */}
        <div className="bg-ink md:hidden">
          <div className="flex h-14 items-stretch">
            <Link
              href="/contact"
              onClick={close}
              className="flex w-1/2 items-center justify-center whitespace-nowrap bg-crimson px-3 font-sans text-sm font-extrabold uppercase tracking-wide text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)' }}
            >
              Book Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="flex w-1/2 items-center justify-center gap-2 whitespace-nowrap font-display text-lg  tabular-nums text-ink"
            >
              <PhoneIcon className="text-ink" />
              {site.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Main bar */}
      <div className="border-b border-ink/10 bg-bone/85 backdrop-blur-xl md:sticky md:top-9 md:z-40">
        <div className="flex h-20 w-full items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label={site.name} onClick={close}>
            <Image src="/logo.png" alt={site.name} width={64} height={64} className="h-11 w-auto sm:h-14" priority />
            <span className="leading-none">
              <span className="block font-display text-lg  uppercase text-ink sm:text-2xl">
                Bulldog
              </span>
              <span className="mt-0.5 block whitespace-nowrap font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-crimson sm:text-[13px]">
                Kitchen &amp; Bath
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu(nav.services.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={nav.services.href}
                className="flex items-center gap-1 px-3 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink hover:text-ink"
              >
                {nav.services.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6 8L1 3h10z" />
                </svg>
              </Link>
              {openMenu === nav.services.label && (
                <div className="absolute left-0 top-full max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-ink/10 bg-bone/95 p-2 shadow-lift backdrop-blur-xl">
                  {/* Production puts "View All Services" at the top of the menu */}
                  <Link
                    href={nav.services.href}
                    className="block rounded-md px-3 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-crimson hover:bg-crimson/5"
                  >
                    View All Services →
                  </Link>
                  <span className="my-1 block border-t border-ink/10" aria-hidden="true" />
                  {nav.services.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 font-sans text-sm uppercase tracking-[0.04em] text-ink hover:bg-ink/5"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink hover:text-ink"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href={site.phoneHref} className="hidden text-right leading-none lg:block">
              <span className="mb-0.5 block font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70">
                Call Us
              </span>
              <span className="block whitespace-nowrap font-display text-2xl  tabular-nums text-ink transition-colors hover:text-ink">
                {site.phone}
              </span>
            </a>
            <Link
              href="/contact"
              className="hidden btn-primary !px-5 !py-2 text-center !leading-tight lg:inline-flex"
            >
              Book Your
              <br />
              Free Estimate
            </Link>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-md bg-ink lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16181a" strokeWidth="2.2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-ink/10 bg-bone/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col py-1">
            {renderMobileGroup(nav.services)}
            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-white/30 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-ink hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
