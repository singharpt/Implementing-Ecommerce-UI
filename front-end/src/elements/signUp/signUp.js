import * as React from "react";
import "./SignUp.css";
import signUp_logo from "./images/loginLogo.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [currentState, setState] = React.useState({
    fname: "",
    email: "",
    mobnum: "",
    password: "",
    password_agn: "",
  });

  const addData = (input_data) => {
    const { name, value } = input_data.target;
    setState(() => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  };
  //console.log(currentState);

  const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobnum, password, password_agn } = currentState;

    if (
      fname === "" ||
      email === "" ||
      mobnum === "" ||
      password === "" ||
      password_agn === ""
    ) {
      toast.error("Please enter all details 👎!", {
        position: "top-center",
      });
    } else if (mobnum.length !== 10) {
      toast.error("Mobile number must be of 10 digits 👎!", {
        position: "top-center",
      });
    } else if (password !== password_agn) {
      toast.error("Password Mismatch 👎!", {
        position: "top-center",
      });
    }

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          mobnum,
          password,
          password_agn,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        setState({
          ...currentState,
          fname: "",
          email: "",
          mobnum: "",
          password: "",
          password_agn: "",
        });
        toast.success("Registration Successfully done 😃!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("front end catch block error ----> " + error.message);
    }
  };
  return (
    <div>
      <div className="signUp__upper__part">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="signUp__logo"
            src={signUp_logo}
            alt="sign up page logo"
          />
        </Link>
        <div className="signUp__box">
          <form method="POST">
            <h1 className="signUp__heading">Create Account</h1>
            <label className="signUp__box__title">Your name</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              value={currentState.fname}
              placeholder=" First and last Name"
              name="fname"
              id="name"
            />
            <label className="signUp__box__title">Email</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              value={currentState.email}
              name="email"
              id="email"
            />
            <label className="signUp__box__title">Mobile number</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              value={currentState.mobnum}
              name="mobnum"
              id="mobnum"
            />
            <label className="signUp__box__title">Password</label>
            <input
              className="signUp__textbox"
              type="password"
              onChange={addData}
              value={currentState.password}
              placeholder=" At least 6 characters"
              name="password"
              id="password"
            />
            <label className="signUp__box__title">Confirm password</label>
            <input
              className="signUp__textbox"
              type="password"
              onChange={addData}
              value={currentState.password_agn}
              name="password_agn"
              id="password_agn"
            />
            <small className="signUp__box__info">
              We will send you a text to verify your phone. Message and Data
              rates may apply.
            </small>
            <button className="SignUp__button" onClick={senddata}>
              Continue
            </button>
          </form>
          <div className="signUp__to__logIn">
            <hr />
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="signUp__lower__part">
        <div className="signUp__lower__info">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <small>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
