import React, { useEffect } from "react";
import "./Home.css";
// import Product from "../product/product";
// import { products } from "../product/productData";
import product1 from "./images/homeBox_product1.jpeg";
import product2 from "./images/homeBox_product2.jpeg";
import product3 from "./images/homeBox_product3.jpeg";
import product4 from "./images/homeBox_product4.jpeg";
import product5 from "./images/homeBox_product5.jpeg";
import product6 from "./images/homeBox_product6.jpeg";
import product7 from "./images/homeBox_product7.jpeg";
import product8 from "./images/homeBox_product8.jpeg";
import product9 from "./images/homeBox_product9.jpeg";
import product10 from "./images/homeBox_product10.jpeg";
import product11 from "./images/homeBox_product11.jpeg";
import product12 from "./images/homeBox_product12.jpeg";
import product13 from "./images/homeBox_product13.jpeg";
import product14 from "./images/homeBox_product14.jpeg";
import product15 from "./images/homeBox_product15.jpeg";
import product16 from "./images/homeBox_product16.jpeg";
// import p1 from "./images/product1.jpeg";
// import p2 from "./images/product2.jpeg";
// import p3 from "./images/product3.jpeg";
// import p4 from "./images/product4.png";
// import p5 from "./images/product5.jpeg";
// import p6 from "./images/product6.jpeg";
import HomePoster from "./homePoster";
import HomeSlide from "./homeSlide";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from ".././redux/action/actions";

function HomeBox({ heading, p1, p2, p3, p4 }) {
  return (
    <div className="home__box">
      <div className="home__box__heading">
        <h3>{heading}</h3>
      </div>

      <div className="home__box__row1">
        <img
          className="home__box__product__image"
          src={p1}
          alt="product1_logo"
        />
        <img
          className="home__box__product__image"
          src={p2}
          alt="product2_logo"
        />
      </div>
      <div className="home__box__row2">
        <img
          className="home__box__product__image"
          src={p3}
          alt="product3_logo"
        />
        <img
          className="home__box__product__image"
          src={p4}
          alt="product4_logo"
        />
      </div>
    </div>
  );
}

function Home() {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <HomePoster />
        </div>

        <div className="home__row">
          <HomeBox
            heading="Keep shopping for"
            p1={product1}
            p2={product2}
            p3={product3}
            p4={product4}
          />

          <HomeBox
            heading="Pick where you left off"
            p1={product5}
            p2={product6}
            p3={product7}
            p4={product8}
          />

          <HomeBox
            heading="Explore more across the store"
            p1={product9}
            p2={product10}
            p3={product11}
            p4={product12}
          />

          <HomeBox
            heading="Explore more items"
            p1={product13}
            p2={product14}
            p3={product15}
            p4={product16}
          />
        </div>

        <div>
          <div className="slide__part">
            <div className="left__slide">
              <HomeSlide title="Today's deal" products={products} />
            </div>
            <div className="right__slide">
              <h4>Festive latest launches</h4>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
                alt="rightimg"
              />
            </div>
          </div>
        </div>

        {/* <div className="home__row">
          <Product
            id="106"
            title="Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black)"
            image={p6}
            price={1599.99}
            rating="⭐️⭐️⭐️⭐️⭐️"
            rated_by="2179"
          />
        </div> */}

        {/* <div>
          <HomeSlide title="Today's deal" products={products} />
        </div> */}

        {/* <div className="home__row">
          <Product
            id="103"
            title="IPhone 13 Pro, 128 GB, Graphite Black"
            image={p3}
            price={999.99}
            rating="⭐️⭐️⭐️⭐️⭐️"
            rated_by="150300"
          />
          <Product
            id="101"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
            image={p1}
            price={19.99}
            rating="⭐️⭐️⭐️⭐️⭐️"
            rated_by="21079"
          />
          <Product
            id="102"
            title="Nurturing Green Combo of 4 Air Purifyier Live Indoor Plants in Glossy Mocha Fiber Pots"
            image={p2}
            price={5.47}
            rating="⭐️⭐️⭐️⭐️⭐️"
            rated_by="1300"
          />
        </div> */}

        {/* <div>
          <HomeSlide title="Today's deal" products={products} />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
