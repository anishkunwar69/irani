"use client";
import { animate, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCoffee, FaLeaf, FaMugHot, FaUsers } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../Container";

function Number({ n }: { n: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(n.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNumber, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
      });

      return controls.stop;
    }
  }, [isInView, targetNumber]);

  return (
    <motion.span ref={ref} className="inline-block">
      {count}
    </motion.span>
  );
}

function OurStoryContent() {
  const stats = [
    { icon: FaUsers, number: "5000+", text: "Daily Customers" },
    { icon: FaMugHot, number: "13", text: "Premium Locations" },
    { icon: FaLeaf, number: "12+", text: "Signature Blends" },
    { icon: FaCoffee, number: "50000", text: "Monthly Servings" },
  ];

  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="relative space-y-12 xs:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-[#FFD700] rounded-full blur-[min(140px,15vw)] opacity-[0.15] sm:opacity-20"></div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-3 sm:mb-4 inline-flex items-center gap-1 xs:gap-2 sm:gap-3 justify-center">
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                  Our Legacy
                  <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                </h2>
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.2] sm:leading-tight max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
                  Crafting{" "}
                  <span className="text-[#C7962D] italic">Moments </span>
                  Since <span className="text-[#C7962D] italic">2022</span>
                </h3>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 3xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group order-1 3xl:order-2"
              >
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 via-[#1B4D2E]/20 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-70"></div>
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#FFD700]/50 to-[#1B4D2E]/50 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/demo.png"
                    alt="Irani Chiya Tea Experience"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F0E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 order-2 3xl:order-1"
              >
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-5 xs:p-6 sm:p-8 border border-white/10">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#FFD700] to-[#1B4D2E] rounded-2xl opacity-15 group-hover:opacity-20 blur"></div>
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

                <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-[#1B4D2E]/10 to-transparent rounded-xl blur-lg"></div>
                      <div className="relative space-y-1 xs:space-y-2 bg-white/5 backdrop-blur-xl p-3 xs:p-4 sm:p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 xs:gap-3">
                          <stat.icon className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFD700]" />
                          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora text-white font-bold">
                            <Number n={stat.number} />
                            {stat.number.includes("+") ? "+" : ""}
                          </p>
                        </div>
                        <p className="text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/70 font-quicksand font-medium">
                          {stat.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
