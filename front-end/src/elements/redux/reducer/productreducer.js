const products = [];

export const getProductsReducers = (state = { products }, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return { products: action.payload };
    case "PRODUCTS_NOT_RECEIVED":
      return { error: action.payload };
    default:
      return state;
  }
};
