'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const NAV = [
  { href: '/flamingo-fishing-charter', label: 'Flamingo' },
  { href: '/florida-keys-flats-fishing', label: 'Flats Fishing' },
  { href: '/backcountry-fishing-everglades', label: 'Backcountry' },
  { href: '/meet-your-captain', label: 'Your Guide' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/fishing-reports', label: 'Reports' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 bg-ink-900 shadow-sm">
      <div className="container-prose flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="font-display text-xl font-semibold tracking-tightish text-white md:text-2xl"
        >
          Keys Time Charters
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-white/90 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide transition hover:text-flats-400"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-5">
            Call to Book
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

    </header>

    {/* Mobile drawer — rendered outside <header> so it gets its own global z-index */}
    {open && (
      <div
        className="fixed inset-0 top-16 z-[100] bg-sand-50 px-5 py-8 md:hidden overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium text-ink-900 transition hover:bg-ink-50"
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref} onClick={() => setOpen(false)} className="btn-primary mt-4">
            Call {site.phone}
          </a>
        </nav>
      </div>
    )}
    </>
  );
}
