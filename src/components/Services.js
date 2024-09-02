import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"our"} span={"services"} />
      <div className="section-center services-center">
        {services.map((article) => {
          return <Service key={article.id} {...article} />;
        })}
      </div>
    </section>
  );
};

export default Services;
