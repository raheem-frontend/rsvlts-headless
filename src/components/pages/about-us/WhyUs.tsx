import ArrowWithLongTail from "@/assets/icons/ArrowWithLongTail";
import Star from "@/assets/icons/Star";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhyUs() {
  return (
    <section className="mb-[50px]">
      <div className="relative w-[100%] flex flex-col items-center justify-center px-[32px] pt-[100px] pb-[120px] bg-white">
        <div className="absolute md:top-[-22px] top-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>
        <div className="absolute md:bottom-[-30px] bottom-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-[#00283b] -rotate-1"></div>

        <p className="max-w-[768px] text-center text-[16px text-[#151515] mt-[16px]">
          RSVLTS is an apparel brand born from a love of sports, pop culture,
          and above all, having a kickass time. Founded in Hoboken, New Jersey,
          by two Seton Hall alumni, we turned a crushing cease and desist from a
          major movie studio into an official clothing partnership. That one
          license was then spun into many to bring you the movies, shows,
          artists, and sports leagues you love on the high-quality products we
          obsess over. This is clothing for the bold and fun, for those who Dare
          Mighty Things.
        </p>
      </div>
      <div className="relative w-[100%] flex flex-col items-center justify-center px-[16px] pt-[140px] pb-[140px] bg-[#00283b] text-white">
        <div className="absolute md:top-[-32px] top-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>
        <div className="absolute md:bottom-[-30px] bottom-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>
        
        <Image src={"/images/dare-mighty-things.svg"} width={716} height={121} alt="dare mighty things"
        className="absolute top-[-20px] z-[999999]"
        />

        <h3 className="text-[36px] font-bold leading-[1] mb-[16px]">
          WHY RSVLTS?
        </h3>
        <p className="max-w-[768px] text-center text-[14px]">
          Our namesake, Teddy Roosevelt, was more than our 26th president. He
          was an adventurer, amateur boxer, writer, and conservationist. He
          tried to squeeze every drop out of life that he could. And when he
          believed in something, he went for it. To say it plainly, he’s not on
          Mount Rushmore by accident.Can you think of someone better to name a
          brand after? Neither can we.
        </p>
      </div>
    </section>
  );
}

export default WhyUs;
