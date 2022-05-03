import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <div className="Page_header">
        <div className="headerContent2">
          <p>Bank Login Shop</p>
        </div>
        <div className="headerContent2">
          <Link to="/addfunds">
            <button className="btn btn-primary mb-2 Menu_addfundsButton">
              Add Funds
            </button>
          </Link>
          <img
            src="/bitcoin.png"
            alt="bitcoinLogo"
            className="bitcoin_header_image"
          />
          <p className="hi_user"> Hi, user</p>
        </div>
      </div>
      <div className="navbar">
        <a href="/home">
          <i className="fa fa-home menus_icons" aria-hidden="true"></i>
          Dashboard
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            {" "}
            <i
              className="fa fa-folder-open-o menus_icons2"
              aria-hidden="true"
            ></i>
            Bank Logs
          </button>
          <div className="dropdown-content">
            <a href="/chasebanklogs">Chase Bank Logs</a>
            <a href="/boalogs">BOA Logs</a>
            <a href="/suntrustlogs">Suntrust Logs</a>
            <a href="/tdbankuslogs">Td Bank USA</a>
            <a href="/citibanklogs">Citi Bank</a>
            <a href="/huntingtonbanklogs">Huntington Bank Logs</a>
            <a href="/wellsfargologs">Wells Fargo</a>
            <a href="/carnadianbanklogs">Carnadian Banks</a>
            <a href="/ukbanklogs">Uk Banks</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa fa-id-card-o menus_icons2" aria-hidden="true"></i>
            Cards
          </button>
          <div className="dropdown-content">
            <a href="/visacard">Visa Card</a>
            <a href="/mastercard">MasterCard</a>
            <a href="/americanexpress">American Express</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            {" "}
            <i className="fa fa-life-ring menus_icons2" aria-hidden="true"></i>
            Accounts
          </button>
          <div className="dropdown-content">
            <a href="/facebookaccound">Facebook Account</a>
            <a href="/linkedinaccount">Linkedin Account</a>
            <a href="/pof">POF</a>
            <a href="/match">MATCH</a>
            <a href="/christinamingle">Christian Mingle</a>
            <a href="/instagramaccounts">Instagram Accounts</a>
            <a href="/zooks">Zooks</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa fa-desktop menus_icons2" aria-hidden="true"></i>
            Spamming
          </button>
          <div className="dropdown-content">
            <a href="/smtp">SMTP</a>
            <a href="/phpmailer">PHP Mailer</a>
            <a href="/rdp">RDP</a>
            <a href="/cpanel">CPanel</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa fa-file menus_icons2" aria-hidden="true"></i>
            Scum pages
          </button>
          <div className="dropdown-content">
            <a href="/bankscampages">Bank Scampages</a>
            <a href="/emailscampages">Email Scampages</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa fa-briefcase menus_icons" aria-hidden="true"></i>
            FULLZ
          </button>
          <div className="dropdown-content">
            <a href="/usafuliz">USA Fuliz</a>
            <a href="/canadafuliz">Canada Fuliz</a>
            <a href="Europefuliz">Europe Fuliz</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn lastOne">
            <i
              className="fa fa-long-arrow-up menus_icons"
              aria-hidden="true"
            ></i>
            LEADS
          </button>
          <div className="dropdown-content">
            <a href="/usalieads">Usa Leads</a>
            <a href="/canadaleads">Canada Leads</a>
            <a href="/europeleads">Europe Leads</a>
            <a href="/alibabaleads">Alibaba Leads</a>
            <a href="/singerporeleads">Singerpore Leads</a>
            <a href="/chinaleads">China Leads</a>
            <a href="/hongkongleads">Hong Kong Leads</a>
          </div>
        </div>
      </div>
    </div>
  );
}
