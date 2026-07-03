/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

const partners = [
  { name: "CHEC", sub: "China Harbour Engineering", file: "ChinaHarborEngineeringLTD_Logo.jpeg" },
  { name: "Zhengtai Group", sub: "Construction", file: "zhengtai-group.jpg" },
  { name: "Dima Groupe", sub: "Immobilier", file: "dima-groupe.png" },
  { name: "Eydon", sub: "Distribution", file: "eydon_logo.jpg" },
  { name: "B.D.T.P", sub: "Travaux Publics", file: "bdtp-logo.jpeg" },
  { name: "ProTec", sub: "Professional Techniques", file: "protec-logo.png" },
  { name: "PROMOGED", sub: "Gestion des déchets", file: "promoged-logo.png" },
  { name: "SL Structures", sub: "Ingénierie", file: "sl-structure-logo.jpg" },
  { name: "Xewell", sub: "Logistique & BTP", file: "xewell.png" },
  { name: "NMA", sub: "Nouvelle Minoterie Africaine", file: "nma-logo.jpeg" },
  { name: "Azkhar", sub: "International", file: "azkhar-logo.png" },
  { name: "La Brioche Dorée", sub: "Agroalimentaire", file: "brioche-doree-logo.png" },
];

// Duplicate list for seamless infinite scroll
const allPartners = [...partners, ...partners];

export default function Partners() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 block">Confiance & Expertise</span>
        <h2 className="font-title text-3xl font-bold text-brand-charcoal mb-3">Nos Partenaires</h2>
        <div className="w-12 h-1 bg-brand-orange rounded mx-auto mb-4" />
        <p className="text-gray-500 font-light text-sm max-w-xl mx-auto">
          Des institutions, entreprises et grands groupes qui s'appuient sur l'expertise géotechnique de KAPAROC INGÉNIERIE.
        </p>
      </div>

      {/* Infinite scroll track */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & right fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex gap-6 w-max"
          style={{
            animation: `partners-scroll 32s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {allPartners.map((partner, index) => {
            const key = `${partner.name}-${index}`;
            const hasError = imgErrors[key];

            return (
              <div
                key={key}
                className="flex flex-col items-center justify-center px-8 py-5 bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-brand-beige/50 hover:shadow-md transition-all duration-300 cursor-default flex-shrink-0 min-w-[160px] h-24 group"
              >
                {!hasError ? (
                  <img
                    src={`/partenaire/${partner.file}`}
                    alt={`Logo ${partner.name}`}
                    className="max-w-[120px] max-h-[52px] w-auto h-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                    onError={() => handleImgError(key)}
                  />
                ) : (
                  <div className="text-center">
                    <h3 className="font-title font-extrabold text-base text-brand-charcoal/70 group-hover:text-brand-orange transition-colors leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1 font-semibold">
                      {partner.sub}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS animation keyframes injected inline */}
      <style>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
