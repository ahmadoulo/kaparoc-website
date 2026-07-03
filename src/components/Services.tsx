/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, Database, LayoutGrid, Award, ShieldCheck, 
  ChevronRight, Compass, Ruler, HelpCircle, HardHat, FileSpreadsheet
} from "lucide-react";

interface ServicesProps {
  onQuoteClick: () => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [activeMissionsTab, setActiveMissionsTab] = useState<string>("G2");

  const services = [
    {
      id: "sol",
      icon: <FileSpreadsheet className="w-8 h-8 text-brand-orange" />,
      title: "Études Géotechniques Normalisées",
      desc: "Études complètes conformes aux exigences G1 à G5 pour sécuriser juridiquement et structurellement tous vos projets immobiliers.",
    },
    {
      id: "terrain",
      icon: <Compass className="w-8 h-8 text-brand-orange" />,
      title: "Investigations de Terrain",
      desc: "Campagnes de forages géotechniques, essais pressiométriques Menard, pénétromètres lourds et forages carottés pour l'analyse in-situ.",
    },
    {
      id: "labo",
      icon: <Database className="w-8 h-8 text-brand-orange" />,
      title: "Essais en Laboratoire de Sols",
      desc: "Cisaillement direct, essais œdométriques, limites d'Atterberg, granulométrie, Proctor et essais de gonflement pour évaluer le comportement mécanique.",
    },
    {
      id: "modelisation",
      icon: <LayoutGrid className="w-8 h-8 text-brand-orange" />,
      title: "Modélisation numérique 2D/3D",
      desc: "Calculs par éléments finis pour étudier l'interaction sol-structure, la stabilité des talus renforcés et prévoir les tassements différentiels de fondations.",
    },
    {
      id: "renforcement",
      icon: <HardHat className="w-8 h-8 text-brand-orange" />,
      title: "Renforcement & Conception Structures",
      desc: "Solutions d'amélioration des sols (colonnes ballastées) et dimensionnement des soutènements, pieux, micro-pieux et clouage de parois de fouilles.",
    },
    {
      id: "topo",
      icon: <Ruler className="w-8 h-8 text-brand-orange" />,
      title: "Topographie de Haute Précision",
      desc: "Lever d'état des lieux, implantation de repères d'alignement, cubatures de terrassement et monitoring de mouvements d'ouvrages existants.",
    }
  ];

  // Professional mapping of G1 to G5 French standard NF P 94-500
  const missionsDefinition: Record<string, {
    title: string;
    sub: string;
    when: string;
    why: string;
    deliverables: string[];
    mandatory: boolean;
  }> = {
    G1: {
      title: "G1 - Étude Géotechnique Préliminaire",
      sub: "Phase d'étude préliminaire de faisabilité",
      when: "Avant l'acquisition d'un terrain ou lors de l'esquisse d'aménagement.",
      why: "Permet de déceler d'éventuels risques géotechniques rédhibitoires (cavités, glissements, sols meubles profonds) et de définir une première ébauche de solutions.",
      deliverables: [
        "Modèle géologique d'avant-projet",
        "Cartographie des zones de risques géologiques",
        "Premiers principes généraux de fondations envisageables"
      ],
      mandatory: false
    },
    G2: {
      title: "G2 - Étude Géotechnique de Conception",
      sub: "Phase d'avant-projet (AVP) et projet (PRO)",
      when: "Indispensable lors de la conception de l'ouvrage pour le dépôt de permis de construire.",
      why: "Fournit les hypothèses de calcul géotechniques pour le calcul de structure béton. Valide la conception définitive des semelles, radiers, ou pieux de fondation.",
      deliverables: [
        "Dimensionnement théorique exhaustif des ouvrages géotechniques",
        "Calculs de tassements admissibles et valeurs de contraintes de sol",
        "Validation de la portance sous charges caractéristiques complexes"
      ],
      mandatory: true
    },
    G3: {
      title: "G3 - Étude d'Exécution Géotechnique",
      sub: "Phase de préparation des travaux et chantier",
      when: "Avant l'ouverture et pendant toute la phase des terrassements et de fondation.",
      why: "Rédigée pour l'entreprise chargée des travaux. Précise la méthode d'exécution, l'altimétrie d'ancrage exacte et assure l'adéquation des fondations au sol réellement terrassé.",
      deliverables: [
        "Réalisation des notes de dimensionnement des fondations et soutènements",
        "Avis (ou contrôle) en interne des documents d'exécutions transmis par l'entreprise avant diffusion au maître d'œuvre ou à la mission G4"
      ],
      mandatory: true
    },
    G4: {
      title: "G4 - Supervision Géotechnique d'Exécution",
      sub: "Phase de contrôle de la mise en œuvre",
      when: "Parallèlement aux travaux de terrassement et d'ancrage de fondations.",
      why: "Mission de maîtrise d'œuvre. Permet de vérifier la validité des hypothèses du modèle géotechnique avec les levés réels de fin de terrassement.",
      deliverables: [
        "Avis techniques sur les notes de calcul de l'entreprise de construction",
        "Validation sur site de la contrainte sol sous la base des fouilles"
      ],
      mandatory: true
    },
    G5: {
      title: "G5 - Diagnostic Géotechnique",
      sub: "En cas de fissuration ou pathologie structurelle majeure",
      when: "Sur un ouvrage existant présentant des désordres (fissures, tassement différentiel).",
      why: "Évalue l'origine géotechnique d'une pathologie et recommande des travaux de confortement (reprise en sous-œuvre, injections de résine ou micro-pieux).",
      deliverables: [
        "Diagnostic de pathologie des fondations d'ouvrages existants",
        "Rapport de solutions palliatives hautement sécuritaires"
      ],
      mandatory: false
    }
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
            Nos Métiers
          </span>
          <h2 className="font-title font-extrabold text-3xl sm:text-4xl text-brand-charcoal">
            Solutions d'Ingénierie Géotechnique
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Un panel complet d'expertises techniques pour guider la robustesse de vos structures, de la première esquisse géologique jusqu'à la réception finale des fondations.
          </p>
        </div>

        {/* Services Cards Grid with premium micro-interaction layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="group bg-brand-light-grey rounded-2xl p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:bg-white hover:border-brand-orange"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-xl shadow-sm inline-block group-hover:bg-brand-orange/10 group-transition-colors">
                  {srv.icon}
                </div>
                <h3 className="font-title font-extrabold text-lg text-brand-brown group-hover:text-brand-orange transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200/50 mt-6 flex items-center text-xs font-bold text-brand-orange gap-1">
                <span>Détails de l'expertise</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Standard Normative Block NF P 94-500 : tab selector */}
        <div className="bg-brand-brown rounded-3xl p-6 sm:p-10 text-white border border-white/5 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M 10 90 L 90 90 M 10 10 L 10 90 M 10 90 L 90 10" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left side text explanation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                La Norme NF P 94-500
              </span>
              <h3 className="font-title font-extrabold text-xl sm:text-2xl leading-snug">
                Maîtriser les étapes officielles d'études de sols
              </h3>
              <p className="text-xs sm:text-sm text-brand-beige/85 font-light leading-relaxed">
                La réglementation géotechnique définit un enchaînement précis de missions de sol (G1, G2, G3, G4, G5). Chacune s'intègre à une étape précise du cycle de vie de votre projet de construction pour en éradiquer les risques.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <p className="text-xs text-brand-beige/70 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <strong>G2</strong> est techniquement indispensable pour l'assurance décennale.
                </p>
                <p className="text-xs text-brand-beige/70 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <strong>G5</strong> résout les litiges de fissures et d'affaissement.
                </p>
              </div>
            </div>

            {/* Right side interactive mission tabs */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-5 sm:p-7 rounded-2xl space-y-6 text-brand-beige">
              
              {/* Mission switchers buttons */}
              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
                {Object.keys(missionsDefinition).map((mKey) => (
                  <button
                    key={mKey}
                    onClick={() => setActiveMissionsTab(mKey)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeMissionsTab === mKey
                        ? "bg-brand-orange text-white shadow-md font-extrabold scale-105"
                        : "bg-black/25 text-brand-beige/80 hover:bg-white/10"
                    }`}
                  >
                    Mission {mKey}
                  </button>
                ))}
              </div>

              {/* Mission Content Panel */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h4 className="font-title font-bold text-lg text-white">
                      {missionsDefinition[activeMissionsTab].title}
                    </h4>
                    <span className="text-xs text-brand-orange/90 font-medium block">
                      {missionsDefinition[activeMissionsTab].sub}
                    </span>
                  </div>

                  {missionsDefinition[activeMissionsTab].mandatory ? (
                    <span className="bg-red-500/10 border border-red-500/30 text-red-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      Obligatoire (Assurance)
                    </span>
                  ) : (
                    <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      Conseillée
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs leading-relaxed font-light text-brand-beige/90 border-t border-white/10 pt-4">
                  <p>
                    <strong className="text-white">Quand intervenir :</strong> {missionsDefinition[activeMissionsTab].when}
                  </p>
                  <p>
                    <strong className="text-white">But de l'étude :</strong> {missionsDefinition[activeMissionsTab].why}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-white block mb-2">
                      Livrables attendus :
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {missionsDefinition[activeMissionsTab].deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sub CTA corresponding to active mission tab */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={onQuoteClick}
                    className="bg-white hover:bg-brand-orange text-brand-brown hover:text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
                  >
                    Consulter nos tarifs de type {activeMissionsTab}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
