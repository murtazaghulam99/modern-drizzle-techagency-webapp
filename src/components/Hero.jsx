import React from "react";
import styles from "../style";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col text-center h-[800px] py-24 bgHeroBanner bg-no-repeat bg-bottom`}
    >
      <p className="text-[#4762E4] hover:text-[#4762E4]/80 transition-colors font-poppins font-normal text-[16px] md:text-[20px] lg:md:text-[24px]">
        DRIZZLE CREATIVE AGENCY
      </p>
      <h1 className="text-white hover:text-dimWhite transition-colors font-poppins font-bold text-[30px] xs:text-[40px] sm:text-[52px] md:text-[84px] mt-4">
        Digital Agency <br />
        With Solid Design
      </h1>
      <Stats />
    </section>
  );
};

export default Hero;
