import styles from "../style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding}  bg-[#242830]`}>
    <div className="flex flex-col h-[320px] justify-center items-center pb-5">
      <h2 className="font-sans font-semibold text-white text-center text-[30px] sm:text-[42px] md:text-[58px]">
        Ready To Start A <br />
        Project With Us?
      </h2>
      <div className="space-x-1 sm:space-x-3 mt-10 w-full max-w-[700px]">
        <input
          type="email"
          className="outline-none rounded-md py-1.5 sm:py-2 md:py-4 pl-4 pr-2 md:pr-7 lg:pr-20 font-light"
          placeholder="Enter your email address"
        />
        <button className="bg-[#7A62F9] hover:bg-[#7A62F9]/80 transition-colors text-white md:text-base text-sm py-2 sm:py-2.5 md:py-4 px-3 md:px-8 rounded-md">
          Get Started!
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
