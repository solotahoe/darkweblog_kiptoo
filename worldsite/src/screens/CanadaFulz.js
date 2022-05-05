import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function CanadaFuliz() {
  return (
    <div className="PageContent pageContent_unique">
      <Home />
      <div className="tableDiv table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Canada Fullz</th>
              <th scope="col"> DETAILS</th>
              <th scope="col"> PRICE</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Canada Fullz</th>
              <td> Canada VISA CC Fullz(CVV) x10</td>
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
              <th scope="row">Canada Fullz</th>
              <td> Canada VISA CC Fullz(CVV) x10</td>
              <td>250 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Canada Fullz</th>
              <td> Canada VISA CC Fullz(CVV) x10</td>
              <td>340 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Canada Fullz</th>
              <td> Canada VISA CC Fullz(CVV) x10</td>
              <td>450 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Canada Fullz</th>
              <td> Canada VISA CC Fullz(CVV) x10</td>
              <td>1500 USD</td>

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
        <p> &copy;2022 Darkweblogs Logs Shop</p>
      </footer>
    </div>
  );
}
