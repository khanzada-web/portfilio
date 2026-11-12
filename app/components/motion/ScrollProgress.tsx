'use client';

import { m, useScroll, useSpring } from 'framer-motion';
import { SPRING } from '@/app/lib/motion';

/** Thin reading-progress bar along the top of the viewport (scaleX only). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRING.progress);
  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-neon shadow-[0_0_10px_var(--color-neon)]"
      style={{ scaleX }}
    />
  );
}
