'use client';

import { useState, useEffect } from 'react';

export function AnimatedCounter({
  from,
  to,
  duration = 1,
  className = '',
}: {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}) {
  // Initialize to `to` so SSR and no-JS visitors see the correct final value,
  // not "0+". The animation runs only on the client after hydration.
  const [count, setCount] = useState(to);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setCount(from);
    setHasAnimated(true);
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const currentCount = Math.floor(from + (to - from) * progress);
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <span className={className}>
      {hasAnimated ? count : to}
    </span>
  );
}
