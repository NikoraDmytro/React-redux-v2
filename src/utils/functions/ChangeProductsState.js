export const ChangeProductsState = (Id, state, InputValue, Ids) => {
  const Product = state.ProductsList[Id];
  const ToBuyList = state.ProductsToBuyList;

  const NewState = Object.assign({}, state, {
    ProductsList: Object.assign({}, state.ProductsList, {
      [Id]: Object.assign({}, Product, {
        order: InputValue,
        remainder:
          Number(Product.order) +
          Number(Product.remainder.slice(0, -2)) -
          InputValue +
          "шт",
        orderPrice: (InputValue * Product.priceWithVAT).toFixed(2),
      }),
    }),
    ProductsToBuyList: Object.assign(
      {},
      {
        Ids: [...Ids],
        ProductsNumber: ToBuyList.ProductsNumber + (InputValue - Product.order),
        ProductsPrice:
          ToBuyList.ProductsPrice +
          (InputValue - Product.order) * Product.priceWithVAT,
      }
    ),
  });

  return NewState;
};
