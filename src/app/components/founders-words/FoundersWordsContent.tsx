"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaSignature } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";

function FoundersWordsContent() {
  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xs:w-[min(300px,80vw)] xs:h-[min(300px,80vw)] sm:w-[min(350px,70vw)] sm:h-[min(350px,70vw)] md:w-[400px] md:h-[400px] bg-[#FFD700] rounded-full blur-[70px] xs:blur-[90px] sm:blur-[110px] md:blur-[140px] lg:blur-[180px] opacity-[0.08] xs:opacity-[0.1] sm:opacity-[0.12] md:opacity-[0.15] lg:opacity-20"></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
              A Cup of Wisdom
              <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
            </h2>
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
              From the <span className="text-[#C7962D] italic">Founder's</span>{" "}
              Heart
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 min-[1539px]:grid-cols-5 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
          <div className="absolute left-0 top-1/4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 opacity-5 xs:opacity-8 sm:opacity-10 bg-[url('/tea-leaf-pattern.png')] bg-contain bg-no-repeat transform -rotate-12 hidden md:block"></div>

          <div className="absolute right-0 bottom-1/4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 opacity-5 xs:opacity-8 sm:opacity-10 bg-[url('/tea-leaf-pattern.png')] bg-contain bg-no-repeat transform rotate-12 hidden md:block"></div>

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
                    src="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/founder/rcqkcs1jscimtefb7kev"
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
        </div>
      </Container>
    </div>
  );
}

export default FoundersWordsContent;
