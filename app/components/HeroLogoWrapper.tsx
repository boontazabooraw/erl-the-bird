"use client";

import Image from "next/image";

const HeroLogoWrapper = () => {
  return (
    <div>
      <Image
        src={"/images/logos/erl-the-bird-text.png"}
        alt="Logo Vertical"
        width={300}
        height={300}
        quality={100}
        className="-rotate-14 lg:hidden block"
      />
      <Image
        src={"/images/logos/erl-the-bird-text-x.png"}
        alt="Logo Vertical"
        width={700}
        height={700}
        quality={100}
        className="-rotate-8 lg:block hidden"
      />
    </div>
  );
};

export default HeroLogoWrapper;
