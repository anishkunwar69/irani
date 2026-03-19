"use client";
import { memo } from "react";
import NewsCard, { NewsItemType } from "./NewsCard";

interface NewsGridProps {
    newsItems: NewsItemType[];
}

function NewsGrid({ newsItems }: NewsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center">
            {newsItems.map((item, index) => (
                <div key={item.idx} className={`w-full ${index === 2 ? 'md:col-span-2 lg:col-span-1 flex justify-center lg:block' : ''}`}>
                    <div className={`${index === 2 ? 'w-full md:w-1/2 lg:w-full h-full' : 'h-full'}`}>
                        <NewsCard news={item} index={index} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default memo(NewsGrid);
