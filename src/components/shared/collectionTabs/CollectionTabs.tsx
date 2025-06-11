import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "../productCards/ProductCard";

function CollectionTabs({ title, collections, banners }) {
  const [activeCollection, setActiveCollection] = useState({
    ...collections[0],
  });
  console.log("🚀 ~ CollectionTabs ~ activeCollection:", activeCollection);
  const [activeBanner, setActiveBanner] = useState(banners[0]);
  return (
    <section className="w-[100%] min-h-[100%] flex flex-col py-[32px] px-[16px] ">
      <h2 className="text-[36px] text-[#1c2e36] font-[700] text-center uppercase">
        {title}
      </h2>
      <div className="flex justify-center gap-[40px] pt-[16px] pb-[32px]">
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            onClick={() => {
              setActiveCollection(collection);
              setActiveBanner(banners[index]);
            }}
            className={`text-[18px] font-[700]  px-[25px] py-[10px] transition-all duration-300 capitalize cursor-pointer border  hover:border-black ${
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
        <div className="w-[50%] grid grid-cols-2 gap-[16px]">
          {activeCollection.products.edges.slice(0, 4).map(({ node }) => {
            console.log("first", node?.images.edges[0].node.altText);
            return <ProductCard key={node?.id} product={node} />;
          })}
        </div>

        <div className="w-[50%] relative">
          <Image
            src={activeBanner ? activeBanner : "/images/banner.webp"}
            width="1000"
            height="1000"
            alt="Collection Banner"
            className="w-[100%] h-[100%] object-cover"
          />
          <Link
            href={`/collections/${activeCollection.handle}`}
            className="uppercase text-[14px] text-white py-[12px] px-[48px] bg-transparent border border-white  hover:text-[#161515] hover:bg-white absolute left-[36px] bottom-[48px] cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center pt-[32px]">
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
