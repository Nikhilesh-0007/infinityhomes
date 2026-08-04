import React, { useEffect, useRef, useState } from 'react';
import { CountUp } from 'countup.js';
import { Stat } from '../../types';

export interface StatCounterProps {
  stat: Stat;
}

export const StatCounter: React.FC<StatCounterProps> = ({ stat }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated && countRef.current) {
          const countUp = new CountUp(countRef.current, stat.value, {
            duration: 2.5,
            useEasing: true,
          });
          if (!countUp.error) {
            countUp.start();
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [stat.value, hasAnimated]);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-card p-6 border border-gray-100 shadow-soft text-center hover:scale-105 transition-transform duration-300">
      <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-red mb-1">
        <span ref={countRef}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="font-heading font-semibold text-xs sm:text-sm text-charcoal uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  );
};
