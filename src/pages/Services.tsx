import Button from '../components/Button';

const services = [
  {
    id: 'welcome-signs',
    label: 'Welcome Moments',
    headline: 'The first thing your guests will see.',
    description:
      'A welcome sign is more than direction — it\'s the opening statement of your entire event. Our custom welcome installations are designed to reflect your space, your scale, and your aesthetic — creating a first impression that feels intentional, elevated, and unmistakably yours.',
    details: [
      'Hand-lettered or custom printed finish',
      'Custom sizing for any venue or space',
      'Acrylic, wood, or mirror options',
    ],
    image: '/service-welcome.png',
    imageAlt: 'Custom framed wedding welcome sign with blush rose arrangements',
  },
  {
    id: 'seating-charts',
    label: 'Seating Charts',
    headline: 'Architectural, not administrative.',
    description:
      'Seating charts are one of the most functional elements of your reception — and one of the most photographed. We design large-format seating displays that feel like intentional decor pieces: beautifully laid out, visually balanced, and cohesive with the rest of your signage suite.',
    details: [
      'Custom layout and typographic design',
      'Single board or modular panel formats',
      'Acrylic, mirror, wood, or illustrated styles',
    ],
    image: '/service-seating.png',
    imageAlt: 'Custom wedding seating chart on easel with floral arrangement',
  },
  {
    id: 'statement-installations',
    label: 'Statement Installations',
    headline: 'Large-format design that commands attention.',
    description:
      'For couples who want their signage to transcend the functional and become part of the venue itself, our statement installations are the answer. Oversized monograms, illuminated signs, custom neon, floral-integrated arches, and beyond — designed to be the defining visual moment of your event.',
    details: [
      'Oversized acrylic or wooden monograms',
      'Custom neon and LED signage',
      'Arch, ceremony backdrop, and installation design',
      'Full installation and venue coordination support',
    ],
    image: '/service-statement.png',
    imageAlt: 'Statement installation arched sign with floral arrangement and candles',
  },
];

export default function Services() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/our-services.png"
            alt="Elegant outdoor reception tablescape with white hydrangeas, candles, and coastal sunset view"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="text-accent text-xs tracking-widest uppercase font-body mb-4">Our Services</p>
          <h1 className="font-heading text-white text-4xl md:text-6xl leading-tight max-w-2xl">
            Custom signage for every moment of your day.
          </h1>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-32 ${i % 2 === 0 ? 'bg-cream' : 'bg-cream-secondary'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              className={`grid md:grid-cols-2 gap-14 md:gap-24 items-center ${
                i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <p className="section-label mb-4">{service.label}</p>
                <h2 className="font-heading text-3xl md:text-4xl text-ink mb-6 leading-snug">
                  {service.headline}
                </h2>
                <p className="text-ink-secondary font-body text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-sm text-ink-secondary">
                      <span className="w-4 h-px bg-accent mt-2.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Button to="/inquire" variant="primary">
                  Inquire About This Service
                </Button>
              </div>

              <div className={`aspect-[4/5] overflow-hidden ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-accent text-xs tracking-widest uppercase font-body mb-5">
            Custom Commissions
          </p>
          <h2 className="font-heading text-cream text-3xl md:text-5xl mb-8 leading-tight max-w-xl mx-auto">
            Don't see exactly what you're looking for?
          </h2>
          <p className="text-cream/60 font-body text-base mb-10 max-w-md mx-auto leading-relaxed">
            Every project we take on is entirely custom. Tell us your vision and we'll build something made entirely for you.
          </p>
          <Button to="/inquire" variant="white">
            Begin Your Inquiry
          </Button>
        </div>
      </section>
    </main>
  );
}