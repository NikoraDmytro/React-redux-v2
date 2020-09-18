import React from "react";
import styles from "./ToBuyList.module.scss";

export const ToBuyList = (props) => {
  const ProductsNumber = props.ToBuyList.ProductsNumber;
  const ProductsPrice = props.ToBuyList.ProductsPrice;

  const Products = [];
  props.ToBuyList.Ids.map((Id) => Products.push(props.ProductsList[Id]));

  const TableTemplate = () =>
    Products.map((product) => {
      const name = product.tooltip.props.content;
      return (
        <tr key={product.vendoraCode}>
          <td>{name}</td>
          <td>{product.order}</td>
          <td>{product.orderPrice + "грн"}</td>
        </tr>
      );
    });

  return (
    <>
      <div className={styles.Label}>
        Вы уверены, что хотите отправить ваш заказ?
      </div>
      <table className={styles.ToBuyList}>
        <thead>
          <tr key="head">
            <th>Название</th>
            <th>Количество</th>
            <th>Сумма заказа</th>
          </tr>
        </thead>
        <tbody>
          <TableTemplate />
        </tbody>
      </table>

      <table className={`${styles.ToBuyList} ${styles.Conclusion}`}>
        <tbody>
          <tr key="Conclusion">
            <td>Всего</td>
            <td>{ProductsNumber}</td>
            <td>{ProductsPrice.toFixed(2) + "грн"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
