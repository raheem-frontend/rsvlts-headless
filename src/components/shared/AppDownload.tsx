import Image from "next/image";
import Link from "next/link";
import React from "react";

function AppDownload() {
  return (
    <section className="w-[100%] px-[16px] py-[32px] ">
      <h2 className="text-[36px] font-[700] text-[#161515] mb-[16px] text-center">
        Download the RSVLTS App
      </h2>
      <div className="w-[100%] flex justify-center gap-[20px] pb-[16px]">
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.rsvlts.rsvlts&hl=en_US&gl=US"
          }
          target="_blank"
          className="flex items-center justify-center"
        >
          <Image
            src="icons/google-play.svg"
            alt="Google Play"
            width={140}
            height={41}
            className="object-contain w-[140px] h-[41px]"
          />
        </Link>
        <Link
          href={""}
          target="_blank"
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/apple-store.svg"
            alt="Google Play"
            width={140}
            height={41}
            className="object-contain w-[140px] h-[41px]"
          />
        </Link>
      </div>
    </section>
  );
}

export default AppDownload;
