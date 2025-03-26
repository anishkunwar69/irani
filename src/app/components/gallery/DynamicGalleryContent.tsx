"use client";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { Moment } from "./types";

interface DynamicGalleryContentProps {
  moments: Moment[];
}

function DynamicGalleryContent({ moments }: DynamicGalleryContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(Array(moments.length).fill(true));
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsInView(entry.isIntersecting);
          
          if (!entry.isIntersecting && isPlaying) {
            videoRefs.current.forEach((video) => {
              if (video && !video.paused) {
                video.pause();
              }
            });
            setIsPlaying(false);
          }
        },
        { threshold: 0.1 }
      );
      
      observerRef.current = observer;
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      
      const handleResize = () => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
          adjustCarouselForScreenSize();
        }
      };
      
      window.addEventListener("resize", handleResize);
      
      setIsLoading(Array(moments.length).fill(true));
      
      return () => {
        window.removeEventListener("resize", handleResize);
        if (containerRef.current && observer) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    const forceLoadTimeout = setTimeout(() => {
      videoRefs.current.forEach((video, index) => {
        if (video && video.readyState >= 2) {
          handleVideoLoaded(index);
        }
      });
      
      setTimeout(() => {
        setIsLoading(Array(moments.length).fill(false));
      }, 1500);
    }, 2000);
    
    return () => clearTimeout(forceLoadTimeout);
  }, [moments.length]);

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

  const createVideoUrl = (cloudinaryId: string) => {
    return `https://res.cloudinary.com/dmq5tx0bd/video/upload/f_auto:video,q_auto,br_5000k/v1/irani/${cloudinaryId}`;
  };

  const createPosterUrl = (cloudinaryId: string) => {
    return `https://res.cloudinary.com/dmq5tx0bd/video/upload/so_0,w_600,h_1080,c_fill,q_auto,f_jpg/v1/irani/${cloudinaryId}`;
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

      const videosToLoad = [index];
      if (index > 0) videosToLoad.push(index - 1);
      if (index < moments.length - 1) videosToLoad.push(index + 1);
      
      preloadVideos(videosToLoad);

      setTimeout(() => {
        const newVideo = videoRefs.current[index];
        if (newVideo) {
          newVideo.play().catch((err) => console.error("Error playing video:", err));
        }
      }, 100);
    }
  };

  const preloadVideos = (indices: number[]) => {
    indices.forEach(index => {
      if (!loadedVideos.has(index)) {
        const video = videoRefs.current[index];
        if (video) {
          video.load();
          setLoadedVideos(prev => new Set(prev).add(index));
        }
      }
    });
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % moments.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
    
    preloadVideos([nextIndex, (nextIndex + 1) % moments.length]);

    setTimeout(() => {
      const newVideo = videoRefs.current[nextIndex];
      if (newVideo) {
        newVideo.play().catch((err) => console.error("Error playing video:", err));
      }
    }, 100);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + moments.length) % moments.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
    
    preloadVideos([prevIndex, (prevIndex - 1 + moments.length) % moments.length]);

    setTimeout(() => {
      const newVideo = videoRefs.current[prevIndex];
      if (newVideo) {
        newVideo.play().catch((err) => console.error("Error playing video:", err));
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

  const handleVideoLoaded = (index: number) => {
    setIsLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
    setLoadedVideos(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = index !== currentIndex || isMuted;

        if (index === currentIndex && isPlaying && isInView) {
          video.play().catch((err) => console.error("Error playing video:", err));
        } else if (!isInView || !isPlaying || index !== currentIndex) {
          video.pause();
        }
      }
    });
    
    if (isInView) {
      const nextIndex = (currentIndex + 1) % moments.length;
      const prevIndex = (currentIndex - 1 + moments.length) % moments.length;
      preloadVideos([nextIndex, prevIndex]);
    }
  }, [currentIndex, isPlaying, isMuted, isInView, moments.length]);
  
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
    <LazyMotion features={domAnimation}>
      <div
        ref={containerRef}
        className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative mb-7 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-20 gallery-5xl:mb-36"
      >
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 hover:bg-[#C7962D] rounded-full backdrop-blur-sm transition-all text-white border border-white/20 shadow-lg hover:shadow-[#C7962D]/20 group"
          aria-label="Previous video"
        >
          <FaChevronLeft className="text-base sm:text-base md:text-lg lg:text-xl transition-transform group-hover:scale-110" />
        </m.button>
        
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 hover:bg-[#C7962D] rounded-full backdrop-blur-sm transition-all text-white border border-white/20 shadow-lg hover:shadow-[#C7962D]/20 group"
          aria-label="Next video"
        >
          <FaChevronRight className="text-base sm:text-base md:text-lg lg:text-xl transition-transform group-hover:scale-110" />
        </m.button>

        <div className="absolute top-0 left-0 right-0 w-full flex justify-center">
          {moments.map((moment, index) => {
            const shouldLoad = index === currentIndex || 
                              index === (currentIndex + 1) % moments.length || 
                              index === (currentIndex - 1 + moments.length) % moments.length;
            
            return (
              <m.div
                key={index}
                style={getSlideStyle(index)}
                transition={{ duration: 0.4 }}
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

                    {(shouldLoad || loadedVideos.has(index)) && (
                      <video
                        ref={el => {
                          if (el) videoRefs.current[index] = el;
                        }}
                        data-index={index}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                          currentIndex === index
                            ? "scale-100 group-hover:scale-105"
                            : "scale-105"
                        }`}
                        src={createVideoUrl(moment.cloudinaryId)}
                        poster={createPosterUrl(moment.cloudinaryId)}
                        playsInline
                        loop
                        muted={currentIndex !== index || isMuted}
                        onLoadedData={() => handleVideoLoaded(index)}
                        onCanPlay={() => handleVideoLoaded(index)}
                        onError={() => handleVideoLoaded(index)}
                        preload={shouldLoad ? "auto" : "none"}
                      />
                    )}

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
                          <m.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 mb-[calc(2%+4px)] sm:mb-[calc(2%+6px)] md:mb-[calc(3%+6px)] font-quicksand line-clamp-2 sm:line-clamp-3"
                          >
                            {moment.description}
                          </m.p>
                        </AnimatePresence>
                      )}

                      {currentIndex === index && (
                        <div className="flex items-center gap-[calc(1%+3px)] sm:gap-[calc(1.5%+3px)] md:gap-[calc(2%+3px)]">
                          <m.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={togglePlayPause}
                            className="w-[calc(10%+12px)] h-[calc(10%+12px)] sm:w-[calc(5%+12px)] sm:h-[calc(5%+12px)] md:w-[calc(6%+14px)] md:h-[calc(6%+14px)] lg:w-[calc(7%+14px)] lg:h-[calc(7%+14px)] rounded-full bg-[#C7962D] flex items-center justify-center text-white hover:bg-[#C7962D]/90 transition-all shadow-lg hover:shadow-[#C7962D]/30 p-[calc(1.2%+1px)] sm:p-[calc(1.5%+2px)] md:p-[calc(1.8%+2px)]"
                            aria-label={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? (
                              <FaPause className="text-xs sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                            ) : (
                              <FaPlay className="text-xs sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm ml-0.5" />
                            )}
                          </m.button>

                          <m.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMute}
                            className="w-[calc(10%+12px)] h-[calc(10%+12px)] sm:w-[calc(5%+12px)] sm:h-[calc(5%+12px)] md:w-[calc(6%+14px)] md:h-[calc(6%+14px)] lg:w-[calc(7%+14px)] lg:h-[calc(7%+14px)] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 p-[calc(1.2%+1px)] sm:p-[calc(1.5%+2px)] md:p-[calc(1.8%+2px)]"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? (
                              <FaVolumeMute className="text-xs sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                            ) : (
                              <FaVolumeUp className="text-xs sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm" />
                            )}
                          </m.button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2 md:gap-3">
          {moments.map((_, index) => (
            <m.button
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
                className={`w-2.5 h-2.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#C7962D]"
                    : "bg-white/50 group-hover:bg-white/70"
                }`}
              ></div>

              {currentIndex === index && (
                <div className="absolute -inset-1.5 sm:-inset-1 rounded-full border border-[#C7962D]/50 animate-ping"></div>
              )}
            </m.button>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
} 

export default memo(DynamicGalleryContent);