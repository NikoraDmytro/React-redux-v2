import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Reducers/ProductsReducer.js";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
