import React from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

export interface SectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  bgVariant?: 'white' | 'section' | 'dark';
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  bgVariant = 'white',
  className,
  children,
}) => {
  const bgStyles = {
    white: 'bg-white text-body',
    section: 'bg-section text-body',
    dark: 'bg-footer text-white',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', bgStyles[bgVariant], className)}>
      <Container>
        {(badge || title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            {badge && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-red bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                {badge}
              </span>
            )}
            {title && (
              <h2
                className={cn(
                  'font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight',
                  bgVariant === 'dark' ? 'text-white' : 'text-charcoal'
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  'text-sm sm:text-base leading-relaxed',
                  bgVariant === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
