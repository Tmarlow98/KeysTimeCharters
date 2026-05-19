import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FAQ from '@/components/FAQ';
import { site } from '@/lib/site';
import { faqSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact & Book a Charter | Keys Time Charters',
  description:
    'Book a Florida Keys or Flamingo fishing charter with Captain Tyler. Call or email to check availability, ask questions, and lock in your date.',
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: 'Contact & Book a Charter | Keys Time Charters',
    description: 'Call or email Captain Tyler to book your Florida Keys or Flamingo fishing charter.',
    url: `${site.url}/contact`,
  },
  keywords: ['book florida keys fishing charter', 'contact keys time charters', 'flamingo fishing charter booking'],
};

const CONTACT_FAQS: FAQItem[] = [
  {
    question: 'How do I book a charter?',
    answer:
      'Call or email with your preferred dates, group size, and what you want to fish for. We do not use an online booking form — a quick conversation gets everything confirmed faster and lets us give you an honest read on conditions for your dates.',
  },
  {
    question: 'How far in advance should I book a Flamingo or Keys charter?',
    answer:
      'For Flamingo backcountry and Keys flats trips during peak season — spring tarpon migration through summer — booking 3 to 6 weeks ahead is typical. Fall and winter have more open dates. If you are flexible on exact timing, a call a week or two out can often get you on the water.',
  },
  {
    question: 'What if I need to cancel or weather forces a change?',
    answer:
      'Trips cancelled due to unsafe weather are rescheduled at no charge. For cancellations on the guest side, ask about the deposit terms when you book. We work with you where we can.',
  },
  {
    question: 'What information should I have ready when I call?',
    answer:
      'Your trip dates or preferred date range, group size, where you are coming from, and any species you specifically want to target. If you are not sure what trip fits your group, we can figure that out together on the call.',
  },
];

const STEPS = [
  { step: '01', heading: 'Reach out', body: 'Call or email with your dates, group size, and what you want to fish for. No booking form — a quick conversation gets everything sorted faster.' },
  { step: '02', heading: 'We talk through the plan', body: 'We\'ll tell you honestly what\'s fishing well for your dates, which trip fits your group, and what to realistically expect.' },
  { step: '03', heading: 'Lock in your date', body: 'A deposit holds the day. We\'ll confirm the ramp, meeting time, and any gear questions a few days before you arrive.' },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Header */}
        <section aria-labelledby="contact-title" className="bg-ink-900 pb-16 pt-28 text-white md:pb-20 md:pt-36">
          <div className="container-prose">
            <span className="eyebrow !text-flats-300">Get in Touch</span>
            <h1 id="contact-title" className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Book a Charter
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              Call or email to check dates, ask questions, or get a recommendation on which trip fits your group best. We usually respond the same day.
            </p>

            {/* Contact cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={site.phoneHref}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flats-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Phone</p>
                  <p className="mt-1 font-semibold text-white group-hover:text-flats-200">{site.phone}</p>
                  <p className="mt-0.5 text-xs text-white/50">Call or text</p>
                </div>
              </a>

              <a
                href={site.emailHref}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flats-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Email</p>
                  <p className="mt-1 font-semibold text-white group-hover:text-flats-200">{site.email}</p>
                  <p className="mt-0.5 text-xs text-white/50">Usually same-day response</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flats-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Departures</p>
                  <p className="mt-1 font-semibold text-white">{site.departurePoint}</p>
                  <p className="mt-0.5 text-xs text-white/50">Exact ramp confirmed at booking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="contact-steps" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="How It Works"
              title="From first message to first cast."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.step} className="rounded-2xl border border-ink-100 bg-white p-8">
                  <span className="font-display text-4xl font-semibold text-flats-200">{s.step}</span>
                  <h2 className="mt-3 text-lg font-semibold text-ink-900">{s.heading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">Call {site.phone}</a>
              <a href={site.emailHref} className="btn-outline">Email {site.email}</a>
            </div>
          </div>
        </section>

        <FAQ faqs={CONTACT_FAQS} />
      </main>
      <Footer />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(CONTACT_FAQS)) }}
      />
    </>
  );
}
