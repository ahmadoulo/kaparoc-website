/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import Sectors from "../components/Sectors";

export default function SectorsPage() {
  return (
    <>
      <Helmet>
        <title>Domaines d'intervention | Kaparoc Ingénierie</title>
        <meta name="description" content="Nos ingénieurs interviennent sur tous types d'ouvrages : Bâtiments de grande hauteur, infrastructures routières, ouvrages d'art et industriels." />
      </Helmet>
      
      <div className="pt-32 pb-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Secteurs Clés</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-6">Expertise Multi-Sectorielle</h1>
          <p className="text-brand-beige/80 max-w-2xl mx-auto font-light leading-relaxed">
            Chaque ouvrage possède ses propres contraintes. Notre pôle d'ingénierie s'adapte à la spécificité géotechnique de la typologie de votre projet.
          </p>
        </div>
      </div>

      <Sectors />
    </>
  );
}
