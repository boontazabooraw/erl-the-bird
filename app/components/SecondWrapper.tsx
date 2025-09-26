"use client";

import { SiYoutubemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa";

import InstagramWrapper from "./InstagramWrapper";
import SpotifyWrapper from "./SpotifyWrapper";

const SecondWrapper = () => {
  return (
    <div className="p-5 flex flex-col gap-20 bg-orang text-crea text-shadow-lg">
      <div className="flex flex-col gap-2 font-lucky ">
        <h1 className="text-4xl text-center">Listen to our latest single</h1>
        <SpotifyWrapper />
        <h1 className="text-2xl text-center font-lucky">
          Also available on these platforms
        </h1>
        <div className="m-auto flex flex-row gap-2">
          <a
            href="https://link.deezer.com/s/319vQyLF8EqRNU0GDfvC7"
            className="hover:text-[#8c3bfa] transition-colors duration-300"
          >
            <FaDeezer size={60} />
          </a>
          <a
            href="https://music.youtube.com/watch?v=ioHRRQkxI-0&si=arGAAgXABT2pHfbz"
            className="hover:text-[#ff0000] transition-colors duration-300"
          >
            <SiYoutubemusic size={50} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-center font-lucky">INSTAGRAM</h1>
        <InstagramWrapper />
      </div>
    </div>
  );
};

export default SecondWrapper;
