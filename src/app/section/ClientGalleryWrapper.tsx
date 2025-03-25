"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientGalleryWrapperProps {
  children: ReactNode;
}



function ClientGalleryWrapper({ children }: ClientGalleryWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative overflow-hidden"
      id="gallery"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] bg-repeat opacity-[0.03] xs:opacity-[0.04] sm:opacity-5"></div>

        <div className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] xs:w-[500px] xs:h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] bg-[#C7962D] rounded-full blur-[100px] xs:blur-[120px] sm:blur-[150px] md:blur-[180px] lg:blur-[200px] opacity-5 xs:opacity-6 sm:opacity-8 animate-pulse-slow"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] xs:w-[400px] xs:h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#1B4D2E] rounded-full blur-[80px] xs:blur-[100px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] opacity-5 xs:opacity-6 sm:opacity-8 animate-pulse-slow"></div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 xs:via-[#C7962D]/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 xs:via-[#C7962D]/25 to-transparent"></div>

        <div className="absolute top-[15%] left-[8%] w-[8vw] h-[8vw] xs:w-[min(40px,8vw)] xs:h-[min(40px,8vw)] sm:w-[min(60px,8vw)] sm:h-[min(60px,8vw)] md:w-[min(80px,10vw)] md:h-[min(80px,10vw)] border border-[#C7962D]/5 xs:border-[#C7962D]/8 sm:border-[#C7962D]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[12vw] h-[12vw] xs:w-[min(60px,12vw)] xs:h-[min(60px,12vw)] sm:w-[min(90px,12vw)] sm:h-[min(90px,12vw)] md:w-[min(120px,15vw)] md:h-[min(120px,15vw)] border border-[#C7962D]/5 xs:border-[#C7962D]/8 sm:border-[#C7962D]/10 rounded-full animate-spin-slow"></div>

        <div className="absolute top-1/4 left-1/4 w-[4px] h-[4px] xs:w-[min(5px,0.6vw)] xs:h-[min(5px,0.6vw)] sm:w-[min(6px,0.8vw)] sm:h-[min(6px,0.8vw)] bg-[#C7962D]/20 xs:bg-[#C7962D]/25 sm:bg-[#C7962D]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[4px] h-[4px] xs:w-[min(5px,0.6vw)] xs:h-[min(5px,0.6vw)] sm:w-[min(6px,0.8vw)] sm:h-[min(6px,0.8vw)] bg-[#C7962D]/20 xs:bg-[#C7962D]/25 sm:bg-[#C7962D]/30 rounded-full animate-float-delay"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C7962D]/20 xs:from-[#C7962D]/25 sm:from-[#C7962D]/30 via-[#C7962D]/5 xs:via-[#C7962D]/8 sm:via-[#C7962D]/10 to-transparent transform -rotate-45"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#C7962D]/20 xs:from-[#C7962D]/25 sm:from-[#C7962D]/30 via-[#C7962D]/5 xs:via-[#C7962D]/8 sm:via-[#C7962D]/10 to-transparent transform -rotate-45"></div>
          </div>
        </div>
      </div>
      {children}
    </motion.section>
  );
}

export default ClientGalleryWrapper; 