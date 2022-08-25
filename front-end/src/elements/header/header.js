import React from "react";
import "./Header.css";
import logo from "./images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { StateValue } from "./../../redux/StateProvider";

function header() {
  const [{ basket }] = StateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="header_logo" src={logo} alt="amazon_logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLine1">Hello</span>
            <span className="header_optionLine2">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLine1">Returns</span>
          <span className="header_optionLine2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Your</span>
          <span className="header_optionLine2">Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_ShoppingCartIcon">
            <ShoppingCartIcon />
            <span className="header_optionLine2 header_shoppingCartCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default header;
