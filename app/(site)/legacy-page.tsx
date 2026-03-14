import React from "react";
// Importar componentes antiguos para mantenerlos disponibles
import Hero from "../components/common/Hero";
import Services from "../components/common/Services";
import Staff from "../components/common/Staff";
import Gallery from "../components/common/Gallery";
import Banner from "../components/common/Banner";
import Location from "../components/common/Location";

/**
 * PÁGINA ANTIGUA - Mantener como referencia
 * Esta página usa la configuración antigua con componentes estáticos.
 * La nueva configuración se encuentra en /page.tsx
 */
export default function LegacyPage() {
  return (
    <div>
      <Hero />
      <Services />
      <Staff />
      <Gallery />
      <Banner />
      <Location />
    </div>
  );
}
