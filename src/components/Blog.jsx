import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { blogs } from "../constants";
import BlogsCard from "./BlogsCard";

const Blogs = () => (
  <section className="relative h-[800px] px-3 mb-10">
    <div className="absolute z-0 w-60 h-60 -right-1/2 rounded-full" />
    <section className="ml-1 sm:text-left text-center sm:ml-16 mt-14 relative overflow-hidden">
      <h2 className="text-[#4762E4] text-xl md:text-3xl font-medium mb-4 uppercase">
        Blog
      </h2>
      <h1 className="font-poppins select-none hover:text-dimWhite transition-colors text-white text-5xl leading-noraml md:text-7xl font-bold mb-6">
        Our Latest <br />
        Articles
      </h1>
    </section>
    <div className="relative">
      <Swiper
        spaceBetween={5}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          440: {
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 1.8,
          },
          1100: {
            slidesPerView: 2.1,
          },
          1200: {
            slidesPerView: 2.8,
          },
        }}
      >
        {blogs.map((card) => (
          <SwiperSlide className="px-2 py-4" key={card.id}>
            <BlogsCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Blogs;
