"use client";
import { motion } from "framer-motion";
import FindUsContent from "../components/find-us/FindUsContent";

function FindUs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative overflow-hidden z-10"
      id="find-us"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03] xs:opacity-[0.05] sm:opacity-[0.06] md:opacity-[0.08] lg:opacity-10"></div>

        <div className="absolute top-[5vh] xs:top-[10vh] sm:top-[15vh] md:top-[20vh] lg:top-40 right-[5%] sm:right-[8%] lg:right-[10%] xl:right-20 w-[60vw] h-[60vw] xs:w-[50vw] xs:h-[50vw] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
          <div className="absolute inset-0 bg-[#C7962D] rounded-full blur-[60px] xs:blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] opacity-[0.05] xs:opacity-[0.06] sm:opacity-[0.08] md:opacity-10 lg:opacity-15 animate-float"></div>
        </div>
        <div className="absolute -bottom-[10vh] xs:-bottom-[5vh] left-[5%] sm:left-[8%] lg:left-[10%] xl:left-20 w-[50vw] h-[50vw] xs:w-[45vw] xs:h-[45vw] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <div className="absolute inset-0 bg-[#2D5A27] rounded-full blur-[50px] xs:blur-[65px] sm:blur-[80px] md:blur-[100px] lg:blur-[130px] opacity-[0.05] xs:opacity-[0.06] sm:opacity-[0.08] md:opacity-10 lg:opacity-15 animate-float-delay"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-[0.5px] xs:h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[0.5px] xs:h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 to-transparent"></div>
      </div>
      <FindUsContent />
    </motion.section>
  );
}

export default FindUs;
