import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../fire";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default function Register() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [noMatchError, setNoMatchError] = useState("");
  const [hasAccount, setHassAccount] = useState(true);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    console.log("weeeeeeeeerrw");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user && password == Confirmpassword) {
        navigate("/");
      } else {
        setNoMatchError("Password does not Match");
      }
    } catch (error) {
      console.log(error.message);
      setEmailError(error.message);
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
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
        <p className="errorsg">{emailError}</p>
        <p className="errorsg">{noMatchError}</p>
        <label>Username</label>

        <div className="Email_icon_holder">
          <i className="fa fa-user-o actual_icon" aria-hidden="true"></i>
          <input placeholder="Username" type="text" required />
        </div>
        <label>Email</label>

        <div className="Email_icon_holder">
          <i className="fa fa-envelope-o actual_icon" aria-hidden="true"></i>

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
        <label>Confirm Password</label>
        <div className="Email_icon_holder">
          <i className="fa fa-lock actual_icon" aria-hidden="true"></i>

          <input
            placeholder="Re-enter Password"
            type={showpassword ? "text" : "password"}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
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
        <button type="submit" onClick={register} className="btn btn-primary">
          Get Started!
        </button>
      </div>
    </div>
  );
}
