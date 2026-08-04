import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

// Zod Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid 10-digit mobile number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  propertyType: z.string().min(1, { message: 'Please select a property type' }),
  location: z.string().optional(),
  message: z.string().min(10, { message: 'Please enter a message of at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      propertyType: 'plot',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setFormSubmitted(true);
    reset();
  };

  const contactFaqs = faqsData;

  return (
    <PageTransition>
      <SEOHead
        title="Contact Us | Infinity Homes Hyderabad — Book Site Visit & Office Consultation"
        description="Contact Infinity Homes for HMDA/DTCP plot inquiries, luxury villa site visits, and legal title audits in Bandlaguda Jagir, Hyderabad. Call +91-8008897785."
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/90"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-bright bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Get In Touch
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Contact Infinity Homes
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Have questions about our HMDA open plots or luxury triplex villas? Reach out to our real estate advisors or book a complimentary AC vehicle site visit.
            </p>
          </div>
        </Container>
      </section>

      {/* Office Details & Contact Form */}
      <Section bgVariant="section" badge="Head Office & Inquiries" title="We'd Love to Hear From You">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office Details + Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-card p-6 md:p-8 border border-gray-200 shadow-soft space-y-6">
              <h3 className="font-heading font-bold text-xl text-charcoal border-b border-gray-100 pb-3">
                Head Office Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">Address</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    H.No. 123 & 124, 2nd Floor, Prashanth Nagar Colony, Bandlaguda Jagir, Hyderabad – 500086
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">Phone Numbers</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    +91-8008897785 <br />
                    +91-9394368369 <br />
                    +91-9885393778
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">Working Hours</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Mon – Sat: 10:00 AM – 6:00 PM <br />
                    Sunday: 10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Card */}
            <div className="bg-charcoal text-white rounded-card p-6 border border-gray-800 shadow-soft space-y-4">
              <h3 className="font-heading font-bold text-lg text-white">Instant Connection</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Connect directly with our senior project sales consultant via WhatsApp or phone call.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/918008897785?text=Hello%20Infinity%20Homes,%20I%20want%20to%20book%20a%20site%20visit."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+91 8008897785)</span>
                </a>
                <a
                  href="tel:+918008897785"
                  className="flex items-center justify-center gap-2 bg-gradient-primary text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 8008897785</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-card p-6 md:p-8 border border-gray-200 shadow-soft space-y-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-charcoal">Send Us a Message</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Fill out the form below to request project brochures, pricing details, or site visit scheduling.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-emerald-800">Inquiry Submitted Successfully!</h4>
                  <p className="text-emerald-700 text-xs sm:text-sm">
                    Thank you for reaching out to Infinity Homes. Our Senior Relationship Manager will call you shortly on your provided phone number.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                    <span>Send Another Inquiry</span>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        {...register('fullName')}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        {...register('phone')}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        {...register('email')}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Property Type Interest *</label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red font-semibold"
                      >
                        <option value="plot">Residential Plots (HMDA / DTCP)</option>
                        <option value="villa">Luxury Triplex Villas</option>
                        <option value="apartment">Modern High-rise Apartments</option>
                        <option value="farmland">Organic Farm Lands</option>
                        <option value="commercial">Commercial Office Spaces</option>
                      </select>
                      {errors.propertyType && <p className="text-red-500 text-[11px] mt-1">{errors.propertyType.message}</p>}
                    </div>
                  </div>

                  {/* Location Interest */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Preferred Location (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Kollur, Kokapet, Tellapur, Mokila..."
                      {...register('location')}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Message / Requirements *</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your budget, required plot size, or preferred site visit dates..."
                      {...register('message')}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message.message}</p>}
                  </div>

                  <Button variant="primary" size="md" type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Embedded Google Map */}
      <Section bgVariant="white" badge="Interactive Location" title="Find Us On Map">
        <div className="aspect-[21/9] rounded-card overflow-hidden shadow-soft border border-gray-200">
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
      </Section>

      {/* FAQ Accordion */}
      <Section bgVariant="section" badge="Site Visit & Meeting FAQs" title="Frequently Asked Questions">
        <FAQAccordion faqs={contactFaqs} />
      </Section>
    </PageTransition>
  );
};

