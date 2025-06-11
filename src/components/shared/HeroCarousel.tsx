"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Tahiti_Tiki_2025_-_Website_-_Desktop_copy.webp?v=1749591293",
    label: "Shop Tahitian Tiki",
    link: "/collections/Shop Tahitian Tiki",
    bgColor: "#000000",
    color: "#14b095",
  },
  {
    id: 2,
    image: "https://www.rsvlts.com/cdn/shop/files/Desktop.webp?v=1749137693",
    label: "Shop Hercules",
    link: "/collections/Spring Breakers",
    bgColor: "#00659d",
    color: "#fed929",
  },
  {
    id: 3,
    image:
      "https://www.rsvlts.com/cdn/shop/files/Desktop_def7080b-ec7a-42d5-9e68-264f9fbe86f0.webp?v=1749231293",
    label: "Shop Sunrise Scramble",
    link: "/collections/Marvel Summer",
    bgColor: "#ffffff",
    color: "#0000ff",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[834px] overflow-hidden">
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
            className="w-full h-full object-cover"
            priority={i === index}
          />
          <Link
            href={slide.link}
            className={`absolute bottom-[70px] left-1/2 -translate-x-1/2 uppercase text-[14px]  py-[12px] px-[48px]  border border-[${slide.color}] hover:border-black hover:text-black hover:bg-[${slide.color}] cursor-pointer`}
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
      </div>
    </div>
  );
}
