import { AddOrRemoveProductAction } from "./actions/AddOrRemoveProduct.js";
import { AddProductByAmountAction } from "./actions/AddProductByAmount.js";

import { createSlice } from "@reduxjs/toolkit";

import { ProductsList } from "../../../components/Products/ProductsList/ProductsList.js";
import { RestartAction } from "./actions/Restart.js";

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
    AddOrRemoveProduct: (state, action) => {
      return AddOrRemoveProductAction(state, action);
    },

    AddProductByAmount: (state, action) => {
      return AddProductByAmountAction(state, action);
    },
    Restart: (state) => {
      return RestartAction(state);
    },
  },
});

export const {
  AddOrRemoveProduct,
  AddProductByAmount,
  Restart,
} = Products.actions;

export default Products.reducer;
