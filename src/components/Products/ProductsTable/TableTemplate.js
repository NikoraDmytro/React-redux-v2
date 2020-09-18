import React from "react";
import { useSelector } from "react-redux";

import { Checkbox } from "./Inputs/Checkbox.js";
import { Order } from "./Inputs/Order.js";

export const TableTemplate = () => {
  const Products = useSelector((state) => state.products.ProductsList);

  return Object.values(Products).map((product) => (
    <tr key={product.barcode}>
      {Object.keys(product).map((key) => {
        if (key === "order")
          return (
            <td className={key}>
              <Order product={product} />
            </td>
          );

        if (key === "checkbox") {
          return (
            <td className={key}>
              <Checkbox product={product} />
            </td>
          );
        }

        if (key === "orderPrice") {
          if (Number(product[key])) {
            return <td className={key}>{product[key] + "грн"}</td>;
          } else {
            return <td className={key}></td>;
          }
        }
        return <td className={key}>{product[key]}</td>;
      })}
    </tr>
  ));
};
