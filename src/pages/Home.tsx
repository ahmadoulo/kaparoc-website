/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Sectors from "../components/Sectors";
import Partners from "../components/Partners";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

interface ContextType {
  onQuoteClick: () => void;
}

export default function Home() {
  const { onQuoteClick } = useOutletContext<ContextType>();

  return (
    <>
      <Helmet>
        <title>KAPAROC Ingénierie | Bureau d'études Géotechniques à Dakar, Sénégal</title>
        <meta name="description" content="KAPAROC Ingénierie, bureau d'études géotechniques à Dakar : missions G1 à G5 (NF P 94-500), études de sol, fondations, sondages pressiométriques et modélisation. Référence en Afrique de l'Ouest." />
        <meta name="keywords" content="géotechnique Dakar, étude de sol Sénégal, bureau d'études géotechnique, mission G1 G2 G3 G4 G5, fondations BTP, sondage pressiométrique, ingénierie des sols Afrique de l'Ouest, KAPAROC" />
        <link rel="canonical" href="https://www.kaparoc.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaparoc.com/" />
        <meta property="og:title" content="KAPAROC Ingénierie | Bureau d'études Géotechniques – Dakar, Sénégal" />
        <meta property="og:description" content="Bureau d'études géotechniques de référence à Dakar. Missions G1 à G5, études de sol, fondations et modélisation en Afrique de l'Ouest." />
        <meta property="og:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KAPAROC Ingénierie | Géotechnique Dakar" />
        <meta name="twitter:description" content="Bureau d'études géotechniques G1 à G5 à Dakar. Études de sol, fondations, sondages, modélisation — Sénégal & Afrique de l'Ouest." />
        <meta name="twitter:image" content="https://www.kaparoc.com/kaparoc-logo.png" />
      </Helmet>
      
      <Hero onQuoteClick={onQuoteClick} />
      <About />
      <Services onQuoteClick={onQuoteClick} />
      <Sectors />
      <Partners />
      <WhyUs />
      <Contact />
    </>
  );
}
