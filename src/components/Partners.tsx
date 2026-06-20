/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";

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

export default function Partners() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (name: string) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Confiance & Expertise</span>
          <h2 className="font-title text-3xl font-bold text-brand-charcoal mb-4">Nos Partenaires</h2>
          <p className="text-gray-600 font-light">
            Découvrez les institutions, entreprises et grands groupes qui s'appuient sur l'expertise géotechnique de KAPAROC INGÉNIERIE pour la réussite de leurs projets.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => {
            const hasError = imgErrors[partner.name];

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col items-center justify-center p-6 h-32 bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-brand-beige/50 shadow-none hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {!hasError ? (
                  <img
                    src={`/partenaire/${partner.file}`}
                    alt={`Logo ${partner.name}`}
                    className="max-w-[140px] max-h-[70px] w-auto h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    onError={() => handleImgError(partner.name)}
                  />
                ) : (
                  <>
                    <h3 className="font-title font-extrabold text-lg sm:text-xl text-brand-charcoal/80 group-hover:text-brand-orange transition-colors text-center leading-tight">
                      {partner.name}
                    </h3>
                    {partner.sub && (
                      <p className="text-[9px] sm:text-[10px] text-gray-400 group-hover:text-gray-500 uppercase tracking-widest mt-2 text-center font-semibold transition-colors">
                        {partner.sub}
                      </p>
                    )}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
