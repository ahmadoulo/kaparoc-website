/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import { useOutletContext } from "react-router-dom";
import { ArrowRight, Microscope, Navigation, CheckCircle2 } from "lucide-react";

interface ContextType {
  onQuoteClick: () => void;
}

export default function ServicesPage() {
  const { onQuoteClick } = useOutletContext<ContextType>();

  const detailedServices = [
    {
      title: "Investigations in-situ",
      icon: <Navigation className="w-6 h-6 text-brand-orange" />,
      features: ["Sondages pressiométriques (Ménard)", "Pénétromètres dynamiques lourds (PDL)", "Forages carottés géotechniques", "Essais de perméabilité in-situ"]
    },
    {
      title: "Analyses de laboratoire",
      icon: <Microscope className="w-6 h-6 text-brand-orange" />,
      features: ["Cisaillement direct & essais triaxiaux", "Essais œdométriques (tassement)", "Granulométrie & limites d'Atterberg", "Essais Proctor & gonflement libre"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services Géotechniques | KAPAROC Ingénierie – Études de Sol à Dakar</title>
        <meta name="description" content="Services géotechniques complets à Dakar : études de sol G1-G5, sondages pressiométriques, forages carottés, analyses de laboratoire, topographie. KAPAROC Ingénierie, expert en BTP au Sénégal." />
        <meta name="keywords" content="services géotechniques Dakar, étude de sol BTP, sondage pressiométrique Sénégal, forage carotté, analyse laboratoire sol, topographie géotechnique Afrique" />
        <link rel="canonical" href="https://www.kaparoc.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/services" />
        <meta property="og:title" content="Services Géotechniques – KAPAROC Ingénierie | Dakar, Sénégal" />
        <meta property="og:description" content="Études de sol, sondages, forages, analyses labo et topographie. KAPAROC Ingénierie couvre tous vos besoins géotechniques G1 à G5 au Sénégal." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services Géotechniques – KAPAROC Ingénierie Dakar" />
        <meta name="twitter:description" content="Études de sol, sondages pressiométriques, forages, labo géotechnique — KAPAROC Ingénierie, Dakar Sénégal." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
      </Helmet>
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Notre Métier</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-6">Expertise Globale<br/>Garantie Absolue</h1>
          <p className="text-brand-beige/80 max-w-2xl mx-auto font-light leading-relaxed">
            De la reconnaissance préliminaire au suivi de chantier, nous couvrons toutes les étapes de vie de votre infrastructure.
          </p>
        </div>
      </div>

      <Services onQuoteClick={onQuoteClick} />

      {/* Detail section for Terrain and Labo */}
      <section className="py-20 bg-brand-light-grey border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-title text-2xl font-bold text-brand-charcoal mb-4">Moyens Techniques et Opérationnels</h2>
            <p className="text-gray-600 font-light">
              Kaparoc dispose de ses propres équipements de forage et d'un laboratoire d'analyse complet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {detailedServices.map((ds, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="p-3 bg-brand-orange/10 rounded-xl">
                    {ds.icon}
                  </div>
                  <h3 className="font-title font-bold text-xl text-brand-brown">{ds.title}</h3>
                </div>
                <ul className="space-y-4">
                  {ds.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-title text-2xl font-bold mb-6">Besoin d'une expertise pointue ?</h2>
          <button 
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-white text-white hover:text-brand-brown font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors"
          >
            Parler à un ingénieur
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
