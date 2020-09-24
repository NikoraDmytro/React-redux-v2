import React from "react";
import { Link } from "react-router-dom";

import listOfProducts from "../../../shared/img/listOfProducts.png";
import myOrders from "../../../shared/img/myOrders.png";

import styles from "./SideBar.module.scss";

export const SideBar = (props) => (
  <div className={styles.SideBar}>
    <h1 className={styles.Logo}>S2</h1>
    {props.content}

    <Link
      to="/ClientOffice"
      className={props.component === "/ClientOffice" ? styles.Active : null}
    >
      <img src={listOfProducts} alt="Список товаров" />
      Товары
    </Link>
    <Link
      to="/ClientOrders"
      className={props.component === "/ClientOrders" ? styles.Active : null}
    >
      <img src={myOrders} alt="Мои заказы" />
      Мои Заказы
    </Link>
  </div>
);
