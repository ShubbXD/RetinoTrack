import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden bg-[#0a0a0a] text-white pb-20 pt-10">
      
      {/* ───── Navbar ───── */}
      <nav className="absolute top-6 left-0 w-full flex justify-between items-center px-6 md:px-16 lg:px-24 py-5 bg-transparent z-20">
        <div className="text-3xl font-extrabold tracking-wide text-white">
          <span className="text-white font-extrabold">KRESALISS</span>
        </div>
        <ul className="flex space-x-6 text-base md:space-x-10 font-semibold">
          <li>
            <a href="#home" className="hover:text-green-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-400 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-green-400 transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#mission" className="hover:text-green-400 transition-colors">
              Mission
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400 transition-colors">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
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

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start z-10 mt-24 md:mt-36">
        <motion.h1
          className="text-center md:text-left text-4xl leading-[52px] md:text-5xl md:leading-[68px] font-extrabold max-w-xl text-slate-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-green-400">India’s</span>{" "}
          <span className="text-white font-bold">Fresh Supply Partner</span>{" "}
          for{" "}
          <span className="text-yellow-400 font-semibold">
            Quick Commerce
          </span>{" "}
          & <span className="text-green-400 font-semibold">Beyond</span>.
        </motion.h1>

        <motion.p
          className="text-center md:text-left text-sm text-slate-300 max-w-md mt-4 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-semibold text-white">KRESALISS</span> bridges{" "}
          <span className="text-green-400 font-semibold">India’s farms</span> with{" "}
          <span className="text-yellow-400 font-semibold">modern supply chains</span> — 
          delivering <span className="text-green-300 font-semibold">exotic fruits</span>,{" "}
          <span className="text-yellow-300 font-semibold">premium vegetables</span>, and{" "}
          <span className="text-white font-semibold">fresh-cut produce</span> for{" "}
          <span className="text-green-400 font-semibold">Quick Commerce</span>,{" "}
          <span className="text-yellow-400 font-semibold">HoReCa</span>, and{" "}
          <span className="text-green-400 font-semibold">Retail</span> with{" "}
          <span className="text-white font-bold">cold-chain precision</span>.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-8 text-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11 font-semibold">
            Learn More
          </button>
          <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-video"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
            <span>Watch Our Story</span>
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.img
        src="/1.jpg"
        alt="KRESALISS Produce"
        className="max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] rounded-xl shadow-lg z-10 mt-10 md:mt-32"
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.4 },
        }}
      />
    </section>
  );
}
