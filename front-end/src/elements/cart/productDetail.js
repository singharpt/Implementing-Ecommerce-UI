import React from "react";
import "./productDetail.css";

function ShowDetail({
  id,
  url,
  detailUrl,
  shortTitle,
  longTitle,
  mrp,
  cost,
  itemDiscount,
  description,
  discount,
  tagline,
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
            ${Math.abs({ mrp }, { cost })} ({itemDiscount})
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

function productDetail() {
  return (
    <div>
      <ShowDetail
        id="product1"
        url="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
        detailUrl="https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
        shortTitle="Home & Kitchen"
        longTitle="Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)"
        mrp={1195}
        cost={625}
        itemDiscount="47%"
        description="This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea."
        discount="Extra 10% Off"
        tagline="Deal of the day"
      />
      ;
    </div>
  );
}

export default productDetail;
