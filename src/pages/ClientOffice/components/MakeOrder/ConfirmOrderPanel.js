import React from "react";
import { useDispatch } from "react-redux";

import { Restart } from "../../../../utils/functions/Restart.js";
import CloseButton from "../../../../shared/img/Close.png";
import { ToBuyList } from "./ToBuyList/ToBuyList.js";

export const ConfirmPanel = (props) => {
  const dispatch = useDispatch();
  const margin = { marginRight: 5.5 + "%" };

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
            Restart(props.ProductsToBuyList, dispatch);
            props.Visibility[1](false);
          }}
        >
          Отменить
        </button>

        <button
          className="MakeOrderButton Rounded"
          onClick={() => {
            Restart(props.ProductsToBuyList, dispatch);
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
