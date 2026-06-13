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
        <title>Direction & Équipe | Kaparoc Ingénierie</title>
        <meta name="description" content="Découvrez Peinda SOW CISS, Directrice Générale de KAPAROC INGENIERIE, et le leadership technique du bureau d'études." />
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
