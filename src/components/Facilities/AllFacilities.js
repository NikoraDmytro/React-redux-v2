import React from "react";
import { Facility } from "./Facility.js";
import { FacilitiesList } from "./FacilitiesList.js";
import "./Facility.scss";

export const AllFacilities = () => {
  const Facilities = FacilitiesList.map((_, index) => {
    return (
      <div className="column">
        <Facility index={index} type="multiple" />
      </div>
    );
  });

  return <div className="facilities">{Facilities}</div>;
};
