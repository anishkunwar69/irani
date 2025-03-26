"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

function ClientFoundersImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-[1539px]:col-span-2 flex flex-col justify-center"
    >
      <div className="relative group">
        <div className="absolute -inset-1 xs:-inset-1.5 sm:-inset-2 bg-gradient-to-br from-[#C7962D] to-[#8B7513] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-40 xs:opacity-45 sm:opacity-50 blur-[2px] xs:blur-[3px] sm:blur-sm group-hover:opacity-60 xs:group-hover:opacity-65 sm:group-hover:opacity-70 transition-all duration-700"></div>

        <div className="relative h-full overflow-hidden rounded-lg xs:rounded-xl sm:rounded-xl border border-[#C7962D]/30 xs:border-2 xs:border-[#C7962D]/40">
          <div className="aspect-[4/5] relative w-full h-full">
            <Image
              src="/founder.jpeg"
              alt="Founder of Irani Chiya"
              fill
              className="object-cover object-center rounded-lg xs:rounded-xl transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-60"></div>

            <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-5 md:p-6 text-center">
              <div className="inline-block bg-black/60 backdrop-blur-sm px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-full border border-[#C7962D]/30">
                <h4 className="text-white font-lora font-bold text-base xs:text-lg sm:text-xl">
                  Saroj Paudel
                </h4>
                <p className="text-[#C7962D] text-xs xs:text-sm sm:text-sm font-quicksand tracking-wider">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 

export default memo(ClientFoundersImage);   