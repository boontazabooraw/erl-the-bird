"use client";

import { motion } from "motion/react";
import Image from "next/image";

const SponsorsWrapper = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full mt-10 p-20 rounded-2xl">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl text-center font-lucky"
      >
        SUPPORTED BY
      </motion.h1>
      <motion.div 
      initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          viewport={{ once: true }}
      className="flex flex-wrap gap-5 justify-center w-full">
        {/* <div className="relative w-[100px] h-[100px] md:w-[100px] md:h-[100px]"> */}
        <Image
          src={"/images/logos/RIMSHOT_LOGO.png"}
          alt="SweetBrag Logo"
          width={300}
          height={100}
          quality={100}
        />
        <Image
          src={"/images/logos/SWEETBRAG_LOGO.png"}
          alt="SweetBrag Logo"
          width={100}
          height={100}
          quality={100}
        />
        <Image
          src={"/images/logos/LOSTBOYSCLUB_LOGO.png"}
          alt="SweetBrag Logo"
          width={100}
          height={100}
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default SponsorsWrapper;
