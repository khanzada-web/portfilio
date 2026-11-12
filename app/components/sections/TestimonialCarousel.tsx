'use client';

import { AnimatePresence, LazyMotion, m, useInView, useReducedMotion, type PanInfo } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiShield, FiStar } from 'react-icons/fi';
import { AUTOPLAY_MS, SWIPE_THRESHOLD, carouselSlide } from '@/app/lib/motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  status: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Mussawar's Web3 frontend expertise transformed our DeFi platform. The wallet integration and user interface are exceptional.",
    author: 'Alex Thompson',
    role: 'CEO, Adderals',
    rating: 5,
    status: 'VERIFIED_PARTNER',
  },
  {
    quote: 'His React and Web3.js skills are outstanding. He delivered our NFT marketplace with seamless blockchain integration.',
    author: 'Michael Chen',
    role: 'Product Lead, Soft Stake',
    rating: 5,
    status: 'CORE_CONTRIBUTOR',
  },
  {
    quote: 'Working with Mussawar on our Web3 project was incredible. His full-stack capabilities and design sense are top-notch.',
    author: 'James Rodriguez',
    role: 'CTO, RPG Market',
    rating: 5,
    status: 'EXTERNAL_AUDIT',
  },
];

const TOTAL = TESTIMONIALS.length;

// Drag needs the larger feature bundle; load it only for this component.
const loadDragFeatures = () => import('../motion/features-drag').then((mod) => mod.default);

const NAV_BUTTON =
  'pointer-events-auto rounded-xl border border-white/15 bg-ink/90 p-3.5 text-white shadow-2xl transition-colors hover:border-neon/50 hover:text-neon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon';

/** Auto-advancing, swipeable testimonial carousel. Pauses on hover, focus, off-screen and reduced motion. */
export function TestimonialCarousel() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef);
  const reduce = useReducedMotion();

  const go = useCallback((step: number) => {
    setSlide(([current]) => [(current + step + TOTAL) % TOTAL, step]);
  }, []);

  const goTo = (target: number) => setSlide(([current]) => [target, target >= current ? 1 : -1]);

  useEffect(() => {
    if (paused || !inView || reduce) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS.testimonials);
    return () => clearInterval(id);
  }, [paused, inView, reduce, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  const current = TESTIMONIALS[index];

  return (
    <LazyMotion features={loadDragFeatures}>
      <div
        ref={rootRef}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="relative">
          <div
            className="card relative z-10 overflow-hidden p-10 shadow-2xl hover:border-white/10 md:p-16"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div
              className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-bl-xl border-b border-l border-neon/20 bg-neon/10"
              aria-hidden="true"
            >
              <FiShield className="text-lg text-neon" />
            </div>

            <div aria-live={paused ? 'polite' : 'off'} aria-atomic="true">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <m.figure
                  key={index}
                  custom={direction}
                  variants={carouselSlide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={onDragEnd}
                  className="mx-auto max-w-3xl cursor-grab touch-pan-y space-y-6 text-center active:cursor-grabbing"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${TOTAL}`}
                >
                  <div className="inline-block rounded-md border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neon">
                    {current.status}
                  </div>

                  <blockquote className="select-none text-xl font-bold leading-relaxed tracking-tight text-white md:text-3xl">
                    &quot;{current.quote}&quot;
                  </blockquote>

                  <div className="flex justify-center gap-1.5 pt-2" role="img" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <FiStar key={i} className="h-4 w-4 fill-neon text-neon" aria-hidden="true" />
                    ))}
                  </div>

                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-mono text-lg font-bold uppercase tracking-wider text-white">{current.author}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/65">{current.role}</p>
                  </figcaption>
                </m.figure>
              </AnimatePresence>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-4 -right-4 top-1/2 z-20 flex -translate-y-1/2 justify-between md:-left-8 md:-right-8">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={NAV_BUTTON}>
              <FiChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={NAV_BUTTON}>
              <FiChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Indicators: 44px-tall hit areas, the bar itself scales (no width animation) */}
        <div className="mt-8 flex justify-center gap-1">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.author}
              type="button"
              aria-current={i === index ? 'true' : undefined}
              aria-label={`View testimonial from ${t.author}`}
              onClick={() => goTo(i)}
              className="group flex h-11 w-14 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon"
            >
              <span
                className={`block h-1.5 w-12 rounded-full transition-[scale,background-color] duration-300 ${
                  i === index ? 'scale-x-100 bg-neon shadow-[0_0_8px_#39FF14]' : 'scale-x-[0.25] bg-white/30 group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
}
