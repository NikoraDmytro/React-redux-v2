import React from "react";
import { useDispatch } from "react-redux";

import { AddOrRemoveProduct } from "../../../pages/ClientOffice/Reducers/ProductsReducer.js";

export const Checkbox = (props) => {
  const dispatch = useDispatch();
  const product = props.product;

  return (
    <input
      id={product.vendorCode + "checkbox"}
      type="checkbox"
      name="AddProduct"
      checked={product.order}
      onClick={() => dispatch(AddOrRemoveProduct(product.vendorCode))}
    />
  );
};
