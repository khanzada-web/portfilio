'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiShield, FiTerminal } from 'react-icons/fi';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
  quote:  string;
  author: string;
  role:   string;
  rating: number;
  status: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    quote:  "Mussawar's Web3 frontend expertise transformed our DeFi platform. The wallet integration and user interface are exceptional.",
    author: 'Alex Thompson',
    role:   'CEO, Adderals',
    rating: 5,
    status: 'VERIFIED_PARTNER',
  },
  {
    quote:  "His React and Web3.js skills are outstanding. He delivered our NFT marketplace with seamless blockchain integration.",
    author: 'Michael Chen',
    role:   'Product Lead, Soft Stake',
    rating: 5,
    status: 'CORE_CONTRIBUTOR',
  },
  {
    quote:  "Working with Mussawar on our Web3 project was incredible. His full-stack capabilities and design sense are top-notch.",
    author: 'James Rodriguez',
    role:   'CTO, RPG Market',
    rating: 5,
    status: 'EXTERNAL_AUDIT',
  },
];

const TOTAL = TESTIMONIALS.length;

// ─── Component ────────────────────────────────────────────────────────────────

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % TOTAL),
    [],
  );

  const goPrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL),
    [],
  );

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-28 bg-[#030712] relative overflow-hidden font-orbitron text-white"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>Social_Proof_Protocol</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Client <span className="text-[#39FF14]">Reviews</span>
          </h2>
        </div>

        {/* Testimonial display container */}
        <div className="relative">
          <div
            className="relative bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-10 md:p-16 shadow-2xl overflow-hidden z-10"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Corner decoration badge */}
            <div
              className="absolute top-0 right-0 w-14 h-14 bg-[#39FF14]/10 flex items-center justify-center rounded-bl-xl border-b border-l border-[#39FF14]/20"
              aria-hidden="true"
            >
              <FiShield className="text-[#39FF14] text-lg animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6 max-w-3xl mx-auto"
              >
                <div className="inline-block text-[10px] font-mono font-bold bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 px-3 py-1 rounded-md tracking-[0.2em] uppercase">
                  {current.status}
                </div>

                <blockquote className="text-xl md:text-3xl text-white font-bold leading-relaxed tracking-tight">
                  &quot;{current.quote}&quot;
                </blockquote>

                {/* Star rating */}
                <div className="flex justify-center gap-1.5 pt-2" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-[#39FF14] fill-[#39FF14] w-4 h-4"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <footer className="pt-4 border-t border-white/10 mt-6">
                  <cite className="not-italic">
                    <p className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                      {current.author}
                    </p>
                    <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mt-1 font-mono">
                      {current.role}
                    </p>
                  </cite>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows with higher z-index (z-25) and pulled slightly outward */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 md:-left-8 md:-right-8 pointer-events-none z-25">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="pointer-events-auto p-3.5 rounded-xl border border-white/15 bg-[#030712]/90 backdrop-blur-md text-white hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all shadow-2xl"
            >
              <FiChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="pointer-events-auto p-3.5 rounded-xl border border-white/15 bg-[#030712]/90 backdrop-blur-md text-white hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all shadow-2xl"
            >
              <FiChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Progress indicator bars */}
        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.author}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`View testimonial from ${t.author}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-12 bg-[#39FF14] shadow-[0_0_8px_#39FF14]' : 'w-3 bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}