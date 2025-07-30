import StarOutlined from "@/assets/icons/StarOutlined";
import { Star } from "lucide-react";
import React from "react";

function ProductReviews() {
  const reviews = null;
  return (
    <section
      className="w-[100%] max-w-[1700px] mx-auto p-[24px]
    "
    >
      {reviews ? (
        <div className="reviews-container">{/* Render reviews here */}</div>
      ) : (
        <div className="mb-[100px]">
          <h3 className="text-[36px] font-bold leading-[1] mb-[16px] text-center text-[#1c2e36] uppercase">
            Reviews
          </h3>
          <div className="mt-[20px] mb-[7px] px-[7px] pb-[7px] flex sm:flex-row flex-col justify-between sm:items-center items-start gap-[16px] w-[100%]">
            <div className="text-black">
              <Star className="inline-block text-[24px] " />
              <Star className="inline-block text-[24px] " />
              <Star className="inline-block text-[24px] " />
              <Star className="inline-block text-[24px] " />
              <Star className="inline-block text-[24px] " />
            </div>
            <button className="px-[12px] py-[6px] border border-[#E8E8E8] rounded-sm hover:bg-[#E8E8E8] cursor-pointer text-[16px] sm:w-fit w-[100%]">
              Write a Review
            </button>
          </div>
          <p className="text-center text-[16px]">
            No Reviews Yet. Want to be the first?{" "}
            <button className="text-[#282828] underline cursor-pointer">write a review</button>
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductReviews;
