"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import ClientTestimonialCard, { TestimonialType } from "./ClientTestimonialCard";
import { memo } from "react";
interface ClientTestimonialsGridProps {
  testimonials: TestimonialType[];
}

function ClientTestimonialsGrid({ testimonials }: ClientTestimonialsGridProps) {
  const [activePage, setActivePage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(4);
      } else {
        setTestimonialsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleMobileCheck = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleMobileCheck();
    window.addEventListener("resize", handleMobileCheck);
    return () => window.removeEventListener("resize", handleMobileCheck);
  }, []);

  const pageCount = useMemo(
    () => Math.ceil(testimonials.length / testimonialsPerPage),
    [testimonialsPerPage, testimonials.length]
  );

  const goToPrevPage = useCallback(() => {
    setActivePage((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setActivePage((prev) => Math.min(pageCount - 1, prev + 1));
  }, [pageCount]);

  const goToPage = useCallback((pageIndex: number) => {
    setActivePage(pageIndex);
  }, []);

  const visibleTestimonials = useMemo(
    () =>
      testimonials.slice(
        activePage * testimonialsPerPage,
        (activePage + 1) * testimonialsPerPage
      ),
    [activePage, testimonialsPerPage, testimonials]
  );

  return (
    <div>
      <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
            <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
            Customer Reviews
            <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
          </h2>
          <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
            What Our{" "}
            <span className="text-[#C7962D] italic">Customers</span> Say
          </h3>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <div
          key={activePage}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <ClientTestimonialCard 
              key={`testimonial-${activePage}-${index}`} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </AnimatePresence>

      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 flex justify-center">
        <div className="flex items-center gap-2 xs:gap-2 sm:gap-2 md:gap-3">
          <button
            type="button"
            onClick={goToPrevPage}
            disabled={activePage === 0}
            className="relative inline-flex items-center justify-center p-2 xs:p-2 sm:p-3 md:p-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
            style={{
              borderColor:
                activePage === 0
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(199,150,45,0.3)",
              color:
                activePage === 0 ? "rgba(255,255,255,0.4)" : "#C7962D",
              cursor: activePage === 0 ? "not-allowed" : "pointer",
            }}
            aria-label="Previous page"
          >
            <span className="sr-only">Previous page</span>
            <FaChevronLeft
              className="h-3.5 w-3.5 xs:h-3.5 xs:w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
              aria-hidden="true"
            />
          </button>

          <div className="flex gap-2 xs:gap-2 sm:gap-2 md:gap-3">
            {Array.from({ length: pageCount }).map((_, index) => {
              const showOnMobile =
                index === 0 ||
                index === pageCount - 1 ||
                Math.abs(index - activePage) <= 1;

              if (!showOnMobile && isMobile) {
                if (
                  index === activePage - 2 ||
                  index === activePage + 2
                ) {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="flex items-center justify-center text-white/50 px-1 text-sm"
                    >
                      …
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-8 h-8 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full focus:outline-none ${
                    activePage === index
                      ? "border-2 border-[#C7962D] bg-[#C7962D]/20 text-[#C7962D] font-bold"
                      : "border border-white/20 hover:border-white/30 bg-transparent text-white/50 hover:text-white/70"
                  } transition-all duration-300 text-sm xs:text-sm sm:text-sm md:text-base`}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={activePage === index ? "page" : undefined}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={activePage === pageCount - 1}
            className="relative inline-flex items-center justify-center p-2 xs:p-2 sm:p-3 md:p-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
            style={{
              borderColor:
                activePage === pageCount - 1
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(199,150,45,0.3)",
              color:
                activePage === pageCount - 1
                  ? "rgba(255,255,255,0.4)"
                  : "#C7962D",
              cursor:
                activePage === pageCount - 1 ? "not-allowed" : "pointer",
            }}
            aria-label="Next page"
          >
            <span className="sr-only">Next page</span>
            <FaChevronRight
              className="h-3.5 w-3.5 xs:h-3.5 xs:w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="mt-3 xs:mt-3 sm:mt-4 text-center">
        <span className="text-sm xs:text-sm sm:text-sm font-quicksand text-white/70 font-medium">
          Showing page {activePage + 1} of {pageCount}
        </span>
      </div>
    </div>
  );
}

export default memo(ClientTestimonialsGrid); 