import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const values = [
  {
    title: 'Intentional Design',
    description:
      'Every piece begins with a conversation about your vision — your venue, your aesthetic, your story. Nothing is templated. Nothing is rushed.',
  },
  {
    title: 'Elevated Craft',
    description:
      'We source premium materials, partner with expert artisans, and hold ourselves to a standard of excellence that shows in every finished piece.',
  },
  {
    title: 'Refined Taste',
    description:
      'Our aesthetic leans modern and restrained — the kind of beauty that photographs effortlessly and ages impeccably.',
  },
];

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="pt-16 md:pt-20">

      {/* HERO — parallax */}
      <section ref={heroRef} className="relative h-[75vh] min-h-[500px] max-h-[860px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="/about-hero-new.png"
            alt="Custom wedding welcome sign with ceremony aisle and floral arrangements"
            className="w-full h-full object-cover"
            style={{ objectPosition: '35% center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end px-8 sm:px-12 md:px-20 pb-16 md:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-accent text-xs tracking-[0.4em] uppercase font-body mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
          >
            Built on the belief that every detail matters.
          </motion.h1>
        </motion.div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease }}
            >
              <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-6">The Vision</p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.4rem] text-ink mb-10 leading-[0.95]">
                Signage as a<br />
                <em>design statement.</em>
              </h2>
              <div className="space-y-5 text-ink-secondary font-body text-base leading-relaxed border-l-2 border-accent/30 pl-8">
                {[
                  'The Ever After Edit was founded on a single premise: wedding signage should be as considered, as beautiful, and as personal as any other element of your day.',
                  'For too long, signage has been treated as an afterthought — ordered online, printed generically, swapped in and out with no thought to how it fits within the larger aesthetic. We knew there was a different way.',
                  'We take on a select number of weddings each season to ensure every piece is fully custom and intentionally designed.',
                  'Nothing is templated. Nothing is rushed. Everything is considered.',
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease, delay: 0.15 }}
            >
              <div className="overflow-hidden bg-[#F3EEE8]" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/about-vision-1.png"
                  alt="Directional beach wedding sign with sip celebrate dance cheers arrows"
                  loading="lazy"
                  className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden bg-[#F3EEE8]" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/about-vision-2.png"
                    alt="Custom monogram cornhole boards in black and white"
                    loading="lazy"
                    className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden bg-[#F3EEE8]" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/about-vision-3.png"
                    alt="Custom surfboard wedding welcome sign with palm tree design"
                    loading="lazy"
                    className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-cream-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            <motion.div
              className="overflow-hidden"
              style={{ aspectRatio: '4/5' }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease }}
            >
              <img
                src="/couple.jpeg"
                alt="Riley and Travis Zawisza founders of The Ever After Edit"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
            >
              <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-6">The Founders</p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] text-ink mb-10 leading-[0.95]">
                Riley & Travis<br />
                <em className="text-accent">Zawisza.</em>
              </h2>
              <div className="space-y-5 text-ink-secondary font-body text-base leading-relaxed">
                {[
                  'The Ever After Edit was founded by husband and wife, Riley and Travis Zawisza.',
                  'What began with designing the details for their own wedding quickly became something more — a shared vision for creating pieces that feel as intentional as the day itself.',
                  'Riley brings a background in design and styling, with an eye for detail and storytelling. Travis, a U.S. Army veteran and skilled craftsman, brings each concept to life through thoughtfully built, custom pieces.',
                  'Together, they create work that is both personal and enduring — designed to be felt, remembered, and photographed beautifully.',
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.08 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-6">What Guides Us</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-cream leading-[0.95] max-w-lg">
              Three principles behind every piece we make.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-white/10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 py-10 md:py-0 md:px-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              >
                <p className="font-heading text-accent text-5xl mb-6 leading-none">0{i + 1}</p>
                <h3 className="font-heading text-xl text-cream mb-4">{v.title}</h3>
                <p className="text-cream/55 font-body text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-3 leading-snug">
                Ready to start something beautiful?
              </h2>
              <p className="text-ink-secondary font-body text-sm">
                We'd love to hear about your day.
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
