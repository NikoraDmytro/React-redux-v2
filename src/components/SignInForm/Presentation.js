import React from "react";
import { Facility } from "../Facilities/Facility";
import { FacilitiesList } from "../Facilities/FacilitiesList.js";
import { useInterval } from "./hook/UseInterval";

import "./Presentation.scss";

export const Presentation = () => {
  const FacilitiesNumber = FacilitiesList.length;

  const [index, ChoseSlide] = useInterval(FacilitiesNumber);

  const Switcher = [];

  for (let i = 0; i < FacilitiesNumber; i++) {
    const active = i === index ? "on" : "off";
    Switcher.push(
      <button
        className={`switch${i}${active}`}
        onClick={() => ChoseSlide(i)}
      ></button>
    );
  }

  return (
    <div className="Presentation">
      <div className="FacilityContainer">
        <Facility index={index} type="single" />
      </div>
      <div className="Switcher">{Switcher}</div>
    </div>
  );
};
