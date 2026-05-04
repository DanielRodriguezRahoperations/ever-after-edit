import { motion } from 'framer-motion';
import Button from '../components/Button';

const featuredImages = [
  {
    src: '/welcome-1.png',
    alt: 'Zawisza Wedding welcome sign — black frame with gold picture light and peach roses',
  },
  {
    src: '/the-cocktail-call-1.png',
    alt: 'The Cocktail Call — custom cocktail wall installation with couple',
  },
  {
    src: '/siphappens.png',
    alt: 'Sip Happens Find Your Seat — illuminated wavy arch seating display with champagne flutes',
  },
];

const services = [
  {
    title: 'Welcome Moments',
    description:
      'A grand first impression. Custom-lettered welcome signs that set the tone the moment guests arrive.',
    image: '/featured-5.png',
    position: 'center center',
  },
  {
    title: 'Seating Charts',
    description:
      'Functional and beautiful. Architecturally composed seating displays designed to complement your venue.',
    image: '/seating-chart.png',
    position: 'center 20%',
  },
  {
    title: 'Statement Installations',
    description:
      'Monograms, arches, neon, florals. Large-format statement pieces that define a space.',
    image: '/the-after-tone-2.png',
    position: 'center center',
  },
];

const steps = [
  {
    number: '01',
    title: 'Inquiry',
    description: 'Submit your project details. We review every inquiry personally.',
  },
  {
    number: '02',
    title: 'Design Consultation',
    description: 'A one-on-one call to understand your vision, venue, and aesthetic.',
  },
  {
    number: '03',
    title: 'Custom Design',
    description: 'We craft your signage from scratch. Every element is made for you.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Flawlessly delivered and ready to install on your wedding day.',
  },
];

const testimonials = [
  {
    quote:
      'The Ever After Edit elevated our entire reception. Every guest asked about the signage — it was the most photographed detail of the evening.',
    name: 'Charlotte & James',
    event: 'Estate Wedding, Hudson Valley',
  },
  {
    quote:
      'Sophisticated, effortless, and entirely custom. Working with them felt like having a design director for our wedding.',
    name: 'Isabelle & Marcus',
    event: 'Chateau Wedding, Sonoma',
  },
];

const sectionEase = { duration: 0.85, ease: [0.16, 1, 0.3, 1] };
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  return (
    <main>
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
            className="absolute right-0 hidden h-full w-auto min-w-[1200px] object-contain md:block"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...sectionEase, duration: 1.1, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                'linear-gradient(to right, rgba(250,247,242,0.96) 0%, rgba(250,247,242,0.8) 30%, rgba(250,247,242,0.4) 55%, rgba(250,247,242,0.04) 80%, transparent 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionEase, delay: 0.35 }}
          />
        </div>

        <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center px-6 py-16 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <motion.div
              className="mb-8 inline-flex items-center gap-4 overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...sectionEase, delay: 0.45 }}
            >
              <span className="text-xs uppercase tracking-[0.35em] text-[#3d3530]">Signature signage</span>
              <div className="h-px w-16 bg-accent" />
            </motion.div>
            <motion.h1
              className="font-heading text-[3.9rem] leading-[0.92] tracking-[-0.03em] text-[#1a1714] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.8rem]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...sectionEase, delay: 0.55 }}
            >
              Designed to be
              <br />
              unapologetically seen.
            </motion.h1>
            <motion.div
              className="mt-8 max-w-xl text-[#3d3530]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...sectionEase, delay: 0.7 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.35em] leading-loose">
                Bold scale. Quiet luxury. Photographed details that define an entire evening.
              </p>
            </motion.div>
            <motion.div
              className="mt-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...sectionEase, delay: 0.85 }}
            >
              <Button to="/inquire" variant="primary">
                Begin the inquiry
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-cream py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={slideLeft}
        transition={sectionEase}
      >
        <div className="absolute right-0 top-0 h-[60%] w-[55%] -translate-y-1/4 translate-x-1/6 rounded-bl-[120px] bg-[#F3EEE8] opacity-90" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(360px,1fr)_minmax(420px,560px)] items-end">
            <div className="relative z-10">
              <span className="section-label mb-4 inline-block">Our Philosophy</span>
              <motion.h2
                className="font-heading text-4xl md:text-[4.6rem] text-ink leading-[0.95] max-w-2xl"
                variants={slideLeft}
              >
                Not signage.
                <br />
                <em>Art for your wedding day.</em>
              </motion.h2>
              <motion.p
                className="mt-8 max-w-xl text-ink-secondary font-body text-sm md:text-base leading-relaxed"
                variants={fadeUp}
              >
                Every piece is conceived as a visual destination — custom-crafted for your venue, your palette, and the way your guests will remember the day.
              </motion.p>
              <motion.p className="mt-6 max-w-xl text-ink-secondary font-body text-sm md:text-base leading-relaxed" variants={fadeUp}>
                We select just a few weddings each season so every commission receives the attention, materials, and finishing that make it feel truly elevated.
              </motion.p>
              <motion.div className="mt-10" variants={fadeUp}>
                <Button to="/about" variant="primary">
                  Learn more
                </Button>
              </motion.div>
            </div>

            <motion.div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#f5f2ee] shadow-[0_50px_120px_rgba(26,23,20,0.08)]" variants={slideRight}>
              <img
                src="/philosophy.png"
                alt="Mr. & Mrs. Rodriguez welcome sign on gold easel with champagne roses and candlelight"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t border-cream/60" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-cream-secondary py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <span className="section-label">Featured Work</span>
              <h2 className="font-heading text-5xl md:text-[5.6rem] text-ink leading-tight">
                A closer look
                <span className="block text-accent">at our most iconic installs.</span>
              </h2>
            </div>

            <p className="text-ink-secondary font-body text-base leading-relaxed max-w-2xl">
              These images are not just product shots — they are composed scenes that show how our work anchors a wedding’s ambiance and becomes the detail guests remember most.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:auto-rows-fr">
            <motion.div
              className="relative overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.08)] lg:col-span-2 lg:row-span-2"
              variants={scaleUp}
            >
              <img
                src="/welcome-1.png"
                alt="Zawisza Wedding welcome sign — black frame with gold picture light and peach roses"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.08)]" variants={scaleUp}>
              <img
                src="/the-cocktail-call-1.png"
                alt="The Cocktail Call — custom cocktail wall installation with couple"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-[2rem] bg-[#F3EEE8] shadow-[0_35px_80px_rgba(26,23,20,0.08)]" variants={scaleUp}>
              <img
                src="/siphappens.png"
                alt="Sip Happens Find Your Seat — illuminated wavy arch seating display with champagne flutes"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </motion.div>
          </div>

          <div className="mt-14 flex justify-end">
            <Button to="/signature-pieces" variant="ghost">
              View Full Gallery
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-cream py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={sectionEase}
      >
        <div className="absolute left-0 top-0 h-32 w-full bg-cream-secondary skew-y-[-4deg] origin-top-left" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="relative z-10 rounded-[2rem] border border-border bg-white/60 p-10 shadow-[0_30px_80px_rgba(26,23,20,0.08)]">
              <span className="section-label mb-4 inline-block">What We Create</span>
              <h2 className="font-heading text-5xl md:text-[5.4rem] text-ink leading-tight">
                Every piece
                <br />
                made for you.
              </h2>
              <div className="mt-8 space-y-6">
                {services.map((service) => (
                  <div key={service.title} className="flex gap-5 items-start">
                    <div className="mt-1 h-3 w-3 rounded-full bg-accent" />
                    <div>
                      <h3 className="font-heading text-2xl text-ink mb-2">{service.title}</h3>
                      <p className="text-ink-secondary font-body text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-ink py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-accent text-xs tracking-[0.4em] uppercase">How It Works</span>
          <h2 className="font-heading text-5xl md:text-[6rem] text-cream leading-tight mt-6">
            A process designed to feel effortless.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...sectionEase, delay: index * 0.08 }}
              >
                <p className="font-heading text-6xl text-accent mb-4">{step.number}</p>
                <h3 className="font-heading text-2xl text-cream mb-3">{step.title}</h3>
                <p className="text-cream/60 font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-cream-secondary py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={sectionEase}
      >
        <div className="absolute right-0 top-0 h-[50%] w-[45%] -translate-y-1/2 rounded-bl-[160px] bg-[#FAF7F2]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <span className="section-label">In Their Words</span>
              <h2 className="font-heading text-5xl md:text-[5.4rem] text-ink leading-tight">
                What our couples say.
              </h2>
            </div>
            <p className="text-ink-secondary font-body text-base leading-relaxed max-w-xl">
              Our work is designed to be felt, photographed, and remembered. These moments show how signage becomes part of the story.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="relative overflow-hidden rounded-[2rem] bg-cream p-10 shadow-[0_32px_80px_rgba(26,23,20,0.08)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...sectionEase, delay: index * 0.12 }}
              >
                <span className="absolute left-0 top-0 h-1 w-24 bg-accent" />
                <p className="font-heading italic text-ink text-xl leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-ink font-body text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-accent text-xs uppercase tracking-[0.35em] mt-2">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#141210]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={sectionEase}
      >
        <div className="absolute inset-0">
          <motion.img
            src="/wedding-party.png"
            alt="Wedding party"
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...sectionEase, duration: 1.2, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(20,18,16,0) 0%, rgba(20,18,16,0.08) 40%, rgba(20,18,16,0.58) 72%, rgba(20,18,16,0.88) 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionEase, delay: 0.3 }}
          />
        </div>

        <div className="relative z-10 flex min-h-[clamp(640px,92vw,820px)] items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
            <motion.p className="text-accent text-xs tracking-[0.35em] uppercase mb-4" variants={fadeUp}>
              Limited Availability
            </motion.p>
            <motion.h2
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl mx-auto"
              variants={fadeUp}
            >
              Your wedding day deserves this level of detail.
            </motion.h2>
            <motion.p className="mt-6 max-w-xl mx-auto text-white/75 font-body text-base leading-relaxed" variants={fadeUp}>
              We accept a limited number of commissions each season. Begin your inquiry today.
            </motion.p>
            <motion.div className="mt-10" variants={fadeUp}>
              <Button to="/inquire" variant="white">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
