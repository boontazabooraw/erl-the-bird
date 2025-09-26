"use client";

import { useEffect } from "react";

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
        style={{ border: "none", width: "100%", height: "100vh" }}
        className="rounded-2xl"
      ></iframe>
    </div>
  );
};

export default InstagramWrapper;
