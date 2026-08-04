import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-card p-6 md:p-8 border border-gray-100 shadow-soft relative flex flex-col justify-between h-full">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 shrink-0 pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Review Quote */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-6 relative z-10">
          "{testimonial.review}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-brand-red/20 shrink-0"
        />
        <div>
          <h4 className="font-heading font-bold text-sm text-charcoal leading-tight">
            {testimonial.name}
          </h4>
          <span className="text-xs text-brand-red font-medium">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
};
