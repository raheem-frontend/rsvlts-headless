import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[100%] bg-[#05324f] text-white pt-[24px] px-[16px] text-sm">
      <div className="w-[100%] flex justify-center border-b-[1px] border-white pb-[28px]">
        <div className="w-[100%] max-w-[50%]  px-[16px]">
          <Image
            src="/brand-logo-footer.svg"
            alt="RSVLTS Logo"
            width={100}
            height={40}
            className="mt-[20px]"
          />
          <h3 className="text-[36px] font-[700] mt-[12px] uppercase">
            STAY IN THE LOOP
          </h3>
          <p className=" text-[14px] text-[#5da4ce] uppercase">
            FOMO’S A REAL THING!
          </p>
          <form className="flex flex-col sm:flex-row gap-2 my-[12px]">
            <input
              type="email"
              placeholder="Email Address"
              className="p-[8px]  text-black bg-white w-full max-w-[354px] outline-none border-none"
            />
            <button className="bg-[#5da4ce]  font-semibold text-white text-[16px] px-[11px] py-[10px] hover:bg-white hover:text-[#5da4ce] transition-all duration-300 cursor-pointer">
              SUBMIT
            </button>
          </form>
          <p className="mb-[16px] text-[12px] text-white">
            By clicking submit I accept all marketing emails.
          </p>
        </div>

        <div className="w-[100%] max-w-[50%] flex">
          <div className="w-[50%]">
            <h4 className="text-[24px] font-bold mb-[4px] text-white uppercase">
              ABOUT US
            </h4>
            <ul className="flex flex-col gap-[8px] text-[12px] text-white uppercase">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Field Notes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Authenticity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  #RSVLTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  RSVLTS Insiders
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[50%]">
            <h4 className="text-[24px] font-bold mb-[4px] text-white uppercase">
              NEED A HAND?
            </h4>
            <ul className="flex flex-col gap-[8px] text-[12px] text-white uppercase">
              <li>
                <Link href="#" className="hover:underline">
                  FAQ & Size Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Military Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Do Not Sell My Data
                </Link>
              </li>
            </ul>
            <div>
              <h4 className="text-[24px] font-bold mb-[4px] text-white uppercase mt-[8px]">
                FOLLOW US
              </h4>
              <div className="flex gap-4 mt-2">
                <Link href="#" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src="/icons/tiktok.svg"
                    alt="TikTok"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex  justify-end items-center p-[16px] gap-[20px]">
        <span className=" text-[12px] text-white">Accessibility</span>
        <span className=" text-[12px] text-white">©2025 RSVLTS</span>
      </div>
    </footer>
  );
}
