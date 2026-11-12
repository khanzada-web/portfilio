'use client';

import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { REVEALS, VIEWPORT, withDelay, type RevealName } from '@/app/lib/motion';

const TAGS = {
  div: m.div,
  li: m.li,
  article: m.article,
  aside: m.aside,
  p: m.p,
  span: m.span,
} as const;

type RevealTag = keyof typeof TAGS;

interface RevealProps {
  children: ReactNode;
  /** Variant from `app/lib/motion.ts`. */
  variant?: RevealName;
  as?: RevealTag;
  delay?: number;
  className?: string;
  /** Set false inside a `Stagger` so the parent drives the timing. */
  trigger?: boolean;
  id?: string;
}

/** Reveals its children once when they scroll into view. */
export function Reveal({
  children,
  variant = 'fadeUp',
  as = 'div',
  delay = 0,
  className,
  trigger = true,
  id,
}: RevealProps) {
  const Tag = TAGS[as];
  const element = (
    <Tag
      id={id}
      className={className}
      variants={withDelay(REVEALS[variant], delay)}
      {...(trigger && variant !== 'clipUp' ? { initial: 'hidden', whileInView: 'visible', viewport: VIEWPORT } : {})}
    >
      {children}
    </Tag>
  );

  // A fully clipped element has no visible area, so IntersectionObserver never reports it.
  // Watch an unclipped wrapper instead and let the clip animation run on the child.
  if (trigger && variant === 'clipUp') {
    return (
      <m.div initial="hidden" whileInView="visible" viewport={VIEWPORT}>
        {element}
      </m.div>
    );
  }
  return element;
}
