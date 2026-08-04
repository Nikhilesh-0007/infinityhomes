import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../types';

export interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base md:text-lg text-charcoal hover:text-brand-red transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 md:px-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
