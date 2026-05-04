import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const sectionEase = { duration: 0.9, ease };

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

const clipUp = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
};

function MarqueeRow({ text, textClass = '' }: { text: string; textClass?: string }) {
  return (
    <div className="overflow-hidden select-none">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {Array(12).fill(null).map((_, i) => (
          <span key={i} className={`inline-flex items-center flex-shrink-0 pr-10 ${textClass}`}>
            {text}&nbsp;&nbsp;<span className="text-accent/50">✦</span>&nbsp;&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="pt-16 md:pt-20">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[540px] max-h-[920px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="/about-hero-new.png"
            alt="Custom wedding welcome sign with ceremony aisle and floral arrangements"
            className="w-full h-full object-cover"
            style={{ objectPosition: '35% center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 md:px-20 pb-20 md:pb-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-accent text-[10px] tracking-[0.5em] uppercase font-body mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
          >
            Built on the belief that
            <br />
            <em className="text-accent">every detail matters.</em>
          </motion.h1>
        </motion.div>
      </section>

      {/* ─── BRAND STORY ──────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={sectionEase}
            >
              <p className="text-accent text-[10px] tracking-[0.45em] uppercase font-body mb-7">The Vision</p>
              <h2 className="font-heading text-5xl sm:text-6xl md:text-[4rem] lg:text-[5.5rem] text-ink mb-12 leading-[0.9]">
                Signage as a
                <br />
                <em className="text-accent">design statement.</em>
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
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...sectionEase, delay: 0.15 }}
            >
              <motion.div
                className="overflow-hidden bg-[#F3EEE8] rounded-[1.5rem]"
                style={{ aspectRatio: '4/3' }}
                variants={clipUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...sectionEase, duration: 1.2 }}
              >
                <img
                  src="/about-vision-1.png"
                  alt="Directional beach wedding sign with sip celebrate dance cheers arrows"
                  loading="lazy"
                  className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="overflow-hidden bg-[#F3EEE8] rounded-[1.5rem]"
                  style={{ aspectRatio: '3/4' }}
                  variants={clipUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ ...sectionEase, duration: 1.2, delay: 0.1 }}
                >
                  <img
                    src="/about-vision-2.png"
                    alt="Custom monogram cornhole boards in black and white"
                    loading="lazy"
                    className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  className="overflow-hidden bg-[#F3EEE8] rounded-[1.5rem]"
                  style={{ aspectRatio: '3/4' }}
                  variants={clipUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ ...sectionEase, duration: 1.2, delay: 0.18 }}
                >
                  <img
                    src="/about-vision-3.png"
                    alt="Custom surfboard wedding welcome sign with palm tree design"
                    loading="lazy"
                    className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ────────────────────────────────────── */}
      <div className="bg-cream-secondary overflow-hidden border-y border-border">
        <div className="py-6">
          <MarqueeRow
            text="Intentional Design"
            textClass="font-heading text-[8vw] md:text-[4.5vw] text-ink/10 uppercase tracking-[0.06em]"
          />
          <MarqueeRow
            text="Elevated Craft"
            textClass="font-heading text-[8vw] md:text-[4.5vw] text-ink/10 uppercase tracking-[0.06em]"
          />
        </div>
      </div>

      {/* ─── FOUNDERS ─────────────────────────────────────────── */}
      <section className="bg-cream-secondary py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            <motion.div
              className="overflow-hidden rounded-[2rem]"
              style={{ aspectRatio: '4/5' }}
              variants={clipUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...sectionEase, duration: 1.3 }}
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
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...sectionEase, delay: 0.2 }}
            >
              <p className="text-accent text-[10px] tracking-[0.45em] uppercase font-body mb-7">The Founders</p>
              <h2 className="font-heading text-5xl sm:text-6xl md:text-[4rem] lg:text-[5rem] text-ink mb-12 leading-[0.9]">
                Riley & Travis
                <br />
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

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionEase}
          >
            <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-body mb-6">What Guides Us</p>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] text-cream leading-[0.9] max-w-4xl">
              Three principles behind
              <br />
              <em className="text-accent/80">every piece we make.</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-white/10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 py-12 md:py-0 md:pt-12 md:px-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...sectionEase, delay: i * 0.12 }}
              >
                <p className="font-heading text-accent/25 text-[5rem] mb-6 leading-none">0{i + 1}</p>
                <h3 className="font-heading text-2xl text-cream mb-4">{v.title}</h3>
                <p className="text-cream/50 font-body text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionEase}
          >
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl text-ink mb-3 leading-[0.93]">
                Ready to start
                <br />
                <em className="text-accent">something beautiful?</em>
              </h2>
              <p className="text-ink-secondary font-body text-sm mt-4">
                We'd love to hear about your day.
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
