import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SignaturePieces() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openCategory = categories.find((c) => c.title === activeCategory);

  useEffect(() => {
    document.body.style.overflow = activeCategory ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeCategory]);

  const openGallery = (title: string) => {
    setActiveCategory(title);
    setActiveImageIndex(0);
  };

  const prev = () => {
    if (!openCategory) return;
    setActiveImageIndex((i) => (i - 1 + openCategory.images.length) % openCategory.images.length);
  };

  const next = () => {
    if (!openCategory) return;
    setActiveImageIndex((i) => (i + 1) % openCategory.images.length);
  };

  return (
    <main className="pt-16 md:pt-20">

      {/* HERO */}
      <section className="bg-cream py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end border-b border-border pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-5">Rentals & Builds</p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.88]">
                Signature
                <span className="block italic text-accent">Pieces</span>
              </h1>
            </motion.div>
            <motion.p
              className="text-ink-secondary font-body text-base leading-relaxed max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
            >
              A curated collection of our most distinctive installations. Each piece tells a story. Each moment, a memory.
            </motion.p>
          </div>

          {/* Count */}
          <motion.div
            className="flex items-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-heading text-4xl text-accent">{String(categories.length).padStart(2, '0')}</span>
            <span className="text-ink-secondary font-body text-xs uppercase tracking-widest">Collections Available</span>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-cream-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease, delay: index * 0.07 }}
                className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <button
                  onClick={() => openGallery(category.title)}
                  className="group w-full text-left block"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#F3EEE8] aspect-[4/5] border border-border">
                    <img
                      src={category.images[0].src}
                      alt={category.images[0].alt}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                    {/* Image count badge */}
                    {category.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-ink/80 text-cream px-3 py-1 text-xs tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.images.length} images
                      </div>
                    )}
                    {/* View prompt */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent py-6 px-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-cream font-body text-xs uppercase tracking-[0.3em]">View Collection</p>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-body mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-heading text-xl md:text-2xl text-ink group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-ink-secondary group-hover:text-accent transition-colors duration-300 text-lg">→</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {openCategory && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink/96 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-5 border-b border-accent/15 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-body mb-1">Collection</p>
                <h2 className="font-heading text-xl md:text-3xl text-cream">{openCategory.title}</h2>
              </motion.div>
              <div className="flex items-center gap-4">
                {openCategory.images.length > 1 && (
                  <p className="text-cream/40 font-body text-xs tracking-widest hidden sm:block">
                    {activeImageIndex + 1} / {openCategory.images.length}
                  </p>
                )}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-cream/50 hover:text-cream transition-colors p-2"
                  aria-label="Close gallery"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 relative flex items-center justify-center p-6 lg:p-12 min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                >
                  <img
                    src={openCategory.images[activeImageIndex].src}
                    alt={openCategory.images[activeImageIndex].alt}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next */}
              {openCategory.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream transition-colors p-3 bg-ink/40 hover:bg-ink/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream transition-colors p-3 bg-ink/40 hover:bg-ink/70"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {openCategory.images.length > 1 && (
              <div className="flex-shrink-0 flex gap-3 justify-center px-6 py-4 border-t border-accent/10">
                {openCategory.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-14 h-14 overflow-hidden border-2 transition-colors ${
                      i === activeImageIndex ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ink mb-3 leading-snug">
                Interested in a signature piece for your day?
              </h2>
              <p className="text-ink-secondary font-body text-base">
                We'd love to talk through your vision.
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
