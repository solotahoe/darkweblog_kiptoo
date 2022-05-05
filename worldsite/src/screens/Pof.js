import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Pof() {
  return (
    <div className="PageContent">
      <Home />
      <div className="tableDiv table-responsive content_centered colored_background push_downwards">
        <table className="table ">
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
              <th scope="row">Nancy*******</th>
              <td>49</td>
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
              <th scope="row">Richie******</th>
              <td>85</td>
              <td> NY, USA</td>
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
              <th scope="row">Helen*******</th>
              <td> 69 </td>
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
              <th scope="row">Bruce*******</th>
              <td>49</td>
              <td>HI, USA</td>
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
              <th scope="row">Wang*******</th>
              <td>26</td>
              <td>WA, USA</td>
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
              <th scope="row">Barrett*******</th>
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
              <th scope="row">Ann *******</th>
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
              <th scope="row">Alice*******</th>
              <td>59</td>
              <td>FL, USA</td>
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
