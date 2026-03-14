"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HeroBlock } from "@/types/pages";
import { useBooking } from "@/app/context/BookingContext";
import ServiceCard from "../ServiceCard";
import Parallax from "../Parallax";
import ScrollIndicator from "../ScrollIndicator";
import HeroContent from "../HeroContent";

interface HeroBlockRendererProps {
  block: HeroBlock;
}

export default function HeroBlockRenderer({ block }: HeroBlockRendererProps) {
  const { openBooking } = useBooking();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen md:h-screen w-full overflow-hidden bg-neutral-900 py-12 sm:py-0"
    >
      {/* Parallax */}
      <Parallax background={block.backgroundImage.url} containerRef={containerRef} />

      {/* Contenido principal */}
      <div className="relative flex md:h-full items-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 w-full">
          <div className="grid items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
            {/* Contenido de texto */}
            <HeroContent block={block} openModal={openBooking} />

            {/* Servicios destacados */}
            {block.services && block.services.length > 0 && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {block.services.map((service, index) => (
                  <ServiceCard key={index} index={index} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
