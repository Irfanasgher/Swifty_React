export const currencyToUse = (usedCurrency) => {
  let currencyKeys = Object.keys(usedCurrency);
  return {
    name: usedCurrency[currencyKeys[1]],
    value: usedCurrency[currencyKeys[0]],
  };
};

export const productPrice = (price, value) => {
  return ((price * value).toFixed(2)).toLocaleString();
};

export const productDiscountPrice = (price, discountPrice) => {
  return `-${(((discountPrice - price) * 100) / discountPrice).toFixed(2)}%`;
};
