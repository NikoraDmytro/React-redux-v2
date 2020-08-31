import React from "react";
import { FacilitiesList } from "./FacilitiesList";
import "./Facility.scss";

const FacilityImage = (Facility, type) => {
  if (type === "single") {
    return (
      <div className="FacilityImage">
        <img src={Facility.introImage} alt={Facility.title} />
        <span className="small-circle"></span>
        <span className="big-circle"></span>
      </div>
    );
  } else return null;
};

export const Facility = (props) => {
  const [index, type] = [props.index, props.type];
  const Facility = FacilitiesList[index];
  const image = FacilityImage(Facility, type);

  return (
    <>
      {image}
      <div className={`FacilityContent${type}`}>
        <h3>{Facility.title}</h3>
        <h5>{Facility.content}</h5>
      </div>
    </>
  );
};
