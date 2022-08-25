import React from "react";
import "./CheckoutProduct.css";
import { StateValue } from "./../../redux/StateProvider";

function checkoutProduct({ id, title, image, price, rating, rated_by }) {
  const [{ basket }, dispatch] = StateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__price">
          <p>
            {rating}
            <span className="product_rated_by">({rated_by})</span>
          </p>
        </div>

        <button onClick={removeFromCart}> Remove from cart </button>
      </div>
    </div>
  );
}

export default checkoutProduct;
