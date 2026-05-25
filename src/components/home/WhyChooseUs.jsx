import {
  Clock3,
  Wallet,
  ShieldCheck,
  PackageCheck,
  MapPinned,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const FEATURES = [
    {
      icon: <Clock3 size={32} />,
      title: "Fast Response",
      desc: "Quick pickup and delivery across your area.",
    },
    {
      icon: <Wallet size={32} />,
      title: "Affordable Rates",
      desc: "Budget-friendly delivery pricing for everyone.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted Riders",
      desc: "Professional and reliable delivery team.",
    },
    {
      icon: <PackageCheck size={32} />,
      title: "Safe Parcel Handling",
      desc: "Your parcels are handled with care and safety.",
    },
    {
      icon: <MapPinned size={32} />,
      title: "Local Jehangira Network",
      desc: "Serving Jehangira and surrounding areas fast.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Customer Support",
      desc: "We’re always available to help customers.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-black">
            Trusted Local Delivery Service
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-red-500 hover:shadow-xl transition duration-300"
            >
              <div className="text-red-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}