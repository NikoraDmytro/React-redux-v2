import React, { useState } from "react";

import FiltersImage from "./img/Filters.png";
import "./Filters.scss";
import { FiltersList } from "./FiltersList.js";

export const Filters = () => {
  const [IsClicked, setIsClicked] = useState(false);
  const HandleClick = () => {
    setIsClicked(!IsClicked);
  };

  const SelectableList = () =>
    Object.entries(FiltersList.Selectable).map(([name, value]) => {
      return (
        <span>
          <input id={name} name={name} type="checkbox" />
          <label htmlFor={name}>{value}</label>
          <br />
        </span>
      );
    });

  const SwitchableList = () =>
    Object.values(FiltersList.Switchable).map((item) => {
      return (
        <>
          <p>{item.Name} :</p>

          {Object.entries(item.items).map(([name, value]) => {
            return (
              <span>
                <input id={name} name={item.Name} type="radio" />
                <label htmlFor={name}>{value}</label>
                <br />
              </span>
            );
          })}
        </>
      );
    });

  return (
    <div className="FiltersContainer">
      <div className="Filters">
        <div className="FiltersButton" onClick={HandleClick}>
          <img src={FiltersImage} alt="Фильтры" />
        </div>
        {IsClicked ? (
          <div className="FiltersList">
            {SelectableList()}
            {SwitchableList()}
          </div>
        ) : null}
      </div>

      {/*<ShowActiveFilters />*/}
    </div>
  );
};
