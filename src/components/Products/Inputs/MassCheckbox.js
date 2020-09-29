import React from "react";
import { useDispatch } from "react-redux";
import { Restart } from "../../../pages/ClientOffice/Reducers/ProductsReducer.js";

export const MassCheckbox = (props) => {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      name="AddProduct"
      checked
      onClick={() => dispatch(Restart())}
    />
  );
};
