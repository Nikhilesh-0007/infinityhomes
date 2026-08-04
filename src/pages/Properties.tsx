import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, RotateCcw, Building2, MapPin, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { propertiesData } from '../data/properties';
import { Property } from '../types';
import { Container } from '../components/ui/Container';
import { PropertyCard } from '../components/ui/PropertyCard';
import { Button } from '../components/ui/Button';
import { PropertyDetailsModal } from '../components/modals/PropertyDetailsModal';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

export const Properties: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedApproval, setSelectedApproval] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(40000000); // 4 Cr default max

  // Detail Modal State
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Sync URL search param ?type=...
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setSelectedType(typeParam.toLowerCase());
    }
  }, [searchParams]);

  // Handle Type Change and Update URL
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams);
  };

  // Locations List
  const locationsList = useMemo(() => {
    const locs = Array.from(new Set(propertiesData.map((p) => p.location.split(',')[0].trim())));
    return ['all', ...locs];
  }, []);

  // Filter Engine
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      // Search Keyword Match
      const matchesSearch =
        searchTerm === '' ||
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Type Match
      const matchesType = selectedType === 'all' || property.type.toLowerCase() === selectedType.toLowerCase();

      // Location Match
      const matchesLocation =
        selectedLocation === 'all' || property.location.toLowerCase().includes(selectedLocation.toLowerCase());

      // Approval Match
      const matchesApproval =
        selectedApproval === 'all' || (property.approval && property.approval.toUpperCase() === selectedApproval.toUpperCase());

      // Price Match
      const matchesPrice = property.startingPrice <= maxPrice;

      return matchesSearch && matchesType && matchesLocation && matchesApproval && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedLocation, selectedApproval, maxPrice]);

  // Reset Filters Action
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedLocation('all');
    setSelectedApproval('all');
    setMaxPrice(40000000);
    setSearchParams({});
  };

  const isFiltered =
    searchTerm !== '' ||
    selectedType !== 'all' ||
    selectedLocation !== 'all' ||
    selectedApproval !== 'all' ||
    maxPrice < 40000000;

  const propertyTypes = [
    { label: 'All Properties', value: 'all' },
    { label: 'Plots', value: 'plot' },
    { label: 'Villas', value: 'villa' },
    { label: 'Apartments', value: 'apartment' },
    { label: 'Farm Lands', value: 'farmland' },
    { label: 'Commercial', value: 'commercial' },
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Properties in Hyderabad | HMDA & DTCP Approved Plots, Villas, Apartments"
        description="Browse luxury HMDA & DTCP approved plots, 3/4 BHK triplex villas, modern high-rise apartments, and farm lands in Kollur, Kokapet, Tellapur, Mokila, and Shankarpally."
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-12 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/90"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-bright bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Verified Inventory
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Explore Luxury Properties in Hyderabad
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Find 100% legal title open plots, gated triplex villas, high-rise apartments, and managed farm lands with instant HMDA & DTCP verification.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Filter Bar */}
      <section className="py-12 bg-section min-h-[70vh]">
        <Container>
          {/* Filters Card Container */}
          <div className="bg-white rounded-card p-6 shadow-soft border border-gray-200 mb-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2 font-heading font-bold text-lg text-charcoal">
                <SlidersHorizontal className="w-5 h-5 text-brand-red" />
                <span>Search & Filter Properties</span>
              </div>
              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Top Bar: Search Keyword + Type Pills */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search Bar */}
              <div className="lg:col-span-5 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by project name, location (e.g. Kollur)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                />
              </div>

              {/* Property Type Pills */}
              <div className="lg:col-span-7 flex flex-wrap items-center gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleTypeChange(type.value)}
                    className={`text-xs font-heading font-semibold px-4 py-2.5 rounded-xl transition-all ${
                      selectedType === type.value
                        ? 'bg-gradient-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdowns Row: Location + Approval + Max Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Location Select */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-charcoal focus:outline-none focus:border-brand-red"
                >
                  <option value="all">All Locations in Hyderabad</option>
                  {locationsList.slice(1).map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Approval Select */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                  Approval Status
                </label>
                <select
                  value={selectedApproval}
                  onChange={(e) => setSelectedApproval(e.target.value)}
                  className="w-full py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-charcoal focus:outline-none focus:border-brand-red"
                >
                  <option value="all">All Approvals (HMDA / DTCP / RERA)</option>
                  <option value="HMDA">HMDA Approved</option>
                  <option value="DTCP">DTCP Approved</option>
                  <option value="RERA">RERA Approved</option>
                </select>
              </div>

              {/* Max Budget Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5 text-xs font-bold text-gray-500 uppercase">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-brand-red" />
                    Max Budget
                  </span>
                  <span className="text-brand-red font-heading font-extrabold text-sm">
                    {maxPrice >= 40000000 ? 'Any Budget' : `₹${(maxPrice / 100000).toFixed(0)} Lakh`}
                  </span>
                </div>
                <input
                  type="range"
                  min={3000000}
                  max={40000000}
                  step={1000000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-brand-red cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-semibold text-charcoal">
              Showing <span className="text-brand-red font-bold">{filteredProperties.length}</span> of{' '}
              <span className="font-bold">{propertiesData.length}</span> Properties
            </p>
          </div>

          {/* Property Cards Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onViewDetails={(p) => setSelectedProperty(p)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-card p-12 text-center border border-gray-200 space-y-4 max-w-lg mx-auto my-8">
              <div className="w-16 h-16 rounded-full bg-red-50 text-brand-red flex items-center justify-center mx-auto">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-charcoal">No Properties Found</h3>
              <p className="text-gray-500 text-sm">
                We couldn't find any properties matching your current search criteria. Try adjusting your location, price range, or category filter.
              </p>
              <Button variant="primary" size="md" onClick={handleResetFilters}>
                <RotateCcw className="w-4 h-4" />
                <span>Reset Filters</span>
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Property Details Modal Drawer */}
      <PropertyDetailsModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </PageTransition>
  );
};

