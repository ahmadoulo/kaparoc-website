/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone, Mail, MapPin, Send, CheckCircle2, XCircle,
  Clock, FileText, ChevronRight, X
} from "lucide-react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  // ── Status ───────────────────────────────────────────────────────────────
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  // Auto-close modal after 8 s
  useEffect(() => {
    if (!showSuccessModal) return;
    const t = setTimeout(() => setShowSuccessModal(false), 8000);
    return () => clearTimeout(t);
  }, [showSuccessModal]);

  // ── Submit — exactly as the Web3Forms React documentation ────────────────
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;

    // Capture the name BEFORE reset so we can personalise the modal
    const senderName = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";

    // Build FormData from the actual form element (picks up all name="" attrs)
    const formData = new FormData(form);
    formData.append("access_key", "caaf2841-a87d-467c-bde1-a0f8c60b0fa1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setSubmittedName(senderName);
        setStatus("idle");
        setShowSuccessModal(true);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion internet.");
    }
  };

  const isSubmitting = status === "submitting";

  const projectTypes = [
    "G1 - Faisabilité Préliminaire",
    "G2 - Conception Fondations (Décennale)",
    "G3 - Étude Technique d'Exécution",
    "G4 - Contrôle & Supervision de Chantier",
    "G5 - Diagnostic Fissures / Pathologies",
    "Laboratoire – Essais matériaux",
    "Auscultation & Instrumentation",
    "Autre Étude / Levés Topographiques"
  ];

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <section id="contact" className="py-24 bg-brand-charcoal text-white scroll-mt-12 relative overflow-hidden">
        {/* Dot backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#E84A1A_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* ── Left: contact details ─────────────────────────────── */}
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
                  Nos ingénieurs d'études de sol sont à votre entière disposition pour analyser les
                  caractéristiques de vos futures structures et formuler une proposition d'investigations adéquate.
                </p>
              </div>

              <div className="space-y-6 pt-4">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1 w-full">
                    <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                      Siège de Dakar
                    </span>
                    <p className="text-sm font-light text-brand-beige/90 leading-relaxed">
                      Liberté VI Ext, 17 Rue L 50 x 25, Dakar, Sénégal
                    </p>
                    <a
                      href="https://maps.app.goo.gl/JMqeKqMybMhsKEf18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-3 rounded-xl overflow-hidden border border-white/10 shadow-lg relative group"
                    >
                      <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <span className="bg-brand-orange text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          Ouvrir dans Google Maps <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                      <iframe
                        src="https://www.google.com/maps?q=Liberté+VI+Ext,+17+Rue+L+50+x+25,+Dakar,+Sénégal&output=embed&hl=fr&z=16"
                        width="100%"
                        height="140"
                        style={{ border: 0, pointerEvents: "none" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation Kaparoc Ingénierie"
                        className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                      />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                      Secrétariat Technique
                    </span>
                    <p className="text-sm font-bold text-white tracking-wide">+221 33 853 01 79</p>
                    <p className="text-xs font-light text-brand-beige/70">
                      Soutien direct aux promoteurs & architectes : +221 78 386 30 30
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                      Messageries Électroniques
                    </span>
                    <p className="text-sm font-semibold text-white">contact@kaparoc.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/5">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-brand-orange uppercase tracking-wider">
                      Heures d'ouverture
                    </span>
                    <p className="text-xs font-light text-brand-beige/80">Lundi - Vendredi : 08:30 - 18:00</p>
                    <p className="text-xs font-light text-brand-beige/60">
                      Samedi matin (Urgences chantiers uniquement)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: form ───────────────────────────────────────── */}
            <div className="lg:col-span-7 bg-white text-brand-charcoal p-6 sm:p-10 rounded-3xl shadow-2xl">
              <h3 className="font-title font-extrabold text-xl text-brand-brown mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-orange" />
                Demander une offre ou une cotation
              </h3>

              {/*
                ─────────────────────────────────────────────────────────────
                FORM — fields must have name="" attributes so that
                new FormData(event.target) picks them up automatically,
                exactly as the Web3Forms documentation requires.
                ─────────────────────────────────────────────────────────────
              */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Hidden Web3Forms configuration fields */}
                <input type="hidden" name="subject" value="[KAPAROC] Nouvelle demande de devis géotechnique" />
                {/* Honeypot anti-spam */}
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Nom Complet ou Raison Sociale *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
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
                      name="phone"
                      required
                      placeholder="Ex: +221 77 000 00 00"
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Adresse Messagerie (Email) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
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
                      name="location"
                      required
                      placeholder="Ex: Dakar Plateau, Almadies, Thiès..."
                      className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Mission type */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Type de Mission Géotechnique Requise (Si connue)
                  </label>
                  <select
                    name="project_type"
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message — MUST be name="message" for Web3Forms */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Description succincte de la future structure *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Ex: Construction d'un immeuble d'habitation R+4 avec sous-sol partiel, structure poteaux-poutres béton armé, tassement admissible maximal de 2cm..."
                    className="w-full bg-brand-light-grey border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-bold tracking-wider uppercase py-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting
                        ? "bg-brand-charcoal/80 cursor-not-allowed"
                        : "bg-brand-orange hover:bg-brand-brown hover:shadow-lg active:scale-95"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmission en cours…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Transmettre ma demande d'étude de sol
                      </>
                    )}
                  </button>
                </div>

                {/* Inline error */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-900 text-xs"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold">Échec de l'envoi</p>
                        <p className="text-red-800/80 font-light">{errorMessage}</p>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="mt-1 text-red-700 font-bold underline underline-offset-2 hover:text-red-900 transition-colors"
                        >
                          Réessayer
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Success Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto p-10 text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-charcoal hover:bg-gray-100 rounded-full transition-all"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: "spring", stiffness: 220 }}
                className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest block mb-3">
                KAPAROC Ingénierie
              </span>

              <h2 className="font-title font-extrabold text-2xl text-brand-charcoal mb-3">
                Demande reçue avec succès !
              </h2>

              <p className="text-sm text-gray-500 font-light leading-relaxed mb-2">
                Merci{submittedName ? <>, <strong className="text-brand-charcoal font-semibold">{submittedName}</strong></> : ""} pour votre message.
              </p>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                Notre secrétariat technique à Dakar a bien enregistré votre demande. Un ingénieur conseil
                prendra contact avec vous sous{" "}
                <strong className="text-brand-brown font-semibold">24 à 48 heures ouvrées</strong>.
              </p>

              {/* Contact quick info */}
              <div className="flex items-center justify-center gap-6 py-4 border-y border-gray-100 mb-7">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Téléphone</p>
                  <p className="text-sm font-bold text-brand-charcoal mt-0.5">+221 33 853 01 79</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-bold text-brand-charcoal mt-0.5">contact@kaparoc.com</p>
                </div>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-brand-orange hover:bg-brand-brown text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-colors shadow-sm"
              >
                Fermer
              </button>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 8, ease: "linear" }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange origin-left"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
