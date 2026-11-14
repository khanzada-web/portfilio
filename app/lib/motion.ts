/**
 * Single source of truth for motion on the site.
 *
 * Every Framer Motion animation imports its easing, durations, distances, viewport
 * settings and variants from here. The few CSS-driven animations (hero entrance,
 * looping decoration) read the same values from the CSS custom properties in
 * `app/globals.css` (`--ease-brand`, `--duration-*`). Keep the two in sync.
 *
 * Rules: animate transform and opacity only (clip-path/filter sparingly), trigger
 * once on viewport entry, and let `MotionConfig reducedMotion="user"` turn transforms
 * off for people who ask for reduced motion.
 */
import type { Transition, Variants } from 'framer-motion';

type Bezier = [number, number, number, number];

/** Brand easing: fast start, long soft landing. Mirrors `--ease-brand`. */
export const EASE = {
  out: [0.22, 1, 0.36, 1] as Bezier,
  inOut: [0.65, 0, 0.35, 1] as Bezier,
} as const;

/** Seconds. Mirrors `--duration-fast|base|slow`. */
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

/** Delay between siblings in a staggered group, in seconds. */
export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  loose: 0.14,
} as const;

/** Travel distances in px. */
export const DISTANCE = {
  sm: 16,
  md: 32,
  lg: 64,
  parallax: 48,
} as const;

/**
 * Viewport trigger used by every scroll reveal: once, as soon as any part of the element
 * rises above 85% of the viewport height. ("some" rather than a ratio, because a tall card
 * grid on a phone can never be 20% visible and would stay hidden.)
 */
export const VIEWPORT = {
  once: true,
  amount: 'some',
  margin: '0px 0px -15% 0px',
} as const;

/** Hero entrance sequence (CSS animation delays, seconds from first paint). */
export const HERO_SEQUENCE = {
  kicker: 0,
  title: 0.05,
  subtitle: 0.2,
  lead: 0.32,
  body: 0.4,
  actions: 0.48,
  stats: 0.58,
  visual: 0.3,
  /** Delay between the letters of the name. */
  letterStep: 0.045,
  /** When the neon scan crosses the outlined surname. */
  xrayScan: 0.95,
} as const;

export const SPRING = {
  magnetic: { stiffness: 220, damping: 18, mass: 0.4 },
  cursor: { stiffness: 520, damping: 42, mass: 0.6 },
  progress: { stiffness: 140, damping: 30, restDelta: 0.001 },
} as const;

/** Auto-advance intervals, milliseconds. */
export const AUTOPLAY_MS = {
  testimonials: 6000,
} as const;

/** Count-up length, seconds. */
export const COUNT_UP_DURATION = 1.4;

/** Horizontal drag distance (px) that flips a carousel slide. */
export const SWIPE_THRESHOLD = 80;

/** Max pull (px) of a magnetic element toward the pointer. */
export const MAGNETIC_STRENGTH = 0.3;

/** Scroll distance (px) before the header can hide. */
export const HEADER_HIDE_AFTER = 120;

/** Pointer effects (PointerFX): letter field, x-ray, tilt. Pixel values unless noted. */
export const HERO_FX = {
  /** Letters within this distance of the cursor react. */
  letterRadius: 240,
  /** Max lift of the closest letter. */
  letterLift: 16,
  /** Radius of the x-ray flashlight over the outlined surname. */
  xrayRadius: 170,
  /** Max tilt of the product stack, degrees. */
  tiltX: 8,
  tiltY: 10,
} as const;

/** Scroll-spy: an item counts as "current" while it crosses this band mid-viewport (Process timeline). */
export const ACTIVE_BAND = { margin: '-40% 0px -40% 0px' } as const;

/** Length of the scramble-to-text decode effect, milliseconds. */
export const DECODE_MS = 900;

const base: Transition = { duration: DURATION.base, ease: EASE.out };
const slow: Transition = { duration: DURATION.slow, ease: EASE.out };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.sm },
  visible: { opacity: 1, y: 0, transition: base },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: base },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -DISTANCE.md },
  visible: { opacity: 1, x: 0, transition: base },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: DISTANCE.md },
  visible: { opacity: 1, x: 0, transition: base },
};

/** Word/line slides up from behind an overflow-hidden mask. */
const maskUp: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: slow },
};

/** Content wipes in from the bottom edge. */
const clipUp: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: slow },
};

/** Bars and lines grow from their transform-origin (set `origin-left` / `origin-top`). */
const growX: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: slow },
};

export const REVEALS = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  maskUp,
  clipUp,
  growX,
} as const;

export type RevealName = keyof typeof REVEALS;

/** Same variants with an extra delay on the `visible` state. */
export function withDelay(variants: Variants, delay: number): Variants {
  const visible = variants.visible;
  if (!delay || !visible || typeof visible === 'function') return variants;
  return {
    ...variants,
    visible: { ...visible, transition: { ...(visible.transition as Transition), delay } },
  };
}

/** Parent variant that staggers its children's `hidden` → `visible`. */
export function staggerChildren(step: number = STAGGER.base, delay = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: step, delayChildren: delay } },
  };
}

/** Direction-aware slide for carousels (`custom` = 1 for next, -1 for previous). */
export const carouselSlide: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * DISTANCE.lg }),
  center: { opacity: 1, x: 0, transition: base },
  exit: (direction: number) => ({
    opacity: 0,
    x: -direction * DISTANCE.lg,
    transition: { duration: DURATION.fast, ease: EASE.inOut },
  }),
};
