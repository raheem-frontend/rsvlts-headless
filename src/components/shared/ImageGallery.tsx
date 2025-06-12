"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { url: string; altText?: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const visibleCount = 3;
  const [start, setStart] = useState(0);

  const showNext = () => {
    if (start + visibleCount < images.length) {
      setStart(start + 1);
    }
  };

  const showPrev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <div className="flex gap-[16px]">
      <div className="w-[130px] h-[475px] flex flex-col items-center gap-[12px]">
        <button
          onClick={showPrev}
          disabled={start === 0}
          className="w-[25px] h-[25px] flex items-center justify-center bg-[#373434] rounded-full hover:bg-black transition-all duration-300 ease-in-out"
        >
          <ChevronUp
            color="white"
            size={18}
            className={`${
              start === 0 ? "opacity-50" : ""
            } cursor-pointer font-[700] text-[12px]`}
          />
        </button>
        <div className="w-[100%] h-[405px] flex flex-col gap-[4px] overflow-hidden">
          {images.slice(start, start + visibleCount).map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i + start)}
              className={`w-[128px] h-[128px] cursor-pointer overflow-hidden hover:opacity-70 transition-all duration-300 ease-in-out`}
            >
              <Image
                src={img.url}
                alt={img.altText || `Thumbnail ${i}`}
                width={80}
                height={80}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          ))}
        </div>
        <button
          onClick={showNext}
          disabled={start + visibleCount >= images.length}
          className="w-[25px] h-[25px] flex items-center justify-center bg-[#373434] rounded-full hover:bg-black transition-all duration-300 ease-in-out"
        >
          <ChevronDown
            color="white"
            size={18}
            className={`
              ${start + visibleCount >= images.length ? "opacity-50" : ""}
              cursor-pointer font-[700]
            `}
          />
        </button>
      </div>

      <div className="relative h-[668px] w-[668px]">
        <Image
          src={images[selectedIndex]?.url}
          alt={images[selectedIndex]?.altText || "Selected"}
          fill
          className="object-cover"
        />
        {/* <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow">
          <ZoomIn className="w-5 h-5 text-gray-600" />
        </div> */}
      </div>
    </div>
  );
}
