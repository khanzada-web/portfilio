import { HERO_SEQUENCE } from '@/app/lib/motion';
import { LoopWhenVisible } from '../motion/LoopWhenVisible';
import { Parallax } from '../motion/Parallax';
import { HeroActions, HeroFooter, HeroTitle, at } from './HeroCopy';
import { HeroStack } from './HeroStack';
import { LocalTime } from './LocalTime';

/** Decorative backdrop: column guides, aurora, perspective grid floor, grain. */
function HeroBackdrop() {
  return (
    <LoopWhenVisible className="pointer-events-none absolute inset-0 -z-10">
      {/* Editorial column guides */}
      <div className="absolute inset-0 grid grid-cols-4 px-[var(--hero-pad)] lg:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`border-l border-white/[0.035] ${i >= 4 ? 'hidden lg:block' : ''} last:border-r`} />
        ))}
      </div>

      {/* Aurora */}
      <div className="absolute -left-[15%] top-[-20%] h-[70svh] w-[70svh] animate-drift rounded-full bg-[radial-gradient(closest-side,rgb(57_255_20/0.09),transparent)]" />
      <div className="absolute -right-[10%] top-[10%] h-[85svh] w-[85svh] animate-drift rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.10),transparent)] [animation-direction:alternate-reverse]" />

      {/* Perspective grid floor drifting toward the viewer */}
      <div className="absolute inset-x-0 bottom-0 h-[50%] overflow-hidden [mask-image:linear-gradient(to_top,black_10%,transparent_90%)] [perspective:520px]">
        <div className="absolute -inset-x-1/2 bottom-0 top-0 origin-bottom [transform:rotateX(64deg)]">
          <div className="absolute inset-x-0 -top-16 bottom-0 animate-grid-flow bg-[linear-gradient(to_right,rgb(57_255_20/0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgb(57_255_20/0.14)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>
      </div>

      <div className="grain absolute inset-0 opacity-[0.045] mix-blend-overlay" />
    </LoopWhenVisible>
  );
}

/**
 * Poster-style hero locked to one viewport: meta bar, width-filling name with the
 * product-stack art layered behind its right edge, and a pitch / action / proof bar.
 */
export function Hero() {
  return (
    <section
      id="home"
      data-spotlight=""
      className="spotlight font-orbitron relative isolate flex min-h-[100svh] flex-col lg:h-[100svh] lg:min-h-[600px] overflow-hidden bg-night px-[var(--hero-pad)] pb-[2.4svh] pt-24 text-white [--hero-pad:1.5rem] [--spot-size:760px] sm:pt-28 lg:[--hero-pad:3rem]"
    >
      <HeroBackdrop />

      {/* Meta bar */}
      <div
        className="relative z-10 flex animate-fade-up items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 sm:text-[11px]"
        style={at(HERO_SEQUENCE.kicker)}
      >
        <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2.5 pr-4">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 animate-ping-soft rounded-full bg-neon" />
            <span className="relative h-2 w-2 rounded-full bg-neon" />
          </span>
          Available for freelance
        </p>
        <p className="hidden items-center gap-3 sm:flex">
          <span>Attock, PK</span>
          <span className="h-px w-6 bg-white/25" aria-hidden="true" />
          <span className="text-neon">
            <LocalTime /> PKT
          </span>
        </p>
      </div>

      {/* Title + art */}
      <div className="relative flex min-h-0 flex-1 flex-col justify-center py-[2svh]">
        <HeroTitle />
        <HeroActions />

        <div
          className="relative mt-[3svh] hidden h-[26svh] animate-fade-up md:block lg:absolute lg:bottom-[1svh] lg:right-0 lg:top-[3svh] lg:mt-0 lg:h-auto lg:w-[36%]"
          style={at(HERO_SEQUENCE.visual)}
        >
          <Parallax className="h-full">
            <HeroStack className="h-full" />
          </Parallax>
        </div>
      </div>

      <HeroFooter />
    </section>
  );
}
