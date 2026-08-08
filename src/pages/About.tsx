import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, Users, CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react';
import { teamData } from '../data/team';
import { statsData } from '../data/stats';

import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { StatCounter } from '../components/ui/StatCounter';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

export const About: React.FC = () => {
  const coreValues = [
    { title: 'Legal Integrity', desc: '100% clear titles, Encumbrance Certificates, and advocate-verified link documents for every layout.' },
    { title: 'Customer First', desc: 'Zero brokerage, direct developer pricing, and dedicated relationship managers for life.' },
    { title: 'Quality Infrastructure', desc: '60ft & 40ft blacktop roads, underground cabling, drip irrigation, and luxury clubhouse amenities.' },
    { title: 'Sustainable Growth', desc: 'Eco-conscious land planning with rainwater harvesting, solar streetlighting, and green avenues.' },
  ];

  return (
    <PageTransition>
      <SEOHead
        title="About Us | Infinity Homes — Luxury Real Estate Hyderabad"
        description="Learn about Infinity Homes' decade of real estate excellence in Hyderabad. Meet our leadership team and explore our mission for 100% clear title plots and luxury villas."
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/90"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-bright bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Our Legacy Since 2010
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Building Trust & Luxury Since 2010..
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Delivering high-appreciation open plots, luxury gated triplex villas, and commercial spaces built on 100% legal transparency and customer satisfaction.
            </p>
          </div>
        </Container>
      </section>

      {/* 1. OUR STORY */}
      <Section bgVariant="white" badge="Our Journey" title="Pioneering Luxury & Transparency in Telangana">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-charcoal text-lg">
              Founded in 2010 in Hyderabad, Infinity Homes was established with a singular vision: to bring absolute legal clarity and world-class layout development standards to real estate buyers.
            </p>
            <p>
              Over the past 15+ years, we have successfully developed and delivered over 300+ acres across 20+ projects in Hyderabad’s most sought-after growth corridors—including Kollur, Kokapet, Tellapur, Mokila, Shankarpally, and Bandlaguda Jagir.
            </p>
            <p>
              Whether you are an end-user building your dream villa or a seasoned investor seeking land banking appreciation, Infinity Homes ensures every transaction is transparent, smooth, and legally bulletproof.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Infinity Homes Luxury Gated Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. MISSION & VISION */}
      <Section bgVariant="section" badge="Guiding Principles" title="Our Mission & Vision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-card p-8 border border-gray-200 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-charcoal">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To empower families and investors with 100% HMDA & DTCP approved open plots and luxury residences backed by legal title guarantees, zero brokerage fees, and world-class layout infrastructure.
            </p>
          </div>

          <div className="bg-white rounded-card p-8 border border-gray-200 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-charcoal">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be recognized as Telangana’s most trusted real estate brand, setting industry benchmarks in master plan design, customer satisfaction, sustainable developments, and land value appreciation.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. CORE VALUES */}
      <Section bgVariant="white" badge="What Drives Us" title="Our Core Pillars">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => (
            <div key={i} className="bg-section rounded-card p-6 border border-gray-200 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-red text-white font-bold text-xs flex items-center justify-center">
                0{i + 1}
              </div>
              <h3 className="font-heading font-bold text-base text-charcoal">{val.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. COMPANY STATS */}
      <Section bgVariant="dark" badge="Proven Track Record" title="Infinity Homes by the Numbers">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statsData.map((stat, i) => (
            <StatCounter key={i} stat={stat} />
          ))}
        </div>
      </Section>

      {/* 5. CTA BANNER */}
      <section className="bg-gradient-primary text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Partner with Hyderabad's Most Trusted Developer
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Schedule an in-person meeting at our Bandlaguda Jagir head office or book a luxury AC vehicle site visit for your family.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <NavLink to="/contact">
                <Button variant="secondary" size="lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book Office Meeting</span>
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
    </PageTransition>
  );
};

