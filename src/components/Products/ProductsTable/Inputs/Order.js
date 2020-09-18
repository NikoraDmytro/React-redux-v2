import React from "react";
import { useDispatch } from "react-redux";
import { OrderInputValidation } from "../../../../utils/validation/OrderInputValidation.js";

import { AddProductByAmount } from "../../../../pages/ClientOffice/Reducers/ProductsReducer.js";

export const Order = (props) => {
  const dispatch = useDispatch();
  const product = props.product;

  return (
    <input
      type="number"
      name="HowMany"
      id={product.vendorCode + "number"}
      min="0"
      max={Number(product.remainder.slice(0, -2)) + Number(product.order)}
      onChange={(e) => {
        OrderInputValidation(e.target, product);
        dispatch(AddProductByAmount(product.vendorCode));
      }}
    />
  );
};
