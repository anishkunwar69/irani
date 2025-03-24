"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { FaClock, FaLeaf, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../components/Container";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-white/5 rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
  ssr: false,
});

function JointVentureContent() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const visitRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const visitInView = useInView(visitRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const baddaChiyaLocation = {
    name: "Badda's Chiya",
    address: "Ghattekulo Marga, Kathmandu 44600, Nepal",
    phone: "+977-9764582552",
    hours:
     "6:00 AM - 9:00 PM",
    coordinates: { lat: 27.7042088, lng: 85.3307079 },
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
  };

  return (
    <>
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

      <section
        id="about"
        ref={aboutRef}
        className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative xxl:py-24 py-14 xs:py-16 sm:py-18 md:py-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.08] sm:opacity-10"></div>

          <div className="absolute top-40 right-[5%] sm:right-[10%] lg:right-20 w-[min(600px,90vw)] h-[min(600px,90vw)] sm:w-[600px] sm:h-[600px]">
            <div className="absolute inset-0 bg-[#C7962D] rounded-full blur-[120px] sm:blur-[150px] opacity-10 sm:opacity-15 animate-float"></div>
          </div>
          <div className="absolute -bottom-20 left-[5%] sm:left-[10%] lg:left-20 w-[min(500px,80vw)] h-[min(500px,80vw)] sm:w-[500px] sm:h-[500px]">
            <div className="absolute inset-0 bg-[#2D5A27] rounded-full blur-[100px] sm:blur-[130px] opacity-10 sm:opacity-15 animate-float-delay"></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
        </div>

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
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                  Our Joint Venture
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                </h2>
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-3xl mx-auto px-1 xs:px-2 sm:px-0">
                  <span className="text-[#C7962D] italic">Badda's Chiya</span> -
                  The Perfect{" "}
                  <span className="text-[#C7962D] italic">Fusion</span>
                </h3>
              </div>

              <div className="relative w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-[28px] opacity-30 blur-sm"></div>
                <div className="relative backdrop-blur-sm bg-white/5 rounded-[28px] border border-white/10 p-2 sm:p-3">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="aspect-[16/9] sm:aspect-[21/9]">
                      <Image
                        src="/jv.jpg"
                        alt="Badda's Chiya Experience"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                      <div className="hidden md:flex items-center gap-3 mb-3">
                        <div className="bg-[#C7962D]/20 p-2 rounded-full backdrop-blur-md">
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
                      <div className="bg-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-1 bg-gradient-to-b from-[#C7962D] to-transparent rounded-full"></div>
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
                      <div className="bg-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-1 bg-gradient-to-b from-[#C7962D] to-transparent rounded-full"></div>
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
                      className="px-8 py-3 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-glow-sm flex items-center gap-2"
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
                    <div className="absolute top-1/2 left-1/2 xxl:left-0 -translate-x-1/2 xxl:-translate-x-1/4 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] sm:w-[400px] sm:h-[400px] xxl:w-[450px] xxl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] bg-[#C7962D] rounded-full blur-[120px] sm:blur-[180px] xxl:blur-[200px] opacity-15 sm:opacity-20 xxl:opacity-25"></div>

                    <div className="relative z-10">
                      <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xxl:text-2xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                        <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl xxl:text-4xl animate-bounce" />
                        Our Joint Venture
                        <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl xxl:text-4xl animate-bounce" />
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
                            <span className="absolute -bottom-2 xxl:-bottom-3 left-0 w-full h-[3px] bg-gradient-to-r from-[#C7962D] to-transparent"></span>
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
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C7962D] to-[#C7962D]/90 text-white font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-glow-md hover:brightness-110"
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
                <div className="absolute -right-8 top-12 w-[150px] h-[150px] xxl:w-[200px] xxl:h-[200px] border-4 border-[#C7962D]/10 rounded-full"></div>
                <div className="absolute -left-12 bottom-24 w-[80px] h-[80px] xxl:w-[120px] xxl:h-[120px] border-2 border-[#C7962D]/15 rounded-full"></div>

                <div className="relative rounded-[32px] overflow-hidden shadow-2xl xxl:-mt-8">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-[32px] opacity-40 blur-md"></div>
                  <div className="relative xxl:h-[820px] rounded-[32px] overflow-hidden border border-white/20">
                    <Image
                      src="/jv.jpg"
                      alt="Badda's Chiya Experience"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -left-8 bottom-20 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-[280px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#C7962D]/20 p-2.5 rounded-full">
                      <GiTeapot className="text-[#C7962D] text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">
                        Est. 2022
                      </h4>
                    </div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">
                    Bringing authentic Irani tea tradition to a wider audience
                    with our special joint venture.
                  </p>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section
        id="visit"
        ref={visitRef}
        className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative py-14 xs:py-16 sm:py-18 md:py-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.08] sm:opacity-10"></div>

          <div className="absolute top-40 right-[5%] sm:right-[10%] lg:right-20 w-[min(600px,90vw)] h-[min(600px,90vw)] sm:w-[600px] sm:h-[600px]">
            <div className="absolute inset-0 bg-[#C7962D] rounded-full blur-[120px] sm:blur-[150px] opacity-10 sm:opacity-15 animate-float"></div>
          </div>
          <div className="absolute -bottom-20 left-[5%] sm:left-[10%] lg:left-20 w-[min(500px,80vw)] h-[min(500px,80vw)] sm:w-[500px] sm:h-[500px]">
            <div className="absolute inset-0 bg-[#2D5A27] rounded-full blur-[100px] sm:blur-[130px] opacity-10 sm:opacity-15 animate-float-delay"></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
        </div>

        <Container className="relative">
          <motion.div
            initial="hidden"
            animate={visitInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative space-y-12 xs:space-y-16"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 xs:mb-12 sm:mb-16 relative"
            >
              <div className="relative flex flex-col items-center justify-center mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xs:w-[min(300px,80vw)] xs:h-[min(300px,80vw)] sm:w-[min(350px,70vw)] sm:h-[min(350px,70vw)] md:w-[400px] md:h-[400px] bg-[#C7962D] rounded-full blur-[70px] xs:blur-[90px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] opacity-[0.08] xs:opacity-[0.1] sm:opacity-[0.15] md:opacity-[0.18] lg:opacity-20"></div>
                <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                  Find Our Joint Venture
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                </h2>
                <h3 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
                  Visit{" "}
                  <span className="text-[#C7962D] italic">Badda's Chiya</span>
                </h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 min-[1171px]:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="relative h-[500px] min-[1171px]:h-full rounded-[24px] overflow-hidden border border-white/10">
                <div className="relative z-[10] h-full">
                  <MapComponent
                    center={[
                      baddaChiyaLocation.coordinates.lat,
                      baddaChiyaLocation.coordinates.lng,
                    ]}
                    zoom={15}
                    style={mapContainerStyle}
                    scrollWheelZoom={false}
                    className="h-full w-full rounded-[24px]"
                  />
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md rounded-[24px] border border-white/15 overflow-hidden h-full flex flex-col"
              >
                <div className="bg-gradient-to-r from-[#C7962D]/20 to-transparent p-6 sm:p-8 border-b border-white/10">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-white/90 flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#C7962D]" />
                    {baddaChiyaLocation.name}
                  </h4>
                </div>

                <div className="p-6 sm:p-8 flex-1 space-y-6 sm:space-y-8">
                  <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#C7962D]/10 p-3 rounded-full mt-0.5">
                        <FaMapMarkerAlt className="text-[#C7962D] text-xl" />
                      </div>
                      <div>
                        <h5 className="text-[#e3a92d] font-semibold text-lg sm:text-xl mb-1 font-lora">
                          Address
                        </h5>
                        <p className="text-white/80 font-quicksand text-base sm:text-lg">
                          {baddaChiyaLocation.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#C7962D]/10 p-3 rounded-full mt-0.5">
                        <FaPhoneAlt className="text-[#C7962D] text-xl" />
                      </div>
                      <div>
                        <h5 className="text-[#e3a92d] font-semibold text-lg sm:text-xl mb-1 font-lora">
                          Phone
                        </h5>
                        <p className="text-white/80 font-quicksand text-base sm:text-lg">
                          {baddaChiyaLocation.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#C7962D]/10 p-3 rounded-full mt-0.5">
                        <FaClock className="text-[#C7962D] text-xl" />
                      </div>
                      <div>
                        <h5 className="text-[#e3a92d] font-semibold text-lg sm:text-xl mb-1 font-lora">
                          Opening Hours
                        </h5>
                        <div className="text-white/80 font-quicksand text-base sm:text-lg whitespace-pre-line">
                          {baddaChiyaLocation.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-6 sm:p-8 pt-0 sm:pt-0 border-t border-white/10">
                  <a
                    href={`https://maps.google.com/?q=${baddaChiyaLocation.coordinates.lat},${baddaChiyaLocation.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-glow-sm"
                  >
                    <FaMapMarkerAlt />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default JointVentureContent;
