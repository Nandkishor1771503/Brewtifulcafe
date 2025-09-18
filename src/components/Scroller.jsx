import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import goldenCup from "../images/gold-coffee-cup.jpg";
import logo from "../images/Logo2.png";

import "swiper/css";

export default function InfiniteScroller() {
  const imgStyle = "w-8 sm:w-10 md:w-14 lg:w-16 h-auto"; // 👈 balanced scaling
  const items = ["Hello", "Welcome", "To", "Bottega", "Cafe"];

  return (
    <div className="bg-[#063d52]  md:h-36 h-24 text-[#d68b0c]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        freeModeMomentum={false}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {[1, 2].map((row) => (
          <SwiperSlide key={row}>
            <div
              className="
                flex items-center justify-center 
                gap-8 sm:gap-12 md:gap-16 lg:gap-36
                w-full bg-[#063d52] text-[#cc9f78] 
                text-base sm:text-lg md:text-xl lg:text-4xl font-serif 
                py-6 px-2 sm:px-4
              "
            >
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-10 sm:gap-3 whitespace-nowrap"
                >
                  <h2 className=" text-[#cc9f78]">Brewtiful</h2>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
