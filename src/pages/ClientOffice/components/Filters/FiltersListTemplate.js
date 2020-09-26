import React from "react";
import { FiltersList } from "./FiltersList.js";

export const FiltersListTemplate = () => {
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
    <div className="FiltersList">
      {SelectableList()}
      {SwitchableList()}
    </div>
  );
};
