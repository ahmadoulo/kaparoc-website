/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Award, ShieldCheck, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-brown">
      {/* Background photo — aerial drone view of Dakar construction site */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(35, 22, 8, 0.97) 0%,
              rgba(35, 22, 8, 0.88) 30%,
              rgba(35, 22, 8, 0.72) 55%,
              rgba(20, 12, 4, 0.62) 100%
            ),
            url('/hero-bg.jpg')
          `,
          filter: "blur(1.5px)",
          transform: "scale(1.08)"
        }}
      />
      {/* Extra dark vignette to deepen overall atmosphere */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Subtle technical dot pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#F84F16_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-8 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 px-3.5 py-1.5 rounded-full"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[11px] font-bold text-white tracking-widest uppercase">
                Bureau d'études géotechniques agréé NF P 94-500
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-title font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
              >
                L'ingénierie des sols,<br />
                <span className="block text-brand-orange mt-2 font-bold">
                  en toute confiance !
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl text-base sm:text-lg text-brand-beige/95 font-light leading-relaxed"
              >
                Il est essentiel de réaliser une reconnaissance géotechnique avant tout projet de construction. Cette étape permet d'anticiper les contraintes du sol et de sécuriser les choix techniques dès la phase de conception.
              </motion.p>
            </div>

            {/* Quick Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-y-3 gap-x-6 text-xs text-brand-beige/80"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Normes de Calcul Eurocode 7 & Normes Françaises</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-brand-orange" />
                <span>Laboratoire d'Analyse Géotechnique Propre</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/missions"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/95 text-white text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Voir nos missions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-lg transition-all"
              >
                Demander une étude / Un devis
              </button>
            </motion.div>
          </div>

          {/* Hero Credentials Panel Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 latent lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-6">
              <h3 className="font-title font-bold text-white text-lg border-b border-white/10 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-orange" />
                Agrément Régional
              </h3>
              <div className="space-y-4 text-xs font-light text-brand-beige">
                <p>
                  Partenaire privilégié des maîtres d'ouvrage publics et privés pour la sécurisation de grands projets d'infrastructures (Dakar, Diamniadio, Thiès, etc.).
                </p>
                <div className="rounded-lg bg-black/25 p-3 space-y-2 border border-white/5">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Bureau de Contrôle</span>
                    <span className="text-brand-orange font-bold">Approuvé</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Domaine de Garantie</span>
                    <span className="text-brand-orange font-bold">Décennale sécurisée</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Précision Labo</span>
                    <span className="text-brand-orange font-bold">Zéro Sinistre</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats segment container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left"
        >
          <div className="space-y-1">
            <span className="block font-title font-extrabold text-3xl sm:text-4xl text-brand-orange">
              +80
            </span>
            <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
              Projets réalisés
            </span>
          </div>
          <div className="space-y-1">
            <span className="block font-title font-extrabold text-3xl sm:text-4xl text-brand-orange">
              +10 Ans
            </span>
            <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
              D'expérience métier
            </span>
          </div>
          <div className="space-y-1">
            <span className="block font-title font-extrabold text-3xl sm:text-4xl text-brand-orange">
              G1 à G5
            </span>
            <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
              Missions de la norme NF
            </span>
          </div>
          <div className="space-y-1">
            <span className="block font-title font-extrabold text-3xl sm:text-4xl text-brand-orange">
              +40
            </span>
            <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
              Clients satisfaits
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
