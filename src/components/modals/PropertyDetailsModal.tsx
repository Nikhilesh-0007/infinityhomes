import React, { useState } from 'react';
import { X, MapPin, ShieldCheck, Download, Calendar, Phone, CheckCircle2, Maximize2 } from 'lucide-react';
import { Property } from '../../types';
import { Button } from '../ui/Button';

export interface PropertyDetailsModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({ property, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative text-charcoal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Image Display */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-900 overflow-hidden">
          <img
            src={property.images[selectedImageIndex] || property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImageIndex === idx ? 'border-brand-red scale-105' : 'border-white/50 opacity-70'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {property.approval && (
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {property.approval} Approved
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {property.type}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-charcoal">
                {property.name}
              </h2>
              <p className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span>{property.location}</span>
              </p>
            </div>

            {/* Price & Area Box */}
            <div className="bg-red-50/60 border border-red-100 rounded-xl p-4 text-right">
              <span className="text-xs uppercase font-bold text-gray-500 block">Starting Price</span>
              <span className="font-heading font-extrabold text-2xl text-brand-red">
                {property.priceDisplay}
              </span>
              <span className="text-xs font-medium text-gray-600 flex items-center justify-end gap-1 mt-1">
                <Maximize2 className="w-3.5 h-3.5" />
                {property.areaDisplay}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Overview</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">Key Highlights & Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="tel:+918008897785"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal text-xs font-bold px-4 py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>+91 8008897785</span>
              </a>
              <a
                href={property.brochureUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-gray-300 hover:border-brand-red text-gray-700 hover:text-brand-red text-xs font-bold px-4 py-3 rounded-full transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Brochure</span>
              </a>
            </div>

            <a
              href="https://wa.me/918008897785?text=Hi,%20I%20am%20interested%20in%20booking%20a%20site%20visit%20for%20"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" size="md">
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
