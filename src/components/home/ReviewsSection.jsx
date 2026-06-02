import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewsSection() {
  const REVIEWS = [
    {
      name: "Ali Khan",
      area: "Jehangira",
      review:
        "Fastest delivery service in the area. Food arrived hot and quickly!",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Usman Afridi",
      area: "Narri",
      review:
        "Very professional riders and affordable delivery pricing.",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Hassan Khan",
      area: "Noudeh",
      review:
        "Medicine delivery was super fast. Highly recommended.",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Bilal Ahmad",
      area: "Jehangira",
      review:
        "Khyber Quick is changing local delivery in our area.",
      image: "https://i.pravatar.cc/150?img=20",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-red-500 font-bold text-xs tracking-[3px] uppercase mb-3">
            Customer Reviews
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-white">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 mt-4">
            Trusted by local customers across Jehangira & nearby areas.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".review-next",
            prevEl: ".review-prev",
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#111] border border-white/10 rounded-3xl p-7 h-full hover:border-red-500/40 transition">

                {/* Top */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                  />

                  <div>
                    <h3 className="text-white font-bold">
                      {review.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {review.area}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="review-prev w-12 h-12 rounded-full bg-[#111] border border-white/10 text-white flex items-center justify-center hover:border-red-500 transition">
            <ChevronLeft />
          </button>

          <button className="review-next w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}