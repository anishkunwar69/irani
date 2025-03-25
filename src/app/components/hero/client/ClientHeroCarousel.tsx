"use client";

import { useRef, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const CarouselSlide = memo(({ img, index }: { img: HeroImage; index: number }) => (
  <div className="relative w-full h-full">
    <Image
      src={img.src}
      alt={img.alt}
      fill
      className="object-cover object-center will-change-transform"
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
  }), []);

  const onSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[600px] xl:h-[700px] hero-2lg:h-[665px] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
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
      >
        <path
          d="M0 0L100 0L100 100"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};

export default memo(ClientHeroCarousel);