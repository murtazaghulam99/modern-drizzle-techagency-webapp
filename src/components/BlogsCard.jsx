import React from "react";
import { arrowUp } from "../assets";

const BlogsCard = ({ content, author, title, tags, date, img }) => {
  return (
    <div
      className="flex flex-col space-y-1 md:space-y-0 items-center px-1 py-10 rounded-lg hover:rounded-lg max-w-[430px] mx-auto blogs-card cursor-pointer"
      style={{
        transition: "transform 0.3s ease",
        transform: "scale(1)",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={img} className="w-full md:w-[60%] lg:w-[80%]" alt="" />

      <div className="md:w-[60%] lg:w-[80%] hover-effect">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex space-x-5 items-center md:w-[70%] mt-3">
            <h4 className="font-poppins font-normal text-[14px] leading-[32px] text-[#4762E4]">
              {author}
            </h4>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#4762E4]">
              {date}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-poppins font-normal text-[14px] md:text-[20px] leading-[32px] text-white mt-2">
            {title}
          </h2>
          <img src={arrowUp} width={30} height={30} alt="" />
        </div>
        <p className="font-poppins font-extralight text-[11px] md:text-[14px] leading-[24px] text-dimWhite my-4">
          {content}
        </p>

        <div className="flex flex-wrap space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-poppins border border-white/20 font-normal text-[11px] leading-[12px] px-2 py-1 rounded-full"
              style={{
                backgroundColor: tag.bgColor,
                color: tag.textColor,
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
