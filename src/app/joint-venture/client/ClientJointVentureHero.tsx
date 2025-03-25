"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { memo, useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";

function ClientJointVentureHero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="min-h-[100svh] relative flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] bg-repeat opacity-[0.04] sm:opacity-5"></div>

        <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] max-w-[90vw] max-h-[90vh] bg-[#C7962D] rounded-full blur-[150px] sm:blur-[180px] md:blur-[200px] opacity-10 animate-pulse-slow"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] max-w-[80vw] max-h-[80vh] bg-[#1B4D2E] rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-15 animate-pulse-slow"></div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/40 to-transparent"></div>

        <div className="absolute top-1/4 left-1/4 w-[min(6px,0.8vw)] h-[min(6px,0.8vw)] bg-[#C7962D]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[min(6px,0.8vw)] h-[min(6px,0.8vw)] bg-[#C7962D]/30 rounded-full animate-float-delay"></div>

        <div className="absolute top-[15%] left-[8%] w-[min(80px,10vw)] h-[min(80px,10vw)] border border-[#C7962D]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[min(120px,15vw)] h-[min(120px,15vw)] border border-[#C7962D]/10 rounded-full animate-spin-slow"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C7962D]/30 via-[#C7962D]/10 to-transparent transform -rotate-45"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#C7962D]/30 via-[#C7962D]/10 to-transparent transform -rotate-45"></div>
          </div>
        </div>
      </div>

      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/jv.jpg"
          alt="Badda's Chiya Joint Venture"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1F0E]/80 via-[#0C1F0E]/60 to-[#0C1F0E]"></div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 mb-2 xs:mb-2.5 sm:mb-3">
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#C7962D] animate-bounce" />
              <span className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand">
                Joint Venture
              </span>
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#C7962D] animate-bounce" />
            </div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-lora text-white/90 leading-[1.1] xs:leading-[1.15] sm:leading-tight"
              >
                Experience the{" "}
                <span className="text-[#C7962D] italic">Authentic</span>
                <br />
                Badda's Chiya
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 xs:-top-5 sm:-top-6 -right-2 xs:-right-3 sm:-right-4 md:right-10 transform rotate-12"
              >
                <FaLeaf className="text-[#C7962D]/30 text-xl xs:text-2xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-3 xs:-bottom-3.5 sm:-bottom-4 -left-3 xs:-left-4 sm:-left-6 md:left-20 transform -rotate-12"
              >
                <FaLeaf className="text-[#C7962D]/30 text-xl xs:text-2xl sm:text-3xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base xs:text-base sm:text-base md:text-lg lg:text-xl text-white/80 font-quicksand mb-6 xs:mb-8 sm:mb-10 max-w-[95%] xs:max-w-[90%] sm:max-w-2xl mx-auto leading-relaxed"
          >
            Where the tradition of Irani tea meets the authentic flavor of
            Nepali khaja, creating a unique culinary journey in the heart of
            Kathmandu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#about"
              className="px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white text-sm xs:text-sm sm:text-base font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-glow-sm"
            >
              Our Story
            </a>
            <a
              href="#visit"
              className="px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white text-sm xs:text-sm sm:text-base font-medium rounded-full transition-all border border-white/20 hover:border-white/30"
            >
              Visit Us
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute inset-x-0 bottom-10 mx-auto w-10 h-10 flex items-center justify-center"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="19"
            stroke="#C7962D"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M13 20L20 27L27 20"
            stroke="#C7962D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 13V27"
            stroke="#C7962D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
} 

export default memo(ClientJointVentureHero);