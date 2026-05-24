import { useState } from "react";

export default function AreasDirectorySection() {
  const AREAS = [
    {
      name: "Jehangira",
      status: "Active",
      shops: "25+",
      riders: "12+",
    },
    {
      name: "Narri",
      status: "Active",
      shops: "15+",
      riders: "4+",
    },
    {
      name: "Nodiah",
      status: "Active",
      shops: "10+",
      riders: "6+",
    },
    {
      name: "Akora Khattak",
      status: "Coming Soon",
    },
    {
      name: "wattar",
      status: "Coming Soon",
    },
    {
      name: "Nowshera Cantt",
      status: "Coming Soon",
    },
     {
      name: "Tordher",
      status: "Coming Soon",
    },
    {
      name: "Khairabad",
      status: "Coming Soon",
    },
    {
      name: "Kund",
      status: "Coming Soon",
    },
    
  ];

  return (
    <>
      {/* AREAS */}
      <section id="areas" className="bg-[#111] py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-3">
              Coverage Zones
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-white">
              Areas We Serve
            </h2>

            <p className="text-gray-500 mt-4">
              Currently active in 3 areas — expanding fast
            </p>
          </div>

          {/* Area Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  a.status === "Active"
                    ? "bg-[#1a1a1a] border-red-600/30"
                    : "bg-[#1a1a1a] border-gray-800 opacity-70"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-white text-2xl font-bold">{a.name}</h3>

                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      a.status === "Active"
                        ? "bg-red-600/20 text-red-500"
                        : "bg-white/10 text-gray-500"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>

                {a.status === "Active" ? (
                  <div className="flex gap-10">
                    <div>
                      <div className="text-red-500 text-3xl font-black">
                        {a.shops}
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Shops</p>
                    </div>

                    <div>
                      <div className="text-red-500 text-3xl font-black">
                        {a.riders}
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Riders</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Coming soon to {a.name}. Stay tuned!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
