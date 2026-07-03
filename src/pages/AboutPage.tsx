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
        <title>À Propos | KAPAROC Ingénierie Géotechnique – Dakar, Sénégal</title>
        <meta name="description" content="Découvrez KAPAROC Ingénierie : histoire, vision et engagements. Bureau d'études géotechniques fondé à Dakar, spécialisé en reconnaissance des sols, fondations et infrastructure durable en Afrique de l'Ouest." />
        <meta name="keywords" content="KAPAROC Ingénierie Dakar, bureau géotechnique Sénégal, étude de sol Dakar, fondations infrastructure, ingénierie géotechnique Afrique" />
        <link rel="canonical" href="https://www.kaparoc.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/about" />
        <meta property="og:title" content="À Propos – KAPAROC Ingénierie | Géotechnique Dakar, Sénégal" />
        <meta property="og:description" content="Bureau d'études géotechniques à Dakar. Notre expertise en reconnaissance des sols et ingénierie des fondations au service de vos projets BTP en Afrique de l'Ouest." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos – KAPAROC Ingénierie Géotechnique Dakar" />
        <meta name="twitter:description" content="Découvrez le bureau d'études géotechniques KAPAROC : expertise G1 à G5, fondations, sols — Dakar, Sénégal." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
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

      {/* Team Section */}
      <section className="py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 block">Notre Management</span>
            <h2 className="font-title text-3xl font-bold text-brand-charcoal">Notre Équipe</h2>
            <div className="w-12 h-1 bg-brand-orange rounded mx-auto mt-3" />
            <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-sm">
              Des ingénieurs et techniciens qualifiés, garants de la rigueur et de la fiabilité de chaque mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Peinda SOW CISS", role: "Direction Générale", initials: "PS" },
              { name: "Abdou Khadre Djily GUEYE", role: "Ingénieur Géotechnicien", initials: "AK" },
              { name: "Mamadou Waly NIANE", role: "Technicien Supérieur Géotechnique", initials: "MW" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-brand-orange/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-brand-brown flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-title font-bold text-base text-brand-charcoal">{member.name}</h3>
                <p className="text-xs text-brand-orange font-semibold mt-1 uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs & QHSE */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 block">Nos Valeurs</span>
                <h2 className="font-title text-2xl font-bold text-brand-charcoal">Excellence, Innovation, Intégrité</h2>
                <div className="w-12 h-1 bg-brand-orange rounded mt-3" />
              </div>
              <div className="space-y-4">
                {[
                  { val: "Excellence", desc: "Chaque mission est réalisée avec le plus haut niveau d'exigence technique, conforme aux normes internationales." },
                  { val: "Innovation", desc: "Nous mobilisons des équipements de dernière génération et des méthodes avancées pour des analyses précises." },
                  { val: "Intégrité", desc: "Nos recommandations sont indépendantes, objectives et engagent entièrement notre responsabilité professionnelle." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-orange font-bold text-xs">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-brand-brown">{item.val}</h3>
                      <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 block">Nos Engagements</span>
                <h2 className="font-title text-2xl font-bold text-brand-charcoal">Politique QHSE</h2>
                <div className="w-12 h-1 bg-brand-orange rounded mt-3" />
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                KAPAROC Ingénierie s'engage à respecter les plus hautes exigences en matière de Qualité, Hygiène, Sécurité et Environnement dans toutes ses interventions.
              </p>
              <div className="bg-brand-light-grey rounded-2xl p-6 border border-gray-100 space-y-3">
                {[
                  "Conformité aux normes NF P 94-500 et Eurocode 7",
                  "Sécurité des opérateurs et protection des chantiers",
                  "Respect de l'environnement dans les campagnes de terrain",
                  "Traçabilité complète des échantillons et résultats d'essais",
                  "Rapports signés et approuvés par des ingénieurs certifiés",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
