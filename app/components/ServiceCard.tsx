"use client";
import { Services } from "@/types/services";
import React from "react";
import { motion, useInView } from "framer-motion";
import { Scissors } from "lucide-react";

export default function ServiceCard({
  service,
  index,
}: {
  service: Services;
  index: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
    

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      layout={false}
      className="group flex flex-col gap-4 sm:gap-6 rounded-lg sm:rounded-xl border border-white/10 bg-surface-dark p-6 sm:p-8 hover:border-primary/50 transition-all hover:scale-[1.02] duration-300 will-change-transform"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors will-change-colors">
        <Scissors />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg sm:text-xl font-bold">{service.title}</h3>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
