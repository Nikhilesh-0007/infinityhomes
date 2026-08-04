import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2 shadow-md hover:shadow-hover',
    lg: 'text-base px-8 py-4 gap-2.5 shadow-lg hover:shadow-hover',
  };

  const variantStyles = {
    primary:
      'bg-gradient-primary text-white hover:scale-105 shadow-brand-red/20 hover:shadow-brand-red/40',
    secondary:
      'bg-charcoal text-white hover:bg-black hover:scale-105',
    outline:
      'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
    ghost:
      'text-charcoal hover:bg-gray-100 hover:text-brand-red',
    dark:
      'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-charcoal',
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
