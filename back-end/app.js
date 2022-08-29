require("dotenv").config();
require("./database/conn");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./models/userSchema");
const products = require("./models/productSchema");
// const dataToDatabase = require("./database/dataToDatabase");
const db =
  "mongodb+srv://07arpit:OtO9TjB8jNNwXBsj@cluster0.pevcnmw.mongodb.net/amazon_clone?retryWrites=true&w=majority";
const router = require("./routes/router");
const cookieParser = require("cookie-parser");

const port = 8000;

app.use(cors());
app.use(cookieParser(""));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server is running on port number", port);
});
