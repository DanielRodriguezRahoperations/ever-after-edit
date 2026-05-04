import { motion } from 'framer-motion';
import Button from '../components/Button';

const services = [
  {
    title: 'Welcome Moments',
    description: 'A grand first impression. Custom-lettered welcome signs that set the tone the moment guests arrive.',
    image: '/featured-5.png',
    position: 'center center',
  },
  {
    title: 'Seating Charts',
    description: 'Functional and beautiful. Architecturally composed seating displays designed to complement your venue.',
    image: '/seating-chart.png',
    position: 'center 20%',
  },
  {
    title: 'Statement Installations',
    description: 'Monograms, arches, neon, florals. Large-format statement pieces that define a space.',
    image: '/the-after-tone-2.png',
    position: 'center center',
  },
];

const steps = [
  { number: '01', title: 'Inquiry', description: 'Submit your project details. We review every inquiry personally.' },
  { number: '02', title: 'Design Consultation', description: 'A one-on-one call to understand your vision, venue, and aesthetic.' },
  { number: '03', title: 'Custom Design', description: 'We craft your signage from scratch. Every element is made for you.' },
  { number: '04', title: 'Delivery', description: 'Flawlessly delivered and ready to install on your wedding day.' },
];

const testimonials = [
  {
    quote: 'The Ever After Edit elevated our entire reception. Every guest asked about the signage — it was the most photographed detail of the evening.',
    name: 'Charlotte & James',
    event: 'Estate Wedding, Hudson Valley',
  },
  {
    quote: 'Sophisticated, effortless, and entirely custom. Working with them felt like having a design director for our wedding.',
    name: 'Isabelle & Marcus',
    event: 'Chateau Wedding, Sonoma',
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const sectionEase = { duration: 0.85, ease };

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const slideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
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
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {Array(12).fill(null).map((_, i) => (
          <span key={i} className={`inline-flex items-center flex-shrink-0 pr-10 ${textClass}`}>
            {text}&nbsp;&nbsp;<span className="text-accent/60">✦</span>&nbsp;&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <motion.section
        className="relative w-full overflow-hidden bg-cream md:min-h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="absolute inset-0 bg-cream" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/hero-image-new.png"
            alt="The Ever After Edit — arched wedding welcome sign on gold easel with champagne roses and coastal view"
            className="absolute right-0 hidden h-full w-auto min-w-[1100px] object-contain md:block"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...sectionEase, duration: 1.1, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                'linear-gradient(to right, rgba(250,247,242,0.98) 0%, rgba(250,247,242,0.88) 28%, rgba(250,247,242,0.55) 50%, rgba(250,247,242,0.06) 80%, transparent 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionEase, delay: 0.35 }}
          />
        </div>

        <div className="relative z-10 px-6 py-20 md:px-12 lg:px-20 md:min-h-[calc(100vh-4rem)] md:flex md:items-center">
          <div className="max-w-5xl w-full">
            <motion.div
              className="mb-7 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...sectionEase, delay: 0.4 }}
            >
              <div className="h-px w-10 bg-accent flex-shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-ink-secondary font-body">
                Signature Signage · South Florida
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-[4.6rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.88] tracking-[-0.02em] text-ink"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sectionEase, duration: 1, delay: 0.5 }}
            >
              Designed
              <br />
              to be
              <br />
              <em className="text-accent">unapologetically</em>
              <br />
              seen.
            </motion.h1>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sectionEase, delay: 0.75 }}
            >
              <Button to="/inquire" variant="primary">Begin the inquiry</Button>
              <span className="text-ink-secondary font-body text-[10px] uppercase tracking-[0.35em]">
                Limited bookings per season
              </span>
            </motion.div>
          </div>
        </div>

        {/* Mobile image */}
        <motion.div
          className="md:hidden relative pb-10 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...sectionEase, delay: 0.9 }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F3EEE8]">
            <img
              src="/hero-image-new.png"
              alt="The Ever After Edit — arched wedding welcome sign on gold easel with champagne roses and coastal view"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ─── MARQUEE STRIP ─────────────────────────────────────── */}
      <div className="bg-ink overflow-hidden border-y border-white/5">
        <div className="py-5 space-y-1">
          <MarqueeRow
            text="Custom Signage"
            textClass="font-heading text-[7vw] md:text-[3.8vw] text-cream/12 uppercase tracking-[0.07em]"
          />
          <MarqueeRow
            text="Intentional Design"
            textClass="font-heading text-[7vw] md:text-[3.8vw] text-cream/12 uppercase tracking-[0.07em]"
          />
        </div>
      </div>

      {/* ─── PHILOSOPHY ────────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden bg-cream py-24 md:py-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <motion.div variants={slideLeft}>
              <span className="section-label mb-5 inline-block">Our Philosophy</span>
              <h2 className="font-heading text-5xl md:text-[5.5rem] lg:text-[6.5rem] text-ink leading-[0.9] mb-10">
                Not signage.
                <br />
                <em className="text-accent">Art for your</em>
                <br />
                <em>wedding day.</em>
              </h2>
              <div className="space-y-5 text-ink-secondary font-body text-base leading-relaxed max-w-lg border-l-2 border-accent/25 pl-8">
                <p>Every piece is conceived as a visual destination — custom-crafted for your venue, your palette, and the way your guests will remember the day.</p>
                <p>We select just a few weddings each season so every commission receives the attention, materials, and finishing that make it feel truly elevated.</p>
              </div>
              <div className="mt-10">
                <Button to="/about" variant="primary">Learn more</Button>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[#f5f2ee] shadow-[0_60px_140px_rgba(26,23,20,0.1)]"
              style={{ aspectRatio: '4/5' }}
              variants={clipUp}
              transition={{ ...sectionEase, duration: 1.2 }}
            >
              <img
                src="/philosophy.png"
                alt="Mr. & Mrs. Rodriguez welcome sign on gold easel with champagne roses and candlelight"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ─── FEATURED WORK ─────────────────────────────────────── */}
      <motion.section
        className="bg-cream-secondary py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14 grid md:grid-cols-[1fr_auto] gap-8 items-end border-b border-border pb-14">
            <div>
              <span className="section-label mb-4 inline-block">Featured Work</span>
              <h2 className="font-heading text-5xl md:text-[5.5rem] lg:text-[7rem] text-ink leading-[0.9]">
                A closer look
                <br />
                <em className="text-accent">at our most iconic installs.</em>
              </h2>
            </div>
            <p className="text-ink-secondary font-body text-sm leading-relaxed max-w-xs">
              Composed scenes that show how our work anchors a wedding's ambiance and becomes the detail guests remember most.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <motion.div
              className="relative overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.07)] lg:col-span-2 lg:row-span-2"
              variants={clipUp}
              transition={{ ...sectionEase, duration: 1.2 }}
            >
              <img
                src="/welcome-1.png"
                alt="Zawisza Wedding welcome sign — black frame with gold picture light and peach roses"
                loading="lazy"
                className="h-full w-full object-contain object-center min-h-[340px] lg:min-h-0"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.07)] aspect-square lg:aspect-auto"
              variants={clipUp}
              transition={{ ...sectionEase, duration: 1.2, delay: 0.13 }}
            >
              <img
                src="/the-cocktail-call-1.png"
                alt="The Cocktail Call — custom cocktail wall installation with couple"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.07)] aspect-square lg:aspect-auto"
              variants={clipUp}
              transition={{ ...sectionEase, duration: 1.2, delay: 0.24 }}
            >
              <img
                src="/siphappens.png"
                alt="Sip Happens Find Your Seat — illuminated wavy arch seating display with champagne flutes"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </motion.div>
          </div>

          <div className="mt-12 flex justify-end">
            <Button to="/signature-pieces" variant="ghost">View Full Gallery</Button>
          </div>
        </div>
      </motion.section>

      {/* ─── WHAT WE CREATE ────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden bg-cream py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-start">

            <motion.div variants={slideLeft} className="lg:sticky lg:top-28">
              <span className="section-label mb-5 inline-block">What We Create</span>
              <h2 className="font-heading text-5xl md:text-[5.5rem] lg:text-[6rem] text-ink leading-[0.9] mb-14">
                Every piece
                <br />
                <em className="text-accent">made for you.</em>
              </h2>
              <div className="space-y-0">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    className="flex gap-6 items-start border-t border-border py-7 last:border-b"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...sectionEase, delay: i * 0.1 }}
                  >
                    <span className="font-heading text-accent text-xs tracking-[0.3em] mt-1.5 flex-shrink-0">0{i + 1}</span>
                    <div>
                      <h3 className="font-heading text-2xl text-ink mb-2">{service.title}</h3>
                      <p className="text-ink-secondary font-body text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <Button to="/services" variant="primary">View All Services</Button>
              </div>
            </motion.div>

            <motion.div variants={slideRight}>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="flex flex-col gap-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F3EEE8]">
                    <img src={services[0].image} alt={services[0].title} loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: services[0].position }} />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F3EEE8]">
                    <img src={services[2].image} alt={services[2].title} loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: services[2].position }} />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F3EEE8]">
                    <img src={services[1].image} alt={services[1].title} loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: services[1].position }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={sectionEase}
          >
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase font-body block mb-5">How It Works</span>
            <h2 className="font-heading text-5xl md:text-[6rem] lg:text-[8rem] text-cream leading-[0.9]">
              A process designed
              <br />
              <em className="text-accent/80">to feel effortless.</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 border-t border-white/10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 py-10 md:py-0 md:pt-12 md:px-8 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...sectionEase, delay: index * 0.1 }}
              >
                <p className="font-heading text-[4.5rem] md:text-[5.5rem] text-accent/20 leading-none mb-5">{step.number}</p>
                <h3 className="font-heading text-xl text-cream mb-3">{step.title}</h3>
                <p className="text-cream/45 font-body text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden bg-cream-secondary py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end border-b border-border pb-14 mb-14">
            <div>
              <span className="section-label mb-4 inline-block">In Their Words</span>
              <h2 className="font-heading text-5xl md:text-[5.5rem] lg:text-[7rem] text-ink leading-[0.9]">
                What our
                <br />
                <em className="text-accent">couples say.</em>
              </h2>
            </div>
            <p className="text-ink-secondary font-body text-sm leading-relaxed max-w-xs">
              Designed to be felt, photographed, and remembered long after the last dance.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className={`py-12 ${index === 0 ? 'md:pr-16 md:border-r border-border' : 'md:pl-16'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...sectionEase, delay: index * 0.14 }}
              >
                <div className="h-px w-12 bg-accent mb-10" />
                <p className="font-heading italic text-ink text-2xl md:text-[2rem] leading-[1.3] mb-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-ink font-body text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-accent text-[10px] uppercase tracking-[0.35em] mt-1">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden bg-[#141210]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="absolute inset-0">
          <motion.img
            src="/wedding-party.png"
            alt="Wedding party celebrating"
            className="h-full w-full object-contain"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...sectionEase, duration: 1.4, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(20,18,16,0.1) 0%, rgba(20,18,16,0.2) 30%, rgba(20,18,16,0.72) 65%, rgba(20,18,16,0.95) 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionEase, delay: 0.3 }}
          />
        </div>

        <div className="relative z-10 flex min-h-[clamp(580px,75vw,800px)] items-end">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="max-w-3xl">
              <motion.p
                className="text-accent text-[10px] tracking-[0.5em] uppercase mb-5 font-body"
                variants={fadeUp}
              >
                Limited Availability
              </motion.p>
              <motion.h2
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92]"
                variants={fadeUp}
              >
                Your wedding day
                <br />
                deserves{' '}
                <em className="text-accent">this level</em>
                <br />
                of detail.
              </motion.h2>
              <motion.p
                className="mt-7 max-w-md text-white/60 font-body text-base leading-relaxed"
                variants={fadeUp}
              >
                We accept a limited number of commissions each season. Begin your inquiry today.
              </motion.p>
              <motion.div className="mt-10" variants={fadeUp}>
                <Button to="/inquire" variant="white">Start Your Project</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
