"use client";

import { Staff } from "@/types/staff";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

export default function StaffCard({
  staff,
  index,
}: {
  staff: Staff;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col bg-background-dark rounded-xl overflow-hidden border border-white/5 group shadow-xl"
    >
      <div className="relative h-[400px] overflow-hidden">
        <div className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
          {staff?.photo?.url && (
            <Image
              src={staff.photo.url}
              alt={staff?.photo?.alt || staff.name}
              width={staff.photo.width}
              height={staff.photo.height}
              className="object-fill"
            />
           )}
          {/* Si no hay foto, mostrar placeholder */}
          {!staff?.photo?.url && (
            <div className="w-full h-full bg-surface-dark flex items-center justify-center">
              <span className="text-slate-500">Sin foto</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold">{staff.name}</h3>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              {staff.speciality}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
          {staff.bio}
        </p>
        <div className="flex gap-3 text-slate-500">
          <Instagram />
          <Twitter />
        </div>
      </div>
    </motion.div>
  );
}
