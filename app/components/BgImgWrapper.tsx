"use client";

import Image from "next/image";

const BgImgWrapper = () => {
  return (
    <>
      <Image
        src={"/images/cover.jpg"}
        alt="Background Image"
        fill
        priority
        quality={100}
        className="brightness-40 saturate-150"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export default BgImgWrapper;
