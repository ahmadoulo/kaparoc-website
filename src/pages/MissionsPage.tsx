/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import { ChevronRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";

interface ContextType {
  onQuoteClick: () => void;
}

export default function MissionsPage() {
  const { onQuoteClick } = useOutletContext<ContextType>();

  const missionsInfo = [
    {
      id: "G1",
      title: "G1 - Étude Géotechnique Préliminaire",
      phase: "Faisabilité préalable",
      desc: "Identifier les risques géologiques majeurs d'un site avant son acquisition ou avant la phase d'avant-projet.",
      points: ["Modélisation géologique", "Recherche de risques naturels (cavités, glissements)", "Principes généraux de fondation"]
    },
    {
      id: "G2",
      title: "G2 - Étude Géotechnique de Conception",
      phase: "L'étude réglementaire (Permis & Assurance)",
      desc: "L'étape clé pour la validation des fondations. Indispensable pour la souscription de l'assurance décennale et la validation par les bureaux de contrôle.",
      points: ["Nature et profondeur des fondations", "Calcul des tassements admissibles", "Dimensionnement des ouvrages de soutènement"]
    },
    {
      id: "G3",
      title: "G3 - Étude et Suivi d'Exécution",
      phase: "Pendant les travaux - Entreprise de gros œuvre",
      desc: "Destinée à l'entreprise de réalisation, elle détaille précisément les méthodes d'exécution et valide en temps réel l'adaptation du chantier.",
      points: ["Note de calcul d'exécution", "Phasage des excavations", "Validation de la portance à fond de fouille"]
    },
    {
      id: "G4",
      title: "G4 - Supervision Géotechnique",
      phase: "Pendant les travaux - Maitre d'Ouvrage",
      desc: "Le rôle de super-viseur. Notre bureau s'assure que les travaux géotechniques réalisés par l'entreprise sont bien conformes aux hypothèses initiales.",
      points: ["Avis sur l'étude d'exécution", "Visites de chantier régulières", "Rapports de conformité technique"]
    },
    {
      id: "G5",
      title: "G5 - Diagnostic Géotechnique",
      phase: "Sur ouvrage existant (Pathologie)",
      desc: "Intervention ciblée suite à l'apparition de désordres (fissures, affaissements) pour en déterminer les causes géotechniques et proposer des solutions de reprise.",
      points: ["Diagnostic structure/sol", "Carottages sous fondation existante", "Préconisation de confortement (micropieux, injections)"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Missions Géotechniques G1 à G5 | Kaparoc Ingénierie</title>
        <meta name="description" content="Comprendre les missions géotechniques (norme NF P 94-500). G1, G2, G3, G4 et G5 n'auront plus de secret pour vous. Obtenez une étude réglementaire." />
      </Helmet>
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-brand-light-grey border-b border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Processus Réglementaire</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6">Guide des Missions<br/>G1 à G5</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            La norme NF P 94-500 définit de manière stricte le déroulement des études de sol. Découvrez quelle mission correspond à l'état d'avancement de votre projet.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {missionsInfo.map((mission, idx) => (
              <div 
                key={mission.id} 
                id={`mission-${mission.id.toLowerCase()}`}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 p-10 bg-brand-light-grey rounded-3xl border border-gray-150">
                  <span className="inline-block px-4 py-1.5 bg-brand-brown text-white text-xs font-bold rounded-full mb-6">
                    {mission.phase}
                  </span>
                  <h2 className="font-title text-3xl font-extrabold text-brand-brown mb-4">{mission.title}</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">
                    {mission.desc}
                  </p>
                  
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Livrables principaux :</span>
                    {mission.points.map((pt, pidx) => (
                      <div key={pidx} className="flex items-center gap-3 text-sm text-brand-charcoal font-medium">
                        <ShieldCheck className="w-5 h-5 text-brand-orange" />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center h-full pt-10">
                  <div className="border-l-4 border-brand-orange pl-8">
                    <HelpCircle className="w-8 h-8 text-brand-orange mb-4" />
                    <h3 className="font-title text-xl font-bold text-brand-charcoal mb-3">Est-ce obligatoire ?</h3>
                    {mission.id === "G2" ? (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Oui.</strong> La mission G2 Conception est exigée par tous les bureaux de contrôle (Socotec, Veritas...) et par les compagnies d'assurance pour la garantie décennale en Afrique de l'Ouest.
                      </p>
                    ) : mission.id === "G1" ? (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Fortement recommandée avant l'achat d'un terrain à risque pour éviter les mauvaises surprises géologiques engendrant des surcoûts majeurs de fondation.
                      </p>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Cette mission s'inscrit dans la continuité de la G2 pour garantir que l'exécution sur chantier correspond parfaitement aux recommandations du bureau d'études.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="bg-brand-brown py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-title text-2xl font-bold mb-6">Vous ne savez pas quelle mission choisir ?</h2>
          <button 
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-white text-white hover:text-brand-brown font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors"
          >
            Obtenir des conseils
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
