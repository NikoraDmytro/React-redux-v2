import React from "react";

import { DropDown } from "../../../../components/Tooltips/DropDown/DropDown.js";
import styles from "./Header.module.scss";
import FindProduct from "../../../../shared/img/findProduct.png";
import { Filters } from "../Filters/Filters.js";

export const ClientOfficeHeader = (props) => {
  const content = props.content;

  const FindProducts = () =>
    content.includes("FindProducts") ? (
      <div className={`${styles.Rounded} ${styles.FindProduct}`}>
        <img src={FindProduct} alt="" />
        Найти товар
      </div>
    ) : null;

  const BulkPrices = () =>
    content.includes("BulkPrices") ? (
      <DropDown
        className={`${styles.Rounded} ${styles.DropDown} `}
        content="Оптовые цены"
      />
    ) : null;

  const FiltersShow = () => (content.includes("Filters") ? <Filters /> : null);

  return (
    <header className={styles.header}>
      <FindProducts />
      <BulkPrices />
      <FiltersShow />
    </header>
  );
};
