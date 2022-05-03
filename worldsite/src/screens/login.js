import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showpassword, SetSHOWpassword] = useState(false);

  const togglePassword = () => {
    SetSHOWpassword(!showpassword);
  };
  return (
    <div className="container-fluid SingInUpPage">
      <div className="SignInCon">
        <h1>Sign In</h1>
        <p> Login to your account to continue</p>
        <label>Email</label>

        <div className="Email_icon_holder">
          <i className="fa fa-user-o actual_icon" aria-hidden="true"></i>
          <input placeholder="Enter Your Email" type="text" required></input>
        </div>
        <label>Password</label>
        <div className="Email_icon_holder">
          <i className="fa fa-lock actual_icon" aria-hidden="true"></i>

          <input
            placeholder="Enter Your Password"
            type={showpassword ? "text" : "password"}
            required
          ></input>
          <i
            className="fa fa-eye"
            aria-hidden="true"
            onClick={() => {
              SetSHOWpassword(!showpassword);
            }}
          ></i>
        </div>
        <button type="submit" className="btn btn-primary" value="">
          Log In
        </button>

        <p className="signup-link">
          Not registered ?{" "}
          <Link to="/signup" className="CreateAccountLink">
            Create an account{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
