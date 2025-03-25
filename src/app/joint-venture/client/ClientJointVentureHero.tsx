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
      className="min-h-[100svh] relative flex items-center justify-center pt-20 bg-[#0C1F0E]"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/jv.jpg"
          alt="Badda's Chiya Joint Venture"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-[#0C1F0E]/80"></div>
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
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#C7962D]" />
              <span className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand">
                Joint Venture
              </span>
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#C7962D]" />
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
              className="px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white text-sm xs:text-sm sm:text-base font-medium rounded-full transition-all"
            >
              Our Story
            </a>
            <a
              href="#visit"
              className="px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 text-white text-sm xs:text-sm sm:text-base font-medium rounded-full transition-all border border-white/20 hover:border-white/30"
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