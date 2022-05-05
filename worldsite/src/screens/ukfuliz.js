import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Ukfuliz() {
  return (
    <div className="PageContent pageContent_unique">
      <Home />
      <div className="tableDiv  table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UK Fullz</th>
              <th scope="col"> DETAILS</th>
              <th scope="col"> PRICE</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">UK Fullz</th>
              <td> UK Fullz</td>
              <td>50 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">UK Fullz</th>
              <td> UK Fullz</td>
              <td>50 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">UK Fullz</th>
              <td> UK Fullz</td>
              <td>50 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">UK Fullz</th>
              <td> UK Fullz</td>
              <td>50 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">UK Fullz</th>
              <td> UK Fullz</td>
              <td>50 USD</td>

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
