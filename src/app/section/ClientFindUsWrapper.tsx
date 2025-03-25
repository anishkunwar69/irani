"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';

interface ClientFindUsWrapperProps {
  children: ReactNode;
}

// Dynamically import the map component with no SSR
const ClientOnlyMap = dynamic(
  () => import('../components/ClientOnlyMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-white/5 flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
      </div>
    )
  }
);

export default function ClientFindUsWrapper({ children }: ClientFindUsWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="find-us"
      className="relative bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] py-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] xs:w-[70vw] xs:h-[70vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-[#C7962D]/5 blur-[70px] xs:blur-[80px] sm:blur-[90px] md:blur-[100px] lg:blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] xs:w-[50vw] xs:h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[35vw] md:h-[35vw] lg:w-[30vw] lg:h-[30vw] rounded-full bg-[#1B4D2E]/40 blur-[80px] xs:blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]"></div>
        <div className="absolute top-20 right-10 w-[40vw] h-[40vw] xs:w-[35vw] xs:h-[35vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] rounded-full bg-[#C7962D]/10 blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px]"></div>
      </div>
      {children}
    </motion.section>
  );
} 