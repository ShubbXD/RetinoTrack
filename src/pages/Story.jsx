"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  const storySteps = [
    {
      title: "Inception of the Idea",
      description:
        "Our journey started with the vision to prevent avoidable blindness caused by diabetic retinopathy. We noticed the lack of accessible, affordable retinal imaging in rural areas.",
      img: "/images/story1.jpg",
    },
    {
      title: "Research & Development",
      description:
        "We conducted extensive research with ophthalmologists and AI experts to develop a portable and efficient retinal imaging system that can be used anywhere.",
      img: "/images/story2.jpg",
    },
    {
      title: "Testing & Validation",
      description:
        "Our device was rigorously tested in clinics and hospitals to ensure accuracy, reliability, and user-friendliness. Continuous feedback helped refine the technology.",
      img: "/images/story3.jpg",
    },
    {
      title: "Empowering Patients",
      description:
        "With our solution, patients now have access to early detection, continuous monitoring, and timely intervention, helping preserve vision for millions.",
      img: "/images/story4.jpg",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Story
        </h2>
        <p className="text-lg text-white/80">
          From concept to reality, here's how our journey unfolded to make retinal health accessible to all.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {storySteps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold">{step.title}</h3>
              <p className="text-white/80 text-lg">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
