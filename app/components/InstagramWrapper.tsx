"use client";

import { useEffect } from "react";
import SponsorsWrapper from "./SponsorsWrapper";
import { motion } from "motion/react";

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
    <div className="w-full h-auto" data-elfsight-app-lazy>
      <motion.iframe
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}

        src="https://c6172c3d25884ab48dc94b7a364be7cb.elf.site"
        style={{ border: "none", width: "100%", height: "100vh" }}
        className="rounded-2xl"
      ></motion.iframe>
      {/* HAD TO DO THIS BECAUSE WE ONLY FEW ELEMENTS HERE */}
      <SponsorsWrapper />
    </div>
  );
};

export default InstagramWrapper;
