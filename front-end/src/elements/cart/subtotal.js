import React from "react";
import "./Subtotal.css";
import { StateValue } from "./../../redux/StateProvider";
import { getBasketTotal } from "./../../redux/reducer";

function subtotal() {
  const [{ basket }] = StateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal({basket?.length} items) :
        <strong> ${getBasketTotal(basket)} </strong>
      </p>
      <small className="subtotal__gift">
        <input type="Checkbox" />
        This order contains a gift
      </small>
      <button className="checkout__button">Proceed to checkout</button>
    </div>
  );
}

export default subtotal;
