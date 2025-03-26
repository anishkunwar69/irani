"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { memo, useRef } from "react";
import { FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";

function ClientJointVentureAbout() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0.9 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="about"
      ref={aboutRef}
      className="w-full bg-[#29552a] relative xxl:py-24 py-14 xs:py-16 sm:py-18 md:py-20"
    >
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-16 items-center space-y-12 xs:space-y-16"
        >
          <motion.div
            variants={itemVariants}
            className="w-full block xxl:hidden"
          >
            <div className="text-center mb-10 xs:mb-12 sm:mb-16">
              <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                Our Joint Venture
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              </h2>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-3xl mx-auto px-1 xs:px-2 sm:px-0">
                <span className="text-[#C7962D] italic">Badda's Chiya</span> -
                The Perfect{" "}
                <span className="text-[#C7962D] italic">Fusion</span>
              </h3>
            </div>

            <div className="relative w-full">
              <div className="relative bg-[#26492a] rounded-[28px] border border-white/10 p-2 sm:p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[16/9] sm:aspect-[21/9]">
                    <Image
                      src="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto:good,w_1200/v1/irani-hero-imgs/badda/clc1n3ihie3mtwwawudk"
                      alt="Badda's Chiya Experience"
                      fill
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="hidden md:flex items-center gap-3 mb-3">
                      <div className="bg-[#C7962D]/20 p-2 rounded-full">
                        <GiTeapot className="text-[#C7962D] text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          Est. 2022
                        </h4>
                        <p className="text-white/70 text-sm">
                          Bringing authentic Irani tea tradition to a wider
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-[#26492a] p-5 sm:p-6 rounded-2xl border border-white/10 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-1 bg-[#C7962D] rounded-full"></div>
                        <h5 className="text-xl sm:text-2xl font-lora text-white/90">
                          Our Story
                        </h5>
                      </div>
                      <p className="text-white/80 font-quicksand text-base sm:text-lg leading-relaxed">
                        <span className="text-[#FFD700] font-semibold">
                          Badda's Chiya
                        </span>{" "}
                        represents our exciting joint venture, bringing the
                        authentic taste of Irani tea to a broader audience.
                        Located in the heart of Kathmandu, this collaboration
                        embodies our shared commitment to quality and
                        tradition.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-[#26492a] p-5 sm:p-6 rounded-2xl border border-white/10 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-1 bg-[#C7962D] rounded-full"></div>
                        <h5 className="text-xl sm:text-2xl font-lora text-white/90">
                          The Fusion
                        </h5>
                      </div>
                      <p className="text-white/80 font-quicksand text-base sm:text-lg leading-relaxed">
                        While maintaining the distinctive taste profile that
                        made Irani Chiya famous, Badda's Chiya extends the
                        experience with authentic Nepali khaja (snacks) and
                        lunch options. Each dish is prepared with the same
                        attention to detail and quality ingredients that
                        define our brand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center p-4 pt-0 sm:p-6 sm:pt-0">
                  <a
                    href="#visit"
                    className="px-8 py-3 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white font-medium rounded-full transition-all flex items-center gap-2"
                  >
                    <FaMapMarkerAlt className="text-sm" />
                    Visit Badda's Chiya
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden xxl:flex xxl:flex-row xxl:gap-20 2xl:gap-24 items-center w-full max-w-[1800px] mx-auto">
            <div className="xxl:w-1/2 text-center xxl:text-left xxl:pr-6 2xl:pr-10">
              <motion.div
                variants={itemVariants}
                className="mb-10 xs:mb-12 sm:mb-16"
              >
                <div className="relative mx-auto xxl:mx-0 px-4 sm:px-6 xxl:px-0">
                  <div className="relative z-10">
                    <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xxl:text-2xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                      <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl xxl:text-4xl" />
                      Our Joint Venture
                      <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl xxl:text-4xl" />
                    </h2>

                    <div className="relative">
                      <h3 className="relative text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xxl:text-7xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2]">
                        <span className="text-[#C7962D] italic">
                          Badda's Chiya
                        </span>{" "}
                        - The Perfect{" "}
                        <span className="relative inline-block">
                          <span className="text-[#C7962D] italic">
                            Fusion
                          </span>
                          <span className="absolute -bottom-2 xxl:-bottom-3 left-0 w-full h-[3px] bg-[#C7962D]"></span>
                        </span>
                      </h3>

                      <div className="absolute -top-8 -right-4 xxl:-right-12 rotate-12 opacity-30">
                        <FaLeaf className="text-[#C7962D] text-3xl xxl:text-4xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative z-10 space-y-8 xxl:space-y-10 text-white/80 font-quicksand xxl:pl-4 xxl:border-l-2 xxl:border-[#C7962D]/20"
              >
                <p className="text-lg xxl:text-xl 2xl:text-2xl leading-relaxed xxl:leading-relaxed">
                  <span className="text-[#FFD700] font-semibold">
                    Badda's Chiya
                  </span>{" "}
                  represents our exciting joint venture, bringing the
                  authentic taste of Irani tea to a broader audience. Located
                  in the heart of Kathmandu, this collaboration embodies our
                  shared commitment to quality and tradition.
                </p>

                <p className="text-lg xxl:text-xl 2xl:text-2xl leading-relaxed xxl:leading-relaxed">
                  While maintaining the distinctive taste profile that made
                  Irani Chiya famous, Badda's Chiya extends the experience
                  with authentic Nepali khaja (snacks) and lunch options. Each
                  dish is prepared with the same attention to detail and
                  quality ingredients that define our brand.
                </p>

                <div className="pt-4 xxl:pt-6">
                  <a
                    href="#visit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#C7962D] text-white font-medium rounded-full transition-all"
                  >
                    <FaMapMarkerAlt className="text-base xxl:text-lg" />
                    <span className="text-base xxl:text-lg">
                      Visit Badda's Chiya
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="xxl:w-1/2 relative xxl:mt-[-20px]"
            >
              <div className="absolute -right-8 top-12 w-[150px] h-[150px] xxl:w-[200px] xxl:h-[200px] border-2 border-[#C7962D]/10 rounded-full"></div>
              <div className="absolute -left-12 bottom-24 w-[80px] h-[80px] xxl:w-[120px] xxl:h-[120px] border border-[#C7962D]/15 rounded-full"></div>

              <div className="relative rounded-[32px] overflow-hidden shadow-lg xxl:-mt-8">
                <div className="relative xxl:h-[820px] rounded-[32px] overflow-hidden border border-white/20">
                  <Image
                    src="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto:good,w_1920/v1/irani-hero-imgs/badda/clc1n3ihie3mtwwawudk"
                    alt="Badda's Chiya Experience"
                    fill
                    sizes="(max-width: 1280px) 95vw, (max-width: 1800px) 50vw, 960px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 xxl:w-24 xxl:h-24 rounded-full bg-[#C7962D]/60 flex items-center justify-center border-2 border-white/20">
                      <GiTeapot className="text-white text-3xl xxl:text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default memo(ClientJointVentureAbout);