"use client";

import FBottomHalf from "./FBottomHalf";
import FTopHalf from "./FTopHalf";

const FirstWrapper = () => {
  return (
    <div className="flex flex-col">
      <FTopHalf />
      <FBottomHalf />
    </div>
  );
};

export default FirstWrapper;
