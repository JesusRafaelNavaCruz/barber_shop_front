"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Calendar, Clock, Scissors, Sparkles } from "lucide-react";

export default function HeroBarberia3() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const servicios = [
    {
      icon: Scissors,
      title: "Corte Premium",
      description: "Corte, lavado y styling profesional",
      price: "$35",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
    },
    {
      icon: Award,
      title: "Barba Perfecta",
      description: "Diseño y arreglo con navaja",
      price: "$25",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
    },
    {
      icon: Sparkles,
      title: "Completo",
      description: "Corte + Barba + Cerveza artesanal",
      price: "$55",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
    },
    {
      icon: Clock,
      title: "Express",
      description: "Corte rápido sin espera",
      price: "$25",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Barbería moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/80" />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className="mb-4 block text-sm font-semibold uppercase tracking-widest text-red-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                BIENVENIDO A BANDOLEROS
              </motion.span>

              <motion.h1
                className="mb-6 text-5xl font-bold text-white uppercase md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Tu estilo es
                <br />
                <span className="text-red-500">nuestra firma</span>
              </motion.h1>

              <motion.p
                className="mb-8 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Más que un corte, una declaración de intenciones. Descubre por qué somos la barbería de referencia para quienes no se conforman.
              </motion.p>

              {/* CTA's */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Reservar CTA */}
                <motion.button
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-lg hover:shadow-red-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar />
                  <span>Reservar ahora</span>
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-red-400 to-red-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  className="group flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/50 px-8 py-4 text-lg font-bold text-white transition-all hover:border-red-500 hover:bg-red-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Scissors />
                  <span>Servicios</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Grid de servicios */}
              <div className="grid grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    {/* Fondo animado en hover */}
                    <motion.div
                      className="absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${servicio.color.split(' ')[0]}, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Icono */}
                    <div className={`mb-4 rounded-xl bg-red-500/10 p-3 ${servicio.iconColor} w-fit`}>
                      <servicio.icon className="h-6 w-6" />
                    </div>
                    
                    {/* Contenido */}
                    <h3 className="mb-2 text-xl font-bold text-white">{servicio.title}</h3>
                    <p className="mb-3 text-sm text-gray-400">{servicio.description}</p>
                    
                    {/* Precio y acción */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-500">{servicio.price}</span>
                      <motion.button
                        className="rounded-full bg-red-500/20 p-2 text-red-500 opacity-0 transition-opacity group-hover:opacity-100"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 11, 11, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Calendar className="h-4 w-4" />
                      </motion.button>
                    </div>

                    {/* Línea decorativa animada */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
              </motion.div>

            
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white">
          <motion.div
            className="mx-auto mt-2 h-2 w-1 rounded-full bg-white"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
