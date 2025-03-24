"use client";
import { motion } from "framer-motion";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import dynamic from 'next/dynamic';
import Container from "../Container";

// Import the client-only map with no SSR
const ClientOnlyMap = dynamic(() => import('../ClientOnlyMap'), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  ) 
});

const branches = [
  {
    name: "Irani Chiya - Main Branch",
    address: "Tinkune, Kathmandu",
    phone: "+977-9763596372",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIwpHi5I27gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQl0ZWFfc3RvcmU&phdesc=R8YRAXBR-Y0&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVVPjBsAGes5MXLzzkuNjCPF&daddr=M8MW%2B974,+Subidha+Marg,+Kathmandu+44600",
    coordinates: { lat: 27.6833983, lng: 85.3457092 },
  },
  {
    name: "Irani Chiya - Jadibuti",
    address: "Jadibuti, Kathmandu",
    phone: "+977-9849887974",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/dir//Kathmandu+44600/@27.6724266,85.2656097,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb198954b9ea11:0xfdc36dd62c528c08!2m2!1d85.3480065!2d27.6724534?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    coordinates: { lat: 27.6724534, lng: 85.3480065 },
  },
  {
    name: "Irani Chiya - Lokanthali",
    address: "Lokanthali, Kathmandu",
    phone: "+977-9818791384",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/dir//M9C4%2BXMR,+Bhaktapur+44600/@27.6724515,85.2742364,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb1b005e6cd1f5:0x18105445f9806969!2m2!1d85.3566375!2d27.6724793?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    coordinates: { lat: 27.6724793, lng: 85.3566375 },
  },
  {
    name: "Irani Chiya - Tikathali",
    address: "Tikathali, Lalitpur",
    phone: "+977-9851310532",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIr6rH8s-ygIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=7g6-WLqNVWA&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYN4ElEAG-s5McrLW08wWk8m&daddr=Mahalaxmi+44600",
    coordinates: { lat: 27.6652582, lng: 85.3580772 },
  },
  {
    name: "Irani Chiya - Sinamangal",
    address: "Sinamangal, Kathmandu",
    phone: "+977-9849300844",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIg9_99py9gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=9Yex5RGu8rE&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVPOFEsAGes5MWOiV-cQGCgb&daddr=M8XX%2B3PG,+Kathmandu+44600",
    coordinates: { lat: 27.6976913, lng: 85.3493278 },
  },
  {
    name: "Irani Chiya - Baneshwor",
    address: "Bhimsengola Marga, Kathmandu",
    phone: "+977-9767648218",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFI0NPcsaW7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=1TO3F6bfh7I&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KWuxMnQAGes5MblsGPBxC9OX&daddr=M8VV%2B8RF,+Bhimsengola+Marg,+Kathmandu+44600",
    coordinates: { lat: 27.693311, lng: 85.3445585 },
  },
  {
    name: "Irani Chiya - Imadol",
    address: "Bojepokhari, Lalitpur",
    phone: "+977-9807659081",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIy9-d4Pm6gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=h25d7u2FR84&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYtjiFsAGes5MXhWuRT_XrPb&daddr=M87X%2B3HC,+Mahalaxmi+44705",
    coordinates: { lat: 27.6625973, lng: 85.3489757 },
  },
  {
    name: "Irani Chiya - Mahalaxmi",
    address: "Mahalaxmi, Lalitpur",
    phone: "+977-9849136505",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIxfznmoy7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQRjYWZl&phdesc=ukpzSAcLP_Y&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=Kb0koU4AF-s5MWR92ielfnxr&daddr=M84X%2BR7M,+Mahalaxmi",
    coordinates: { lat: 27.6570835, lng: 85.3481791 },
  },
  {
    name: "Irani Chiya - Chyasal",
    address: "Chyasal, Lalitpur",
    phone: "+977-9742831495",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KeWKWwUAGes5MbErX1Pm2-MC&daddr=M8FP%2B22R,+Shahid+Shukra+Raj+Sadak+Paschim,+Lalitpur+44600",
    coordinates: { lat: 27.6773, lng: 85.3248 },
  },
  {
    name: "Irani Chiya - Chabahil",
    address: "Chabahil, Kathmandu",
    phone: "+977-9709737912",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KQtbkHwAGes5MfB3RjVxAwh_&daddr=P88W%2B8J9,+Kathmandu+44600",
    coordinates: { lat: 27.7135, lng: 85.3447 },
  },
];

function FindUsContent() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const center: LatLngExpression = [27.6873411, 85.3259783];

  const onMarkerClick = useCallback((branch: any) => {
    setSelectedBranch(branch);
  }, []);

  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container className="relative">
        <div className="relative space-y-12 xs:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 xs:mb-12 sm:mb-16 relative"
          >
            <div className="flex flex-col items-center justify-center relative max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xs:w-[min(300px,80vw)] xs:h-[min(300px,80vw)] sm:w-[min(350px,70vw)] sm:h-[min(350px,70vw)] md:w-[400px] md:h-[400px] bg-[#C7962D] rounded-full blur-[70px] xs:blur-[90px] sm:blur-[110px] md:blur-[140px] lg:blur-[180px] opacity-[0.08] xs:opacity-[0.1] sm:opacity-[0.12] md:opacity-[0.15] lg:opacity-20"></div>
              <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                Visit Us
                <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
              </h2>
              <h3 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
                Find Your Nearest{" "}
                <span className="text-[#C7962D] italic">Irani Chiya</span>
              </h3>
            </div>
            <p className="relative text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-quicksand leading-relaxed max-w-3xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-0 mt-4 xs:mt-5 sm:mt-6">
              With <span className="text-[#C7962D] font-bold">13 branches</span>{" "}
              across the city, we're never too far away. Currently,{" "}
              <span className="text-[#C7962D] font-bold">11 locations</span> are
              available on Google Maps, with more being added soon. Each branch
              offers the same exceptional quality and service that Irani Chiya
              is known for.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 min-[1171px]:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-stretch relative z-[1]"
          >
            <div 
              className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-lg xs:shadow-xl sm:shadow-2xl border border-white/10"
              suppressHydrationWarning
            >
              <div className="h-full w-full">
                <ClientOnlyMap 
                  branches={branches} 
                  center={center as [number, number]} 
                  onMarkerClick={onMarkerClick} 
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 h-full flex flex-col justify-between"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-10 xs:opacity-12 sm:opacity-15 blur-[1px] xs:blur-[2px] sm:blur group-hover:opacity-15 xs:group-hover:opacity-18 sm:group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 bg-[#1B4D2E]/40 backdrop-blur-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
                  <h4 className="font-lora text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                    {selectedBranch.name}
                  </h4>
                  <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-white/80 font-quicksand">
                    <p className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
                      <FaMapMarkerAlt className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5 xs:mt-1" />
                      <span className="line-clamp-2" suppressHydrationWarning>
                        {selectedBranch.address}
                      </span>
                    </p>
                    <p className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
                      <FaPhoneAlt className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <span suppressHydrationWarning>{selectedBranch.phone}</span>
                    </p>
                    <p className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-sm xs:text-sm sm:text-base md:text-lg">
                      <FaClock className="text-[#C7962D] text-base xs:text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <span suppressHydrationWarning>{selectedBranch.hours}</span>
                    </p>
                  </div>
                  <a
                    href={selectedBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 mt-2 xs:mt-3 sm:mt-4 md:mt-5 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-[#C7962D] text-white text-xs xs:text-xs sm:text-sm md:text-base rounded-md xs:rounded-lg hover:bg-[#C7962D]/80 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#C7962D] focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                  >
                    Get Directions
                    <FaMapMarkerAlt className="text-xs xs:text-sm sm:text-base md:text-lg" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group flex-grow"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] to-[#1B4D2E] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-10 xs:opacity-12 sm:opacity-15 blur-[1px] xs:blur-[2px] sm:blur group-hover:opacity-15 xs:group-hover:opacity-18 sm:group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative h-full space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 bg-[#1B4D2E]/40 backdrop-blur-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
                  <h4 className="font-lora text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
                    <GiTeapot className="text-[#C7962D] text-base xs:text-lg sm:text-xl md:text-2xl" />
                    Warm Welcome Awaits You
                  </h4>
                  <p className="text-white/80 font-quicksand text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Step into our cozy tea house where every cup tells a story.
                    Our friendly staff is ready to serve you our signature Irani
                    Chiya, prepared with love and tradition. Whether you're
                    meeting friends or seeking a peaceful moment alone, we've
                    saved a special spot just for you.
                  </p>
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 pt-1 xs:pt-1.5 sm:pt-2">
                    {[
                      "Friendly Atmosphere",
                      "Traditional Recipe",
                      "Cozy Seating",
                      "Free Wi-Fi",
                    ].map((feature, index) => (
                      <span
                        key={index}
                        className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1.5 md:py-2 bg-white/5 backdrop-blur-sm text-[#C7962D] rounded-full text-xs xs:text-xs sm:text-xs md:text-sm font-medium border border-[#C7962D]/30 hover:bg-white/10 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default FindUsContent;
