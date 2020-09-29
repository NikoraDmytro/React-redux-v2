import { ChangeProductsState } from "../../../../utils/functions/ChangeProductsState.js";

export const AddProductByAmountAction = (state, action) => {
  const Id = action.payload;
  const Product = state.ProductsList[Id];
  const Input = document.getElementById(`${Product.vendorCode}number`);

  const Ids = new Set(state.ProductsToBuyList.Ids);

  if (!Number(Input.value)) {
    Input.value = "";

    Ids.delete(Id);
  } else {
    Ids.add(Id);
  }

  const NewState = ChangeProductsState(Id, state, Input.value, Ids);

  return NewState;
};
