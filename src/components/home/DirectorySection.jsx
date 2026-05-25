import { useState } from "react";

export default function DirectorySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeArea, setActiveArea] = useState("All");

  const SHOPS = [
    {
      name: "Anmol fast food",
      category: "Food",
      area: "Jehangira",
      whatsapp: "923339433704",
      tag: "Popular",
    },
    {
      name: "Al Shifa Pharmacy",
      category: "Medicine",
      area: "Jehangira",
      whatsapp: "923339433704",
      tag: "24/7",
    },
    {
      name: "Noor Islam Karyana Store",
      category: "Grocery",
      area: "Narri",
      whatsapp: "923339433704",
      tag: "Fast",
    },
    {
      name: "Kashmir Sweets",
      category: "Bakery",
      area: "Narri",
      whatsapp: "923339433704",
      tag: "Trending",
    },
  ];

  const categories = ["All", "Food", "Medicine", "Grocery"];
  const areasList = ["All", "Jehangira", "Narri", "Noudeh"];

  const TAG_COLORS = {
    Popular: "#E11D2E",
    Fast: "#2563EB",
    Trending: "#9333EA",
    "24/7": "#16A34A",
  };

  const filtered = SHOPS.filter((shop) => {
    const categoryMatch =
      activeFilter === "All" || shop.category === activeFilter;

    const areaMatch = activeArea === "All" || shop.area === activeArea;

    return categoryMatch && areaMatch;
  });

  return (
    <>
      {/* DIRECTORY */}
      <section id="directory" className="py-20 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-3">
              Local Businesses
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-black">
              Shops & Restaurants
            </h2>

            <p className="text-gray-500 mt-4">
              Browse local businesses and order directly via WhatsApp
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="font-semibold text-sm text-gray-600 self-center mr-2">
              Category:
            </span>

            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeFilter === c
                    ? "bg-red-600 text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Area Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="font-semibold text-sm text-gray-600 self-center mr-2">
              Area:
            </span>

            {areasList.map((a) => (
              <button
                key={a}
                onClick={() => setActiveArea(a)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeArea === a
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          {/* Shop Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((shop, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-500 hover:shadow-xl transition duration-300"
              >
                {/* Banner */}
                <div className="h-28 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  📸 Shop Image
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-black text-base">
                      {shop.name}
                    </h3>

                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: TAG_COLORS[shop.tag] + "20",
                        color: TAG_COLORS[shop.tag],
                      }}
                    >
                      {shop.tag}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mb-5">
                    📍 {shop.area} · {shop.category}
                  </p>

                  <a
                    href={`https://wa.me/${shop.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba57] text-white py-3 rounded-lg font-bold text-sm transition"
                  >
                    💬 Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>No results for this filter combination.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
