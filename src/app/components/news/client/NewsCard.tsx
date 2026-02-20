"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaNewspaper } from "react-icons/fa";
import { memo } from "react";

export interface NewsItemType {
    idx: number;
    source: string;
    title: string;
    url: string;
    image: string;
    date?: string;
}

interface NewsCardProps {
    news: NewsItemType;
    index: number;
}

function NewsCard({ news, index }: NewsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group h-full"
        >
            <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                <div className="h-full bg-[#1B4D2E]/80 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#C7962D]/30 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden">

                    {/* Image Section */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D2E] via-transparent to-transparent opacity-90" />

                        {/* Source Badge - Styled like Testimonial Verified Badge */}
                        <div className="absolute top-3 left-3 xs:top-4 xs:left-4">
                            <div className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                                <FaNewspaper className="text-[#C7962D] text-[10px] xs:text-xs" />
                                <span className="text-[9px] xs:text-[10px] uppercase tracking-wider font-medium text-white/90">
                                    {news.source}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Matches Testimonial Card Padding */}
                    <div className="p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                        <h3 className="text-white/80 font-semibold font-lora text-sm xs:text-base sm:text-lg md:text-xl leading-tight mb-3 line-clamp-3 group-hover:text-[#C7962D] transition-colors duration-300">
                            {news.title}
                        </h3>

                        <div className="mt-auto pt-3 xs:pt-4 flex items-center justify-between border-t border-white/10">
                            <span className="text-[10px] xs:text-xs font-quicksand text-[#C7962D] uppercase tracking-widest">
                                Read Article
                            </span>
                            <div className="w-6 h-6 xs:w-7 xs:h-7 rounded-full flex items-center justify-center bg-[#C7962D] transition-colors duration-300">
                                <FaArrowRight className="text-white text-[10px] xs:text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export default memo(NewsCard);
