import React, { useEffect, useState } from "react";
import "./Login.css";
import login_logo from "./images/loginLogo.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

function Login() {
  //const { account, setAccount } = useContext(Logincontext);

  const [currentState, setState] = useState({
    email: "",
    password: "",
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
    // console.log(email);
    try {
      e.preventDefault();
      const { email, password } = currentState;
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
        // console.log("invalid details");
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
        throw new Error(" User not found");
      } else {
        //setAccount(data);
        setState({ ...currentState, email: "", password: "" });
        toast.success("Login Successfully done 😃!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("login page ka error ----> " + error.message);
    }
  };

  return (
    <div>
      <div className="login__upp">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="login__logo" src={login_logo} alt="login page logo" />
        </Link>
        <div className="login__box">
          <form method="post">
            <h1 className="login__box__heading">Sign-In</h1>
            <label className="login__box__title">
              Email or mobile phone number
            </label>
            <input
              className="login__textbox"
              onChange={addData}
              value={currentState.email}
              type="text"
              name="email"
              id="email"
            />
            <label className="login__box__title">Password</label>
            <input
              className="login__textbox"
              onChange={addData}
              value={currentState.password}
              type="password"
              name="password"
              id="password"
            />
            <button className="login__button" onClick={senddata}>
              Sign In
            </button>
          </form>
          <small className="login__box__info1">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </small>
          <p className="login__box__info2">Need help?</p>
        </div>
        <div className="login__horizationLine">
          <h2>
            <span>
              <small>New to Amazon?</small>
            </span>
          </h2>
        </div>
        <button className="login__create__account__button">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Create your Amazon account
          </Link>
        </button>
      </div>
      <div className="login__bellow">
        <div className="login__bellow__line1">
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

export default Login;
