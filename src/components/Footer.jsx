import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`flex flex-col items-center md:flex-row justify-between mt-5 mb-5 w-full`}
    >
      <div className="flex flex-col mb-3 md:mb-8">
        <img
          src={logo}
          alt="drizzel"
          className="w-[212px] h-[62px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center md:mt-0 mt-4 md:mb-0 mb-10">
        <p className="mb-2 md:mb-4 font-poppins font-normal text-white pb-2">
          Find Us on Social Media:
        </p>
        <div className="flex">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-4 md:mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center text-white md:mb-0 mb-4">
        <h1 className="font-normal font-poppins mb-2 md:mb-4">
          We're Always Happy To Help
        </h1>
        <p className="font-light hover:text-white/80 transition-colors cursor-pointer">
          drizzle@gmail.com
        </p>
      </div>
    </div>
    <div className="w-full items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins select-none text-center text-[16px] leading-[27px] text-white hover:text-white/80 transition-colors">
        Copyright © 2023 Drizzel
      </p>
    </div>
  </section>
);

export default Footer;
