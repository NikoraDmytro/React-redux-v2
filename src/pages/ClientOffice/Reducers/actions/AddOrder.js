import { RestartProductsState } from "../../../../utils/functions/RestartProductsState";

export const RestartAction = (state) => {
  const Products = state.ProductsList;
  const ProductsToBuyList = state.ProductsToBuyList;

  for (const Id of ProductsToBuyList.Ids) {
    const Product = Products[Id];
    const Input = document.getElementById(`${Product.vendorCode}number`);

    Input.value = "";
  }

  return RestartProductsState(state);
};
