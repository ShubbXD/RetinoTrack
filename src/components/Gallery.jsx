"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const items = [
    {
      src: "https://images.pexels.com/photos/3846007/pexels-photo-3846007.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Image Acquisition",
      description:
        "Capturing high-resolution retinal images with precision cameras for accurate analysis.",
    },
    {
      src: "https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Image Preprocessing",
      description:
        "Cleaning, normalizing, and enhancing images to prepare for algorithmic detection.",
    },
    {
      src: "https://images.pexels.com/photos/5766073/pexels-photo-5766073.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Detection & Analysis",
      description:
        "Running detection algorithms to identify signs of retinal damage in diabetic patients.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Process Involved
        </h2>
        <p className="text-lg text-white/80">
          This section explains the process involved in detecting diabetic
          retinopathy, from capturing images to analyzing them for early
          detection.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mt-16 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex-1 group overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-80 md:h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-10">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-sm mt-2 text-white/80">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
