import { useState } from "react";

import herologo from "../../assets/herologo.png";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const [zoomImg, setZoomImg] = useState(null);

  

  const HERO_IMAGES = [slide1, slide2, slide3, slide4, slide5];

  const scrollTo = (id) => {
    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center 
        bg-gradient-to-br from-[#111] via-[#1a0000] to-[#111] 
        px-5 md:px-[5%] overflow-hidden pt-28 md:pt-20 pb-14"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(225,29,46,0.15),transparent_60%)]" />

        {/* Dots pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E11D2E_1px,transparent_1px)] [background-size:60px_60px]" />

        <div
          className="max-w-7xl mx-auto w-full 
          grid grid-cols-1 lg:grid-cols-2 
          gap-14 items-center z-10"
        >
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div
              className="inline-block bg-red-600/10 border border-red-500/30 
              text-red-500 px-4 py-1 rounded-full text-[10px] md:text-xs 
              font-semibold tracking-widest mb-6"
            >
              FASTEST LOCAL DELIVERY
            </div>

            <h3
              className="text-4xl sm:text-5xl md:text-6xl 
              font-black leading-tight text-white"
            >
              Fast Local Delivery <br />

              <span className="text-red-500">
                Across Your Area
              </span>
            </h3>

            <p
              className="text-gray-400 mt-6 text-base md:text-lg 
              leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Food, Grocery, Medicine, Parcels & Everything
              Delivered Fast. Serving Jehangira, Narri &
              Noudeh — and expanding fast!
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row 
              justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="https://wa.me/923339433704"
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white 
                px-6 py-3 rounded-md font-bold transition text-center"
              >
                📦 Order Now
              </a>

              <button
                onClick={() => scrollTo("#directory")}
                className="border border-gray-700 hover:border-red-600 
                text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Browse Shops →
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-8 
              mt-12 text-center lg:text-left"
            >
              {[
                ["500+", "Orders Done"],
                ["50+", "Local Shops"],
                ["3", "Active Areas"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-2xl md:text-3xl 
                    font-extrabold text-red-500"
                  >
                    {num}
                  </div>

                  <div className="text-xs text-gray-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SWIPER */}
          <div className="flex justify-center">
            <div
              className="relative w-full 
              max-w-[600px] h-[260px] sm:h-[350px] md:h-[420px]"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 bg-red-600/20 
                blur-3xl rounded-full"
              />

              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full rounded-2xl overflow-hidden"
              >
                {HERO_IMAGES.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt="Hero Slide"
                      onClick={() => setZoomImg(img)}
                      className="w-full h-full object-cover 
                      transition-transform cursor-zoom-in 
                      duration-500 hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
     

      {/* IMAGE ZOOM */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/90 
          flex items-center justify-center 
          z-[999] p-4"
        >
          <img
            src={zoomImg}
            alt="Zoom"
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      )}
    </>
  );
}