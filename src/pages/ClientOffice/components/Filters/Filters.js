import React, { useState } from "react";

import FiltersImage from "./img/Filters.png";
import "./Filters.scss";
import { FiltersListTemplate } from "./FiltersListTemplate";

export const Filters = () => {
  const [IsClicked, setIsClicked] = useState(false);

  const HandleClick = () => {
    setIsClicked(!IsClicked);
  };

  return (
    <div className="FiltersContainer">
      <div className="Filters">
        <div className="FiltersButton" onClick={HandleClick}>
          <img src={FiltersImage} alt="Фильтры" />
        </div>
        {IsClicked ? <FiltersListTemplate /> : null}
      </div>

      {/*<ShowActiveFilters />*/}
    </div>
  );
};
