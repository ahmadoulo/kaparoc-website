/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import { useOutletContext } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ContextType {
  onQuoteClick: () => void;
}

export default function AboutPage() {
  const { onQuoteClick } = useOutletContext<ContextType>();

  return (
    <>
      <Helmet>
        <title>À Propos | Kaparoc Ingénierie</title>
        <meta name="description" content="Découvrez KAPAROC INGENIERIE, notre histoire, notre vision et nos engagements en matière d'études géotechniques et ingénierie au Sénégal et en Afrique de l'Ouest." />
      </Helmet>
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-brand-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Notre Identité</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-6">L'expertise au service<br/>de vos fondations</h1>
          <p className="text-brand-beige/80 max-w-2xl mx-auto font-light leading-relaxed">
            Nous sommes les partenaires techniques dédiés à la réussite et à la pérennité de tous vos chantiers en Afrique de l'Ouest.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <About />
      
      {/* Origin of KAPAROC Highlight */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-150 overflow-hidden relative">
            {/* Subtle Topo SVG behind */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#F84F16_1px,transparent_1px)] [background-size:24px_24px] opacity-10 rounded-bl-full" />
            
            <div className="max-w-3xl relative z-10 space-y-6">
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Aux sources de notre identité</span>
              <h2 className="font-title text-3xl font-bold text-brand-charcoal">La symbolique du roc,<br/>l'héritage d'un terroir.</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Le nom <strong>KapaRoc</strong> porte une histoire profonde, à la croisée du personnel et du professionnel. D'une part, il rend hommage à Kaparoc, un ancien village aujourd'hui disparu, situé à l'emplacement de l'actuel Aéroport International Blaise Diagne (AIBD). Ce choix symbolique célèbre la mémoire d'une communauté, tout en rappelant l'importance de comprendre le contexte local dans toute démarche d'ingénierie.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                D'autre part, le mot <strong>"Roc"</strong> incarne la solidité, la durabilité et la stabilité, valeurs essentielles en géotechnique. L'étude des sols et formations rocheuses constitue le cœur même de notre expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Highlight */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="font-title text-2xl font-bold text-brand-charcoal">Notre Vision</h2>
            <div className="w-12 h-1 bg-brand-orange rounded" />
            <p className="text-gray-600 font-light leading-relaxed">
              Devenir et rester l'ultime référence technique en matière de sécurité des sols en Afrique de l'Ouest, en innovant continuellement par la modélisation avancée et la formation de nos ingénieurs. Nous croyons qu'une infrastructure fiable commence toujours bien avant la pose de la première pierre.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-title text-2xl font-bold text-brand-charcoal">Notre Mission</h2>
            <div className="w-12 h-1 bg-brand-orange rounded" />
            <p className="text-gray-600 font-light leading-relaxed">
              Démystifier les complexités du sous-sol pour offrir aux architectes, promoteurs et entreprises du BTP des recommandations claires, chiffrées et sécurisées. Nous engageons notre responsabilité sur chaque note de calcul que nous délivrons.
            </p>
          </div>
        </div>
      </section>

      <WhyUs />

      {/* Interactive CTA */}
      <div className="bg-brand-orange/5 py-16 text-center border-t border-brand-orange/10">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-title text-2xl font-bold text-brand-charcoal mb-4">Prêt à sécuriser votre prochain projet ?</h2>
          <p className="text-gray-600 font-light mb-8">
            Faites confiance à notre bureau d'études pour une campagne de reconnaissance géotechnique rigoureuse.
          </p>
          <button 
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-brown text-white font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors shadow-md"
          >
            Obtenir une étude
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
