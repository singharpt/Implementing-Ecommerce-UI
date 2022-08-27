import "./App.css";
import React from "react";
import Home from "./elements/home/home";
import Header from "./elements/header/header";
import Footer from "./elements/footer/footer";
import Checkout from "./elements/checkout/checkout";
import Login from "./elements/login/login";
import SignUp from "./elements/signUp/signUp";
import ProductDetail from "./elements/cart/productDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header />, <Home />, <Footer />]} />
        <Route
          path="/checkout"
          element={[<Header />, <Checkout />, <Footer />]}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/product"
          element={[<Header />, <ProductDetail />, <Footer />]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
