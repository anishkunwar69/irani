import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

import Container from "../Container";
import ClientBranchCarousel from "./client/ClientBranchCarousel";
import ClientHeader from "./client/ClientHeader";
import ClientHeroCarousel from "./client/ClientHeroCarousel";

const BRANCH_IMAGE_PATH = "/branch.jpg";

type BranchLocation = {
  name: string;
  address: string;
  mapUrl: string;
  contact: string;
  hours: string;
  imgUrl: string;
  hasGoogleMaps: boolean;
  isCenter?: boolean;
};

const branchLocations: BranchLocation[] = [
  {
    name: "Irani Chiya - Main Branch",
    address: "Tinkune, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIwpHi5I27gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQl0ZWFfc3RvcmU&phdesc=R8YRAXBR-Y0&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVVPjBsAGes5MXLzzkuNjCPF&daddr=M8MW%2B974,+Subidha+Marg,+Kathmandu+44600",
    contact: "+977-9763596372",
    hours: "6:00 AM - 10:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/tti6axczorwqzx4omgeb",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Jadibuti",
    address: "Jadibuti, Kathmandu",
    mapUrl:
      "https://www.google.com/maps/dir//Kathmandu+44600/@27.6724266,85.2656097,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb198954b9ea11:0xfdc36dd62c528c08!2m2!1d85.3480065!2d27.6724534?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    contact: "+977-9849887974",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/bxkpcbevoxw7nzlpokw6",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Lokanthali",
    address: "Lokanthali, Kathmandu",
    mapUrl:
      "https://www.google.com/maps/dir//M9C4%2BXMR,+Bhaktapur+44600/@27.6724515,85.2742364,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb1b005e6cd1f5:0x18105445f9806969!2m2!1d85.3566375!2d27.6724793?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    contact: "+977-9818791384",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/it8dmc5xmttcsrjdqvrq",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Setopul",
    address: "Setopul, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjINCAIQABiGAxiABBiKBTINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTIGCAYQRRg8MgYIBxBFGDzSAQgzODQ3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KcHU2kHSGes5MeXKOIWX3n9h&daddr=Setopul,+Kathmandu+44600",
    contact: "+977-9808921454",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/tpdasabvu6l8328dldmr",
    hasGoogleMaps: true,
    isCenter: true,
  },
  {
    name: "Irani Chiya - Tikathali",
    address: "Tikathali, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIr6rH8s-ygIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=7g6-WLqNVWA&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYN4ElEAG-s5McrLW08wWk8m&daddr=Mahalaxmi+44600",
    contact: "+977-9851310532",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/bhtggnir0qklp7sl4inj",
    hasGoogleMaps: true,
    isCenter: true,
  },
  {
    name: "Irani Chiya - Sinamangal",
    address: "Sinamangal, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIg9_99py9gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=9Yex5RGu8rE&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVPOFEsAGes5MWOiV-cQGCgb&daddr=M8XX%2B3PG,+Kathmandu+44600",
    contact: "+977-9849300844",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/jneouzmufmsfdkrxwqkh",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Baneshwor",
    address: "Bhimsengola Marga, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFI0NPcsaW7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=1TO3F6bfh7I&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KWuxMnQAGes5MblsGPBxC9OX&daddr=M8VV%2B8RF,+Bhimsengola+Marg,+Kathmandu+44600",
    contact: "+977-9767648218",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/r0obfrwqc2w3o7s3xak9",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Imadol",
    address: "Bojepokhari, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIy9-d4Pm6gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=h25d7u2FR84&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYtjiFsAGes5MXhWuRT_XrPb&daddr=M87X%2B3HC,+Mahalaxmi+44705",
    contact: "+977-9807659081",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/bevyppyat8o4ykkci2wa",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Chyasal",
    address: "Chyasal, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KeWKWwUAGes5MbErX1Pm2-MC&daddr=M8FP%2B22R,+Shahid+Shukra+Raj+Sadak+Paschim,+Lalitpur+44600",
    contact: "+977-9742831495",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/hrkxfdzq6oy4fprdoqih",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Chabahil",
    address: "Chabahil, Kathmandu",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KQtbkHwAGes5MfB3RjVxAwh_&daddr=P88W%2B8J9,+Kathmandu+44600",
    contact: "+977-9709737912",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/vlxyui5iwqqqtiunluv8",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Mahalaxmi",
    address: "Mahalaxmi, Lalitpur",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIxPznmry7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQRjYWZl&phdesc=ukpzSAcLP_Y&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=Kb0koU4AF-s5MWR92ielfnxr&daddr=M84X%2BR7M,+Mahalaxmi",
    contact: "+977-9849136505",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/qe9yowl7t79nxhakyfqn",
    hasGoogleMaps: true,
  },
  {
    name: "Irani Chiya - Koteshwor",
    address: "Kotdevi Marga, Koteshwor",
    mapUrl: "",
    contact: "+977-9841107048",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/qpbllaiek7jwlfld13ex",
    hasGoogleMaps: false,
  },
  {
    name: "Irani Chiya - Kapan",
    address: "Kapan, Kathmandu",
    mapUrl: "",
    contact: "+977-9764624248",
    hours: "6:00 AM - 9:00 PM",
    imgUrl:
      "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/branches/xu4vscr3xoreq37vekjn",
    hasGoogleMaps: false,
  },
];

export { branchLocations };
export type { BranchLocation };

const heroImages = [
  {
    src: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/bszhamzjzwfmje5c89yb",
    alt: "Premium Tea Experience",
  },
  {
    src: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/kmlucuboukgxlehsr1bl",
    alt: "Authentic Tea Culture",
  },
  {
    src: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/gg02xfjkiufpev3fygby",
    alt: "Relaxing Tea Environment",
  },
];

export { heroImages };

function HeroContent() {
  return (
    <div className="relative">

      <ClientHeader />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-8 xl:gap-x-12 pt-28 sm:pt-32 md:pt-36 xl:pt-40 pb-4 xl:pb-8">
          <div className="col-span-1 xl:col-span-5 flex flex-col justify-center">
            <div className="relative z-10 lg:max-w-none">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center">
                  <div className="h-px w-10 sm:w-14 md:w-16 lg:w-20 bg-gradient-to-r from-[#C7962D] to-[#C7962D]/20"></div>
                  <span className="ml-3 font-quicksand text-[#C7962D] tracking-wider uppercase text-base sm:text-lg md:text-lg lg:text-xl font-medium">
                    Welcome to{" "}
                    <b className="font-semibold md:relative md:inline-block md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-full md:after:h-0.5 md:after:bg-[#C7962D]/40">
                      Irani Chiya
                    </b>
                  </span>
                </div>
              </div>

              <h1 className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-[65px] lg:leading-[1.05] xl:text-[55px] xl:leading-[1] hero-2lg:text-6xl font-bold mb-5 sm:mb-7 md:mb-6 lg:mb-8 leading-tight text-white drop-shadow-sm md:drop-shadow-md">
                <span className="block mb-2 sm:mb-3 md:mb-4">
                  Where Every Cup
                </span>
                <span>
                  Tells a{" "}
                  <span className="inline-block relative">
                    <span className="bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] bg-clip-text text-transparent md:drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                      Story
                    </span>
                  </span>
                </span>
              </h1>

              <div className="h-0.5 bg-gradient-to-r from-[#C7962D]/90 to-transparent mb-6 sm:mb-7 hidden sm:block lg:block xl:hidden"></div>

              <div className="relative sm:before:absolute sm:before:-inset-1 md:before:-inset-2 sm:before:bg-[#C7962D]/5 md:before:bg-gradient-to-r md:before:from-[#C7962D]/10 md:before:to-transparent sm:before:rounded-xl sm:before:-z-10 sm:before:backdrop-blur-[20px] lg:before:backdrop-blur-[30px] lg:before:block xl:before:hidden">
                <p className="font-quicksand text-lg sm:text-xl sm:tracking-wide md:text-[22px] md:leading-[30px] md:tracking-wide md:font-normal md:px-3 md:py-4 lg:text-[28px] lg:leading-[1.5] lg:tracking-wide lg:font-normal lg:px-4 lg:py-5 xl:p-0 xl:text-lg hero-2lg:text-xl text-white/95 leading-relaxed mb-7 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10 w-full xl:max-w-lg">
                  Step into a world where traditional tea craftsmanship meets
                  modern comfort and{" "}
                  <span className="text-[#DFB668]/95 font-medium sm:text-[#DFB668] sm:font-semibold sm:relative sm:border-b sm:border-[#DFB668]/30 md:border-none md:relative md:inline-flex md:px-1 md:before:absolute md:before:inset-0 md:before:bg-[#DFB668]/10 md:before:rounded md:before:-z-[1] lg:before:bg-transparent lg:font-semibold lg:text-[#DFB668]">
                    authentic heritage
                  </span>
                  . Our carefully curated selection of premium teas create an
                  elegant experience that delights the senses,{" "}
                  <span className="relative md:inline-flex md:px-1 md:mx-0.5 md:font-medium md:before:absolute md:before:inset-0 md:before:bg-[#C7962D]/10 md:before:rounded md:before:-z-[1] md:before:blur-[2px] md:text-white lg:relative lg:inline-flex lg:px-1 lg:mx-0.5 lg:before:absolute lg:before:inset-0 lg:before:bg-[#C7962D]/10 lg:before:rounded lg:before:-z-[1] lg:before:blur-[2px] lg:text-white xl:before:bg-transparent xl:px-0 xl:mx-0">
                    soothes the mind
                  </span>
                  , and enriches your day.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6">
                <Link
                  href="#our-story"
                  className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 lg:py-4 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-[#C7962D]/50 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                >
                  <span className="absolute inset-0 bg-[#C7962D] shadow-sm sm:shadow-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#C7962D] via-[#DFB668] to-[#C7962D] opacity-0 group-hover:opacity-100 group-active:opacity-90 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-lg md:text-xl font-medium text-white font-quicksand">
                    Our Story
                    <HiChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>

                <Link
                  href="#find-us"
                  className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 lg:py-4 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#1B4D2E]"
                >
                  <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/30 transition-colors duration-300"></span>
                  <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C7962D]/20 to-white/5 opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center text-sm sm:text-lg md:text-xl font-medium text-white font-quicksand">
                    Get in Touch
                  </span>
                </Link>
              </div>

              <div className="mt-10 sm:mt-12 md:mt-8 lg:mt-9 xl:mt-12 grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full lg:max-w-2xl xl:max-w-md max-md:mb-3 max-xl:mb-6">
                {[
                  { value: "13+", label: "Branches" },
                  { value: "12+", label: "Varieties" },
                  { value: "4.5", label: "Reviews" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 bg-gradient-to-br from-[#C7962D]/15 to-transparent rounded-lg border border-[#C7962D]/15 shadow-sm shadow-[#C7962D]/5 lg:shadow-lg lg:shadow-[#C7962D]/10"
                  >
                    <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-lora font-bold text-[#C7962D] drop-shadow-sm lg:drop-shadow-md">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-white/80 font-quicksand mt-1.5 lg:mt-2 font-medium whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:col-span-7 relative z-0">
            <div className="absolute top-[10%] right-[10%] w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 xl:w-48 xl:h-48 bg-[#C7962D] rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>

            <ClientHeroCarousel images={heroImages} />
          </div>
        </div>

        <div className="mt-0 mb-12 sm:mb-16 xl:mb-20 relative">
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-[#C7962D]/30 to-[#C7962D]/50"></div>
          <div className="absolute left-1/2 -top-5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C7962D]/70"></div>

          <div className="text-center mb-7 sm:mb-10 xl:mb-[42px]">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-[#C7962D]/70"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#C7962D]/40"></div>
              <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-[#C7962D]/70"></div>
            </div>

            <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block mb-2">
              <span className="relative">
                Find Your Perfect Tea{" "}
                <span className="text-[#C7962D] italic">Haven</span>
              </span>
            </h2>

            <p className="font-quicksand text-[#C7962D] tracking-wider text-xs sm:text-base max-w-2xl mx-auto opacity-80">
              Discover our welcoming spaces across the city, each with its own
              unique character yet the same commitment to excellence
            </p>
          </div>

          <ClientBranchCarousel branchLocations={branchLocations} />
        </div>
      </Container>
    </div>
  );
}

export default HeroContent;
