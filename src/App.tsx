/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import Chatbot from "./components/Chatbot";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MissionsPage = lazy(() => import("./pages/MissionsPage"));

// ScrollToTop strictly for resetting scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="bg-brand-light-grey text-brand-charcoal font-sans antialiased min-h-screen relative flex flex-col">
      {/* Texture Topographique Discrète */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative corporate accents from design theme */}
      <div className="fixed left-0 top-1/2 h-32 w-2 bg-brand-orange z-10 pointer-events-none hidden md:block" />
      <div className="fixed right-0 top-1/3 vertical-text px-2 py-5 bg-brand-brown text-white text-[9px] font-bold tracking-[0.4em] uppercase z-40 pointer-events-none hidden xl:block rounded-l shadow-xl">
        Innovation & Stabilité
      </div>

      <Navbar onQuoteClick={handleOpenQuote} />

      <main className="flex-grow pt-0 w-full">
        <Outlet context={{ onQuoteClick: handleOpenQuote }} />
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-brand-light-grey"><div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="geotechnique-g1-g5" element={<MissionsPage />} />
              <Route path="domaines" element={<SectorsPage />} />
              <Route path="equipe" element={<TeamPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
