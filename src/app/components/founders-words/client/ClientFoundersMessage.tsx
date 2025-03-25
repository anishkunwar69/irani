"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { FaQuoteLeft, FaSignature } from "react-icons/fa";

function ClientFoundersMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-[1539px]:col-span-3 flex flex-col justify-center mt-4 xs:mt-5 sm:mt-6 md:mt-8 min-[1539px]:mt-0"
    >
      <div className="relative group h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-10 xs:opacity-12 sm:opacity-15 group-hover:opacity-15 xs:group-hover:opacity-18 sm:group-hover:opacity-20 blur-[1px] xs:blur-[2px] sm:blur transition-opacity duration-300"></div>

        <div className="relative h-full bg-white/5 backdrop-blur-sm p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <FaQuoteLeft className="text-[#C7962D] text-xl xs:text-2xl sm:text-3xl md:text-4xl opacity-70 xs:opacity-75 sm:opacity-80" />

            <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5 lg:space-y-6 pl-1 xs:pl-1.5 sm:pl-2 border-l border-[#C7962D]/20 xs:border-l-2 xs:border-[#C7962D]/30">
              <p className="text-white/90 text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl font-lora leading-relaxed italic">
                My journey with tea began over two decades ago, eventually
                shaping a simple vision: to bring the authentic taste of
                Irani tea to Nepal. Each cup we serve today carries that
                same commitment to quality, tradition, and excellence.
              </p>

              <p className="text-white/80 text-sm xs:text-sm sm:text-base md:text-lg font-quicksand leading-relaxed">
                When I established Irani Chiya, I wanted to create more than
                just a tea house. I envisioned a sanctuary where people
                could pause, connect, and experience the rich heritage of
                tea culture. Our growth from a single modest shop to
                multiple branches across the valley reflects not our
                success, but the community's embrace of our passion.
              </p>

              <p className="text-white/80 text-sm xs:text-sm sm:text-base md:text-lg font-quicksand leading-relaxed">
                What truly fulfills me is witnessing the community that has formed around our tea houses—students engaging in deep conversations, families creating memories, and individuals finding moments of tranquility. This connection between people, facilitated by something as simple yet profound as a cup of tea, is what drives us forward every day.
              </p>

              <p className="text-white/80 text-sm xs:text-sm sm:text-base md:text-lg font-quicksand leading-relaxed">
                Every day, I'm reminded that what we serve isn't merely
                tea—it's a carefully crafted experience, a moment of warmth
                and clarity in a busy world. As we continue to grow, my
                promise to you remains unchanged: we will never compromise
                on the quality that made you choose us in the first place.
              </p>
            </div>
          </div>

          <div className="mt-4 xs:mt-6 sm:mt-8 md:mt-10 flex flex-col items-end">
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 text-[#C7962D]">
              <FaSignature className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              <span className="font-satisfy text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl">
                Saroj Paudel
              </span>
            </div>
            <p className="text-white/70 text-sm xs:text-sm sm:text-base font-quicksand mt-0.5 xs:mt-1 font-medium">
              Founder & Visionary
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 

export default memo(ClientFoundersMessage);
