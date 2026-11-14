'use client';

import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { REVEALS, STAGGER, VIEWPORT, staggerChildren, type RevealName } from '@/app/lib/motion';

const CONTAINERS = { div: m.div, ul: m.ul, ol: m.ol, dl: m.dl, nav: m.nav } as const;
const ITEMS = { div: m.div, li: m.li, article: m.article, span: m.span } as const;

interface StaggerProps {
  children: ReactNode;
  as?: keyof typeof CONTAINERS;
  step?: number;
  delay?: number;
  className?: string;
  'aria-label'?: string;
}

/** Reveals its `StaggerItem` children one after another when the group scrolls into view. */
export function Stagger({ children, as = 'div', step = STAGGER.base, delay = 0, className, ...rest }: StaggerProps) {
  const Tag = CONTAINERS[as];
  return (
    <Tag
      className={className}
      variants={staggerChildren(step, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  as?: keyof typeof ITEMS;
  variant?: RevealName;
  className?: string;
}

export function StaggerItem({ children, as = 'div', variant = 'fadeUp', className }: StaggerItemProps) {
  const Tag = ITEMS[as];
  return (
    <Tag className={className} variants={REVEALS[variant]}>
      {children}
    </Tag>
  );
}
