import React from 'react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';
import { ChevronRight } from 'lucide-react';

export interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  // Dynamically resolve Lucide Icon
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[service.icon] || Icons.Building;

  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className="bg-white rounded-card overflow-hidden border border-gray-100 shadow-soft p-6 group hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Service Header: Icon + Image */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="w-16 h-12 rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg text-charcoal group-hover:text-brand-red transition-colors mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>
      </div>

      {/* Learn More link */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-heading font-semibold text-brand-red group-hover:translate-x-1 transition-transform">
        <span>Learn More</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};
