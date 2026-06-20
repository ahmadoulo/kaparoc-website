/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Direction & Équipe | KAPAROC Ingénierie – Leadership Géotechnique Dakar</title>
        <meta name="description" content="Découvrez le leadership de KAPAROC Ingénierie : Peinda SOW CISS, Directrice Générale, et l'équipe d'ingénieurs géotechniciens de référence à Dakar, Sénégal." />
        <meta name="keywords" content="équipe KAPAROC Ingénierie, directeur géotechnique Dakar, ingénieur géotechnicien Sénégal, Peinda SOW CISS, bureau études direction" />
        <link rel="canonical" href="https://www.kaparoc.com/equipe" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/equipe" />
        <meta property="og:title" content="Direction & Équipe – KAPAROC Ingénierie Géotechnique" />
        <meta property="og:description" content="L'équipe d'ingénieurs géotechniciens de KAPAROC Ingénierie à Dakar. Direction par Peinda SOW CISS, spécialiste en fondations et reconnaissance des sols." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Direction – KAPAROC Ingénierie Géotechnique Dakar" />
        <meta name="twitter:description" content="Peinda SOW CISS et l'équipe d'ingénieurs KAPAROC — experts géotechniciens à Dakar, Sénégal." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
      </Helmet>
      
      <div className="pt-32 pb-4 bg-brand-light-grey text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Notre Leadership</span>
          <h1 className="font-title text-4xl font-extrabold text-brand-charcoal mb-4">L'exigence au sommet</h1>
        </div>
      </div>

      <Team />
    </>
  );
}
