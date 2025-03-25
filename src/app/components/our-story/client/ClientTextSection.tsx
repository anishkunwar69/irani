"use client";
import { m } from "framer-motion";
import { ReactNode, memo } from "react";

const animationVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

function ClientTextSection({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationVariants}
      transition={{ duration: 0.8 }}
      className="space-y-8 order-2 3xl:order-1"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D2E]/10 to-transparent rounded-2xl blur-lg"></div>
        <div className="relative space-y-1 xs:space-y-2 bg-white/5 backdrop-blur-xl p-5 xs:p-6 sm:p-8 rounded-2xl border border-white/10">
          <p className="text-base xs:text-base sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-quicksand">
            <span className="text-[#FFD700] font-semibold">
              Irani Chiya
            </span>{" "}
            began its remarkable journey in{" "}
            <span className="text-[#FFD700] font-semibold">2022</span>,
            driven by an unwavering vision to revolutionize Nepal's tea
            culture. Our story is one of passion, innovation, and an
            undying commitment to excellence. Each cup we serve is a
            testament to our dedication to creating extraordinary tea
            experiences that transcend the ordinary.
          </p>
        </div>
      </div>

      {children}
    </m.div>
  );
}

export default memo(ClientTextSection); 