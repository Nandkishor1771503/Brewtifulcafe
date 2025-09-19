import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import latte from "../images/Latte.png";
import esspreso from "../images/Esspreso.png";

function MenuCards() {
  const cards = [
    { id: 1, title: "Latte", imgSrc: latte },
    { id: 2, title: "Esspreso", imgSrc: esspreso },
    {
      id: 3,
      title: "Cappuccino",
      imgSrc:
        "https://tse1.mm.bing.net/th/id/OIP.rR3V9Lewd3SRSehvT7h2kgHaEo?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Mocha",
      imgSrc:
        "https://tse2.mm.bing.net/th/id/OIP.kfgDsQS9hZRO5B__B5wF4wHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Americano",
      imgSrc:
        "https://s2.ppllstatics.com/diariovasco/www/multimedia/202209/29/media/cortadas/cafeamericano-R5dmEim54n9frwQ9FZ7uP5J-1248x770@Diario%20Vasco.jpg",
    },
  ];

  return (
    <div className="w-full min-h-[55vh] md:h-[90vh] pt-8 sm:pt-12 flex flex-col items-center bg-[#063d52]">
      {/* Section Heading */}
      <h2 className="text-[#cc9f78] text-2xl sm:text-3xl md:text-4xl font-thin mb-8 sm:mb-12">
        Our Coffee
      </h2>

      {/* Swiper */}
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={16} // slightly smaller gap for mobile
        coverflowEffect={{
          rotate: -25,
          stretch: 0,
          depth: 120,
          modifier: 1,
          scale: 0.85,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5, // Mobile
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.5, // Larger mobile
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2, // Tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Desktop
            spaceBetween: 24,
          },
        }}
        className="w-[95%] max-w-6xl"
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            className="!flex flex-col items-center justify-center bg-gradient-to-b from-[#cc9f78]/70 to-transparent rounded-2xl shadow-lg cursor-pointer p-3 sm:p-5 border-4 border-transparent [border-image:linear-gradient(to_right,#cc9f78,#063d52)_1] "
          >
            {/* Card Image */}
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] object-contain"
            />

            {/* Card Title */}
            <h2 className="text-2xl lg:text-3xl font-thin text-[#d68b0c] mt-2 sm:mt-3">
              {card.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MenuCards;
