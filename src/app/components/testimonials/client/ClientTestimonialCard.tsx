"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGoogle, FaQuoteLeft } from "react-icons/fa";
import ClientStarRating from "./ClientStarRating";
import { memo } from "react";
export interface TestimonialType {
  name: string;
  content: string;
  reviewUrl: string;
  initials: string;
  rating: number;
  avatar: string;
}

interface ClientTestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

function ClientTestimonialCard({ testimonial, index }: ClientTestimonialCardProps) {
  return (
    <motion.div
      key={`testimonial-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <a
        href={testimonial.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${testimonial.name}'s review on Google`}
        className="block h-full"
      >
        <div className="h-full bg-[#1B4D2E]/80 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#C7962D]/30 transition-all duration-300 flex flex-col cursor-pointer">
          <div className="p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex-grow">
            <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1 xs:px-1.5 sm:px-2 md:px-2.5 py-0.5 xs:py-0.5 sm:py-1 md:py-1.5 bg-white/[0.03] backdrop-blur-sm rounded-full text-[10px] xs:text-[10px] sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 border border-white/10">
              <FaGoogle className="text-white text-[9px] xs:text-[9px] sm:text-[10px] md:text-xs" />
              <span className="text-white font-medium">
                Verified Review
              </span>
            </div>

            <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <FaQuoteLeft className="text-[#C7962D] text-xs xs:text-sm sm:text-base md:text-lg opacity-50" />
              <p className="text-white/90 font-quicksand text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 xs:line-clamp-4 sm:line-clamp-5 lg:line-clamp-6">
                {testimonial.content}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 p-2.5 xs:p-3 sm:p-4 md:p-5">
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
              <div className="w-7 h-7 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold font-lora text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg truncate max-w-[150px] xs:max-w-[150px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px]">
                  {testimonial.name}
                </h4>
                <div className="-ml-0.5 -mt-0.5">
                  <ClientStarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default memo(ClientTestimonialCard); 