import SectionHeading from './SectionHeading';
import type { FAQItem } from '@/lib/seo';

/**
 * FAQ — uses native <details>/<summary> for accessibility & no JS.
 * Items are exported so app/page.tsx can also feed them into FAQ schema markup.
 */
export const FAQS: FAQItem[] = [
  {
    question: 'What is the best time to fish in Flamingo and the Florida Keys?',
    answer:
      "Fishing is good year round, but each season has a focus. Spring through early summer is prime tarpon season in the Keys and Florida Bay. Late summer and fall produce great snook and redfish action in the backcountry. Winter pushes fish into the deeper basins and brings clean sight-fishing days when the wind cooperates. The right month depends on the species you want — tell us what you're chasing and we'll suggest a window.",
  },
  {
    question: 'What species can we catch in the backcountry?',
    answer:
      'The backcountry around Flamingo and Florida Bay is a year-round mix. Tarpon (migratory in spring/summer, resident fish year round), redfish on the bay banks, snook in the mangroves and creek mouths, sea trout on grass flats, and the occasional jack crevalle, ladyfish, or shark on the way. Trips are tailored to which of these are eating that week.',
  },
  {
    question: 'Do you offer beginner-friendly fishing charters?',
    answer:
      "Yes. A lot of our clients have never stood on the bow of a flats skiff. We provide all the gear, walk you through casting and presentations, and pick areas that give beginners the best shot at clean catches without rushing. If you've never fished before, just tell us when you book and we'll set the day up for it.",
  },
  {
    question: 'What should I bring on a flats fishing trip?',
    answer:
      'Polarized sunglasses (essential for sight fishing), reef-safe sunscreen, a hat, light long-sleeve sun shirt, soft-soled shoes or boat shoes, water, and snacks. We provide all rods, reels, tackle, and bait. Fishing license coverage is included under the charter vessel for the trip. A dry bag for phones and cameras is a good idea.',
  },
  {
    question: 'Where do your fishing charters depart from?',
    answer:
      "Departures are out of the Florida Keys and Flamingo (Everglades National Park), depending on the trip and the species you're after. Once your trip is booked we'll confirm the exact ramp, time, and meeting instructions a few days out so you can plan around tides and weather.",
  },
  {
    question: 'How many people can fish on one charter?',
    answer:
      'Up to 3 anglers per charter. All trips are private — your group and the guide, no strangers. A $100 surcharge applies for a third angler. Two anglers is the most common setup.',
  },
  {
    question: 'Is a fishing license included?',
    answer:
      'Customers fishing under the charter vessel license do not need to purchase a separate Florida recreational saltwater fishing license for the trip. License coverage is included.',
  },
  {
    question: 'What if weather forces a cancellation?',
    answer:
      'Trips cancelled due to unsafe conditions are rescheduled at no charge. We will keep you informed if the forecast looks questionable before your trip.',
  },
  {
    question: 'Do you offer fly fishing?',
    answer:
      'Spinning and fly gear are both available on most charters. If fly fishing is a priority, mention it when you book — some trips suit the fly better than others depending on the species and conditions.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'During peak season — especially spring tarpon season and summer — booking a few weeks to a couple of months out is smart. Closer to the date is worth trying if you are flexible on timing.',
  },
];

export default function FAQ({ faqs = FAQS }: { faqs?: FAQItem[] }) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="container-prose">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before booking."
          description="If you don't see your question here, send a message — we'll usually get back the same day."
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ink-100 bg-sand-50 p-6 transition-colors open:bg-white open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-ink-900 md:text-xl">
                  {item.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-flats-100 text-flats-700 transition-transform group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3.5 w-3.5"
                  >
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-ink-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
