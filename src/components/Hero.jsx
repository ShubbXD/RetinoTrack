import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* GOOGLE FONT */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          * { font-family: 'Poppins', sans-serif; }
        `}
      </style>

      {/* BACKGROUND SVG */}
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
      </svg>

      {/* NAVBAR */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
        <h2 className="text-xl font-semibold">RetinoTrack</h2>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-slate-300 transition">Home</a>
          <a href="/vision" className="hover:text-slate-300 transition">Vision</a>
          <a href="/story" className="hover:text-slate-300 transition">Story</a>
          <a href="/dashboard" className="hover:text-slate-300 transition">Dashboard</a>
        </div>

        <button className="hidden md:block px-6 py-2.5 text-black bg-white hover:bg-slate-200 active:scale-95 transition-all rounded-full">
          Get in Touch
        </button>

        <button id="open-menu" className="md:hidden active:scale-90 transition">☰</button>
      </nav>

      {/* MOBILE NAV */}
      <div
        id="mobile-navLinks"
        className="fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 -translate-x-full"
      >
        <a href="/">Home</a>
        <a href="/solution">Solution</a>
        <a href="/research">Research</a>
        <a href="/contact">Contact</a>
        <button id="close-menu" className="bg-white text-black h-10 px-3 rounded-md">X</button>
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">

        {/* LEFT SECTION */}
        <motion.div
          className="flex flex-col md:items-start items-center -translate-x-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-3">Empowering Eye Care for Diabetic Patients</span>
          </motion.div>

          <motion.h1
            className="text-center md:text-left text-5xl md:text-6xl font-medium max-w-xl text-slate-50 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A Smart, Patient-Friendly Eye Monitoring System
          </motion.h1>

          <motion.p
            className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Say goodbye to costly hospital visits and blurry scans.
            Our portable, AI-powered eye health device detects blinking,
            improves scan quality, and supports early Diabetic Retinopathy monitoring — from home.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE WITH GLASS & HOVER EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 60, scale: 1 }} // shifted more right
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(255,255,255,0.3)",
          }}
          className="p-4 rounded-2xl backdrop-blur-lg bg-white/10 shadow-xl cursor-pointer transition-transform"
        >
          <img
            src="1.jpg"
            alt="device preview"
            className="max-w-xs sm:max-w-sm lg:max-w-md rounded-lg"
          />
        </motion.div>
      </section>

      {/* NAV SCRIPT */}
      <script>
        {`
          const openMenu = document.getElementById("open-menu");
          const closeMenu = document.getElementById("close-menu");
          const navLinks = document.getElementById("mobile-navLinks");

          openMenu?.addEventListener("click", () => {
            navLinks.classList.remove("-translate-x-full");
            navLinks.classList.add("translate-x-0");
          });

          closeMenu?.addEventListener("click", () => {
            navLinks.classList.remove("translate-x-0");
            navLinks.classList.add("-translate-x-full");
          });
        `}
      </script>
    </>
  );
}
