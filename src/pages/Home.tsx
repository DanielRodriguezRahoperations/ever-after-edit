import SectionWrapper from '../components/SectionWrapper';
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

export default function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden bg-cream md:min-h-screen">
        <img
          src="/hero-image-new.png"
          alt="The Ever After Edit — arched wedding welcome sign on gold easel with champagne roses and coastal view"
          className="absolute inset-0 hidden h-full w-full object-contain object-right md:block"
        />

        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(250,247,242,0.9) 0%, rgba(250,247,242,0.68) 27%, rgba(250,247,242,0.28) 48%, rgba(250,247,242,0.04) 68%, transparent 100%)',
          }}
        />

        <div className="block bg-cream md:hidden">
          <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden bg-cream">
            <img
              src="/hero-image-new.png"
              alt="The Ever After Edit — arched wedding welcome sign on gold easel with champagne roses and coastal view"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="relative z-10 flex md:min-h-screen md:items-center">
          <div className="w-full px-6 pb-12 pt-8 md:px-12 md:pb-0 md:pt-0 lg:px-20">
            <div className="max-w-md md:max-w-xl">
              <h1
                className="font-heading mb-4 text-[2.35rem] leading-[1.02] text-[#1a1714] md:mb-6 md:text-5xl md:leading-snug lg:text-6xl"
                style={{ fontWeight: 500 }}
              >
                <em>Designed to be noticed.</em>
              </h1>

              <p className="font-body mb-5 text-[10px] uppercase leading-loose tracking-widest text-[#3d3530] md:mb-8 md:text-xs">
                Timeless designs. Thoughtful details.
                <br />
                Made to elevate your celebration
                <br />
                and leave a lasting impression.
              </p>

              <blockquote className="mb-7 md:mb-10">
                <p className="font-heading mb-2 text-sm italic leading-relaxed text-[rgba(26,23,20,0.72)] md:text-base">
                  &ldquo;The sign was the first thing our guests saw, it set the tone for the entire weekend.&rdquo;
                </p>
                <cite className="not-italic font-body text-xs uppercase tracking-widest text-[#3d3530]">
                  — Madison &amp; Alex
                </cite>
              </blockquote>

              <Button to="/inquire" variant="primary">
                Start Your Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-cream">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <p className="section-label mb-5">Our Philosophy</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-6 md:mb-8">
              Not signage.
              <br />
              <em>Art for your wedding day.</em>
            </h2>
            <p className="text-ink-secondary font-body text-sm sm:text-base leading-relaxed mb-4 md:mb-5">
              The Ever After Edit was built on a single belief: the details of your wedding day deserve the same level of craft and intention as the dress, the flowers, and the venue itself.
            </p>
            <p className="text-ink-secondary font-body text-sm sm:text-base leading-relaxed mb-8 md:mb-10">
              We work with a select number of couples each season to create truly custom signage — designed from scratch, crafted with care, and delivered with an eye toward the final image.
            </p>
            <Button to="/about" variant="primary">
              Our Story
            </Button>
          </div>

          <div className="aspect-square overflow-hidden">
            <img
              src="/philosophy.png"
              alt="Mr. & Mrs. Rodriguez welcome sign on gold easel with champagne roses and candlelight"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream-secondary">
        <p className="section-label mb-3 text-center">Featured Work</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-12 md:mb-16">
          A closer look.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {featuredImages.map((img, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f2ee]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-14">
          <Button to="/signature-pieces" variant="ghost">
            View Full Gallery
          </Button>
        </div>
      </SectionWrapper>

      <section className="py-20 md:py-28 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            <div>
              <p className="section-label mb-4">What We Create</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink leading-tight max-w-xs">
                Every piece,<br />made for you.
              </h2>
            </div>
            <div className="md:pb-1">
              <Button to="/services" variant="ghost">
                All Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-5 lg:gap-7">
            {services.map((service, i) => (
              <div key={i} className="group flex flex-col">
                <div className="order-1 md:order-2 pt-0 md:pt-6 border-t border-border md:mt-6 mb-5 md:mb-0">
                  <h3 className="font-heading text-xl md:text-2xl text-ink mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-ink-secondary font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="order-2 md:order-1 aspect-[3/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    style={{ objectPosition: service.position }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-ink">
        <p className="text-accent text-xs tracking-widest uppercase font-body mb-5 text-center">
          How It Works
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-cream text-center mb-12 md:mb-16">
          A seamless creative process.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="text-center px-2">
              <p className="font-heading text-accent text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-5 leading-none">
                {step.number}
              </p>
              <h3 className="font-heading text-cream text-base sm:text-lg mb-2 md:mb-3">{step.title}</h3>
              <p className="text-cream/50 font-body text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream-secondary">
        <p className="section-label mb-3 text-center">In Their Words</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-12 md:mb-14">
          What our couples say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream p-8 sm:p-10 md:p-12 border border-border">
              <p className="font-heading italic text-ink text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-ink font-body text-sm tracking-wide">{t.name}</p>
                <p className="text-ink-secondary font-body text-xs tracking-wide mt-1">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section
        className="relative overflow-hidden bg-[#141210]"
        style={{ minHeight: 'clamp(640px, 92vw, 820px)' }}
      >
        <div className="absolute inset-0">
          <img
            src="/wedding-party.png"
            alt="Wedding party"
            className="w-full h-full object-contain md:object-cover"
            style={{
              objectPosition: 'center top',
              filter: 'contrast(1.08) brightness(0.96)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(20,18,16,0) 0%, rgba(20,18,16,0.08) 40%, rgba(20,18,16,0.58) 72%, rgba(20,18,16,0.88) 100%)',
            }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col justify-end"
          style={{ minHeight: 'clamp(640px, 92vw, 820px)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center w-full pb-12 sm:pb-20 md:pb-28">
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-4 md:mb-5">
              Limited Availability
            </p>
            <h2 className="font-heading text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-5 md:mb-8 max-w-2xl mx-auto">
              Your wedding day deserves this level of detail.
            </h2>
            <p className="text-white/75 font-body text-sm sm:text-base mb-8 md:mb-10 max-w-sm sm:max-w-md mx-auto leading-relaxed">
              We accept a limited number of commissions each season. Begin your inquiry today.
            </p>
            <Button to="/inquire" variant="white">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}