import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center w-full py-20 px-6 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 relative z-10"
      >
        <span className="text-green-500">Contact</span> Us
      </motion.h2>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-3xl rounded-2xl bg-black/40 border border-white/10 p-8 shadow-xl backdrop-blur-lg"
      >
        {/* Location */}
        <div className="flex items-start gap-4 mb-6">
          <MapPin className="text-green-400 w-6 h-6 flex-shrink-0" />
          <p className="text-gray-300 text-base leading-relaxed">
            <span className="text-white font-semibold">Plot No. 46</span>, Mancheswar Industrial Estate, <br />
            Bhubaneswar, Odisha – 751017
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 mb-4">
          <Phone className="text-green-400 w-6 h-6 flex-shrink-0" />
          <a
            href="tel:+919777267330"
            className="text-gray-300 hover:text-green-400 transition"
          >
            +91 97772 67330
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 mb-4">
          <Mail className="text-green-400 w-6 h-6 flex-shrink-0" />
          <a
            href="mailto:admin@kresaliss.com"
            className="text-gray-300 hover:text-green-400 transition"
          >
            admin@kresaliss.com
          </a>
        </div>

        {/* Website */}
        <div className="flex items-center gap-4 mb-4">
          <Globe className="text-green-400 w-6 h-6 flex-shrink-0" />
          <a
            href="https://www.kresaliss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition"
          >
            www.kresaliss.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-4">
          <MessageCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
          <a
            href="https://wa.me/919777267330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
