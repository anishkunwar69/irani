"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaMugHot, FaPhoneAlt } from "react-icons/fa";
import { HiChevronRight, HiX } from "react-icons/hi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container";

const BRANCH_IMAGE_PATH = "/branch.jpg";

type BranchLocation = {
  name: string;
  address: string;
  mapUrl: string;
  contact: string;
  hours: string;
  imgUrl: string;
  hasGoogleMaps: boolean;
  isCenter?: boolean;
};

const branchLocations: BranchLocation[] = [
  {
    name: "Irani Chiya - Main Branch",
    address: "Tinkune, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIwpHi5I27gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQl0ZWFfc3RvcmU&phdesc=R8YRAXBR-Y0&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVVPjBsAGes5MXLzzkuNjCPF&daddr=M8MW%2B974,+Subidha+Marg,+Kathmandu+44600",
    contact: "+977-9763596372",
    hours: "6:00 AM - 10:00 PM",
    imgUrl: "/branches/branch1.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Jadibuti",
    address: "Jadibuti, Kathmandu",
    mapUrl:
      "https://www.google.com/maps/dir//Kathmandu+44600/@27.6724266,85.2656097,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb198954b9ea11:0xfdc36dd62c528c08!2m2!1d85.3480065!2d27.6724534?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    contact: "+977-9849887974",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch22.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Lokanthali",
    address: "Lokanthali, Kathmandu",
    mapUrl:
      "https://www.google.com/maps/dir//M9C4%2BXMR,+Bhaktapur+44600/@27.6724515,85.2742364,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb1b005e6cd1f5:0x18105445f9806969!2m2!1d85.3566375!2d27.6724793?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    contact: "+977-9818791384",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch3.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Tikathali",
    address: "Tikathali, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIr6rH8s-ygIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=7g6-WLqNVWA&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYN4ElEAG-s5McrLW08wWk8m&daddr=Mahalaxmi+44600",
    contact: "+977-9851310532",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch4.jpg",
    hasGoogleMaps: true,
    isCenter: true,
  },
  {
    name: "Irani Chiya - Sinamangal",
    address: "Sinamangal, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIg9_99py9gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=9Yex5RGu8rE&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVPOFEsAGes5MWOiV-cQGCgb&daddr=M8XX%2B3PG,+Kathmandu+44600",
    contact: "+977-9849300844",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch33.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Baneshwor",
    address: "Bhimsengola Marga, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFI0NPcsaW7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=1TO3F6bfh7I&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KWuxMnQAGes5MblsGPBxC9OX&daddr=M8VV%2B8RF,+Bhimsengola+Marg,+Kathmandu+44600",
    contact: "+977-9767648218",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch44.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Imadol",
    address: "Bojepokhari, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIy9-d4Pm6gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=h25d7u2FR84&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYtjiFsAGes5MXhWuRT_XrPb&daddr=M87X%2B3HC,+Mahalaxmi+44705",
    contact: "+977-9807659081",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch8.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Chyasal",
    address: "Chyasal, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KeWKWwUAGes5MbErX1Pm2-MC&daddr=M8FP%2B22R,+Shahid+Shukra+Raj+Sadak+Paschim,+Lalitpur+44600",
    contact: "+977-9742831495",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch7.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Chabahil",
    address: "Chabahil, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KQtbkHwAGes5MfB3RjVxAwh_&daddr=P88W%2B8J9,+Kathmandu+44600",
    contact: "+977-9709737912",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch5.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Mahalaxmi",
    address: "Mahalaxmi, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIxPznmry7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQRjYWZl&phdesc=ukpzSAcLP_Y&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=Kb0koU4AF-s5MWR92ielfnxr&daddr=M84X%2BR7M,+Mahalaxmi",
    contact: "+977-9849136505",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch9.jpg",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Koteshwor",
    address: "Kotdevi Marga, Koteshwor",
    mapUrl: "",
    contact: "+977-9841107048",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch6.jpg",
    hasGoogleMaps: false,
  },
  {
    name: "Irani Chiya - Kapan",
    address: "Kapan, Kathmandu",
    mapUrl: "",
    contact: "+977-9764624248",
    hours: "6:00 AM - 9:00 PM",
    imgUrl: "/branches/branch10.jpg",
    hasGoogleMaps: false,
  },
];

const heroImages = [
  { src: "/showcase/sc1.jpg", alt: "Premium Tea Experience" },
  { src: "/showcase/sc4.jpg", alt: "Authentic Tea Culture" },
  { src: "/showcase/sc2.jpg", alt: "Relaxing Tea Environment" },
];

function HeroContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState<BranchLocation | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [particleStyles, setParticleStyles] = useState<Array<{top: string, left: string}>>([]);

  const heroRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  const particles = Array.from({ length: 12 }, (_, i) => i);

  useEffect(() => {
    setIsLoaded(true);

    // Generate random positions for particles only on client side
    setParticleStyles(
      particles.map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    );

    const preloadImages = () => {
      const imageUrls = [
        ...Array.from({ length: 10 }, (_, i) => `/branches/branch${i + 1}.jpg`),
        "/branches/branch22.jpg",
        "/branches/branch33.jpg",
        "/branches/branch44.jpg",
        "/showcase/sc1.jpg",
        "/showcase/sc2.jpg",
        "/showcase/sc4.jpg",
      ];

      imageUrls.forEach((url) => {
        const img = new window.Image();
        img.src = url;
      });
    };

    preloadImages();

    const handleHashLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener("click", handleHashLinkClick)
    );

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleHashLinkClick)
      );
    };
  }, []);

  const openBranchDialog = (branch: BranchLocation) => {
    setSelectedBranch(branch);
    setIsDialogOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeBranchDialog = () => {
    document.body.style.overflow = "";
    setIsDialogOpen(false);
    setTimeout(() => setSelectedBranch(null), 300);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div ref={heroRef} className="relative">
      {particles.map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoaded ? [0.1, 0.3, 0.1] : 0,
            // Only apply animation transforms after component is mounted
            x: isLoaded ? [0, Math.random() * 10 - 5] : 0,
            y: isLoaded ? [0, Math.random() * 10 - 5] : 0,
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            repeatType: "reverse",
          }}
          className="absolute w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#C7962D]/30"
          style={
            // Use static position for SSR and initial render, then apply dynamic styles after hydration
            isLoaded && particleStyles[i] 
              ? particleStyles[i] 
              : { top: "0%", left: "0%", opacity: 0 }
          }
        />
      ))}

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/10 backdrop-blur-lg bg-[#1B4D2E]/80 ${
          isDialogOpen ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <Container>
          <nav className="py-3 sm:py-4 lg:py-5 flex justify-between items-center">
            <Link href="/" className="group relative z-10">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Irani Chiya"
                  width={65}
                  height={65}
                  className="w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px] xl:w-[65px] h-auto mr-2"
                />
                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-lora text-white tracking-wide">
                  <span className="relative inline-block">
                    Irani
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#C7962D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <span className="text-[#C7962D] ml-1.5 relative inline-block">
                    Chiya
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </div>
              </motion.div>
            </Link>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden xl:flex items-center space-x-8"
            >
              {[
                "Our Story",
                "Gallery",
                "Testimonials",
                "Founder's Word",
                "Find Us",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={`#${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace("'", "")}`}
                    className="font-quicksand text-sm uppercase tracking-[0.2em] text-white/90 hover:text-[#C7962D] transition-all relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Link
                  href="/joint-venture"
                  className="font-quicksand text-sm uppercase tracking-[0.2em] text-[#C7962D] hover:text-[#DFB668] transition-all relative group"
                >
                  Badda's Chiya
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#DFB668] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </motion.div>
            </motion.div>

            <div className="xl:hidden">
              <button
                className="p-2 text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <FaMugHot className="text-white text-2xl sm:text-3xl" />
              </button>
            </div>
          </nav>
        </Container>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#1B4D2E]/95 backdrop-blur-lg border-b border-white/10 shadow-lg z-50 xl:hidden"
          >
            <div className="flex flex-col space-y-2 py-4 px-6">
              {[
                "Our Story",
                "Gallery",
                "Testimonials",
                "Founder's Word",
                "Find Us",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={`#${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace("'", "")}`}
                    className="font-quicksand text-sm sm:text-base py-2 uppercase tracking-wider text-white/90 hover:text-[#C7962D] transition-all block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/joint-venture"
                  className="font-quicksand text-sm sm:text-base py-2 uppercase tracking-wider text-[#C7962D] hover:text-[#DFB668] transition-all block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Badda's Chiya
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </header>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-8 xl:gap-x-12 pt-28 sm:pt-32 md:pt-36 xl:pt-40 pb-4 xl:pb-8">
          <div className="col-span-1 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 lg:max-w-none"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 sm:mb-6 lg:mb-8"
              >
                <div className="flex items-center">
                  <div className="h-px w-10 sm:w-14 md:w-16 lg:w-20 bg-gradient-to-r from-[#C7962D] to-[#C7962D]/20"></div>
                  <span className="ml-3 font-quicksand text-[#C7962D] tracking-wider uppercase text-base sm:text-lg md:text-lg lg:text-xl font-medium">
                    Welcome to{" "}
                    <b className="font-semibold md:relative md:inline-block md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-full md:after:h-0.5 md:after:bg-[#C7962D]/40">
                      Irani Chiya
                    </b>
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-[65px] lg:leading-[1.05] xl:text-[55px] xl:leading-[1] hero-2lg:text-6xl font-bold mb-5 sm:mb-7 md:mb-6 lg:mb-8 leading-tight text-white drop-shadow-sm md:drop-shadow-md"
              >
                <span className="block mb-2 sm:mb-3 md:mb-4">
                  Where Every Cup
                </span>
                <span>
                  Tells a{" "}
                  <span className="inline-block relative">
                    <span className="bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] bg-clip-text text-transparent md:drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                      Story
                    </span>
                    <motion.svg
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="absolute h-2.5 sm:h-3.5 md:h-4.5 lg:h-5 -bottom-1 left-0 w-full"
                      viewBox="0 0 100 10"
                    >
                      <path
                        d="M0,5 C30,15 70,-5 100,5"
                        fill="none"
                        stroke="#C7962D"
                        strokeWidth="2.5"
                      />
                    </motion.svg>
                  </span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "60%" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 bg-gradient-to-r from-[#C7962D]/90 to-transparent mb-6 sm:mb-7 hidden sm:block lg:block xl:hidden"
              />

              <div className="relative sm:before:absolute sm:before:-inset-1 md:before:-inset-2 sm:before:bg-[#C7962D]/5 md:before:bg-gradient-to-r md:before:from-[#C7962D]/10 md:before:to-transparent sm:before:rounded-xl sm:before:-z-10 sm:before:backdrop-blur-[20px] lg:before:backdrop-blur-[30px] lg:before:block xl:before:hidden">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-quicksand text-lg sm:text-xl sm:tracking-wide md:text-[22px] md:leading-[30px] md:tracking-wide md:font-normal md:px-3 md:py-4 lg:text-[28px] lg:leading-[1.5] lg:tracking-wide lg:font-normal lg:px-4 lg:py-5 xl:p-0 xl:text-lg hero-2lg:text-xl text-white/95 leading-relaxed mb-7 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10 w-full xl:max-w-lg"
                >
                  Step into a world where traditional tea craftsmanship meets
                  modern comfort and{" "}
                  <span className="text-[#DFB668]/95 font-medium sm:text-[#DFB668] sm:font-semibold sm:relative sm:border-b sm:border-[#DFB668]/30 md:border-none md:relative md:inline-flex md:px-1 md:before:absolute md:before:inset-0 md:before:bg-[#DFB668]/10 md:before:rounded md:before:-z-[1] lg:before:bg-transparent lg:font-semibold lg:text-[#DFB668]">
                    authentic heritage
                  </span>
                  . Our carefully curated selection of premium teas create an
                  elegant experience that delights the senses,{" "}
                  <span className="relative md:inline-flex md:px-1 md:mx-0.5 md:font-medium md:before:absolute md:before:inset-0 md:before:bg-[#C7962D]/10 md:before:rounded md:before:-z-[1] md:before:blur-[2px] md:text-white lg:relative lg:inline-flex lg:px-1 lg:mx-0.5 lg:before:absolute lg:before:inset-0 lg:before:bg-[#C7962D]/10 lg:before:rounded lg:before:-z-[1] lg:before:blur-[2px] lg:text-white xl:before:bg-transparent xl:px-0 xl:mx-0">
                    soothes the mind
                  </span>
                  , and enriches your day.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6"
              >
                <Link
                  href="#our-story"
                  className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 lg:py-4 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                >
                  <span className="absolute inset-0 bg-[#C7962D] shadow-sm sm:shadow-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] opacity-0 group-hover:opacity-100 group-active:opacity-90 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-lg md:text-xl font-medium text-white font-quicksand">
                    Our Story
                    <HiChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>

                <Link
                  href="#find-us"
                  className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 lg:py-4 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                >
                  <span className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300"></span>
                  <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/30 transition-colors duration-300"></span>
                  <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C7962D]/20 to-white/5 opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center text-sm sm:text-lg md:text-xl font-medium text-white font-quicksand">
                    Get in Touch
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10 sm:mt-12 md:mt-8 lg:mt-9 xl:mt-12 grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full lg:max-w-2xl xl:max-w-md max-md:mb-3 max-xl:mb-6
                "
              >
                {[
                  { value: "13+", label: "Branches" },
                  { value: "12+", label: "Varieties" },
                  { value: "5K+", label: "Daily Customers" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 bg-gradient-to-br from-[#C7962D]/15 to-transparent rounded-lg border border-[#C7962D]/15 shadow-sm shadow-[#C7962D]/5 lg:shadow-lg lg:shadow-[#C7962D]/10"
                  >
                    <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-lora font-bold text-[#C7962D] drop-shadow-sm lg:drop-shadow-md">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-white/80 font-quicksand mt-1.5 lg:mt-2 font-medium whitespace-nowrap">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="col-span-1 xl:col-span-7 relative z-0">
            <div className="absolute top-[10%] right-[10%] w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 xl:w-48 xl:h-48 bg-[#C7962D] rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[600px] xl:h-[700px] hero-2lg:h-[665px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-2xl opacity-30 blur"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>

              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] z-10 pointer-events-none"></div>

              <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={800}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<span class="${className} custom-pagination-bullet"></span>`;
                  },
                }}
                loop={true}
                className="w-full h-full hero-carousel"
              >
                {heroImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F0E]/60 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <svg
                className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-16 xl:h-16 text-[#C7962D]/30 z-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M0 0L100 0L100 100"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-0 mb-12 sm:mb-16 xl:mb-20 relative"
        >
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-[#C7962D]/30 to-[#C7962D]/50"></div>
          <div className="absolute left-1/2 -top-5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C7962D]/70"></div>

          <div className="text-center mb-7 sm:mb-10 xl:mb-[42px]">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-[#C7962D]/70"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#C7962D]/40"></div>
              <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-[#C7962D]/70"></div>
            </div>

            <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block mb-2">
              <span className="relative">
                Find Your Perfect Tea{" "}
                <span className="text-[#C7962D] italic">Haven</span>
                <motion.div
                  className="absolute -top-1.5 sm:-top-2 -right-2 sm:-right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C7962D]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </h2>

            <p className="font-quicksand text-[#C7962D] tracking-wider text-xs sm:text-base max-w-2xl mx-auto opacity-80">
              Discover our welcoming spaces across the city, each with its own
              unique character yet the same commitment to excellence
            </p>
          </div>

          <div className="relative px-3 sm:px-6 md:px-8 xl:px-12">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#C7962D]/10 to-transparent rounded-xl opacity-70 blur-[2px]"></div>
            </div>

            <button className="swiper-branch-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="swiper-branch-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div className="py-8 sm:py-10 px-3 sm:px-4">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1.2}
                navigation={{
                  prevEl: ".swiper-branch-prev",
                  nextEl: ".swiper-branch-next",
                }}
                onSlideChange={handleSlideChange}
                className="branch-slider"
                breakpoints={{
                  480: { slidesPerView: 1.5, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2.5, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                  1280: { slidesPerView: 4, spaceBetween: 24 },
                }}
              >
                {branchLocations.map((branch, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="relative h-56 sm:h-60 md:h-64 rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => openBranchDialog(branch)}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg opacity-30 blur-[1px] group-hover:opacity-50 transition-opacity"></div>

                      <div className="relative h-full rounded-lg overflow-hidden border border-white/10">
                        <Image
                          src={branch.imgUrl || "/branch.jpg"}
                          alt={`${branch.name} - ${branch.address}`}
                          fill
                          className="object-cover object-center transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <h3 className="font-lora text-white text-base sm:text-lg font-medium mb-0.5 truncate">
                            {branch.name}
                          </h3>
                          <p className="text-white/80 text-xs sm:text-sm mb-2 truncate">
                            {branch.address}
                          </p>
                          <button
                            className="text-xs px-3 py-1.5 bg-[#C7962D]/90 hover:bg-[#C7962D] text-white rounded-full transition-all duration-300 inline-flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              openBranchDialog(branch);
                            }}
                          >
                            View Details
                            <HiChevronRight className="ml-1 w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDialogOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8 ${
          isDialogOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${
            isDialogOpen ? "" : "pointer-events-none"
          }`}
          onClick={closeBranchDialog}
        ></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: isDialogOpen ? 1 : 0,
            scale: isDialogOpen ? 1 : 0.9,
            y: isDialogOpen ? 0 : 20,
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
          className="relative w-full max-w-4xl bg-gradient-to-br from-[#3D6A37]/95 via-[#2D5A27]/90 to-[#34895B]/85 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] hero-2lg:max-h-[95vh] flex flex-col"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-15">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M50 10C60 25 80 25 90 20C85 40 70 55 50 60C30 55 15 40 10 20C20 25 40 25 50 10Z"
                fill="#C7962D"
              />
            </svg>
          </div>

          <div
            onClick={closeBranchDialog}
            className="absolute top-4 right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-lg"
            role="button"
            aria-label="Close dialog"
          >
            <HiX className="w-5 h-5 text-white pointer-events-none" />
          </div>

          {selectedBranch && (
            <div className="flex flex-col h-full overflow-auto hero-2lg:overflow-visible">
              <div className="w-full overflow-hidden max-hero-2lg:hidden hero-2lg:relative">
                <motion.div
                  key={selectedBranch.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-[400px] sm:h-[600px] md:h-[400px] lg:h-[500px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={selectedBranch.imgUrl || "/branch.jpg"}
                      alt={selectedBranch.name}
                      fill
                      className={`object-cover ${
                        selectedBranch.isCenter ? "object-center" : "object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#336644]/70 via-[#336644]/30 to-transparent"></div>
                  </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  <motion.div
                    key={`title-${selectedBranch.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                      {selectedBranch.name}
                    </h2>
                    <div className="flex items-center mt-3 bg-black/20 backdrop-blur-sm rounded-full py-1.5 px-3 w-fit shadow-lg border border-white/10">
                      <FaMapMarkerAlt className="w-4 h-4 text-[#C7962D]" />
                      <p className="ml-2 text-white/90 text-sm sm:text-base font-quicksand">
                        {selectedBranch.address}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="hidden hero-2lg:block h-1 w-full bg-gradient-to-r from-[#C7962D]/80 via-[#DFB668] to-[#C7962D]/80 shadow-[0_0_8px_rgba(199,150,45,0.6)]"></div>

              <div className="flex justify-center items-center gap-4 py-3 bg-[#1B4D2E]/80 border-y border-[#C7962D]/30 max-hero-2lg:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = branchLocations.findIndex(
                      (b) => b.name === selectedBranch.name
                    );
                    const prevIndex =
                      currentIndex > 0
                        ? currentIndex - 1
                        : branchLocations.length - 1;
                    setSelectedBranch(branchLocations[prevIndex]);
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-md group"
                  aria-label="Previous branch"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <div className="flex space-x-1.5 sm:space-x-2">
                  {branchLocations.map((branch, index) => {
                    const isActive = branch.name === selectedBranch.name;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedBranch(branch)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#C7962D] scale-110 shadow-[0_0_8px_rgba(199,150,45,0.6)]"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`View ${branch.name}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = branchLocations.findIndex(
                      (b) => b.name === selectedBranch.name
                    );
                    const nextIndex =
                      currentIndex < branchLocations.length - 1
                        ? currentIndex + 1
                        : 0;
                    setSelectedBranch(branchLocations[nextIndex]);
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-md group"
                  aria-label="Next branch"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 sm:p-8 flex-1 overflow-y-auto hero-2lg:overflow-visible bg-gradient-to-b from-transparent to-black/5">
                <motion.div
                  key={`content-${selectedBranch.name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 hero-2lg:gap-4"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-lora text-xl text-[#C7962D] font-semibold mb-3 flex items-center">
                        <span className="mr-2 w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                        Contact Information
                      </h3>
                      <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-[#C7962D]/10 rounded-full flex items-center justify-center">
                            <FaPhoneAlt className="w-4 h-4 text-[#C7962D]" />
                          </div>
                          <div className="ml-4">
                            <p className="text-white/90 font-quicksand text-lg">
                              {selectedBranch.contact}
                            </p>
                            <p className="text-white/60 text-sm mt-1">
                              Tap to call
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-lora text-xl text-[#C7962D] font-semibold mb-3 flex items-center">
                        <span className="mr-2 w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                        Opening Hours
                      </h3>
                      <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-[#C7962D]/10 rounded-full flex items-center justify-center">
                            <FaClock className="w-4 h-4 text-[#C7962D]" />
                          </div>
                          <div className="ml-4">
                            <p className="text-white/90 font-quicksand text-lg">
                              {selectedBranch.hours}
                            </p>
                            <p className="text-white/60 text-sm mt-1">
                              Daily operating hours
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h3 className="font-lora text-xl text-[#C7962D] font-semibold mb-3 flex items-center">
                      <span className="mr-2 w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                      Directions
                    </h3>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                      {selectedBranch.hasGoogleMaps ? (
                        <>
                          <div className="mb-4 flex items-start">
                            <p className="text-white/80 font-quicksand">
                              Get directions to visit our{" "}
                              {selectedBranch.name.split(" - ")[1]} branch and
                              enjoy our premium tea experience.
                            </p>
                          </div>

                          <a
                            href={selectedBranch.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto group relative px-5 py-3 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E] self-start"
                          >
                            <span className="absolute inset-0 bg-[#C7962D]"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] opacity-0 group-hover:opacity-100 group-active:opacity-90 transition-opacity duration-300"></span>
                            <span className="relative flex items-center justify-center gap-1.5 text-base font-medium text-white">
                              Open in Google Maps
                              <HiChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </a>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#B45309"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                />
                              </svg>
                            </div>
                            <p className="text-amber-200 font-quicksand font-medium">
                              Google Maps directions unavailable
                            </p>
                          </div>
                          <p className="text-white/80 font-quicksand mb-4 ml-1">
                            Directions to this branch are not available through
                            Google Maps at the moment. Please contact us
                            directly for assistance.
                          </p>
                          <div className="mt-auto flex items-center text-[#C7962D] text-base p-3 bg-[#C7962D]/10 rounded-xl">
                            <FaPhoneAlt className="w-4 h-4 mr-3" />
                            <p className="font-medium">
                              Call for directions:{" "}
                              <span className="text-white/90">
                                {selectedBranch.contact}
                              </span>
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C7962D]/30 to-transparent rounded-full"></div>
                  <div className="text-white/60 text-sm whitespace-nowrap mx-3">
                    {branchLocations.findIndex(
                      (b) => b.name === selectedBranch.name
                    ) + 1}{" "}
                    / {branchLocations.length}
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C7962D]/30 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroContent;
