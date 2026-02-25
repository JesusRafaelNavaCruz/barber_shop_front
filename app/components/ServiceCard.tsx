"use client";
import { Services } from "@/types/services";
import React from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export default function ServiceCard({
  service,
  index,
}: {
  service: Services;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-all hover:scale-[1.02] duration-300"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Scissors />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-xl font-bold">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-gold-accent font-bold text-2xl">
          ${service.price}
        </span>
      </div>
    </motion.div>
  );
}
