import React from "react";
import Carousel from "react-material-ui-carousel";
import "./homePoster.css";
import home from "./images/amazon_home.jpeg";
import home1 from "./images/homeposter1.jpeg";
import home2 from "./images/homeposter2.jpeg";
import home3 from "./images/homeposter3.jpeg";
import home4 from "./images/homeposter4.jpeg";
import home5 from "./images/homeposter5.jpeg";
import home6 from "./images/homeposter6.jpeg";

const data = [home, home1, home2, home3, home4, home5, home6];

// console.log(data);

const Banner = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            backgroundColor: "transparent",
            color: "white",
            marginTop: -300,
            height: "400px",
          },
        }}
      >
        {data.map((imag, i) => {
          return (
            <>
              <img className="banner_img" src={imag} alt="img" key={i} />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
