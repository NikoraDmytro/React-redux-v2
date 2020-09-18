import { AddOrRemoveProduct } from "../../pages/ClientOffice/Reducers/ProductsReducer.js";

export const Restart = (ProductsToBuyList, dispatch) => {
  for (let Id of ProductsToBuyList.Ids) {
    console.log(Id);
    dispatch(AddOrRemoveProduct(Id));
  }
};
