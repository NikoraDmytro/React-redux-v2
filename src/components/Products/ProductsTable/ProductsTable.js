import React from "react";

import { TableTemplate } from "./TableTemplate.js";

import "./Table.scss";

export const ProductsTable = () => (
  <table>
    <thead>
      <tr key="tableHead">
        <th></th>
        <th>Штрихкод</th>
        <th>Артикул</th>
        <th>Назва</th>
        <th>Розмір коробки</th>
        <th>Рекомендована роздрібна ціна</th>
        <th>Залишок</th>
        <th>Ціна з ПДВ</th>
        <th>Замовлення</th>
        <th>Сума замовлення</th>
      </tr>
    </thead>
    <tbody>{<TableTemplate />}</tbody>
  </table>
);
