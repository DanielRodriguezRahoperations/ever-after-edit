import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const categories = [
  {
    title: 'The Linen Bar',
    images: [
      { src: '/the-linen-bar-1.png', alt: 'The Linen Bar — wide view with garden setting' },
      { src: '/the-linen-bar-2.png', alt: 'The Linen Bar — detail shot' },
    ],
  },
  {
    title: 'The Garden Bar',
    images: [
      { src: '/the-garden-bar.png', alt: 'The Garden Bar — outdoor setting with florals' },
    ],
  },
  {
    title: 'The After Tone',
    images: [
      { src: '/the-after-tone.png', alt: 'The After Tone — champagne wall installation' },
    ],
  },
  {
    title: 'The Cocktail Call',
    images: [
      { src: '/the-cocktail-call-1.png', alt: 'The Cocktail Call — cocktail wall close-up' },
      { src: '/the-cocktail-call-2.png', alt: 'The Cocktail Call — full installation with couple' },
    ],
  },
  {
    title: 'The Feature',
    images: [
      { src: '/the-feature.png', alt: 'The Feature — custom surfboard signage' },
    ],
  },
  {
    title: 'The Coastal Statement',
    images: [
      { src: '/the-coastal-statement.png', alt: 'The Coastal Statement — shot glass wall installation' },
      { src: '/the-coastal-statement-2.png', alt: 'The Coastal Statement — detail view' },
    ],
  },
  {
    title: 'The Signature Set',
    images: [
      { src: '/the-signature-set.png', alt: 'The Signature Set — custom monogram cornhole boards' },
    ],
  },
];

export default function SignaturePieces() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeCategory ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeCategory]);

  const openCategory = categories.find((c) => c.title === activeCategory);

  return (
    <main className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-4">Rentals & Builds</p>
          <h1 className="font-heading text-4xl md:text-6xl text-ink leading-tight max-w-xl">
            Signature Pieces
          </h1>
        </div>
      </section>

      {/* Category Grid */}
      <SectionWrapper className="bg-cream-secondary">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
          {categories.map((category) => (
            <div key={category.title}>
              <div className="mb-5">
                <p className="section-label mb-2">Category</p>
                <button
                  onClick={() => setActiveCategory(category.title)}
                  className="font-heading text-2xl md:text-3xl text-ink hover:text-accent transition-colors duration-300 text-left"
                >
                  {category.title}
                </button>
              </div>

              {/* Featured image */}
              <button
                onClick={() => setActiveCategory(category.title)}
                className="group block w-full overflow-hidden text-left"
              >
                <div className="overflow-hidden relative aspect-[4/5] bg-[#F3EEE8]">
                  <img
                    src={category.images[0].src}
                    alt={category.images[0].alt}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                </div>
                <p className="text-ink-secondary font-body text-xs tracking-widest uppercase mt-3">
                  View all {category.images.length} image{category.images.length !== 1 ? 's' : ''} &rarr;
                </p>
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      {openCategory && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 flex flex-col overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setActiveCategory(null); }}
        >
          <div className="flex items-center justify-between px-6 lg:px-12 py-6 flex-shrink-0">
            <div>
              <p className="section-label text-cream/60 mb-1">Category</p>
              <h2 className="font-heading text-2xl text-cream">{openCategory.title}</h2>
            </div>
            <button
              onClick={() => setActiveCategory(null)}
              className="text-cream/60 hover:text-cream transition-colors duration-300 p-2"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 lg:px-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {openCategory.images.map((img, i) => (
              <div key={i} className="group overflow-hidden bg-[#F3EEE8]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <SectionWrapper className="bg-cream">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink mb-3">
              Interested in a signature piece for your day?
            </h2>
            <p className="text-ink-secondary font-body text-sm">
              We'd love to talk through your vision.
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
