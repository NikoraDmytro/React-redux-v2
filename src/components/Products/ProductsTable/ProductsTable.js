import React from "react";

import "./Table.scss";
import { ProductsListTemplate } from "./TableTemplate/ProductsListTemplate.js";
import { ClientOrdersTemplate } from "./TableTemplate/ClientOrdersTemplate.js";

export const ProductsTable = (props) => (
  <table>
    <thead>
      <tr key="tableHead">
        <th className="checkbox"></th>
        <th className="barcode">Штрихкод</th>
        <th className="vendorCode">Артикул</th>
        <th className="tooltip">Назва</th>
        <th className="boxSize">Розмір коробки</th>
        <th className="recommendedRetailPrice">Рекомендована роздрібна ціна</th>
        <th className="remainder">Залишок</th>
        <th className="priceWithVAT">Ціна з ПДВ</th>
        <th className="order">Замовлення</th>
        <th className="orderPrice">Сума замовлення</th>
      </tr>
    </thead>
    <tbody>
      {props.component === "/ClientOffice" ? (
        <ProductsListTemplate />
      ) : (
        <ClientOrdersTemplate />
      )}
    </tbody>
  </table>
);
