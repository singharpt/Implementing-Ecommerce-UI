const mongoose = require("mongoose");
const db = process.env.API_KEY

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection started"))
  .catch((error) => console.log("ERROR : ", error.message));
