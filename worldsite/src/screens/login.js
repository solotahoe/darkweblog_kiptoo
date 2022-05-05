import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../fire";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [showpassword, SetSHOWpassword] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHassAccount] = useState(true);

  const togglePassword = () => {
    SetSHOWpassword(!showpassword);
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
      setEmailError(error.message);
    }
  };
  return (
    <div className="container-fluid SingInUpPage">
      <div className="SignInCon">
        <h1>Sign In</h1>
        <p> Login to your account to continue</p>
        <p className="errorsg">{emailError}</p>
        <label>Email</label>

        <div className="Email_icon_holder">
          <i className="fa fa-user-o actual_icon" aria-hidden="true"></i>
          <input
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            required
          ></input>
        </div>
        <label>Password</label>
        <div className="Email_icon_holder">
          <i className="fa fa-lock actual_icon" aria-hidden="true"></i>

          <input
            placeholder="Enter Your Password"
            type={showpassword ? "text" : "password"}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <i
            className="fa fa-eye"
            aria-hidden="true"
            onClick={() => {
              SetSHOWpassword(!showpassword);
            }}
          ></i>
        </div>
        <button
          type="submit"
          onClick={login}
          className="btn btn-primary"
          value=""
        >
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
