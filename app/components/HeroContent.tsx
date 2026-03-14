"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Scissors } from "lucide-react";
import { HeroBlock, HeroBlockButtons } from "@/types/pages";

interface HeroContentProps {
    block: HeroBlock;
    openModal: () => void;
}

export default function HeroContent({block, openModal}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        className="mb-2 sm:mb-4 block text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {block.badge}
      </motion.span>

      <motion.h1
        className="mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {block.title}
        <br />
        <span className="text-red-500">{block.highlightedText}</span>
      </motion.h1>

      <motion.p
        className="mb-4 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {block.description}
      </motion.p>

      {/* CTA's */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Reservar CTA */}
        <motion.button
          onClick={openModal}
          className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold text-white transition-all hover:shadow-lg hover:shadow-red-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
          <span className="hidden sm:inline">{block.buttons.primaryButtonText}</span>
          <span className="sm:hidden">{block.buttons.primaryButtonShortText}</span>
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-red-400 to-red-500"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <motion.button
          onClick={() => {
            const element = document.getElementById("services");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="group flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold text-white transition-all hover:border-red-500 hover:bg-red-500/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Scissors className="h-4 sm:h-5 w-4 sm:w-5" />
          <span className="hidden sm:inline">{block.buttons.secondaryButtonText}</span>
          <span className="sm:hidden">{block.buttons.secondaryButtonShortText}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
