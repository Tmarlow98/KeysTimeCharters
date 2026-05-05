import Image from 'next/image';
import Link from 'next/link';
import CallToBook from './CallToBook';

/**
 * Hero — full-bleed photo, deep gradient, single H1.
 *
 * The hero image is the page's LCP element, so it uses next/image with
 * `priority` (which sets fetchpriority=high and skips lazy-loading) and
 * `sizes="100vw"` so the browser picks the smallest source set entry that
 * still covers the viewport. Behind the scenes Next.js converts the JPG
 * to AVIF/WebP at request time, typically another ~30% smaller than the
 * already-compressed source.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink-900"
    >
      <Image
        src="/images/hero-flats.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-gradient" />

      <div className="container-prose pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl text-white">
          <span className="eyebrow !text-flats-200">
            Florida Keys · Flamingo · Everglades
          </span>

          <h1
            id="hero-title"
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tightish text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Florida Keys &amp; Flamingo Fishing Charters,{' '}
            <span className="text-flats-200">Run by a Local Guide.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Private flats and backcountry trips out of the Florida Keys and Everglades
            National Park. Sight-fishing tarpon, bonefish, snook, and redfish on the
            water we know best.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
            <Link href="#trips" className="btn-secondary">
              View Fishing Trips
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/85">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Specialty</dt>
              <dd className="mt-1 text-sm font-medium">Flats &amp; Backcountry</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Waters</dt>
              <dd className="mt-1 text-sm font-medium">Florida Bay · Flamingo</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Charters</dt>
              <dd className="mt-1 text-sm font-medium">Private only</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}
