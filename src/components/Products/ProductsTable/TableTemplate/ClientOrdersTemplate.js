import React from "react";
import { useSelector } from "react-redux";

import { TableTemplate } from "./TableTemplate";

import { Checkbox } from "../../Inputs/Checkbox.js";
import { MakeOrderPanel } from "../../../../pages/ClientOffice/components/MakeOrder/MakeOrderPanel";
import { MassCheckbox } from "../../Inputs/MassCheckbox";

export const ClientOrdersTemplate = () => {
  const Orders = useSelector((state) => state.products.ClientOrders);

  function Checker(key, product) {
    if (key === "checkbox") {
      return <Checkbox product={product} />;
    }

    return false;
  }

  if (Orders.length === 0)
    return (
      <div className="Notification">
        <h1>Вы ещё ничего не заказали!</h1>
      </div>
    );

  return (
    <>
      {Orders.map((order, index) => {
        order = Orders[Orders.length - 1 - index];

        return (
          <>
            <tr>
              <td className="checkbox">
                <MassCheckbox />
              </td>
              <td colSpan="9">
                <div className="OrderDate">Заказ от {order.OrderDate}</div>
              </td>
            </tr>
            <TableTemplate Products={order.Products} Checker={Checker} />

            <tr>
              <td colSpan="10" className="MakeOrderAgain">
                <MakeOrderPanel
                  Number={order.ProductsNumber}
                  Price={order.ProductsPrice}
                  onClick={() => alert("Todo later")}
                >
                  Заказать повторно
                </MakeOrderPanel>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};
