/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Beaker, FlaskConical, Building2, HardHat, Layers, Wrench, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onQuoteClick: () => void;
}

const missionsDropdown = [
  {
    label: "Ingénierie Géotechnique",
    href: "/missions#ingenierie",
    icon: <HardHat className="w-4 h-4 text-brand-orange" />,
    desc: "Missions G1–G5, fondations, stabilité"
  },
  {
    label: "Essais In-Situ",
    href: "/missions#in-situ",
    icon: <Layers className="w-4 h-4 text-brand-orange" />,
    desc: "Pressiométrie, pénétromètres, piézomètres"
  },
  {
    label: "Laboratoire",
    href: "/missions#laboratoire",
    icon: <Beaker className="w-4 h-4 text-brand-orange" />,
    desc: "Sols, béton, matériaux routiers"
  },
  {
    label: "Auscultation & Instrumentation",
    href: "/missions#auscultation",
    icon: <Activity className="w-4 h-4 text-brand-orange" />,
    desc: "Contrôle pieux, tassements, inclinomètres"
  },
  {
    label: "Études Topographiques",
    href: "/missions#topographie",
    icon: <Wrench className="w-4 h-4 text-brand-orange" />,
    desc: "Levés, implantations, cubatures"
  },
];

const refsDropdown = [
  {
    label: "Infrastructures & Industrie",
    href: "/projets#infrastructures",
    icon: <Building2 className="w-4 h-4 text-brand-orange" />,
    desc: "Port de Ndayane, XEWELL, GB Foods"
  },
  {
    label: "Bâtiments & Hôtellerie",
    href: "/projets#batiments",
    icon: <FlaskConical className="w-4 h-4 text-brand-orange" />,
    desc: "Noom la Réserve, Brioche Dorée"
  },
  {
    label: "Institutionnel & Public",
    href: "/projets#institutionnel",
    icon: <Layers className="w-4 h-4 text-brand-orange" />,
    desc: "Préfectures, commissariats"
  },
];

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pages with a LIGHT hero background (white/grey) need dark text when transparent
  const lightHeaderPages = ["/contact"];
  const isLightPage = lightHeaderPages.includes(location.pathname);
  const isSolidBackground = scrolled || isOpen || isLightPage;
  const isDarkHeader = !isLightPage;
  const isTransparentOnDark = !isSolidBackground && isDarkHeader;

  const textColor = (active = false) => {
    if (active) return "text-brand-orange font-bold";
    if (isSolidBackground) return "text-brand-charcoal font-semibold hover:text-brand-orange";
    return isDarkHeader
      ? "text-white font-semibold hover:text-brand-orange"
      : "text-brand-brown font-semibold hover:text-brand-orange";
  };

  const isActivePath = (paths: string[]) => paths.some(p => location.pathname.startsWith(p));

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSolidBackground
            ? "bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" ref={dropdownRef}>

            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0">
              <img
                src="/kaparoc-logo.png"
                alt="KAPAROC Ingénierie"
                className={`h-11 w-auto object-contain transition-all duration-300 ${
                  isTransparentOnDark ? "brightness-0 invert" : "brightness-100"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">

              {/* Accueil */}
              <Link
                to="/"
                className={`text-sm tracking-wide transition-colors px-3 py-2 rounded-lg ${textColor(location.pathname === "/")}`}
              >
                Accueil
              </Link>

              {/* Nos Missions dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("missions")}
                  onMouseEnter={() => setActiveDropdown("missions")}
                  className={`text-sm tracking-wide transition-colors px-3 py-2 rounded-lg flex items-center gap-1 ${textColor(isActivePath(["/missions", "/services", "/geotechnique-g1-g5"]))}`}
                >
                  Nos Missions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "missions" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "missions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {missionsDropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-brand-light-grey transition-colors group"
                          >
                            <div className="p-1.5 bg-brand-orange/10 rounded-lg flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div>
                              <span className="block text-sm font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors">{item.label}</span>
                              <span className="block text-[11px] text-gray-400 font-light mt-0.5">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-3 bg-brand-orange/5 border-t border-gray-100">
                        <Link to="/missions" className="text-xs font-bold text-brand-orange hover:text-brand-brown transition-colors">
                          Voir toutes nos missions →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nos Références dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("refs")}
                  onMouseEnter={() => setActiveDropdown("refs")}
                  className={`text-sm tracking-wide transition-colors px-3 py-2 rounded-lg flex items-center gap-1 ${textColor(isActivePath(["/projets"]))}`}
                >
                  Nos Références
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "refs" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "refs" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-68 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {refsDropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-brand-light-grey transition-colors group"
                          >
                            <div className="p-1.5 bg-brand-orange/10 rounded-lg flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div>
                              <span className="block text-sm font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors">{item.label}</span>
                              <span className="block text-[11px] text-gray-400 font-light mt-0.5">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-3 bg-brand-orange/5 border-t border-gray-100">
                        <Link to="/projets" className="text-xs font-bold text-brand-orange hover:text-brand-brown transition-colors">
                          Voir tous nos projets →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* À Propos */}
              <Link
                to="/about"
                className={`text-sm tracking-wide transition-colors px-3 py-2 rounded-lg ${textColor(location.pathname === "/about")}`}
              >
                À Propos
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`text-sm tracking-wide transition-colors px-3 py-2 rounded-lg ${textColor(location.pathname === "/contact")}`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+221338530179"
                className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                  isSolidBackground ? "text-brand-charcoal" : (isDarkHeader ? "text-white" : "text-brand-brown")
                }`}
              >
                <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
                <span>+221 33 853 01 79</span>
              </a>
              <button
                onClick={onQuoteClick}
                className="bg-brand-orange hover:bg-brand-brown text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                Demander un devis
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand-charcoal" />
              ) : (
                <Menu className={`w-6 h-6 transition-colors ${
                  isSolidBackground ? "text-brand-charcoal" : (isDarkHeader ? "text-white" : "text-brand-brown")
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              className="xl:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                
                {/* Accueil */}
                <Link
                  to="/"
                  className={`block px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === "/" ? "text-brand-orange bg-brand-orange/5" : "text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey"
                  }`}
                >
                  Accueil
                </Link>

                {/* Nos Missions — Accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "missions" ? null : "missions")}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey transition-colors"
                  >
                    <span>Nos Missions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "missions" ? "rotate-180 text-brand-orange" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "missions" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3 border-l-2 border-brand-orange/20 pl-3 mt-1 space-y-1"
                      >
                        {missionsDropdown.map(item => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-brand-orange hover:bg-brand-light-grey transition-colors"
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/missions" className="block px-3 py-2.5 text-xs font-bold text-brand-orange">
                          Voir toutes nos missions →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nos Références — Accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "refs" ? null : "refs")}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey transition-colors"
                  >
                    <span>Nos Références</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "refs" ? "rotate-180 text-brand-orange" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "refs" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3 border-l-2 border-brand-orange/20 pl-3 mt-1 space-y-1"
                      >
                        {refsDropdown.map(item => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-brand-orange hover:bg-brand-light-grey transition-colors"
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/projets" className="block px-3 py-2.5 text-xs font-bold text-brand-orange">
                          Voir tous nos projets →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* À Propos */}
                <Link
                  to="/about"
                  className={`block px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === "/about" ? "text-brand-orange bg-brand-orange/5" : "text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey"
                  }`}
                >
                  À Propos
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  className={`block px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === "/contact" ? "text-brand-orange bg-brand-orange/5" : "text-brand-charcoal hover:text-brand-orange hover:bg-brand-light-grey"
                  }`}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a href="tel:+221338530179" className="flex items-center gap-2 px-3 text-xs text-brand-charcoal font-medium">
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>+221 33 853 01 79</span>
                  </a>
                  <button
                    onClick={() => { setIsOpen(false); onQuoteClick(); }}
                    className="w-full bg-brand-orange hover:bg-brand-brown text-white font-bold tracking-wide uppercase py-3.5 rounded-xl text-xs shadow-md transition-colors"
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
