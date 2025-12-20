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
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      {isVisible ? count : from}
    </span>
  );
}
