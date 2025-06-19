/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Check, Star } from "lucide-react";

export default function ReviewSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const reviews = [
    {
      name: "Andrew S.",
      image: "https://images.loox.io/uploads/2025/2/20/TjQVT78Re.jpg",
      text: "Great parka! Fit comfortably and was warm without being too bulky. Wore it on one of the few cold...",
    },
    {
      name: "William L.",
      image: "https://images.loox.io/uploads/2025/2/20/ESKExT3sJ.jpg",
      text: "Wonderful fit and fabric as always!!!",
    },
    {
      name: "Shana R.",
      image: "https://images.loox.io/uploads/2025/2/20/7xvnUCbHt.jpg",
      text: "I wore this Disney performance hoodie on a recent trip to the Grand Canyon (west side). It was...",
    },
    {
      name: "Michael D.",
      image: "https://images.loox.io/uploads/2025/2/18/SpJMA5nTR.jpg",
      text: `Finally got matching shirts!!! Now, just need to get one for "Mum!"`,
    },
    {
      name: "Carlo D.",
      image: "https://images.loox.io/uploads/2025/2/18/lK8if9r7v.jpg",
      text: "Instant buy! Beyond Spooky Season, Day of the Dark Side is a great subtle design for dinner with...",
    },
    {
      name: "Robert W.",
      image: "https://images.loox.io/uploads/2025/2/18/gtDAQBr4j.jpg",
      text: "Conversation piece on the course! Got several compliments during my first round with it.",
    },
    {
      name: "Andrew F.",
      image: "https://images.loox.io/uploads/2025/2/18/WcOqDNVd_.jpg",
      text: "Wonderful shirt and very comfortable!",
    },
    {
      name: "Corey J.",
      image: "https://images.loox.io/uploads/2025/2/18/QNTshfVrz.jpg",
      text: "Wore it to Islands of Adventure for my Jurassic Park day! Got a lot of compliments, even found a...",
    },
    {
      name: "Chris J.",
      image: "https://images.loox.io/uploads/2024/12/10/U3gPAoUZV.jpg",
      text: "This one is actually one of my favorite disney designs!",
    },
    {
      name: "Kurt P.",
      image: "https://images.loox.io/uploads/2024/12/9/aRLzCDwxT.jpg",
      text: "Great jacket. True to size. I got the same size that I wear in kunuflex and performance hoodies...",
    },
    {
      name: "Kate",
      image: "https://images.loox.io/uploads/2024/12/6/jIH72bzg5.jpg",
      text: "My husband absolutely loves these shirts! He tends to be pretty sweaty, but was cool and...",
    },
  ];

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-[100%] my-[36px]">
      <div className="relative px-[28px] max-w-[1500px] mx-auto">
        <button
          ref={prevRef}
          className={`hidden group w-[56px] h-[56px] sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white  transition-opacity duration-300 cursor-pointer shadow-lg shadow-gray-300 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 18"
            className="w-[18px] h-[18px] rotate-180  transition-transform duration-300 group-hover:translate-x-[-4px]"
          >
            <path
              d="m2 2 8 7-8 7"
              stroke="#9a9a9a"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button
          ref={nextRef}
          className={`hidden group w-[56px] h-[56px] sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white transition-opacity duration-300 cursor-pointer shadow-lg shadow-gray-300 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 18"
            className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="m2 2 8 7-8 7"
              stroke="#9a9a9a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={1.1}
          spaceBetween={8}
          breakpoints={{
            200: { slidesPerView: 1.5 },
            370: { slidesPerView: 2.1 },
            550: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          onSlideChange={({ isBeginning, isEnd }) => {
            setIsBeginning(isBeginning);
            setIsEnd(isEnd);
          }}
          className="pb-6"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white max-w-[280px] w-[100%] flex flex-col items-center justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full 2xl:h-[350px] xl:h-[350px] lg:h-[300px] md:h-[275px] sm:h-[275px] h-[191px] object-cover rounded-t-lg mb-3"
                />
                <div className="flex justify-center px-[16px] py-[12px] rounded-lg bg-white shadow w-fit mt-[-34px]">
                  <Star fill="black" size={22} />
                  <Star fill="black" size={22} />
                  <Star fill="black" size={22} />
                  <Star fill="black" size={22} />
                  <Star fill="black" size={22} />
                </div>
                <div className="w-[100%] mt-[21px] pb-[16px] px-[16px]">
                  <h4 className="flex items-center justify-center md:text-[20px] text-[16px] mb-[8px]">
                    {review.name}{" "}
                    <p className=" w-[14px] h-[14px] bg-black rounded-full flex items-center justify-center">
                      <Check
                        size={11}
                        color="white"
                        fontWeight={700}
                        className="font-bold"
                      />
                    </p>
                  </h4>
                  <p className="md:text-[16px] text-[14px] text-black text-center w-full overflow-hidden text-ellipsis xl:line-clamp-3 md:line-clamp-5 line-clamp-2 ">
                    {review.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
