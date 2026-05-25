
const SERVICES = [
  {
    icon: "🍔",
    title: "Food Delivery",
    desc: "Order delicious meals from local restaurants and fast food shops.",
    time: "20-30 mins",
  },
  {
    icon: "🛒",
    title: "Grocery Delivery",
    desc: "Daily groceries and household essentials delivered quickly.",
    time: "30-40 mins",
  },
  {
    icon: "💊",
    title: "Medicine Delivery",
    desc: "Get medicines and pharmacy products delivered safely.",
    time: "15-25 mins",
  },
  {
    icon: "📦",
    title: "Parcel Delivery",
    desc: "Send and receive parcels anywhere in your area.",
    time: "25-35 mins",
  },
  {
    icon: "🏪",
    title: "Local Shops",
    desc: "Shop from trusted local businesses near your location.",
    time: "20-45 mins",
  },
  {
    icon: "🥤",
    title: "Beverages",
    desc: "Cold drinks, juices, tea and more delivered instantly.",
    time: "15-20 mins",
  },
  {
    icon: "📚",
    title: "Urgent Documents",
    desc: "Quick delivery of important papers and documents.",
    time: "15-20 mins",
  },
];



export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-3">
            What We Deliver
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-black">
            Our Services
          </h2>

          <p className="text-gray-500 mt-4 text-[15px]">
            Everything you need, delivered to your door
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:border-red-600 hover:shadow-[0_8px_30px_rgba(225,29,46,0.15)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-5">{s.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {s.desc}
              </p>

              {/* Time Badge */}
              <div className="inline-block bg-red-600/10 text-red-600 px-4 py-1 rounded-full text-xs font-bold">
                ⏱ {s.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
