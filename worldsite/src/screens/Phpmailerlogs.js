import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

export default function PHPmailer() {
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
              <th scope="row">PHP Mailer 5.x </th>
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
              <th scope="row">Unlimited Mailer </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>70 USD</td>

              <td>
                {" "}
                <Link to="/addfunds">
                  {" "}
                  <button className="Buy_now_btn">Buy Now</button>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Leaf mailer </th>
              <td>10k Daily</td>
              <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
              <td>1 Month</td>
              <td>90 USD</td>

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
