import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';

const services = [
  {
    id: 'welcome-signs',
    label: 'Welcome Moments',
    number: '01',
    headline: 'The first thing your guests will see.',
    description:
      "A welcome sign is more than direction — it's the opening statement of your entire event. Our custom welcome installations are designed to reflect your space, your scale, and your aesthetic — creating a first impression that feels intentional, elevated, and unmistakably yours.",
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
    number: '02',
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
    number: '03',
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

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={service.id}
      className={`grid md:grid-cols-2 min-h-[85vh] items-stretch ${
        index === 0 ? 'bg-cream' : index === 1 ? 'bg-cream-secondary' : 'bg-cream'
      }`}
    >
      {/* Image */}
      <motion.div
        className={`relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'} min-h-[50vw] md:min-h-0`}
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease }}
      >
        <motion.img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ y: imageY }}
        />
        {/* Number watermark */}
        <div className="absolute bottom-6 left-6 font-heading text-[8rem] leading-none text-white/10 select-none pointer-events-none">
          {service.number}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className={`flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24 ${
          isEven ? 'md:order-2' : 'md:order-1'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
      >
        <div className="max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-heading text-sm tracking-[0.3em]">{service.number}</span>
            <div className="h-px w-10 bg-accent" />
            <span className="text-ink-secondary font-body text-xs uppercase tracking-[0.3em]">{service.label}</span>
          </div>

          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.4rem] text-ink leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
          >
            {service.headline}
          </motion.h2>

          <motion.p
            className="text-ink-secondary font-body text-base leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {service.description}
          </motion.p>

          <ul className="space-y-4 mb-12 pb-10 border-b border-border">
            {service.details.map((d, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4 font-body text-sm text-ink-secondary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {d}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Button to="/inquire" variant="primary">
              Inquire About This Service
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <main className="pt-16 md:pt-20">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/our-services.png"
            alt="Elegant outdoor reception tablescape with white hydrangeas, candles, and coastal sunset view"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
          <motion.p
            className="text-accent text-xs tracking-[0.4em] uppercase font-body mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            Our Services
          </motion.p>
          <motion.h1
            className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.65 }}
          >
            Custom signage for every moment of your day.
          </motion.h1>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}

      {/* FULL SUITE BANNER */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="text-accent text-xs tracking-[0.4em] uppercase font-body mb-6">A Full Suite</p>
            <h2 className="font-heading text-cream text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
              Package all three services together.
            </h2>
            <p className="text-cream/60 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
              We recommend combining Welcome Moments, Seating Charts, and Statement Installations for a cohesive, gallery-quality signage experience that ties your entire day together.
            </p>
            <Button to="/inquire" variant="white">
              Inquire About a Full Suite
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ink mb-3 leading-snug">
                Don't see exactly what you're looking for?
              </h2>
              <p className="text-ink-secondary font-body text-sm leading-relaxed max-w-md">
                Every project we take on is entirely custom. Tell us your vision and we'll build something made entirely for you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button to="/inquire" variant="primary">
                Begin Your Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
