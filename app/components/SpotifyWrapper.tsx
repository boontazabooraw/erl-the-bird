"use client";

import { motion } from "motion/react";

const SpotifyWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <iframe
        src="https://open.spotify.com/embed/track/6hAon5w4G8IVrnprZcqh8s?utm_source=generator"
        width={"100%"}
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default SpotifyWrapper;
