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
        <title>Domaines d'Intervention | KAPAROC Ingénierie – Bâtiment, Route, Industrie</title>
        <meta name="description" content="KAPAROC Ingénierie intervient sur tous secteurs : bâtiments de grande hauteur, routes et autoroutes, ouvrages d'art, zones industrielles et portuaires. Expert géotechnique Dakar, Sénégal." />
        <meta name="keywords" content="géotechnique bâtiment Dakar, étude sol infrastructure routière, fondations ouvrage d'art, géotechnique industriel, port Dakar géotechnique, Sénégal BTP" />
        <link rel="canonical" href="https://www.kaparoc.com/domaines" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/domaines" />
        <meta property="og:title" content="Domaines d'Intervention – KAPAROC Ingénierie | Géotechnique Multi-Sectorielle" />
        <meta property="og:description" content="Expertise géotechnique multi-sectorielle : bâtiments, routes, ouvrages d'art, industries. KAPAROC Ingénierie, Dakar Sénégal." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domaines – KAPAROC Ingénierie Géotechnique Dakar" />
        <meta name="twitter:description" content="KAPAROC intervient sur bâtiments, routes, ouvrages d'art et industries. Expert géotechnique à Dakar, Sénégal." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
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
