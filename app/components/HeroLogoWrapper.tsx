"use client";

import { motion } from "motion/react";

import Image from "next/image";

const HeroLogoWrapper = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.2 },
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={"/images/logos/erl-the-bird-text.png"}
        alt="Erl, the Bird Logo"
        width={325}
        height={325}
        quality={100}
        className="-rotate-14 lg:hidden md:hidden block"
        priority
      />
      <Image
        src={"/images/logos/erl-the-bird-text.png"}
        alt="Erl, the Bird Logo"
        width={450}
        height={450}
        quality={100}
        className="-rotate-14 lg:hidden md:block hidden"
        priority
      />
      <Image
        src={"/images/logos/erl-the-bird-text-x.png"}
        alt="Erl, the Bird Logo"
        width={1000}
        height={1000}
        quality={100}
        className="-rotate-8 lg:block md:hidden hidden"
        priority
      />
    </motion.div>
  );
};

export default HeroLogoWrapper;
