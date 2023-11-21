import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { testimonials } from "../constants";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => (
  <section className="relative h-[580px] px-5 bg-cover bgComponent">
    <div className="absolute z-0 w-60 h-70 -right-1/2 rounded-full" />
    <section className="text-center m-10 relative overflow-hidden">
      <h2 className="text-[#4762E4] text-lg md:text-2xl font-medium mb-3 uppercase">
        testimonials
      </h2>
      <h1 className="font-poppins select-none hover:text-dimWhite transition-colors text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
        Our Beloved Clients
      </h1>
    </section>
    <div className="relative">
      <Swiper
        spaceBetween={5}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          440: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 1.5,
          },
          1100: {
            slidesPerView: 1.7,
          },
          1200: {
            slidesPerView: 2.1,
          },
        }}
      >
        {testimonials.map((card) => (
          <SwiperSlide className="py-2 md:py-8 px-2" key={card.id}>
            <TestimonialsCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
