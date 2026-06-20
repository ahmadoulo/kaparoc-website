/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | KAPAROC Ingénierie – Devis Géotechnique Dakar, Sénégal</title>
        <meta name="description" content="Contactez KAPAROC Ingénierie à Dakar : +221 33 853 01 79. Demandez votre étude géotechnique, devis de sol ou reconnaissance de terrain. Notre équipe répond sous 24h." />
        <meta name="keywords" content="contact géotechnique Dakar, devis étude sol Sénégal, bureau d'études contact, KAPAROC Ingénierie téléphone, reconnaissance terrain Dakar" />
        <link rel="canonical" href="https://www.kaparoc.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/contact" />
        <meta property="og:title" content="Contactez KAPAROC Ingénierie – Devis Géotechnique Dakar" />
        <meta property="og:description" content="Obtenez votre devis géotechnique sous 24h. KAPAROC Ingénierie à Dakar : +221 33 853 01 79. Experts en études de sol G1-G5 au Sénégal." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact KAPAROC Ingénierie – Géotechnique Dakar" />
        <meta name="twitter:description" content="Contactez notre bureau géotechnique à Dakar. Devis étude de sol, sondages et fondations. +221 33 853 01 79." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
      </Helmet>
      
      <div className="pt-32 pb-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Nous Contacter</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6">Discutons de vos fondations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Notre centre technique à Dakar est à votre disposition pour chiffrer vos campagnes géotechniques sur tout le territoire sénégalais.
          </p>
        </div>
      </div>

      <Contact />
    </>
  );
}
