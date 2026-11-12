'use client';

import { LazyMotion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE } from '@/app/lib/motion';
import { SpotlightTracker } from './SpotlightTracker';

const loadFeatures = () => import('./features').then((mod) => mod.default);

/**
 * Root motion context: `m.*` components only (strict), features loaded after first paint,
 * one default transition, and transforms disabled for `prefers-reduced-motion` users.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: DURATION.base, ease: EASE.out }}>
        {children}
        <SpotlightTracker />
      </MotionConfig>
    </LazyMotion>
  );
}
