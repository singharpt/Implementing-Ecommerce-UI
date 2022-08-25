const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "abcdefghijklmnopqrstuvwxyz000099";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  mobnum: {
    type: Number,
    require: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  password_agn: {
    type: String,
    require: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],

  carts: Array,
});

// password hasing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.password_agn = await bcrypt.hash(this.password_agn, 12);
  }
  next();
});

// generting token
userSchema.methods.generatAuthtoken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, keysecret, {
      expiresIn: "1d",
    });
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
