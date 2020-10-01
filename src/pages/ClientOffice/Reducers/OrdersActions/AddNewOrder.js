import { FormatDate } from "../../../../utils/functions/FormatDate.js";

const ChangeOrdersState = (state, Products, Number, Price, Date) => {
  const Orders = state.ClientOrders;

  const NewState = Object.assign({}, state, {
    ClientOrders: [
      ...Orders,
      {
        OrderDate: Date,
        Products: Products,
        ProductsNumber: Number,
        ProductsPrice: Price,
      },
    ],
  });

  return NewState;
};

export const AddNewOrderAction = (state, action) => {
  console.log(action);
  const [NewOrder, Number, Price] = action.payload;
  const CurrentDate = FormatDate(new Date());

  return ChangeOrdersState(state, NewOrder, Number, Price, CurrentDate);
};
