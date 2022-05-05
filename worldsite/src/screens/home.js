import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Home() {
  const [showSignout, setShowSignout] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div className="homePage">
      <div className="Page_header">
        {/* menu for smaller screens start */}
        <div className={showSubmenu ? "bars_holder" : "bars_holder_away"}>
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={() => {
              setShowSubmenu(!showSubmenu);
            }}
          ></i>
        </div>

        <div
          className="divcontainer_screen_menu"
          style={{ width: showSubmenu ? "100%" : "0%" }}
        >
          <div>
            <div className="dropdownMenu_smallscreen">
              <div className="menu_haeder">
                <img src="/smi.jpg" alt="imaga.jpg" />
                <h3>CORK</h3>
              </div>
              <div className="accordion" id="accordionExample">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  {" "}
                  <h2 className="mb-0 homeLogout">
                    <i
                      className="fa fa-home menus_icons4"
                      aria-hidden="true"
                    ></i>{" "}
                    Dashboard{" "}
                  </h2>
                </Link>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i
                          className="fa fa-folder-open-o menus_icons3"
                          aria-hidden="true"
                        ></i>
                        Bank Logs
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/chasebanklogs"
                      >
                        {" "}
                        <li>Chase Bank</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/boalogs">
                        {" "}
                        <li>BOA Bank Logs</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/suntrustlogs"
                      >
                        <li>Suntrust Logs</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/tdbankuslogs"
                      >
                        <li>TD bank USA</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/citibanklogs"
                      >
                        <li>Citibank</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/huntingtonbanklogs"
                      >
                        <li>Huntington bank logs</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/wellsfargologs"
                      >
                        <li>wells fargo</li>
                      </Link>

                      <li className="with_subs">Canadian Banks</li>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/rbcbanklogs"
                      >
                        <li className="canadianbank">RBC Bank</li>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/bmologs">
                        <li className="canadianbank">BMO logs</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/tdcanadalogs"
                      >
                        <li className="canadianbank">TD Canada</li>
                      </Link>
                      <li className="with_subs">Uk Banks</li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/regionsbanklogs"
                      >
                        <li className="lollydsbanklogs"> Lollyds Bank</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/hsbcbanklogs"
                      >
                        <li className="canadianbank"> Hsbc - Uk</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/halifaxbanklogs"
                      >
                        <li className="canadianbank">Halifax Bank</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/Barclaysbanklogs"
                      >
                        <li className="canadianbank">Barclays Bank</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i
                          className="fa fa-id-card-o menus_icons3"
                          aria-hidden="true"
                        ></i>
                        Cards{" "}
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link style={{ textDecoration: "none" }} to="/visacard">
                        <li>Visa card</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/mastercard">
                        <li>Master card</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/americanexpress"
                      >
                        <li>American Express</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i
                          className="fa fa-life-ring menus_icons3"
                          aria-hidden="true"
                        ></i>
                        Accounts{" "}
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/facebookaccount"
                      >
                        <li>Facebook Account</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/linkedinaccount"
                      >
                        <li>Linkedin Account</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/pof">
                        <li>POF</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/match">
                        <li>MATCHS</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/instagramaccounts"
                      >
                        <li>Instagram Accounts</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/christinamingle"
                      >
                        <li>Christian Mingle</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/zooks">
                        <li>Zooks</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i
                          className="fa fa-desktop menus_icons3"
                          aria-hidden="true"
                        ></i>
                        Spamming{" "}
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link style={{ textDecoration: "none" }} to="/smtp">
                        <li>SMTP</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/phpmailerlogs"
                      >
                        <li>PHP Mailer</li>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/rdp">
                        <li>RDP</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/cpanel">
                        <li>Cpanel</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <i
                          className="fa fa-file menus_icons3"
                          aria-hidden="true"
                        ></i>
                        Scam pages
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/bankscampages"
                      >
                        <li>Bank Scam Pages</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/emailscampages"
                      >
                        <li>Email Scam pages</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <i
                          className="fa fa-briefcase menus_icons4"
                          aria-hidden="true"
                        ></i>
                        Fullz
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link style={{ textDecoration: "none" }} to="/usafuliz">
                        <li>Usa fullz</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/canadafuliz"
                      >
                        <li>Canada Fullz</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/ukfuliz">
                        <li>UK Fullz</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/Europefuliz"
                      >
                        <li>Europe Fullz</li>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        <i
                          className="fa fa-long-arrow-up menus_icons4"
                          aria-hidden="true"
                        ></i>
                        Leads
                        <i
                          className="fa fa-chevron-down in_accordion_menu"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <Link style={{ textDecoration: "none" }} to="/usalieads">
                        <li>Usa leads</li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/canadaleads"
                      >
                        <li>Canada leads</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/europeleads"
                      >
                        <li>Europe leads</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/alibabaleads"
                      >
                        <li>Alibaba leads</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/singerporeleads"
                      >
                        <li>Singapore leads</li>
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/chinaleads">
                        <li>China leads</li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/hongkongleads"
                      >
                        <li>Hong kong leads</li>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* menu for smaller screens end */}
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
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={() => {
              console.log("halolo");
              setShowSignout(!showSignout);
            }}
          ></i>
          <div
            className="signOutDiv"
            style={{ visibility: showSignout ? "visible" : "hidden" }}
          >
            <i
              className="fa fa-sign-out"
              onClick={logout}
              aria-hidden="true"
            ></i>
            Sign Out
          </div>
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
            <a href="/carnadianbanklogs" className="with_other_submenu">
              Carnadian Banks{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              {/* submenu start */}
              <div className="drop_down_subcontent sub_sub_menu">
                <a href="/rbcbanklogs">RBC Logs</a>
                <a href="/bmologs">BMO Logs</a>
                <a href="/tdcanadalogs">TD canada</a>
              </div>
              {/* submenu end */}
            </a>
            <a href="/ukbanklogs" className="with_other_submenu">
              Uk Banks{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              {/* submenu start */}
              <div className="drop_down_subcontent sub_sub_menu2">
                <a href="/lollydsbanklogs">Lollyds Bank</a>
                <a href="/hsbcbanklogs">Hsbc- UK</a>
                <a href="/halifaxbanklogs">Halifax Bank</a>
                <a href="/Barclaysbanklogs">Barclays Bank</a>
              </div>
              {/* submenu end */}
            </a>
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
            <a href="/facebookaccount">Facebook Account</a>
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
            <a href="/phpmailerlogs">PHP Mailer</a>
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
            <a href="/ukfuliz">UK Fuliz</a>
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
