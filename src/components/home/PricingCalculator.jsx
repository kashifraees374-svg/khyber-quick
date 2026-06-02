import { useState } from "react";
import { Calculator } from "lucide-react";

export default function PricingCalculator() {
  const [distance, setDistance] = useState(1);

  // Price Logic
  const price =
    distance <= 2
      ? 100
      : distance <= 5
      ? 150
      : distance <= 10
      ? 250
      : 400;

  return (
    <section className="py-20 px-[5%] bg-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-3">
            Pricing Calculator
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-black">
            Estimate Your Delivery Cost
          </h2>

          <p className="text-gray-500 mt-4">
            Simple pricing based on delivery distance.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">

          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center mb-8">
            <Calculator size={40} />
          </div>

          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              <span className="font-semibold text-gray-700">
                Delivery Distance
              </span>

              <span className="font-bold text-red-600">
                {distance} KM
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full accent-red-600"
            />
          </div>

          {/* Result */}
          <div className="bg-black rounded-2xl p-8 text-center">
            <p className="text-gray-400 mb-3 text-sm">
              Estimated Delivery Price
            </p>

            <h3 className="text-5xl font-black text-red-500">
              Rs {price}
            </h3>

            <p className="text-gray-500 mt-4 text-sm">
              Final pricing may vary depending on parcel type and urgency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}