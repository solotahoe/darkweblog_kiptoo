import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function UsaFuliz() {
  return (
    <div className="PageContent pageContent_unique">
      <Home />
      <div className="tableDiv table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">USA FULLZ CVV</th>
              <th scope="col"> DETAILS</th>
              <th scope="col"> PRICE</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">USA FULLZ</th>
              <td> US dob+ssn CC Fullz(CVV) x10</td>
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
              <th scope="row">USA FULLZ</th>
              <td> US dob+ssn CC Fullz(CVV) x10</td>
              <td>200 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">USA FULLZ</th>
              <td> US dob+ssn CC Fullz(CVV) x10</td>
              <td>300 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">USA FULLZ</th>
              <td> US dob+ssn CC Fullz(CVV) x10</td>
              <td>230 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">USA FULLZ</th>
              <td> US dob+ssn CC Fullz(CVV) x10</td>
              <td>1000 USD</td>

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
