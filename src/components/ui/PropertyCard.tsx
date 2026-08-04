import React from 'react';
import { MapPin, ShieldCheck, Download, ExternalLink, Maximize2 } from 'lucide-react';
import { Property } from '../../types';
import { Button } from './Button';

export interface PropertyCardProps {
  property: Property;
  onViewDetails?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  return (
    <div className="bg-white rounded-card overflow-hidden shadow-soft border border-gray-100 group hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {property.approval && (
            <span className="bg-white/90 backdrop-blur-md text-charcoal font-heading text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 border border-gray-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {property.approval} Approved
            </span>
          )}
          {property.featured && (
            <span className="bg-brand-red text-white font-heading text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Property Type Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-charcoal/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md capitalize">
            {property.type}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-extrabold text-lg text-charcoal group-hover:text-brand-red transition-colors line-clamp-1">
            {property.name}
          </h3>

          {/* Price & Area Specs */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Starting Price</span>
              <span className="font-heading font-extrabold text-base text-brand-red">
                {property.priceDisplay}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Area</span>
              <span className="font-heading font-semibold text-xs text-charcoal flex items-center gap-1">
                <Maximize2 className="w-3 h-3 text-gray-400" />
                {property.areaDisplay}
              </span>
            </div>
          </div>

          {/* Amenities Chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {property.amenities.slice(0, 3).map((amenity, i) => (
              <span
                key={i}
                className="bg-gray-50 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded border border-gray-100"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="bg-gray-50 text-gray-400 text-[10px] font-medium px-1.5 py-0.5 rounded">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1 text-xs"
            onClick={() => onViewDetails && onViewDetails(property)}
          >
            <span>View Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>

          <a
            href={property.brochureUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-brand-red transition-colors"
            title="Download Brochure"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
