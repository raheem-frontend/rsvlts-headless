"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Swiper v9+ uses this
import "swiper/css";
import "swiper/css/pagination";
import useIsHydrated from "@/hooks/useIsHydrated";

const slides = [
  {
    id: 1,
    image:
      "https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Tahiti_Tiki_2025_-_Website_-_Desktop_copy.webp?v=1749591293",
    mobileImg:
      "https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Tahiti_Tiki_2025_-_Website_-_Mobile.webp?v=1749569691&width=1440",
    label: "Shop Tahitian Tiki",
    handle: "tahitian-tiki",
    bgColor: "#000000",
    color: "#14b095",
  },
  {
    id: 2,
    image: "https://www.rsvlts.com/cdn/shop/files/Desktop.webp?v=1749137693",
    mobileImg:
      "https://www.rsvlts.com/cdn/shop/files/Mobile_ef87e85a-012a-4529-9704-875a0c44e901.jpg?v=1749749697&width=1440",
    label: "Shop Hercules",
    handle: "avatar-the-last-airbender",
    bgColor: "#00659d",
    color: "#fed929",
  },
  {
    id: 3,
    image:
      "https://www.rsvlts.com/cdn/shop/files/Desktop_def7080b-ec7a-42d5-9e68-264f9fbe86f0.webp?v=1749231293",
    mobileImg:
      "https://www.rsvlts.com/cdn/shop/files/Mobile_87fa6166-86b2-42f0-9688-a232ec65c306.webp?v=1749231292&width=1440",
    label: "Shop Sunrise Scramble",
    handle: "/collections/Marvel Summer",
    bgColor: "#ffffff",
    color: "#0000ff",
  },
];

export default function HeroCarousel() {
  const hydrated = useIsHydrated();

  if (!hydrated) return null;
  return (
    <div className="hero-carosuel-container relative w-full  overflow-hidden">
      <Swiper
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {slides &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                <Link
                  href={`/collections/${slide.handle}`}
                  className="cursor-pointer"
                >
                  <div className="relative w-full h-full ">
                    {/* Desktop Image */}
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      width={1600}
                      height={834}
                      className="w-full h-full block object-cover desktop-img"
                      priority
                    />
                    {/* Mobile Image */}
                    <Image
                      src={slide.mobileImg}
                      alt={slide.label}
                      width={1000}
                      height={834}
                      className="w-full h-full object-cover lg:hidden block mobile-img"
                      priority
                    />
                    {/* Button */}

                    <Link
                      href={`/collections/${slide.handle}`}
                      className={`absolute bottom-[50px] left-1/2 transform -translate-x-1/2 uppercase text-[14px] py-[12px] px-[48px] sm:px-[36px] xs:px-[24px] border text-center whitespace-nowrap max-w-[90vw] transition-all duration-300`}
                      style={{
                        color: slide.color,
                        backgroundColor: slide.bgColor,
                        borderColor: slide.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = slide.bgColor;
                        e.currentTarget.style.backgroundColor = slide.color;
                        e.currentTarget.style.borderColor = slide.bgColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = slide.color;
                        e.currentTarget.style.backgroundColor = slide.bgColor;
                        e.currentTarget.style.borderColor = slide.color;
                      }}
                    >
                      {slide.label}
                    </Link>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

{
  /* <div className="relative w-full h-[834px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.label}
            width={1600}
            height={834}
            className="w-full h-full object-cover lg:block hidden"
            priority={i === index}
          />
          <Image
            src={slide.mobileImg}
            alt={slide.label}
            width={1000}
            height={834}
            className="w-full h-full object-cover lg:hidden visible"
            priority={i === index}
          />
          <Link
            href={slide.link}
            className={`absolute bottom-[70px] left-1/2 transform -translate-x-1/2 uppercase text-[14px] py-[12px] px-[48px] sm:px-[36px] xs:px-[24px] border cursor-pointer 
    hover:border-black hover:text-black text-center whitespace-nowrap max-w-[90vw]`}
            style={{
              color: slide.color,
              backgroundColor: slide.bgColor,
              borderColor: slide.color,
            }}
          >
            {slide.label}
          </Link>
        </div>
      ))}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={`w-[10px] h-[10px] rounded-full transition-all duration-300 cursor-pointer border border-white ${
              dotIndex === index ? "bg-white scale-125" : "bg-transparent"
            }`}
          />
        ))}
      </div> */
}
