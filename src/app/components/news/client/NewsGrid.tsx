"use client";
import { memo } from "react";
import NewsCard, { NewsItemType } from "./NewsCard";

interface NewsGridProps {
    newsItems: NewsItemType[];
}

function NewsGrid({ newsItems }: NewsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {newsItems.map((item, index) => (
                <NewsCard key={item.idx} news={item} index={index} />
            ))}
        </div>
    );
}

export default memo(NewsGrid);
