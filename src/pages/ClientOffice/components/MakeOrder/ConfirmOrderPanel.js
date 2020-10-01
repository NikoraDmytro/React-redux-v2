import React from "react";
import { useDispatch } from "react-redux";

import { AddNewOrder, Restart } from "../../Reducers/ProductsReducer.js";
import CloseButton from "../../../../shared/img/Close.png";
import { ToBuyList } from "../../../../components/Products/ToBuyList/ToBuyList.js";

export const ConfirmPanel = (props) => {
  const dispatch = useDispatch();
  const margin = { marginRight: 5.5 + "%" };

  const Number = props.ProductsToBuyList.ProductsNumber;
  const Price = props.ProductsToBuyList.ProductsPrice;

  const Products = {};
  for (const Id of props.ProductsToBuyList.Ids)
    Products[Id] = props.ProductsList[Id];

  if (!props.ProductsToBuyList.ProductsNumber) props.Visibility[1](false);
  if (!props.Visibility[0]) return null;

  return (
    <div className="ConfirmPanel">
      <div className="ConfirmBox">
        <img
          src={CloseButton}
          className="Close"
          alt="Close"
          onClick={() => props.Visibility[1](false)}
        />
        <ToBuyList
          ToBuyList={props.ProductsToBuyList}
          ProductsList={props.ProductsList}
        />
        <button
          className="CancelButton Rounded"
          onClick={() => {
            dispatch(Restart());
            props.Visibility[1](false);
          }}
        >
          Отменить
        </button>

        <button
          className="MakeOrderButton Rounded"
          onClick={() => {
            dispatch(AddNewOrder([Products, Number, Price]));
            dispatch(Restart("Order"));
            props.Visibility[1](false);
          }}
          style={margin}
        >
          Заказать
        </button>
      </div>
    </div>
  );
};
