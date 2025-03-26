"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientFindUsWrapperProps {
  children: ReactNode;
}

export default function ClientFindUsWrapper({ children }: ClientFindUsWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      id="find-us"
      className="relative bg-[#1B4D2E] py-10 overflow-hidden"
    >
      {/* Removed all decorative elements for better LCP */}
      {children}
    </motion.section>
  );
} 