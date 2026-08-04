import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ShieldCheck,
  Award,
  BadgePercent,
  Car,
  Landmark,
  Clock,
  FileCheck2,
  Headphones,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';

import { propertiesData } from '../data/properties';
import { servicesData } from '../data/services';
import { blogsData } from '../data/blogs';
import { testimonialsData } from '../data/testimonials';
import { faqsData } from '../data/faqs';
import { statsData } from '../data/stats';
import { Property, BlogPost } from '../types';

import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { PropertyCard } from '../components/ui/PropertyCard';
import { ServiceCard } from '../components/ui/ServiceCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { BlogCard } from '../components/ui/BlogCard';
import { StatCounter } from '../components/ui/StatCounter';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { PropertyDetailsModal } from '../components/modals/PropertyDetailsModal';
import { BlogDetailsModal } from '../components/modals/BlogDetailsModal';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

export const Home: React.FC = () => {
  // Modal states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Embla Carousels
  const [emblaRefProperties, emblaApiProperties] = useEmblaCarousel({ loop: true, align: 'start' });
  const [emblaRefTestimonials, emblaApiTestimonials] = useEmblaCarousel({ loop: true, align: 'start' });

  // Featured Properties Filter
  const featuredProperties = propertiesData.filter((p) => p.featured);
  const latestBlogs = blogsData.slice(0, 3);
  const topServices = servicesData.slice(0, 6);

  // Why Choose Us 8 Features
  const whyChooseUsFeatures = [
    { icon: ShieldCheck, title: '100% Clear Titles', desc: 'Rigorous legal audit by senior advocate panel ensuring total title safety.' },
    { icon: Landmark, title: 'HMDA & DTCP Approved', desc: 'All layouts carry official master plan sanction and approval numbers.' },
    { icon: BadgePercent, title: 'Zero Brokerage', desc: 'Direct developer pricing with complete financial transparency.' },
    { icon: Car, title: 'Complimentary Site Visits', desc: 'Free luxury AC chauffeur vehicle pickup and drop for your family.' },
    { icon: Award, title: 'Pre-Approved Bank Loans', desc: 'Instant home loan sanction from SBI, HDFC, ICICI, and Axis Bank.' },
    { icon: Clock, title: 'On-Time Handover', desc: 'Guaranteed layout development and key delivery timelines.' },
    { icon: FileCheck2, title: 'Legal Transparency', desc: 'Encumbrance Certificate, link documents, and RERA filing available on request.' },
    { icon: Headphones, title: '24/7 Customer Support', desc: 'Dedicated Relationship Manager for your complete property journey.' },
  ];

  // Process Timeline 7 Steps
  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'Discuss your budget, preferred location, and investment goals.' },
    { num: '02', title: 'Guided Site Visit', desc: 'Luxury AC vehicle pickup to inspect shortlisted projects.' },
    { num: '03', title: 'Property Selection', desc: 'Choose your ideal plot, villa, apartment, or farm land.' },
    { num: '04', title: 'Legal & Title Audit', desc: 'Complete link document verification with advocate panel.' },
    { num: '05', title: 'Bank Loan Sanction', desc: 'Fast-track pre-approved loan processing at competitive interest rates.' },
    { num: '06', title: 'Registration', desc: 'On-site registrar slot booking and documentation assistance.' },
    { num: '07', title: 'Key Delivery', desc: 'Official possession handover & welcome to the Infinity family.' },
  ];

  // Why Invest 8 Points
  const whyInvestPoints = [
    'Hyderabad is India’s fastest growing real estate market with highest capital growth.',
    'Direct access to 158km Outer Ring Road (ORR) exits 2 & 17 for seamless travel.',
    'Upcoming Regional Ring Road (RRR) driving massive land value appreciation.',
    'Proximity to Neopolis Kokapet & Financial District IT mega-hubs.',
    '100% Vastu-compliant layouts with wide 60ft & 40ft blacktop roads.',
    'Complete underground cabling, drainage, streetlights, and avenue plantation.',
    'Proven 15%+ annual appreciation rate across Kollur, Mokila & Shankarpally.',
    'High rental yield potential for luxury apartments and gated villas.',
  ];

  // Categories
  const categoryTiles = [
    { title: 'Residential Plots', type: 'plot', count: '12+ Layouts', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
    { title: 'Luxury Villas', type: 'villa', count: '8+ Gated Communities', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80' },
    { title: 'Modern Apartments', type: 'apartment', count: '15+ Towers', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80' },
    { title: 'Farm Lands', type: 'farmland', count: '6+ Managed Estates', img: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=600&q=80' },
    { title: 'Commercial Spaces', type: 'commercial', count: '5+ Tech Towers', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Infinity Homes — Luxury Real Estate in Hyderabad | Plots, Villas & Apartments"
        description="Infinity Homes is Hyderabad's leading luxury real estate brand offering HMDA & DTCP approved plots, villas, apartments, farm lands, and commercial spaces across Kollur, Kokapet, and Tellapur."
        isHomePage={true}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-charcoal text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Villa Background"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal/90 to-transparent z-0"></div>

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-wider text-brand-bright">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% HMDA & DTCP APPROVED PROJECTS IN HYDERABAD</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Infinity Homes — <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Your Trusted Partner
              </span>{' '}
              in Real Estate
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
              Discover high-appreciation open plots, luxury triplex villas, modern high-rise apartments, and managed farm lands across Hyderabad's top growth corridors.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <NavLink to="/properties">
                <Button variant="primary" size="lg">
                  <span>Explore Properties</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button variant="dark" size="lg">
                  <Calendar className="w-4 h-4" />
                  <span>Book Site Visit</span>
                </Button>
              </NavLink>

              <a
                href="tel:+918008897785"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors px-4 py-3"
              >
                <Phone className="w-4 h-4 text-brand-bright" />
                <span>+91 8008897785</span>
              </a>
            </div>

            {/* Floating Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/10">
              {statsData.map((stat, i) => (
                <StatCounter key={i} stat={stat} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <Section bgVariant="white" badge="About Infinity Homes" title="Building Trust & Luxury Since 2014">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-charcoal text-lg">
              Infinity Homes is a premier real estate brand based in Hyderabad, specializing in premium residential layout development, luxury villas, gated apartments, and land banking solutions.
            </p>
            <p>
              With over a decade of excellence, we have developed 120+ acres of prime land across high-potential growth corridors including Kollur, Kokapet, Tellapur, Mokila, and Shankarpally.
            </p>
            <p>
              Every Infinity Homes project is backed by 100% clear legal titles, complete HMDA/DTCP master plan sanctions, Vastu-compliant layouts, and bank loan pre-approvals from top national lenders.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <NavLink to="/about">
                <Button variant="primary" size="md">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Infinity Homes Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-gray-700">
              <span className="font-heading font-extrabold text-3xl text-brand-bright block">100%</span>
              <span className="text-xs font-semibold text-gray-300">Clear Titles & On-Time Possession Guaranteed</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. WHY CHOOSE US */}
      <Section
        bgVariant="section"
        badge="The Infinity Advantage"
        title="Why Home Buyers & Investors Choose Us"
        subtitle="Uncompromising legal verification, direct developer prices, and complete customer-centric service."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-card p-6 border border-gray-100 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base text-charcoal">{feat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. FEATURED PROPERTIES CAROUSEL */}
      <Section
        bgVariant="white"
        badge="Handpicked Collection"
        title="Featured Properties in Hyderabad"
        subtitle="Explore our top HMDA & DTCP approved open plots, luxury villas, and premium apartments."
      >
        <div className="relative">
          {/* Carousel Arrows */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <button
              onClick={() => emblaApiProperties && emblaApiProperties.scrollPrev()}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-brand-red text-charcoal hover:text-brand-red flex items-center justify-center transition-colors"
              aria-label="Previous property"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApiProperties && emblaApiProperties.scrollNext()}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-brand-red text-charcoal hover:text-brand-red flex items-center justify-center transition-colors"
              aria-label="Next property"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRefProperties}>
            <div className="flex gap-6">
              {featuredProperties.map((prop) => (
                <div key={prop.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <PropertyCard property={prop} onViewDetails={(p) => setSelectedProperty(p)} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <NavLink to="/properties">
              <Button variant="outline" size="md">
                <span>View All Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </NavLink>
          </div>
        </div>
      </Section>

      {/* 5. PROPERTY CATEGORIES */}
      <Section
        bgVariant="section"
        badge="Category Showcase"
        title="Explore Properties by Type"
        subtitle="Find the exact property type tailored to your residential or investment requirements."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categoryTiles.map((cat, i) => (
            <NavLink
              key={i}
              to={`/properties?type=${cat.type}`}
              className="group relative rounded-card overflow-hidden aspect-[4/5] shadow-soft border border-gray-100 flex flex-col justify-end p-5"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-bright bg-black/40 px-2 py-0.5 rounded">
                  {cat.count}
                </span>
                <h3 className="font-heading font-extrabold text-lg group-hover:text-brand-bright transition-colors">
                  {cat.title}
                </h3>
              </div>
            </NavLink>
          ))}
        </div>
      </Section>

      {/* 6. SERVICES OVERVIEW */}
      <Section
        bgVariant="white"
        badge="Comprehensive Solutions"
        title="Our Real Estate Services"
        subtitle="From plot procurement to legal verification and home loan processing, we handle it all."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>

        <div className="text-center mt-10">
          <NavLink to="/services">
            <Button variant="primary" size="md">
              <span>View All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </NavLink>
        </div>
      </Section>

      {/* 7. WHY INVEST INFOGRAPHIC */}
      <Section
        bgVariant="dark"
        badge="Hyderabad Growth Story"
        title="Why Invest in Hyderabad Real Estate?"
        subtitle="Ranked India's top real estate investment destination with unmatched infrastructure growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyInvestPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. PROCESS TIMELINE */}
      <Section
        bgVariant="white"
        badge="Simplified Journey"
        title="7-Step Seamless Property Buying Process"
        subtitle="How we make your property purchase transparent, hassle-free, and memorable."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="bg-section rounded-2xl p-5 border border-gray-200 relative text-center flex flex-col justify-between hover:border-brand-red transition-colors group"
            >
              <div>
                <span className="w-10 h-10 rounded-full bg-brand-red text-white font-heading font-extrabold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-sm text-charcoal mb-2 group-hover:text-brand-red transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. TESTIMONIALS SLIDER */}
      <Section
        bgVariant="section"
        badge="Happy Clients"
        title="What Our Customers Say"
        subtitle="Real stories from families and investors who bought plots and villas with Infinity Homes."
      >
        <div className="relative">
          <div className="flex items-center justify-end gap-2 mb-6">
            <button
              onClick={() => emblaApiTestimonials && emblaApiTestimonials.scrollPrev()}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-brand-red text-charcoal hover:text-brand-red flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApiTestimonials && emblaApiTestimonials.scrollNext()}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-brand-red text-charcoal hover:text-brand-red flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRefTestimonials}>
            <div className="flex gap-6">
              {testimonialsData.map((test) => (
                <div key={test.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0">
                  <TestimonialCard testimonial={test} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 10. LATEST BLOGS */}
      <Section
        bgVariant="white"
        badge="Market Insights"
        title="Latest Real Estate News & Guides"
        subtitle="Expert articles on HMDA vs DTCP layouts, property registration, and market trends."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogs.map((b) => (
            <BlogCard key={b.id} post={b} onReadMore={(blog) => setSelectedBlog(blog)} />
          ))}
        </div>

        <div className="text-center mt-10">
          <NavLink to="/blogs">
            <Button variant="outline" size="md">
              <span>Read All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </NavLink>
        </div>
      </Section>

      {/* 11. FAQ ACCORDION */}
      <Section
        bgVariant="section"
        badge="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about purchasing property with Infinity Homes."
      >
        <FAQAccordion faqs={faqsData} />
      </Section>

      {/* 12. CTA BANNER */}
      <section className="bg-gradient-primary text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Ready to Find Your Dream Property in Hyderabad?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Book a complimentary luxury site visit today. Our real estate experts will guide you through HMDA/DTCP layouts and pre-approved bank loans.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <NavLink to="/contact">
                <Button variant="secondary" size="lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book Site Visit Now</span>
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

      {/* 13. CONTACT PREVIEW */}
      <Section bgVariant="white" badge="Visit Us" title="Our Head Office & Contact Details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-charcoal">Head Office Address</h4>
                <p className="text-gray-600 text-sm mt-1">
                  H.No. 123 & 124, 2nd Floor, Prashanth Nagar Colony, Bandlaguda Jagir, Hyderabad – 500086
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-charcoal">Phone Numbers</h4>
                <p className="text-gray-600 text-sm mt-1">
                  +91-8008897785 · +91-9394368369 · +91-9885393778
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-charcoal">Email & Hours</h4>
                <p className="text-gray-600 text-sm mt-1">
                  info@infinityhomeshyderabad.com <br />
                  Mon–Sat: 10:00 AM – 6:00 PM | Sun: 10:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="aspect-[16/10] rounded-card overflow-hidden shadow-soft border border-gray-200">
            <iframe
              title="Infinity Homes Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.568461102928!2d78.384213!3d17.360721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9636c2e718bf%3A0x8e820067b5e43a9b!2sBandlaguda%20Jagir%2C%20Hyderabad%2C%20Telangana%20500086!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* Modals */}
      <PropertyDetailsModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      <BlogDetailsModal post={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </PageTransition>
  );
};

