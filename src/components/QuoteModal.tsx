/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, FileText, Info, XCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "G2 - Conception Fondations (Permis de Construire)",
    location: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const projectTypes = [
    "G1 - Faisabilité Préliminaire",
    "G2 - Conception Fondations (Obligatoire)",
    "G3 - Étude d'Exécution Travaux",
    "G4 - Contrôle & Validation de Fouilles",
    "G5 - Diagnostic Fissures & Pathologies",
    "Autre levé d'ingénierie / Topographie"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Build FormData for Web3Forms
    const web3FormData = new FormData();
    web3FormData.append("access_key", "caaf2841-a87d-467c-bde1-a0f8c60b0fa1");
    web3FormData.append("subject", "[KAPAROC] Demande de devis – Popup Header");
    web3FormData.append("name", formData.name);
    web3FormData.append("email", formData.email);
    web3FormData.append("phone", formData.phone);
    web3FormData.append("project_type", formData.projectType);
    web3FormData.append("location", formData.location);
    web3FormData.append("message", formData.description);
    // Honeypot anti-spam
    web3FormData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "G2 - Conception Fondations (Permis de Construire)",
          location: "",
          description: "",
        });

        // Close modal after delay
        setTimeout(() => {
          setSubmitSuccess(false);
          onClose();
        }, 4000);
      } else {
        setIsSubmitting(false);
        setSubmitError(data.message || "Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch {
      setIsSubmitting(false);
      setSubmitError("Impossible de contacter le serveur. Vérifiez votre connexion internet.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark elegant backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-brown/80 backdrop-blur-sm"
        />

        {/* Modal panel body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-gray-100 p-6 sm:p-8 text-brand-charcoal"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 text-gray-400 hover:text-brand-orange hover:bg-brand-light-grey rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <FileText className="w-5 h-5 text-brand-orange" />
              <div>
                <h3 className="font-title font-extrabold text-lg text-brand-brown">
                  Demande de Cotation / Devis
                </h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block">
                  Cahier des charges préliminaire
                </span>
              </div>
            </div>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="inline-flex p-3 bg-emerald-50 rounded-full text-emerald-600 mb-2">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="font-title font-extrabold text-lg text-brand-brown">
                  Votre demande est transmise !
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-4">
                  Merci de faire confiance à KAPAROC INGENIERIE. Notre équipe d&apos;ingénieurs à Dakar analyse vos critères et vous adressera une estimation préliminaire par email sous 24 à 48 heures.
                </p>
                <p className="text-[11px] text-brand-orange font-bold animate-pulse">
                  Fermeture de la fenêtre en cours...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Seydou Diallo"
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Téléphone Direct *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: +221 77 123 45 67"
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: s.diallo@sn-immo.com"
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Localisation du Projet *
                    </label>
                    <input
                      type="text"
                      required
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ex: Almadies / Diamniadio"
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Mission demandée (Exigée par Bureau de Contrôle)
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange font-semibold"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Description du bâtiment à réaliser (Hauteur, Sous-sol) *
                  </label>
                  <textarea
                    required
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Ex: R+3 résidentiel, pas de sous-sol prévu, emprise au sol de 200m²..."
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div className="bg-brand-orange/5 border border-brand-orange/10 p-3 rounded-lg flex items-start gap-2 text-[10px] text-brand-brown">
                  <Info className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    Un géotechnicien confirmera avec vous le nombre minimal de points de sondages (pénétromètres et pressiomètres) requis pour valider votre ouvrage auprès des commissions de contrôle correspondantes.
                  </span>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2 text-red-900 text-[11px]"
                    >
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold">Échec de l'envoi</p>
                        <p className="text-red-800/80 font-light">{submitError}</p>
                        <button
                          type="button"
                          onClick={() => setSubmitError("")}
                          className="text-red-700 font-bold underline underline-offset-2 hover:text-red-900 transition-colors"
                        >
                          Réessayer
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-semibold text-gray-500 hover:bg-brand-light-grey rounded-lg transition-colors border border-transparent hover:border-gray-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-orange hover:bg-brand-orange/95 text-white text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Traitement...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Envoyer
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
