import React from "react";
import "./homeSlides.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ title, products }) => {
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>
      <Divider />

      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={false}
        focusOnSelect={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        customTransition="all .5"
        transitionDuration={100}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        sliderClass="react-multi-carousel-track"
      >
        {products.map((e) => {
          return (
            <Link to="/login">
              <div className="products_items">
                <div className="product_img">
                  <img src={e.url} alt="product" />
                </div>
                <p className="products_name">{e.title.shortTitle}</p>
                <p className="products_offer" style={{ color: "#  007185" }}>
                  {e.discount}
                </p>
                <p className="products_explore">{e.tagline}</p>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;

// {`/getproductsone/${e.id}`}
