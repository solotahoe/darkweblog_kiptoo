import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Bankscam() {
  return (
    <div className="PageContent pageContent_unique">
      <Home />
      <div className="tableDiv table-responsive content_centered colored_background push_downwards">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">RDP</th>
              <th scope="col">DETAILS</th>
              <th scope="col"> INBOX</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Boa Scampage</th>
              <td>
                Online Access, Email Access, Debit card info Anti Bots.....
              </td>
              <td>150 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Wells Fargo Scampage</th>
              <td>
                Online Access, Email Access, Debit card info + Anti Bots.....
              </td>
              <td>130 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chase Scampage</th>
              <td>
                Online Access, Email Access, Debit card info + Anti Bots.....
              </td>
              <td>170 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">53RD Bank Scampage</th>
              <td>
                Online Access, Email Access, Debit card info + Anti Bots.....
              </td>
              <td>100 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">CITI Scampage</th>
              <td>
                Online Access, Email Access, Debit card info + Anti Bots.....
              </td>
              <td>150 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="footer">
        <p> &copy;2022 Darklogs Logs Shop</p>
      </footer>
    </div>
  );
}
