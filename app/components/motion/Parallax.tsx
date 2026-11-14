'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { DISTANCE } from '@/app/lib/motion';

/**
 * Drifts its child up by `distance` px as its container scrolls out of view.
 * Disabled for reduced motion; on phones the distance is small enough to stay smooth.
 */
export function Parallax({
  children,
  distance = DISTANCE.parallax,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -distance]);

  return (
    <m.div ref={ref} className={`relative ${className ?? ''}`} style={{ y }}>
      {children}
    </m.div>
  );
}
