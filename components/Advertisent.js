import { Advertise } from "../assets/data/dummydata";
import { Vedio } from "./common/Vedio";
import { Title, TitleSm } from "./common/Title";
import React from "react";

const Advertisent = () => {
  return (
    <section className="adver bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="OUR Advertisement AND VEDIO EDITS" />
          <Title
            title="Fresh ideas. Bold design. Smart realization."
            className="title-bg"
          />
        </div>

        <div className="heading-title">
          <Title title="Advertisment" />
        </div>

        <div className="hero-content grid-3 py">
          {Advertise.map((item) => (
            <Vedio data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisent;
