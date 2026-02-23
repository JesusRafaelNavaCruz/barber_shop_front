"use client";

import { Scissors } from "lucide-react";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      className="mt-20 px-6 md:px-10 mx-auto max-w-[1200px]"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Title
          title="Nuestros servicios"
          subtitle="Maestría en navaja para quienes no siguen las reglas."
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-all hover:scale-[1.02] duration-300"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Scissors />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-bold">Corte de cabello</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quidem tenetur dignissimos facilis id nostrum.
            </p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-gold-accent font-bold text-2xl">$25</span>
            <span className="text-slate-500 text-xs line-through">$35</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-all hover:scale-[1.02] duration-300"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Scissors />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-bold">Corte de cabello</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quidem tenetur dignissimos facilis id nostrum.
            </p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-gold-accent font-bold text-2xl">$25</span>
            <span className="text-slate-500 text-xs line-through">$35</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-all hover:scale-[1.02] duration-300"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Scissors />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-bold">Corte de cabello</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quidem tenetur dignissimos facilis id nostrum.
            </p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-gold-accent font-bold text-2xl">$25</span>
            <span className="text-slate-500 text-xs line-through">$35</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
