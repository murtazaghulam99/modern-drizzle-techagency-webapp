import React from "react";
import { union } from "../assets";
import { services } from "../constants";
import styles from "../style";

const Scroller = () => {
  const combinedServices = [...services, ...services];
  const servicesData = combinedServices.map((service) => {
    return {
      ...service,
      name: service.title,
    };
  });

  return (
    <section className="scroller space-x-5">
      <div className="scroller-inner">
        {combinedServices.map((service, index) => (
          <div
            key={index}
            className="scroller-item items-center space-x-6 p-3 select-none"
          >
            <img src={union} height={30} width={30} alt="" />
            <h1 className="scroller-text hover:text-dimWhite">
              {service.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scroller;
