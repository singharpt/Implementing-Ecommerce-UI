const express = require("express");
const router = new express.Router();
const USER = require("../models/userSchema");
const products = require("../models/productSchema");
const bcrypt = require("bcryptjs");

//getting the complete product data
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await products.find();
    // console.log(productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error ----> " + error.message);
  }
});

//getting the individual product data
router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleproductdata = await products.find({ id: id });
    res.status(201).json(singleproductdata);
  } catch (error) {
    res.status(400).json(singleproductdata);
    console.log("error ----> " + error.message);
  }
});

//registering the user
router.post("/register", async (req, res) => {
  const { fname, email, mobnum, password, password_agn } = req.body;

  if (!fname || !email || !mobnum || !password || !password_agn) {
    res.status(422).json({ error: "ALL DETAILS NOT RECEIVED" });
    console.log("ALL DETAILS NOT RECEIVED");
  }

  try {
    const preuser = await USER.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This email already exist" });
    } else if (password !== password_agn) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new USER({
        fname,
        email,
        mobnum,
        password,
        password_agn,
      });
      const storedata = await finaluser.save();
      console.log(storedata + "user successfully added");
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("error in user registration ----> " + error.message);
    res.status(422).send(error);
  }
});

//logging in the user

// login data
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }

  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin);
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      console.log(isMatch);

      if (!isMatch) {
        res.status(400).json({ error: "invalid crediential pass" });
      } else {
        const token = await userlogin.generatAuthtoken();
        // console.log("token ---->", token);

        res.cookie("ecommerce-clone", token, {
          expires: new Date(Date.now() + 2589000),
          httpOnly: true,
        });

        res.status(201).json(userlogin);
        console.log("login successful");
      }
    } else {
      res.status(400).json({ error: "user not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid crediential pass" });
    console.log("error at login time" + error.message);
  }
});

module.exports = router;
