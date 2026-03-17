'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTarget, FiMap, FiPenTool, FiCode,
  FiCheckCircle, FiArrowRight, FiActivity,
} from 'react-icons/fi';
import type { ReactElement } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  number:      string;
  icon:        ReactElement;
  title:       string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// ✅ Extracted outside the component — previously this array was re-created on
//    every render, which also broke React's ability to cache it for AnimatePresence.

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

// ─── Component ────────────────────────────────────────────────────────────────

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const goTo    = (i: number) => setActiveStep(i);
  const goPrev  = () => setActiveStep((p) => Math.max(0, p - 1));
  const goNext  = () => setActiveStep((p) => Math.min(STEPS.length - 1, p + 1));

  const current = STEPS[activeStep];

  return (
    <section
      id="process"
      className="py-32 bg-[#060B16] font-orbitron text-[#39FF14] overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block border border-[#39FF14] px-4 py-1.5 mb-6 text-[10px] tracking-[0.4em] uppercase opacity-70">
            Execution_Protocol.v2
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Development <span className="text-[#39FF14]">Pipeline</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
            A systematic engineering approach to transforming complex business logic into
            high-performance digital products.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Step selector — Left ── */}
          <nav
            className="lg:col-span-4 space-y-4"
            aria-label="Process steps"
          >
            {STEPS.map((step, index) => (
              <button
                key={step.number}
                // ✅ Key is the stable step number, not the array index
                onClick={() => goTo(index)}
                aria-current={activeStep === index ? 'step' : undefined}
                // ✅ aria-current="step" is the correct ARIA attribute for wizard-style navigation
                className={`w-full text-left p-6 transition-all duration-500 border-l-2 flex items-center justify-between group ${
                  activeStep === index
                    ? 'bg-[#39FF14]/10 border-[#39FF14] translate-x-4'
                    : 'bg-transparent border-white/10 hover:border-[#39FF14]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold ${activeStep === index ? 'text-[#39FF14]' : 'text-white/40'}`}>
                    {step.number}
                  </span>
                  <span className={`font-bold tracking-widest text-sm uppercase ${activeStep === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {step.title}
                  </span>
                </div>
                {activeStep === index && (
                  <FiArrowRight className="animate-pulse" aria-hidden="true" />
                )}
              </button>
            ))}
          </nav>

          {/* ── Detail panel — Right ── */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0A1221] border border-[#39FF14]/20 p-12 md:p-16 relative"
              >
                {/* Watermark number */}
                <div
                  className="absolute top-0 right-0 p-8 text-[#39FF14]/5 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <span className="text-9xl font-black">{current.number}</span>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#39FF14] text-black flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(57,255,20,0.3)]" aria-hidden="true">
                    {current.icon}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-xl text-white/60 font-sans leading-relaxed mb-10 max-w-xl">
                    {current.description}
                  </p>

                  <dl className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">Status</dt>
                      <dd className="text-white font-bold text-sm uppercase">Optimized_Core</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">Priority</dt>
                      <dd className="text-white font-bold text-sm uppercase">Critical_System</dd>
                    </div>
                  </dl>
                  {/* ✅ <dl>/<dt>/<dd> is correct semantic markup for labelled value pairs */}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots + prev/next */}
            <div className="mt-8 flex justify-between items-center px-4">
              <div className="flex gap-2" role="tablist" aria-label="Step progress">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    role="tab"
                    aria-selected={activeStep === i}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-1 transition-all duration-500 ${activeStep === i ? 'w-8 bg-[#39FF14]' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={goPrev}
                  disabled={activeStep === 0}
                  aria-label="Previous step"
                  className="p-4 border border-[#39FF14]/20 hover:bg-[#39FF14] hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  // ✅ Added disabled state — previously the button had no feedback at step 0
                >
                  <FiArrowRight className="rotate-180" aria-hidden="true" />
                </button>
                <button
                  onClick={goNext}
                  disabled={activeStep === STEPS.length - 1}
                  aria-label="Next step"
                  className="p-4 border border-[#39FF14]/20 hover:bg-[#39FF14] hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="#contact"
            className="inline-flex items-center gap-6 bg-[#39FF14] text-black px-12 py-6 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(57,255,20,0.2)]"
          >
            <span>Initiate Project_Build</span>
            <FiArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}