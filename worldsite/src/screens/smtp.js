import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function Smtp() {
  return (
    <div className="PageContent pageContent_unique">
      <Home />
      <div className="tableDiv  table-responsive content_centered colored_background push_downwards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SMTP NAME</th>
              <th scope="col">LIMIT</th>
              <th scope="col"> INBOX</th>
              <th scope="col"> DURATIONR</th>
              <th scope="col">PRICE</th>

              <th scope="col">Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Office365 SMTP </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>65 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mailgun SMTP SMTP </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>55 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">SendGrid SMTP </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>75 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Amazon SES SMTP </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
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
              <th scope="row">Digital Ocean </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>65 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Private SMTP </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>65 USD</td>
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
