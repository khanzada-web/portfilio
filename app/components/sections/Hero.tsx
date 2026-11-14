import { HERO_SEQUENCE } from '@/app/lib/motion';
import { DecodeText } from '../motion/DecodeText';
import { Parallax } from '../motion/Parallax';
import { HeroActions, HeroFooter, HeroTitle, at } from './HeroCopy';
import { DevPass, DevPassCompact } from './DevPass';
import { PointerFX } from '../motion/PointerFX';
import { LocalTime } from './LocalTime';
import { SectionGlow } from '../ui/SectionGlow';

/**
 * Poster-style hero locked to one viewport: meta bar, width-filling name with the
 * holographic developer pass hanging behind its right edge, and a pitch / action / proof bar.
 * Pointer effects (letter field, x-ray surname, pass tilt and sheen) come from PointerFX.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="font-orbitron relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink px-[var(--page-pad)] pb-[2.4svh] pt-24 text-white [--title-span:1] sm:pt-28 lg:h-[100svh] lg:min-h-[600px] lg:[--title-span:0.6]"
    >
      {/* Same background as every other section: ink plus one soft glow */}
      <SectionGlow className="right-[5%] top-[10%] h-[620px] w-[760px]" />

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
          <DecodeText text="Available for freelance" />
        </p>
        <p className="hidden items-center gap-3 sm:flex">
          <span>
            <DecodeText text="Attock, PK" delay={0.15} />
          </span>
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

        {/* Phones and tablets: landscape pass in the flow */}
        <div className="mt-[4svh] max-w-md lg:hidden">
          <DevPassCompact style={at(HERO_SEQUENCE.visual)} />
        </div>

        {/* Holographic developer pass, hanging behind the right edge of the name */}
        <div className="pointer-events-auto absolute bottom-[1svh] right-[4%] top-[-14svh] hidden w-[30%] max-w-[380px] lg:block">
          <Parallax className="h-full">
            <DevPass style={at(HERO_SEQUENCE.visual)} />
          </Parallax>
        </div>
      </div>

      <HeroFooter />

      <PointerFX targetId="home" />
    </section>
  );
}
