import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Info } from "lucide-react";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="relative w-full bg-[#0a0a0a] text-gray-300 py-16 flex flex-col items-center justify-center">
        {/* Brand Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-wide"
        >
          <span className="text-green-500">KRESALISS</span>
        </motion.h1>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-sm text-gray-400"
        >
          © 2025 <span className="text-green-500 font-medium">Kresaliss</span>. All rights reserved.
        </motion.p>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6 mt-6 text-sm flex-wrap justify-center"
        >
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <Globe className="w-4 h-4 text-green-400" />
            <span>www.kresaliss.com</span>
          </a>
          <div className="h-4 w-px bg-white/20"></div>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Privacy Policy</span>
          </a>
          <div className="h-4 w-px bg-white/20"></div>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <Info className="w-4 h-4 text-green-400" />
            <span>Terms of Use</span>
          </a>
        </motion.div>

        {/* Accent Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "60%" }}
          transition={{ duration: 1 }}
          className="mt-10 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"
        ></motion.div>
      </footer>
    </>
  );
}
