"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PenTool } from "lucide-react";

export default function PathFlow() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  // THEME SETTINGS
  const theme = {
    primary: "#FFFFFF",   // Line & Pen icon white
    secondary: "#9CA3AF", // Faded stroke
    text: "#FFFFFF",      // All text white
    bgColor: "#000000",   // Full section black background
    fontFamily: "'Poppins', sans-serif",
  };

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      const scrollTop = window.scrollY;

      const scrollStart = containerTop - window.innerHeight * 0.5;
      const scrollEnd =
        containerTop + containerHeight - window.innerHeight * 1.2;

      let scrollPercent = 0;
      if (scrollTop < scrollStart) scrollPercent = 0;
      else if (scrollTop > scrollEnd) scrollPercent = 1;
      else scrollPercent = (scrollTop - scrollStart) / (scrollEnd - scrollStart);

      scrollPercent = Math.pow(scrollPercent, 0.85);
      setScrollPercentage(scrollPercent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const penProgress = useMotionValue(0);
  useEffect(() => {
    penProgress.set(scrollPercentage);
  }, [scrollPercentage, penProgress]);

  const getPenPosition = () => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const length = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(length * scrollPercentage);
    return point;
  };

  const penPos = getPenPosition();

  // Path Shape
  const pathData = `
    M50 400 
    C300 800, 700 200, 950 600
    S150 1400, 850 1800
    S100 2200, 200 2600
  `;

  // Updated Project Vision Steps
  const journeySteps = [
    {
      title: "Understanding the Problem",
      text: "Millions of diabetic patients suffer silent retinal damage due to delayed screenings and avoidable blindness.",
      x: 50,
      y: 10,
    },
    {
      title: "Designing a Patient-Friendly Solution",
      text: "We aim to build a portable, affordable, blink-proof eye imaging device for home and rural clinics.",
      x: 300,
      y: 750,
    },
    {
      title: "Continuous Eye Monitoring",
      text: "Our system enables regular updates instead of yearly scans, helping early detection of Diabetic Retinopathy.",
      x: 100,
      y: 1500,
    },
    {
      title: "Accessible Healthcare for All",
      text: "Our vision is to empower patients with technology that protects sight—anywhere, anytime.",
      x: 700,
      y: 2500,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full relative"
      style={{
        minHeight: "3200px",
        backgroundColor: theme.bgColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-7xl font-bold text-white text-center pt-12 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Vision
      </motion.h2>

      <div className="w-full h-full pointer-events-none relative">
        <svg
          width="100%"
          height="2800"
          viewBox="0 0 1000 2800"
          className="absolute top-0 left-0"
        >
          {/* Background path */}
          <path
            d={pathData}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="6"
            fill="none"
          />

          {/* Foreground animated path */}
          <path
            ref={pathRef}
            d={pathData}
            stroke={theme.primary}
            strokeWidth="6"
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - scrollPercentage * pathLength}
            strokeLinecap="round"
          />

          {/* Pen icon */}
          <motion.g style={{ translateX: penPos.x, translateY: penPos.y }}>
            <PenTool size={40} color="#FFFFFF" />
          </motion.g>
        </svg>

        {/* Step Elements */}
        {journeySteps.map((p, i) => (
          <motion.div
            key={i}
            className="absolute max-w-2xl"
            style={{ left: p.x, top: p.y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="relative mb-4">
              <div
                className="text-[100px] sm:text-[120px] font-extrabold leading-none"
                style={{
                  WebkitTextStroke: `3px ${theme.secondary}`,
                  WebkitTextFillColor: "transparent",
                }}
              >
                {i + 1}
              </div>
            </div>

            <div
              className="border-t-2 border-dashed mb-4"
              style={{ borderColor: theme.secondary }}
            ></div>

            <div className="space-y-3">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: theme.text }}
              >
                {p.title}
              </div>
              <div
                className="text-lg sm:text-xl leading-relaxed font-medium"
                style={{ color: "#FFFFFF" }}
              >
                {p.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
