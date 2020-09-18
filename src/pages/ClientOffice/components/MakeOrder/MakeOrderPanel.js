import React from "react";
import { useSelector } from "react-redux";

import "./MakeOrder.scss";

export const MakeOrderPanel = (props) => {
  const ToBuyList = useSelector((state) => state.products.ProductsToBuyList);

  const MakeOrderPanel = () =>
    Number(ToBuyList.ProductsNumber) ? (
      <div className="MakeOrder">
        <div className="Statistic">
          <span>Количество</span>
          <span>Сумма заказа</span>
        </div>
        <div className="StatisticValues">
          <span>{ToBuyList.ProductsNumber}</span>
          <span>{ToBuyList.ProductsPrice.toFixed(2) + "грн"}</span>
        </div>

        <button
          className="MakeOrderButton Rounded"
          type="button"
          onClick={() => props.Visibility[1](true)}
        >
          Заказать
        </button>
      </div>
    ) : null;

  return <MakeOrderPanel />;
};
