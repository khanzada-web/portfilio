'use client';

import { m, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useRef, type ReactElement } from 'react';
import { FiTarget, FiMap, FiPenTool, FiCode, FiCheckCircle, FiActivity } from 'react-icons/fi';
import { ACTIVE_BAND, SPRING, VIEWPORT, slideFromLeft, slideFromRight } from '@/app/lib/motion';

interface Step {
  number: string;
  icon: ReactElement;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01', icon: <FiTarget className="h-5 w-5" />,
    title: 'Logic Discovery',
    description: 'Analysing system requirements, user personas, and technical feasibility for your enterprise ecosystem.',
  },
  {
    number: '02', icon: <FiMap className="h-5 w-5" />,
    title: 'System Architecture',
    description: 'Mapping out the data flow, API integrations, and cloud infrastructure for maximum scalability.',
  },
  {
    number: '03', icon: <FiPenTool className="h-5 w-5" />,
    title: 'Precision Design',
    description: 'Crafting high-fidelity immersive interfaces focused on user psychological conversion and speed.',
  },
  {
    number: '04', icon: <FiCode className="h-5 w-5" />,
    title: 'Core Development',
    description: 'Building the engine using Next.js, TypeScript, and high-performance backend modules.',
  },
  {
    number: '05', icon: <FiActivity className="h-5 w-5" />,
    title: 'QA & Optimisation',
    description: 'Stress testing infrastructure and optimising load times to ensure 99th percentile performance.',
  },
  {
    number: '06', icon: <FiCheckCircle className="h-5 w-5" />,
    title: 'Deployment & Scale',
    description: 'Mainnet/Production launch with proactive monitoring and automated scaling protocols.',
  },
];

function TimelineStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, ACTIVE_BAND);
  const fromLeft = index % 2 === 0;

  return (
    <m.li
      ref={ref}
      data-active={active || undefined}
      className="group relative pl-20 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
      variants={fromLeft ? slideFromLeft : slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {/* Node on the line: fills neon while the step is current */}
      <div
        className="absolute left-6 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-panel text-white/70 transition-[background-color,color,border-color,box-shadow] duration-300 group-data-[active]:border-neon group-data-[active]:bg-neon group-data-[active]:text-black group-data-[active]:shadow-[0_0_24px_rgba(57,255,20,0.45)] md:left-1/2"
        aria-hidden="true"
      >
        {step.icon}
      </div>

      <div
        className={`card p-6 transition-[border-color,opacity] duration-300 group-data-[active]:border-neon/50 md:p-8 md:opacity-60 md:group-data-[active]:opacity-100 ${
          fromLeft ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <span className="font-mono text-xs font-bold tracking-wider text-neon">{step.number}</span>
        <h3 className="mt-2 text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">{step.title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-white/75 md:text-base">{step.description}</p>
      </div>
    </m.li>
  );
}

/** Vertical process timeline: the line draws itself with scroll, the current step lights up. */
export function ProcessTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, SPRING.progress);

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2" aria-hidden="true" />
      <m.div
        className="absolute bottom-0 left-6 top-0 w-px origin-top -translate-x-1/2 bg-neon shadow-[0_0_10px_rgba(57,255,20,0.6)] md:left-1/2"
        style={{ scaleY: reduce ? 1 : progress }}
        aria-hidden="true"
      />
      <ol ref={listRef} className="relative space-y-12 md:space-y-16" aria-label="Development process steps">
        {STEPS.map((step, index) => (
          <TimelineStep key={step.number} step={step} index={index} />
        ))}
      </ol>
    </div>
  );
}
