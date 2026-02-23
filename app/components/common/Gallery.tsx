"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Title from "../Title";
import Image from "next/image";
import { Maximize2, Heart } from "lucide-react";

// Datos de ejemplo para la galería
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Corte de cabello clásico",
    category: "Cortes",
    likes: 124,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Afeitado tradicional",
    category: "Afeitados",
    likes: 89,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Estilo moderno",
    category: "Cortes",
    likes: 256,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Arreglo de barba",
    category: "Barba",
    likes: 67,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1635273051839-003bf06a8751?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Degradado perfecto",
    category: "Cortes",
    likes: 192,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Detalles con navaja",
    category: "Detalles",
    likes: 145,
  },
];

export default function Gallery() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-10"
      id="gallery"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            title="Nuestra galería"
            subtitle="Resultados que hablan por sí mismos"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              {/* Imagen */}
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenido hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <p className="text-sm text-primary font-medium mb-1">
                  {image.category}
                </p>
                <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart size={16} className="text-primary" />
                    <span className="text-sm">{image.likes}</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                    <Maximize2 size={16} />
                    <span>Ver más</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}