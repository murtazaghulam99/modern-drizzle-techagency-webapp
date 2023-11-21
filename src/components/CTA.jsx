import styles from "../style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} bg-[#242830]`}>
    <div className="flex flex-col justify-center items-center pb-5 max-w-[1200px] mx-auto">
      <h2 className="font-sans font-semibold text-white text-center text-[30px] sm:text-[42px] md:text-[58px]">
        Ready To Start A <br />
        Project With Us?
      </h2>
      <div className="flex flex-col gap-1 sm:flex-row mt-10 w-full max-w-[700px]">
        <input
          type="email"
          className="outline-none rounded-md py-2 sm:py-2.5 md:py-4 pl-4 pr-2 md:pr-7 lg:pr-10 font-light flex-grow mb-3 sm:mb-0"
          placeholder="Enter your email address"
        />
        <button className="bg-[#7A62F9] hover:bg-[#7A62F9]/80 transition-colors text-white md:text-base text-sm py-2 sm:py-2.5 md:py-4 px-3 md:px-8 lg:px-10 rounded-md">
          Get Started!
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
