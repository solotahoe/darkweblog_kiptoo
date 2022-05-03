import React from "react";
import { Link } from "react-router-dom";

export default function Addfunds() {
  return (
    <div>
      <div className="addfundspage">
        <div className="Deposit_to_account">
          Deposit Funds To Your Account{" "}
          <img
            src="/bitcoin.png"
            alt="bitcoinLogo"
            className="bitcoin_addfunds_image"
          />
        </div>
        <div className="make_payment_div">
          <h4>Make Payments</h4>
          <p>
            Please scan the QR code or copy adress manually to make sure you are
            using correct address...For any payment you made wait for at least
            2-3 confirmation then refresh this payment page.. then proceed to
            buy items
          </p>
          <div className="imgDiv">
            <img
              src="darkweblogs.jpg"
              alt="qr_scan_code"
              className="qr_scan_code_img"
            />
          </div>
          <label>To This Address</label>
          <div>
            <input type="text" value="3JHeHfHL7ZAJxewgGS6HbvXZA9yQkiNWuP" />
          </div>
          <button>Copy</button>
          <h5>
            Hello! user please note that the above payment adress is for bitcoin
            users only.
          </h5>
          <h5 className="exclamationh5">
            <img src="/excal.png" alt="warning" className="exclamation" />
            When you get that success message that we have received your money,
            you can close this page, it will be automatically added upon
            confirmation
          </h5>
          <div className="loadingGifDIV">
            <img src="loading.gif" alt="loadinggif" className="loaadingGif" />
          </div>
          <div className="Pay_not_complete">
            Payment not yet completed ! If you sent the money, don't close this
            page until the transaction is registered !
          </div>
        </div>
        <div className="addfunds_footer">
          <a href="https://t.me/webmasterkim" target="_blank">
            <img
              src="telegram.png"
              alt="telegram_logo"
              className="telegram_logo"
            />
          </a>

          <p className="footer_addfunds_page">
            Darkweblogs ® | Copyright © 2022 , All rights reserved. 2017 - 2022
          </p>
        </div>
      </div>
    </div>
  );
}
