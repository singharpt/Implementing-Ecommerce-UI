export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch("/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await data.json();
    // console.log(res);
    dispatch({ type: "PRODUCTS_RECEIVED", payload: res });
  } catch (error) {
    dispatch({ type: "PRODUCTS_NOT_RECEIVED", payload: error.response });
  }
};
