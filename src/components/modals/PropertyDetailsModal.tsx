import React, { useState } from 'react';
import {
  X,
  MapPin,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Maximize2,
  Layers,
  FileText,
  Navigation,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Property } from '../../types';
import { Button } from '../ui/Button';

export interface PropertyDetailsModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({ property, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplans' | 'specs' | 'location' | 'developer'>('overview');

  if (!property) return null;

  const pageLabels = [
    'Page 1: Elevation',
    'Page 2: Overview',
    'Page 3: Site Plan',
    'Page 4: Floor Plans A',
    'Page 5: Floor Plans B',
    'Page 6: Amenities',
    'Page 7: Specifications',
    'Page 8: Location Map',
  ];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 relative text-charcoal flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {property.approval && (
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {property.approval} Approved
              </span>
            )}
            <span className="bg-red-50 text-brand-red font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {property.type}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-brand-red text-gray-500 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Hero Banner */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-950 overflow-hidden group">
          <img
            src={property.images[selectedImageIndex] || property.images[0]}
            alt={`${property.name} Page ${selectedImageIndex + 1}`}
            className="w-full h-full object-contain bg-black"
          />

          {/* Previous / Next Controls */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Current Page Tag */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
            {pageLabels[selectedImageIndex] || `Photo ${selectedImageIndex + 1} of ${property.images.length}`}
          </div>

          {/* Thumbnails Row */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 bg-black/60 backdrop-blur-md rounded-xl max-w-[90%] overflow-x-auto">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-12 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImageIndex === idx ? 'border-brand-red scale-105 shadow-lg' : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Main Content Container */}
        <div className="p-6 md:p-8 space-y-6 flex-grow">
          {/* Header Title & Pricing */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 pb-5">
            <div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-charcoal">
                {property.name}
              </h2>
              {property.subtitle && (
                <p className="text-brand-red font-heading font-semibold text-sm mt-0.5">{property.subtitle}</p>
              )}
              <p className="flex items-center gap-1.5 text-gray-500 text-sm mt-1.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span>{property.location}</span>
              </p>
            </div>

            <div className="bg-red-50/70 border border-red-100 rounded-xl p-4 text-right">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Starting Price</span>
              <span className="font-heading font-extrabold text-2xl text-brand-red">{property.priceDisplay}</span>
              <span className="text-xs font-medium text-gray-600 flex items-center justify-end gap-1 mt-1">
                <Maximize2 className="w-3.5 h-3.5" />
                {property.areaDisplay}
              </span>
            </div>
          </div>

          {/* Navigation Tabs (If enriched details exist) */}
          {(property.unitConfigurations || property.specifications || property.locationAdvantages || property.developer) && (
            <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-bold rounded-xl whitespace-nowrap transition-all ${
                  activeTab === 'overview'
                    ? 'bg-brand-red text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Overview & Amenities</span>
              </button>

              {property.unitConfigurations && (
                <button
                  onClick={() => setActiveTab('floorplans')}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-bold rounded-xl whitespace-nowrap transition-all ${
                    activeTab === 'floorplans'
                      ? 'bg-brand-red text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Floor Plans & Units ({property.unitConfigurations.length})</span>
                </button>
              )}

              {property.specifications && (
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-bold rounded-xl whitespace-nowrap transition-all ${
                    activeTab === 'specs'
                      ? 'bg-brand-red text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Specifications</span>
                </button>
              )}

              {property.locationAdvantages && (
                <button
                  onClick={() => setActiveTab('location')}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-bold rounded-xl whitespace-nowrap transition-all ${
                    activeTab === 'location'
                      ? 'bg-brand-red text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Navigation className="w-4 h-4" />
                  <span>Location Advantages</span>
                </button>
              )}
            </div>
          )}

          {/* TAB 1: OVERVIEW & AMENITIES */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {property.tagline && (
                <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-amber-900 font-heading font-semibold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>"{property.tagline}"</span>
                </div>
              )}

              <div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Project Overview</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{property.description}</p>
              </div>

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

              {property.importantNotes && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Important Terms & Notes
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-600 list-disc list-inside">
                    {property.importantNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FLOOR PLANS & UNIT CONFIGURATIONS */}
          {activeTab === 'floorplans' && property.unitConfigurations && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-heading font-bold text-lg text-charcoal">Available Apartment Floor Plans</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {property.unitConfigurations.map((unit, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-brand-red transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-heading font-extrabold text-brand-red text-base">{unit.flatNo}</span>
                      <span className="bg-gray-100 text-charcoal font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                        {unit.type}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p>
                        <strong className="text-gray-800">Facing:</strong> {unit.facing}
                      </p>
                      <p>
                        <strong className="text-gray-800">Super Area:</strong> {unit.areaSft.toLocaleString()} sq.ft
                      </p>
                    </div>
                    {unit.image && (
                      <button
                        onClick={() => {
                          const idxInImages = property.images.indexOf(unit.image!);
                          if (idxInImages !== -1) setSelectedImageIndex(idxInImages);
                          setActiveTab('overview');
                        }}
                        className="mt-3 w-full py-1.5 bg-red-50 hover:bg-brand-red text-brand-red hover:text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <span>View Floor Plan Image</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPECIFICATIONS */}
          {activeTab === 'specs' && property.specifications && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-heading font-bold text-lg text-charcoal mb-4">Construction Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.specifications.map((spec, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200/80 rounded-xl p-4">
                    <h4 className="font-heading font-bold text-xs text-brand-red uppercase tracking-wider mb-1">
                      {spec.category}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{spec.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LOCATION ADVANTAGES */}
          {activeTab === 'location' && property.locationAdvantages && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-heading font-bold text-lg text-charcoal">Location Advantages & Travel Times</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.locationAdvantages.map((loc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">{loc.category}</span>
                      <span className="font-heading font-semibold text-sm text-charcoal">{loc.destination}</span>
                    </div>
                    <span className="bg-red-50 text-brand-red font-heading font-bold text-xs px-3 py-1 rounded-full border border-red-100">
                      {loc.timeMinutes}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-end">
            <a
              href={`https://wa.me/918008897785?text=Hi,%20I%20am%20interested%20in%20booking%20a%20site%20visit%20for%20${encodeURIComponent(
                property.name
              )}`}
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

