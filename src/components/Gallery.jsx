import React from "react";
import CircularGallery from "./CircularGallery";

export default function Gallery() {
  const items = [
    { image: "/4.jpg", text: "Farm to Fork" },
    { image: "/5.jpg", text: "Cold Chain Flow" },
    { image: "/6.jpg", text: "Fresh Storage" },
    { image: "/7.jpg", text: "Retail Delivery" },
    { image: "/8.jpg", text: "Smart Logistics" },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Our <span className="text-green-500 font-extrabold">Gallery</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl">
          A glimpse into KRESALISS’s fresh supply chain ecosystem — from farm to market.
        </p>
      </div>

      {/* Gallery */}
      <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
        <CircularGallery
          items={items}
          bend={2.5}
          textColor="#ffffff"   // White text for captions
          borderRadius={0.07}
          font="bold 28px Poppins"
          scrollSpeed={2.2}
          scrollEase={0.06}
        />
      </div>
    </section>
  );
}
