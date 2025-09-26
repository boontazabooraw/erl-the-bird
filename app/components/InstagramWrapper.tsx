"use client";

import { useEffect } from "react";

const iFrameStyle = {
  height: "100vh",
  overflowY: "scroll",
  scrollbarWidth: "thin", // Firefox
  scrollbarColor: "#888 #f1f1f1", // Firefox
  border: "none",
  width: "100%",
};

const InstagramWrapper = () => {
  useEffect(() => {
    // Ensure Elfsight script is loaded only once
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-full" data-elfsight-app-lazy>
      <iframe
        src="https://c6172c3d25884ab48dc94b7a364be7cb.elf.site"
        style={iFrameStyle}
        className="rounded-2xl"
      ></iframe>
    </div>
  );
};

export default InstagramWrapper;
