"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { RefCallback, useEffect, useRef, useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../Container";

const moments = [
  {
    title: "Irani Chiya Vibes ❤️",
    description: "Experience the warm atmosphere of our tea house",
    cloudinaryId: "l7pvlinwkiljcvaav12s",
  },
  {
    title: "Anxi-Tea Or Irani Tea? 🫖😉",
    description: "Our signature brews to calm your day",
    cloudinaryId: "pmsleglfxh2um51yc7wg",
  },
  {
    title: "TU Cricket Team in Irani Chiya 🏏☕️",
    description: "Where champions come to unwind",
    cloudinaryId: "xikzfycxwhhoo4chdj8o",
  },
  {
    title: "Normal day in Irani ❤️🫖",
    description: "Everyday moments of joy and connection",
    cloudinaryId: "r6wskgrjvl82iu7mij2m",
  },
  {
    title: "Chiya Moments! 🫖❤️",
    description: "Creating memories one cup at a time",
    cloudinaryId: "pcxjz5ohzhpj4vo2otmo",
  },
];

function GalleryContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(Array(moments.length).fill(true));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const setVideoRef: RefCallback<HTMLVideoElement> = (
    element: HTMLVideoElement | null
  ) => {
    if (element) {
      const index = parseInt(element.dataset.index || "0");
      videoRefs.current[index] = element;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
      adjustCarouselForScreenSize();
    };

    window.addEventListener("resize", handleResize);
    
    adjustCarouselForScreenSize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const adjustCarouselForScreenSize = () => {
    if (!containerRef.current) return;
    
    const videos = videoRefs.current;
    videos.forEach(video => {
      if (video) {
        video.style.display = 'none';
        void video.offsetHeight;
        video.style.display = 'block';
      }
    });
    
    setCurrentIndex(prev => prev);
  };

  const handleVideoPlayback = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => console.error("Error playing video:", err));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (index: number) => {
    if (index === currentIndex) {
      handleVideoPlayback(index);
    } else {
      setCurrentIndex(index);
      setIsPlaying(true);

      setTimeout(() => {
        const newVideo = videoRefs.current[index];
        if (newVideo) {
          newVideo
            .play()
            .catch((err) => console.error("Error playing video:", err));
        }
      }, 100);
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % moments.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);

    setTimeout(() => {
      const newVideo = videoRefs.current[nextIndex];
      if (newVideo) {
        newVideo
          .play()
          .catch((err) => console.error("Error playing video:", err));
      }
    }, 100);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + moments.length) % moments.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);

    setTimeout(() => {
      const newVideo = videoRefs.current[prevIndex];
      if (newVideo) {
        newVideo
          .play()
          .catch((err) => console.error("Error playing video:", err));
      }
    }, 100);
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleVideoPlayback(currentIndex);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => console.error(err));
      } else {
        video.requestFullscreen().catch((err) => console.error(err));
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoLoaded = (index: number) => {
    setIsLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = index !== currentIndex || isMuted;

        if (index === currentIndex && isPlaying) {
          video
            .play()
            .catch((err) => console.error("Error playing video:", err));
        }
      }
    });
  }, [currentIndex, isPlaying, isMuted]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleVolumeChange = () => setIsMuted(currentVideo.muted);
      const handleLoadedData = () => handleVideoLoaded(currentIndex);

      currentVideo.addEventListener("play", handlePlay);
      currentVideo.addEventListener("pause", handlePause);
      currentVideo.addEventListener("volumechange", handleVolumeChange);
      currentVideo.addEventListener("loadeddata", handleLoadedData);

      setIsMuted(currentVideo.muted);

      return () => {
        currentVideo.removeEventListener("play", handlePlay);
        currentVideo.removeEventListener("pause", handlePause);
        currentVideo.removeEventListener("volumechange", handleVolumeChange);
        currentVideo.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + moments.length) % moments.length;
    const adjustedDiff =
      diff > moments.length / 2 ? diff - moments.length : diff;

    let translateX, scale, opacity, zIndex;
    
    if (windowWidth < 640) {
      translateX = adjustedDiff * 95;
      scale = 1 - Math.abs(adjustedDiff) * 0.3;
      opacity = 1 - Math.abs(adjustedDiff) * 0.55;
    } else if (windowWidth < 768) {
      translateX = adjustedDiff * 100;
      scale = 1 - Math.abs(adjustedDiff) * 0.25;
      opacity = 1 - Math.abs(adjustedDiff) * 0.5;
    } else if (windowWidth < 1024) {
      translateX = adjustedDiff * 105;
      scale = 1 - Math.abs(adjustedDiff) * 0.22;
      opacity = 1 - Math.abs(adjustedDiff) * 0.45;
    } else if (windowWidth < 1280) {
      translateX = adjustedDiff * 110;
      scale = 1 - Math.abs(adjustedDiff) * 0.18;
      opacity = 1 - Math.abs(adjustedDiff) * 0.4;
    } else {
      translateX = adjustedDiff * 115;
      scale = 1 - Math.abs(adjustedDiff) * 0.15;
      opacity = 1 - Math.abs(adjustedDiff) * 0.35;
    }
    
    scale = Math.max(scale, 0.1);
    
    opacity = Math.max(opacity, 0.1);
    
    zIndex = 10 - Math.abs(adjustedDiff);

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 gallery-5xl:pb-0">
      <Container isGallery={true}>
        <div className="flex flex-col">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-[#C7962D] rounded-full blur-[min(130px,14vw)] opacity-[0.12] sm:opacity-[0.1]"></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1 sm:gap-2 md:gap-3 justify-center">
                <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce" />
                Our Moments
                <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce" />
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-lora text-white/90 leading-tight max-w-[95%] sm:max-w-[90%] mx-auto px-2 sm:px-4 md:px-0">
                Experience The{" "}
                <span className="text-[#C7962D] italic">Magic</span> Inside
              </h3>
            </motion.div>
          </div>

          <div
            ref={containerRef}
            className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative mb-7 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-20 gallery-5xl:mb-36 "
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 hover:bg-[#C7962D] rounded-full backdrop-blur-sm transition-all text-white border border-white/20 shadow-lg hover:shadow-[#C7962D]/20 group"
              aria-label="Previous video"
            >
              <FaChevronLeft className="text-sm sm:text-base md:text-lg lg:text-xl transition-transform group-hover:scale-110" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 hover:bg-[#C7962D] rounded-full backdrop-blur-sm transition-all text-white border border-white/20 shadow-lg hover:shadow-[#C7962D]/20 group"
              aria-label="Next video"
            >
              <FaChevronRight className="text-sm sm:text-base md:text-lg lg:text-xl transition-transform group-hover:scale-110" />
            </motion.button>

            <div className="absolute top-0 left-0 right-0 w-full flex justify-center">
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  animate={getSlideStyle(index)}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-[55vw] sm:w-[45vw] md:w-[38vw] lg:w-[32vw] xl:w-[28vw] 2xl:w-[25vw] max-w-[500px] aspect-[9/16] cursor-pointer ${
                    currentIndex === index
                      ? "hover:scale-[1.02] transition-transform duration-300"
                      : ""
                  }`}
                  onClick={() => handleVideoClick(index)}
                >
                  <div className="relative w-full h-full overflow-hidden group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-b from-[#C7962D] to-[#1B4D2E] opacity-20 blur transition-all duration-500 ${
                        currentIndex === index
                          ? "opacity-60 group-hover:opacity-80"
                          : "opacity-20"
                      }`}
                    ></div>

                    <div className="relative w-full h-full bg-gradient-to-br from-[#0C1F0E]/90 to-[#1B4D2E]/90 overflow-hidden border border-white/10 shadow-xl backdrop-blur-sm">
                      {isLoading[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-3 sm:border-4 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
                        </div>
                      )}

                      <video
                        ref={setVideoRef}
                        data-index={index}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                          currentIndex === index
                            ? "scale-100 group-hover:scale-105"
                            : "scale-105"
                        }`}
                        src={`https://res.cloudinary.com/dmq5tx0bd/video/upload/f_auto:video,q_auto/v1/irani/${moment.cloudinaryId}`}
                        playsInline
                        loop
                        muted={currentIndex !== index || isMuted}
                        onEnded={handleVideoEnd}
                        onLoadedData={() => handleVideoLoaded(index)}
                        preload="auto"
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 transition-opacity duration-300 ${
                          currentIndex === index
                            ? "opacity-80 group-hover:opacity-50"
                            : "opacity-90"
                        }`}
                      ></div>

                      {currentIndex === index && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                            {isPlaying ? (
                              <FaPause className="text-xl sm:text-2xl md:text-3xl text-white" />
                            ) : (
                              <FaPlay className="text-xl sm:text-2xl md:text-3xl text-white ml-1.5" />
                            )}
                          </div>
                        </div>
                      )}

                      <div
                        className={`absolute bottom-0 left-0 right-0 p-[calc(3%+5px)] z-10 transition-all duration-300 ${
                          currentIndex === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-lora text-white font-semibold mb-[calc(1%+2px)] sm:mb-[calc(1%+4px)] md:mb-[calc(1.5%+4px)]">
                          {moment.title}
                        </h3>

                        {currentIndex === index && (
                          <AnimatePresence>
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 mb-[calc(2%+4px)] sm:mb-[calc(2%+6px)] md:mb-[calc(3%+6px)] font-quicksand line-clamp-2 sm:line-clamp-3"
                            >
                              {moment.description}
                            </motion.p>
                          </AnimatePresence>
                        )}

                        {currentIndex === index && (
                          <div className="flex items-center gap-[calc(1%+3px)] sm:gap-[calc(1.5%+3px)] md:gap-[calc(2%+3px)]">
                            <motion.button
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={togglePlayPause}
                              className="w-[calc(5%+12px)] h-[calc(5%+12px)] sm:w-[calc(6%+14px)] sm:h-[calc(6%+14px)] md:w-[calc(7%+16px)] md:h-[calc(7%+16px)] lg:w-[calc(8%+16px)] lg:h-[calc(8%+16px)] rounded-full bg-[#C7962D] flex items-center justify-center text-white hover:bg-[#C7962D]/90 transition-all shadow-lg hover:shadow-[#C7962D]/30 p-[calc(1.5%+2px)] sm:p-[calc(1.8%+2px)] md:p-[calc(2%+3px)]"
                              aria-label={isPlaying ? "Pause" : "Play"}
                            >
                              {isPlaying ? (
                                <FaPause className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base" />
                              ) : (
                                <FaPlay className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base ml-0.5" />
                              )}
                            </motion.button>

                            <motion.button
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={toggleMute}
                              className="w-[calc(4%+10px)] h-[calc(4%+10px)] sm:w-[calc(5%+12px)] sm:h-[calc(5%+12px)] md:w-[calc(6%+14px)] md:h-[calc(6%+14px)] lg:w-[calc(7%+14px)] lg:h-[calc(7%+14px)] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 p-[calc(1.2%+1px)] sm:p-[calc(1.5%+2px)] md:p-[calc(1.8%+2px)]"
                              aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                              {isMuted ? (
                                <FaVolumeMute className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                              ) : (
                                <FaVolumeUp className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                              )}
                            </motion.button>

                            <motion.button
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={handleFullscreen}
                              className="w-[calc(4%+10px)] h-[calc(4%+10px)] sm:w-[calc(5%+12px)] sm:h-[calc(5%+12px)] md:w-[calc(6%+14px)] md:h-[calc(6%+14px)] lg:w-[calc(7%+14px)] lg:h-[calc(7%+14px)] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 p-[calc(1.2%+1px)] sm:p-[calc(1.5%+2px)] md:p-[calc(1.8%+2px)]"
                              aria-label="Fullscreen"
                            >
                              <BsFullscreen className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 md:gap-3">
              {moments.map((_, index) => (
                <motion.button
                  key={index}
                  initial={false}
                  animate={{
                    scale: currentIndex === index ? 1.3 : 1,
                    opacity: currentIndex === index ? 1 : 0.5,
                  }}
                  onClick={() => setCurrentIndex(index)}
                  className="relative group"
                  aria-label={`Go to video ${index + 1}`}
                >
                  <div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-[#C7962D]"
                        : "bg-white/50 group-hover:bg-white/70"
                    }`}
                  ></div>

                  {currentIndex === index && (
                    <div className="absolute -inset-1 rounded-full border border-[#C7962D]/50 animate-ping"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GalleryContent;
