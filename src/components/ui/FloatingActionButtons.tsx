import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918008897785?text=Hello%20Infinity%20Homes,%20I%20would%20like%20to%20inquire%20about%20your%20properties."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all p-3 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute right-full mr-3 bg-charcoal text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+918008897785"
        className="w-13 h-13 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all p-3 group"
        aria-label="Call Infinity Homes"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-charcoal text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call +91 8008897785
        </span>
      </a>
    </div>
  );
};
