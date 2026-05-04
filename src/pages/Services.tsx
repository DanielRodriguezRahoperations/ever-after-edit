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
const sectionEase = { duration: 0.9, ease };

const clipUp = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
};

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  const bgClass = index === 1 ? 'bg-cream-secondary' : 'bg-cream';

  return (
    <div
      ref={ref}
      id={service.id}
      className={`grid md:grid-cols-2 min-h-[90vh] items-stretch ${bgClass}`}
    >
      {/* Image */}
      <motion.div
        className={`relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'} min-h-[60vw] md:min-h-0`}
        variants={clipUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...sectionEase, duration: 1.3 }}
      >
        <motion.img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ y: imageY }}
        />
        <div className="absolute bottom-6 left-6 font-heading text-[9rem] leading-none text-white/8 select-none pointer-events-none">
          {service.number}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className={`flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-28 ${
          isEven ? 'md:order-2' : 'md:order-1'
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...sectionEase, delay: 0.2 }}
      >
        <div className="max-w-lg">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-heading text-sm tracking-[0.35em]">{service.number}</span>
            <div className="h-px w-10 bg-accent flex-shrink-0" />
            <span className="text-ink-secondary font-body text-[10px] uppercase tracking-[0.35em]">{service.label}</span>
          </div>

          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[4rem] text-ink leading-[0.93] mb-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionEase, delay: 0.3 }}
          >
            {service.headline}
          </motion.h2>

          <motion.p
            className="text-ink-secondary font-body text-base leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
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
                transition={{ ...sectionEase, delay: 0.45 + i * 0.08 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-shrink-0" />
                {d}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionEase, delay: 0.6 }}
          >
            <Button to="/inquire" variant="primary">Inquire About This Service</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <main className="pt-16 md:pt-20">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[900px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <img
            src="/our-services.png"
            alt="Elegant outdoor reception tablescape with white hydrangeas, candles, and coastal sunset view"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
          <motion.p
            className="text-accent text-[10px] tracking-[0.5em] uppercase font-body mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            Our Services
          </motion.p>
          <motion.h1
            className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.65 }}
          >
            Custom signage for
            <br />
            <em className="text-accent">every moment</em> of your day.
          </motion.h1>
        </div>
      </section>

      {/* ─── SERVICE BLOCKS ───────────────────────────────────── */}
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}

      {/* ─── FULL SUITE BANNER ────────────────────────────────── */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={sectionEase}
          >
            <div className="grid md:grid-cols-2 gap-16 items-end border-b border-white/10 pb-16 mb-16">
              <div>
                <span className="text-accent text-[10px] tracking-[0.5em] uppercase font-body block mb-6">A Full Suite</span>
                <h2 className="font-heading text-cream text-5xl md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9]">
                  Package all three
                  <br />
                  <em className="text-accent/80">services together.</em>
                </h2>
              </div>
              <div>
                <p className="text-cream/55 font-body text-base leading-relaxed mb-10">
                  We recommend combining Welcome Moments, Seating Charts, and Statement Installations for a cohesive, gallery-quality signage experience that ties your entire day together.
                </p>
                <Button to="/inquire" variant="white">Inquire About a Full Suite</Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-0">
              {[
                { stat: '01', label: 'Welcome Moments' },
                { stat: '02', label: 'Seating Charts' },
                { stat: '03', label: 'Statement Installations' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`${i > 0 ? 'pl-8 md:pl-16 border-l border-white/10' : ''} pr-4`}
                >
                  <p className="font-heading text-4xl md:text-5xl text-accent/30 mb-2">{item.stat}</p>
                  <p className="text-cream/40 font-body text-xs uppercase tracking-widest leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-cream-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionEase}
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink mb-3 leading-[0.95]">
                Don't see exactly
                <br />
                <em className="text-accent">what you're looking for?</em>
              </h2>
              <p className="text-ink-secondary font-body text-sm leading-relaxed max-w-md mt-4">
                Every project we take on is entirely custom. Tell us your vision and we'll build something made entirely for you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button to="/inquire" variant="primary">Begin Your Inquiry</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
