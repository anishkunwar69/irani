"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaHeart,
  FaInstagram,
  FaLeaf,
  FaMapMarkerAlt,
  FaMugHot,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "./Container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#C7962D] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.08] xs:opacity-[0.09] sm:opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 max-w-full max-h-full w-52 xs:w-64 sm:w-72 md:w-80 lg:w-96 h-52 xs:h-64 sm:h-72 md:h-80 lg:h-96 bg-white rounded-full blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] opacity-[0.08] xs:opacity-[0.09] sm:opacity-10"></div>
        <div className="absolute bottom-0 left-0 max-w-full max-h-full w-52 xs:w-64 sm:w-72 md:w-80 lg:w-96 h-52 xs:h-64 sm:h-72 md:h-80 lg:h-96 bg-[#1B4D2E] rounded-full blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] opacity-[0.08] xs:opacity-[0.09] sm:opacity-10"></div>
      </div>

      <Container className="w-full">
        <div className="relative w-full pt-10 xs:pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="relative group cursor-pointer">
                <div className="text-2xl sm:text-2xl md:text-3xl font-lora tracking-wide flex items-center">
                  <span className="text-white">Irani</span>
                  <span className="text-[#1B4D2E] ml-1 sm:ml-2">Chiya</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-quicksand leading-relaxed">
                Where tradition meets innovation in every cup. Experience the
                warmth of authentic tea culture in a modern setting.
              </p>
              <p className="text-sm sm:text-base text-white/90 font-quicksand leading-relaxed">
                Each cup is crafted with care using traditional methods passed
                down through generations, creating an authentic experience that
                honors our rich heritage while embracing modern comforts.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {[FaInstagram, FaTiktok].map((Icon, index) => (
                  <a
                    key={index}
                    href={
                      index === 0
                        ? "https://www.instagram.com/iranichiyaa/"
                        : "https://www.tiktok.com/@iranichiya?_t=ZS-8uwYz8LEckh&_r=1"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 duration-300"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <Icon className="text-white text-base sm:text-lg" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-lora text-white">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                    Navigation
                  </h4>
                  {["Our Story", "Gallery", "Find Us", "Testimonials"].map(
                    (item) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-sm sm:text-base text-white/80 hover:text-white font-quicksand transition-colors hover:translate-x-1 duration-300"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                    Information
                  </h4>
                  {["Menu", "Branches", "Careers", "Joint Venture"].map(
                    (item) => (
                      <Link
                        key={item}
                        href={
                          item === "Joint Venture"
                            ? "/joint-venture"
                            : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        className="block text-sm sm:text-base text-white/80 hover:text-white font-quicksand transition-colors hover:translate-x-1 duration-300"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-lora text-white">
                Contact Us
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    text: "Tinkune, Kathmandu",
                    label: "Main Branch",
                    link: "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIwpHi5I27gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQl0ZWFfc3RvcmU&phdesc=R8YRAXBR-Y0&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVVPjBsAGes5MXLzzkuNjCPF&daddr=M8MW%2B974,+Subidha+Marg,+Kathmandu+44600",
                  },
                  {
                    icon: FaPhoneAlt,
                    text: "+977-9851231993",
                    label: "Customer Service",
                  },
                  {
                    icon: FaEnvelope,
                    text: "irani.chiya979@gmail.com",
                    label: "Email Us",
                  },
                  {
                    icon: FaClock,
                    text: "6:00 AM - 9:00 PM",
                    label: "Business Hours",
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                      {item.label}
                    </h4>
                    <div className="flex items-center space-x-2 sm:space-x-3 text-white/80 group-hover:text-white transition-colors duration-300">
                      <item.icon className="text-[#1B4D2E] text-sm sm:text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-quicksand hover:underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base font-quicksand">
                          {item.text}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-lora text-white">
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaLeaf className="text-[#1B4D2E] text-lg mt-0.5" />
                  <div>
                    <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                      Quality Sourcing
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm font-quicksand">
                      Carefully selected premium tea leaves
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMugHot className="text-[#1B4D2E] text-lg mt-0.5" />
                  <div>
                    <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                      Authentic Recipes
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm font-quicksand">
                      Traditional methods with modern twists
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHeart className="text-[#1B4D2E] text-lg mt-0.5" />
                  <div>
                    <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                      Community Focus
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm font-quicksand">
                      Creating spaces for connection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GiTeapot className="text-[#1B4D2E] text-lg mt-0.5" />
                  <div>
                    <h4 className="text-white font-quicksand font-semibold text-sm sm:text-base">
                      Tea Innovation
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm font-quicksand">
                      Continuously crafting new blends
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 sm:pt-7 md:pt-8 border-t border-white/20 w-full"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full">
              <p className="text-white/80 font-quicksand text-xs sm:text-sm order-2 sm:order-1">
                © {year}{" "}
                <span className="text-white font-quicksand font-semibold text-sm sm:text-base">
                  Irani Chiya
                </span>
                . All rights reserved.
              </p>
              <div className="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-4 md:space-x-6 order-1 sm:order-2">
                <div className="flex space-x-4 sm:space-x-6">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-quicksand transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-quicksand transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-quicksand transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
                <p className="text-white/40 text-xs font-quicksand">
                  Map data ©{" "}
                  <a
                    href="https://www.openstreetmap.org/copyright"
                    className="hover:text-white/60 transition-colors"
                  >
                    OpenStreetMap
                  </a>{" "}
                  contributors
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
