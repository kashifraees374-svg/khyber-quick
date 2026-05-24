import herologo from "../../assets/herologo.png";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const [zoomImg, setZoomImg] = useState(null);
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

  const HERO_IMAGES = [slide1, slide2, slide3, slide4, slide5];

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-[#111] via-[#1a0000] to-[#111] px-[5%] overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(225,29,46,0.15),transparent_60%)]" />

        {/* dots pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E11D2E_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block bg-red-600/10 border border-red-500/30 text-red-500 px-4 py-1 rounded-full text-xs font-semibold tracking-widest mb-6">
              FASTEST LOCAL DELIVERY
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              Fast Local Delivery <br />
              <span className="text-red-500">Across Your Area</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
              Food, Grocery, Medicine, Parcels & Everything Delivered Fast.
              Serving Jehangira, Narri & Noudeh — and expanding fast!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/923339433704"
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition"
              >
                📦 Order Now
              </a>

              <button
                onClick={() => scrollTo("#directory")}
                className="border border-gray-700 hover:border-red-600 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Browse Shops →
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">
              {[
                ["500+", "Orders Done"],
                ["50+", "Local Shops"],
                ["3", "Active Areas"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-red-500">
                    {num}
                  </div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SWIPER IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[600px] h-[500px]">
              {/* glow */}
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />

              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full mt-10  h-full"
              >
                {HERO_IMAGES.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt="Hero Slide"
                      onClick={() => setZoomImg(img)}
                      className="w-full h-full object-fill transition-transform cursor-zoom-in duration-500 hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-xs tracking-widest">
              THE PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
              How It Works
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="absolute -top-6 right-4 text-7xl font-black text-gray-100">
                  {step.num}
                </div>

                <div className="w-11 h-11 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold mb-4">
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
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={zoomImg}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </>
  );
}
