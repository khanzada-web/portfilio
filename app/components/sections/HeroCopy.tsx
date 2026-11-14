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
 * Column-filling name. "MUSSAWAR" measures 7.0em in Orbitron Black, so the size is the
 * column width / 7.1, capped by viewport height so the hero always fits one screen.
 * `--title-span` is the share of the content width the name may use (1 on phones,
 * less on desktop so it never runs under the developer pass).
 */
const TITLE_SIZE: CSSProperties = {
  fontSize: 'min(calc((100vw - 2 * var(--page-pad)) * var(--title-span) / 7.1), 19svh)',
};

const FIRST_NAME = 'Mussawar';

/**
 * The h1. Entrance is CSS (runs on first paint) and every animated layer stays visible from
 * frame one, so the largest line is eligible as the LCP element immediately.
 *
 * - First name: one span per letter (`field-letter`) that assembles on load and reacts to
 *   the cursor via PointerFX. `aria-label` keeps it read as one name, not letters.
 * - Surname: neon outline with an x-ray copy (`xray`, `::after`) the cursor fills in;
 *   one scan crosses it after load, then a terminal caret blinks after it.
 */
export function HeroTitle() {
  return (
    <div className="pointer-events-none relative z-10">
      <h1
        className="uppercase"
        aria-label="Mussawar Hayat — React, React Native & Web3 Full-Stack Developer"
      >
        <span className="block font-black leading-[0.86] tracking-[-0.02em]" style={TITLE_SIZE}>
          <span className="block whitespace-nowrap text-white">
            {[...FIRST_NAME].map((letter, i) => (
              <span key={i} data-field-letter="" className="field-letter">
                <span className="inline-block animate-letter-in" style={at(HERO_SEQUENCE.title + i * HERO_SEQUENCE.letterStep)}>
                  {letter}
                </span>
              </span>
            ))}
          </span>{' '}
          <span className="flex w-fit animate-focus-in items-end" style={at(HERO_SEQUENCE.subtitle)}>
            <span data-xray="" data-text="Hayat" className="xray block animate-xray-scan" style={at(HERO_SEQUENCE.xrayScan)}>
              <span className="text-transparent [-webkit-text-stroke:2px_var(--color-neon)] [text-shadow:0_0_42px_rgb(57_255_20/0.35)]">Hayat</span>
            </span>
           
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
    </div>
  );
}

/** Primary and secondary action, under the title. */
export function HeroActions() {
  return (
    <div className="relative z-10 mt-[3.2svh] flex animate-fade-up items-center gap-6" style={at(HERO_SEQUENCE.actions)}>
      <Magnetic>
        {/* A beam of light circles the button's edge */}
        <span className="relative isolate inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_30px_-6px_rgba(57,255,20,0.6)]">
          <span
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-beam bg-[conic-gradient(from_0deg,transparent_0deg,transparent_240deg,#fff_320deg,transparent_360deg)]"
            aria-hidden="true"
          />
          <Link href="#contact" className="btn-neon group/cta h-14 gap-3 whitespace-nowrap rounded-full pl-6 pr-2 text-[14px] normal-case tracking-wide sm:pl-7">
            Start a project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
              <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </Link>
        </span>
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
        className="hidden max-w-2xl animate-fade-up font-sans text-sm md:block leading-relaxed text-white/75 md:text-[15px]"
        style={at(HERO_SEQUENCE.body)}
      >
        <span className="mr-2 font-mono font-bold text-neon" aria-hidden="true">
          &gt;_
        </span>
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
