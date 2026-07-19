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
  // Services starts expanded in the mobile drawer — it's the primary nav.
  const [openGroup, setOpenGroup] = useState<string | null>(nav.services.label);
  const [showOffer, setShowOffer] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowOffer((v) => !v), showOffer ? 10000 : 5000);
    return () => clearTimeout(id);
  }, [showOffer]);

  const close = () => {
    setMobileOpen(false);
    // Reset to the default (Services expanded), not collapsed — otherwise the
    // drawer would open collapsed on every visit after the first.
    setOpenGroup(nav.services.label);
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
        {/* Dark glass, matching .glass-dark: translucent ink over the blurred
            backdrop rather than flat black. White type — dark type vanishes. */}
        <div className="hidden border-b border-white/10 bg-ink/75 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl md:block">
          <div className="relative h-9 w-full overflow-hidden font-sans text-xs uppercase tracking-widest text-white/90">
            {/* Offer layer */}
            <div
              className={`absolute inset-0 flex items-center justify-center px-5 transition-all duration-500 ease-in-out sm:px-8 ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-[15px] font-semibold text-white">Offer:</span>
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

        {/* Mobile bar 1 — dark glass, same treatment as the desktop top bar */}
        <div className="border-b border-white/10 bg-ink/75 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl md:hidden">
          <div className="relative h-9 w-full overflow-hidden font-sans text-[9px] font-bold uppercase tracking-normal">
            <div
              className={`absolute inset-0 flex items-center justify-center px-3 transition-all duration-500 ease-in-out ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap text-[12px] text-white">Offer:</span>
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
              <span className="whitespace-nowrap text-white/90">Serving Cincinnati &amp; N. Kentucky</span>
              <span className="whitespace-nowrap text-white/90">{site.hours}</span>
            </div>
          </div>
        </div>

        {/* Mobile bar 2 — two rounded, shadowed buttons on light glass */}
        <div className="border-b border-white/40 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl md:hidden">
          <div className="flex items-stretch gap-2.5 px-3 py-2.5">
            <Link
              href="/contact"
              onClick={close}
              className="flex w-1/2 items-center justify-center rounded-xl bg-crimson px-3 py-2.5 text-center font-sans text-[11px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(208,29,33,0.55)] transition hover:bg-crimson-600"
            >
              Let’s Discuss Your Project
            </Link>
            <a
              href={site.phoneHref}
              className="flex w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/60 bg-white/40 px-3 py-2.5 font-display text-lg tabular-nums text-crimson shadow-[0_8px_20px_-6px_rgba(22,24,26,0.25),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md transition hover:bg-white/60"
            >
              <PhoneIcon className="text-crimson" />
              {site.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Main bar */}
      {/* Light glass. Kept at 70% bone rather than the .glass 20% — this bar sits
          over arbitrary page content (including dark hero images) and nav type
          has to stay legible while scrolling.
          z sits above the top utility bar (z-50) so the overhanging logo can
          paint over it. The bar's own box never overlaps that bar, so only the
          logo actually crosses into it. */}
      <div className="border-b border-white/40 bg-bone/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl md:sticky md:top-9 md:z-[60]">
        <div className="flex h-20 w-full items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label={site.name} onClick={close}>
            {/* Portrait badge (750x900). On desktop it deliberately overhangs the
                h-20 bar in both directions: at 115px, centring leaves ~18px
                proud top and bottom, so it rides up over the black utility bar
                and still breaks out below. The bar keeps its 80px height. */}
            <Image
              src="/logo.webp"
              alt={site.name}
              width={750}
              height={900}
              className="h-12 w-auto sm:h-16 lg:h-[7.2rem]"
              priority
            />
            <span className="leading-none">
              <span className="block font-display text-lg  uppercase text-ink sm:text-2xl">
                Bulldog
              </span>
              <span className="mt-0.5 block whitespace-nowrap font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-crimson sm:text-[13px]">
                Remodel Group
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink hover:text-ink"
              >
                {item.label}
              </Link>
            ))}

            {/* Services dropdown — last in the bar */}
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
              {/* right-0: Services is the last item in the bar, so the panel
                  opens leftward instead of running off the edge. */}
              {openMenu === nav.services.label && (
                <div className="absolute right-0 top-full max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-white/50 bg-bone/95 p-2 shadow-[0_8px_32px_rgba(22,24,26,0.14),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl">
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
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href={site.phoneHref} className="hidden text-right leading-none lg:block">
              <span className="mb-0.5 block font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70">
                Call Us
              </span>
              <span className="block whitespace-nowrap font-display text-2xl tabular-nums text-crimson transition-colors hover:text-crimson-600">
                {site.phone}
              </span>
            </a>
            <Link
              href="/contact"
              className="hidden btn-primary !bg-crimson !px-5 !py-2 text-center !leading-tight hover:!bg-crimson-600 lg:inline-flex"
            >
              Let’s Discuss
              <br />
              Your Project
            </Link>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md transition hover:border-white/60 hover:bg-white/40 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {/* Dark stroke — the button is light glass now. */}
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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-white/40 bg-bone/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl lg:hidden">
          <nav className="container-x flex flex-col py-1">
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
            {/* Services last — its 11 children would otherwise push every other
                link below the fold when expanded. */}
            {renderMobileGroup(nav.services)}
          </nav>
        </div>
      )}
    </>
  );
}
