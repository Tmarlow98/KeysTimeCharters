import Link from 'next/link';
import { site } from '@/lib/site';

const NAV_TRIPS = [
  { href: '/flamingo-fishing-charter', label: 'Flamingo Fishing Charter' },
  { href: '/florida-keys-flats-fishing', label: 'Florida Keys Flats Fishing' },
  { href: '/backcountry-fishing-everglades', label: 'Backcountry Fishing' },
];

const NAV_INFO = [
  { href: '/meet-your-captain', label: 'Meet the Captain' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/fishing-reports', label: 'Fishing Reports' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-white/85">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="font-display text-xl font-semibold text-white">
            Keys Time Charters
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Private flats and backcountry fishing charters in the Florida Keys and
            Everglades National Park. Tarpon, bonefish, snook, and redfish — guided by a
            local who fishes here year round.
          </p>

          <div className="mt-6 space-y-1 text-sm">
            <a href={site.phoneHref} className="block hover:text-flats-200">
              {site.phone}
            </a>
            <a href={site.emailHref} className="block hover:text-flats-200">
              {site.email}
            </a>
            <p className="text-white/60">{site.departurePoint}</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-flats-200">
            Trips
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_TRIPS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-flats-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-flats-200">
            Info
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_INFO.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-flats-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-flats-200">
            Follow
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.social.instagram && (
              <li>
                <a href={site.social.instagram} className="hover:text-flats-200">
                  Instagram
                </a>
              </li>
            )}
            {site.social.facebook && (
              <li>
                <a href={site.social.facebook} className="hover:text-flats-200">
                  Facebook
                </a>
              </li>
            )}
            {site.social.youtube && (
              <li>
                <a href={site.social.youtube} className="hover:text-flats-200">
                  YouTube
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-white/55">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Coast Guard licensed · Florida Keys &amp; Everglades National Park</p>
        </div>
      </div>
    </footer>
  );
}
