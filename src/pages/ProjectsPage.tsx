/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import {
  Building2, Factory, Landmark, Filter, MapPin, Phone, ArrowRight, CheckCircle2
} from "lucide-react";

interface ContextType {
  onQuoteClick: () => void;
}

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "infrastructures", label: "Infrastructures & Industrie" },
  { id: "batiments", label: "Bâtiments & Hôtellerie" },
  { id: "institutionnel", label: "Institutionnel & Public" },
];

const projects = [
  {
    id: "ndayane",
    category: "infrastructures",
    name: "Port de Ndayane",
    client: "Dakar Terminal",
    mission: "Étude géotechnique complète — Reconnaissance des sols, sondages carottés, pressiométrie et recommandations fondations pour infrastructure portuaire stratégique.",
    location: "Ndayane, Sénégal",
    highlight: true,
    tags: ["G1", "G2", "Fondations profondes", "Ouvrages maritimes"],
  },
  {
    id: "xewell",
    category: "infrastructures",
    name: "XEWELL Cimenterie",
    client: "XEWELL",
    mission: "Reconnaissance géotechnique, essais in-situ et laboratoire pour infrastructure industrielle lourde à Pout.",
    location: "Pout, Sénégal",
    highlight: false,
    tags: ["G2", "Industrie", "Essais labo"],
  },
  {
    id: "gbfoods",
    category: "infrastructures",
    name: "Podor GB Foods",
    client: "GB Foods",
    mission: "Étude de sol et dimensionnement des fondations pour unité industrielle agro-alimentaire.",
    location: "Podor, Sénégal",
    highlight: false,
    tags: ["G2", "Industrie", "Fondations"],
  },
  {
    id: "noom",
    category: "batiments",
    name: "Noom La Réserve",
    client: "Noom Hotel Group",
    mission: "Étude géotechnique G2 pour construction hôtelière haut de gamme, avec calcul de portance et recommandations semelles filantes.",
    location: "Dakar, Sénégal",
    highlight: true,
    tags: ["G2", "Hôtellerie", "R+X"],
  },
  {
    id: "brioche",
    category: "batiments",
    name: "Brioche Dorée",
    client: "Groupe Brioche Dorée",
    mission: "Reconnaissance géotechnique pour implantation commerciale, analyse des sols et validation des fondations superficielles.",
    location: "Dakar, Sénégal",
    highlight: false,
    tags: ["G1", "G2", "Commercial"],
  },
  {
    id: "prefecture-bignona",
    category: "institutionnel",
    name: "Préfecture de Bignona",
    client: "État du Sénégal",
    mission: "Étude géotechnique préliminaire et de conception pour bâtiment institutionnel public.",
    location: "Bignona, Casamance",
    highlight: false,
    tags: ["G1", "G2", "Institutionnel"],
  },
  {
    id: "commissariat-kolda",
    category: "institutionnel",
    name: "Commissariat de Kolda",
    client: "Ministère de l'Intérieur",
    mission: "Reconnaissance des sols et recommandations fondations pour infrastructure sécuritaire.",
    location: "Kolda, Sénégal",
    highlight: false,
    tags: ["G2", "Public", "Fondations"],
  },
  {
    id: "dmta",
    category: "institutionnel",
    name: "DMTA",
    client: "DMTA",
    mission: "Mission géotechnique complète pour ouvrage institutionnel, sondages et étude de conception.",
    location: "Sénégal",
    highlight: false,
    tags: ["G2", "Institutionnel"],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  infrastructures: <Factory className="w-5 h-5 text-brand-orange" />,
  batiments: <Building2 className="w-5 h-5 text-brand-orange" />,
  institutionnel: <Landmark className="w-5 h-5 text-brand-orange" />,
};

export default function ProjectsPage() {
  const { onQuoteClick } = useOutletContext<ContextType>();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Nos Références & Projets | KAPAROC Ingénierie – Études Géotechniques Sénégal</title>
        <meta name="description" content="Découvrez les références de KAPAROC Ingénierie : Port de Ndayane, Brioche Dorée, Noom La Réserve, XEWELL Cimenterie et plus. Projets géotechniques au Sénégal et en Afrique de l'Ouest." />
        <link rel="canonical" href="https://www.kaparoc.com/projets" />
      </Helmet>

      {/* Hero */}
      <div className="pt-32 pb-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Nos Références</span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-6">
            Projets réalisés<br />au Sénégal & en Afrique
          </h1>
          <p className="text-brand-beige/80 max-w-2xl mx-auto font-light leading-relaxed">
            De l'infrastructure portuaire stratégique aux bâtiments institutionnels, KAPAROC accompagne des projets d'envergure à travers toute la sous-région.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <section id="projets-filter" className="py-10 bg-brand-light-grey border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Filtrer :</span>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? "bg-brand-orange text-white shadow-md scale-105"
                    : "bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange hover:text-brand-orange"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400">{filtered.length} projet{filtered.length > 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category sections when all */}
          {activeFilter === "all" ? (
            <>
              {["infrastructures", "batiments", "institutionnel"].map(catId => {
                const catProjects = projects.filter(p => p.category === catId);
                const catInfo = categories.find(c => c.id === catId);
                return (
                  <div key={catId} id={catId} className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-brand-orange/10 rounded-xl">
                        {categoryIcons[catId]}
                      </div>
                      <h2 className="font-title text-xl font-bold text-brand-charcoal">{catInfo?.label}</h2>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catProjects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} idx={idx} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-title text-2xl font-bold mb-4">Votre projet mérite la même rigueur</h2>
          <p className="text-brand-beige/80 font-light mb-8">
            Contactez nos ingénieurs pour une étude géotechnique adaptée à votre ouvrage.
          </p>
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-white text-white hover:text-brand-brown font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors shadow-md"
          >
            Demander une étude
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.06 }}
      className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
        project.highlight ? "border-brand-orange/30 ring-1 ring-brand-orange/20" : "border-gray-150"
      }`}
    >
      {/* Card Header */}
      <div className={`px-6 pt-6 pb-4 ${project.highlight ? "bg-gradient-to-br from-brand-orange/5 to-brand-brown/5" : "bg-brand-light-grey"}`}>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="p-2 bg-white rounded-xl shadow-sm">
            {categoryIcons[project.category] || <Building2 className="w-5 h-5 text-brand-orange" />}
          </div>
          {project.highlight && (
            <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2 py-1 rounded-full uppercase tracking-wider">
              Projet phare
            </span>
          )}
        </div>
        <h3 className="font-title font-bold text-lg text-brand-charcoal group-hover:text-brand-orange transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
          <MapPin className="w-3 h-3 text-brand-orange" />
          {project.location}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 py-4 space-y-4">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Client</span>
          <span className="text-sm font-semibold text-brand-charcoal">{project.client}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Mission réalisée</span>
          <p className="text-xs text-gray-500 font-light leading-relaxed">{project.mission}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold bg-brand-brown/8 text-brand-brown px-2.5 py-1 rounded-full border border-brand-brown/15">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
