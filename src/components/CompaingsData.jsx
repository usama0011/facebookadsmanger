import React, { useEffect, useState } from "react";
import "../styles/CompaingsData.css";
import { Switch, Table } from "antd";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import {
  BarChartOutlined,
  CaretDownOutlined,
  FileTextOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import EditImage from "../assets/edit.png";

const CompaingsData = ({ campaigns, loading, error }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPeformance, setIsHoveredPerformance] = useState(false);
  const [showcustomizedbanner, setShowCustumizeBanner] = useState(false);
  const [showPerformanceAndClicks, setShowPerformanceAndClicks] =
    useState("performance");

  // Event handlers to toggle state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnterPerformance = () => {
    setIsHoveredPerformance(true);
  };

  const handleMouseLeavePerformance = () => {
    setIsHoveredPerformance(false);
  };
  const handleCloseBannerPerformance = () => {
    setShowPerformanceAndClicks("performance");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
  };

  const handleCloseBannerPerformanceandClicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
    setShowCustumizeBanner(false);
    setIsHovered(false);
  };
  const FormatNumbers = (entrynum) => {
    let nf = new Intl.NumberFormat();
    return nf.format(entrynum); // "1,234,567,890"
  };
  const truncateText = (text, charLimit = 30) => {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };
  const columns = [
    {
      title: () => (
        <input
          style={{ width: "30px", height: "23px", border: "1px solid #f5f4f4" }}
          type="checkbox"
        />
      ),
      width: 50,
      key: "checkbox",
      fixed: "left",

      render: () => (
        <input
          style={{ width: "30px", height: "23px", border: "1px solid #f5f4f4" }}
          type="checkbox"
        />
      ),
    },
    {
      title: "Off/On",
      width: 70,
      dataIndex: "currentSwitch",
      key: "currentSwitch",
      fixed: "left",
      render: (text, record) => (
        <div onClick={() => settogglebutton((prev) => !prev)}>
          {record.currentSwitch === false ? (
            <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy snipcss-5XQZY">
              <div class=""></div>
              <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
            </div>
          ) : (
            <div data-visualcompletion="ignore" class="">
              <div>
                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                    <input
                      aria-checked="true"
                      aria-label="On/Off"
                      role="switch"
                      aria-describedby="js_36"
                      aria-labelledby="js_34"
                      class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                      id="js_35"
                      type="checkbox"
                      value="true"
                      checked=""
                    />
                    <div class="x1n2onr6 xh8yej3">
                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm xbsr9hj x1k4ywey x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                        <div class=""></div>
                        <div class="xw4jnvo x1qx5ct2 x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x1qsmy5i x1psfjxj"></div>
                      </div>
                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Campaing</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "campaingname",
      key: "campaingname",
      fixed: "left",
      // here i want changne if showPerformanceAndClicks equals to performance then 200 otherwise 300
      width: showPerformanceAndClicks === "performance" ? 200 : 300,
      render: (text, record) => (
        <>
          <div className="mainparentcontainer">
            <div style={{ overflow: "hidden" }} className="campaign-name-cell">
              <div
                style={{
                  color: "#297def",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="campaign-name"
              >
                {truncateText(text, 33)}
                <img
                  className="largetimagepenc"
                  style={{ width: "10px", height: "10px", marginLeft: "3px" }}
                  src={EditImage}
                  alt=""
                />
              </div>
            </div>
            <div className="hoverbuttonsmyspec">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }}>
                  {" "}
                  <BarChartOutlined
                    style={{
                      width: "12px",
                      height: "12px",
                      color: "black",
                      marginRight: "3px",
                    }}
                  />
                  <Link
                    style={{ color: "unset" }}
                    to={`/editmainchart/${record._id}`}
                  >
                    View Charts
                  </Link>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <Link
                    style={{ color: "unset" }}
                    to={`/editcampaing/${record._id}`}
                  >
                    <img
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "3px",
                      }}
                      src={EditImage}
                      alt=""
                    />
                    Edit
                  </Link>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <FileTextOutlined style={{ marginRight: "3px" }} />
                  Duplicate
                </div>

                <div style={{ marginRight: "10px" }}>
                  <PushpinOutlined style={{ marginRight: "3px" }} />
                  Pin
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          <div>
            <div class="_2si5 _76gi style-IPDWW" id="style-IPDWW">
              <div
                class="_643k style-JFY4E"
                id="reporting_table_column_delivery"
              >
                <div
                  aria-level="4"
                  class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli"
                  role="heading"
                >
                  <div class="_643l">
                    <div class="_3ea9" id="js_2a4">
                      Delivery
                      <span id="style-I46WW" class="style-I46WW">
                        <i
                          alt=""
                          data-visualcompletion="css-img"
                          class="img"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-visualcompletion="ignore" class="">
                <div></div>
              </div>
            </div>
            <div class="x10l6tqk xnx3k43">
              <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                <div>
                  <button
                    aria-label="open sorting options drop-down menu"
                    class="x78zum5 x6s0dn4 xl56j7k x1nn3v0j xg83lxy x1120s5i x1h0ha7o x8j4wrb x1npaq5j x1c83p5e x1enjb0b x199158v xgcd1z6 x1ejq31n xd10rxx x1sy0etr x17r0tee xx8sgm8"
                    type="button"
                  >
                    <div class="xgxxoiu">
                      <i
                        alt=""
                        data-visualcompletion="css-img"
                        class="img style-Qf8pB"
                        id="style-Qf8pB"
                      ></i>
                    </div>
                    <span class="accessible_elem"> </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>
        </div>
      ),
      dataIndex: "Delivery",
      key: "Delivery",
      width: 150,
      render: (text) => (
        <div className="campaign-name-cell">
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
            className="campaign-name"
          >
            {text === "Active" ? (
              <div
                style={{
                  width: "8px",
                  marginRight: "5px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#66be0f",
                }}
              ></div>
            ) : null}
            <div style={{ fontSize: "14px" }}>{text}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Bid Strategy",
      dataIndex: "Bidstrategy",
      key: "Bidstrategy",
      width: 120,
      render: (text) => (
        <div style={{ fontSize: "14px" }}>{truncateText(text, 16)}</div>
      ),
    },
    {
      title: "Budget",
      dataIndex: "Budget",
      key: "Budget",
      width: 140,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          ${FormatNumbers(text)}
          <br />
          <span style={{ fontSize: "12px", color: "gray" }}>Daily</span>
        </div>
      ),
    },
    {
      title: "Attribution Settings",
      dataIndex: "Attributionsetting",
      key: "Attributionsetting",
      width: 120,
      render: (text) => (
        <div style={{ fontSize: "14px" }}> {truncateText(text, 11)}</div>
      ),
    },
    {
      title: () => (
        <div className="resulsconainer">
          {" "}
          <div>
            <span
              style={{ marginRight: "5px" }}
              id="js_26j"
              class="snipcss-1Co3h"
            >
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-JFqyS"
                id="style-JFqyS"
              ></i>
            </span>
            Results
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Results",
      key: "Results",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {FormatNumbers(text)}
          <br />
          <span style={{ fontSize: "12px", color: "gray" }}>Link clicks</span>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Reach</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Reach",
      key: "Reach",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Impressions</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Impressions",
      key: "Impressions",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            Cost Per <br /> Results
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Costperresult",
      key: "Costperresult",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          ${FormatNumbers(text)}
          <br />
          <span style={{ fontSize: "12px", color: "gray" }}>
            Per link click
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Amount Spend</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Amountspent",
      key: "Amountspent",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          ${FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Ends</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Ends",
      key: "Ends",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },
    showPerformanceAndClicks === "performance"
      ? {
          title: () => (
            <i
              alt="Customise columns..."
              aria-label="Customise columns..."
              data-visualcompletion="css-img"
              class="img snipcss-saPsI style-kgHNC"
              id="style-kgHNC"
            >
              <u>Customise columns...</u>
            </i>
          ),
          dataIndex: "Plus",
          key: "Plus",
          width: 30,
          render: (text) => (
            <div style={{ fontSize: "14px" }} className="budygetcontainer">
              {text}
            </div>
          ),
        }
      : {},
  ];
  // Define additional columns for performance and clicks
  const additionalColumns = [
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            CPM (cost per 1,000 impressions)
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPM",
      key: "CPM",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>${text}</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Links clicks</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "LinksClicks",
      key: "LinksClicks",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>CPC (cost per link click)</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPC",
      key: "CPC",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>${text}</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            CTR (link click-through rate)
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTR",
      key: "CTR",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}%</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Clicks (All)</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>CTR (All)</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTRALL",
      key: "CTRALL",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}%</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>CPC (All)</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPCAll",
      key: "CPCAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>${text}</div>
      ),
    },
    {
      title: () => (
        <i
          alt="Customise columns..."
          aria-label="Customise columns..."
          data-visualcompletion="css-img"
          class="img snipcss-saPsI style-kgHNC"
          id="style-kgHNC"
        >
          <u>Customise columns...</u>
        </i>
      ),
      dataIndex: "Plus",
      key: "Plus",
      width: 30,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },
  ];
  const MoreColoumsAdds =
    showPerformanceAndClicks === "performance"
      ? [...columns]
      : [...columns, ...additionalColumns];
  const perfomarnace = () => {
    setShowPerformanceAndClicks("performance");
  };
  const perfomarnaceandclicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
  };
  console.log("udpate data", campaigns);
  return (
    <div class="_3-9a style-5nd4I" id="style-5nd4I">
      <div class="_2utz style-Seeed" id="style-Seeed">
        <div class="_1hv5 style-voLCB" id="style-voLCB">
          <div
            id="style-C85Qh"
            class="style-C85Qh"
            style={{ position: "relative" }}
          >
            <div class="_3c5b _7jnt" id="pe_toolbar">
              <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                <div class="_9p_z">
                  <div class="_9p_y" role="toolbar">
                    <div data-pagelet="AdsPEMainPaneLeftToolbar">
                      <div class="_9p_y">
                        <div class="_9p_y">
                          <span
                            class=" "
                            data-tracked="true"
                            data-clickable="1"
                          >
                            <span
                              class=" "
                              data-tracked="true"
                              data-clickable="1"
                            >
                              <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                <div
                                  aria-busy="false"
                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xasdndc x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                  role="button"
                                  tabindex="0"
                                >
                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                    <div class="x78zum5">
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                        <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                          <i
                                            alt=""
                                            data-visualcompletion="css-img"
                                            class="img style-jLgmC"
                                            id="style-jLgmC"
                                          ></i>
                                        </div>
                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                          Create
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </span>
                          </span>
                          <div id="DUPLICATE_BUTTON_ID">
                            <div
                              class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli"
                              role="group"
                            >
                              <div
                                aria-busy="false"
                                aria-disabled="true"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-CO7Ly"
                                role="button"
                                tabindex="-1"
                                id="style-CO7Ly"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Duplicate
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div
                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-aWvjn"
                                          id="style-aWvjn"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div class="x1rg5ohu x39eecv">
                                <div
                                  aria-busy="false"
                                  aria-controls="js_5"
                                  aria-disabled="true"
                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-NvzlP"
                                  role="button"
                                  tabindex="-1"
                                  id="style-NvzlP"
                                >
                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                    <div class="x78zum5">
                                      <div
                                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                        data-sscoverage-ignore="true"
                                      >
                                        Open Drop-down
                                      </div>
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                        ​
                                        <div
                                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                          role="presentation"
                                        >
                                          <div
                                            class="xtwfq29 style-kG7Uh"
                                            id="style-kG7Uh"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span
                            class=" "
                            data-tracked="true"
                            data-clickable="1"
                          >
                            <div
                              class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli"
                              role="group"
                            >
                              <div
                                aria-busy="false"
                                aria-disabled="true"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-thQNT"
                                role="button"
                                tabindex="-1"
                                id="style-thQNT"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div
                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-vf3oT"
                                          id="style-vf3oT"
                                        ></div>
                                      </div>
                                      <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                        Edit
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div class="x1rg5ohu x39eecv">
                                <div
                                  aria-busy="false"
                                  aria-controls="js_74"
                                  aria-disabled="true"
                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-8E6OI"
                                  role="button"
                                  tabindex="-1"
                                  id="style-8E6OI"
                                >
                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                    <div class="x78zum5">
                                      <div
                                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                        data-sscoverage-ignore="true"
                                      >
                                        Edit
                                      </div>
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                        ​
                                        <div
                                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                          role="presentation"
                                        >
                                          <div
                                            class="xtwfq29 style-RQFmQ"
                                            id="style-RQFmQ"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </span>
                          <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                            <div
                              aria-busy="false"
                              aria-disabled="true"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                              role="button"
                              tabindex="-1"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                <div class="x78zum5">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-9sJ3D"
                                        id="style-9sJ3D"
                                      ></div>
                                    </div>
                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                      A/B test
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                            <div
                              aria-busy="false"
                              aria-disabled="true"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                              role="button"
                              tabindex="-1"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                <div class="x78zum5">
                                  <div
                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                    data-sscoverage-ignore="true"
                                  >
                                    You haven't copied any items.
                                  </div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-P73Vi"
                                        id="style-P73Vi"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div
                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1rg5ohu x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                            role="group"
                          >
                            <div
                              class="x3nfvp2 x193iq5w xxymvpz style-S2z2o"
                              role="none"
                              id="style-S2z2o"
                            >
                              <div
                                aria-busy="false"
                                aria-disabled="true"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-ih51k"
                                role="button"
                                tabindex="-1"
                                id="style-ih51k"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Discard draft
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div
                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-fo9Vm"
                                          id="style-fo9Vm"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div
                              class="x3nfvp2 x193iq5w xxymvpz style-Uio4A"
                              role="none"
                              id="style-Uio4A"
                            >
                              <div
                                aria-busy="false"
                                aria-disabled="true"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-ZC1EZ"
                                role="button"
                                tabindex="-1"
                                id="style-ZC1EZ"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Delete isn't available with your current
                                      campaign selection.
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div
                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-88ptq"
                                          id="style-88ptq"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div
                              style={{ height: "32px" }}
                              class="x3nfvp2 x193iq5w xxymvpz style-cSERk"
                              role="none"
                              id="style-cSERk"
                            >
                              <div
                                aria-busy="false"
                                aria-controls="js_9"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-cKL4m"
                                role="button"
                                tabindex="0"
                                id="style-cKL4m"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Export and import ad configuration data
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                        <i
                                          alt=""
                                          data-visualcompletion="css-img"
                                          class="img style-y4Y9r"
                                          id="style-y4Y9r"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span class="">
                              <div class="x1rg5ohu x67bb7w">
                                <div
                                  class="x3nfvp2 x193iq5w xxymvpz style-g4lI8"
                                  role="none"
                                  id="style-g4lI8"
                                >
                                  <div
                                    aria-busy="false"
                                    aria-disabled="true"
                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-pjLJz"
                                    role="button"
                                    tabindex="-1"
                                    id="js_o"
                                  >
                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                      <div class="x78zum5">
                                        <div
                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                          data-sscoverage-ignore="true"
                                        >
                                          Tag
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-bYYxd"
                                              id="style-bYYxd"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                        <span>
                          <div>
                            <div
                              aria-busy="false"
                              aria-controls="js_5t"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                              id="js_a"
                              role="button"
                              tabindex="0"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                <div class="x78zum5">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                      Rules
                                    </div>
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-5YroX"
                                        id="style-5YroX"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div data-visualcompletion="ignore" class=""></div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="_9p_w"></div>
                    <div data-pagelet="AdsPEMainPaneRightToolbar">
                      <div class="_9p_y">
                        <div class="x1rg5ohu x67bb7w">
                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                            <div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                <label class="x1ypdohk" for="js_76">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                    View Setup
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                              <input
                                aria-checked="false"
                                aria-label="View Setup"
                                role="switch"
                                aria-describedby="js_77"
                                class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                id="js_76"
                                type="checkbox"
                                value="false"
                              />
                              <div class="x1n2onr6 xh8yej3">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                                  <div class=""></div>
                                  <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
                                </div>
                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          style={{ position: "relative" }}
                          onClick={() =>
                            setShowCustumizeBanner((prev) => !prev)
                          }
                        >
                          <span>
                            <span
                              class=" "
                              data-tracked="true"
                              data-clickable="1"
                            >
                              <div id="ads_manager_table_column_dropdown_id">
                                <div id="ads_manager_nux_for_attribution_setting_column_aem_v2_mai_action_dropdown_nux">
                                  <div
                                    aria-busy="false"
                                    aria-controls="js_79"
                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                    role="button"
                                    tabindex="0"
                                  >
                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                      <div class="x78zum5">
                                        <div
                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                          data-sscoverage-ignore="true"
                                        >
                                          Columns: Performance
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-wX8Ma"
                                              id="style-wX8Ma"
                                            ></div>
                                          </div>
                                          ​
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-WoIMj"
                                              id="style-WoIMj"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div id="ads_manager_7dct_28dct_nux_aem_v2_mai_step"></div>
                              </div>
                            </span>
                          </span>
                        </div>

                        <span id="ads_manager_breakdown_dropdown_id">
                          <span
                            class=" "
                            data-tracked="true"
                            data-clickable="1"
                          >
                            <div
                              aria-busy="false"
                              aria-controls="js_7b"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                              role="button"
                              tabindex="0"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                <div class="x78zum5">
                                  <div
                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                    data-sscoverage-ignore="true"
                                  >
                                    Breakdown
                                  </div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-rJ7N1"
                                        id="style-rJ7N1"
                                      ></div>
                                    </div>
                                    ​
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-2EUoB"
                                        id="style-2EUoB"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </span>
                        </span>
                        <div data-visualcompletion="ignore" class=""></div>
                        <div data-visualcompletion="ignore" class=""></div>
                        <span>
                          <div
                            aria-busy="false"
                            aria-controls="js_7d"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-FwWYw"
                                      id="style-FwWYw"
                                    ></div>
                                  </div>
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                    Reports
                                  </div>
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-5Pwcg"
                                      id="style-5Pwcg"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </span>
                        <div
                          aria-busy="false"
                          aria-controls="js_7f"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d x1i64zmx"
                          role="button"
                          tabindex="0"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                            <div class="x78zum5">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-tV6EN"
                                    id="style-tV6EN"
                                  ></div>
                                </div>
                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                  Export
                                </div>
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-oxVUw"
                                    id="style-oxVUw"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div id="style-3lRkG" class="style-3lRkG"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showcustomizedbanner && (
              <div className="custommadeui">
                <div>
                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                    <label
                      style={{ marginBottom: "10px", cursor: "pointer" }}
                      id="js_14i"
                      for="js_14h"
                    >
                      <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                        Recently Used
                      </span>
                    </label>
                  </div>
                  <label
                    style={{
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      backgroundColor:
                        showPerformanceAndClicks === "performance"
                          ? "#ecf2fe"
                          : "",
                    }}
                    onClick={handleCloseBannerPerformance}
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1h6gzvc x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        {/* performance check box */}
                        {showPerformanceAndClicks === "performance" ? (
                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                              <div class="x1n2onr6 x14atkfc">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                  <div class=""></div>
                                  <input
                                    class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                    id="js_yo"
                                    type="radio"
                                    value="IMAGE_OR_VIDEO"
                                    checked=""
                                    name="js_yj"
                                  />
                                  <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                    <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                  </div>
                                </div>
                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                              <div class="x1n2onr6 x14atkfc">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div
                          onClick={perfomarnaceandclicks}
                          onMouseEnter={handleMouseEnterPerformance}
                          onMouseLeave={handleMouseLeavePerformance}
                          class="x1iyjqo2 xamitd3"
                          data-sscoverage-ignore="true"
                        >
                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                              }}
                            >
                              <div
                                class=""
                                style={{
                                  color: "black",
                                }}
                              >
                                Performance
                              </div>
                              {showPerformanceAndClicks === "performance" ? (
                                <span>Default</span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label
                    style={{
                      backgroundColor:
                        showPerformanceAndClicks === "performanceandclicks"
                          ? "#ecf2fe"
                          : "", // Corrected ternary and removed double curly braces
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleCloseBannerPerformanceandClicks}
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1h6gzvc x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        {showPerformanceAndClicks === "performanceandclicks" ? (
                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                              <div class="x1n2onr6 x14atkfc">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                  <div class=""></div>
                                  <input
                                    class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                    id="js_yo"
                                    type="radio"
                                    value="IMAGE_OR_VIDEO"
                                    checked=""
                                    name="js_yj"
                                  />
                                  <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                    <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                  </div>
                                </div>
                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                              <div class="x1n2onr6 x14atkfc">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div
                          onClick={perfomarnace}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          class="x1iyjqo2 xamitd3"
                          data-sscoverage-ignore="true"
                        >
                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                              }}
                            >
                              <div
                                class=""
                                style={{
                                  color: "black",
                                }}
                              >
                                Performance and clicks
                              </div>
                              {showPerformanceAndClicks ===
                              "performanceandclicks" ? (
                                <span>Default</span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <hr />
                <div style={{ padding: "10px 0px" }}>
                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                    <label id="js_14i" for="js_14h">
                      <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                        Popular
                      </span>
                    </label>
                    <div class="xbsr9hj x78zum5">
                      <div
                        class="x3nfvp2 x120ccyz x1heor9g"
                        role="presentation"
                      >
                        <div class="xtwfq29 style-CEZaQ" id="style-CEZaQ"></div>
                      </div>
                    </div>
                  </div>
                  <label
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        <div
                          style={{ marginTop: "5px" }}
                          class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                        >
                          <div class="x1rg5ohu x1n2onr6 x3oybdh">
                            <div class="x1n2onr6 x14atkfc">
                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="x1iyjqo2 xr9ek0c xamitd3"
                          data-sscoverage-ignore="true"
                        >
                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                            <div
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                              class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                              id="js_yq"
                            >
                              Engagement
                            </div>
                          </div>
                          <div
                            style={{
                              textAlign: "left",
                            }}
                            class="xw23nyj xo1l8bm x63nzvj"
                          >
                            View metrics related to how people engage with your
                            campaings.
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        <div
                          style={{ marginTop: "5px" }}
                          class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                        >
                          <div class="x1rg5ohu x1n2onr6 x3oybdh">
                            <div class="x1n2onr6 x14atkfc">
                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="x1iyjqo2 xr9ek0c xamitd3"
                          data-sscoverage-ignore="true"
                        >
                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                            <div
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                              class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                              id="js_yq"
                            >
                              Delivery
                            </div>
                          </div>
                          <div
                            style={{
                              textAlign: "left",
                            }}
                            class="xw23nyj xo1l8bm x63nzvj"
                          >
                            View metrics related to how often you ads are
                            delivered and to how many people.
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        <div
                          style={{ marginTop: "5px" }}
                          class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                        >
                          <div class="x1rg5ohu x1n2onr6 x3oybdh">
                            <div class="x1n2onr6 x14atkfc">
                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="x1iyjqo2 xr9ek0c xamitd3"
                          data-sscoverage-ignore="true"
                        >
                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                            <div
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                              class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                              id="js_yq"
                            >
                              Video engagement
                            </div>
                          </div>
                          <div
                            style={{
                              textAlign: "left",
                            }}
                            class="xw23nyj xo1l8bm x63nzvj"
                          >
                            .View engagement metrics for ads using video
                            formats.
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <hr />
                <div style={{ textAlign: "left", padding: "10px 0px" }}>
                  <label style={{ textAlign: "left" }} id="js_14i" for="js_14h">
                    <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                      Discover more column Presets
                    </span>
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "10px",
                    }}
                  >
                    <span style={{ paddingRight: "5px", color: "gray" }}>
                      Try others column presets with key metrics to monitor your
                      campaigns.
                    </span>
                    <span>
                      <ChevronRightIcon
                        width={20}
                        height={20}
                        style={{ color: "black", fontWeight: "bold" }}
                      />
                    </span>
                  </div>
                </div>
                <hr />
                <div style={{ textAlign: "left", paddingTop: "15px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          maskImage:
                            "url('https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/eVDhhVwdiBk.png')",
                          WebkitMaskImage:
                            "url('https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/eVDhhVwdiBk.png')",
                          maskPosition: "-238px -937px",
                          WebkitMaskPosition: "-238px -937px",
                          backgroundColor: "black", // Background color for mask
                        }}
                      ></div>
                    </span>
                    <span
                      style={{
                        paddingLeft: "10px",
                        fontSize: "14px",
                        color: "gray",
                      }}
                    >
                      Compare attribution settings
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "15px",
                    }}
                  >
                    <span>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          maskImage:
                            "url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/MOEMAc4dvof.png')",
                          WebkitMaskImage:
                            "url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/MOEMAc4dvof.png')",
                          maskPosition: "-387px -1152px",
                          WebkitMaskPosition: "-387px -1152px",
                          backgroundColor: "black", // This provides a visible color where the mask is applied
                        }}
                      ></div>
                    </span>
                    <span
                      style={{
                        paddingLeft: "10px",
                        fontSize: "14px",
                        color: "gray",
                      }}
                    >
                      Customise columns
                    </span>
                  </div>
                </div>
              </div>
            )}
            {isHovered && (
              <div
                className="mykjlsk"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "600px",
                  top: 0,
                  left: "420px",
                  borderRadius: "5px",
                  zIndex: 999,
                }}
              >
                <label
                  style={{ textAlign: "left", marginBottom: "15px" }}
                  id="js_14i"
                  for="js_14h"
                >
                  <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                    Performance and clicks
                  </span>
                </label>
                <div>
                  <p>
                    Here are the metrics and details included in this column
                    preset:
                  </p>
                  <ul className="mycustomUIhere">
                    <li>Delivery</li>
                    <li>Attribution setting</li>
                    <li>Results</li>
                    <li>Reach</li>
                    <li>Frequency</li>
                    <li>Cost per result</li>
                    <li>Budget</li>
                    <li>Amount spend</li>
                    <li>Ends</li>
                    <li>Schedule</li>
                    <li>Quality ranking</li>
                    <li>Engagement rate ranking</li>
                    <li>Conversion rate ranking</li>
                    <li>Impressions</li>
                    <li>CPM(cost per 1,000 impressions)</li>
                    <li>Links clicks</li>
                    <li>CPC(cost per link click)</li>
                    <li>CTR(link click-through rate)</li>
                    <li>Clicks(all)</li>
                    <li>CTR(all)</li>
                    <li>CPC(all)</li>
                  </ul>
                </div>
              </div>
            )}
            {/* is hover performance */}
            {isHoveredPeformance && (
              <div
                className="replicatwo"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "450px",
                  top: "150px",
                  left: "410px",
                  borderRadius: "5px",
                  zIndex: 999,
                }}
              >
                <label
                  style={{ textAlign: "left", marginBottom: "15px" }}
                  id="js_14i"
                  for="js_14h"
                >
                  <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                    Performance
                  </span>
                </label>
                <div>
                  <p>
                    Here are the metrics and details included in this column
                    preset:
                  </p>
                  <ul className="mycustomUIhere">
                    <li>Delivery</li>
                    <li>Ad set name</li>
                    <li>Bid strategy</li>
                    <li>Budget</li>
                    <li>Last significant</li>
                    <li>Attribution setting</li>
                    <li>Reach</li>
                    <li>Resutls</li>
                    <li>Impressions</li>
                    <li>Cost per result</li>
                    <li>Quality ranking</li>
                    <li>Engagement rate ranking</li>
                    <li>Conversion rate ranking</li>
                    <li>Amount spend</li>
                    <li>Ends</li>
                    <li>Schedule</li>
                  </ul>
                </div>
              </div>
            )}
            <div
              style={{ height: "100%", backgroundColor: "#f5f6f7" }}
              className="campaign-table-container"
            >
              <Table
                style={{ borderRadius: "10px", height: "100%" }}
                columns={MoreColoumsAdds}
                bordered={true}
                dataSource={campaigns}
                loading={loading}
                scroll={{
                  x: 3000,
                  y: 500,
                }}
                sticky
                pagination={false}
                rowKey={(record) => record._id}
                className="campaign-table"
              />
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaingsData;

/* 

  
*/
