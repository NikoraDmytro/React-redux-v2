import { AddOrRemoveProductAction } from "./ProductsActions/AddOrRemoveProduct.js";
import { AddProductByAmountAction } from "./ProductsActions/AddProductByAmount.js";
import { AddNewOrderAction } from "./OrdersActions/AddNewOrder";
import { RestartAction } from "./ProductsActions/Restart.js";

import { createSlice } from "@reduxjs/toolkit";

import { ProductsList } from "../../../components/Products/ProductsList/ProductsList.js";

const Products = createSlice({
  name: "products",
  initialState: {
    ProductsList: ProductsList,
    ProductsToBuyList: {
      Ids: [],
      ProductsNumber: 0,
      ProductsPrice: 0,
    },
    ClientOrders: [],
  },
  reducers: {
    AddOrRemoveProduct: (state, action) =>
      AddOrRemoveProductAction(state, action),

    AddProductByAmount: (state, action) =>
      AddProductByAmountAction(state, action),

    Restart: (state, action) => RestartAction(state, action),

    AddNewOrder: (state, action) => AddNewOrderAction(state, action),
  },
});

export const {
  AddOrRemoveProduct,
  AddProductByAmount,
  Restart,
  AddNewOrder,
} = Products.actions;

export default Products.reducer;
