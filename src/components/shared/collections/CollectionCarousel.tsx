/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Spinner from "../Spinner";

export default function CollectionCarousel({
  title,
  products,
  isLoading,
}: {
  title: string;
  products: any[];
  isLoading: boolean;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const CARD_WIDTH = 411; // 395px + ~16px gap

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updatePageCount = () => {
      const visibleWidth = slider.offsetWidth;
      const perPage = Math.floor(visibleWidth / CARD_WIDTH);
      const totalPages = Math.ceil(products.length / perPage);
      setPageCount(totalPages);
    };

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const visibleWidth = slider.offsetWidth;
      const page = Math.round(scrollLeft / visibleWidth);
      setActivePage(page);
    };

    updatePageCount();
    slider.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updatePageCount);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePageCount);
    };
  }, [products.length]);

  const scrollToPage = (pageIndex: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollAmount = slider.offsetWidth * pageIndex;
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">{title}</h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex gap-4 w-max px-2">
          {products.map(({ node }) => (
            <div
              key={node?.id}
              className="relative md:min-w-[395px]  sm:min-w-[218px] md:max-w-[395px] sm:max-w-[218px] snap-start shrink-0 min-w-[180px] max-w-[180px] 
              "
            >
              <Link href={`/products/${node?.handle}`}>
                <Image
                  src={node?.images.edges[0].node.src}
                  alt={node?.images.edges[0].node.altText}
                  width={"300"}
                  height={"300"}
                  className="w-full h-auto"
                />
                {/* <span className="absolute top-[12px] right-[12px] bg-[#F3F1F1] text-[12px] text-[#161515]  px-[16px] py-[8px] rounded uppercase">
                  New
                </span> */}

                <div className="mt-[10px] relative">
                  {/* <button className="cursor-pointer bg-white w-[64px] h-[64px] rounded-full flex items-center justify-center absolute top-[-70px] right-[20px] shadow-lg shadow-gray-400">
                    <svg
                      width={"24px"}
                      height={"20px"}
                      className="icon icon--cart-add"
                      viewBox="0 0 402 345"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Quick Add</title>
                      <path
                        d="M385.694 57.4C394.601 57.4 401.793 64.6736 401.693 73.5799L401.609 81.0221L370.108 235.693C368.59 243.146 362.036 248.5 354.43 248.5H133.764C124.191 248.5 114.754 242.056 112.247 232.819L57.8963 29.3124C56.6425 24.6941 52.435 21.4667 47.6431 21.4667H11.6285C5.56894 21.4667 0.738461 16.4034 1.02352 10.3506V10.3506C1.29022 4.68759 5.95919 0.233337 11.6284 0.233337H48.6431C63.0294 0.233337 75.6731 9.91574 79.4131 23.7811L87.7787 57.4L93.5269 78.6333L133.753 227.267H136.25H348.75L380.349 78.6333H359.367C353.503 78.6333 348.75 73.8801 348.75 68.0167V68.0167C348.75 62.1532 353.503 57.4 359.367 57.4H385.694ZM182.125 306.892C182.125 327.382 165.444 344.05 144.938 344.05C124.431 344.05 107.75 327.382 107.75 306.892C107.75 286.401 124.431 269.733 144.938 269.733C165.444 269.733 182.125 286.401 182.125 306.892ZM160.875 306.892C160.875 298.112 153.724 290.967 144.938 290.967C136.151 290.967 129 298.112 129 306.892C129 315.672 136.151 322.817 144.938 322.817C153.724 322.817 160.875 315.672 160.875 306.892ZM373.375 306.892C373.375 327.382 356.694 344.05 336.188 344.05C315.681 344.05 299 327.382 299 306.892C299 286.401 315.681 269.733 336.188 269.733C356.694 269.733 373.375 286.401 373.375 306.892ZM352.125 306.892C352.125 298.112 344.974 290.967 336.188 290.967C327.401 290.967 320.25 298.112 320.25 306.892C320.25 315.672 327.401 322.817 336.188 322.817C344.974 322.817 352.125 315.672 352.125 306.892ZM228.875 176.325C228.875 182.193 233.632 186.95 239.5 186.95V186.95C245.368 186.95 250.125 182.193 250.125 176.325V133.867H292.633C298.497 133.867 303.25 129.113 303.25 123.25V123.25C303.25 117.387 298.497 112.633 292.633 112.633H250.125V70.175C250.125 64.307 245.368 59.55 239.5 59.55V59.55C233.632 59.55 228.875 64.307 228.875 70.175V112.633H186.367C180.503 112.633 175.75 117.387 175.75 123.25V123.25C175.75 129.113 180.503 133.867 186.367 133.867H228.875V176.325Z"
                        fill="black"
                      ></path>
                    </svg>
                  </button> */}
                  <p className="lg:text-[16px] text-[12px] text-[#161515] font-[700] mb-[8px]">
                    {node?.title}
                  </p>
                  <p className="text-[14px] text-[#161515] mb-[8px]">
                    {/* {node?.tags[0]} */}
                  </p>
                  <p className="lg:text-[16px] text-[12px] text-[#161515]">
                    ${node.priceRange.minVariantPrice.amount}{" "}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {Number.isFinite(pageCount) && pageCount > 0 && (
        <div className="flex justify-center gap-2 mt-[16px]">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-[10px] w-[10px] rounded-full transition-all duration-300 border ${
                activePage === index ? "bg-black" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
