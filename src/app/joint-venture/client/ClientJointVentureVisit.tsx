"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";

const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-white/5 rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
  ssr: false,
});

export default function ClientJointVentureVisit() {
  const visitRef = useRef(null);
  const visitInView = useInView(visitRef, { once: true, amount: 0.2 });

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
    hours: "6:00 AM - 9:00 PM",
    coordinates: { lat: 27.7042088, lng: 85.3307079 },
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
  };

  return (
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
  );
} 