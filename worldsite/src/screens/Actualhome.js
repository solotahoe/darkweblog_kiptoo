import React from "react";
import Home from "./home";

export default function Actualhome() {
  return (
    <div className="PageContent">
      <Home />
      <div className="content_centered">
        <h3>Dashboard</h3>
      </div>
      <div className="colored_background">
        <h4>Welcome, user</h4>
      </div>
      <div className="colored_background push_downwards">
        <p>
          <strong className="strong_welcome">Welcome</strong>
        </p>
        <p>
          PLEASE READ CAREFULLY OUR TERMS AND CONDITIONS , ESPECIALLY THE STORE
          RULES, PLEASE READ BELOW BEFORE FUNDING YOUR ACCOUNT
        </p>

        <p>
          <strong className="strong_welcome">ACCOUNT FUNDING </strong>
        </p>
        <p>
          BEFORE YOU CAN PURCHASE ANY OF OUR TOOLS, YOUR ACOUNT MUST BE FUNDED.
          first funding is ($100 usd minimum) second time you can fund any
          amount from $85
        </p>

        <p>
          <strong className="strong_welcome">PRIVACY POLICY </strong>
        </p>
        <p>
          I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and i will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. no one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences
        </p>
        <p>
          <strong className="strong_welcome">REFUND POLICY </strong>
        </p>
        <p>
          Please if you purchase any tools here, please try to verify it within
          24 hours, if the tools seems to be dead or not working perfectly,
          please submit a ticket to replace or to refund.
        </p>

        <p className="last_part">
          AFTER ANY PURCHASE YOU CONTACT ADMIN IN TELEGRAM{" "}
          <span className="lowercaseUserName">@Ragstoricher </span> FOR CASH OUT
          METHOD
        </p>
      </div>
      <div className="colored_background push_downwards">
        <h4>Contact for Support</h4>
        <h3>CONTACT ADMIN IN TELEGRAM @Ragstoricher</h3>
      </div>
      <footer className="footer">
        <p> &copy;2022 Darklogs Logs Shop</p>
      </footer>
    </div>
  );
}
