"use client";

import Image from "next/image";

const HeroLogoWrapper = () => {
  return (
    <div>
      <Image
        src={"/images/logos/erl-the-bird-text.png"}
        alt="Logo Vertical"
        width={325}
        height={325}
        quality={100}
        className="-rotate-14 lg:hidden md:hidden block"
      />
      <Image
        src={"/images/logos/erl-the-bird-text.png"}
        alt="Logo Vertical"
        width={450}
        height={450}
        quality={100}
        className="-rotate-14 lg:hidden md:block hidden"
      />
      <Image
        src={"/images/logos/erl-the-bird-text-x.png"}
        alt="Logo Horizontal"
        width={1000}
        height={1000}
        quality={100}
        className="-rotate-8 lg:block md:hidden hidden"
      />
    </div>
  );
};

export default HeroLogoWrapper;
