import React from "react";
import { useDispatch } from "react-redux";

import { Restart } from "../../Reducers/ProductsReducer.js";
import CloseButton from "../../../../shared/img/Close.png";
import { ToBuyList } from "../../../../components/Products/ToBuyList/ToBuyList.js";

export const ConfirmPanel = (props) => {
  const dispatch = useDispatch();
  const margin = { marginRight: 5.5 + "%" };

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
            dispatch(Restart());
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
