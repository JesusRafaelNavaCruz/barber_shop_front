import { getServices } from "@/services/services";
import type { Services } from "@/types/services";
import React from "react";
import ServiceCard from "../ServiceCard";
import Title from "../Title";

export default async function Services() {
  let servicesData: Services[] | null = null;

  try {
    servicesData = await getServices();
  } catch (error) {
    console.error("Error fetching services: ", error);
  }

  const services = servicesData ? servicesData : [];

  return (
    <section
      className="mt-20 px-6 md:px-10 mx-auto max-w-[1200px]"
      id="services"
    >
      <Title
        title="Cortes con Ley"
        subtitle="Tradición y estilo moderno en cada detalle. Selecciona el servicio que mejor represente tu carácter."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
