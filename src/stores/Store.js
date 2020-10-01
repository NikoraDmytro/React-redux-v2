import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../pages/ClientOffice/Reducers/ProductsReducer.js";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
