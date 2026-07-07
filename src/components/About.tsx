/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, ShieldAlert, Award, Compass, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const keyDifferentiators = [
    "Expertise reconnue dans les calculs de tassement complexes et stabilité de glissements de talus.",
    "Modélisations géotechniques 2D/3D avancées avec logiciels d'interaction sol-structure.",
    "Suivi rigoureux de terrain pour la validation et l'approbation par les plus grands bureaux de contrôle.",
    "Solutions géotechniques de restructuration ou renforcement sur-mesure pour les sous-sols contraignants."
  ];

  // Professional local geology data (Dakar & Rufisque specific)
  const stratigraphicLayers = [
    {
      depth: "0.0m - 2.5m",
      title: "Sol Supérieur & Argiles Gonflantes",
      description: "Sujet aux phénomènes de retrait-gonflement rapide. Nécessite une étude géotechnique pour contrer la fissuration des semelles de fondation.",
      risk: "Élevé pour les structures légères sans fondation adaptée.",
      color: "bg-amber-100 border-amber-500 text-amber-900"
    },
    {
      depth: "2.5m - 8.0m",
      title: "Sables Dunaires & Limons",
      description: "Compacité relative moyenne. Vigilance requise quant au risque de tassements différentiels rapides sous contraintes vibratoires ou charges statiques élevées.",
      risk: "Moyen, tassements continus à surveiller.",
      color: "bg-yellow-50 border-yellow-500 text-yellow-900"
    },
    {
      depth: "8.0m - 15.0m",
      title: "Marno-calcaires & Argiles de Rufisque",
      description: "Excellente cohésion en profondeur, constituant un horizon d'ancrage optimal pour des pieux ou radiers rigides de bâtiments industriels et R+X.",
      risk: "Faible, excellent réservoir de portance.",
      color: "bg-orange-50 border-orange-500 text-orange-900"
    },
    {
      depth: "> 15.0m",
      title: "Basaltes Sain de Dakar",
      description: "Roche mère saine à résistance mécanique de pointe. Capable de supporter des charges colossales mais requiert des brise-roches hydrauliques pour toute excavation.",
      risk: "Zone stable, contrainte mécanique maximale admissible.",
      color: "bg-stone-100 border-stone-500 text-stone-900"
    }
  ];

  return (
    <section id="propos" className="py-24 bg-brand-light-grey scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
            Qui Sommes-Nous
          </span>
          <h2 className="font-title font-extrabold text-3xl sm:text-4xl text-brand-charcoal leading-tight">
            Façonner la stabilité de vos infrastructures dès la racine
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded" />
          <div className="space-y-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            <p>KAPAROC Ingénierie est un bureau d'études spécialisé en géotechnique, contrôle des matériaux et supervision des travaux.</p>
            <p>Nous accompagnons les projets d'infrastructures et de bâtiments, de la reconnaissance des sols jusqu'à la réalisation.</p>
            <p>Notre expertise garantit des solutions fiables, optimisées et conformes aux exigences techniques et réglementaires.</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-title font-extrabold text-2xl text-brand-brown leading-tight">
                L'ingénierie des sols, à chaque étape de votre projet
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                KAPAROC Ingénierie vous accompagne à chaque étape de votre projet — de l'étude à l'exécution — afin de mieux comprendre le comportement des sols, quelle que soit leur nature, et la dynamique des nappes d'eaux souterraines.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Cette approche permet de fiabiliser les solutions techniques, d'optimiser les coûts et de limiter les risques. Qu'il s'agisse de l'étude de sols pour des habitations individuelles, d'infrastructures routières complexes ou de grands ensembles industriels, nous déterminons la profondeur d'assise optimale des fondations et les dispositifs d'amélioration de sol avec des calculs éprouvés pour déterminer la portance des sols et estimer les tassements dus aux charges apportées.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-brown">Rigueur Normative</h4>
                  <p className="text-xs text-gray-500 mt-1">Conformité stricte aux exigences de la classification NF P 94-500 (G1 à G5).</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <Compass className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-brown">Équipements Modernes</h4>
                  <p className="text-xs text-gray-500 mt-1">Sondages de pénétration dynamique, pressiométriques et laboratoire d'analyses.</p>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="space-y-3">
              <h4 className="font-title font-bold text-sm text-brand-brown uppercase tracking-wide">
                Pourquoi nos rapports sont acceptés et salués :
              </h4>
              <ul className="space-y-2.5">
                {keyDifferentiators.map((diff, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Visual Stratigraphy - Technical, Premium Graphic Integration */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-title font-bold text-base text-brand-charcoal">
                  Stratigraphie Modèle du Sol (Diamniadio / Dakar)
                </h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mt-0.5">
                  Cliquez sur un profil pour l'analyser
                </span>
              </div>
              <Award className="w-5 h-5 text-brand-orange" />
            </div>

            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Un profil structural schématique représentant de manière scientifique les contreforts géologiques courants rencontrés lors de nos chantiers en presqu'île.
            </p>

            {/* Stack representing ground layers */}
            <div className="space-y-2">
              {stratigraphicLayers.map((layer, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLayer(idx)}
                  className={`border-l-4 p-3 rounded-lg cursor-pointer transition-all ${
                    selectedLayer === idx 
                      ? `${layer.color} shadow-sm translate-x-1 font-medium`
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100/70"
                  }`}
                >
                  <div className="flex justify-between text-[11px] font-bold">
                    <span>{layer.depth}</span>
                    <span className="opacity-80 uppercase tracking-wider text-[9px]">{layer.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Explanation box for selected layer */}
            <div className="bg-brand-light-grey rounded-xl border border-gray-200 p-4 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-brand-brown">
                <HelpCircle className="w-4 h-4 text-brand-orange" />
                <span>Analyse Technique :</span>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                {stratigraphicLayers[selectedLayer].description}
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-[11px]">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-brand-brown font-semibold">Risque Fondations :</span>
                <span className="text-gray-500 font-light">{stratigraphicLayers[selectedLayer].risk}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
