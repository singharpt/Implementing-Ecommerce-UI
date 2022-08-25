import "./Product.css";
import { StateValue } from "./../../redux/StateProvider";

function product({ id, title, image, price, rating, rated_by }) {
  const [{ basket }, dispatch] = StateValue();

  const addToBasket = () => {
    console.log({ basket });

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        rated_by: rated_by,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <p className="product__rating">
          <small>{rating}</small>
          <span className="product_rated_by">({rated_by})</span>
        </p>
      </div>

      <img src={image} alt="product1_logo" />

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default product;
