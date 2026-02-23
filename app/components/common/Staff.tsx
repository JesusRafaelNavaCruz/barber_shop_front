"use client";
import React from "react";
import Title from "../Title";
import Image from "next/image";
import { Instagram, Share, Share2, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Staff() {
  return (
    <section
      className="bg-surface-dark/50 py-20 border-y border-white/5"
      id="staff"
    >
      <div className="mx-auto px-6 md:px-10 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title
            title="Maestros de la Navaja"
            subtitle="Nuestros barberos no solo dominan la técnica, forjan tu identidad."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col bg-background-dark rounded-xl overflow-hidden border border-white/5 group shadow-xl"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fill
                  alt="barber"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">Marco Rosi</h3>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                    Master barber / 12 años exp.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                velit?
              </p>
              <div className="flex gap-3 text-slate-500">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col bg-background-dark rounded-xl overflow-hidden border border-white/5 group shadow-xl"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fill
                  className="object-fill"
                  alt="barber"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">Marco Rosi</h3>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                    Master barber / 12 años exp.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                velit?
              </p>
              <div className="flex gap-3 text-slate-500">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col bg-background-dark rounded-xl overflow-hidden border border-white/5 group shadow-xl"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fill
                  alt="barber"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">Marco Rosi</h3>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                    Master barber / 12 años exp.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                velit?
              </p>
              <div className="flex gap-3 text-slate-500">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
