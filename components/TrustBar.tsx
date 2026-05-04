/**
 * TrustBar — fast credibility hits directly under the hero.
 * Pure CSS icons (inline SVG) so there's no extra payload.
 */

const TRUST = [
  {
    label: 'Local Florida Keys & Everglades guide',
    icon: (
      <path d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10Z M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    ),
  },
  {
    label: 'Flats & backcountry specialist',
    icon: <path d="M3 17c2 1 4 1 6 0s4-1 6 0 4 1 6 0 M3 13c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />,
  },
  {
    label: 'Private charters only',
    icon: (
      <path d="M3 18l9-12 9 12H3z M9 18v-3 M15 18v-3 M12 18v-5" />
    ),
  },
  {
    label: 'Beginners & experienced anglers',
    icon: (
      <path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5 M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="What we offer"
      className="border-y border-ink-100 bg-white"
    >
      <ul className="container-prose grid grid-cols-2 gap-4 py-8 sm:grid-cols-4 sm:gap-6 sm:py-10">
        {TRUST.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3 sm:items-center sm:justify-start"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flats-50 text-flats-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                {item.icon}
              </svg>
            </span>
            <span className="text-sm font-medium leading-snug text-ink-800 sm:text-[0.95rem]">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
