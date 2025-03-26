"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientTestimonialsWrapperProps {
  children: ReactNode;
}

function ClientTestimonialsWrapper({ children }: ClientTestimonialsWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#1B4D2E] relative"
      id="testimonials"
    >
      {/* All complex background elements removed */}
      {children}
    </motion.section>
  );
}

export default ClientTestimonialsWrapper; 