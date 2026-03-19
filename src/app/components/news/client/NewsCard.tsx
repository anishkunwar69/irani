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
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#C7962D]/50 rounded-2xl"
            >
                <div className="h-full bg-[#205C36]/60 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#C7962D]/40 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C7962D]/5 group-hover:-translate-y-1">

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

                        
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow relative bg-gradient-to-br from-white/[0.03] to-transparent">
                        <h3 className="text-white/90 font-semibold font-lora text-base sm:text-lg lg:text-xl leading-snug mb-4 line-clamp-3 group-hover:text-[#C7962D] transition-colors duration-300 drop-shadow-sm">
                            {news.title}
                        </h3>

                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10 relative z-10">
                            <span className="text-[11px] sm:text-xs font-quicksand font-bold text-[#C7962D] uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                                Read Article
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-[#C7962D]/10 group-hover:bg-[#C7962D] transition-colors duration-300 border border-[#C7962D]/30 group-hover:border-transparent">
                                <FaArrowRight className="text-[#C7962D] group-hover:text-white text-xs sm:text-sm -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export default memo(NewsCard);
