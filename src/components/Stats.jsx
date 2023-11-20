import React from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="relative border rounded-xl w-full max-w-[400px] xs:max-w-[410px] sm:max-w-[590px] mx-auto md:max-w-[580px] lg:max-w-[750px] mt-10 overflow-hidden">
      <div
        className={`${styles.flexCenter} flex-row flex-wrap py-3 backdrop-blur-lg`}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`items-center m-3 space-y-4 ${
              index !== stats.length - 1 ? "border-r pr-5 sm:pr-10" : ""
            }`}
          >
            <h4 className="font-poppins font-semibold text-[30px] sm:text-[60px] leading-[30px] sm:leading-[60px] text-white">
              <CountUp
                end={parseFloat(stat.value)}
                duration={6}
                separator=","
                suffix={stat.value.replace(/[\d.,]/g, "")}
              />
            </h4>
            <p className="font-light text-[12px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-white mt-1 sm:mt-3">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
