import { whychooseus } from "../assets";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    style={{
      transition: "transform 0.3s ease",
      transform: "scale(1)",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    className={`flex flex-row p-6 rounded-[16px] w-full max-w-[500px] ${
      index !== features.length - 1 ? "mb-3" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[60px] h-[60px] rounded-2xl ${styles.flexCenter} bg-[#4762E4]/20`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[12px] md:text-[14px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <div className="px-5 bg-cover whychooseusBg bg-black bg-center">
      <section id="features" className={layout.section}>
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <img
            src={whychooseus}
            alt={whychooseus}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </div>

        <div className={`${layout.sectionImg} ${styles.flexCenter} flex-col`}>
          <div className="pl-3 mb-3">
            <h1 className="font-poppins uppercase font-medium text-xl text-[#4762E4]">
              why choose us
            </h1>
            <h2 className="font-poppins font-semibold select-none hover:text-dimWhite transition-colors text-[32px] md:text-[48px] text-white">
              Creating Beautiful <br /> Design based on
              <br /> Client needs
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
              Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird,
              wenn er sich ein Layout ansieht.
            </p>
          </div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
