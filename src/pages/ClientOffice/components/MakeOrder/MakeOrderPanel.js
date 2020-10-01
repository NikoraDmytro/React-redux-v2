import React from "react";

import "./MakeOrder.scss";

export const MakeOrderPanel = (props) => {
  const Type = props.type || "";

  return (
    <div className={`MakeOrder ${Type}`}>
      <div className="Statistic">
        <span>Количество</span>
        <span>Сумма заказа</span>
      </div>
      <div className="StatisticValues">
        <span>{props.Number}</span>
        <span>{props.Price.toFixed(2) + "грн"}</span>
      </div>

      <button
        className="MakeOrderButton Rounded"
        type="button"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};
