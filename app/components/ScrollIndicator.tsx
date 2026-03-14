'use client'
import React from 'react'
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white">
          <motion.div
            className="mx-auto mt-2 h-2 w-1 rounded-full bg-white"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
  )
}
