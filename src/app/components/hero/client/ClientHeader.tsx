"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, memo } from "react";
import { FaMugHot } from "react-icons/fa";
import Container from "../../Container";

const ClientHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);
  
  useEffect(() => {
    const handleHashLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target?.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          });
          setMobileMenuOpen(false);
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      if ((e.target as Element).tagName === 'A' && 
          (e.target as HTMLAnchorElement).getAttribute('href')?.startsWith('#')) {
        handleHashLinkClick(e);
      }
    };

    document.addEventListener("click", handleClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const navItems = [
    "Our Story",
    "Gallery",
    "Testimonials",
    "Founder's Word",
    "Find Us",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/10 backdrop-blur-lg bg-[#1B4D2E]/80 will-change-transform ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <nav className="py-3 sm:py-4 lg:py-5 flex justify-between items-center">
          <Link href="/" className="group relative z-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center will-change-transform"
            >
              <Image
                src="/logo.png"
                alt="Irani Chiya"
                width={65}
                height={65}
                className="w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px] xl:w-[65px] h-auto mr-2"
                priority
                fetchPriority="high"
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
            className="hidden xl:flex items-center space-x-8 will-change-transform"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="will-change-transform"
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
              className="will-change-transform"
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
              onClick={toggleMobileMenu}
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
          className="absolute top-full left-0 right-0 bg-[#1B4D2E]/95 backdrop-blur-lg border-b border-white/10 shadow-lg z-50 xl:hidden will-change-transform"
        >
          <div className="flex flex-col space-y-2 py-4 px-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="will-change-transform"
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
              className="will-change-transform"
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
  );
};

export default memo(ClientHeader);