import React, { useState, useEffect } from "react";
import "./productDetail.css";
import { useParams } from "react-router";

function ShowDetail({
  detailUrl,
  shortTitle,
  longTitle,
  mrp,
  cost,
  itemDiscount,
  description,
  discount,
}) {
  return (
    <div className="main__box">
      <div className="left__box">
        <img src={detailUrl} alt="product_image"></img>
        <div className="left__box__button">
          <button className="b1">Add to Cart</button>
          <button className="b2">Buy Now</button>
        </div>
      </div>
      <div className="right__box">
        <h1>{shortTitle}</h1>
        <h2>{longTitle}</h2>
        <hr />
        <p className="mrp">
          <span className="part1">M.R.P. :&nbsp;</span>
          <span className="part2">${mrp}</span>
        </p>
        <p className="deal">
          <span className="part1">Deal of the Day :&nbsp;</span>
          <span className="part2">${cost}</span>
        </p>
        <p className="save">
          <span className="part1">You save :&nbsp;</span>
          <span className="part2">
            ${mrp - cost} ({itemDiscount})
          </span>
        </p>
        <p className="discount">
          <span className="part1">Discount :&nbsp;</span>
          <span className="part2">{discount}</span>
        </p>
        <p className="delivery">
          <span className="part1">FREE Delivery :&nbsp;</span>
          <span className="part2">Aug 10 - 15&nbsp;</span>
          <span className="part3">Details</span>
        </p>
        <p className="fast__delivery">
          <span className="part1">Fastest Delivery :&nbsp;</span>
          <span className="part2">Tomorrow 11 AM</span>
        </p>
        <p className="about">
          <span className="part1">About the item :&nbsp;</span>
          <span className="part2">{description}</span>
        </p>
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [indProductData, setIndProductData] = useState("");
  const getIndProductData = async () => {
    try {
      const res = await fetch(`/products/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status !== 201) {
        alert("Found no data");
      } else {
        setIndProductData(data);
      }
    } catch (error) {
      console.log("error in prodcut details ----> " + error.message);
    }
  };
  useEffect(() => {
    getIndProductData();
  }, [id]);

  return (
    <div>
      {indProductData && Object.keys(indProductData).length && (
        <ShowDetail
          id={indProductData["0"]["id"]}
          url={indProductData["0"]["url"]}
          detailUrl={indProductData["0"]["detailUrl"]}
          shortTitle={indProductData["0"]["title"]["shortTitle"]}
          longTitle={indProductData["0"]["title"]["longTitle"]}
          mrp={indProductData["0"]["price"]["mrp"]}
          cost={indProductData["0"]["price"]["cost"]}
          itemDiscount={indProductData["0"]["price"]["discount"]}
          description={indProductData["0"]["description"]}
          discount={indProductData["0"]["discount"]}
          tagline={indProductData["0"]["tagline"]}
        />
      )}
      ;
    </div>
  );
}

export default ProductDetail;

// return (
//   <div>
//     <ShowDetail
//       id={indProductData.id}
//       url={indProductData.url}
//       detailUrl={indProductData.detailUrl}
//       shortTitle={indProductData.title.shortTitle}
//       longTitle={indProductData.title.longTitle}
//       mrp={indProductData.price.mrp}
//       cost={indProductData.price.cost}
//       itemDiscount={indProductData.price.discount}
//       description={indProductData.description}
//       discount={indProductData.discount}
//       tagline={indProductData.tagline}
//     />
//     ;
//   </div>
// );
