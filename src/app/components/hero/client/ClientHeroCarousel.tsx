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
      width={1920}
      height={1080}
      className="object-cover object-center w-full h-full will-change-transform"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
      priority={index === 0}
      loading={index === 0 ? "eager" : "lazy"}
      fetchPriority={index === 0 ? "high" : "auto"}
    />
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
    initialSlide: 0,
  }), []);

  const onSwiperInit = useCallback((swiper: any) => {
    swiperRef.current = swiper;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[600px] xl:h-[700px] hero-2lg:h-[665px] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
    >
      <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>

      <div className="absolute inset-0 shadow-md z-10 pointer-events-none"></div>

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
    </motion.div>
  );
};

export default memo(ClientHeroCarousel);