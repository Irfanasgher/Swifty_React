import { VISIBILITY_FILTERS } from "../static/constants";

export const getProducts = (store) => store.products;
export const getProductPriceFilter = (store) => store.priceFilter;
export const getWishlist = (store) => store.wishlist;

export const getProductsByFilter = (store, visibilityFilter, count = null) => {
  const allProducts = getProducts(store);
  const filterPrices = getProductPriceFilter(store);
  
  // THIS IS A WORRARROUND, PLEASE FIX THIS.
  if(allProducts === undefined){
    window.location = "./"
  }

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.SNACKS:
    case VISIBILITY_FILTERS.DAILY:
    case VISIBILITY_FILTERS.ICECREAM:
    case VISIBILITY_FILTERS.DRINKS:
    case VISIBILITY_FILTERS.INSTANT:
    case VISIBILITY_FILTERS.BREAD:
      return allProducts.filter(
        (product) =>
          product.category === visibilityFilter &&
          product.price < filterPrices.pricerange
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allProducts.filter((product, index) => {
          if (product.sale === true && index < 6) {
            return true;
          }
          return false;
        });
      } else {
        return allProducts.filter(
          (product) =>
            product.sale === true && product.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allProducts.filter((product) => {
        return product.price < filterPrices.pricerange;
      });
  }
};

export const getUsedCurrency = (store) => store.usedCurrency;
