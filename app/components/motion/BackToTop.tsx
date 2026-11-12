'use client';

import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

/** Floating "back to top" button that only appears once the first screen is scrolled past. */
export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > window.innerHeight));

  return (
    <Link
      href="/#home"
      aria-label="Scroll back to top"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-neon text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-[opacity,translate,scale,box-shadow] duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] active:scale-90 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <FiArrowUp className="h-5 w-5 stroke-[3]" aria-hidden="true" />
    </Link>
  );
}
