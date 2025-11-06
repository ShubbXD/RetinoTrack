
import { motion } from "framer-motion";
import { Zap, Palette, Plug } from "lucide-react";

export default function About() {


  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl -top-32 -left-20"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl bottom-0 right-0"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Title and Description (shifted left + highlighted) */}
      <div className="max-w-6xl mx-auto text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-green-400">KRESALISS</span>
        </motion.h1>

        <motion.p
          className="text-slate-200 text-base md:text-lg max-w-3xl leading-relaxed font-semibold"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At{" "}
          <span className="text-white font-bold">KRESALISS</span>, we’re
          revolutionizing India’s fresh supply ecosystem. From sourcing premium
          <span className="text-green-400 font-semibold"> fruits and vegetables </span>
          directly from farms to delivering them to{" "}
          <span className="text-yellow-400 font-semibold">
            Quick Commerce, HoReCa, and Retail
          </span>{" "}
          — our tech-enabled cold-chain ensures{" "}
          <span className="text-green-300 font-semibold">
            quality, precision, and sustainability.
          </span>
        </motion.p>
      </div>

      {/* Image + Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-start gap-12 mt-16">
        <motion.img
          src="/3.jpg"
          alt="KRESALISS Operations"
          className="max-w-sm w-full rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { duration: 0.4 },
          }}
        />

        <div className="flex flex-col ml-15 gap-8 max-w-lg">
          {/* Feature 1 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="p-3 bg-green-500/10 border border-green-400/20 rounded-xl">
              <Zap className="text-green-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Optimized Cold-Chain Flow</h3>
              <p className="text-slate-400 text-sm mt-1">
                Every step — from farm pickup to last-mile delivery — is monitored
                for freshness, using IoT-driven logistics.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="p-3 bg-yellow-500/10 border border-yellow-400/20 rounded-xl">
              <Palette className="text-yellow-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Farm-to-Brand Consistency</h3>
              <p className="text-slate-400 text-sm mt-1">
                From exotic fruits to fresh-cut produce, KRESALISS ensures uniform
                quality that aligns with modern brand standards.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="p-3 bg-white/10 border border-white/20 rounded-xl">
              <Plug className="text-white" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Seamless Integration</h3>
              <p className="text-slate-400 text-sm mt-1">
                Partner platforms can plug into our system via API or dashboards —
                ensuring real-time traceability and efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
