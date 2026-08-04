import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/Main_Logo_PNG.png"
                alt="Infinity Homes Logo"
                className="h-12 sm:h-14 w-auto object-contain bg-white px-2 py-1 rounded-lg"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted real estate partner in Hyderabad. Premium HMDA & DTCP plots, luxury villas, apartments, farm lands, and commercial spaces.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/50 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% HMDA / DTCP Approved Layouts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink to="/" className="hover:text-brand-bright transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-brand-bright transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/properties" className="hover:text-brand-bright transition-colors">
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-brand-bright transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="hover:text-brand-bright transition-colors">
                  Blogs & Market Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-brand-bright transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Head Office
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-bright shrink-0 mt-0.5" />
                <span>
                  H.No. 123 & 124, 2nd Floor, Prashanth Nagar Colony, Bandlaguda Jagir, Hyderabad – 500086
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-bright shrink-0" />
                <span>+91-8008897785 / +91-9394368369</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-bright shrink-0" />
                <span>info@infinityhomeshyderabad.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Working Hours
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-bright shrink-0" />
                <span>Mon – Sat: 10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span>Sunday: 10:00 AM – 5:00 PM</span>
              </div>
            </div>
            <div className="pt-2">
              <NavLink
                to="/contact"
                className="inline-block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs py-2.5 rounded-lg border border-gray-700 transition-colors"
              >
                Schedule Office Meeting
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Infinity Homes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">RERA Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
