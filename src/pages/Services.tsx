import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { Service } from '../types';

import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ServiceDetailsModal } from '../components/modals/ServiceDetailsModal';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceGuarantees = [
    '100% Legal Title Audit by High Court Advocate Panel',
    'Pre-Approved Home Loans from SBI, HDFC, ICICI, & Axis Bank',
    'Free Luxury AC Vehicle Pick & Drop for Site Visits',
    'Telangana Sub-Registrar Office Slot Booking & Assistance',
    'Zero Hidden Charges & Direct Developer Transparency',
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Our Services | Infinity Homes Real Estate Solutions Hyderabad"
        description="Explore 12 comprehensive real estate services by Infinity Homes: residential plots, luxury villas, apartments, legal verification, home loan assistance, registration, and site visit booking."
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/90"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-bright bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              End-To-End Real Estate Solutions
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Comprehensive Real Estate Services in Hyderabad
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              From land procurement and luxury villa development to legal title verification, home loan pre-approvals, and registration support.
            </p>
          </div>
        </Container>
      </section>

      {/* All 12 Services Grid */}
      <Section
        bgVariant="section"
        badge="Full Service Catalog"
        title="Our 12 Dedicated Solutions"
        subtitle="Click 'Learn More' on any service to view full feature guarantees and request a consultation."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(srv) => setSelectedService(srv)}
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Our Service Banner */}
      <Section bgVariant="white" badge="The Infinity Commitment" title="Why Clients Rely On Our Services">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceGuarantees.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-section p-4 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-charcoal">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom Consultation CTA Banner */}
      <section className="bg-gradient-primary text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Need Personal Advice on Property Investment or Legal Verification?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Our experienced real estate advisors are ready to assist you with HMDA/DTCP layouts, legal link document audits, and site visit bookings.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <NavLink to="/contact">
                <Button variant="secondary" size="lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </Button>
              </NavLink>
              <a href="tel:+918008897785">
                <Button variant="dark" size="lg">
                  <Phone className="w-5 h-5" />
                  <span>Call +91 8008897785</span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Details Modal Expander */}
      <ServiceDetailsModal service={selectedService} onClose={() => setSelectedService(null)} />
    </PageTransition>
  );
};

