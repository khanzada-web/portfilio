'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTarget, FiMap, FiPenTool, FiCode,
  FiCheckCircle, FiArrowRight, FiActivity, FiTerminal,
} from 'react-icons/fi';
import type { ReactElement } from 'react';

interface Step {
  number:      string;
  icon:        ReactElement;
  title:       string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01', icon: <FiTarget className="w-5 h-5" />,
    title: 'Logic Discovery',
    description: 'Analysing system requirements, user personas, and technical feasibility for your enterprise ecosystem.',
  },
  {
    number: '02', icon: <FiMap className="w-5 h-5" />,
    title: 'System Architecture',
    description: 'Mapping out the data flow, API integrations, and cloud infrastructure for maximum scalability.',
  },
  {
    number: '03', icon: <FiPenTool className="w-5 h-5" />,
    title: 'Precision Design',
    description: 'Crafting high-fidelity immersive interfaces focused on user psychological conversion and speed.',
  },
  {
    number: '04', icon: <FiCode className="w-5 h-5" />,
    title: 'Core Development',
    description: 'Building the engine using Next.js, TypeScript, and high-performance backend modules.',
  },
  {
    number: '05', icon: <FiActivity className="w-5 h-5" />,
    title: 'QA & Optimisation',
    description: 'Stress testing infrastructure and optimising load times to ensure 99th percentile performance.',
  },
  {
    number: '06', icon: <FiCheckCircle className="w-5 h-5" />,
    title: 'Deployment & Scale',
    description: 'Mainnet/Production launch with proactive monitoring and automated scaling protocols.',
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play effect: moves to the next step every 3 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo   = (i: number) => setActiveStep(i);
  const goPrev  = () => setActiveStep((p) => Math.max(0, p - 1));
  const goNext  = () => setActiveStep((p) => Math.min(STEPS.length - 1, p + 1));

  const current = STEPS[activeStep];

  return (
    <section
      id="process"
      className="py-28 bg-[#030712] font-orbitron text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-4 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>Execution_Protocol.v2</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Development <span className="text-[#39FF14]">Pipeline</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            A systematic engineering approach to transforming complex business logic into
            high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Step Selector (Left) ── */}
          <nav
            className="lg:col-span-4 space-y-3"
            aria-label="Process steps"
          >
            {STEPS.map((step, index) => (
              <button
                key={step.number}
                onClick={() => goTo(index)}
                aria-current={activeStep === index ? 'step' : undefined}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                  activeStep === index
                    ? 'bg-[#0B132B] border-[#39FF14]/50 shadow-lg translate-x-1'
                    : 'bg-[#0B132B]/40 backdrop-blur-sm border-white/10 hover:border-white/25 hover:bg-[#0B132B]/60'
                }`}
              >
                {/* Added pl-4 here to shift numbers toward the center */}
                <div className="flex items-center gap-5 pl-4">
                  <span className={`text-xs font-mono font-bold tracking-wider shrink-0 ${activeStep === index ? 'text-[#39FF14]' : 'text-white/40'}`}>
                    {step.number}
                  </span>
                  <span className={`font-bold tracking-wider text-xs uppercase ${activeStep === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {step.title}
                  </span>
                </div>
                {activeStep === index && (
                  <FiArrowRight className="text-[#39FF14] animate-pulse shrink-0 mr-2" aria-hidden="true" />
                )}
              </button>
            ))}
          </nav>

          {/* ── Detail Panel (Right) ── */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl relative shadow-xl overflow-hidden min-h-[380px] flex flex-col justify-between"
              >
                {/* Watermark Number */}
                <div
                  className="absolute -bottom-6 -right-4 text-[#39FF14]/5 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <span className="text-[14rem] font-black font-mono">{current.number}</span>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] flex items-center justify-center mb-6 shadow-md" aria-hidden="true">
                    {current.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed mb-8 max-w-xl">
                    {current.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap gap-8">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Status</span>
                    <span className="text-white font-bold text-xs uppercase font-mono">Optimized_Core</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Priority</span>
                    <span className="text-[#39FF14] font-bold text-xs uppercase font-mono">Critical_System</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators & Navigation Controls */}
            <div className="mt-6 flex justify-between items-center px-2">
              <div className="flex gap-2" role="tablist" aria-label="Step progress">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    role="tab"
                    aria-selected={activeStep === i}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === i ? 'w-8 bg-[#39FF14]' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  disabled={activeStep === 0}
                  aria-label="Previous step"
                  className="p-3 rounded-lg border border-white/15 bg-white/[0.02] text-white hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FiArrowRight className="rotate-180 w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={goNext}
                  disabled={activeStep === STEPS.length - 1}
                  aria-label="Next step"
                  className="p-3 rounded-lg border border-white/15 bg-white/[0.02] text-white hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center mt-20">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#39FF14] text-black px-10 py-4 rounded-lg font-bold tracking-wider uppercase text-sm hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all"
          >
            <span>Initiate Project_Build</span>
            <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}