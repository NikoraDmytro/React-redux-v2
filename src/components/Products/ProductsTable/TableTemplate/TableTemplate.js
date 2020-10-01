import React from "react";

export const TableTemplate = (props) => {
  return Object.values(props.Products).map((product) => (
    <tr key={product.barcode}>
      {Object.keys(product).map((key) => {
        return <td>{props.Checker(key, product) || product[key]}</td>;
      })}
    </tr>
  ));
};
