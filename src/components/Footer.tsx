/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksCompany = [
    { name: "Qui sommes-nous ?", href: "/about" },
    { name: "Nos Services", href: "/services" },
    { name: "Secteurs d'activité", href: "/domaines" },
    { name: "Notre Équipe", href: "/equipe" },
  ];

  const linksNormative = [
    { name: "Norme G1 à G5 (NF P 94-500)", href: "/geotechnique-g1-g5" },
    { name: "Sécurité & Portance", href: "/about" },
    { name: "Bureau de Contrôle Agréé", href: "/about" },
    { name: "Assurances Décennales SN", href: "/about" },
  ];

  return (
    <footer className="bg-brand-brown text-white py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand presentation (4 columns) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity">
              <img
                src="/kaparoc-logo.png"
                alt="KAPAROC Ingénierie"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-brand-beige/70 leading-relaxed font-light max-w-sm">
              Bureau d&apos;études géotechniques de référence spécialisé dans l&apos;analyse des sols, le dimensionnement des fondations et les infrastructures durables en Afrique de l&apos;Ouest. Basé à Dakar, Sénégal.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-brand-orange font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Assurance Responsabilité Décennale & Civile Professionnelle</span>
            </div>
          </div>

          {/* Column 2: Navigation (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-beige/80">
              {linksCompany.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Norms & references (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Ressources
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-beige/80">
              {linksNormative.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location details (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Nous Joindre
            </h4>
            <div className="space-y-3 text-xs font-light text-brand-beige/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>+221 33 853 01 79</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>contact@kaparoc.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer: copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-brand-beige/50">
          <p>© {currentYear} KAPAROC INGÉNIERIE. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors">RC Dakar SN DKR 2025 B 2490</span>
            <span className="hover:text-white transition-colors">NINEA 009852234</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
