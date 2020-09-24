import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ProductsTable } from "../../components/Products/ProductsTable/ProductsTable.js";
import { ClientOfficeHeader as Header } from "./components/Header/Header.js";
import { ConfirmPanel } from "./components/MakeOrder/ConfirmOrderPanel.js";
import { MakeOrderPanel } from "./components/MakeOrder/MakeOrderPanel.js";

export const ClientOfficeContainer = (props) => {
  const Visibility = useState(false);

  const ToBuyList = useSelector((state) => state.products.ProductsToBuyList);
  const ProductsList = useSelector((state) => state.products.ProductsList);

  const content =
    props.component === "/ClientOffice"
      ? ["FindProducts", "BulkPrices", "Filters"]
      : ["FindProducts"];

  return (
    <>
      <ConfirmPanel
        ProductsToBuyList={ToBuyList}
        ProductsList={ProductsList}
        Visibility={Visibility}
      />
      <div className="ClientOffice">
        <Header content={content} />
        <ProductsTable />
      </div>
      <MakeOrderPanel Visibility={Visibility} />
    </>
  );
};
