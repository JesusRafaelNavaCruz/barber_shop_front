"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { HeroBlock } from "@/types/pages";
import { useBooking } from "@/app/context/BookingContext";

interface HeroBlockRendererProps {
  block: HeroBlock;
}

export default function HeroBlockRenderer({ block }: HeroBlockRendererProps) {
  const { openBooking } = useBooking();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
        mass: 0.5,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen md:h-screen w-full overflow-hidden bg-neutral-900 py-12 sm:py-0"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div className="absolute inset-0" style={{ y, opacity }} layout={false}>
        <Image
          src={block.backgroundImage.url}
          alt={block.backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/80" />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative flex md:h-full items-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 w-full">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contenido de texto */}
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 w-fit mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-sm font-semibold text-red-400">
                    {block.badge}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
                variants={itemVariants}
              >
                {block.title}{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  {block.highlightedText}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-neutral-300 leading-relaxed max-w-md"
                variants={itemVariants}
              >
                {block.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <button
                  onClick={openBooking}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  {block.buttons.primaryButtonText}
                </button>
                <button className="px-8 py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-colors duration-300">
                  {block.buttons.secondaryButtonText}
                </button>
              </motion.div>
            </div>

            {/* Servicios destacados */}
            {block.services && block.services.length > 0 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={itemVariants}
              >
                {block.services.map((service) => (
                  <motion.div
                    key={service.id}
                    className="p-4 rounded-lg bg-neutral-800/50 border border-neutral-700/50 hover:border-red-500/30 transition-colors duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-white font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-neutral-500">
                      <span>${service.price}</span>
                      <span>{service.duration} min</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
