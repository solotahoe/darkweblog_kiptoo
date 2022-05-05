import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Match() {
  return (
    <div className="PageContent">
      <Home />
      <div className="tableDiv table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ACCOUNT NAME</th>
              <th scope="col">AGE</th>
              <th scope="col"> LOCATION</th>
              <th scope="col"> GENDER</th>
              <th scope="col">PRICE</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Zoey*******</th>
              <td>36</td>
              <td> NY, USA</td>
              <td>Female</td>
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
              <th scope="row">Kent*******</th>
              <td>65</td>
              <td> PA, USA</td>
              <td>Female</td>
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
              <th scope="row">Anna*******</th>
              <td>59</td>
              <td>SC, USA</td>
              <td>Female</td>
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
              <th scope="row">Yaya*******</th>
              <td>36</td>
              <td>CO, USA</td>
              <td>Female</td>
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
