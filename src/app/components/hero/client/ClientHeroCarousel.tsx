"use client";

import { useRef, useCallback, useMemo, memo, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

type HeroImage = {
  src: string;
  alt: string;
};

type ClientHeroCarouselProps = {
  images: HeroImage[];
};

// Optimized for first image loading with highest priority
const CarouselSlide = memo(({ img, index }: { img: HeroImage; index: number }) => (
  <div className="relative w-full h-full">
    <Image
      src={img.src}
      alt={img.alt}
      width={1920}
      height={1080}
      className="object-cover object-center w-full h-full will-change-transform"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
      priority={index === 0} 
      loading={index === 0 ? "eager" : "lazy"}
      fetchPriority={index === 0 ? "high" : "auto"}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F0E]/60 to-transparent"></div>
  </div>
));

CarouselSlide.displayName = "CarouselSlide";

const ClientHeroCarousel = ({ images }: ClientHeroCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fade in after small delay to prioritize content rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const swiperConfig = useMemo(() => ({
    modules: [Autoplay, EffectFade, Pagination],
    effect: "fade" as const,
    fadeEffect: { crossFade: true },
    speed: 800,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return `<span class="${className} custom-pagination-bullet"></span>`;
      },
    },
    loop: true,
    initialSlide: 0,
  }), []);

  const onSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);
  
  // Apply optimization directly to the Swiper instance to avoid React warnings
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.preloadImages = false;
      swiperRef.current.lazy = {
        loadPrevNext: true,
        loadPrevNextAmount: 1
      };
    }
  }, []);

  return (
    <div
      className="hero-container relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[600px] xl:h-[700px] hero-2lg:h-[665px] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
      style={{
        opacity: isLoaded ? 1 : 0.8,
        transform: isLoaded ? 'scale(1)' : 'scale(0.98)',
        transition: 'opacity 0.5s, transform 0.5s'
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-2xl opacity-30 blur"></div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>

      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] z-10 pointer-events-none"></div>

      <Swiper
        onSwiper={onSwiperInit}
        {...swiperConfig}
        className="w-full h-full hero-carousel"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide img={img} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <svg
        className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-16 xl:h-16 text-[#C7962D]/30 z-10"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 0L100 0L100 100"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default memo(ClientHeroCarousel);