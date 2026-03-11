"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const pointerEvents = useTransform(
    scrollY,
    [0, 100],
    ["none", "auto"] as unknown as [string, string]
  );

  const handleScrollToTop = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      onClick={handleScrollToTop}
      style={{
        opacity,
        pointerEvents: pointerEvents as unknown as "auto" | "none",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg transition-colors duration-300"
      aria-label="Volver al inicio"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
