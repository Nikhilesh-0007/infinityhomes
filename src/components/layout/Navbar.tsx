import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group py-0.5">
            <img
              src="/Main_Logo_PNG copy.png"
              alt="Infinity Homes Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-heading font-medium text-sm transition-colors hover:text-brand-red ${
                    isActive ? 'text-brand-red font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918008897785"
              className="flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+91 8008897785</span>
            </a>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white text-xs font-heading font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-hover hover:scale-105 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Site Visit</span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-4 pb-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-heading font-medium text-base py-2 border-b border-gray-100 ${
                    isActive ? 'text-brand-red font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+918008897785"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>+91 8008897785</span>
              </a>
              <NavLink
                to="/contact"
                className="w-full text-center bg-gradient-primary text-white text-sm font-heading font-bold py-3 rounded-xl shadow-md"
              >
                Book Site Visit
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
