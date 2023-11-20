import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section
    className={`${styles.flexCenter} w-full h-[280px] md:h-[160px] bg-[#242830] rounded-md`}
  >
    <div className={`${styles.flexCenter} md:flex-nowrap flex-wrap w-full`}>
      {clients.map((clients) => (
        <div
          key={clients.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] cursor-pointer min-w-[140px]`}
        >
          <img
            src={clients.logo}
            alt="client"
            className="sm:w-[152px] w-[130px] object-contain"
            style={{
              transition: "transform 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
