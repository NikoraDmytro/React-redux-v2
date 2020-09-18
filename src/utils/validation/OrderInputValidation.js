export const OrderInputValidation = (Input, product) => {
  const Value = Number(Input.value);
  const MaxValue =
    Number(product.order) + Number(product.remainder.slice(0, -2));

  console.log(Input.value, MaxValue);

  if (!Value) Input.value = "";
  else if (Value < 0 || Value > MaxValue) Input.value = product.order;
};
