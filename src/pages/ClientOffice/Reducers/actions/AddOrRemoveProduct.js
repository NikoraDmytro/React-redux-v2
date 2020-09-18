import { ChangeProductsState } from "../../../../utils/functions/ChangeProductsState.js";

export const AddOrRemoveProductAction = (state, action) => {
  const Id = action.payload;
  const Product = state.ProductsList[Id];

  const Input = document.getElementById(`${Product.vendorCode}number`);

  const Ids = new Set(state.ProductsToBuyList.Ids);

  if (!Number(Product.order) && Number(Product.remainder.slice(0, -2))) {
    Input.value = 1;
    Ids.add(Id);
  } else {
    Input.value = "";
    Ids.delete(Id);
  }

  const NewState = ChangeProductsState(Id, state, Input.value, Ids);

  return NewState;
};
