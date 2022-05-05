import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Visa() {
  return (
    <div className="PageContent">
      <Home />
      <div className="tableDiv  table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">CARD TYPE</th>
              <th scope="col">CARD BIN</th>
              <th scope="col"> INCLUDES</th>
              <th scope="col"> COUNTRY</th>
              <th scope="col">price</th>
              <th scope="col">status</th>
              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Credit Card</th>
              <td>4120611*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td>4037840*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4366182*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4224960*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4599540*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4552250*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4426309*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Debit Card</th>
              <td>4551200*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 476184313*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 4436280*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 4737030*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 4436280*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 4037840*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$50</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Credit Card</th>
              <td> 4108740*******</td>
              <td>
                {" "}
                First and last name, Bill Address,Zip Code Email, Phone Number,
                Csv,VBV Pass, CVV Pass,SSN
              </td>
              <td>USA</td>
              <td>$15</td>
              <td title="live">
                <div className="liveDot"></div>
              </td>
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
