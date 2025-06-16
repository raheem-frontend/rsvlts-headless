import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../SearchInput";
import Heart from "@/assets/icons/Heart";
import User from "@/assets/icons/User";
import Cart from "@/assets/icons/Cart";
import AnnouncementBar from "./AnnouncementBar";

function Navbar() {
  return (
    <nav className="shadow fixed bg-white left-0 right-0 top-0 z-[9999]">
      <AnnouncementBar />

      <div className="flex items-center justify-between pt-[16px] px-[24px]">
        <Link href={"/"}>
          <Image
            src="/brand-logo.svg"
            alt="Logo"
            width={109}
            height={50}
            className="h-[50px] w-[109px]"
          />
        </Link>
        <div className="flex items-center gap-[12px]">
          <SearchInput />
          <Link
            href="/"
            className="w-[34px] h-[100%] flex items-center justify-center ml-[8px]"
          >
            <Heart />
          </Link>
          <Link
            href="/"
            className="w-[34px] h-[100%] flex items-center justify-center"
          >
            <User />
          </Link>
          <Link
            href="/"
            className="w-[34px] h-[100%] flex items-center justify-center"
          >
            <Cart />
          </Link>
        </div>
      </div>
      <div className="w-[100%] flex justify-between items-center px-[8px]">
        <ul className="relative flex items-center justify-start text-[16px] font-[500]">
          <li className=" group uppercase flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              New
            </Link>
            <div className="border-t absolute top-[100%]  left-[-8px] right-0 w-screen px-[24px] pt-[32px] pb-[44px] flex justify-center bg-white  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[9999]">
              <div className="mx-auto flex gap-[24px] justify-start px-[24px]">
                {[
                  {
                    label: "BOB'S BURGERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Bobs_Burgers_315x.png?v=1749764088",
                  },
                  {
                    label: "TAHITIAN TIKI",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_RSVLTS_tiki_315x.png?v=1749584087",
                  },
                  {
                    label: "SUNRISE SCRAMBLE",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_SunriseScramble_315x.png?v=1749404087",
                  },
                  {
                    label: "HERCULES",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_disney_hercules_315x.png?v=1749152087",
                  },
                  {
                    label: "TRANSFORMERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Transformers_315x.png?v=1738433115",
                  },
                  {
                    label: "GUY FIERI",
                    img: "https://www.rsvlts.com/cdn/shop/files/FANDOM_GUY_315x.png?v=1748554487",
                  },
                ].map((item) => (
                  <Link href={`collections/${item.label}`} key={item.label}>
                    <div
                      key={item.label}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden bg-black flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[12px] font-[600] text-center mt-2">
                        {item.label}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className=" group uppercase flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Men
            </Link>
            <div className="border-t absolute top-[100%]  left-[-8px] right-0 w-screen px-[24px] pt-[32px] pb-[44px] flex justify-center bg-white  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[9999]">
              <div className="mx-auto flex gap-[24px] justify-start px-[24px]">
                {[
                  {
                    label: "BOB'S BURGERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Bobs_Burgers_315x.png?v=1749764088",
                  },
                  {
                    label: "TAHITIAN TIKI",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_RSVLTS_tiki_315x.png?v=1749584087",
                  },
                  {
                    label: "SUNRISE SCRAMBLE",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_SunriseScramble_315x.png?v=1749404087",
                  },
                  {
                    label: "HERCULES",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_disney_hercules_315x.png?v=1749152087",
                  },
                  {
                    label: "TRANSFORMERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Transformers_315x.png?v=1738433115",
                  },
                  {
                    label: "GUY FIERI",
                    img: "https://www.rsvlts.com/cdn/shop/files/FANDOM_GUY_315x.png?v=1748554487",
                  },
                ].map((item) => (
                  <Link href={`collections/${item.label}`} key={item.label}>
                    <div
                      key={item.label}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden bg-black flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[12px] font-[600] text-center mt-2">
                        {item.label}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className=" group uppercase flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Women
            </Link>
            <div className="border-t absolute top-[100%]  left-[-8px] right-0 w-screen px-[24px] pt-[32px] pb-[44px] flex justify-center bg-white  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[9999]">
              <div className="mx-auto flex gap-[24px] justify-start px-[24px]">
                {[
                  {
                    label: "BOB'S BURGERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Bobs_Burgers_315x.png?v=1749764088",
                  },
                  {
                    label: "TAHITIAN TIKI",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_RSVLTS_tiki_315x.png?v=1749584087",
                  },
                  {
                    label: "SUNRISE SCRAMBLE",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_SunriseScramble_315x.png?v=1749404087",
                  },
                  {
                    label: "HERCULES",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_disney_hercules_315x.png?v=1749152087",
                  },
                  {
                    label: "TRANSFORMERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Transformers_315x.png?v=1738433115",
                  },
                  {
                    label: "GUY FIERI",
                    img: "https://www.rsvlts.com/cdn/shop/files/FANDOM_GUY_315x.png?v=1748554487",
                  },
                ].map((item) => (
                  <Link href={`collections/${item.label}`} key={item.label}>
                    <div
                      key={item.label}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden bg-black flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[12px] font-[600] text-center mt-2">
                        {item.label}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className=" group uppercase flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Kids
            </Link>
            <div className="border-t absolute top-[100%]  left-[-8px] right-0 w-screen px-[24px] pt-[32px] pb-[44px] flex justify-center bg-white  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[9999]">
              <div className="mx-auto flex gap-[24px] justify-start px-[24px]">
                {[
                  {
                    label: "BOB'S BURGERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Bobs_Burgers_315x.png?v=1749764088",
                  },
                  {
                    label: "TAHITIAN TIKI",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_RSVLTS_tiki_315x.png?v=1749584087",
                  },
                  {
                    label: "SUNRISE SCRAMBLE",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_SunriseScramble_315x.png?v=1749404087",
                  },
                  {
                    label: "HERCULES",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_disney_hercules_315x.png?v=1749152087",
                  },
                  {
                    label: "TRANSFORMERS",
                    img: "https://www.rsvlts.com/cdn/shop/files/Fandom_Transformers_315x.png?v=1738433115",
                  },
                  {
                    label: "GUY FIERI",
                    img: "https://www.rsvlts.com/cdn/shop/files/FANDOM_GUY_315x.png?v=1748554487",
                  },
                ].map((item) => (
                  <Link href={`collections/${item.label}`} key={item.label}>
                    <div
                      key={item.label}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden bg-black flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[12px] font-[600] text-center mt-2">
                        {item.label}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Fandoms
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Golf
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              RSVLTS ORIGINALS
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Accessories
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Restocks
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-start text-[16px] font-[500]">
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Gift Cards
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Field Notes
            </Link>
          </li>
          <li className="uppercase  flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]">
            <Link href="/" className="p-[8px] hover:border-b border-[#161515]">
              Rewards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
