"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-24 flex flex-col items-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Vision
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mb-16 text-white/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We envision a world where preventable blindness due to diabetic retinopathy is a thing of the past. Our mission is to make **retinal screening accessible, affordable, and accurate** for everyone—especially patients in rural and underserved communities.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {[
          {
            title: "Early Detection",
            description:
              "Enable proactive diagnosis by providing high-quality retinal imaging at the point of care, reducing the risk of irreversible vision loss.",
          },
          {
            title: "Accessible Healthcare",
            description:
              "Empower patients and clinics in remote areas with affordable, portable, and easy-to-use screening devices.",
          },
          {
            title: "Data-Driven Insights",
            description:
              "Leverage AI and advanced analytics to provide actionable insights, helping healthcare professionals deliver personalized care.",
          },
        ].map((point, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl border border-white/20 bg-white/5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
            <p className="text-white/80">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-16 text-center text-white/70 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Our vision goes beyond technology. It's about giving people their **sight back** and creating a healthier, more empowered society.
      </motion.p>
    </section>
  );
}
