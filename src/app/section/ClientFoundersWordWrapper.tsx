"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientFoundersWordWrapperProps {
  children: ReactNode;
}

export default function ClientFoundersWordWrapper({ children }: ClientFoundersWordWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#29552a] relative overflow-hidden"
      id="founders-word"
    >
      {/* All complex background elements removed */}
      {children}
    </motion.section>
  );
} 