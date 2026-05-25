import {
  ClipboardList,
  Bike,
  PackageCheck,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

export default function DeliveryProcess() {
  const STEPS = [
    {
      icon: <ClipboardList size={32} />,
      title: "Book Order",
      desc: "Place your order through WhatsApp.",
    },
    {
      icon: <Bike size={32} />,
      title: "Rider Assigned",
      desc: "Nearest rider gets assigned instantly.",
    },
    {
      icon: <PackageCheck size={32} />,
      title: "Pickup",
      desc: "Rider picks up your order safely.",
    },
    {
      icon: <MapPinned size={32} />,
      title: "Live Updates",
      desc: "Track delivery progress in real time.",
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Delivery Completed",
      desc: "Fast and secure delivery to your doorstep.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold text-xs tracking-[3px] uppercase mb-3">
            Delivery Process
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-white">
            How Khyber Quick Works
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Fast, simple and reliable delivery process from booking to delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/40 transition"
            >
              {/* Step Number */}
              <div className="absolute top-3 right-3 text-gray-700 font-black text-xl">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}