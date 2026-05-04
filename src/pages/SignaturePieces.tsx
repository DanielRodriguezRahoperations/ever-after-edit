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
const sectionEase = { duration: 0.9, ease };

const clipUp = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
};

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

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-end border-b border-white/10 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-body mb-6">Rentals & Builds</p>
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-cream leading-[0.88]">
                Signature
                <br />
                <em className="text-accent">Pieces.</em>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
            >
              <p className="text-cream/50 font-body text-base leading-relaxed max-w-sm md:ml-auto">
                A curated collection of our most distinctive installations. Each piece tells a story. Each moment, a memory.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-8 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-heading text-5xl text-accent/30">{String(categories.length).padStart(2, '0')}</span>
            <div className="h-px flex-1 bg-white/10 max-w-[80px]" />
            <span className="text-cream/35 font-body text-[10px] uppercase tracking-[0.45em]">Collections Available</span>
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY GRID ─────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={clipUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...sectionEase, duration: 1.1, delay: index * 0.07 }}
              >
                <button
                  onClick={() => openGallery(category.title)}
                  className="group w-full text-left block"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#F3EEE8] aspect-[4/5] rounded-[1.5rem]">
                    <img
                      src={category.images[0].src}
                      alt={category.images[0].alt}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-colors duration-500 rounded-[1.5rem]" />
                    {category.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-ink/70 text-cream px-3 py-1 text-[10px] tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                        {category.images.length} images
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/55 to-transparent py-7 px-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-[1.5rem]">
                      <p className="text-cream font-body text-[10px] uppercase tracking-[0.35em]">View Collection</p>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-body mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-heading text-xl md:text-2xl text-ink group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-ink-secondary group-hover:text-accent transition-colors duration-300 text-lg translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─────────────────────────────────────────── */}
      <AnimatePresence>
        {openCategory && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink/96 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 lg:px-12 py-5 border-b border-white/10 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p className="text-accent text-[10px] uppercase tracking-[0.4em] font-body mb-1">Collection</p>
                <h2 className="font-heading text-2xl md:text-3xl text-cream">{openCategory.title}</h2>
              </motion.div>
              <div className="flex items-center gap-5">
                {openCategory.images.length > 1 && (
                  <p className="text-cream/35 font-body text-xs tracking-widest hidden sm:block">
                    {activeImageIndex + 1} / {openCategory.images.length}
                  </p>
                )}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-cream/50 hover:text-cream transition-colors p-2"
                  aria-label="Close gallery"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-6 lg:p-12 min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={openCategory.images[activeImageIndex].src}
                    alt={openCategory.images[activeImageIndex].alt}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                  />
                </motion.div>
              </AnimatePresence>

              {openCategory.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream transition-colors p-3 bg-ink/40 hover:bg-ink/70 rounded-full"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream transition-colors p-3 bg-ink/40 hover:bg-ink/70 rounded-full"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {openCategory.images.length > 1 && (
              <div className="flex-shrink-0 flex gap-3 justify-center px-6 py-4 border-t border-white/10">
                {openCategory.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-14 h-14 overflow-hidden rounded-lg border-2 transition-all ${
                      i === activeImageIndex ? 'border-accent' : 'border-transparent opacity-40 hover:opacity-70'
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

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-border pt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionEase}
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink mb-3 leading-[0.93]">
                Interested in a signature piece
                <br />
                <em className="text-accent">for your day?</em>
              </h2>
              <p className="text-ink-secondary font-body text-sm mt-4">
                We'd love to talk through your vision.
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
