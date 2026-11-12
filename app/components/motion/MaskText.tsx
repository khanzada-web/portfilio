'use client';

import { m } from 'framer-motion';
import { Fragment } from 'react';
import { STAGGER, VIEWPORT, maskUp, staggerChildren } from '@/app/lib/motion';

export interface TextSegment {
  text: string;
  /** Render this segment in the accent color. */
  accent?: boolean;
  /** Start this segment on a new line. */
  breakBefore?: boolean;
}

interface MaskTextProps {
  segments: readonly TextSegment[];
  /** Set false inside a `Stagger` so the parent drives the timing. */
  trigger?: boolean;
  accentClassName?: string;
}

/**
 * Word-by-word masked slide-up. Words stay real text separated by real spaces,
 * so screen readers and search engines read the sentence normally.
 */
export function MaskText({ segments, trigger = true, accentClassName = 'text-neon' }: MaskTextProps) {
  return (
    <m.span
      className="block"
      variants={staggerChildren(STAGGER.tight)}
      {...(trigger ? { initial: 'hidden', whileInView: 'visible', viewport: VIEWPORT } : {})}
    >
      {segments.map((segment, s) => (
        <Fragment key={s}>
          {segment.breakBefore && <br />}
          {segment.text.split(' ').map((word, w, words) => (
            <Fragment key={`${s}-${w}`}>
              <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <m.span className={`inline-block ${segment.accent ? accentClassName : ''}`} variants={maskUp}>
                  {word}
                </m.span>
              </span>
              {(w < words.length - 1 || s < segments.length - 1) && ' '}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </m.span>
  );
}
