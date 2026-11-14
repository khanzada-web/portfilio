import Image from 'next/image';
import type { CSSProperties } from 'react';

/** Holographic sheen gradient, shared by both pass layouts. */
const SHEEN_BG =
  'pointer-events-none absolute -inset-1/2 z-20 bg-[linear-gradient(115deg,transparent_35%,rgb(57_255_20/0.18)_44%,rgb(37_99_235/0.2)_50%,rgb(255_255_255/0.16)_54%,transparent_63%)] mix-blend-screen';

/** Barcode strip, shared by both pass layouts. */
const BARCODE =
  'flex-1 bg-[repeating-linear-gradient(90deg,rgb(255_255_255/0.75)_0_2px,transparent_2px_4px,rgb(255_255_255/0.75)_4px_5px,transparent_5px_8px,rgb(255_255_255/0.75)_8px_11px,transparent_11px_13px)] opacity-70';

/** Sheen position follows the pointer via --hx / --hy (-1…1), set by PointerFX. */
const SHEEN: CSSProperties = {
  transform: 'translate3d(calc(var(--hx, 0) * 18%), calc(var(--hy, 0) * 18%), 0)',
};

/**
 * Holographic "developer pass" hanging from a lanyard. Static markup; motion comes from CSS
 * (drop-in, sway) and PointerFX (3D tilt on `[data-tilt]`, sheen via --hx/--hy).
 * Decorative duplicate of the hero copy, so it is hidden from assistive tech.
 */
export function DevPass({ style }: { style?: CSSProperties }) {
  return (
    <div className="flex h-full animate-badge-drop flex-col items-center" style={style} aria-hidden="true">
      <div className="flex h-full origin-top animate-swing flex-col items-center">
        {/* Lanyard and clip */}
        <div className="h-[16svh] w-[3px] shrink-0 bg-gradient-to-b from-transparent via-neon/50 to-neon shadow-[0_0_12px_rgba(57,255,20,0.5)]" />
        <div className="-mb-2 h-5 w-10 shrink-0 rounded-md border border-white/25 bg-gradient-to-b from-white/30 to-white/5" />

        {/* The pass */}
        <div
          data-tilt=""
          className="relative flex aspect-[5/7] max-h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[1.4rem] border border-white/15 bg-panel/85 p-[4%] shadow-[0_40px_100px_-30px_rgba(57,255,20,0.45)] backdrop-blur-xl transition-transform duration-700 ease-[var(--ease-brand)]"
        >
          {/* Holographic sheen */}
          <div className={SHEEN_BG} style={SHEEN} />

          {/* Header */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/65">
            <span className="flex items-center gap-2 font-orbitron text-sm font-black tracking-tight text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neon text-[10px] text-black">MH</span>
              Dev Pass
            </span>
            <span>Nº 039FF14</span>
          </div>

          {/* Photo with a light neon tint */}
          <div className="relative mt-[5%] min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/my-pic.jpeg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 40vw"
              className="object-cover object-[50%_30%] brightness-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-transparent to-neon/10" />
          </div>

          {/* Identity */}
          <p className="mt-[5%] font-orbitron text-[clamp(1rem,1.5vw,1.35rem)] font-black uppercase leading-none tracking-tight text-white">
            Mussawar Hayat
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-neon">Full-Stack × Web3 Engineer</p>

          {/* Barcode strip */}
          <div className="mt-[5%] flex items-end justify-between gap-3 border-t border-dashed border-white/15 pt-[4%]">
            <div className={`h-7 ${BARCODE}`} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Remote · Global</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Landscape pass for phones and tablets (below lg), where the hanging pass would not fit:
 * photo on the left, identity and barcode on the right. Same drop-in and sheen.
 */
export function DevPassCompact({ style }: { style?: CSSProperties }) {
  return (
    <div className="animate-badge-drop" style={style} aria-hidden="true">
      <div className="relative flex h-[150px] overflow-hidden rounded-2xl border border-white/15 bg-panel/85 shadow-[0_30px_80px_-30px_rgba(57,255,20,0.45)] sm:h-[170px]">
        <div className={SHEEN_BG} />

        <div className="relative w-[34%] shrink-0">
          <Image src="/my-pic.jpeg" alt="" fill sizes="40vw" className="object-cover object-[50%_25%] brightness-110 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-panel" />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/65">
            <span className="flex items-center gap-1.5 font-orbitron text-[11px] font-black tracking-tight text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-neon text-[10px] text-black">MH</span>
              Dev Pass
            </span>
            <span>Nº 039FF14</span>
          </div>

          <div>
            <p className="font-orbitron text-base font-black uppercase leading-none tracking-tight text-white sm:text-lg">Mussawar Hayat</p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-neon">Full-Stack × Web3 Engineer</p>
          </div>

          <div className="flex items-end justify-between gap-3 border-t border-dashed border-white/15 pt-2.5">
            <div className={`h-5 ${BARCODE}`} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Remote · Global</span>
          </div>
        </div>
      </div>
    </div>
  );
}
