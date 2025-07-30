import ArrowWithLongTail from "@/assets/icons/ArrowWithLongTail";
import Star from "@/assets/icons/Star";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PDPDetails() {
  return (
    <section className="my-[50px]">
      <div className="relative w-[100%] flex flex-col items-center justify-center px-[16px] pt-[66px] pb-[66px] bg-[#00283b] text-white">
        <div className="absolute md:top-[-32px] top-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>
        <div className="absolute md:bottom-[-30px] bottom-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-[#00283b] -rotate-1"></div>
        <h3 className="text-[36px] font-bold leading-[1] mb-[16px]">
          All-Day Polo: A hole in one..
        </h3>
        <p className="max-w-[750px] text-center text-[16px]">
          Our top-of-the-line performance-meets-leisure material, the All-Day
          Polo features a relaxed cut that hugs you in the right places without
          being super tight anywhere. We cut it a tad shorter so you can
          comfortably wear it tucked, untucked, or as a cape after a few Arnold
          Palmers at the 19th hole.
        </p>
        <div className="flex mt-[44px] w-[100%] justify-center flex-wrap lg:gap-[0px] md:gap-[100px] gap-[20px]">
          <div className="max-w-[150px]  w-[150px] flex flex-col items-center justify-center gap-[28px]">
            <Image
              src={"/images/breathable.svg"}
              width={60}
              height={60}
              alt="feature image"
            />
            <p className="text-[16px] uppercase ">Breathability</p>
          </div>
          <div className="max-w-[150px]  w-[150px] flex flex-col items-center justify-center gap-[20px]">
            <Image
              src={
                "https://www.rsvlts.com/cdn/shop/files/stretch.svg?v=1712607113"
              }
              width={60}
              height={60}
              alt="feature image"
            />
            <p className="text-[16px] uppercase ">Stretchable</p>
          </div>
          <div className="max-w-[150px]  w-[150px] flex flex-col items-center justify-center gap-[20px]">
            <Image
              src={
                "https://www.rsvlts.com/cdn/shop/files/comfort.svg?v=1712607113"
              }
              width={60}
              height={60}
              alt="feature image"
            />
            <p className="text-[16px] uppercase ">Comfy Fit</p>
          </div>
          <div className="max-w-[150px]  w-[150px] flex flex-col items-center justify-center gap-[20px]">
            <Image
              src={
                "https://www.rsvlts.com/cdn/shop/files/moisture.svg?v=1712607113"
              }
              width={60}
              height={60}
              alt="feature image"
            />
            <p className="text-[16px] uppercase ">Moisture Tech</p>
          </div>
          <div className="max-w-[150px]  w-[150px] flex flex-col items-center justify-center gap-[20px]">
            <Image
              src={
                "https://www.rsvlts.com/cdn/shop/files/lightweight_74ac9c03-ff47-4082-bfc5-76c6a76bb8e7.svg?v=1712607113"
              }
              width={60}
              height={60}
              alt="feature image"
            />
            <p className="text-[16px] uppercase ">Lightweight</p>
          </div>
        </div>
      </div>
      <div className="relative flex lg:flex-row flex-col w-[100%]    lg:h-[420px] h-[100%]">
        <div className="absolute md:bottom-[-20px] bottom-[-30px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>

        <div
          className=" lg:w-[50%] w-[100%]
  lg:h-[100%] h-[100vh]    
  sm:max-h-[812px] max-h-[412px]  flex flex-col items-center justify-center bg-[#f84141] px-[16px] text-center"
        >
          <h3
            className="text-[36px] font-semibold text-[#1c2e36]"
            style={{
              letterSpacing: "-3px",
            }}
          >
            GET YOUR GEAR, WORRY-FREE
          </h3>
          <p className="max-w-[315px] text-center text-[14px] text-white leading-[24px]">
            Our "Perfect Fit Guarantee" means that if your purchase isn't
            perfect, we'll refund or exchange your item. Buyer does not need to
            beware here.
          </p>
        </div>
        <div
          className="lg:w-[50%] w-[100%]
  lg:h-[100%] h-[100vh]    
  sm:max-h-[812px] max-h-[412px] flex flex-col items-center justify-center bg-[#2f9bca] px-[16px] text-center"
        >
          <Image
            src={
              "https://www.rsvlts.com/cdn/shop/files/RSVLTS_Logo_-_Bolt_-_White_-_CMYK_copy_2_copy.png?v=1740569822&width=1440"
            }
            width={60}
            height={60}
            alt="feature image"
          />

          <div className="flex w-fit text-red-400 mt-[16px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="max-w-[315px] text-center text-[14px] text-white leading-[24px]  mt-[16px]">
            With over 25,000 5-star reviews on our products, you know that this
            stuff is legit. We are a happy customer factory.
          </p>
          <Link href={"/"} className="text-white mt-[48px]">
            <p className="text-[14px]">CHECK OUT THE REVIEWS</p>
            <ArrowWithLongTail />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PDPDetails;
