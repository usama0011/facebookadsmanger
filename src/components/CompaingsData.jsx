import React, { useEffect, useMemo, useState } from "react";
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
// Mock function to calculate the sum for a specific column
const calculateColumnTotal = (data, dataIndex) => {
  return data.reduce((sum, item) => {
    const value = parseFloat(item[dataIndex]) || 0;
    return sum + value;
  }, 0);
};
const CompaingsData = ({
  campaigns,
  loading,
  setLoading,
  error,
  selectedValues,
  showcustumizedcoloums,
  setShowCustumizedlayout,
  showcustomizedbanner,
  setShowCustumizeBanner,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPeformance, setIsHoveredPerformance] = useState(false);
  const [ishoverEngagement, setIsHoveredEngagement] = useState(false);
  const [ishoverDelivery, setIsHoveredDelivery] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [ishovervedioengagement, setIsHoveredvedioengagement] = useState(false);

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
    setIsHovered(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };

  const handleMouseEnterEngagement = () => {
    setIsHoveredEngagement(true);
  };

  const handleMouseLeaveEngagement = () => {
    setIsHoveredEngagement(false);
  };
  const handleCloseBannerPerformanceandClicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
    setShowCustumizeBanner(false);
    setIsHovered(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleCloseBannerEngagement = () => {
    setShowPerformanceAndClicks("engagement");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };

  // Delivery start here

  const handleCloseBannerDelivery = () => {
    setShowPerformanceAndClicks("delivery");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleMouseEnterDelivery = () => {
    setIsHoveredDelivery(true);
  };
  const handleMouseLeaveDelivery = () => {
    setIsHoveredDelivery(false);
  };

  //Vedio end here
  // Vedio start here

  const handleCloseBannervideoEngagement = () => {
    setShowPerformanceAndClicks("videoengagement");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleMouseEntervideoEngagement = () => {
    setIsHoveredvedioengagement(true);
  };
  const handleMouseLeavevideoEngagement = () => {
    setIsHoveredvedioengagement(false);
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
      width: 60,
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
      width: 65,
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
          <div>Campaign</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "campaingname",
      key: "campaingname",
      fixed: "left",
      // here i want changne if showPerformanceAndClicks equals to performance then 200 otherwise 300
      width: 300,
      render: (text, record) => (
        <>
          <div className="mainparentcontainer">
            <div style={{ overflow: "hidden" }} className="campaign-name-cell">
              <div
                style={{
                  color: "#1461cc",
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
              {/* Now add here new icons */}
              <div class="snipcss-tPLtC style-6yM46" id="style-6yM46">
                <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                  <div class="_9p_z">
                    <div class="_9p_y" role="toolbar">
                      <div class="x78zum5 x2lwn1j xeuugli">
                        <span
                          class=" "
                          data-tracked="true"
                          data-interactable="|click|"
                        >
                          <a
                            aria-label="View Charts"
                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                            href="#"
                          >
                            <span class="_3qjp">
                              <Link
                                style={{ color: "unset" }}
                                to={`/editmainchart/${record._id}`}
                              >
                                <div class="x6s0dn4 x78zum5">
                                  <div class="xw3qccf x1gslohp">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-8YKLp"
                                      id="style-8YKLp"
                                    ></i>
                                  </div>
                                  <span
                                    class="ellipsis"
                                    data-tooltip-display="overflow"
                                  >
                                    View Charts
                                  </span>
                                </div>
                              </Link>
                            </span>
                          </a>
                        </span>
                        <span
                          class=" "
                          data-tracked="true"
                          data-interactable="|click|"
                        >
                          <a
                            aria-label="Edit"
                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                            href="#"
                          >
                            <span class="_3qjp">
                              <Link
                                style={{ color: "unset" }}
                                to={`/editcampaing/${record._id}`}
                              >
                                <div class="x6s0dn4 x78zum5">
                                  <div class="xw3qccf x1gslohp">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-fWEEZ"
                                      id="style-fWEEZ"
                                    ></i>
                                  </div>
                                  <span
                                    class="ellipsis"
                                    data-tooltip-display="overflow"
                                  >
                                    Edit
                                  </span>
                                </div>
                              </Link>
                            </span>
                          </a>
                        </span>
                        <span
                          class=""
                          data-tracked="true"
                          data-interactable="|click|"
                        >
                          <a
                            aria-label="Duplicate"
                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                            href="#"
                            data-auto-logging-id="f49051acc"
                          >
                            <span class="_3qjp">
                              <div class="x6s0dn4 x78zum5">
                                <div class="xw3qccf x1gslohp">
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-KmKci"
                                    id="style-KmKci"
                                  ></i>
                                </div>
                                <span
                                  class="ellipsis"
                                  data-tooltip-display="overflow"
                                >
                                  Duplicate
                                </span>
                              </div>
                            </span>
                          </a>
                        </span>
                        <span id="ads_manager_dcp_updated_inline_entry_point_nux2n">
                          <div>
                            <div data-visualcompletion="ignore" class=""></div>
                          </div>
                          <span
                            class=" "
                            data-tracked="true"
                            data-interactable="|click|"
                          >
                            <a
                              aria-label="Compare"
                              class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                              href="#"
                              id="js_6s"
                            >
                              <span class="_3qjp">
                                <div class="x6s0dn4 x78zum5">
                                  <div class="xw3qccf x1gslohp">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-64VwN"
                                      id="style-64VwN"
                                    ></i>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-busy="false"
                  aria-controls="js_2t"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su xurb0ha x1sxyh0 xexx8yu x18d9i69"
                  role="button"
                  tabindex="0"
                >
                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                    <div class="x78zum5">
                      <div
                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                        data-sscoverage-ignore="true"
                      >
                        Open Drop-down
                      </div>
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                        <div
                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                          role="presentation"
                        >
                          <div
                            class="xtwfq29 style-gkYX5"
                            id="style-gkYX5"
                          ></div>
                        </div>
                        ​
                      </div>
                    </div>
                  </span>
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
      width: 120,
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
        <div style={{ fontSize: "14px", color: "#1c2b33" }}>
          {truncateText(text, 16)}
        </div>
      ),
    },
    {
      title: "Budget",
      dataIndex: "Budget",
      key: "Budget",
      width: 140,
      render: (text) => (
        <div
          style={{ fontSize: "14px", color: "#1c2b33" }}
          className="budygetcontainer"
        >
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
        <div style={{ fontSize: "14px", color: "#1c2b33" }}>
          {" "}
          {truncateText(text, 11)}
        </div>
      ),
    },
    {
      title: () => (
        <div
          style={{ width: "100%" }}
          class="_4l-ja9 _4l-lg5 _4h-bor style-gMq7k"
          id="style-gMq7k"
        >
          <div
            style={{ width: "100%" }}
            class="_4l-jb8 style-J2Q1a"
            id="style-J2Q1a"
          >
            <span
              style={{ width: "100%" }}
              class="style-svvfA"
              id="style-svvfA"
            >
              <span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                  class="style-EOStX"
                  id="style-EOStX"
                >
                  <div>
                    <span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        class="x78-1rg x1q-ix5 x1y-5f2 x12-hyy x6s-is5 x97-xjl xm8-aki x1q-cip xm0-bni x13-y6i x1g-j3h x14-5v9 x4m-d9j x13-l3z xu3-pvm x1q-lhi x26-55c x6i-z36 x1y-p3x xep-226 x1y-1kn xe5-njk x10-x9z x1s-q4o"
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                          class="x78-1rg xdt-yrh xl5-v21 x1n-d4c style-7YopV"
                          id="style-7YopV"
                        >
                          <div class="_64-zcs style-3k19z" id="ads-1wj">
                            <div class="x1x-aof xsu-rfi x63-sd6 xbs-g6h xux-86t x6i-z36 x10-yim xly-zi2 x1h-fri x11-bqy xeu-5mv">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "row",
                                }}
                                class="x1u-r8p x10-oo6 x1f-pcq x1h-jqn xdy-dx9 x19-zsj x6i-z36 x10-yim x1y-5f2 xly-zi2 xea-6h9"
                              >
                                <span class="x1e-tox">
                                  <span>
                                    <i
                                      class="epggf style-RXS4e"
                                      id="style-RXS4e"
                                    ></i>
                                  </span>
                                </span>
                                <div
                                  class="_3e-7d2"
                                  style={{ marginLeft: "5px" }}
                                >
                                  Results
                                  <span id="style-4MCWg" class="style-4MCWg">
                                    <div
                                      id="style-M22gT"
                                      class="style-M22gT"
                                    ></div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <CaretDownOutlined
                            style={{ color: "gray" }}
                            color="red"
                          />
                        </div>{" "}
                      </div>
                    </span>
                  </div>
                </div>
              </span>
            </span>
          </div>
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
    // showPerformanceAndClicks === "performance"
    //   ? {
    //       title: () => (
    //         <i
    //           alt="Customise columns..."
    //           aria-label="Customise columns..."
    //           data-visualcompletion="css-img"
    //           class="img snipcss-saPsI style-kgHNC"
    //           id="style-kgHNC"
    //         >
    //           <u>Customise columns...</u>
    //         </i>
    //       ),
    //       dataIndex: "Plus",
    //       key: "Plus",
    //       width: 30,
    //       render: (text) => (
    //         <div style={{ fontSize: "14px" }} className="budygetcontainer">
    //           {text}
    //         </div>
    //       ),
    //     }
    //   : {},
  ];
  const coloumsforengagementstart = [
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
      width: 300,
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
  // Engagement coloums start
  const additionalColumnsEngagement = [
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
      width: 300,
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
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Page engagement</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPM",
      key: "CPM",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>189</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Post reactions</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "LinksClicks",
      key: "LinksClicks",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>09</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Post comments
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPC",
      key: "CPC",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Post Saves</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTR",
      key: "CTR",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}--</div>
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
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Follow or likes</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTRALL",
      key: "CTRALL",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
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
  //Engagement coloums end
  const additionalColumnsDelivery = [
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
      width: 300,
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
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Reach</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPM",
      key: "CPM",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>189</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Frequency</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "LinksClicks",
      key: "LinksClicks",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>09</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Cost per 1,000 Accounts
          Centre accounts reached
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPC",
      key: "CPC",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Impressions</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTR",
      key: "CTR",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            CPM(cost per 1,000 impressions)
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
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
  // Vedion Engagement here
  const additionalColumnsVedioEngagement = [
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
      width: 300,
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
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Impressions</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPM",
      key: "CPM",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>189</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            2-second countinuous video plays
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "LinksClicks",
      key: "LinksClicks",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>09</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Cost per 2-second
          countinuous...
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CPC",
      key: "CPC",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>3-second video plays</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "CTR",
      key: "CTR",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>{text}--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            Cost per 3-second video play
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>ThruPlays</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Cost per ThruPlay</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Reach
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Amount Spend
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video play at 25%
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video plays at 50%
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video plays at 75%
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video plays at 95%
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video plays at 100%
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}></div>Video ThruPlays
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "clicksAll",
      key: "clicksAll",
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
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
  // Function to convert selected data to the desired format
  const convertSelectedData = (selectedData) => {
    return selectedData.map((item) => ({
      title: (
        <div className="resultsContainer">
          <div style={{ padding: 0, margin: 0 }}>{item}</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} />
          </div>
        </div>
      ),
      dataIndex: item.replace(/\s+/g, "").toLowerCase(), // Create a dataIndex based on the title
      key: item.replace(/\s+/g, "").toLowerCase(), // Use the same for the key
      width: 180,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>--</div>
      ),
    }));
  };
  const formattedData = useMemo(
    () => convertSelectedData(selectedValues),
    [selectedValues]
  );

  const MoreColoumsAdds = (() => {
    switch (showPerformanceAndClicks) {
      case "performance":
        return [...columns, ...formattedData]; // Show only the columns array for 'performance'

      case "performanceandclicks":
        return [...columns, ...formattedData, ...additionalColumns]; // Show columns + additionalColumns for 'performanceandclicks'

      case "engagement":
        return [...additionalColumnsEngagement, ...formattedData]; // Show columns + engagementColumns for 'engagement'
      case "delivery":
        return [...additionalColumnsDelivery, ...formattedData]; // Show columns + deliveryColumns for 'delivery'
      case "videoengagement":
        return [...additionalColumnsVedioEngagement, ...formattedData]; // Show columns + videoengagementcoloums for 'videoengagement'

      default:
        return [...columns, ...formattedData]; // Fallback to default columns
    }
  })();
  const setLayoutWidth = (() => {
    switch (showPerformanceAndClicks) {
      case "performance":
        return 2500; // Show only the columns array for 'performance'

      case "performanceandclicks":
        return 3000; // Show columns + additionalColumns for 'performanceandclicks'

      case "engagement":
        return 1800; // Show columns + engagementColumns for 'engagement'
      case "delivery":
        return 1500; // Show columns + engagementColumns for 'engagement'
      case "videoengagement":
        return 3000; // Show columns + engagementColumns for 'engagement'

      default:
        return 3000; // Fallback to default columns
    }
  })();
  console.log("selected items are here", selectedValues);

  const perfomarnace = () => {
    setShowPerformanceAndClicks("performance");
  };
  const perfomarnaceandclicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
  };

  // Generate footer content based on current columns
  const footer = useMemo(() => {
    return (
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          minWidth: "100%",
          width: "100%",
          borderTop: "1px solid #d9d9d9",
          tableLayout: "fixed", // Ensure alignment matches table columns
        }}
      >
        {MoreColoumsAdds.map((col) => (
          <div
            key={`footer-${col.key}`}
            style={{
              minWidth: col.width || "auto", // Use column width or default
              width: col.width || "auto", // Ensure it matches the column width
              textAlign: "right",
              padding: "8px",
              borderRight: "1px solid #d9d9d9",
              borderBottom: "1px solid #d9d9d9",
              boxSizing: "border-box",
            }}
          >
            {col.dataIndex
              ? calculateColumnTotal(campaigns, col.dataIndex)
              : "--"}
          </div>
        ))}
      </div>
    );
  }, [MoreColoumsAdds, campaigns]);

  // Calculate height based on campaigns length
  const rowHeight = 60; // Approximate height of one row
  const headerHeight = 60; // Approximate height of the header
  const footerHeight = 60; // Approximate height of the footer
  const maxHeight = 500; // Set a maximum table height

  const calculatedHeight = Math.min(
    campaigns.length * rowHeight + headerHeight + footerHeight,
    maxHeight
  );
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
                    <div class="_9p_w"></div>
                    <div data-pagelet="AdsPEMainPaneRightToolbar">
                      <div class="_3c5b _7jnt snipcss-TW8gO" id="pe_toolbar">
                        <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                          <div class="_9p_z">
                            <div class="_9p_y" role="toolbar">
                              <div>
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
                                        <div
                                          class="x3nfvp2 x193iq5w xxymvpz"
                                          role="none"
                                        >
                                          <div
                                            aria-busy="false"
                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xqkc6xh x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
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
                                                      class="img style-1DD73"
                                                      id="style-1DD73"
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
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-rzmbi"
                                          role="button"
                                          tabindex="-1"
                                          id="style-rzmbi"
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
                                                    class="xtwfq29 style-hUaof"
                                                    id="style-hUaof"
                                                  ></div>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                        <div class="x1rg5ohu x39eecv">
                                          <div
                                            aria-busy="false"
                                            aria-controls="js_q"
                                            aria-disabled="true"
                                            aria-expanded="false"
                                            aria-haspopup="menu"
                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-bAnJd"
                                            role="button"
                                            tabindex="-1"
                                            id="style-bAnJd"
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
                                                      class="xtwfq29 style-k5Z5K"
                                                      id="style-k5Z5K"
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
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-y2K5C"
                                          role="button"
                                          tabindex="-1"
                                          id="style-y2K5C"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div
                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                  role="presentation"
                                                >
                                                  <div
                                                    class="xtwfq29 style-6O2GU"
                                                    id="style-6O2GU"
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
                                            aria-controls="js_s"
                                            aria-disabled="true"
                                            aria-expanded="false"
                                            aria-haspopup="menu"
                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-3jXPL"
                                            role="button"
                                            tabindex="-1"
                                            id="style-3jXPL"
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
                                                      class="xtwfq29 style-LeZOe"
                                                      id="style-LeZOe"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                    <div
                                      class="x3nfvp2 x193iq5w xxymvpz"
                                      role="none"
                                    >
                                      <div
                                        aria-busy="false"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                        role="button"
                                        tabindex="0"
                                      >
                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                          <div class="x78zum5">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-ZM8pl"
                                                  id="style-ZM8pl"
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
                                    <div
                                      class="x3nfvp2 x193iq5w xxymvpz"
                                      role="none"
                                    >
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
                                                  class="xtwfq29 style-OtyZT"
                                                  id="style-OtyZT"
                                                ></div>
                                              </div>
                                              ​
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
                                        class="x3nfvp2 x193iq5w xxymvpz style-1FK91"
                                        role="none"
                                        id="style-1FK91"
                                      >
                                        <div
                                          aria-busy="false"
                                          aria-disabled="true"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-e6f8D"
                                          role="button"
                                          tabindex="-1"
                                          id="style-e6f8D"
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
                                                    class="xtwfq29 style-ggVnf"
                                                    id="style-ggVnf"
                                                  ></div>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz style-qrJrx"
                                        role="none"
                                        id="style-qrJrx"
                                      >
                                        <div
                                          aria-busy="false"
                                          aria-disabled="true"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-h2fck"
                                          role="button"
                                          tabindex="-1"
                                          id="style-h2fck"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                Delete isn't available with your
                                                current campaign selection.
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div
                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                  role="presentation"
                                                >
                                                  <div
                                                    class="xtwfq29 style-9eTbA"
                                                    id="style-9eTbA"
                                                  ></div>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz style-55MkN"
                                        role="none"
                                        id="style-55MkN"
                                      >
                                        <div
                                          aria-busy="false"
                                          aria-controls="js_u"
                                          aria-expanded="false"
                                          aria-haspopup="menu"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-Xbso8"
                                          role="button"
                                          tabindex="0"
                                          id="style-Xbso8"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                Export and import ad
                                                configuration data
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-KJRle"
                                                    id="style-KJRle"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <span class="">
                                        <div class="x1rg5ohu x67bb7w">
                                          <div
                                            class="x3nfvp2 x193iq5w xxymvpz style-A2osp"
                                            role="none"
                                            id="style-A2osp"
                                          >
                                            <div
                                              aria-busy="false"
                                              aria-disabled="true"
                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-RIw1l"
                                              role="button"
                                              tabindex="-1"
                                              id="js_1a"
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
                                                        class="xtwfq29 style-HPZb7"
                                                        id="style-HPZb7"
                                                      ></div>
                                                    </div>
                                                    ​
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
                                        aria-controls="js_1d"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                                        id="js_v"
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
                                                  class="xtwfq29 style-ScxYr"
                                                  id="style-ScxYr"
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                      <div
                                        data-visualcompletion="ignore"
                                        class=""
                                      ></div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                              <div class="_9p_w"></div>
                              <div>
                                <div class="_9p_y">
                                  <div class="x1rg5ohu x67bb7w">
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                      <div>
                                        <div class="x78zum5 x2lwn1j xeuugli">
                                          <label class="x1ypdohk" for="js_w">
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
                                          aria-describedby="js_x"
                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                          id="js_w"
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
                                            aria-controls="js_1f"
                                            aria-expanded="false"
                                            aria-haspopup="menu"
                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d xyq1l15"
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
                                                      class="xtwfq29 style-avcxa"
                                                      id="style-avcxa"
                                                    ></div>
                                                  </div>
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                    }}
                                                    onClick={() =>
                                                      setShowCustumizeBanner(
                                                        (prev) => !prev
                                                      )
                                                    }
                                                    class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2"
                                                  >
                                                    Columns:{" "}
                                                    {showPerformanceAndClicks ===
                                                    "performanceandclicks"
                                                      ? "Performance and clicks"
                                                      : showPerformanceAndClicks}
                                                  </div>
                                                  <div
                                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                    role="presentation"
                                                  >
                                                    <div
                                                      class="xtwfq29 style-ZULGQ"
                                                      id="style-ZULGQ"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          data-visualcompletion="ignore"
                                          class=""
                                        ></div>
                                      </div>
                                    </span>
                                  </span>
                                  <span
                                    class=""
                                    id="ads_manager_breakdown_dropdown_id"
                                  >
                                    <span
                                      class=" "
                                      data-tracked="true"
                                      data-clickable="1"
                                    >
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_10"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                                  class="xtwfq29 style-8rUPo"
                                                  id="style-8rUPo"
                                                ></div>
                                              </div>
                                              ​
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-mYiAr"
                                                  id="style-mYiAr"
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </span>
                                    <div
                                      data-visualcompletion="ignore"
                                      class=""
                                    ></div>
                                  </span>
                                  <span id="ads_manager_reports_dropdown_id">
                                    <div
                                      aria-busy="false"
                                      aria-controls="js_12"
                                      aria-expanded="false"
                                      aria-haspopup="menu"
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
                                            Reports
                                          </div>
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                            <div
                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-jLBRO"
                                                id="style-jLBRO"
                                              ></div>
                                            </div>
                                            ​
                                            <div
                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-y8oAW"
                                                id="style-y8oAW"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </span>
                                  <div
                                    aria-busy="false"
                                    aria-controls="js_14"
                                    aria-expanded="false"
                                    aria-haspopup="menu"
                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d x1i64zmx"
                                    role="button"
                                    tabindex="0"
                                  >
                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                      <div class="x78zum5">
                                        <div
                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                          data-sscoverage-ignore="true"
                                        >
                                          Export
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-WS2xV"
                                              id="style-WS2xV"
                                            ></div>
                                          </div>
                                          ​
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-9Fp7o"
                                              id="style-9Fp7o"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz"
                                    role="none"
                                  >
                                    <div
                                      aria-busy="false"
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
                                            Charts
                                          </div>
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div
                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-j4721"
                                                id="style-j4721"
                                              ></div>
                                            </div>
                                            ​
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    id="style-h3se4"
                                    class="style-h3se4"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                    style={{
                      backgroundColor:
                        showPerformanceAndClicks === "engagement"
                          ? "#ecf2fe"
                          : "", // Corrected ternary and removed double curly braces
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleCloseBannerEngagement}
                    onMouseEnter={handleMouseEnterEngagement}
                    onMouseLeave={handleMouseLeaveEngagement}
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        {showPerformanceAndClicks === "engagement" ? (
                          <div
                            style={{ marginTop: "5px" }}
                            class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                          >
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
                        )}
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
                              Engagement{" "}
                            </div>
                          </div>
                          <div
                            style={{
                              textAlign: "left",
                            }}
                            class="xw23nyj xo1l8bm x63nzvj"
                          >
                            {showPerformanceAndClicks === "engagement" ? (
                              <span>Default</span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label
                    style={{
                      backgroundColor:
                        showPerformanceAndClicks === "delivery"
                          ? "#ecf2fe"
                          : "", // Corrected ternary and removed double curly braces
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleCloseBannerDelivery}
                    onMouseEnter={handleMouseEnterDelivery}
                    onMouseLeave={handleMouseLeaveDelivery}
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        {showPerformanceAndClicks === "delivery" ? (
                          <div
                            style={{ marginTop: "5px" }}
                            class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                          >
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
                        )}
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
                            {showPerformanceAndClicks === "delivery" ? (
                              <span>Default</span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label
                    style={{
                      backgroundColor:
                        showPerformanceAndClicks === "videoengagement"
                          ? "#ecf2fe"
                          : "", // Corrected ternary and removed double curly braces
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleCloseBannervideoEngagement}
                    onMouseEnter={handleMouseEntervideoEngagement}
                    onMouseLeave={handleMouseLeavevideoEngagement}
                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                    tabindex="-1"
                  >
                    <div class="x78zum5 x1iyjqo2">
                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                        {/*  just a second */}
                        {showPerformanceAndClicks === "videoengagement" ? (
                          <div
                            style={{ marginTop: "5px" }}
                            class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                          >
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
                        )}
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
                            {showPerformanceAndClicks === "videoengagement" ? (
                              <span>Default</span>
                            ) : (
                              ""
                            )}
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
                      onClick={() => setShowCustumizedlayout(true)}
                      style={{
                        paddingLeft: "10px",
                        fontSize: "14px",
                        color: "gray",
                        cursor: "pointer",
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
                  left: "510px",
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
                  top: "100px",
                  left: "510px",
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
            {ishoverEngagement && (
              <div
                className="mywollcos"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "300px",
                  top: "255px",
                  left: "510px",
                  borderRadius: "5px",
                  zIndex: 999,
                  padding: "10px",
                }}
              >
                <label
                  style={{ textAlign: "left", marginBottom: "15px" }}
                  id="js_14i"
                  for="js_14h"
                >
                  <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                    Engagement
                  </span>
                </label>
                <div>
                  <p>
                    Here are the metrics and details included in this column
                    preset:
                  </p>
                  <ul className="mycustomUIhere">
                    <li>Delivery</li>
                    <li>Page engagement</li>
                    <li>Post reactions</li>
                    <li>Post Comments</li>
                    <li>Post saves</li>
                    <li>Post shares</li>
                    <li>Link clicks</li>
                    <li>Follow or likes</li>
                    <li>CPC (cost perlink click)</li>
                  </ul>
                </div>
              </div>
            )}
            {ishoverDelivery && (
              <div
                className="mywoldelivery"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "300px",
                  top: "300px",
                  left: "510px",
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
                    Delivery
                  </span>
                </label>
                <div>
                  <p>
                    Here are the metrics and details included in this column
                    preset:
                  </p>
                  <ul className="mycustomUIhere">
                    <li>Delivery</li>
                    <li>Reach</li>
                    <li>Frequency</li>
                    <li>Cost per 1,000 Accounts</li>
                    <li>Centre accounts reached</li>
                    <li>Impressions</li>
                    <li>CPM (cost per 1,000 impressions)</li>
                  </ul>
                </div>
              </div>
            )}
            {/* Vedio Engagement here  */}
            {ishovervedioengagement && (
              <div
                className="mywoldelivery"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "420px",
                  top: "100px",
                  left: "510px",
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
                    Video engagement
                  </span>
                </label>
                <div>
                  <p>
                    Here are the metrics and details included in this column
                    preset:
                  </p>
                  <ul className="mycustomUIhere">
                    <li>Delivery</li>
                    <li>Impressions</li>
                    <li>2-second continuous video plays</li>
                    <li>Cost per 2-second continuous video play</li>
                    <li>3-second video plays</li>
                    <li>Cost per 3-second video play</li>
                    <li>ThruPlays</li>
                    <li>Cost per ThruPlay</li>
                    <li>Reach</li>
                    <li>Amount spent</li>
                    <li>Video plays at 25%</li>
                    <li>Video plays at 50%</li>
                    <li>Video plays at 75%</li>
                    <li>Video plays at 95%</li>
                    <li>Video plays at 100%</li>
                  </ul>
                </div>
              </div>
            )}
            {loading && (
              <div className="loading-bar-container">
                <div
                  className="loading-bar"
                  style={{
                    width: `${loadingProgress}%`,
                  }}
                ></div>
              </div>
            )}
            <div
              style={{ height: "100%", backgroundColor: "#f5f6f7" }}
              className="campaign-table-container"
            >
              <div className="">
                <Table
                  columns={MoreColoumsAdds}
                  dataSource={campaigns}
                  style={{
                    maxHeight: `${calculatedHeight}px`,
                    overflow: "auto",
                  }}
                  scroll={{ y: calculatedHeight }}
                  bordered
                  pagination={false}
                  sticky
                  summary={(pageData) => {
                    // Calculate sums for specific numeric fields
                    const totalReach = pageData.reduce(
                      (sum, record) => sum + (Number(record.Reach) || 0),
                      0
                    );
                    const totalResults = pageData.reduce(
                      (sum, record) => sum + (Number(record.Results) || 0),
                      0
                    );
                    const totalImpressions = pageData.reduce(
                      (sum, record) => sum + (Number(record.Impressions) || 0),
                      0
                    );
                    const largestCostPerResult = Math.max(
                      ...pageData.map(
                        (record) => Number(record.Costperresult) || 0
                      )
                    );
                    const totalAmountSpent = pageData.reduce(
                      (sum, record) => sum + (Number(record.Amountspent) || 0),
                      0
                    );
                    const totalCostPerImpression = pageData.reduce(
                      (sum, record) => sum + (Number(record.CPM) || 0),
                      0
                    );
                    return (
                      <Table.Summary fixed>
                        <Table.Summary.Row
                          fixed
                          style={{
                            borderBottomLeftRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          {columns.map((col, index) => {
                            if (index === 0) {
                              // First column: Span across two columns
                              return (
                                <Table.Summary.Cell
                                  key={index}
                                  index={index}
                                  colSpan={2}
                                >
                                  <div></div>
                                </Table.Summary.Cell>
                              );
                            }

                            if (index === 1) {
                              // Second column: Skip rendering because it's merged into the first column
                              return null;
                            }

                            let value = null;

                            if (col.dataIndex === "Reach")
                              value = (
                                <div style={{ textAlign: "right" }}>
                                  <div class="_1b-dar">
                                    <div class="_e9-rt6">
                                      <div>
                                        <div class="xmi-yie xo1-xoz x10-bjv">
                                          <div>
                                            <span
                                              id="style-DUim6"
                                              class="style-DUim6"
                                            >
                                              {totalReach}
                                            </span>
                                          </div>
                                        </div>
                                        <div class="ell-c6f _1h-d2w">
                                          <div class="xt0-vq9 xmi-yie xw2-ook xo1-xoz x63-tnz x15-gv8">
                                            Accounts Centre accounts
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            else if (col.dataIndex === "campaingname")
                              value = (
                                <div>
                                  <span
                                    style={{
                                      fontSize: 14,
                                      fontWeight: "normal",
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      marginBottom: 0,
                                    }}
                                  >
                                    Results from {campaigns?.length || 0}{" "}
                                    campaings{" "}
                                    <div
                                      id="style-RKddy"
                                      className="style-RKddy"
                                      style={{
                                        width: 12,
                                        height: 12,
                                        maskImage:
                                          'url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png")', // Add the icon URL here
                                        maskPosition: "-39px -273px",
                                        backgroundColor: "black", // Use desired icon color
                                        marginLeft: "8px",
                                        marginBottom: 0,
                                      }}
                                    ></div>
                                  </span>

                                  <span
                                    style={{
                                      color: "gray",

                                      paddingTop: 0,
                                      fontWeight: "normal",
                                    }}
                                  >
                                    Excludes deleted items
                                  </span>
                                </div>
                              );
                            else if (col.dataIndex === "Attributionsetting")
                              value = (
                                <div class="_1b-jyz">
                                  <div class="_e9-vat">
                                    <div>
                                      <div class="ell-1jx _1h-tgr">
                                        <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                          7-day click...
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            else if (col.dataIndex === "Results")
                              value = (
                                <div>
                                  <div
                                    style={{ textAlign: "right" }}
                                    class="_1b-jyz"
                                  >
                                    <div class="_e9-vat">
                                      <div>
                                        <div class="xmi-ayr xo1-g1e x10-yi2">
                                          <span>{totalResults}</span>
                                        </div>
                                        <div class="ell-1jx _1h-tgr">
                                          <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                            Link Clicks
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            else if (col.dataIndex === "Impressions")
                              value = (
                                <div>
                                  <div
                                    class="_1b-jyz"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div class="_e9-vat">
                                      <div>
                                        <div class="xmi-ayr xo1-g1e x10-yi2">
                                          <span>{totalImpressions}</span>
                                        </div>
                                        <div class="ell-1jx _1h-tgr">
                                          <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                            Link Clicks
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            else if (col.dataIndex === "Costperresult")
                              value = (
                                <div>
                                  <div
                                    class="_1b-jyz"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div class="_e9-vat">
                                      <div>
                                        <div class="xmi-ayr xo1-g1e x10-yi2">
                                          <span>
                                            ${largestCostPerResult?.toFixed(2)}
                                          </span>
                                        </div>
                                        <div class="ell-1jx _1h-tgr">
                                          <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                            Link Clicks
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            else if (col.dataIndex === "Amountspent")
                              value = (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 14,
                                      fontWeight: "normal",
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      marginBottom: 0,
                                    }}
                                  >
                                    ${totalAmountSpent}
                                  </span>

                                  <span
                                    style={{
                                      color: "gray",

                                      paddingTop: 0,
                                      fontWeight: "normal",
                                    }}
                                  >
                                    Total Spend
                                  </span>
                                </div>
                              );

                            return (
                              <Table.Summary.Cell
                                key={index}
                                index={index}
                                style={{ width: col.width }}
                              >
                                {value !== null
                                  ? typeof value === "object"
                                    ? value
                                    : typeof value === "string"
                                    ? value
                                    : value.toFixed(2)
                                  : ""}
                              </Table.Summary.Cell>
                            );
                          })}
                        </Table.Summary.Row>
                      </Table.Summary>
                    );
                  }}
                />
              </div>

              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaingsData;
