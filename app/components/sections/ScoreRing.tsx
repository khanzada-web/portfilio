'use client';

import { m } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { DURATION, EASE } from '@/app/lib/motion';

const RADIUS = 36;

/** Circular score that draws itself when its parent `StaggerItem` reveals. */
export function ScoreRing({ value }: { value: number }) {
  const draw: Variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: value / 100, transition: { duration: DURATION.slow * 1.5, ease: EASE.out } },
  };

  return (
    <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80" aria-hidden="true">
      <circle className="text-white/10" strokeWidth="4" stroke="currentColor" fill="transparent" r={RADIUS} cx="40" cy="40" />
      <m.circle
        className="text-neon"
        strokeWidth="4"
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={RADIUS}
        cx="40"
        cy="40"
        variants={draw}
      />
    </svg>
  );
}
