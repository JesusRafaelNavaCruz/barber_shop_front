"use client";
import React, { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxProps {
  background: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

const Parallax = forwardRef<HTMLDivElement, ParallaxProps>(
  ({ background, containerRef }, ref) => {
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, opacity }}
      layout={false}
    >
      <Image
        src={background}
        alt="Barbería moderna"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/80" />
    </motion.div>
  );
  }
);

Parallax.displayName = "Parallax";

export default Parallax;
