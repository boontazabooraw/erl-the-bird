"use client";

import { motion } from "motion/react";

const YtVideoWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <iframe
        src="https://www.youtube.com/embed/ZDvg0RQ80iE?si=go9_K8Hz6D_8zaql"
        title="Erl, The Bird - Storyang Naudlot [Official Music Video]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-video !w-[100%] rounded-3xl"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default YtVideoWrapper;
