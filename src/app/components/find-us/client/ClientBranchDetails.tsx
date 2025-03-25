"use client";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import { BranchType } from "../types";
import { memo } from "react";
interface ClientBranchDetailsProps {
  selectedBranch: BranchType;
}

function ClientBranchDetails({ selectedBranch }: ClientBranchDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 h-full flex flex-col justify-between"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-10 xs:opacity-12 sm:opacity-15 blur-[1px] xs:blur-[2px] sm:blur group-hover:opacity-15 xs:group-hover:opacity-18 sm:group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 bg-white/5 backdrop-blur-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
          <h4 className="font-lora text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            {selectedBranch.name}
          </h4>
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-white/80 font-quicksand">
            <p className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
              <FaMapMarkerAlt className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5 xs:mt-1" />
              <span className="line-clamp-2">
                {selectedBranch.address}
              </span>
            </p>
            <p className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
              <FaPhoneAlt className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0" />
              <span>{selectedBranch.phone}</span>
            </p>
            <p className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
              <FaClock className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0" />
              <span>{selectedBranch.hours}</span>
            </p>
          </div>
          <a
            href={selectedBranch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 mt-2 xs:mt-3 sm:mt-4 md:mt-5 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-[#C7962D] text-white text-xs xs:text-xs sm:text-sm md:text-base rounded-md xs:rounded-lg hover:bg-[#C7962D]/80 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#C7962D] focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
          >
            Get Directions
            <FaMapMarkerAlt className="text-xs xs:text-sm sm:text-base md:text-lg" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative group flex-grow"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-10 xs:opacity-12 sm:opacity-15 blur-[1px] xs:blur-[2px] sm:blur group-hover:opacity-15 xs:group-hover:opacity-18 sm:group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative h-full space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 bg-white/5 backdrop-blur-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
          <h4 className="font-lora text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
            <GiTeapot className="text-[#C7962D] text-base xs:text-lg sm:text-xl md:text-2xl" />
            Warm Welcome Awaits You
          </h4>
          <p className="text-white/80 font-quicksand text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Step into our cozy tea house where every cup tells a story.
            Our friendly staff is ready to serve you our signature Irani
            Chiya, prepared with love and tradition. Whether you're
            meeting friends or seeking a peaceful moment alone, we've
            saved a special spot just for you.
          </p>
          <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 pt-1 xs:pt-1.5 sm:pt-2">
            {[
              "Friendly Atmosphere",
              "Traditional Recipe",
              "Cozy Seating",
              "Free Wi-Fi",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1.5 md:py-2 bg-[#1B4D2E]/40 text-[#C7962D] rounded-full text-xs xs:text-xs sm:text-xs md:text-sm font-medium border border-[#C7962D]/30 hover:bg-[#1B4D2E]/60 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(ClientBranchDetails); 