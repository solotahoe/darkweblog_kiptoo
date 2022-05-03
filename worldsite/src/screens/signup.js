import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showpassword, SetSHOWpassword] = useState(false);
  const togglePassword = () => {
    SetSHOWpassword(!showpassword);
  };
  return (
    <div className="container-fluid SingInUpPage">
      <div className="SignInCon">
        <h1>Register</h1>
        <p className="signup-link">
          Already have an account?{" "}
          <Link to="/" className="CreateAccountLink">
            Login here{" "}
          </Link>
        </p>
        <label>Username</label>

        <div className="Email_icon_holder">
          <i className="fa fa-user-o actual_icon" aria-hidden="true"></i>
          <input placeholder="Username" type="text" required></input>
        </div>
        <label>Email</label>

        <div className="Email_icon_holder">
          <i className="fa fa-envelope-o actual_icon" aria-hidden="true"></i>

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
        <label>Confirm Password</label>
        <div className="Email_icon_holder">
          <i className="fa fa-lock actual_icon" aria-hidden="true"></i>

          <input
            placeholder="Re-enter Password"
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
        <button type="submit" className="btn btn-primary">
          Get Started!
        </button>
      </div>
    </div>
  );
}
