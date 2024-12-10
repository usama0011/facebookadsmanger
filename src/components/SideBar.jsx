import React, { useState } from "react";
import "../styles/SideBar.css";
import { NavLink } from "react-router-dom";
import MainLogoNavBar from "../assets/maind.jpeg";
const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sidebarmaincontainer">
      <div
        className={`sidebar ${isHovered ? "sidebar-expanded" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className=""
          style={{
            width: "100%",
            paddingLeft: "30px",
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="Meta"
            class="img"
            height="28"
            width="28"
            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
          />
          {isHovered && (
            <span>
              <h2 style={{ marginLeft: "2px" }}>Meta</h2>
            </span>
          )}
        </div>

        <div className="" style={{ width: "100%" }}>
          {isHovered && (
            <span style={{ marginLeft: "20px" }}>
              <h1 style={{ fontSize: "23px", paddingLeft: "25px" }}>
                Ads Manager
              </h1>
            </span>
          )}
        </div>

        <ul className="menu">
          <li>
            <div
              style={
                isHovered
                  ? {
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #f3f3f3",
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }
                  : { display: "flex", alignItems: "center" }
              }
            >
              <img
                style={{ borderRadius: "5px", width: "28px", height: "28px" }}
                alt="Meta"
                className="sssssimg"
                height="28"
                width="28"
                src={MainLogoNavBar}
              />
              {isHovered && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        marginLeft: "20px",
                        fontWeight: "bold",
                        color: "gray",
                        fontSize: "13px",
                      }}
                    >
                      Ali Hamza
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignSelf: "center",
                        placeSelf: "center",
                        justifySelf: "flex-end",
                        width: "1005",
                      }}
                      class="x3nfvp2 x120ccyz x4s1yf2"
                      role="presentation"
                    >
                      <div class="xtwfq29 style-NEN4Q" id="style-NEN4Q"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/overviewaccount"
            className={({ isActive }) =>
              isActive ? "sirthisactive" : "notactive"
            }
          >
            <li>
              <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                <div class="x3nfvp2">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img style-sSl3X"
                    id="style-sSl3X"
                  ></i>
                </div>
                <div class="x13dflua xxziih7 x12w9bfk x10l6tqk x1fo6t33 xoo4vsp x78zum5 x6s0dn4 x11xpdln x3oybdh"></div>
              </div>
              {isHovered && (
                <span style={{ marginLeft: "20px" }}>
                  <div
                    class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                    id="js_h"
                  >
                    Account overview
                  </div>
                </span>
              )}
            </li>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "myactivelink" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k x1qsmy5i xvy4d1p xxk0z11">
                <div class="x3nfvp2">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img style-bolNn"
                    id="style-bolNn"
                  ></i>
                </div>
              </div>
              {isHovered && (
                <span style={{ marginLeft: "20px" }}>
                  <div
                    class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                    id="js_h"
                  >
                    Campaigns
                  </div>
                </span>
              )}
            </li>
          </NavLink>

          <NavLink
            to="/reporting"
            className={({ isActive }) => (isActive ? "myactivelink" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                <div class="x3nfvp2">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img style-Gd5tE"
                    id="style-Gd5tE"
                  ></i>
                </div>
              </div>
              {isHovered && (
                <span style={{ marginLeft: "20px" }}>
                  <div
                    class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                    id="js_h"
                  >
                    Ads Reporting
                  </div>
                </span>
              )}
            </li>
          </NavLink>

          <li>
            <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
              <div class="x3nfvp2">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img style-4NOtb"
                  id="style-4NOtb"
                ></i>
              </div>
            </div>
            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Audience
                </div>
              </span>
            )}
          </li>
          <NavLink
            to="/payment"
            className={({ isActive }) => (isActive ? "myactivelink" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                <div class="x3nfvp2">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img style-yZkhQ"
                    id="style-yZkhQ"
                  ></i>
                </div>
              </div>
              {isHovered && (
                <span style={{ marginLeft: "20px" }}>
                  <div
                    class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                    id="js_h"
                  >
                    Billing & payment
                  </div>
                </span>
              )}
            </li>
          </NavLink>
          <li>
            <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
              <div class="x3nfvp2">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img style-qjhZw"
                  id="style-qjhZw"
                ></i>
              </div>
            </div>
            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Advertising settings
                </div>
              </span>
            )}
          </li>
          <li>
            <div class="">
              <div class="x78zum5 x1iyjqo2">
                <div class="">
                  <div class="">
                    <div class="x3nfvp2">
                      <i
                        alt=""
                        data-visualcompletion="css-img"
                        class="img style-8dtnG"
                        id="style-8dtnG"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Event Manager
                </div>
              </span>
            )}
          </li>
          <li>
            <div class="">
              <div class="x3nfvp2">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img style-rRLCD"
                  id="style-rRLCD"
                ></i>
              </div>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  All Tools
                </div>
              </span>
            )}
          </li>
          <li>
            <div class="">
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-M9oOk"
                id="style-M9oOk"
              ></i>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Help
                </div>
              </span>
            )}
          </li>
        </ul>
        <hr className="divider" />
        <div className="bottom-icons">
          <div className="search-icon">
            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
              <div
                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                role="presentation"
              >
                <div class="xtwfq29 style-9KpMj" id="style-9KpMj"></div>
                <div class="notification-badge">8</div>
              </div>
            </div>
          </div>
          <div className="search-icon">
            <div class="x3nfvp2 x2lah0s x1c4vz4f">
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-2xUJN"
                id="style-2xUJN"
              ></i>
            </div>
          </div>
          <div className="search-icon">
            <div class="">
              <i
                aria-hidden="true"
                class="_271o img style-ZBf6z"
                alt=""
                data-visualcompletion="css-img"
                id="style-ZBf6z"
              ></i>
            </div>
          </div>

          <div className="search-icon">
            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
              <div
                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                role="presentation"
              >
                <div class="xtwfq29 style-AA4xG" id="style-AA4xG"></div>
              </div>
              ​
            </div>
          </div>
          <div className="search-icon">
            <div class="">
              <div class="x3nfvp2 x2lah0s x1c4vz4f">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img style-oF4KY"
                  id="style-oF4KY"
                ></i>
              </div>
              ​
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;