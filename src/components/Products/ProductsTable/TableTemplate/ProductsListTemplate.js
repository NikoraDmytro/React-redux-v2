import React from "react";

import { useSelector } from "react-redux";
import { TableTemplate } from "./TableTemplate";

import { Checkbox } from "../../Inputs/Checkbox.js";
import { Order } from "../../Inputs/Order.js";

export const ProductsListTemplate = () => {
  const ProductsList = useSelector((state) => state.products.ProductsList);

  function Checker(key, product) {
    if (key === "order") return <Order product={product} />;

    if (key === "checkbox") {
      return <Checkbox product={product} />;
    }

    if (key === "orderPrice") {
      if (Number(product[key])) {
        return product[key] + "грн";
      } else {
        return "";
      }
    }

    return false;
  }

  return <TableTemplate Products={ProductsList} Checker={Checker} />;
};
