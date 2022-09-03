// import React from "react";
// // import { useSelector } from "react-redux";
// import checkoutAddImage from "./images/checkout_add2.jpeg";
// import "./Checkout.css";
// import Subtotal from "../cart/subtotal";
// import CheckoutProduct from "./checkoutProduct";
// // import { StateValue } from "./../../redux/StateProvider";

// function Checkout() {
//   //   const [{ basket }, dispatch] = StateValue();
//   // const { basket } = useSelector((state) => state.basket);

//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <img
//           className="checkout__add"
//           src={checkoutAddImage}
//           alt="checkout page add"
//         />

//         <div>
//           <h2 className="checkout__title">Your Shopping Cart</h2>
//         </div>

//         {basket.map((item) => (
//           <CheckoutProduct
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             price={item.price}
//             rated_by={item.rated_by}
//             rating={item.rating}
//           />
//         ))}
//       </div>
//       <div className="checkout__right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
