import React from "react";

import FiltersImage from "./img/Filters.png";
import "./Filters.scss";

export const Filters = () => (
  <div className="Filters">
    <div className="FiltersButton">
      <img src={FiltersImage} alt="Фильтры" />
    </div>
    {/*<ShowActiveFilters />*/}
  </div>
);
