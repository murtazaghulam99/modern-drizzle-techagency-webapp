import React from "react";

const TestimonialsCard = ({ content, name, rating, company, img }) => (
  <div
    style={{
      transition: "transform 0.3s ease",
      transform: "scale(1)",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    className="flex flex-col space-x-0 md:space-x-5 md:flex-row space-y-5 md:space-y-0 items-center px-4 py-8 rounded-lg max-w-[420px] md:max-w-[620px] md:mx-auto testimonials-card cursor-pointer"
  >
    <img
      src={img}
      className="w-full max-w-[140px] md:max-w-[185px] lg:max-w-[205px] md:w-[25%] lg:w-[30%]"
      alt=""
    />
    <div className="md:flex-1">
      <img
        src={rating}
        className="w-full max-w-[100px] md:max-w-[160px] mx-auto md:mx-0 mt-4 md:mt-0 mb-4 md:mb-0"
        alt=""
      />
      <p className="font-poppins font-normal text-[16px] md:text-start text-center leading-[24px] md:leading-[32px] text-white my-4">
        {content}
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center">
        <div className="flex-1 md:flex space-x-0 md:space-x-3 text-center md:items-center">
          <h4 className="font-poppins font-semibold text-[14px] leading-[24px] md:leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[12px] leading-[20px] text-dimWhite">
            {company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
