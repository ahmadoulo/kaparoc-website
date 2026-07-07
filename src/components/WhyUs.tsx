/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Crosshair, Award, Flame, Star, Sparkles, Scale } from "lucide-react";

export default function WhyUs() {
  const differentiators = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
      title: "Sécurité absolue",
      desc: "Zéro compromis sur la portance. Nos prévisions de tassement sont garanties pour éliminer tout risque de dommages structurels.",
    },
    {
      icon: <Crosshair className="w-5 h-5 text-brand-orange" />,
      title: "Précision scientifique",
      desc: "Nos calculs intègrent les derniers algorithmes de mécanique des sols et s'appuient sur nos essais de laboratoire fiables.",
    },
    {
      icon: <Award className="w-5 h-5 text-brand-orange" />,
      title: "Conformité de classe A",
      desc: "Rapports d'études conçus pour être systématiquement acceptés par les grands bureaux géotechniques et toutes les assurances décennales locales.",
    },
    {
      icon: <Scale className="w-5 h-5 text-brand-orange" />,
      title: "Optimisation des coûts",
      desc: "Nous évitons le sur-dimensionnement inutile des fondations en calculant précisément la contrainte de sol admissible.",
    }
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Analyse documentaire & géophysique",
      desc: "Reconnaissance précoce de la parcelle, étude géologique historique et documentaire de la région (Dakar, Thiès, Côte) et détection de nappes.",
    },
    {
      step: "02",
      title: "Investigations in-situ & Laboratoire",
      desc: "Forages de pénétration lourde, essais pressionométriques sur le terrain et essais de cisaillement, gonflement des échantillons prélevés en laboratoire.",
    },
    {
      step: "03",
      title: "Modélisation numérique",
      desc: "Traitement et saisie des paramètres géotechniques, modélisation par éléments finis pour calculer les tassements et l'interaction sol-structure.",
    },
    {
      step: "04",
      title: "Rapport d'ingénierie & Recommandations",
      desc: "Remise d'un document clair d'ingénierie avec plans de principe de fondations et validation du coefficient de sécurité d'assise."
    }
  ];

  return (
    <section id="pourquoi" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
            Notre Rigueur
          </span>
          <h2 className="font-title font-extrabold text-3xl sm:text-4xl text-brand-charcoal">
            Pourquoi choisir KAPAROC INGÉNIERIE ?
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded" />
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Un haut niveau d'exigence technique combiné à l'approche pragmatique requise pour sécuriser et accélérer vos chantiers du bâtiment et des travaux publics.
          </p>
        </div>

        {/* Content Layout: Why grid left, Timeline right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Why list Left */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-title font-extrabold text-2xl text-brand-brown">
              Une culture de l'excellence et de la conformité réglementaire
            </h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              KAPAROC est un cabinet d'ingénierie certifié guidé par la conviction que le sol est le composant le plus important d'un bâtiment. Un bon rapport géotechnique n'est pas juste une formalité pour valider un dossier de contrôle : c'est la garantie matérielle de votre ouvrage dans le temps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-brand-orange/10 rounded">
                      {diff.icon}
                    </div>
                    <h4 className="font-bold text-sm text-brand-brown">
                      {diff.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Commitment Accent Box */}
            <div className="border border-brand-orange/20 bg-brand-orange/5 p-5 rounded-xl space-y-2">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider block">
                Notre engagement :
              </span>
              <p className="text-xs text-brand-charcoal font-medium leading-relaxed">
                « Accompagner les constructeurs d'aujourd'hui à ériger les édifices de demain sans l'ombre d'un doute géotechnique. Chaque ligne de calcul est signée et engage notre bureau d'études de Dakar. »
              </p>
            </div>
          </div>

          {/* Timeline / Project Approch Right */}
          <div className="lg:col-span-6 space-y-8 bg-brand-light-grey p-6 sm:p-8 rounded-2xl border border-gray-100">
            <div>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                Notre Méthodologie
              </span>
              <h3 className="font-title font-bold text-lg text-brand-charcoal mt-1">
                La timeline de votre étude de sol
              </h3>
            </div>

            <div className="space-y-6">
              {methodologySteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-brand-brown text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    {idx < methodologySteps.length - 1 && (
                      <div className="w-0.5 bg-gray-300 flex-1 my-2" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-title font-bold text-sm text-brand-brown">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
