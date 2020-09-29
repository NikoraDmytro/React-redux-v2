import { FormatDate } from "../../../../utils/functions/FormatDate.js";

const ChangeOrdersState = (state, Products, Date) => {
  const Orders = state.ClientOrders;

  const NewState = Object.assign({}, state, {
    ClientOrders: [...Orders, { OrderDate: Date, Products: Products }],
  });

  return NewState;
};

export const AddNewOrderAction = (state, action) => {
  const NewOrder = action.payload;
  const CurrentDate = FormatDate(new Date());

  return ChangeOrdersState(state, NewOrder, CurrentDate);
};
