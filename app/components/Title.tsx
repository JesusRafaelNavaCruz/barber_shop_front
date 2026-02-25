"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Title({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-12 h-1 bg-primary mb-4"></div>
        <h1 className="dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight uppercase">
          {title}
        </h1>
        <p className="text-slate-400 mt-2 max-w-md">{subtitle}</p>
      </div>
    </motion.div>
  );
}
