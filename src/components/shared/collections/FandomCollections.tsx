"use client";

import Image from "next/image";
import Link from "next/link";

export default function FandomCollections({ title, collections }) {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">{title}</h2>

      <div className="flex flex-wrap lg:justify-between justify-center gap-[50px]  mt-[30px]">
        {collections.map((collection) => (
          <Link
            key={collection.name}
            href={`/collections/${collection.href}`}
            className="max-w-[192.25px] w-[100%] h-[195px] rounded-full bg-black flex items-center justify-center"
          >
            <Image
              src={collection.logo}
              alt={collection.name}
              width={70}
              height={70}
              className="object-contain w-[100%] h-[100%]"
            />
          </Link>
        ))}
      </div>

      <div className="w-[100%] flex items-center justify-center pt-[32px]">
        <Link
          href={`/collections/${collections[0].handle}`}
          className="uppercase text-[14px] text-[#1c2E36] py-[12px] px-[48px] bg-transparent border border-[#1c2E36]  hover:text-white hover:bg-[#1c2E36] cursor-pointer"
        >
          SHOP ALL FANDOMS
        </Link>
      </div>
    </section>
  );
}
