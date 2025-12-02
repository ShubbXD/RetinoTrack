"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Cpu,
  ShieldCheck,
  Users,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Eye className="text-green-400 w-8 h-8" />,
      title: "Early Detection",
      description:
        "We prioritize early detection of diabetic retinopathy to prevent vision loss.",
      color: "from-green-900/40 to-green-500/10",
    },
    {
      icon: <Cpu className="text-blue-400 w-8 h-8" />,
      title: "Advanced Technology",
      description:
        "Leveraging AI-powered analysis for accurate retinal screening results.",
      color: "from-blue-900/40 to-blue-500/10",
    },
    {
      icon: <ShieldCheck className="text-teal-400 w-8 h-8" />,
      title: "Reliable & Safe",
      description:
        "Our solutions ensure patient safety and secure handling of sensitive health data.",
      color: "from-teal-900/40 to-teal-500/10",
    },
    {
      icon: <Users className="text-yellow-400 w-8 h-8" />,
      title: "Patient Focused",
      description:
        "Empowering communities and patients with accessible eye health tools.",
      color: "from-yellow-900/40 to-yellow-500/10",
    },
    {
      icon: <Lightbulb className="text-orange-400 w-8 h-8" />,
      title: "Innovative Solutions",
      description:
        "Continuous research and development to enhance diagnostic accuracy.",
      color: "from-orange-900/40 to-orange-500/10",
    },
    {
      icon: <HeartHandshake className="text-pink-400 w-8 h-8" />,
      title: "Care & Trust",
      description:
        "We build trust through reliable solutions that truly help patients preserve sight.",
      color: "from-pink-900/40 to-pink-500/10",
    },
  ];

  return (
    <section className="relative py-24 px-8 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[250px] rounded-full -z-10"></div>

      {/* Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Our <span className="text-white">Core Values</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto"
        >
          The principles that drive our mission to make eye care accessible,
          accurate, and reliable.
        </motion.p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {values.map((val, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br ${val.color} border border-white/10 hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-4 bg-white/10 rounded-full mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{val.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{val.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
