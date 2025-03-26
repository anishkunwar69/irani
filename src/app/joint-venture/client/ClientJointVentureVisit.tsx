"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";
import { memo } from "react";

// Improved lazy-loading with optimized loading state
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-[#14391F] rounded-lg flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

function ClientJointVentureVisit() {
  const visitRef = useRef(null);
  const visitInView = useInView(visitRef, { once: true, amount: 0.2 });

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
      className="w-full bg-[#1B4D2E] relative py-14 xs:py-16 sm:py-18 md:py-20"
    >
      {/* Simplified background pattern for better LCP */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>

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
              <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                Find Our Joint Venture
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              </h2>
              <h3 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
                Visit{" "}
                <span className="text-[#C7962D] italic">Badda's Chiya</span>
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 min-[1171px]:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="relative h-[500px] min-[1171px]:h-full rounded-[24px] overflow-hidden border border-white/10">
              <div className="relative z-[1] h-full">
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
              className="bg-[#14391F] rounded-[24px] border border-white/15 overflow-hidden h-full flex flex-col"
            >
              <div className="bg-[#C7962D]/20 p-6 sm:p-8 border-b border-white/10">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-white/90 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#C7962D]" />
                  {baddaChiyaLocation.name}
                </h4>
              </div>

              <div className="p-6 sm:p-8 flex-1 space-y-6 sm:space-y-8">
                <div className="bg-[#193f23] rounded-2xl p-5 sm:p-6 border border-white/10">
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

                <div className="bg-[#193f23] rounded-2xl p-5 sm:p-6 border border-white/10">
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

                <div className="bg-[#193f23] rounded-2xl p-5 sm:p-6 border border-white/10">
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
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#C7962D] hover:bg-[#C7962D]/90 text-white font-medium rounded-full transition-all"
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

export default memo(ClientJointVentureVisit); 