"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "../productCards/ProductCard";

function CollectionTabs({ title, collections = [], banners = [] }) {
  const [activeCollection, setActiveCollection] = useState(
    collections[0] ?? { products: { edges: [] }, title: "", id: "", handle: "" }
  );
  const [activeBanner, setActiveBanner] = useState(
    banners[0] ?? "/images/banner.webp"
  );

  if (!collections.length) {
    return (
      <section className="py-10 text-center">
        <h2 className="text-xl font-semibold">No collections available</h2>
      </section>
    );
  }

  return (
    <section className="w-[100%] min-h-[100%] flex flex-col py-[32px] px-[16px] ">
      <h2 className="text-[36px] text-[#1c2e36] font-[700] text-center uppercase">
        {title}
      </h2>

      <div className="flex justify-center flex-wrap lg:gap-[40px] md:gap-[10px] gap-0  pt-[16px] pb-[32px]">
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            onClick={() => {
              setActiveCollection(collection);
              setActiveBanner(banners[index] ?? "/images/banner.webp");
            }}
            className={`lg:text-[18px] text-[14px] font-[700]  lg:px-[25px] px-[15px] lg:py-[10px] py-[8px] transition-all duration-300 capitalize cursor-pointer border  hover:border-black ${
              activeCollection.id === collection.id
                ? "border-black text-[#000000]"
                : "border-white text-[#161515]"
            }`}
          >
            {collection.title}
          </button>
        ))}
      </div>

      <div className="flex gap-[24px]">
        <div className="lg:w-[50%] w-[100%] grid grid-cols-2 gap-[16px]">
          {activeCollection.products?.edges?.slice(0, 4).map(({ node }) => (
            <ProductCard key={node?.id} product={node} />
          ))}
        </div>

        <div className="w-[50%] relative lg:block hidden">
          <Image
            src={activeBanner}
            width={1000}
            height={1000}
            alt="Collection Banner"
            className="w-full h-full object-cover"
          />
          <Link
            href={`/collections/${activeCollection.handle}`}
            className="uppercase text-[14px] text-white py-[12px] px-[48px] bg-transparent border border-white hover:text-[#161515] hover:bg-white absolute left-[36px] bottom-[48px] cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-center pt-[32px] text-center">
        <Link
          href={`/collections/${activeCollection.handle}`}
          className="uppercase text-[14px] text-[#1c2E36] py-[12px] px-[48px] bg-transparent border border-[#1c2E36]  hover:text-white hover:bg-[#1c2E36] cursor-pointer"
        >
          Shop {activeCollection.title}
        </Link>
      </div>
    </section>
  );
}

export default CollectionTabs;
