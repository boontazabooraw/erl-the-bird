"use client";

import { motion } from "motion/react";

import { SiYoutubemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa";

import InstagramWrapper from "./InstagramWrapper";
import SpotifyWrapper from "./SpotifyWrapper";

const SecondWrapper = () => {
  return (
    <div className="p-5 flex flex-col gap-20 bg-orang text-crea text-shadow-lg">
      <div className="flex flex-col gap-2 font-lucky">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl text-center"
        >
          Listen to our latest single
        </motion.h1>
        <SpotifyWrapper />
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl text-center font-lucky"
        >
          Also available on these platforms
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="m-auto flex flex-row gap-2"
        >
          <motion.a
            whileHover={{ rotate: -20 }}
            href="https://link.deezer.com/s/319vQyLF8EqRNU0GDfvC7"
            className="hover:text-[#8c3bfa] transition-colors duration-300"
          >
            <FaDeezer size={60} />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 20 }}
            href="https://music.youtube.com/watch?v=ioHRRQkxI-0&si=arGAAgXABT2pHfbz"
            className="hover:text-[#ff0000] transition-colors duration-300"
          >
            <SiYoutubemusic size={50} />
          </motion.a>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl text-center font-lucky"
        >
          INSTAGRAM
        </motion.h1>
        <InstagramWrapper />
      </div>
    </div>
  );
};

export default SecondWrapper;
