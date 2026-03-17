'use client';

import { motion } from 'framer-motion';
import { FiZap, FiSearch, FiLayout, FiActivity } from 'react-icons/fi';

// ─── Constants ────────────────────────────────────────────────────────────────

// SVG circle maths:
// r=36 → circumference = 2πr = 226.2
// strokeDashoffset = circumference × (1 − value/100)
// For value=100 → offset = 0  (full circle drawn)
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 36; // ≈ 226.2

const METRICS = [
  { label: 'Performance',    value: 100, icon: <FiZap />      },
  { label: 'Accessibility',  value: 100, icon: <FiLayout />   },
  { label: 'Best Practices', value: 100, icon: <FiActivity /> },
  { label: 'SEO Score',      value: 100, icon: <FiSearch />   },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function PerformanceLab() {
  return (
    <section
      id="performance"
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-[1px] w-12 bg-[#39FF14]/40" aria-hidden="true" />
            <span className="text-[#39FF14]/60 text-xs tracking-[0.4em] uppercase">Performance_Lab</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engineered for <span className="text-[#39FF14]">Velocity.</span>
          </h2>
          <p className="text-[#39FF14]/70 text-sm md:text-base leading-relaxed lowercase tracking-wider max-w-2xl">
            Beyond code, I optimise for core web vitals. My builds ensure lightning-fast load times,
            seamless user accessibility, and search engine dominance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, i) => {
            // ✅ strokeDashoffset properly calculated from the actual value
            //    Previously it was hardcoded to 0 (full circle always shown) which
            //    worked for 100% but would break if any metric ever dropped below 100.
            const offset = CIRCLE_CIRCUMFERENCE * (1 - m.value / 100);

            return (
              <motion.div
                key={m.label}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-white/[0.03] border border-white/10 rounded-sm text-center group transition-all duration-300 hover:border-[#39FF14]/40"
              >
                <div className="text-white/20 mb-4 flex justify-center group-hover:text-[#39FF14] transition-colors" aria-hidden="true">
                  {m.icon}
                </div>

                {/* Circular progress */}
                <div
                  className="relative inline-flex items-center justify-center mb-4"
                  role="meter"
                  aria-label={m.label}
                  aria-valuenow={m.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <svg className="w-20 h-20" viewBox="0 0 80 80">
                    {/* Track */}
                    <circle
                      className="text-white/5"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="40"
                      cy="40"
                    />
                    {/* ✅ Animated fill — draws in on scroll */}
                    <motion.circle
                      className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                      strokeWidth="4"
                      strokeDasharray={CIRCLE_CIRCUMFERENCE}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="40"
                      cy="40"
                      // Start fully empty; animate to correct offset when in view
                      initial={{ strokeDashoffset: CIRCLE_CIRCUMFERENCE }}
                      whileInView={{ strokeDashoffset: offset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                      // SVG draws clockwise from 3 o'clock; rotate -90° to start from 12 o'clock
                      style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-white">{m.value}</span>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#39FF14]/60 font-bold">
                  {m.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer disclaimer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-30">
          {['Server-Side Rendering (SSR) Active', 'Edge-Network Optimized', 'Lighthouse Certified'].map((item) => (
            <span key={item} className="flex items-center gap-4 text-[9px] tracking-widest uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#39FF14] last:hidden" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}