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
        <title>Accueil | Kaparoc Ingénierie Géotechnique</title>
        <meta name="description" content="Bureau d'études géotechniques de premier plan en Afrique de l'Ouest. Expertise G1 à G5, fondations, et modélisation." />
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
