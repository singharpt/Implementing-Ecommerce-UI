// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./CheckoutProduct.css";
// // import { StateValue } from "./../../redux/StateProvider";

// function CheckoutProduct({ id, title, image, price, rating, rated_by }) {
//   //   const [{ basket }, dispatch] = StateValue();

//   const { basket } = useSelector((state) => state.basket);
//   console.log(basket);

//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: id,
//     });
//   };

//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} alt="product" />

//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title"> {title}</p>

//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>

//         <div className="checkoutProduct__price">
//           <p>
//             {rating}
//             <span className="product_rated_by">({rated_by})</span>
//           </p>
//         </div>

//         <button onClick={removeFromCart}> Remove from cart </button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;
