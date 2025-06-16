"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsBanner() {
  return (
    <section className="relative h-[825px] w-full overflow-hidden py-[32px] bg-white">
      <Image
        src="https://www.rsvlts.com/cdn/shop/files/MK.jpg?v=1738419871"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Image
          src="/brand-logo-footer.svg"
          alt="RSVLTS Logo"
          width={150}
          height={63}
          className="w-[150px] h-[63px]"
        />
        <p className="text-[18px] mt-[18px]">
          RSVLTS is an apparel brand born from a love of sports, pop culture,
          and above all, having a kickass time. This is clothing for the bold
          and fun, for those who Dare Mighty Things.
        </p>
        <Link
          href="/about"
          className="mt-[18px] uppercase text-[14px] text-white py-[12px] px-[48px] bg-transparent border border-white  hover:text-[#161515] hover:bg-white cursor-pointer"
        >
          About Us
        </Link>
      </div>
    </section>
  );
}
