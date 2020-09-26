export const RestartProductsState = (state) => {
  const Products = state.ProductsList;
  const ToBuyList = state.ProductsToBuyList;

  const RestartedProductsList = {};

  for (const Id of ToBuyList.Ids) {
    const Product = Products[Id];

    RestartedProductsList[Id] = Object.assign({}, Product, {
      order: 0,
      remainder:
        Number(Product.order) + Number(Product.remainder.slice(0, -2)) + "шт",
      orderPrice: "",
    });
  }

  console.log(RestartedProductsList);

  const RestartedToBuyList = Object.assign(
    {},
    {
      Ids: [],
      ProductsNumber: 0,
      ProductsPrice: 0,
    }
  );

  const NewState = Object.assign({}, state, {
    ProductsList: Object.assign({}, Products, RestartedProductsList),
    ProductsToBuyList: RestartedToBuyList,
  });

  return NewState;
};
