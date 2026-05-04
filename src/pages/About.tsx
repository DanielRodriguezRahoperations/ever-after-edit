import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

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
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative min-h-[520px] h-[70vh] max-h-[800px] overflow-hidden">
        <img
          src="/about-hero-new.png"
          alt="Custom wedding welcome sign with ceremony aisle and floral arrangements"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '35% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-8 sm:px-12 md:px-16">
          <div>
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-4">
              Our Story
            </p>
            <h1
              className="font-heading text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ fontWeight: 500, maxWidth: '26rem' }}
            >
              Built on the belief that every detail matters.
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <SectionWrapper className="bg-cream">
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start">
          <div>
            <p className="section-label mb-5">The Vision</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ink mb-8 leading-snug">
              Signage as a design statement.
            </h2>
            <div className="space-y-5 text-ink-secondary font-body text-base leading-relaxed">
              <p>
                The Ever After Edit was founded on a single premise: wedding signage should be as considered, as beautiful, and as personal as any other element of your day.
              </p>
              <p>
                For too long, signage has been treated as an afterthought — ordered online, printed generically, swapped in and out with no thought to how it fits within the larger aesthetic. We knew there was a different way.
              </p>
              <p>
                We take on a select number of weddings each season to ensure every piece is fully custom and intentionally designed.
              </p>
              <p>
                Nothing is templated. Nothing is rushed. Everything is considered.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden bg-stone-50" style={{ aspectRatio: '4/3' }}>
              <img
                src="/about-vision-1.png"
                alt="Directional beach wedding sign with sip celebrate dance cheers arrows"
                loading="lazy"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden bg-stone-50" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/about-vision-2.png"
                  alt="Custom monogram cornhole boards in black and white"
                  loading="lazy"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="overflow-hidden bg-stone-50" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/about-vision-3.png"
                  alt="Custom surfboard wedding welcome sign with palm tree design"
                  loading="lazy"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* NEW SECTION — FOUNDERS */}
      <SectionWrapper className="bg-cream">
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-center">
          {/* IMAGE */}
          <div className="overflow-hidden bg-stone-50" style={{ aspectRatio: '4/5' }}>
            <img
              src="/couple.jpeg"
              alt="Riley and Travis Zawisza founders of The Ever After Edit"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="section-label mb-5">The Founders</p>

            <div className="space-y-5 text-ink-secondary font-body text-base leading-relaxed">
              <p>
                The Ever After Edit was founded by husband and wife, Riley and Travis Zawisza.
              </p>

              <p>
                What began with designing the details for their own wedding quickly became something more — a shared vision for creating pieces that feel as intentional as the day itself.
              </p>

              <p>
                Riley brings a background in design and styling, with an eye for detail and storytelling. Travis, a U.S. Army veteran and skilled craftsman, brings each concept to life through thoughtfully built, custom pieces.
              </p>

              <p>
                Together, they create work that is both personal and enduring — designed to be felt, remembered, and photographed beautifully.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-cream-secondary">
        <p className="section-label mb-5">What Guides Us</p>
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-14 max-w-md leading-snug">
          Three principles behind every piece we make.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {values.map((v, i) => (
            <div key={i}>
              <p className="font-heading text-accent text-4xl mb-5">0{i + 1}</p>
              <h3 className="font-heading text-xl text-ink mb-4">{v.title}</h3>
              <p className="text-ink-secondary font-body text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-cream">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink mb-3">
              Ready to start something beautiful?
            </h2>
            <p className="text-ink-secondary font-body text-sm">
              We'd love to hear about your day.
            </p>
          </div>
          <Button to="/inquire" variant="primary">
            Begin Your Inquiry
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}
