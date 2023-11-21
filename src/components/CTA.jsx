import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} h-[350px] md:h-[450px] bg-[#242830]`}
  >
    <div className="flex flex-col justify-center items-center pb-5 max-w-[1200px] mx-auto">
      <h2 className="font-sans font-semibold text-white text-center text-[30px] sm:text-[42px] md:text-[58px]">
        Ready To Start A <br />
        Project With Us?
      </h2>
      <div className="flex flex-col gap-1 sm:flex-row justify-center mt-10 w-full max-w-[700px]">
        <input
          type="email"
          className="outline-none rounded-md font-light flex-grow px-2 py-3 w-full max-w-[260px] mb-3 sm:mb-0"
          placeholder="Enter your email address"
        />
        <button className="bg-[#7A62F9] hover:bg-[#7A62F9]/80 px-2 py-3 transition-colors text-white md:text-base w-full max-w-[120px] text-sm rounded-md">
          Get Started!
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
