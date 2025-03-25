"use client";

import { useState, useCallback, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiChevronRight, HiX } from "react-icons/hi";
import { BranchLocation } from "../HeroContent";

import "swiper/css";
import "swiper/css/navigation";

type ClientBranchCarouselProps = {
  branchLocations: BranchLocation[];
};

const ClientBranchCarousel = ({ branchLocations }: ClientBranchCarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState<BranchLocation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Defer mounting logic to after first render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, []);

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  }, []);

  const openBranchDialog = useCallback((branch: BranchLocation) => {
    setSelectedBranch(branch);
    setIsDialogOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBranchDialog = useCallback(() => {
    document.body.style.overflow = "";
    setIsDialogOpen(false);
    setTimeout(() => setSelectedBranch(null), 300);
  }, []);

  const BranchDialog = () => {
    if (!isMounted || !selectedBranch) return null;
    
    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDialogOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 ${
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isDialogOpen ? 1 : 0,
            scale: isDialogOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-gradient-to-br from-[#3D6A37]/95 via-[#2D5A27]/90 to-[#34895B]/85 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] sm:max-h-[90vh] flex flex-col"
        >
          <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-15">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M50 10C60 25 80 25 90 20C85 40 70 55 50 60C30 55 15 40 10 20C20 25 40 25 50 10Z"
                fill="#C7962D"
              />
            </svg>
          </div>

          <div
            onClick={closeBranchDialog}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 z-50 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-lg"
            role="button"
            aria-label="Close dialog"
          >
            <HiX className="w-4 h-4 sm:w-5 sm:h-5 text-white pointer-events-none" />
          </div>

          {selectedBranch && (
            <div className="flex flex-col h-full overflow-auto">
              <div className="w-full relative">
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                  <div className="absolute inset-0">
                    <Image
                      src={selectedBranch.imgUrl || "/branch.jpg"}
                      alt={selectedBranch.name}
                      width={1200}
                      height={800}
                      className={`object-cover w-full h-full ${
                        selectedBranch.isCenter ? "object-center" : "object-top"
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 600px, 800px"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#336644]/70 via-[#336644]/30 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 md:p-6">
                  <div className="motion-safe:animate-fadeIn">
                    <h2 className="font-lora text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
                      {selectedBranch.name}
                    </h2>
                    <div className="flex items-center mt-2 sm:mt-3 bg-black/20 backdrop-blur-sm rounded-full py-1 sm:py-1.5 px-2 sm:px-3 w-fit shadow-lg border border-white/10">
                      <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-[#C7962D]" />
                      <p className="ml-1.5 sm:ml-2 text-white/90 text-xs sm:text-sm md:text-base font-quicksand">
                        {selectedBranch.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-[#C7962D]/80 via-[#DFB668] to-[#C7962D]/80 shadow-[0_0_8px_rgba(199,150,45,0.6)]"></div>

              <div className="flex justify-center items-center gap-2 sm:gap-4 py-2 sm:py-3 bg-[#1B4D2E]/80 border-y border-[#C7962D]/30">
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
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-md group"
                  aria-label="Previous branch"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2">
                  {branchLocations.map((branch, index) => {
                    const isActive = branch.name === selectedBranch.name;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedBranch(branch)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
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
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center bg-black/20 hover:bg-[#C7962D]/80 backdrop-blur-sm rounded-full transition-all duration-300 cursor-pointer border border-white/10 shadow-md group"
                  aria-label="Next branch"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h3 className="font-lora text-base sm:text-lg md:text-xl text-[#C7962D] font-semibold mb-2 sm:mb-3 flex items-center">
                        <span className="mr-2 w-4 sm:w-5 md:w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                        Contact Information
                      </h3>
                      <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                        <div className="flex items-start">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#C7962D]/10 rounded-full flex items-center justify-center">
                            <FaPhoneAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#C7962D]" />
                          </div>
                          <div className="ml-3 sm:ml-4">
                            <p className="text-white/90 font-quicksand text-sm sm:text-base md:text-lg">
                              {selectedBranch.contact}
                            </p>
                            <p className="text-white/60 text-xs sm:text-sm mt-0.5 sm:mt-1">
                              Tap to call
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-lora text-base sm:text-lg md:text-xl text-[#C7962D] font-semibold mb-2 sm:mb-3 flex items-center">
                        <span className="mr-2 w-4 sm:w-5 md:w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                        Opening Hours
                      </h3>
                      <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                        <div className="flex items-start">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#C7962D]/10 rounded-full flex items-center justify-center">
                            <FaClock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#C7962D]" />
                          </div>
                          <div className="ml-3 sm:ml-4">
                            <p className="text-white/90 font-quicksand text-sm sm:text-base md:text-lg">
                              {selectedBranch.hours}
                            </p>
                            <p className="text-white/60 text-xs sm:text-sm mt-0.5 sm:mt-1">
                              Daily operating hours
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h3 className="font-lora text-base sm:text-lg md:text-xl text-[#C7962D] font-semibold mb-2 sm:mb-3 flex items-center">
                      <span className="mr-2 w-4 sm:w-5 md:w-6 h-0.5 bg-gradient-to-r from-[#C7962D] to-transparent"></span>
                      Directions
                    </h3>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 border border-white/10 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#C7962D]/20">
                      {selectedBranch.hasGoogleMaps ? (
                        <>
                          <div className="mb-3 sm:mb-4 flex items-start">
                            <p className="text-white/80 font-quicksand text-xs sm:text-sm md:text-base">
                              Get directions to visit our{" "}
                              {selectedBranch.name.split(" - ")[1]} branch and
                              enjoy our premium tea experience.
                            </p>
                          </div>

                          <a
                            href={selectedBranch.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto group relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E] self-start"
                          >
                            <span className="absolute inset-0 bg-[#C7962D]"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] opacity-0 group-hover:opacity-100 group-active:opacity-90 transition-opacity duration-300"></span>
                            <span className="relative flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm md:text-base font-medium text-white">
                              Open in Google Maps
                              <HiChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </a>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#B45309"
                                className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                />
                              </svg>
                            </div>
                            <p className="text-amber-200 font-quicksand font-medium text-xs sm:text-sm md:text-base">
                              Google Maps directions unavailable
                            </p>
                          </div>
                          <p className="text-white/80 font-quicksand mb-3 sm:mb-4 ml-1 text-xs sm:text-sm md:text-base">
                            Directions to this branch are not available through
                            Google Maps at the moment. Please contact us
                            directly for assistance.
                          </p>
                          <div className="mt-auto flex items-center text-[#C7962D] text-xs sm:text-sm md:text-base p-2 sm:p-3 bg-[#C7962D]/10 rounded-xl">
                            <FaPhoneAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-2 sm:mr-3" />
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
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between">
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C7962D]/30 to-transparent rounded-full"></div>
                  <div className="text-white/60 text-xs sm:text-sm whitespace-nowrap mx-2 sm:mx-3">
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
      </motion.div>,
      document.body
    );
  };

  return (
    <>
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
                <div
                  className="relative h-56 sm:h-60 md:h-64 rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                  onClick={() => openBranchDialog(branch)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg opacity-30 blur-[1px] group-hover:opacity-50 transition-opacity"></div>

                  <div className="relative h-full rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={branch.imgUrl || "/branch.jpg"}
                      alt={`${branch.name} - ${branch.address}`}
                      width={400}
                      height={300}
                      className="object-cover object-center w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={index < 4 ? "eager" : "lazy"}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Only render dialog when mounted */}
      {isMounted && <BranchDialog />}
    </>
  );
};

// Add custom CSS for fade-in animation
if (typeof window !== 'undefined') {
  if (!document.getElementById('irani-custom-animations')) {
    const style = document.createElement('style');
    style.id = 'irani-custom-animations';
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }
}

export default memo(ClientBranchCarousel); 