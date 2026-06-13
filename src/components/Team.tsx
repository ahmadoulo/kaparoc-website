/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, GraduationCap, Briefcase, Mail } from "lucide-react";

export default function Team() {
  const qualifications = [
    "Ingénieure Diplômée de l&apos;École Polytechnique de Thiès (EPT), Sénégal.",
    "Plus de 15 ans d&apos;expérience opérationnelle de premier plan dans l&apos;ingénierie géotechnique et la direction de travaux de génie civil.",
    "Experte agréée en diagnostic de fondations et interaction sol-structure complexes."
  ];

  return (
    <section id="direction" className="py-24 bg-brand-light-grey scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
            Gouvernance & Leadership
          </span>
          <h2 className="font-title font-extrabold text-3xl sm:text-4xl text-brand-charcoal">
            Une Direction Technique d&apos;Excellence
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded" />
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Un leadership d&apos;ingénieurs chevronnés pour piloter avec rigueur scientifique tous vos projets d&apos;infrastructures en Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* DG Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* DG visual profile badge left (40% width) */}
            <div className="lg:col-span-5 relative bg-gradient-to-br from-brand-brown to-brand-charcoal text-white flex flex-col justify-center items-center p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Abstract decorative grid pattern on background */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(#E84A1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              <div className="relative z-10 text-center space-y-5">
                {/* Visual Placeholder for high level executive portrait */}
                <div className="w-32 h-32 rounded-full border-4 border-brand-orange bg-white text-brand-brown mx-auto flex items-center justify-center shadow-lg">
                  <span className="font-title font-bold text-4xl tracking-wider text-brand-brown">
                    PSC
                  </span>
                </div>
                <div>
                  <h3 className="font-title font-extrabold text-xl text-white tracking-wide">
                    Peinda SOW CISS
                  </h3>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mt-1">
                    Directrice Générale
                  </p>
                </div>
                <div className="w-12 h-0.5 bg-white/20 mx-auto" />
                <p className="text-[11px] text-brand-beige/85 font-light italic max-w-xs mx-auto">
                  « La solidité d&apos;une infrastructure commence par l&apos;exactitude absolue des calculs de son sous-sol. Notre mission est d&apos;apporter de la sérénité géotechnique à chaque bâtisseur. »
                </p>
                <div className="flex justify-center pt-2">
                  <a
                    href="mailto:contact@kaparoc.com"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white px-4 py-2 rounded-lg transition-colors border border-white/10"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Contacter la direction
                  </a>
                </div>
              </div>
            </div>

            {/* Description & Career stats right (60% width) */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-orange tracking-widest uppercase block">
                  Profil de l&apos;Experte
                </span>
                <h3 className="font-title font-extrabold text-2xl text-brand-brown leading-snug">
                  Un parcours d&apos;excellence académique et de réalisations d&apos;envergure nationale
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Titulaire des prestigieux diplômes d&apos;ingénieur en Génie Civil spécialité Géotechnique de l&apos;école polytechnique de Thiès (EPT), Peinda SOW CISS dirige KAPAROC INGENIERIE avec une vision internationale d&apos;optimisation technique et structurelle.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Elle a conçu et supervisé le dimensionnement des fondations profondes (pieux de grand diamètre, chemisages de puits) pour de nombreux ponts autoroutiers, projets de terrassements massifs, centrales d&apos;énergie et dalles industrielles sur-sollicitées à travers l&apos;Afrique de l&apos;Ouest.
                </p>
              </div>

              {/* Hard Career qualifications */}
              <div className="space-y-4">
                <h4 className="font-title font-bold text-xs text-brand-brown uppercase tracking-wider block">
                  Qualifications & Expertises Clés :
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-gray-600">
                    <GraduationCap className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Ingénieure EPT (École Polytechnique de Thiès) — Rigueur de niveau mondial.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-600">
                    <Briefcase className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Connaissance approfondie des marnes et argiles gonflantes spécifiques d&apos;Afrique de l&apos;Ouest (Rufisque, Diamniadio).</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-600">
                    <Award className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Interprétations expertes d&apos;essais in-situ (pressiomètres, pénétromètres dynamiques lourds) et propositions méthodologiques d&apos;ancrage.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
