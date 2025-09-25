"use client";

import Image from "next/image";

const FBottomHalf = () => {
  return (
    <div
      className="h-[60vh] w-auto bg-orang px-4"
      style={{ clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="h-full w-full flex justify-center items-start pt-20 ">
        <div className="flex flex-row gap-5 -skew-15 skew-x-15">
          <h1 className="text-2xl font-bold">HOME</h1>
          <h1 className="text-2xl font-bold">ABOUT</h1>
          <h1 className="text-2xl font-bold">STREAM</h1>
        </div>
      </div>
    </div>
  );
};

export default FBottomHalf;
