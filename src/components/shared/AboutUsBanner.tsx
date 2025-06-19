"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsBanner() {
  return (
    <section className="relative md:h-[825px] sm:h-[651px] h-[380px] w-full overflow-hidden py-[32px] bg-white mt-[32px]">
      <Image
        src="https://www.rsvlts.com/cdn/shop/files/MK.jpg?v=1738419871"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute md:top-[-32px] top-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>
      <div className="absolute md:bottom-[-30px] bottom-[-40px] left-0 right-0 z-[99] min-h-[50px] w-[100%] bg-white -rotate-1"></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white md:px-4 px-[32px]">
        <Image
          src="/brand-logo-footer.svg"
          alt="RSVLTS Logo"
          width={150}
          height={63}
          className="w-[150px] h-[63px]"
        />
        <p className="lg:text-[18px] text-[14px] mt-[18px]">
          RSVLTS is an apparel brand born from a love of sports, pop culture,
          and above all, having a kickass time. This is clothing for the bold
          and fun, for those who Dare Mighty Things.
        </p>
        <Link
          href="/comming-soon"
          className="mt-[18px] uppercase text-[14px] text-white py-[12px] px-[48px] bg-transparent border border-white  hover:text-[#161515] hover:bg-white cursor-pointer"
        >
          About Us
        </Link>
      </div>
    </section>
  );
}
