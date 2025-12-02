"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Eye, Activity, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const [cameraFeed, setCameraFeed] = useState("/images/sample-eye.jpg");
  const [blinkCount, setBlinkCount] = useState(0);
  const [eyeStrain, setEyeStrain] = useState(0);
  const [retinopathyScore, setRetinopathyScore] = useState(0);

  // Mock data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkCount((prev) => prev + Math.floor(Math.random() * 3));
      setEyeStrain(Math.floor(Math.random() * 100));
      setRetinopathyScore(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Camera Feed",
      value: cameraFeed,
      icon: <Camera className="text-green-400 w-10 h-10" />,
      description: "Monitors retina images in real-time to detect abnormalities.",
      type: "camera",
    },
    {
      title: "Blink Count",
      value: blinkCount,
      icon: <Eye className="text-blue-400 w-10 h-10" />,
      description:
        "Tracks the frequency of eye blinks to assess patient alertness and eye dryness.",
    },
    {
      title: "Overall Eye Strain",
      value: eyeStrain + "%",
      icon: <Activity className="text-yellow-400 w-10 h-10" />,
      description:
        "Analyzes retina micro-movements and focus patterns to estimate visual strain levels.",
    },
    {
      title: "Retinopathy Risk",
      value: retinopathyScore + "%",
      icon: <AlertCircle className="text-red-400 w-10 h-10" />,
      description:
        "Uses retinal image analysis to detect signs of diabetic retinopathy and calculate risk score.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        Dashboard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="p-6 bg-white/10 rounded-full mb-6">{stat.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{stat.title}</h3>

            {stat.type === "camera" ? (
              <img
                src={stat.value}
                alt="camera feed"
                className="w-full h-64 md:h-72 object-cover rounded-xl mb-4"
              />
            ) : (
              <p className="text-3xl font-semibold mb-4">{stat.value}</p>
            )}

            <p className="text-white/70 text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
