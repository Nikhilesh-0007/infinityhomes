import React from 'react';
import { X, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';
import { Button } from '../ui/Button';

export interface ServiceDetailsModalProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  // Dynamically resolve Lucide Icon
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[service.icon] || Icons.Building;

  const keyDeliverables = [
    'Complete legal link document verification by advocate panel.',
    '100% HMDA & DTCP master plan sanction compliance.',
    'Complimentary luxury AC vehicle site visit assistance.',
    'Pre-approved home loan sanction with top nationalized banks.',
    'On-site sub-registrar slot booking and registration assistance.',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative text-charcoal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Photo & Icon */}
        <div className="relative aspect-[21/9] bg-gray-900 overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
          <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-bright font-bold">Infinity Service</span>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Service Overview</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">What We Guarantee</h3>
            <div className="space-y-2.5">
              {keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <a
              href="tel:+918008897785"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal text-xs font-bold px-4 py-3 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Inquire: +91 8008897785</span>
            </a>

            <a
              href="https://wa.me/918008897785?text=Hi,%20I%20want%20more%20details%20about%20your%20service%20"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" size="md">
                <Calendar className="w-4 h-4" />
                <span>Book Service Consultation</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
