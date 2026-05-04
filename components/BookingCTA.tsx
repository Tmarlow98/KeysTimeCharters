import { site } from '@/lib/site';

/**
 * Final-pitch CTA. Keep this section ruthlessly simple — one clear path
 * to book, plus phone & email for the people who'd rather call.
 */
export default function BookingCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink-900 text-white"
    >
      {/* Optional photo behind the CTA — replace /public/images/cta-bg.jpg with a wide flats shot */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("/images/cta-bg.jpg"), linear-gradient(135deg,#0b2238,#163149)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900"
      />

      <div className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !text-flats-200">Ready when you are</span>
          <h2
            id="cta-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          >
            Plan your day on the water.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Tell us when you’re in town and what you want to chase. We’ll match the trip
            to the conditions and walk you through everything before you arrive.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={site.phoneHref} className="btn-primary bg-flats-500 hover:bg-flats-600">
              Call to Book
            </a>
            <a href={site.emailHref} className="btn-secondary">
              Email Us
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">Phone</div>
              <a href={site.phoneHref} className="mt-1 block font-semibold hover:text-flats-200">
                {site.phone}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">Email</div>
              <a href={site.emailHref} className="mt-1 block font-semibold hover:text-flats-200">
                {site.email}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">Departures</div>
              <p className="mt-1 font-semibold">{site.departurePoint}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
