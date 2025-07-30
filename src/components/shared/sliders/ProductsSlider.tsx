import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../productCards/ProductCard";
import Link from "next/link";

function ProductsSlider({ title, description, collection, data }) {
  console.log("🚀 ~ ProductsSlider ~ data:", data);
  return (
    <section className=" py-[24px] px-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-[24px] md:text-[36px] leading-[1] font-bold uppercase">
          {title}
        </h2>
        {description && (
          <p className="text-center text-[18px] mb-8 text-[#161515]">
            {description}
          </p>
        )}
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={14}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="product-swiper pb-16"
      >
        {data.map(({ node }) => (
          <SwiperSlide key={node?.id}>
            <ProductCard key={node?.id} product={node} />
          </SwiperSlide>
        ))}
      </Swiper>
      {collection && (
        <div className="flex justify-center mt-8">
          <Link
            href={`/collections/${collection.handle}`}
            className=" uppercase text-[14px] text-[#1c2E36] py-[12px] px-[48px] bg-transparent border border-[#1c2E36]  hover:text-white hover:bg-[#1c2E36] cursor-pointer"
          >
            View All Products
          </Link>
        </div>
      )}
    </section>
  );
}

export default ProductsSlider;
