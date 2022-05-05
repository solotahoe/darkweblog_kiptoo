import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Mingle() {
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
              <th scope="row">Mary*******</th>
              <td>59</td>
              <td> New York, USA</td>
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
              <th scope="row">Mary*******</th>
              <td>45</td>
              <td> VA, USA</td>
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
              <th scope="row">Mary*******</th>
              <td> 29</td>
              <td>WA, USA</td>
              <td>Male</td>
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
              <th scope="row">Mary*******</th>
              <td>35</td>
              <td>CA, USA</td>
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
              <th scope="row">Mary*******</th>
              <td>50</td>
              <td>KS, USA</td>
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
              <th scope="row">Mary*******</th>
              <td>65</td>
              <td>New York, USA</td>
              <td>Male</td>
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
              <th scope="row">Mary*******</th>
              <td>35</td>
              <td>New York, USA</td>
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
              <th scope="row">Joel *******</th>
              <td>47</td>
              <td>New York, USA</td>
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
        <p> &copy;2022 Darklogs Logs Shop</p>
      </footer>
    </div>
  );
}
