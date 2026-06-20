/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Missions G1-G5", href: "/geotechnique-g1-g5" },
    { name: "Domaines", href: "/domaines" },
    { name: "Direction", href: "/equipe" },
    { name: "Contact", href: "/contact" },
  ];

  const isSolidBackground = scrolled || isOpen;
  const isDarkHeader = ["/", "/about", "/services", "/domaines"].includes(location.pathname);
  const isTransparentOnDark = !isSolidBackground && isDarkHeader;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSolidBackground
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity">
              <img
                src="/kaparoc-logo.png"
                alt="KAPAROC Ingénierie"
                className={`h-12 w-auto object-contain transition-all duration-300 ${
                  isTransparentOnDark
                    ? "brightness-0 invert"
                    : "brightness-100"
                }`}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                
                let textColor = "";
                if (isActive) {
                  textColor = "text-brand-orange font-bold border-b-2 border-brand-orange pb-0.5";
                } else {
                  if (isSolidBackground) {
                    textColor = "text-brand-charcoal font-semibold hover:text-brand-orange";
                  } else {
                    textColor = isDarkHeader 
                      ? "text-white font-semibold hover:text-brand-orange" 
                      : "text-brand-brown font-semibold hover:text-brand-orange";
                  }
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm tracking-wide transition-colors ${textColor}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Panel (Phone number + CTA Devise) */}
            <div className="hidden lg:flex items-center gap-6">
              <div
                className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                  isSolidBackground 
                    ? "text-brand-charcoal" 
                    : (isDarkHeader ? "text-white" : "text-brand-brown")
                }`}
              >
                <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
                <span>+221 33 853 01 79</span>
              </div>
              <button
                onClick={onQuoteClick}
                className="bg-brand-orange hover:bg-brand-brown text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
              >
                Demander un devis
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand-charcoal" />
              ) : (
                <Menu className={`w-6 h-6 transition-colors ${
                  isSolidBackground 
                    ? "text-brand-charcoal" 
                    : (isDarkHeader ? "text-white" : "text-brand-brown")
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white border-t border-gray-100 py-4 shadow-inner"
            >
              <div className="px-4 space-y-2 flex flex-col">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isActive ? "text-brand-orange bg-brand-orange/5" : "text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <div className="flex items-center gap-2 px-3 text-xs text-brand-charcoal font-medium">
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>+221 33 853 01 79 (Dakar, Sénégal)</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onQuoteClick();
                    }}
                    className="w-full bg-brand-orange hover:bg-brand-brown text-white font-bold tracking-wide uppercase py-3.5 rounded-lg text-xs shadow-md transition-colors"
                  >
                    Demander une étude / devis
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
