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
        <title>Contactez-nous | Kaparoc Ingénierie</title>
        <meta name="description" content="Contactez KAPAROC INGENIERIE à Dakar, Sénégal. Téléphone : +221 33 853 01 79. Demandez votre étude de sol ou un devis géotechnique." />
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
