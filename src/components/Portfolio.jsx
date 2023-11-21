import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { portfolioImages } from "../constants";

const Portfolio = () => {
  return (
    <div className="relative overflow-hidden bg-cover latestProjectsBg bg-left">
      <section className="text-center m-20">
        <h2 className="text-[#4762E4] text-sm sm:text-lg md:text-2xl font-medium mb-4 uppercase">
          Portfolio
        </h2>
        <h1 className="font-poppins select-none hover:text-dimWhite transition-colors text-white text-[28px] sm:text-4xl md:text-6xl font-bold mb-6">
          Our Latest Projects
        </h1>

        <div className="relative cursor-pointer py-3">
          <Swiper
            slidesPerView={1}
            slidesPerColumn={2}
            spaceBetween={5}
            breakpoints={{
              440: {
                slidesPerView: 1.4,
              },
              640: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.7,
              },
              1024: {
                slidesPerView: 3.8,
              },
              1200: {
                slidesPerView: 4.4,
              },
            }}
          >
            {portfolioImages.map((image) => (
              <SwiperSlide className="px-0.5" key={image.id}>
                <div
                  className="relative overflow-hidden group"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: "scale(1)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={image.img}
                    alt={`portfolio-${image.id}`}
                    className="w-full object-cover mb-2"
                  />
                  <div className="overlay absolute inset-0 bg-black group-hover:opacity-20 opacity-0 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={1}
            slidesPerColumn={2}
            spaceBetween={5}
            breakpoints={{
              440: {
                slidesPerView: 1.4,
              },
              640: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.7,
              },
              1024: {
                slidesPerView: 3.8,
              },
              1200: {
                slidesPerView: 4.4,
              },
            }}
          >
            {portfolioImages.map((image) => (
              <SwiperSlide className="px-0.5" key={image.id}>
                <div
                  className="relative overflow-hidden group"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: "scale(1)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={image.img}
                    alt={`portfolio-${image.id}`}
                    className="w-full object-cover mb-2"
                  />
                  <div className="overlay absolute inset-0 bg-black group-hover:opacity-20 opacity-0 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="bg-[#7A62F9] hover:bg-[#7A62F9]/80 transition-colors text-white py-2.5 md:py-4 px-6 md:px-12 rounded-md mt-6">
          View More
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
