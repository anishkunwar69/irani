"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
  FaQuoteLeft,
} from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import Container from "../../components/Container";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-[1px] xs:gap-[2px] sm:gap-0.5 md:gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#FBBC05]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* Half star with improved scaling */}
      {hasHalfStar && (
        <div className="relative w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4">
          <svg
            className="absolute w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#FBBC05]/30"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <svg
              className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#FBBC05]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#FBBC05]/30"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "Shrawan Kumar",
    content:
      "Irani Chiya offers a fantastic tea experience with its rich and flavorful brew, served in a warm and inviting setting. The ambiance makes it a great place to relax and enjoy a good cup of tea. While it's a bit pricier than a regular tea shop, the quality and experience make it worth the occasional treat!",
    reviewUrl: "https://g.co/kgs/6nSFqJS",
    initials: "SK",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXCLG-cEm616JbS8jv8rzhHYUaiME1JHaxROIbzm2H1OmcA_JwsPQ=w120-h120-p-rp-mo-ba4-br100",
  },
  {
    name: "Saurav prasad Singh",
    content:
      "If you are looking for the best tea this is the best place for you. Nowadays this is the best place for tea lovers in Kathmandu valley. Irani tea is the best tea which brings me every day at once to drink tea at this place .",
    reviewUrl: "https://g.co/kgs/vKcJYFy",
    initials: "SS",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVX_15ThKFPVC5-zIW1exEEZi4F8pRfcO2gNqGQnotmwyPmork=w120-h120-p-rp-mo-ba4-br100",
  },
  {
    name: "Anup Humagain",
    content:
      "Irani Chiya is an absolute gem of a tea house! The cozy atmosphere and the aroma of freshly made tea welcomed me. The tea selection is exceptional, and the staff's knowledge and passion for tea are evident. I enjoyed a delightful cup of irani chai that was both flavorful and comforting. The warm hospitality and charming ambiance make Irani Chiya a must-visit for tea enthusiasts.",
    reviewUrl: "https://g.co/kgs/TxdyPn7",
    initials: "AH",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWT7ZOnYtYgVWV-WPX9LBQXrK_mmjwibpFIyxcIaIB3gEzRUHVmPQ=w120-h120-p-rp-mo-ba3-br100",
  },
  {
    name: "Arjun Dahal",
    content:
      "Irani Chiya offers a delightful variety of teas, predominantly infused with Iranian flavors. The Masala tea stands out as a personal favorite, boasting a rich blend of spices. For coconut enthusiasts, the Premium option provides a satisfying and unique experience. The diverse tea selection caters to different tastes, making it a recommended spot for tea enthusiasts seeking flavorful and aromatic brews.",
    reviewUrl: "https://g.co/kgs/3G5DdV3",
    initials: "AD",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVCxTwdDCD5hfRXCSvfm4rWwM6nQP4_AvJInKXd3dYezGfJI4u0=w72-h72-p-rp-mo-ba4-br100",
  },
  {
    name: "Purushottam Kunwar",
    content:
      "This cozy tea shop is a hidden gem for Iriani Chiya and Masala Chiya lovers. Exceptional customer service and a tranquil atmosphere make it a must-visit for a genuine taste of Nepal's tea culture.",
    reviewUrl: "https://g.co/kgs/D2jJKYP",
    initials: "PK",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWWEyE03u6U7eHQJ-ars0n_aOKEMtx4SFGvAqVfnDIdRsGw28Zp=w72-h72-p-rp-mo-ba5-br100",
  },
  {
    name: "Sopnil Koirala",
    content:
      "Getting to choose from among a number of tea flavors ,at what i believe, was a reasonable price, was such a relief to get around the Sinamangal area. The hospitality was top notch, would definitely recommend a visit!! ☕️👌",
    reviewUrl: "https://g.co/kgs/6RrDC72",
    initials: "SK",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWpPxwZEBNwjsU1BkipNLRTsj1IWPtd-D9w2uZilRpkl6kHAKMU3Q=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Mega kitchen fabricator nepal",
    content:
      "I had matka chiya it was amazing and was topped with coconut spread which made it more amazing . It is a nice place for tea and chatting with your friends. They also serve biscuits and cookies with the tea. The price was amazingly cheap also .",
    reviewUrl: "https://g.co/kgs/rxW2pw6",
    initials: "MN",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUJ1g6mTmi2Pl1g_nfgMf3JdcQhSSXmmd5gjm80jtfN45xZ1Bk=w72-h72-p-rp-mo-ba4-br100",
  },
  {
    name: "Funny B",
    content: `I was returning from looking at granite for a house at Pashupati Marble in Imadol, Lalitpur. I saw a signboard saying "Iranian Tea" right in front of the gate. Curious about what Iranian tea might be like, I went there and had a cup. It had a different taste than I expected, and I really liked it. After reaching 3 kilometers away, I remembered the taste of that tea and decided to go back. I had another two cups. Great!`,
    reviewUrl: "https://g.co/kgs/tJnMZue",
    initials: "FB",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocL0Jta-Q3TZyT9b5FEQM2qRPbrEMQ-0VUHJQVzXQP92CejlTw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Amit Yadav",
    content:
      "One of the coolest and chill place to hangout with friends along with a huge delicacy of different varieties of at such a affordable price. Everytime the visiting experience is just awesome",
    reviewUrl: "https://g.co/kgs/crRf9pm",
    initials: "AY",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWn4pPfDUnHUsb9FhK7L2D1feUTJayYVcBAFospKYtM5Px8hnuQ6Q=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Nishant Karn",
    content:
      "So few days back I went at it's Koteshwor branch along with my friend Anjali. The Irani special tea tasted soo good that as she was half insane, and after drinking your tea she became full insane. Such a good tea. 🙂",
    reviewUrl: "https://maps.app.goo.gl/DwLruK5GCm9x6j2j9",
    initials: "NK",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLdvQLTW5Y20Sbk0T0s_8a96cm6vIjN8K-Xi8lQt6haLEL_q7cc=w120-h120-p-rp-mo-br100",
  },
  {
    name: "Anish Jaiswal",
    content:
      "It's a good place to have a tea and enjoy with your friends. It provides good service. It has tea options with snacks as well as lassi,too. Tea that I like most from irani chiya is masala tea...",
    reviewUrl: "https://g.co/kgs/1NXouJ6",
    initials: "AJ",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKFUKuQnYObgMW5_e_V7RVny1axsEhteoPlVp7LW36NMF82rw=w72-h72-p-rp-mo-br100",
  },

  {
    name: "veshraj prasai",
    content:
      "Nice spot with a variety of teas, including their signature Irani tea, though I personally didn't enjoy its taste. The regular tea is great and reasonably priced. The place has a cool seating area, and it's usually packed during mornings and evenings. Worth visiting if you're curious about Irani tea!",
    reviewUrl: "https://g.co/kgs/2Uu8UY7",
    initials: "VH",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsE6ed7QlO-bOCVFCiORdIR8aE4AhlUYQPL9VX0JHLqjiVARTrmw=w72-h72-p-rp-mo-ba5-br100",
  },
];

function TestimonialsContent() {
  const [activePage, setActivePage] = useState(0);

  const [testimonialsPerPage, setTestimonialsPerPage] = useState(6);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(4);
      } else {
        setTestimonialsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleMobileCheck = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleMobileCheck();
    window.addEventListener("resize", handleMobileCheck);

    return () => window.removeEventListener("resize", handleMobileCheck);
  }, []);

  const pageCount = useMemo(
    () => Math.ceil(testimonials.length / testimonialsPerPage),
    [testimonialsPerPage]
  );

  const goToPrevPage = useCallback(() => {
    setActivePage((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setActivePage((prev) => Math.min(pageCount - 1, prev + 1));
  }, [pageCount]);

  const goToPage = useCallback((pageIndex: number) => {
    setActivePage(pageIndex);
  }, []);

  const visibleTestimonials = useMemo(
    () =>
      testimonials.slice(
        activePage * testimonialsPerPage,
        (activePage + 1) * testimonialsPerPage
      ),
    [activePage, testimonialsPerPage]
  );

  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="relative space-y-12 xs:space-y-16">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xs:w-[min(300px,80vw)] xs:h-[min(300px,80vw)] sm:w-[min(350px,70vw)] sm:h-[min(350px,70vw)] md:w-[400px] md:h-[400px] bg-[#FFD700] rounded-full blur-[70px] xs:blur-[90px] sm:blur-[110px] md:blur-[140px] lg:blur-[180px] opacity-[0.08] xs:opacity-[0.1] sm:opacity-[0.12] md:opacity-[0.15] lg:opacity-20"></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                Customer Reviews
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
              </h2>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
                What Our{" "}
                <span className="text-[#C7962D] italic">Customers</span> Say
              </h3>
            </motion.div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <div
                key={activePage}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`testimonial-${activePage}-${index}`}
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
                      className="block h-full transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none"
                    >
                      <div className="h-full bg-white/[0.03] backdrop-blur-lg rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#C7962D]/30 hover:shadow-[0_0_15px_rgba(199,150,45,0.15)] transition-all duration-500 flex flex-col cursor-pointer">
                        <div className="p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex-grow">
                          <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1 xs:px-1.5 sm:px-2 md:px-2.5 py-0.5 xs:py-0.5 sm:py-1 md:py-1.5 bg-[#1B4D2E] rounded-full text-[9px] xs:text-[10px] sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">
                            <FaGoogle className="text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs" />
                            <span className="text-white font-medium">
                              Verified Review
                            </span>
                          </div>

                          <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                            <FaQuoteLeft className="text-[#C7962D] text-xs xs:text-sm sm:text-base md:text-lg opacity-50" />
                            <p className="text-white/90 font-quicksand text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 xs:line-clamp-4 sm:line-clamp-5 lg:line-clamp-6">
                              {testimonial.content}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-white/10 p-2.5 xs:p-3 sm:p-4 md:p-5">
                          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
                            <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold font-lora text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg truncate max-w-[110px] xs:max-w-[130px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px]">
                                {testimonial.name}
                              </h4>
                              <div className="-ml-0.5 -mt-0.5">
                                <StarRating rating={testimonial.rating} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 flex justify-center">
              <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
                <button
                  type="button"
                  onClick={goToPrevPage}
                  disabled={activePage === 0}
                  className="relative inline-flex items-center justify-center p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                  style={{
                    borderColor:
                      activePage === 0
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(199,150,45,0.3)",
                    color:
                      activePage === 0 ? "rgba(255,255,255,0.4)" : "#C7962D",
                    cursor: activePage === 0 ? "not-allowed" : "pointer",
                  }}
                  aria-label="Previous page"
                >
                  <span className="sr-only">Previous page</span>
                  <FaChevronLeft
                    className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
                    aria-hidden="true"
                  />
                </button>

                <div className="flex gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
                  {Array.from({ length: pageCount }).map((_, index) => {
                    const showOnMobile =
                      index === 0 ||
                      index === pageCount - 1 ||
                      Math.abs(index - activePage) <= 1;

                    if (!showOnMobile && isMobile) {
                      if (
                        index === activePage - 2 ||
                        index === activePage + 2
                      ) {
                        return (
                          <span
                            key={`ellipsis-${index}`}
                            className="flex items-center justify-center text-white/50 px-1"
                          >
                            …
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full focus:outline-none ${
                          activePage === index
                            ? "border border-[#C7962D] bg-[#C7962D]/10 text-[#C7962D]"
                            : "border border-white/20 hover:border-white/30 bg-transparent text-white/50 hover:text-white/70"
                        } transition-all duration-300 text-[10px] xs:text-xs sm:text-sm md:text-base`}
                        aria-label={`Go to page ${index + 1}`}
                        aria-current={activePage === index ? "page" : undefined}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={goToNextPage}
                  disabled={activePage === pageCount - 1}
                  className="relative inline-flex items-center justify-center p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                  style={{
                    borderColor:
                      activePage === pageCount - 1
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(199,150,45,0.3)",
                    color:
                      activePage === pageCount - 1
                        ? "rgba(255,255,255,0.4)"
                        : "#C7962D",
                    cursor:
                      activePage === pageCount - 1 ? "not-allowed" : "pointer",
                  }}
                  aria-label="Next page"
                >
                  <span className="sr-only">Next page</span>
                  <FaChevronRight
                    className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <div className="mt-2 xs:mt-3 sm:mt-4 text-center">
              <span className="text-white/60 text-[10px] xs:text-xs sm:text-sm font-quicksand">
                Showing page {activePage + 1} of {pageCount}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialsContent;
