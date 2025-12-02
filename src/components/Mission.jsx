import React from "react";
import { motion } from "framer-motion";
import { User, Users, Heart, Eye } from "lucide-react";

export default function Mission() {
  const helpTargets = [
    {
      icon: <User className="text-green-400 w-10 h-10 mt-4" />,
      title: "Diabetic Patients",
      description:
        "Individuals living with diabetes who need regular retinal screenings to prevent vision loss.",
    },
    {
      icon: <Users className="text-yellow-400 w-10 h-10 mt-4" />,
      title: "Rural Communities",
      description:
        "People in remote and underserved areas with limited access to ophthalmologists and diagnostic tools.",
    },
    {
      icon: <Eye className="text-green-400 w-10 h-10 mt-4" />,
      title: "Eye Care Professionals",
      description:
        "Clinics and healthcare providers looking for accessible, portable, and accurate retinal imaging solutions.",
    },
    {
      icon: <Heart className="text-yellow-400 w-10 h-10 mt-4" />,
      title: "Prevent Blindness Initiatives",
      description:
        "Organizations and NGOs focused on early detection and prevention of diabetic retinopathy and related eye diseases.",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden"
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#000000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Section header */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-medium text-white px-10 py-1.5 rounded-full bg-green-950 border border-green-800 w-max mx-auto"
        >
          Who We Help
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mx-auto mt-4 text-white"
        >
          Our Focus is on <span className="text-white">Sight Preservation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto"
        >
          We aim to empower diabetic patients, support rural communities, and assist healthcare professionals by providing early detection tools to prevent vision loss from diabetic retinopathy.
        </motion.p>
      </div>

      {/* Target Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {helpTargets.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`p-[1px] rounded-2xl bg-gradient-to-br from-green-600/40 to-yellow-500/40 hover:from-green-500/60 hover:to-yellow-400/60 transition duration-300`}
          >
            <div className="p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm w-[300px] md:w-[340px] text-center space-y-3 hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
