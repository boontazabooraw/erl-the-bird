"use client";

import FBottomHalf from "./FBottomHalf";
import FTopHalf from "./FTopHalf";
import HeroLogoWrapper from "./HeroLogoWrapper";

const FirstWrapper = () => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        <FTopHalf />
        <FBottomHalf />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <HeroLogoWrapper />
      </div>
    </div>
  );
};

export default FirstWrapper;
