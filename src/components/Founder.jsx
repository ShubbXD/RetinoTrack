import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Deeprabha Singh",
    title: "Founder & Chief Operating Officer",
    role: "R&D and Technology, Product Development, Strategy & Operations",
  },
  {
    name: "Sai Sruti",
    title: "Co-Founder & Director",
    role: "Branding, Marketing, Finance, Modern Trade & HoReCa Growth",
  },
  {
    name: "Shubhangam Biswal",
    title: "IOT Developer",
    role: "Innovation and looking over technology and development of hardware.",
  },
];

export default function Founders() {
  return (
    <section className="relative py-24 px-8 bg-[#0a0a0a] text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[300px] rounded-full -z-10"></div>

      {/* title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Our <span className="text-green-500">Founders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto"
        >
          The visionaries driving our mission of innovation, trust, and sustainable growth.
        </motion.p>
      </div>

      {/* founders grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {founders.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group bg-gradient-to-br from-gray-900/80 to-gray-800/30 p-[1px] rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            {/* glow hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-500/10 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-500"></div>

            <div className="relative z-10 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-1">{f.name}</h3>
              <p className="text-green-400 font-medium text-sm mb-3">{f.title}</p>
              <p className="text-gray-400 text-sm max-w-xs">{f.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
