"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

export default function Title({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      layout={false}
    >
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
        <div className="w-10 h-1 sm:w-12 bg-primary mb-3 sm:mb-4"></div>
        <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight uppercase px-2">
          {title}
        </h1>
        <p className="text-slate-400 mt-2 sm:mt-3 max-w-xs sm:max-w-md px-2 text-sm sm:text-base">{subtitle}</p>
      </div>
    </motion.div>
  );
}
