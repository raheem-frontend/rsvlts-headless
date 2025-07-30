import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 147px)",
      }}
    >
      <Image
        src="https://www.rsvlts.com/cdn/shop/files/RSVLTS_Group_Photos_1_of_1_1512x.jpg?v=1740569150"
        alt="About Us Banner"
        width={1512}
        height={1000}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Banner;
