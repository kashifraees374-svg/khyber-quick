export default function HowItWorksSection() {
  const STEPS = [
    {
      num: "01",
      title: "Choose Service",
      desc: "Select food, grocery, medicine or any local shop.",
    },
    {
      num: "02",
      title: "Place Order",
      desc: "Send order via app or WhatsApp instantly.",
    },
    {
      num: "03",
      title: "Fast Delivery",
      desc: "Our rider delivers within minutes.",
    },
  ];
  return (
    <section className="bg-gray-100 py-16 md:py-20 px-5 md:px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-widest">
            THE PROCESS
          </p>

          <h2
            className="text-3xl md:text-4xl 
              font-extrabold text-black mt-2"
          >
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-xl 
                p-6 md:p-8 shadow-sm hover:shadow-md 
                transition overflow-hidden"
            >
              <div
                className="absolute -top-4 md:-top-6 right-4 
                  text-6xl md:text-7xl font-black text-gray-100"
              >
                {step.num}
              </div>

              <div
                className="w-11 h-11 bg-red-600 text-white 
                  flex items-center justify-center 
                  rounded-lg font-bold mb-4"
              >
                {step.num}
              </div>

              <h3 className="text-lg font-bold text-black mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
