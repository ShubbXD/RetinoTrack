import React from "react";

const ClientsAndBrand = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl rounded-2xl px-6 py-16 mx-auto bg-gray-900 text-white">
      
      {/* Section 1 – Clients & Partnerships */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Clients & <span className="text-green-500">Partnerships</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          We proudly serve <span className="text-white font-semibold">Quick Commerce platforms</span> 
          and <span className="text-white font-semibold">premium retailers</span> across India, providing them 
          with consistent quality, pre-processed produce, and reliable cold-chain supply.
        </p>

        <p className="mt-6 text-xl text-green-400 italic font-medium">
          Your freshness promise, delivered by KRESALISS.
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-24 h-[2px] bg-green-500/70 mb-16" />

      {/* Section 2 – Brand Feature */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🔹 <span className="text-green-500">FRUNEST</span> – Brand Feature
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          <span className="text-white font-semibold">FRUNEST</span>, by <span className="text-green-400 font-semibold">KRESALISS</span>, 
          represents innovation in natural freshness.
        </p>
        <p className="text-gray-400 mt-4 text-base max-w-3xl mx-auto leading-relaxed">
          With <span className="text-white font-semibold">freeze-dried fruit boxes</span>, 
          <span className="text-white font-semibold"> exotic produce</span>, and 
          <span className="text-white font-semibold"> ready-to-eat salads</span>, FRUNEST is designed 
          for modern consumers seeking convenience without compromise.
        </p>

        <p className="mt-6 text-green-400 text-xl font-medium italic">
          Freshness, Nurtured Naturally.
        </p>
      </div>
    </div>
  );
};

export default ClientsAndBrand;
