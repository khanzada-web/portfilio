'use client';

// ❌ Removed: useState, useEffect
//    isLoaded was set to true on mount but never read anywhere in JSX.
//    Keeping dead state adds unnecessary re-renders and confusion.

import Link from 'next/link';
import { AnimatedCounter } from '../ui/AnimatedCounter';

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { label: 'Years Experience', value: 3,   suffix: '+' },
  { label: 'Apps & Sites Built', value: 100, suffix: '+' },
  { label: 'Client Success',    value: 100, suffix: '%' },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#060B16] flex items-center pt-40 pb-20 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      {/* Background depth */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#1e293b_0%,transparent_50%)] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-12">

          {/* Status badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#39FF14]/30 bg-[#39FF14]/5 rounded-full overflow-hidden">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold">
                Full-Stack Developer <span className="mx-2 opacity-30">|</span> Web3 Specialist
              </span>
            </div>
          </div>

          {/* Heading — wrapped in <header> for semantic landmark */}
          <header className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block opacity-90">Mussawar Hayat</span>
              <span className="block mt-4 text-white drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                Full-Stack Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#39FF14]/80 max-w-3xl mx-auto leading-relaxed lowercase tracking-wider">
              Building high-performance web & mobile applications with React, Next.js, Node.js & TypeScript —
              with specialised blockchain and Web3 integration when projects call for it.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-16 border-y border-[#39FF14]/20">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold tabular-nums">
                  <AnimatedCounter from={0} to={stat.value} duration={1.5} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="#portfolio"
              className="group relative px-10 py-5 bg-[#39FF14] text-black rounded-sm font-bold transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(57,255,20,0.2)]"
            >
              <span className="flex items-center gap-3">
                EXPLORE PROJECTS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="#contact"
              className="px-10 py-5 border-2 border-[#39FF14] hover:bg-[#39FF14]/10 rounded-sm font-bold transition-colors tracking-widest"
            >
              GET IN TOUCH
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom stripe */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}