import Link from 'next/link';
import type { CSSProperties } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { HERO_SEQUENCE } from '@/app/lib/motion';
import { CountUp } from '../motion/CountUp';
import { Magnetic } from '../motion/Magnetic';

const STATS = [
  { label: 'Years', value: 3, suffix: '+' },
  { label: 'Projects', value: 40, suffix: '+' },
  { label: 'Clients', value: 15, suffix: '+' },
] as const;

/** CSS animation delay from the hero sequence in app/lib/motion.ts. */
export const at = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

/**
 * Width-filling name. "MUSSAWAR" measures 7.0em in Orbitron Black, so the size is the
 * available width / 7.1, capped by viewport height so the hero always fits one screen.
 */
const TITLE_SIZE: CSSProperties = {
  fontSize: 'min(calc((100vw - 2 * var(--hero-pad)) / 7.1), 19svh)',
};

/**
 * The h1. Entrance is CSS (runs on first paint). The "focus pull" keyframe keeps the text
 * visible from frame one, so the largest line is eligible as the LCP element immediately.
 */
export function HeroTitle() {
  return (
    <h1 className="pointer-events-none relative z-10 select-text uppercase">
      <span className="block font-black leading-[0.86] tracking-[-0.02em]" style={TITLE_SIZE}>
        <span className="block animate-focus-in text-white" style={at(HERO_SEQUENCE.title)}>
          Mussawar
        </span>{' '}
        <span className="block animate-focus-in" style={at(HERO_SEQUENCE.subtitle)}>
          <span className="text-transparent [-webkit-text-stroke:2px_var(--color-neon)] [text-shadow:0_0_42px_rgb(57_255_20/0.35)]">Hayat</span>
          <span className="text-neon" aria-hidden="true">.</span>
        </span>
      </span>
      <span className="sr-only"> — </span>
      <span
        className="mt-[2.2svh] flex animate-fade-up items-center gap-4 text-[clamp(0.95rem,1.6vw,1.5rem)] font-semibold normal-case tracking-wide text-white"
        style={at(HERO_SEQUENCE.lead)}
      >
        <span className="h-px w-10 shrink-0 bg-neon shadow-[0_0_10px_#39FF14] sm:w-16" aria-hidden="true" />
        <span>
          React, React Native &amp; <span className="text-neon">Web3</span> Full-Stack Developer
        </span>
      </span>
    </h1>
  );
}

/** Primary and secondary action, under the title. */
export function HeroActions() {
  return (
    <div className="relative z-10 mt-[3.2svh] flex animate-fade-up items-center gap-6" style={at(HERO_SEQUENCE.actions)}>
      <Magnetic>
        <Link href="#contact" className="btn-neon group/cta h-14 gap-3 whitespace-nowrap rounded-full pl-6 pr-2 text-[14px] normal-case tracking-wide sm:pl-7">
          Start a project
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
            <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </Link>
      </Magnetic>
      <Link href="/portfolio" className="link-underline whitespace-nowrap text-sm font-semibold tracking-wide text-white transition-colors hover:text-neon">
        View portfolio
      </Link>
    </div>

  );
}

/** Bottom bar: pitch and proof. */
export function HeroFooter() {
  return (
    <div className="relative z-10 flex flex-col gap-[2.2svh] border-t border-white/10 pt-[2.4svh] md:flex-row md:items-end md:justify-between md:gap-10">
      <p
        className="max-w-2xl animate-fade-up font-sans text-sm leading-relaxed text-white/75 md:text-[15px]"
        style={at(HERO_SEQUENCE.body)}
      >
        Hire a remote full-stack and Web3 engineer specializing in React, React Native, Next.js, Solidity, and production infrastructure for web and mobile applications
      </p>

      <dl className="flex shrink-0 animate-fade-up gap-8" style={at(HERO_SEQUENCE.stats)}>
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">{stat.label}</dt>
            <dd className="text-2xl font-bold text-white md:text-3xl">
              <CountUp to={stat.value} />
              <span className="text-neon">{stat.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
