/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  Clock, ShieldAlert, FileText, ChevronRight 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "G2 - Conception Fondations",
    location: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    "G1 - Faisabilité Préliminaire",
    "G2 - Conception Fondations (Décennale)",
    "G3 - Étude Technique d'Exécution",
    "G4 - Contrôle & Supervision de Chantier",
    "G5 - Diagnostic Fissures / Pathologies",
    "Autre Étude / Levés Topographiques"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database/API route transport delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "G2 - Conception Fondations",
        location: "",
        description: ""
      });
      // Reset success status message after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal text-white scroll-mt-12 relative overflow-hidden">
      {/* Visual coordinates dots backdrop pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E84A1A_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Side-by-Side: Contacts details left, Premium Form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contacts details left (5 of 12 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
                Prendre Contact
              </span>
              <h2 className="font-title font-extrabold text-3xl sm:text-4xl leading-tight">
                Échangeons sur votre projet géotechnique
              </h2>
              <div className="w-16 h-1 bg-brand-orange rounded" />
              <p className="text-sm text-brand-beige/80 font-light leading-relaxed">
                Nos ingénieurs d&apos;études de sol sont à votre entière disposition pour analyser les caractéristiques de vos futures structures et formuler une proposition d&apos;investigations adéquate.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-6 pt-4">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                    Siège de Dakar
                  </span>
                  <p className="text-sm font-light text-brand-beige/90 leading-relaxed">
                    Liberté VI Ext, 17 Rue L 50 x 25, Dakar, Sénégal
                  </p>
                  <a 
                    href="https://share.google/5FhsqswwBym7KRh6t" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-[11px] bg-brand-orange hover:bg-white text-white hover:text-brand-charcoal px-2.5 py-1 rounded font-bold transition-all mt-1"
                  >
                    Voir sur Google Maps
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                    Secrétariat Technique
                  </span>
                  <p className="text-sm font-bold text-white tracking-wide">
                    +221 33 853 01 79
                  </p>
                  <p className="text-xs font-light text-brand-beige/70">
                    Soutien direct aux promoteurs & architectes : +221 78 386 30 30
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                    Messageries Électroniques
                  </span>
                  <p className="text-sm font-semibold text-white">
                    contact@kaparoc.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                    Heures d&apos;ouverture
                  </span>
                  <p className="text-xs font-light text-brand-beige/80">
                    Lundi - Vendredi : 08:30 - 18:00
                  </p>
                  <p className="text-xs font-light text-brand-beige/60">
                    Samedi matin (Urgences chantiers uniquement)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Premium Form right (7 of 12 columns) */}
          <div className="lg:col-span-7 bg-white text-brand-charcoal p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-150/50">
            <h3 className="font-title font-extrabold text-xl text-brand-brown mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              Demander une offre ou une cotation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Nom Complet ou Raison Sociale *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Architecte Diop / Seydou Ba"
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Téléphone Direct *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: +221 77 000 00 00"
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Adresse Messagerie (Email) *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: contact@votre-entreprise.sn"
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Localisation Précise du Projet *
                  </label>
                  <input
                    type="text"
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Ex: Dakar Plateau, Almadies, Thiès..."
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Type de Mission Géotechnique Requise (Si connue)
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Description succincte de la future structure *
                </label>
                <textarea
                  required
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Ex: Construction d'un immeuble d'habitation R+4 avec sous-sol partiel, structure poteaux-poutres béton armé, tassement admissible maximal de 2cm..."
                  className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold tracking-wider uppercase py-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-brand-charcoal/80 cursor-not-allowed"
                      : "bg-brand-orange hover:bg-brand-brown hover:shadow-lg active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Transmission de la demande...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Transmettre ma demande d&apos;étude de sol
                    </>
                  )}
                </button>
              </div>

              {/* Status alerts */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-emerald-950 text-xs shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">Message transmis avec succès !</p>
                      <p className="text-emerald-800/90 font-light">
                        Votre demande d&apos;étude à été enregistrée auprès de notre secrétariat technique à Dakar. Un ingénieur conseil prendra contact sous 24 à 48 heures ouvrées pour valider le cahier des charges de sondage.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
