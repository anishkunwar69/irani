"use client";
import { motion } from "framer-motion";
import { GiTeapot } from "react-icons/gi";
import Container from "../Container";
import NewsGrid from "./client/NewsGrid";
import { NewsItemType } from "./client/NewsCard";

const newsItems: NewsItemType[] = [
    {
        idx: 1,
        source: "Setopati",
        title: "Nepali Tea Brand Irani Chiya Expanding Global Footprint",
        url: "https://www.setopati.com/global/other-global/354339",
        image:
            "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1773911265/Whisk_44cd66795801015b06b4e0c031395742dr_a1kcyc.png",
    },
    {
        idx: 2,
        source: "Nari Magazine",
        title: "A Rising Star in the Tea Industry: The Story of Irani Chiya",
        url: "https://narimag.com.np/miscellaneous/2025/12/23/1766487454.html",
        image:
            "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1771560780/thumb_hwufog.png",
    },
    {
        idx: 3,
        source: "Kantipur",
        title: "From 25 Lakhs Initial Investment to 15 Successful Franchises",
        url: "https://ekantipur.com/feature/2025/08/20/the-tea-shop-opened-with-an-investment-of-25-lakhs-now-has-15-franchises-47-50.html",
        image:
            "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1771560783/iranichiya07202025390-2082025035725-1000x0_ppfoaj.jpg",
    },
];

function NewsContent() {
    return (
        <div className="py-14 sm:py-16 md:py-20">
            <Container>
                <div className="relative space-y-12 sm:space-y-16">
                    {/* Header Section */}
                    <div className="text-center mb-10 sm:mb-14 lg:mb-16 relative">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-3 sm:mb-4 inline-flex items-center gap-2 sm:gap-3 justify-center">
                                <GiTeapot className="text-xl sm:text-2xl md:text-3xl" />
                                Featured In
                                <GiTeapot className="text-xl sm:text-2xl md:text-3xl" />
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight sm:leading-[1.2] max-w-[95%] sm:max-w-4xl mx-auto px-2 sm:px-0">
                                Spreading the <span className="text-[#C7962D] italic">Aroma</span>{" "}
                                Globally
                            </h3>
                        </motion.div>
                    </div>

                    <NewsGrid newsItems={newsItems} />
                </div>
            </Container>
        </div>
    );
}

export default NewsContent;
