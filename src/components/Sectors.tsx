/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building, Factory, Zap, Shield, Navigation, 
  Droplets, Ship, Layers, Milestone
} from "lucide-react";

export default function Sectors() {
  const sectors = [
    {
      id: "batiment",
      icon: <Building className="w-6 h-6 text-brand-orange" />,
      title: "Bâtiments & Logements",
      desc: "Immeubles résidentiels R+X, villas haut de gamme, complexes de bureaux, centres commerciaux et entrepôts de stockage.",
    },
    {
      id: "industrie",
      icon: <Factory className="w-6 h-6 text-brand-orange" />,
      title: "Industrie & Usines",
      desc: "Dalles de forte charge portante, réservoirs hydrocarbures, fondation de machines tournantes et zones de raccordement lourd.",
    },
    {
      id: "energie",
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      title: "Énergie & Télécoms",
      desc: "Pylônes haute tension, parcs éoliens de grande hauteur, centrales photovoltaïques isolées et pylônes téléphoniques.",
    },
    {
      id: "genie-civil",
      icon: <Layers className="w-6 h-6 text-brand-orange" />,
      title: "Génie Civil & Tunnels",
      desc: "Ouvrages souterrains complexes, parkings multi-niveaux d'infrastructure, murs et voiles de soutènements lourds.",
    },
    {
      id: "routes",
      icon: <Milestone className="w-6 h-6 text-brand-orange" />,
      title: "Routes & Voies Ferrées",
      desc: "Calcul de portance de plateforme de chaussée routière, ponts ferroviaires, caniveaux d'écoulement et talus d'autoroute.",
    },
    {
      id: "hydrauliques",
      icon: <Droplets className="w-6 h-6 text-brand-orange" />,
      title: "Ouvrages Hydrauliques",
      desc: "Châteaux d'eau publics, collecteurs pluviaux géants, stations d'épuration des eaux (STEP) et bassins de décantation.",
    },
    {
      id: "portuaires",
      icon: <Ship className="w-6 h-6 text-brand-orange" />,
      title: "Ouvrages Portuaires",
      desc: "Plateformes de terminaux à conteneurs, quais maritimes, jetées de protection, digues fluviales et hangars portuaires.",
    },
    {
      id: "complexes",
      icon: <Shield className="w-6 h-6 text-brand-orange" />,
      title: "Infrastructures Complexes",
      desc: "Piles de ponts majeurs en milieu humide, extensions industrielles en friches et ouvrages d'art à fortes sollicitations dynamiques.",
    }
  ];

  return (
    <section id="domaines" className="py-24 bg-brand-light-grey scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
            Domaines d'Intervention
          </span>
          <h2 className="font-title font-extrabold text-3xl sm:text-4xl text-brand-charcoal">
            Une expertise adaptée à chaque ouvrage
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Grâce à notre polyvalence et nos équipements de modélisation avancés, nous accompagnons la réalisation de projets géotechniques d'envergure variée à travers toute l'Afrique de l'Ouest.
          </p>
        </div>

        {/* Dynamic & sleek grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              className="bg-white rounded-xl p-6 border border-gray-150 transition-all duration-300 hover:shadow-md hover:border-brand-orange flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-brand-light-grey flex items-center justify-center">
                  {sec.icon}
                </div>
                <h3 className="font-title font-bold text-sm text-brand-brown tracking-tight">
                  {sec.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical trust citation */}
        <div className="mt-16 bg-white border border-gray-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-12 bg-brand-orange rounded-full flex-shrink-0" />
            <p className="text-xs text-brand-charcoal font-medium leading-relaxed max-w-2xl">
              Chaque domaine technique est couvert par notre équipe d'ingénieurs seniors capables d'appliquer les normes Eurocode 7, les guides d'exécution du LCPC ainsi que les réglementations locales spécifiques de la sous-région.
            </p>
          </div>
          <Link
            to="/contact"
            className="text-xs font-bold text-brand-orange hover:text-brand-brown uppercase tracking-widest border-b border-brand-orange/40 hover:border-brand-brown pb-1 transition-colors flex-shrink-0"
          >
            Consulter notre bureau d'études →
          </Link>
        </div>

      </div>
    </section>
  );
}
