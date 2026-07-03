/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import {
  Beaker, Layers, HardHat, Activity, Wrench,
  ChevronDown, ChevronRight, ArrowRight, CheckCircle2, FlaskConical
} from "lucide-react";

interface ContextType {
  onQuoteClick: () => void;
}

const sections = [
  { id: "ingenierie", label: "Ingénierie Géotechnique", icon: HardHat },
  { id: "in-situ", label: "Essais In-Situ", icon: Layers },
  { id: "laboratoire", label: "Laboratoire", icon: Beaker },
  { id: "auscultation", label: "Auscultation & Instrumentation", icon: Activity },
  { id: "topographie", label: "Études Topographiques", icon: Wrench },
];

export default function MissionsPage() {
  const { onQuoteClick } = useOutletContext<ContextType>();
  const [activeSection, setActiveSection] = useState("ingenierie");
  const [expandedLab, setExpandedLab] = useState<string | null>("sols");

  return (
    <>
      <Helmet>
        <title>Nos Missions | KAPAROC Ingénierie – Géotechnique, Labo, Essais In-Situ Sénégal</title>
        <meta name="description" content="KAPAROC Ingénierie : ingénierie géotechnique G1-G5, essais in-situ, laboratoire (sols, béton, route), auscultation et topographie. Expert géotechnique au Sénégal." />
        <link rel="canonical" href="https://www.kaparoc.com/missions" />
      </Helmet>

      {/* Hero */}
      <div className="pt-32 pb-16 bg-brand-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Nos Expertises</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-6">Nos Missions</h1>
          <p className="text-brand-beige/80 max-w-3xl mx-auto font-light leading-relaxed">
            Avec KAPAROC Ingénierie, vous bénéficiez d'une expertise poussée en ingénierie géotechnique, en contrôle des matériaux et en reconnaissance des sols. Nos équipes mobilisent des équipements de dernière génération pour réaliser une large gamme d'essais géotechniques, aussi bien sur site qu'en laboratoire.
          </p>
        </div>
      </div>

      {/* Sticky Section Nav */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {sections.map(sec => {
              const Icon = sec.icon;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 flex-shrink-0 ${
                    activeSection === sec.id
                      ? "border-brand-orange text-brand-orange"
                      : "border-transparent text-gray-500 hover:text-brand-orange hover:border-brand-orange/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {sec.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                Savoir-faire technique &<br/>matériel de pointe
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Réactifs et orientés solutions, nos experts accompagnent les maîtres d'ouvrage, bureaux d'études, entreprises et institutions à chaque étape : diagnostic, investigations, interprétation des résultats, recommandations techniques et suivi d'exécution.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Grâce à une approche rigoureuse, conforme aux exigences techniques et réglementaires en vigueur, KAPAROC contribue à sécuriser les ouvrages, optimiser les choix de conception et garantir la fiabilité des projets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {sections.map(sec => {
                const Icon = sec.icon;
                return (
                  <a key={sec.id} href={`#${sec.id}`} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-orange hover:shadow-md transition-all group">
                    <div className="p-2 bg-brand-orange/10 rounded-lg inline-flex mb-3 group-hover:bg-brand-orange/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange transition-colors">{sec.label}</h3>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* A/ Ingénierie Géotechnique */}
      <section id="ingenierie" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<HardHat className="w-6 h-6 text-brand-orange" />}
            badge="Section A"
            title="Ingénierie Géotechnique & Études Spécialisées"
          />
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-12">
            KAPAROC Ingénierie accompagne les projets de construction, d'infrastructures et d'aménagement à travers des missions d'ingénierie géotechnique couvrant les phases d'étude, de conception, d'exécution, de contrôle et de diagnostic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Missions géotechniques G1 à G5",
                desc: "Études préalables de site, principes généraux, études de conception, suivi géotechnique d'exécution, supervision et diagnostics géotechniques selon la norme NF P 94-500."
              },
              {
                title: "Fondations & Ouvrages géotechniques",
                desc: "Analyse et dimensionnement des fondations superficielles, semi-profondes ou profondes, radiers, soutènements, avec recommandations adaptées au sol et aux charges."
              },
              {
                title: "Stabilité & Amélioration des sols",
                desc: "Étude des pentes, talus, remblais, drainage, inclusions rigides, colonnes ballastées, substitution, traitement ou compactage selon les contraintes du site."
              },
              {
                title: "Études de sites complexes",
                desc: "Prise en compte de la topographie, nature des terrains, propriétés mécaniques, régime hydraulique pour proposer des solutions fiables et optimisées."
              },
              {
                title: "Hydrogéologie & Influence de l'eau",
                desc: "Analyse de l'impact des nappes sur les fondations, recommandations drainage, rabattement de nappe, cuvelage, assainissement et agressivité de l'eau."
              },
              {
                title: "Risques naturels & Géologiques",
                desc: "Identification des risques liés aux glissements, éboulements, sols gonflants, liquéfaction, cavités souterraines et aléas géologiques."
              },
              {
                title: "Contrôle & Suivi en phase travaux",
                desc: "Vérification de la cohérence entre hypothèses géotechniques, documents d'exécution et conditions réelles rencontrées sur chantier."
              },
              {
                title: "Géologie & Matériaux",
                desc: "Description des formations, classification des sols, analyse hydraulique et mécanique, évaluation du comportement en œuvre et possibilités de réemploi."
              },
              {
                title: "Formation & Transfert de compétences",
                desc: "Accompagnement technique par formations ciblées sur logiciels géotechniques, méthodes de calcul, interprétation des essais et analyse d'études de cas."
              },
            ].map((item, idx) => (
              <MissionCard key={idx} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* B/ Essais In-Situ */}
      <section id="in-situ" className="py-20 bg-brand-light-grey scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<Layers className="w-6 h-6 text-brand-orange" />}
            badge="Section B"
            title="Essais In-Situ"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                title: "Prélèvements & Échantillonnages",
                items: [
                  "Carottage ou rotation continu en double ou triple",
                  "Prélèvements statiques avec tube à paroi mince (Shelby)",
                  "Carottier mazier, roto-percussion",
                ]
              },
              {
                title: "Essais de Pénétration",
                items: [
                  "Pénétromètre dynamique lourd et léger (PDL)",
                  "Pénétration statique au piézocône (CPTu)",
                  "Pénétration au carottier (SPT)",
                ]
              },
              {
                title: "Essais Pressiométriques",
                items: [
                  "Essai pressiométrique avec mesure des paramètres de forage",
                  "Calcul de la pression limite et du module pressiométrique",
                ]
              },
              {
                title: "Équipements & Essais Hydrauliques",
                items: [
                  "Équipement forages : piézomètre, essais de pompages",
                  "Essais hydrauliques Lefranc et Porchet",
                  "Prélèvement d'échantillons intacts",
                ]
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
                <h3 className="font-title font-bold text-base text-brand-brown mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C/ Laboratoire */}
      <section id="laboratoire" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<Beaker className="w-6 h-6 text-brand-orange" />}
            badge="Section C"
            title="Laboratoire"
          />
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-12">
            KAPAROC Ingénierie assure le contrôle de la qualité, de la conformité et de la performance des matériaux de construction avant, pendant et après leur mise en œuvre. Grâce à son expertise en géotechnique, en matériaux et en contrôle d'exécution, KAPAROC intervient depuis la recherche et la caractérisation des matériaux jusqu'au suivi technique sur chantier.
          </p>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                id: "sols",
                title: "Laboratoire de Mécanique des Sols",
                icon: <Layers className="w-5 h-5 text-brand-orange" />,
                items: [
                  "Essais d'identification (granulométrie, limites d'Atterberg)",
                  "Essai cisaillement direct à la boîte de Casagrande",
                  "Essai de gonflement libre",
                  "Essai de chargement par palier à l'œdomètre",
                  "Essai de perméabilité",
                  "Essais Proctor et CBR",
                  "Aplatissement",
                ]
              },
              {
                id: "beton",
                title: "Laboratoire Technologie du Béton",
                icon: <FlaskConical className="w-5 h-5 text-brand-orange" />,
                items: [
                  "Essais sur béton frais (affaissement, consistance)",
                  "Essais sur béton durci (compression, traction)",
                  "Étude de formulation de béton hydraulique",
                  "Carottage de béton hydraulique",
                  "Essais d'indice de rebondissement au scléromètre",
                  "Contrôle et suivi d'exécution",
                ]
              },
              {
                id: "route",
                title: "Laboratoire Technologie de la Route",
                icon: <HardHat className="w-5 h-5 text-brand-orange" />,
                items: [
                  "Essais d'identification complète",
                  "Étude de formulation de béton bitumineux",
                  "Essai de Duriez",
                  "Essai de Marshall",
                  "PCG, Orniérage, Module de fatigue",
                  "Essais sur bitume (pénétrabilité, bille à anneau)",
                  "Densité in-situ avec densitomètre à membrane ou gammadensimètre",
                  "Essai à la plaque & Déflexion",
                  "Contrôle et suivi d'exécution",
                ]
              },
            ].map(lab => (
              <div key={lab.id} className="bg-brand-light-grey rounded-2xl border border-gray-150 overflow-hidden">
                <button
                  onClick={() => setExpandedLab(expandedLab === lab.id ? null : lab.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm">{lab.icon}</div>
                    <h3 className="font-title font-bold text-base text-brand-charcoal">{lab.title}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-brand-orange transition-transform ${expandedLab === lab.id ? "rotate-180" : ""}`} />
                </button>
                {expandedLab === lab.id && (
                  <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {lab.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D/ Auscultation */}
      <section id="auscultation" className="py-20 bg-brand-light-grey scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<Activity className="w-6 h-6 text-brand-orange" />}
            badge="Section D"
            title="Auscultation, Mesures & Instrumentation"
          />
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-12">
            KAPAROC Ingénierie réalise des missions d'auscultation, de mesures et d'instrumentation destinées à contrôler l'intégrité des fondations, à suivre le comportement des ouvrages et à vérifier la qualité d'exécution des éléments réalisés.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                title: "Auscultation par Impédance",
                desc: "Méthode non destructive pour le contrôle des pieux et fondations profondes. Génération d'une onde mécanique en tête de pieu pour apprécier la longueur, continuité, qualité d'ancrage et détecter les anomalies (rétrécissements, discontinuités, défauts de bétonnage)."
              },
              {
                title: "Auscultation par Transparence",
                desc: "Contrôle sonique via tubes d'auscultation intégrés dans les fondations profondes. Évalue l'homogénéité du béton, repère les zones suspectes et vérifie la qualité d'exécution des pieux, barrettes et fondations spécifiques."
              },
              {
                title: "Mesures & Instrumentation",
                desc: "Mise en place et suivi de dispositifs adaptés : nivellement de précision, suivi des tassements, inclinomètres, piézomètres, capteurs de déplacement, mesures de vibration ou déformation pour observer l'évolution des sols et ouvrages dans le temps."
              },
              {
                title: "Suivi & Interprétation",
                desc: "Exploitation des données mesurées, analyse des résultats, comparaison aux seuils d'alerte, formulation de recommandations pour sécuriser les travaux, adapter les méthodes ou confirmer la conformité des ouvrages réalisés."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:border-brand-orange/30 transition-all">
                <h3 className="font-title font-bold text-base text-brand-brown mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E/ Topographie */}
      <section id="topographie" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<Wrench className="w-6 h-6 text-brand-orange" />}
            badge="Section E"
            title="Études Topographiques"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                KAPAROC réalise des levés topographiques, implantations, nivellements, profils en long et en travers, cubatures et plans de situation pour disposer de données précises pour la conception et le suivi des travaux.
              </p>
              <ul className="space-y-3">
                {[
                  "Levés topographiques de détail et d'état des lieux",
                  "Implantation de repères d'alignement",
                  "Nivellements et profils en long/en travers",
                  "Cubatures de terrassement",
                  "Plans de situation et de masse",
                  "Contrôle des volumes et maîtrise de l'implantation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-light-grey rounded-2xl p-6 border border-gray-150">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-4">Piézométrie & Forage d'eau</span>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                Installation et suivi de piézomètres pour mesurer le niveau des nappes souterraines, comprendre les variations hydrogéologiques et évaluer l'impact de l'eau sur les ouvrages.
              </p>
              <ul className="space-y-2">
                {[
                  "Reconnaissance terrain pour forage d'eau",
                  "Installation et monitoring de piézomètres",
                  "Suivi des paramètres hydrogéologiques",
                  "Études d'impact de l'eau sur les ouvrages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-title text-2xl font-bold mb-4">Besoin d'une expertise technique ?</h2>
          <p className="text-brand-beige/80 font-light mb-8">
            Nos ingénieurs sont disponibles pour analyser votre projet et proposer la mission adaptée.
          </p>
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-white text-white hover:text-brand-brown font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors"
          >
            Demander une étude / Un devis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

function SectionHeader({ icon, badge, title }: { icon: React.ReactNode; badge: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-brand-orange/10 rounded-xl">{icon}</div>
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">{badge}</span>
      </div>
      <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-brand-charcoal">{title}</h2>
      <div className="w-12 h-1 bg-brand-orange rounded mt-3" />
    </div>
  );
}

function MissionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-brand-light-grey rounded-xl p-5 border border-gray-150 hover:border-brand-orange/30 hover:shadow-sm transition-all group">
      <h3 className="font-title font-bold text-sm text-brand-brown mb-2 group-hover:text-brand-orange transition-colors">{title}</h3>
      <p className="text-xs text-gray-500 font-light leading-relaxed">{desc}</p>
    </div>
  );
}
