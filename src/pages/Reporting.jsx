import React, { useState, useEffect } from "react";
import "../styles/Reporting.css";
import { Link } from "react-router-dom";
import EditImage from "../assets/edit.png";
import "react-date-range/dist/styles.css"; // main style file
import { CaretDownOutlined } from "@ant-design/icons";
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Table } from "antd";

const Reporting = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const baseColumns = [
    {
      title: (
        <div className="resulsconainer">
          <div class="_2eqm snipcss-3BVgC style-IBedm" id="style-IBedm">
            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
              <div class="_8wod" draggable="true">
                <a
                  aria-label="clickable background"
                  class="_3sqf"
                  href="#"
                  data-auto-logging-id="f3709fc3201cc98"
                >
                  <u class="_8_x7 _3sqf"></u>
                </a>
                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                    <div class="_741s _8_x6 _8_vu"></div>
                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                        <div
                          role="columnheader"
                          tabindex="-1"
                          data-mouseoverable="1"
                        >
                          <div class="_90u_ style-3NWtE" id="style-3NWtE">
                            <div
                              class="_4ik4 _4ik5 style-UPjyp"
                              id="style-UPjyp"
                            >
                              <div id="style-g376k" class="style-g376k">
                                Ad Creative
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x6lvj10 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                    </div>
                  </div>
                  <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                    <div class="x1gryazu xxk0z11">
                      <div>
                        <button
                          aria-pressed="false"
                          type="button"
                          aria-disabled="false"
                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-BsqPo"
                          id="style-BsqPo"
                        >
                          <div class="_43rl">
                            <i
                              aria-hidden="true"
                              class="_271o img style-4vf2H"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-4vf2H"
                            ></i>
                            <span class="accessible_elem">
                              Open Inline Column Action Menu
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      dataIndex: "campaingname",
      key: "campaingname",
      fixed: "left",
      width: 300,

      render: (text, record) => (
        <>
          <div
            style={{ zIndex: "auto", overflow: "visible" }}
            className="campign-row"
          >
            <div
              style={{
                textTransform: "uppercase",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
              }}
              className="campaign-name"
            >
              <div
                style={{ width: "60px", height: "60px" }}
                className="largeimgcontainerme"
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={record.campaingImage}
                  alt=""
                />
              </div>

              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {record?.quoteheading}
                </span>
                <span>{truncateText(record?.quotetext, 24)}</span>
                <span style={{ color: "gray" }}>Used in 1 Ad</span>
              </div>
            </div>
            <div className="myabosuotediv" style={{ zIndex: 999 }}>
              <div
                style={{ zIndex: 999 }}
                class="_ag3c _2ph- _228q snipcss-tDqHs"
                id="fd4aae0d273d82a55"
              >
                <div style={{ zIndex: 999 }} class="" id="fd4aae0d273d82a55-2">
                  <div
                    style={{ zIndex: 999 }}
                    data-testid="ad-preview-mobile-feed-standard"
                    data-react-ad-preview="reactPreviewContainer"
                    data-clickable="1"
                    data-inputable="1"
                    data-keydownable="1"
                    data-keyupable="1"
                    data-mouseoverable="1"
                    data-changeable="1"
                    data-auto-logging-id="f32b2c60d2c8bb4"
                    class=""
                  >
                    <div
                      style={{ zIndex: 999 }}
                      class="x2izyaf x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu xw2csxc x1odjw0f x47corl x87ps6o"
                    >
                      <div class="x78zum5 xdj266r x11i5rnm xod5an3 x1mh8g0r x889kno x1iji9kk x18d9i69 x1sln4lm x1cy8zhl">
                        <div class="x78zum5 x16dsc37 x1sxyh0">
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                            class="x14yjl9h xudhj91 x18nykt9 xww2gxu x100vrsf x1vqgdyp x3ajldb img"
                            src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                            alt=""
                          />
                        </div>
                        <div class="x78zum5 xamitd3">
                          <div class="x78zum5 xdt5ytf xamitd3 x1ajhdc7 xh8yej3">
                            <div>
                              <span class="x1fzdab9 x1f6kntn xuy8w9f">
                                <span class="x1xlr1w8">
                                  {record?.quoteheading}
                                </span>
                              </span>
                            </div>
                            <div class="x1hjcb3a x1pg5gke x9438zm x1n2onr6 x17ocude xt0psk2">
                              <div class="xt0psk2">Sponsored</div> ·{" "}
                              <img src="" alt="" class="img" />
                            </div>
                          </div>
                          <div class="x78zum5 x1q0g3np x1gfops9 xh8yej3 x13a6bvl">
                            <i
                              class="xamitd3 img style-nwXBp"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-nwXBp"
                            ></i>
                            <i
                              class="x1d52u69 xamitd3 img style-5DRac"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-5DRac"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div class="x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r xexx8yu x1iji9kk x18d9i69 x1sln4lm _3qn7 _61-0 _2fyh _1a9e">
                        <div
                          class="xogfrqt x1f6kntn xd4r4e8 x1vvkbs"
                          data-ad-preview="message"
                          data-react-ad-preview="message"
                        >
                          <div>
                            <div class="" dir="">
                              <span>
                                <span>{record?.quotetext}</span>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="x1n2onr6 x1ja2u2z x1m258z3 x1e56ztr">
                        <div class="x1n2onr6">
                          <div class="x10l6tqk x178xt8z x13fuv20 xqvba61 x1m258z3 x1vjfegm x17qophe x13vifvy"></div>
                          <div
                            class="x1n2onr6"
                            data-ad-preview="image-container"
                            data-react-ad-preview="image-container"
                          >
                            <img
                              class="x1lliihq x193iq5w img"
                              data-ad-preview="image"
                              data-react-ad-preview="image"
                              height="268"
                              src={record.campaingImage}
                              width="320"
                              alt=""
                            />
                          </div>
                          <div class="xz9dl7a xn6708d xsag5q8 x1ye3gou xz2iaq5 x1ba4aug _3qn7 _61-0 _2fyi _3qng">
                            <div
                              class="_6g3g x6ikm8r x10wlt62 x1vvkbs x1qughib x1jquxbb style-VtzRr"
                              id="style-VtzRr"
                            >
                              <div>
                                <div
                                  class="xh8yej3 x1d3mw78"
                                  data-ad-preview="display-link-container"
                                >
                                  <span class="x1nxh6w3 x1kyqaxf _6i6a">
                                    <span id="style-Nd7I6" class="style-Nd7I6">
                                      scqg4t8trk.com
                                    </span>
                                  </span>
                                </div>
                                <div class="xowg6hp">
                                  <div>
                                    <span
                                      class="xh8yej3 x1fc57z9 x6prxxf x117nqv4"
                                      data-ad-preview="headline"
                                      dir=""
                                    >
                                      Get Quotes
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-ad-preview="link-description"
                                dir=""
                                id="style-MCo8H"
                                class="style-MCo8H"
                              >
                                <span class="x1fc57z9 x6prxxf _6i6a"></span>
                              </div>
                            </div>
                            <div class="x16n37ib">
                              <div data-ad-preview="cta">
                                <div
                                  aria-label="Learn more"
                                  class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"
                                  role="button"
                                  tabindex="0"
                                >
                                  <div
                                    role="none"
                                    class="x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou x1qhmfi1 x1r1pt67"
                                  >
                                    <div class="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt">
                                      <div
                                        role="none"
                                        class="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x1fbi1t2 xl8fo4v"
                                      >
                                        <span
                                          class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn"
                                          dir="auto"
                                        >
                                          <span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">
                                            Learn more
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      class="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m"
                                      role="none"
                                      data-visualcompletion="ignore"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="x10l6tqk xso031l x1q0q8m5 x1mpk314 x1m258z3 x1vjfegm xds687c x1ey2m1c"></div>
                        </div>
                      </div>
                      <div></div>
                      <div class="x1anpbxc _3qn7 _61-0 _2fyh _3qnf">
                        <div
                          class="_6g3g xdzyupr x1nn3v0j x1iji9kk x10b6aqq x1sln4lm style-aqORe"
                          id="style-aqORe"
                        >
                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                            <div class="_3qn7 _61-0 _2fyi _3qnf">
                              <div
                                class="_6g3g x150jy0e style-1wrWr"
                                id="style-1wrWr"
                              >
                                <span class="_9zc _9--">
                                  <i class="_3j7o _2p78 _9--"></i>
                                </span>
                              </div>
                              <div
                                class="_6g3g x150jy0e style-P5Xwp"
                                id="style-P5Xwp"
                              >
                                <span class="_9zc _9--">
                                  <i class="_3j7l _2p78 _9--"></i>
                                </span>
                              </div>
                              <div
                                class="_6g3g x150jy0e style-Nzfiw"
                                id="style-Nzfiw"
                              >
                                <span class="_9zc _9--">
                                  <i class="_3j7r _2p78 _9--"></i>
                                </span>
                              </div>
                            </div>
                            <div
                              class="_6g3g x1h0ha7o x1mpkggp xeuugli x11hbpws style-2qTEy"
                              id="style-2qTEy"
                            >
                              <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                6
                              </div>
                            </div>
                            <div
                              class="_6g3g x11hbpws x1f6kntn x14atkfc style-mNjX6"
                              id="style-mNjX6"
                            >
                              <div class="_3qn7 _61-2 _2fyi _3qnf">
                                <div
                                  class="_6g3g x1iji9kk xmix8c7 style-UfDqt"
                                  id="style-UfDqt"
                                >
                                  <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                    18 comments
                                  </span>
                                </div>
                                <div class="_6g3v style-LWq4i" id="style-LWq4i">
                                  <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                    1 share
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x14nfmen xjm9jq1 x1gryazu xkrivgy xdzyupr"></div>
                        <div
                          class="_6g3g xdzyupr x1y1aw1k x1iji9kk x1120s5i x1sln4lm style-IgisJ"
                          id="style-IgisJ"
                        >
                          <div class="x1s688f x11hbpws _3qn7 _6twk _2fyi _3qnf">
                            <div class="_6g3g style-BPkH6" id="style-BPkH6">
                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                <div
                                  class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-yv87C"
                                  id="style-yv87C"
                                >
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-T8S7e"
                                    id="style-T8S7e"
                                  ></i>
                                </div>
                                <div class="_6g3g style-chr2o" id="style-chr2o">
                                  Like
                                </div>
                              </div>
                            </div>
                            <div class="_6g3g style-NtcKA" id="style-NtcKA">
                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                <div
                                  class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-5vX2W"
                                  id="style-5vX2W"
                                >
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-aLrB1"
                                    id="style-aLrB1"
                                  ></i>
                                </div>
                                <div class="_6g3g style-3ewDP" id="style-3ewDP">
                                  Comment
                                </div>
                              </div>
                            </div>
                            <div class="_6g3g style-HbYLn" id="style-HbYLn">
                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                <div
                                  class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-SJoY1"
                                  id="style-SJoY1"
                                >
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-ddTp4"
                                    id="style-ddTp4"
                                  ></i>
                                </div>
                                <div class="_6g3g style-kiSNV" id="style-kiSNV">
                                  Share
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
          </div>
        </>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          <div class="_2eqm snipcss-3BVgC style-IBedm" id="style-IBedm">
            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
              <div class="_8wod" draggable="true">
                <a
                  aria-label="clickable background"
                  class="_3sqf"
                  href="#"
                  data-auto-logging-id="f3709fc3201cc98"
                >
                  <u class="_8_x7 _3sqf"></u>
                </a>
                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                    <div class="_741s _8_x6 _8_vu"></div>
                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                        <div
                          role="columnheader"
                          tabindex="-1"
                          data-mouseoverable="1"
                        >
                          <div class="_90u_ style-3NWtE" id="style-3NWtE">
                            <div
                              class="_4ik4 _4ik5 style-UPjyp"
                              id="style-UPjyp"
                            >
                              <div id="style-g376k" class="style-g376k">
                                Delivery
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x6lvj10 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                    </div>
                  </div>
                  <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                    <div class="x1gryazu xxk0z11">
                      <div>
                        <button
                          aria-pressed="false"
                          type="button"
                          aria-disabled="false"
                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-BsqPo"
                          id="style-BsqPo"
                        >
                          <div class="_43rl">
                            <i
                              aria-hidden="true"
                              class="_271o img style-4vf2H"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-4vf2H"
                            ></i>
                            <span class="accessible_elem">
                              Open Inline Column Action Menu
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      dataIndex: "Delivery",
      key: "Delivery",
      width: 100,
      render: (text) => (
        <div className="campaign-name-cell">
          <div
            style={{ position: "relative", display: "flex" }}
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
            <div style={{ fontSize: "14px", marginTop: "-7px" }}>
              <div>{text}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>Ad</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          <div class="_2eqm snipcss-3BVgC style-IBedm" id="style-IBedm">
            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
              <div class="_8wod" draggable="true">
                <a
                  aria-label="clickable background"
                  class="_3sqf"
                  href="#"
                  data-auto-logging-id="f3709fc3201cc98"
                >
                  <u class="_8_x7 _3sqf"></u>
                </a>
                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                    <div class="_741s _8_x6 _8_vu"></div>
                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                        <div
                          role="columnheader"
                          tabindex="-1"
                          data-mouseoverable="1"
                        >
                          <div class="_90u_ style-3NWtE" id="style-3NWtE">
                            <div
                              class="_4ik4 _4ik5 style-UPjyp"
                              id="style-UPjyp"
                            >
                              <div id="style-g376k" class="style-g376k">
                                Reach
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x6lvj10 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                    </div>
                  </div>
                  <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                    <div class="x1gryazu xxk0z11">
                      <div>
                        <button
                          aria-pressed="false"
                          type="button"
                          aria-disabled="false"
                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-BsqPo"
                          id="style-BsqPo"
                        >
                          <div class="_43rl">
                            <i
                              aria-hidden="true"
                              class="_271o img style-4vf2H"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-4vf2H"
                            ></i>
                            <span class="accessible_elem">
                              Open Inline Column Action Menu
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      dataIndex: "Reach",
      key: "Reach",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "left" }}>
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
        <div style={{ fontSize: "14px", textAlign: "left" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Frequency</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "frequency",
      key: "frequency",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "left" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Attribute Setting</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Attributionsetting",
      key: "Attributionsetting",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "left" }}>{text}</div>
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
        <div
          style={{ fontSize: "14px", textAlign: "right" }}
          className="budygetcontainer"
        >
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
          <div style={{ padding: 0, margin: 0 }}>Schedule</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Ends",
      key: "Ends",
      width: 150,
      render: (text) => (
        <div
          style={{ fontSize: "14px", textAlign: "left" }}
          className="budygetcontainer"
        >
          --
        </div>
      ),
    },
    // {
    //   title: () => (
    //     <i
    //       alt="Customise columns..."
    //       aria-label="Customise columns..."
    //       data-visualcompletion="css-img"
    //       class="img snipcss-saPsI style-kgHNC"
    //       id="style-kgHNC"
    //     >
    //       <u>Customise columns...</u>
    //     </i>
    //   ),
    //   dataIndex: "Plus",
    //   key: "Plus",
    //   width: 30,
    //   render: (text) => (
    //     <div style={{ fontSize: "14px" }} className="budygetcontainer">
    //       {text}
    //     </div>
    //   ),
    // },
  ];

  const [showcalender, setShowCalender] = useState(false);
  const [pivottable, setPovitTable] = useState("breakdown");
  const [currentfolder, setcurrentFolder] = useState("Campaings");
  const [dynamicColumns, setDynamicColumns] = useState([]); // Track dynamic columns
  const [campaings, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };
  const getLastDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getLastDayOfMonth());
  const [hoverDate, setHoverDate] = useState(null);
  const [selectingEnd, setSelectingEnd] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  // Function to handle checkbox changes

  const handleDayClick = (date) => {
    if (!selectingEnd) {
      setStartDate(date);
      setEndDate(null);
      setSelectingEnd(true);
    } else {
      if (date < startDate) {
        setStartDate(date);
        setEndDate(startDate);
      } else {
        setEndDate(date);
      }
      setSelectingEnd(false);
    }
  };

  const handleDayMouseEnter = (date) => {
    setHoverDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  const setPresetDates = (range) => {
    setStartDate(range.startDate);
    setEndDate(range.endDate);
  };

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${month}-${i}`} className="day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isInRange =
        startDate &&
        endDate &&
        currentDate >= startDate &&
        currentDate <= endDate;
      const isSelectedStart =
        startDate && currentDate.getTime() === startDate.getTime();
      const isSelectedEnd =
        endDate && currentDate.getTime() === endDate.getTime();
      const isHovering =
        startDate &&
        !endDate &&
        hoverDate &&
        currentDate > startDate &&
        currentDate <= hoverDate;

      days.push(
        <div
          key={day}
          className={`day ${isInRange ? "in-range" : ""} ${
            isSelectedStart ? "selected-start" : ""
          } ${isSelectedEnd ? "selected-end" : ""} ${
            isHovering ? "hover" : ""
          }`}
          onClick={() => handleDayClick(currentDate)}
          onMouseEnter={() => handleDayMouseEnter(currentDate)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const renderDatePresets = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const last7Days = new Date(today);
    last7Days.setDate(today.getDate() - 7);
    const last14Days = new Date(today);
    last14Days.setDate(today.getDate() - 14);
    const last30Days = new Date(today);
    last30Days.setDate(today.getDate() - 30);
    const thisWeekStart = new Date(today);
    thisWeekStart.setDate(today.getDate() - today.getDay());
    const lastWeekStart = new Date(thisWeekStart);
    lastWeekStart.setDate(thisWeekStart.getDate() - 7);
    const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastMonthStart = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    return (
      <div className="presets">
        <div
          onClick={() => setPresetDates({ startDate: today, endDate: today })}
        >
          Today
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: yesterday, endDate: yesterday })
          }
        >
          Yesterday
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: last7Days, endDate: today })
          }
        >
          Last 7 days
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: last14Days, endDate: today })
          }
        >
          Last 14 days
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: last30Days, endDate: today })
          }
        >
          Last 30 days
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: thisWeekStart, endDate: today })
          }
        >
          This week
        </div>
        <div
          onClick={() =>
            setPresetDates({
              startDate: lastWeekStart,
              endDate: new Date(
                lastWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000
              ),
            })
          }
        >
          Last week
        </div>
        <div
          onClick={() =>
            setPresetDates({ startDate: thisMonthStart, endDate: today })
          }
        >
          This month
        </div>

        <div
          onClick={() =>
            setPresetDates({ startDate: lastMonthStart, endDate: lastMonthEnd })
          }
        >
          Last month
        </div>
      </div>
    );
  };
  const formatDate = (date) => {
    return date?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(
        "https://facebookadsmangerserver.vercel.app/api/newcampaing",
        {
          params: {
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
          },
        }
      );
      console.log("Response:", response);
      setCampaigns(response.data);
    } catch (err) {
      setError("Error fetching campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);
  const handleupdatebutton = () => {
    setShowCalender(false);
    fetchCampaigns();
  };
  const handleClickRun = (value) => {
    setcurrentFolder(value);
  };
  const FormatNumbers = (entrynum) => {
    let nf = new Intl.NumberFormat();
    return nf.format(entrynum); // "1,234,567,890"
  };
  const truncateText = (text, charLimit = 30) => {
    if (text?.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };
  const breakdownData = [
    {
      title: "Popular breakdowns",
      metrics: [
        "Campaign name",
        "Ad set name",
        "Ad name",
        "Page name",
        "Ad creative",
        "Gender",
        "Country",
        "Region",
        "Platform",
        "Placement",
        "Objective",
        "Day",
        "Month",
      ],
    },
    {
      title: "Custom breakdowns",
      metrics: [], // No data available
    },
    {
      title: "Level",
      metrics: [
        "Camapign name",
        "ad set name",
        "Ad name",
        "Page name",
        "Campaign ID",
        "Ad set ID",
        "Ad ID",
        "Page ID",
        "Ad creative",
      ], // No data available
    },
    {
      title: "Time",
      metrics: ["Day", "Week", "2 weeks", "Month"], // No data available
    },
    {
      title: "Delivery",
      metrics: [
        "Age",
        "Gender",
        "Business locations",
        "Country",
        "Region",
        "DMA region",
        "Impression device",
        "Platform",
        "Placement",
        "Device platform",
        "Product ID",
        "Audience segments",
        "Time of day (ad account time zone)",
        "Time of day (viewer's time zone)",
      ], // No data available
    },
    {
      title: "Action",
      metrics: [
        "Messaging purchase source",
        "Conversion device",
        "Post reaction type",
        "Destination",
        "Video view type",
        "Video sound",
        "Carousel card",
        "Instant Experience component",
        "Category (Onsite)",
        "Brand (Onsite)",
      ], // No data available
    },
    {
      title: "Settings",
      metrics: ["Objective"], // No data available
    },
    {
      title: "Dynamic creative asset",
      metrics: [
        "Image, video and slideshow",
        "Call to action",
        "Description",
        "Headline (ad settings)",
        "Text",
        "Website URL",
      ], // No data available
    },
  ];

  const metricsData = [
    {
      title: "Popular Metrics",
      metrics: [
        "Amount spent",
        "Impressions",
        "Reach",
        "Results",
        "Cost per result",
        "Delivery",
        "Frequency",
        "Link clicks",
        "CPC (cost per link click)",
        "CPM (cost per 1,000 impressions)",
        "CTR (all)",
      ],
    },
    {
      title: "Custom Metrics",
      metrics: [], // No data available
    },
    {
      title: "Performance",
      metrics: [
        "Results",
        "Result rate",
        "Reach",
        "Frequency",
        "Impressions",
        "Delivery",
        "Amount spent",
        "Clicks (all)",
        "CPC (all)",
        "CTR (all)",
        "Gross impressions (includes invalid impressions from non-human traffic)",
        "Auto-refresh impressions",
        "Attribution setting",
        "Average purchases conversion value",
        "Quality ranking",
        "Engagement rate ranking",
        "Conversion rate ranking",
        "Cost per result",
        "Cost per 1,000 Accounts Centre accounts reached",
        "CPM (cost per 1,000 impressions)",
        "Ad delivery",
        "Ad set delivery",
        "Campaign delivery",
      ],
    },
    {
      title: "Engagement",
      metrics: [
        "Engagement",
        "Page engagement",
        "Follows or likes",
        "Join group requests",
        "Post comments",
        "Post engagements",
        "Post reactions",
        "Post saves",
        "Post shares",
        "Photo views",
        "Event responses",
        "Check-ins",
        "Effect share",
        "Cost per Page engagement",
        "Cost per follow or like",
        "Cost per join group request",
        "Cost per post engagement",
        "Cost per event response",
        "Estimated call confirmation clicks",
        "Callback requests submitted",
        "Messenger calls placed",
        "20-second Messenger calls",
        "60-second Messenger calls",
        "New messaging contacts",
        "Blocks",
        "Messaging conversations started",
        "Messaging subscriptions",
        "Welcome message views",
        "Messaging conversations replied",
        "Cost per new messaging contact",
        "Cost per messaging conversation started",
        "Cost per messaging subscription",
        "Unique 2-second continuous video plays",
        "2-second continuous video plays",
        "3-second video plays",
        "ThruPlays",
        "Video plays at 25%",
        "Video plays at 50%",
        "Video plays at 75%",
        "Video plays at 95%",
        "Video plays at 100%",
        "Video average play time",
        "Video plays",
        "Instant Experience view time",
        "Instant Experience view percentage",
        "Instant Experience impressions",
        "Instant Experience reach",
        "Cost per 2-second continuous video play",
        "Cost per 3-second video play",
        "Cost per ThruPlay",
        "Link clicks",
        "Unique link clicks",
        "Outbound clicks",
        "Unique outbound clicks",
        "CTR (link click-through rate)",
        "Unique CTR (link click-through rate)",
        "Outbound CTR (click-through rate)",
        "Unique outbound CTR (click-through rate)",
        "Unique clicks (all)",
        "Unique CTR (all)",
        "Instant Experience clicks to open",
        "Instant Experience clicks to start",
        "Instant Experience outbound clicks",
        "Net reminders on",
        "Instagram profile visits",
        "CPC (cost per link click)",
        "Cost per unique link click",
        "Cost per outbound click",
        "Cost per unique outbound click",
        "Cost per unique click (all)",
        "Estimated ad recall lift (people)",
        "Estimated ad recall lift rate",
        "Cost per estimated ad recall lift (people)",
      ],
    },
    {
      title: "Conversions",
      metrics: [
        "Achievements unlocked",
        "Cost per achievement unlocked",
        "Achievements unlocked conversion value",
        "Unique achievements unlocked",
        "Cost per unique achievement unlocked",
        "Adds of payment info",
        "Cost per add of payment info",
        "Adds of payment info conversion value",
        "Unique adds of payment info",
        "Cost per unique add of payment info",
        "Adds to cart",
        "Cost per add to cart",
        "Adds to cart conversion value",
        "Unique adds to cart",
        "Cost per unique add to cart",
        "Adds to wishlist",
        "Cost per add to wishlist",
        "Adds to wishlist conversion value",
        "Unique adds to wishlist",
        "Cost per unique add to wishlist",
        "App activations",
        "Cost per app activation",
        "App activations conversion value",
        "Unique app activations",
        "Cost per unique app activation",
        "App installs",
        "Cost per App Install",
        "Applications submitted",
        "Cost per application submitted",
        "Submit Application conversion value",
        "Appointments scheduled",
        "Cost per appointment scheduled",
        "Appointments scheduled conversion value",
        "Checkouts initiated",
        "Cost per checkout initiated",
        "Checkouts initiated conversion value",
        "Unique checkouts initiated",
        "Cost per unique checkout initiated",
        "Contacts",
        "Cost per Contact",
        "Contact conversion value",
        "Content views",
        "Cost per Content View",
        "Content Views Conversion Value",
        "Unique content views",
        "Cost per unique content view",
        "Credit spends",
        "Cost per credit spend",
        "Credit spends conversion value",
        "Unique credit spends",
        "Cost per unique credit spend",
        "Custom events",
        "Cost per custom event",
        "Desktop app engagements",
        "Cost per desktop app engagement",
        "Desktop app story engagements",
        "Cost per desktop app story engagement",
        "Desktop app uses",
        "Cost per desktop app use",
        "Donation ROAS (return on ad spend)",
        "Donations",
        "Cost per donation",
        "Donate conversion value",
        "Game plays",
        "Cost per game play",
        "Get directions clicks",
        "In-app ad clicks",
        "Cost per in-app ad click",
        "In-app ad impressions",
        "Cost per 1,000 in-app ad impressions",
        "Landing page views",
        "Cost per landing page view",
        "Unique landing page views",
        "Cost per unique landing page view",
        "Leads",
        "Cost per Lead",
        "Leads Conversion Value",
        "Levels achieved",
        "Cost per level achieved",
        "Levels achieved conversion value",
        "Unique levels completed",
        "Cost per unique level achieved",
        "Location searches",
        "Cost per location search",
        "Location search conversion value",
        "Meta workflow completions",
        "Cost per Meta workflow completion",
        "Meta workflow completion conversion value",
        "Mobile app day 2 retention",
        "Cost per mobile app day 2 retention",
        "Unique mobile app day 2 retention",
        "Cost per unique mobile app day 2 retention",
        "Mobile app day 7 retention",
        "Cost per mobile app day 7 retention",
        "Unique mobile app day 7 retention",
        "Cost per unique mobile app day 7 retention",
        "Orders created",
        "Orders dispatched",
        "Other offline conversions",
        "Cost per other offline conversion",
        "Other offline conversion value",
        "Phone number clicks",
        "Products customised",
        "Cost per product customised",
        "Customise Product conversion value",
        "Purchase ROAS (return on ad spend)",
        "Purchases",
        "Cost per purchase",
        "Purchases conversion value",
        "Unique purchases",
        "Cost per unique purchase",
        "Ratings submitted",
        "Cost per rating submitted",
        "Ratings submitted conversion value",
        "Unique ratings submitted",
        "Cost per unique rating submitted",
        "Registrations completed",
        "Cost per registration completed",
        "Registrations completed conversion value",
        "Unique registrations completed",
        "Cost per unique registration completed",
        "Searches",
        "Cost per Search",
        "Searches Conversion Value",
        "Unique searches",
        "Cost per unique search",
        "Subscriptions",
        "Cost per subscription",
        "Subscribe conversion value",
        "Trials started",
        "Cost per trial started",
        "Trials started conversion value",
        "Tutorials completed",
        "Cost per tutorial completed",
        "Tutorials completed conversion value",
        "Unique tutorials completed",
        "Cost per unique tutorial completed",
        "In-app achievements unlocked",
        "In-app achievements unlocked conversion value",
        "Unique in-app achievements unlocked",
        "In-app adds of payment info",
        "Website payment info adds",
        "Offline adds of payment info",
        "In-app adds of payment info conversion value",
        "Website payment info adds conversion value",
        "Offline payment info adds conversion value",
        "Unique in-app adds of payment info",
        "In-app adds to cart",
        "Website adds to cart",
        "Offline adds to cart",
        "Meta add to cart",
        "In-app adds to cart conversion value",
        "Website adds to cart conversion value",
        "Offline adds to cart conversion value",
        "Unique in-app adds to cart",
        "In-app adds to wishlist",
        "Website adds to wishlist",
        "Offline adds to wishlist",
        "Meta adds to wishlist",
        "In-app adds to wishlist conversion value",
        "Website adds to wishlist conversion value",
        "Offline adds to wishlist conversion value",
        "Meta adds to wishlist conversion value",
        "Unique in-app adds to wishlist",
        "In-app sessions",
        "In-app sessions conversion value",
        "Unique in-app sessions",
        "Mobile app first opens",
        "Mobile app first opens conversion value",
        "Unique mobile app first opens",
        "Cost per unique mobile app first open",
        "Mobile app retention",
      ],
    },
    {
      title: "Settings",
      metrics: [
        "Account ID",
        "Account name",
        "Reporting starts",
        "Reporting ends",
        "Objective",
        "Buying type",
        "Ad ID",
        "Ad name",
        "Ad set name",
        "Campaign name",
        "Campaign ID",
        "Ad set ID",
        "Bid strategy",
        "Budget",
        "Placement",
        "Targeting",
        "Optimization for ad delivery",
        "Creative type",
        "Creative title",
        "Creative link",
      ],
    },
  ];
  const handleCheckboxChange = (metric) => {
    const updatedSelectedMetrics = selectedMetrics.includes(metric)
      ? selectedMetrics.filter((item) => item !== metric)
      : [...selectedMetrics, metric];

    setSelectedMetrics(updatedSelectedMetrics);
    setLoading(true); // Start the loading animation

    // Update the dynamic columns
    const updatedColumns = updatedSelectedMetrics.map((metric) => ({
      title: (
        <div className="resulsconainer">
          <div class="_2eqm snipcss-3BVgC style-IBedm" id="style-IBedm">
            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
              <div class="_8wod" draggable="true">
                <a
                  aria-label="clickable background"
                  class="_3sqf"
                  href="#"
                  data-auto-logging-id="f3709fc3201cc98"
                >
                  <u class="_8_x7 _3sqf"></u>
                </a>
                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                    <div class="_741s _8_x6 _8_vu"></div>
                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                        <div
                          role="columnheader"
                          tabindex="-1"
                          data-mouseoverable="1"
                        >
                          <div class="_90u_ style-3NWtE" id="style-3NWtE">
                            <div
                              class="_4ik4 _4ik5 style-UPjyp"
                              id="style-UPjyp"
                            >
                              <div id="style-g376k" class="style-g376k">
                                {metric}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x6lvj10 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                    </div>
                  </div>
                  <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                    <div class="x1gryazu xxk0z11">
                      <div>
                        <button
                          aria-pressed="false"
                          type="button"
                          aria-disabled="false"
                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-BsqPo"
                          id="style-BsqPo"
                        >
                          <div class="_43rl">
                            <i
                              aria-hidden="true"
                              class="_271o img style-4vf2H"
                              alt=""
                              data-visualcompletion="css-img"
                              id="style-4vf2H"
                            ></i>
                            <span class="accessible_elem">
                              Open Inline Column Action Menu
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      dataIndex: metric,
      key: metric,
      width: 150,
      render: (text) => <span>{text}</span>,
    }));

    setDynamicColumns(updatedColumns);

    // Simulate loading progress with animation
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setLoading(false); // Stop loading once it reaches 100%
        setLoadingProgress(0); // Reset loading progress
      }
    }, 100); // Adjust speed as needed
  };

  const columns = [...baseColumns, ...dynamicColumns];
  console.log(columns);
  return (
    <div>
      <div
        class="_605a _6nw _jn7 _2is9 _61ve roboto bizsitePage chrome webkit win x1 Locale_en_GB snipcss-WaAOv"
        dir="ltr"
        cz-shortcut-listen="true"
        tabindex="-1"
      >
        <div class="_li">
          <div class="_li _30l2 _-f_" id="u_0_0_RF">
            <div class="_3b5k _ab_" id="bizsitePageContainer">
              <div
                id="globalContainer"
                class="uiContextualLayerParent bizWebLoginContainer"
              >
                <div class="">
                  <div
                    class="_1o9r _7wig"
                    id="power_editor_root"
                    data-clickable="1"
                    data-inputable="1"
                    data-keydownable="1"
                    data-keyupable="1"
                    data-changeable="1"
                    data-auto-logging-id="f16f5724740de7c"
                  >
                    <span
                      data-surface-wrapper="1"
                      data-surface="/am"
                      data-auto-logging-id="f3b67bc72affb8c"
                      class="style-Rcqjv"
                      id="style-Rcqjv"
                    >
                      <div
                        class="x5yr21d x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9 x10wlt62"
                        id="ads_pe_container"
                      >
                        <span
                          data-surface-wrapper="1"
                          data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react"
                          data-auto-logging-id="f63af372a2f6d"
                          class="style-575QJ"
                          id="style-575QJ"
                        >
                          <div class="" data-visualcompletion="ignore-dynamic">
                            <div class="">
                              <div class="_2ww0">
                                <div class="_2ww1 _7y7x">
                                  <div
                                    data-pagelet="AdsSideNavWithContent.react"
                                    class=""
                                  >
                                    <span
                                      data-surface-wrapper="1"
                                      data-surface="/am/navigation_toolbar"
                                      data-auto-logging-id="f2e26c5d802f984"
                                      class="style-cIfEa"
                                      id="style-cIfEa"
                                    >
                                      <div
                                        class="_2y5j _2y5k style-zGyTf"
                                        id="style-zGyTf"
                                      >
                                        <div
                                          class="_7o1x style-5J6RB"
                                          id="style-5J6RB"
                                        >
                                          <div
                                            data-visualcompletion="ignore"
                                            class=""
                                          ></div>
                                          <div class="x9f619 x6ikm8r x10wlt62 x15yg21f">
                                            <span
                                              data-surface-wrapper="1"
                                              data-surface="/am/navigation_toolbar/navigation_tools"
                                              data-auto-logging-id="f156c0b1562d558"
                                              id="style-t2vDI"
                                              class="style-t2vDI"
                                            >
                                              <div class="xa9qn9j x1trwbdj x6a0fk7 xuyh7jl">
                                                <div id="global_nav_flyout_menu_id"></div>
                                              </div>
                                            </span>
                                            <div>
                                              <div></div>
                                            </div>
                                          </div>
                                          <div class="x1gzqxud x13dflua xxziih7 x12w9bfk xavht8x x6ikm8r x10wlt62 x15yg21f x9f619 xxrbq2n x87ps6o x78zum5 xdt5ytf x2lah0s x1y1aw1k xwib8y2 x5yr21d snipcss-mpOM8">
                                            <div class="x2lah0s xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x15yg21f">
                                              <div>
                                                <div class="x6s0dn4 x78zum5 xdt5ytf x1qughib x2lwn1j xeuugli x1yztbdb">
                                                  <div
                                                    class="x3nfvp2 x193iq5w xxymvpz x12nagc"
                                                    role="none"
                                                  >
                                                    <Link
                                                      to="/"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                    >
                                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                        <div class="x78zum5">
                                                          <div
                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                            data-sscoverage-ignore="true"
                                                          >
                                                            Ads Manager
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                              <img
                                                                alt="Meta"
                                                                class="img"
                                                                height="28"
                                                                width="28"
                                                                src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
                                                              />
                                                            </div>
                                                            ​
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </Link>
                                                  </div>
                                                  <div>
                                                    <div class="x78zum5 x2lwn1j xeuugli xbyyjgo">
                                                      <div
                                                        aria-label="Pressable"
                                                        class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x3nfvp2 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                        role="button"
                                                        tabindex="0"
                                                      >
                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s xxk0z11 xvy4d1p x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                            <div
                                                              class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8"
                                                              role="img"
                                                            >
                                                              <img
                                                                alt=""
                                                                class="img"
                                                                src="https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=108&ccb=1-7&_nc_sid=19114f&_nc_ohc=vKYsdSdF4xAQ7kNvgF3c1nu&_nc_zt=24&_nc_ht=scontent.flhe3-1.fna&_nc_gid=AKQsanWB4napMjFiZlUis7Q&oh=00_AYAgve8wc9zQCR8cNC2RNGaQM8Mom8k8q39GlJyHcL0YAQ&oe=671574BF"
                                                              />
                                                              <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div></div>
                                              </div>
                                            </div>
                                            <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x5yr21d">
                                              <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                <div class="x1kxxb1g">
                                                  <nav
                                                    aria-label="tools"
                                                    class="xavht8x"
                                                  >
                                                    <div
                                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                      role="list"
                                                    >
                                                      <span
                                                        data-surface-wrapper="1"
                                                        data-surface="/am/navigation_toolbar/lbl:START_YOUR_DAY"
                                                        data-auto-logging-id="f2b55dd4af62fd8"
                                                        id="style-NDmPP"
                                                        class="style-NDmPP"
                                                      >
                                                        <div
                                                          class="x1n2onr6 x3oybdh"
                                                          role="listitem"
                                                        >
                                                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                            <div
                                                              aria-labelledby="js_9"
                                                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                                                              id="js_3"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <div class="x78zum5 x1iyjqo2">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
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
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                            <div
                                                              class="x78zum5 x1iyjqo2"
                                                              role="listitem"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                      id="js_9"
                                                                    >
                                                                      Account
                                                                      overview
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <Link to="/">
                                                        <span
                                                          data-surface-wrapper="1"
                                                          data-surface="/am/navigation_toolbar/lbl:ADS_MANAGER"
                                                          data-auto-logging-id="f20a20e99cbced8"
                                                          id="style-cQo6G"
                                                          class="style-cQo6G"
                                                        >
                                                          <div
                                                            class="x1n2onr6 x3oybdh"
                                                            role="listitem"
                                                            aria-current="page"
                                                          >
                                                            <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                              <div
                                                                aria-labelledby="js_b"
                                                                class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                                                                role="button"
                                                                tabindex="0"
                                                              >
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm x108nfp6 x1v911su snipcss-mjwrp">
                                                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                                    <div class="x3nfvp2">
                                                                      <i
                                                                        alt=""
                                                                        data-visualcompletion="css-img"
                                                                        class="img style-9ysPi"
                                                                        id="style-9ysPi"
                                                                      ></i>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                              <div
                                                                class="x78zum5 x1iyjqo2"
                                                                role="listitem"
                                                              >
                                                                <div class="x6s0dn4  x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                    <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                    <div class="xeuugli">
                                                                      <div
                                                                        class="x1xqt7ti  x1uxerd5 xrohxju x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli"
                                                                        id="js_b"
                                                                      >
                                                                        Campaigns
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </Link>
                                                      <span
                                                        data-surface-wrapper="1"
                                                        data-surface="/am/navigation_toolbar/lbl:ADS_REPORTING"
                                                        data-auto-logging-id="f2dd24f4c4b32d8"
                                                        id="style-e2jhC"
                                                        class="style-e2jhC"
                                                      >
                                                        <div
                                                          class="x1n2onr6 x3oybdh"
                                                          role="listitem"
                                                        >
                                                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                            <Link
                                                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv"
                                                              to="/reporting"
                                                            >
                                                              <div class="x78zum5 x1iyjqo2">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 xwpu04d xlvp1be snipcss-hzBFJ">
                                                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xwpu04d xvy4d1p xxk0z11">
                                                                    <div class="x3nfvp2">
                                                                      <i
                                                                        alt=""
                                                                        data-visualcompletion="css-img"
                                                                        class="img style-K9LEW"
                                                                        id="style-K9LEW"
                                                                      ></i>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </Link>
                                                          </div>
                                                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                            <div
                                                              class="x78zum5 x1iyjqo2"
                                                              role="listitem"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                      id="js_d"
                                                                    >
                                                                      Ads
                                                                      reporting
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <span
                                                        data-surface-wrapper="1"
                                                        data-surface="/am/navigation_toolbar/lbl:AUDIENCES"
                                                        data-auto-logging-id="f1093293bc6dcb8"
                                                        id="style-CbwDJ"
                                                        class="style-CbwDJ"
                                                      >
                                                        <div
                                                          class="x1n2onr6 x3oybdh"
                                                          role="listitem"
                                                        >
                                                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                            <a
                                                              aria-labelledby="js_f"
                                                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv"
                                                              role="link"
                                                              tabindex="0"
                                                              href="/adsmanager/?act=1387295665246598&amp;tool=AUDIENCES&amp;nav_entry_point=ads_ecosystem_navigation_menu&amp;nav_source=ads_manager"
                                                            >
                                                              <div class="x78zum5 x1iyjqo2">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
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
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                            <div
                                                              class="x78zum5 x1iyjqo2"
                                                              role="listitem"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                      id="js_f"
                                                                    >
                                                                      Audiences
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <span
                                                        data-surface-wrapper="1"
                                                        data-surface="/am/navigation_toolbar/lbl:BILLING"
                                                        data-auto-logging-id="f3d0c2e009aada4"
                                                        id="style-rntZ7"
                                                        class="style-rntZ7"
                                                      >
                                                        <div
                                                          class="x1n2onr6 x3oybdh"
                                                          role="listitem"
                                                        >
                                                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                            <Link
                                                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv"
                                                              to="/payment"
                                                            >
                                                              <div class="x78zum5 x1iyjqo2">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                                    <div class="x3nfvp2">
                                                                      <i
                                                                        alt=""
                                                                        data-visualcompletion="css-img"
                                                                        class="img style-wA5Re"
                                                                        id="style-wA5Re"
                                                                      ></i>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </Link>
                                                          </div>
                                                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                            <div
                                                              class="x78zum5 x1iyjqo2"
                                                              role="listitem"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                      id="js_h"
                                                                    >
                                                                      Billing
                                                                      &amp;
                                                                      payments
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <span
                                                        data-surface-wrapper="1"
                                                        data-surface="/am/navigation_toolbar/lbl:ADVERTISING_SETTINGS"
                                                        data-auto-logging-id="fe8c1cc7479cc8"
                                                        id="style-kGQgD"
                                                        class="style-kGQgD"
                                                      >
                                                        <div
                                                          class="x1n2onr6 x3oybdh"
                                                          role="listitem"
                                                        >
                                                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                            <div
                                                              aria-labelledby="js_j"
                                                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                                                              id="ecosystem_nav_advertising_preferences_context_id"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <div class="x78zum5 x1iyjqo2">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
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
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                            <div
                                                              class="x78zum5 x1iyjqo2"
                                                              role="listitem"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                      id="js_j"
                                                                    >
                                                                      Advertising
                                                                      settings
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <div
                                                        class="x1n2onr6 x3oybdh"
                                                        role="listitem"
                                                      >
                                                        <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                          <div
                                                            aria-labelledby="js_l"
                                                            class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                                                            id="ecosystem_nav_all_tools_context_id"
                                                            role="button"
                                                            tabindex="0"
                                                          >
                                                            <div class="x78zum5 x1iyjqo2">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                                <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                                  <div class="x3nfvp2">
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-rRLCD"
                                                                      id="style-rRLCD"
                                                                    ></i>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                          <div
                                                            class="x78zum5 x1iyjqo2"
                                                            role="listitem"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                <div class="xeuugli">
                                                                  <div
                                                                    class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                    id="js_l"
                                                                  >
                                                                    All tools
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </nav>
                                                </div>
                                              </div>
                                              <div
                                                class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-KPiCh"
                                                data-visualcompletion="ignore"
                                                data-thumb="1"
                                                id="style-KPiCh"
                                              ></div>
                                              <div
                                                class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-dnltf"
                                                data-visualcompletion="ignore"
                                                data-thumb="1"
                                                id="style-dnltf"
                                              >
                                                <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                              </div>
                                            </div>
                                            <div class="xurb0ha x1sxyh0">
                                              <div class="_85b_">
                                                <hr class="xjbqb8w xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x1emribx x1e56ztr x1i64zmx xdj266r" />
                                                <div class="_3qn7 _61-3 _2fyh _3qng">
                                                  <div class="_9axj _3qn7 _61-0 _2fyh _3qng _4tau">
                                                    <span
                                                      class=" "
                                                      data-tracked="true"
                                                      data-clickable="1"
                                                    >
                                                      <div class="x10vuhgg x1883u4 xr1wzlq xb8s3i7 x6ikm8r x10wlt62 x14qfxbe x12nagc">
                                                        <div class="x1n2onr6 x6s0dn4 x78zum5 xl56j7k x139jcc6 x187nhsf">
                                                          <div
                                                            aria-label="Help"
                                                            class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k xrbr6if x1hc1fzr"
                                                            role="button"
                                                            tabindex="0"
                                                          >
                                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                              <div class="x78zum5 xl56j7k xfex06f x3pnbk8 x2lwn1j xeuugli x9f619 xc9qbxq x1y1aw1k xwib8y2 xurb0ha x1sxyh0">
                                                                <i
                                                                  alt=""
                                                                  data-visualcompletion="css-img"
                                                                  class="img style-M9oOk"
                                                                  id="style-M9oOk"
                                                                ></i>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                    <div id="ads_manager_nux_privacy_guidance_onboarding_button">
                                                      <div
                                                        id="style-srDcU"
                                                        class="style-srDcU"
                                                      >
                                                        <div
                                                          class="x3nfvp2 x193iq5w xxymvpz"
                                                          role="none"
                                                        >
                                                          <div
                                                            aria-busy="false"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                            role="button"
                                                            tabindex="0"
                                                          >
                                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                              <div class="x78zum5">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Ad account
                                                                  updates
                                                                </div>
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-2xUJN"
                                                                      id="style-2xUJN"
                                                                    ></i>
                                                                  </div>
                                                                  ​
                                                                </div>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      class="x3nfvp2 x193iq5w xxymvpz"
                                                      role="none"
                                                    >
                                                      <div
                                                        aria-busy="false"
                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                        role="button"
                                                        tabindex="0"
                                                      >
                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                          <div class="x78zum5">
                                                            <div
                                                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                              data-sscoverage-ignore="true"
                                                            >
                                                              Settings
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                              <div
                                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                role="presentation"
                                                              >
                                                                <div
                                                                  class="xtwfq29 style-zfqsM"
                                                                  id="style-zfqsM"
                                                                ></div>
                                                              </div>
                                                              ​
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <span
                                                      class=" "
                                                      data-tracked="true"
                                                      data-clickable="1"
                                                    >
                                                      <div class="_85c1 _9opo">
                                                        <div data-clickable="1">
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz"
                                                            role="none"
                                                          >
                                                            <div
                                                              aria-busy="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                  <div
                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                    data-sscoverage-ignore="true"
                                                                  >
                                                                    Notifications
                                                                  </div>
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-9KpMj"
                                                                        id="style-9KpMj"
                                                                      ></div>
                                                                    </div>
                                                                    ​
                                                                  </div>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div id="globalNavNotificationsJewel">
                                                          <div
                                                            id="u_7_1_K2"
                                                            data-clickable="1"
                                                          >
                                                            <div
                                                              class="uiToggle _4962 _4xi2 _5orl _85d4 hasNew"
                                                              id="fbNotificationsJewel"
                                                              data-toggle-wc="1"
                                                              data-mouseoverable="1"
                                                            >
                                                              <a
                                                                class="jewelButton _3eo9"
                                                                href="#"
                                                                rel="toggle"
                                                                role="button"
                                                                aria-labelledby="u_7_0_G3"
                                                                name="notifications"
                                                                data-gt='{"ua_id":"jewel:notifications"}'
                                                                data-target="fbNotificationsFlyout"
                                                                data-hover="tooltip"
                                                                data-tooltip-delay="500"
                                                                aria-hidden="true"
                                                                tabindex="-1"
                                                              >
                                                                <div class="_2n_9">
                                                                  <div
                                                                    class="_76t_ _7256"
                                                                    id="NotifIndeterminateBadge"
                                                                  >
                                                                    82
                                                                  </div>
                                                                </div>
                                                              </a>
                                                              <div
                                                                class="__tw toggleTargetClosed _4xi1 _85d5 uiToggleFlyout"
                                                                role="dialog"
                                                                id="fbNotificationsFlyout"
                                                                aria-labelledby="fbNotificationsJewelHeader"
                                                              >
                                                                <div
                                                                  data-clickable="1"
                                                                  data-inputable="1"
                                                                  data-keydownable="1"
                                                                  data-keyupable="1"
                                                                  data-mouseoverable="1"
                                                                  data-changeable="1"
                                                                >
                                                                  <div class=" _9q20">
                                                                    <div
                                                                      id="biz_notif_jewel_title"
                                                                      class=" _9q29"
                                                                    >
                                                                      Notifications
                                                                    </div>
                                                                    <div class="_6rji">
                                                                      <div
                                                                        id="biz_notif_jewel_preference_button"
                                                                        class="_6_5s"
                                                                      >
                                                                        <button
                                                                          data-tooltip-content="Preferences"
                                                                          data-hover="tooltip"
                                                                          data-tooltip-position="below"
                                                                          type="button"
                                                                          aria-disabled="false"
                                                                          class="_271k _271l _1o4e _271m _1qjd _ai7j _ai7k _ai7m style-gC94T"
                                                                          id="style-gC94T"
                                                                        >
                                                                          <div class="_43rl">
                                                                            <i
                                                                              aria-hidden="true"
                                                                              class="_271o img style-ZBf6z"
                                                                              alt=""
                                                                              data-visualcompletion="css-img"
                                                                              id="style-ZBf6z"
                                                                            ></i>
                                                                            <span class="accessible_elem">
                                                                              Preferences
                                                                            </span>
                                                                          </div>
                                                                        </button>
                                                                      </div>
                                                                      <img
                                                                        class="_6rk- img"
                                                                        data-hover="tooltip"
                                                                        data-tooltip-position="below"
                                                                        data-tooltip-content="Notifications are personalised for this account"
                                                                        height="20"
                                                                        width="20"
                                                                        alt=""
                                                                        src="https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=4a1148&amp;_nc_ohc=4TsCt3nmUrkQ7kNvgF-MhP1&amp;_nc_ht=scontent.flhe3-1.fna&amp;_nc_gid=A2FpY1a73Xl-w5VC-YrqJ0l&amp;oh=00_AYCNL8_YqeJ9s0VW2IVYotM7pT5IUWlqeOD3Ef44fykT6Q&amp;oe=670B917F"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="_33p">
                                                                  <div id="u_7_3_dF">
                                                                    <span
                                                                      class="img _55ym _55yn _55yo jewelLoading"
                                                                      aria-busy="true"
                                                                      role="progressbar"
                                                                      aria-valuemin="0"
                                                                      aria-valuemax="100"
                                                                      aria-valuetext="Loading..."
                                                                    ></span>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  data-clickable="1"
                                                                  data-inputable="1"
                                                                  data-keydownable="1"
                                                                  data-keyupable="1"
                                                                  data-mouseoverable="1"
                                                                  data-changeable="1"
                                                                >
                                                                  <div class="x178xt8z x13fuv20 xc074nb x1o1nzlu x1y1aw1k xwib8y2 x1swvt13 x1pi30zi">
                                                                    <div class="x1rg5ohu">
                                                                      <a
                                                                        class="_231w _231z  _4yef style-T4GKe"
                                                                        href="#"
                                                                        id="style-T4GKe"
                                                                      >
                                                                        Mark all
                                                                        as read
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                    <div>
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz"
                                                        role="none"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                          role="button"
                                                          tabindex="0"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div
                                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                data-sscoverage-ignore="true"
                                                              >
                                                                Search
                                                              </div>
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div
                                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-AA4xG"
                                                                    id="style-AA4xG"
                                                                  ></div>
                                                                </div>
                                                                ​
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      class="x3nfvp2 x193iq5w xxymvpz"
                                                      role="none"
                                                    >
                                                      <div
                                                        aria-busy="false"
                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                        role="button"
                                                        tabindex="0"
                                                      >
                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                          <div class="x78zum5">
                                                            <div
                                                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                              data-sscoverage-ignore="true"
                                                            >
                                                              Report a problem
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
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
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>

                                <div
                                  style={{ backgroundColor: "#f2f2f2" }}
                                  class="_2ww2"
                                >
                                  <div>
                                    <div
                                      style={{ height: "100vh" }}
                                      class="_49wu style-cyQ1t"
                                      id="style-cyQ1t"
                                    >
                                      <span
                                        data-surface-wrapper="1"
                                        data-surface="/am/table"
                                        data-auto-logging-id="f2d89c89cfc2afc"
                                        id="style-C1jKI"
                                        class="style-C1jKI"
                                      >
                                        <div
                                          class="_2utw style-HmW1X"
                                          id="style-HmW1X"
                                        >
                                          <div class="_4u-c"></div>
                                          <div class="_4u-c"></div>
                                          <div
                                            style={{ margin: "20px" }}
                                            class="snipcss0-0-0-1 snipcss-epBXb"
                                          >
                                            <div class="_5aj7 snipcss0-1-1-2">
                                              <div class="_7r_0 _3qn7 _61-0 _2fyi _3qng snipcss-cqS3X">
                                                <div>
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou x1emribx"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x78zum5">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-HKpMM"
                                                              id="style-HKpMM"
                                                            ></div>
                                                          </div>
                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                            All reports
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  id="style-yfXi6"
                                                  class="style-yfXi6"
                                                >
                                                  <div
                                                    id="style-6zHrB"
                                                    class="style-6zHrB"
                                                  >
                                                    Untitled report
                                                  </div>
                                                  <input
                                                    placeholder="Untitled report"
                                                    value="Untitled report"
                                                    id="js_ii"
                                                    data-auto-logging-id="f27c6953c10c85c"
                                                    hidden=""
                                                    tabindex="0"
                                                    class="style-zogfD"
                                                  />
                                                </div>
                                                <div class="x1d52u69 xktsk01">
                                                  <div class="xdzyupr">
                                                    <div>
                                                      <div class="x1jx94hy">
                                                        <div class="xh8yej3">
                                                          <div
                                                            aria-busy="false"
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            aria-invalid="false"
                                                            aria-labelledby="js_2r"
                                                            class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                            role="combobox"
                                                            tabindex="0"
                                                          >
                                                            <div class="x1n2onr6 xh8yej3">
                                                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1gzqxud x108nfp6 xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                <div class=""></div>
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                      <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 x108nfp6 x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe x8t9es0 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                        <div
                                                                          class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                          id="js_2r"
                                                                        >
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1qughib">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                              <div class="x1lliihq x1n2onr6 x2lah0s xxk0z11 xvy4d1p xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb">
                                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg xas4zb2">
                                                                                  <img
                                                                                    alt=""
                                                                                    class="img"
                                                                                    src="https://scontent.flhe32-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=19114f&amp;_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&amp;_nc_ohc=cbZqWQHSYPgQ7kNvgGcdRwg&amp;_nc_zt=24&amp;_nc_ht=scontent.flhe32-1.fna&amp;_nc_gid=AQpjgn4sDidbn_tskJo-3as&amp;oh=00_AYA-egN7ADyW2IR3TQ6ovzZhCNPr_pMBtUfp4iygcbifVQ&amp;oe=671D95FF"
                                                                                  />
                                                                                  <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Ali
                                                                                Hamza
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4hq6eo"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-KImDf"
                                                                                id="style-KImDf"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* <div id="style-WqoCY" class="style-WqoCY">
        <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
            <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou" role="button" tabindex="0"><span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                    <div class="x78zum5">
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                <div class="xtwfq29 style-kD1gw" id="style-kD1gw"></div>
                            </div>
                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">1 Ad Account</div>
                        </div>
                    </div>
                </span></div>
        </div>
    </div> */}
                                              </div>

                                              <div
                                                class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-0-0-1 snipcss-vWNUK"
                                                role="toolbar"
                                                data-auto-logging-component-type="GeoToolBar"
                                              >
                                                <div
                                                  class="x78zum5 xdt5ytf x2lwn1j xeuugli snipcss0-1-1-2 style-nNLsT"
                                                  id="style-nNLsT"
                                                >
                                                  <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xp4054r x1h4wwuj xeuugli snipcss0-2-2-3">
                                                    You have unsaved changes
                                                  </span>
                                                  <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x6lvj10 xq9mrsl x1h4wwuj xeuugli snipcss0-2-2-4">
                                                    Data refreshed 2 minutes ago
                                                  </span>
                                                </div>
                                                <div
                                                  class="x3oybdh xuxw1ft x3nfvp2 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x193iq5w xeuugli snipcss0-1-1-5"
                                                  role="group"
                                                >
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1xlr1w8 x140t73q xb57al4 x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-2-5-6 style-DLnRP"
                                                    role="button"
                                                    tabindex="0"
                                                    id="style-DLnRP"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-6-7">
                                                      <div class="x78zum5 snipcss0-4-7-8">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-8-9">
                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-6-9-10">
                                                            Save
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                  <div class="x1rg5ohu snipcss0-2-5-11">
                                                    <div
                                                      aria-busy="false"
                                                      aria-controls="js_2s"
                                                      aria-expanded="false"
                                                      aria-haspopup="menu"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1xlr1w8 x140t73q xb57al4 x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-3-11-12 style-bMBRp"
                                                      role="button"
                                                      tabindex="0"
                                                      id="style-bMBRp"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-12-13">
                                                        <div class="x78zum5 snipcss0-5-13-14">
                                                          <div
                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-6-14-15"
                                                            data-sscoverage-ignore="true"
                                                          >
                                                            Open Drop-down
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-6-14-16">
                                                            ​
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-7-16-17"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 snipcss0-8-17-18 style-wcIqo"
                                                                id="style-wcIqo"
                                                              ></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="x3nfvp2 x193iq5w xxymvpz snipcss0-1-1-19"
                                                  role="none"
                                                >
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                    role="button"
                                                    tabindex="0"
                                                    id="js_ke"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-20-21">
                                                      <div class="x78zum5 snipcss0-4-21-22">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-22-23">
                                                          <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-6-23-24">
                                                            <i
                                                              alt=""
                                                              data-visualcompletion="css-img"
                                                              class="img snipcss0-7-24-25 style-tRPTU"
                                                              id="style-tRPTU"
                                                            ></i>
                                                          </div>
                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-6-23-26">
                                                            Refresh
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="snipcss0-1-1-27">
                                                  <div
                                                    class="x3nfvp2 x193iq5w xxymvpz snipcss0-2-27-28"
                                                    role="none"
                                                  >
                                                    <div
                                                      aria-busy="false"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                      role="button"
                                                      tabindex="0"
                                                      id="js_pd"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-29-30">
                                                        <div class="x78zum5 snipcss0-5-30-31">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-31-32">
                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-7-32-33">
                                                              <i
                                                                alt=""
                                                                data-visualcompletion="css-img"
                                                                class="img snipcss0-8-33-34 style-tYX9V"
                                                                id="style-tYX9V"
                                                              ></i>
                                                            </div>
                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-7-32-35">
                                                              Share
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <span
                                                  id="export_button"
                                                  class="snipcss0-1-1-36"
                                                >
                                                  <div
                                                    class="x3nfvp2 x193iq5w xxymvpz snipcss0-2-36-37"
                                                    role="none"
                                                  >
                                                    <div
                                                      aria-busy="false"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                      role="button"
                                                      tabindex="0"
                                                      id="js_lr"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-38-39">
                                                        <div class="x78zum5 snipcss0-5-39-40">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-40-41">
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-7-41-42"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 snipcss0-8-42-43 style-PeTBn"
                                                                id="style-PeTBn"
                                                              ></div>
                                                            </div>
                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-7-41-44">
                                                              Export
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </span>
                                                <div class="snipcss0-1-1-45">
                                                  <div
                                                    aria-busy="false"
                                                    aria-controls="js_2t"
                                                    aria-expanded="false"
                                                    aria-haspopup="menu"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-2-45-46"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-46-47">
                                                      <div class="x78zum5 snipcss0-4-47-48">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-5-48-49"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Open Drop-down
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-48-50">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-6-50-51"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 snipcss0-7-51-52 style-awlEy"
                                                              id="style-awlEy"
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
                                          </div>

                                          <div
                                            style={{ marginTop: "-15px" }}
                                            className="mainmoveContainer"
                                          >
                                            <div>
                                              <div class="x6s0dn4 x78zum5 xwib8y2 snipcss-5gBLt">
                                                <div
                                                  class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3"
                                                  data-auto-logging-component-type="GeoCard"
                                                >
                                                  <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                    <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                      <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                        <div class="x6s0dn4 xn6708d _5aj7">
                                                          <div class="_4bl9">
                                                            <div class="">
                                                              <div
                                                                class="_90__ _8dtr _9ikp"
                                                                role="search"
                                                                tabindex="-1"
                                                                data-auto-logging-id="f24b55065799d"
                                                              >
                                                                <div class="_4u-c _8dts">
                                                                  <div
                                                                    class="_75w7 style-yWxwj"
                                                                    id="style-yWxwj"
                                                                  >
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-ReD71"
                                                                      id="style-ReD71"
                                                                    ></i>
                                                                  </div>
                                                                  <div class="_8dtc">
                                                                    <div class="_765v">
                                                                      <div class="_765u">
                                                                        <button
                                                                          aria-label="Edit Filter"
                                                                          class="x6s0dn4 x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1fgtraw x12ushyc x1a2a7pz xexx8yu x1sxyh0 x18d9i69 xurb0ha x1pb7wa4 x1ceikm xycp24c xhk9q7s x13lgxp2 x5pf9jr x1o6z2jb"
                                                                          disabled=""
                                                                        >
                                                                          <div>
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x1h4wwuj xeuugli xw3qccf">
                                                                              Had
                                                                              delivery
                                                                            </span>
                                                                          </div>
                                                                        </button>
                                                                        <button
                                                                          aria-label="Remove Filter"
                                                                          class="x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk x1fgtraw xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x1iorvi4 xsyo7zv xjkvuk6 x16hj40l x1pb7wa4 x1ceikm xycp24c x168nmei x1otrzb0 x1i1ezom xo71vjh"
                                                                        >
                                                                          <div class="xlup9mm x1kky2od">
                                                                            <i
                                                                              alt=""
                                                                              data-visualcompletion="css-img"
                                                                              class="img style-TPsoW"
                                                                              id="style-TPsoW"
                                                                            ></i>
                                                                          </div>
                                                                        </button>
                                                                      </div>
                                                                    </div>
                                                                    <div class="_4u-c _8dtd">
                                                                      <div>
                                                                        <span
                                                                          class="_75wa _765u _58ah"
                                                                          placeholder="Search and filter"
                                                                          autocomplete="off"
                                                                          autocorrect="off"
                                                                        >
                                                                          <label
                                                                            class="_58ak _3ct8"
                                                                            id="js_3h"
                                                                          >
                                                                            <input
                                                                              class="_58al"
                                                                              aria-autocomplete="list"
                                                                              aria-controls="js_2j"
                                                                              aria-haspopup="listbox"
                                                                              aria-expanded="false"
                                                                              role="combobox"
                                                                              placeholder="Search and filter"
                                                                              autocomplete="off"
                                                                              autocorrect="off"
                                                                              type="text"
                                                                              value=""
                                                                            />
                                                                          </label>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="_8dte"></div>
                                                                  <div class="_4u-c _765w">
                                                                    <div class="x1rg5ohu x67bb7w">
                                                                      <a
                                                                        class="_231w  _4yef _3-9a style-Sz8Jc"
                                                                        href="#"
                                                                        id="style-Sz8Jc"
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            marginRight:
                                                                              "10px",
                                                                          }}
                                                                          id="style-ifDwy"
                                                                          class="style-ifDwy"
                                                                        >
                                                                          Clear
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            class="_4bl7"
                                                            style={{
                                                              position:
                                                                "relative",
                                                            }}
                                                          >
                                                            <div class="x1iorvi4 xjkvuk6">
                                                              <div>
                                                                <div
                                                                  aria-busy="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div
                                                                      class="x78zum5"
                                                                      onClick={() =>
                                                                        setShowCalender(
                                                                          !showcalender
                                                                        )
                                                                      }
                                                                    >
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                        <div
                                                                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                          role="presentation"
                                                                        >
                                                                          <div
                                                                            class="xtwfq29 style-OIfFZ"
                                                                            id="style-OIfFZ"
                                                                          ></div>
                                                                        </div>
                                                                        <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1iyjqo2">
                                                                          This
                                                                          month:
                                                                          {formatDate(
                                                                            startDate
                                                                          )}{" "}
                                                                          -
                                                                          {formatDate(
                                                                            endDate
                                                                          )}
                                                                        </div>
                                                                        <div
                                                                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                          role="presentation"
                                                                        >
                                                                          <div
                                                                            class="xtwfq29 style-gWmdY"
                                                                            id="style-gWmdY"
                                                                          ></div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          {showcalender && (
                                                            <div
                                                              style={{
                                                                position:
                                                                  "absolute",
                                                                top: "40px",
                                                                right: "20px",
                                                                zIndex: 999,
                                                              }}
                                                            >
                                                              <div className="date-range-picker">
                                                                <div className="content">
                                                                  <div className="ss">
                                                                    <div class="_3-95 snipcss-i26Cr">
                                                                      <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                        <div class="_3-8_"></div>
                                                                        <div class="_2pic _38_g">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                                                            <div>
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                <label
                                                                                  class="x1ypdohk"
                                                                                  for="js_81"
                                                                                >
                                                                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                                    Compare
                                                                                    dates
                                                                                  </span>
                                                                                </label>
                                                                              </div>
                                                                            </div>
                                                                            <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                              <input
                                                                                aria-checked="false"
                                                                                aria-label="Compare dates"
                                                                                role="switch"
                                                                                aria-describedby="js_82"
                                                                                class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                id="js_81"
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
                                                                      </div>
                                                                      <div
                                                                        id="style-qjCAo"
                                                                        class="style-qjCAo"
                                                                      ></div>
                                                                    </div>
                                                                    <div className="calendars">
                                                                      <div className="calendar">
                                                                        <div className="month-title">
                                                                          <div
                                                                            style={{
                                                                              display:
                                                                                "flex",
                                                                              alignItems:
                                                                                "center",
                                                                              justifyContent:
                                                                                "space-between",
                                                                            }}
                                                                          >
                                                                            <button
                                                                              className="moveicon"
                                                                              onClick={
                                                                                handlePrevMonth
                                                                              }
                                                                            >
                                                                              <ChevronLeftIcon className="cheronleft" />
                                                                            </button>
                                                                            <div>
                                                                              {currentMonth.toLocaleString(
                                                                                "default",
                                                                                {
                                                                                  month:
                                                                                    "long",
                                                                                  year: "numeric",
                                                                                }
                                                                              )}
                                                                            </div>
                                                                            <div
                                                                              style={{
                                                                                visibility:
                                                                                  "hidden",
                                                                              }}
                                                                            >
                                                                              s
                                                                            </div>
                                                                          </div>
                                                                          <div>
                                                                            <ul
                                                                              class="_owx uiList _4ki _509- snipcss-Hwb3w"
                                                                              role="row"
                                                                            >
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Sun
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Mon
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Tues
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Wed
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Thurs
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Fri
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Sat
                                                                              </li>
                                                                            </ul>
                                                                          </div>
                                                                        </div>
                                                                        <div className="days">
                                                                          {renderCalendar(
                                                                            currentMonth
                                                                          )}
                                                                        </div>
                                                                      </div>
                                                                      <div className="calendar">
                                                                        <div className="month-title">
                                                                          <div
                                                                            style={{
                                                                              display:
                                                                                "flex",
                                                                              alignItems:
                                                                                "center",
                                                                              justifyContent:
                                                                                "space-between",
                                                                            }}
                                                                          >
                                                                            <div
                                                                              style={{
                                                                                visibility:
                                                                                  "hidden",
                                                                              }}
                                                                            >
                                                                              s
                                                                            </div>
                                                                            <div>
                                                                              {new Date(
                                                                                currentMonth.getFullYear(),
                                                                                currentMonth.getMonth() +
                                                                                  1
                                                                              ).toLocaleString(
                                                                                "default",
                                                                                {
                                                                                  month:
                                                                                    "long",
                                                                                  year: "numeric",
                                                                                }
                                                                              )}
                                                                            </div>
                                                                            <button
                                                                              className="moveicon"
                                                                              onClick={
                                                                                handleNextMonth
                                                                              }
                                                                            >
                                                                              <ChevronRightIcon className="cheronleft" />
                                                                            </button>
                                                                          </div>
                                                                          <div>
                                                                            <ul
                                                                              class="_owx uiList _4ki _509- snipcss-Hwb3w"
                                                                              role="row"
                                                                            >
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Sun
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Mon
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Tues
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Wed
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Thurs
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Fri
                                                                              </li>
                                                                              <li
                                                                                class="_oww"
                                                                                role="columnheader"
                                                                              >
                                                                                Sat
                                                                              </li>
                                                                            </ul>
                                                                          </div>
                                                                        </div>
                                                                        <div className="days">
                                                                          {renderCalendar(
                                                                            new Date(
                                                                              currentMonth.getFullYear(),
                                                                              currentMonth.getMonth() +
                                                                                1
                                                                            )
                                                                          )}
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="footer">
                                                                      <div class="snipcss-CZB9d">
                                                                        {startDate &&
                                                                        endDate
                                                                          ? `${formatDate(
                                                                              startDate
                                                                            )} - ${formatDate(
                                                                              endDate
                                                                            )} Karachi Time`
                                                                          : "Select a date range"}
                                                                        <div class="_5wr">
                                                                          Karachi
                                                                          Time
                                                                        </div>
                                                                      </div>
                                                                      <button
                                                                        className="cancel-btn"
                                                                        onClick={() => {
                                                                          setStartDate(
                                                                            null
                                                                          );
                                                                          setEndDate(
                                                                            null
                                                                          );
                                                                        }}
                                                                      >
                                                                        Cancel
                                                                      </button>
                                                                      <button
                                                                        onClick={
                                                                          handleupdatebutton
                                                                        }
                                                                        className="update-btn"
                                                                      >
                                                                        Update
                                                                      </button>
                                                                    </div>
                                                                  </div>
                                                                  <div>
                                                                    <span className="datepresetns">
                                                                      <li
                                                                        style={{
                                                                          listStyle:
                                                                            "none",
                                                                          marginLeft:
                                                                            "13px",
                                                                        }}
                                                                        data-hover="tooltip"
                                                                        data-tooltip-display="overflow"
                                                                        class="_1qpp snipcss-PwavB"
                                                                      >
                                                                        Date
                                                                        presets
                                                                      </li>
                                                                    </span>
                                                                    {renderDatePresets()}
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          )}
                                                        </div>
                                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                      </div>
                                                      <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                      <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* header of table goes here  */}

                                              <div
                                                style={{
                                                  backgroundColor: "white",
                                                  borderTopLeftRadius: "10px",
                                                  borderTopRightRadius: "10px",
                                                }}
                                                class="_4u-c snipcss-UFvW9"
                                              >
                                                <div class="_941t">
                                                  <div
                                                    class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                                    role="toolbar"
                                                    data-auto-logging-component-type="GeoToolBar"
                                                  >
                                                    <div
                                                      class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                                      data-auto-logging-component-type="GeoToolBar"
                                                    >
                                                      <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-cADvH"
                                                          data-sscoverage-ignore="true"
                                                          id="style-cADvH"
                                                        >
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1iyjqo2">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                <label
                                                                  id="js_2e"
                                                                  for="js_2d"
                                                                >
                                                                  <span class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                    view type
                                                                    selector for
                                                                    ads
                                                                    reporting
                                                                  </span>
                                                                </label>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="xhk9q7s x1otrzb0 xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                          <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                            <div class="x1iyjqo2">
                                                              <div class="xh8yej3">
                                                                <div
                                                                  aria-busy="false"
                                                                  aria-expanded="false"
                                                                  aria-haspopup="listbox"
                                                                  aria-invalid="false"
                                                                  aria-labelledby="js_2e js_2h"
                                                                  aria-owns="js_2c"
                                                                  class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                                  id="js_2d"
                                                                  role="combobox"
                                                                  tabindex="0"
                                                                >
                                                                  <div class="x1n2onr6 xh8yej3">
                                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1gzqxud x108nfp6 xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                      <div class=""></div>
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                            <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xqcrz7y x2lah0s">
                                                                              ​
                                                                              <div class="x1lliihq x1n2onr6 x2lah0s xxk0z11 xvy4d1p xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xbmpl8g x9otpla x1wsgfga">
                                                                                <div
                                                                                  class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl"
                                                                                  role="presentation"
                                                                                >
                                                                                  <i
                                                                                    alt=""
                                                                                    data-visualcompletion="css-img"
                                                                                    class="img style-oW4Bx"
                                                                                    id="style-oW4Bx"
                                                                                  ></i>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 x108nfp6 x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe x8t9es0 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                              <div
                                                                                class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                id="js_34"
                                                                              >
                                                                                Pivot
                                                                                Table
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xqcrz7y x2lah0s">
                                                                          ​
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 style-rIxwB"
                                                                              id="style-rIxwB"
                                                                            ></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div class="xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz"
                                                        role="none"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x1si8nl4 x1kdmppe x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                          role="button"
                                                          tabindex="-1"
                                                          aria-disabled="true"
                                                          id="js_tm"
                                                        >
                                                          <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                  Group
                                                                  Breakdowns
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="x1iyjqo2 xs83m0k xdl72j9"></div>
                                                    <div
                                                      aria-busy="false"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x1si8nl4 x1kdmppe x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss-ld3oV"
                                                      role="button"
                                                      tabindex="-1"
                                                      aria-disabled="true"
                                                      id="js_1mq"
                                                      data-auto-logging-id="fafa914433fc9"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                        <div class="x78zum5">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                              <i
                                                                alt=""
                                                                data-visualcompletion="css-img"
                                                                class="img style-NEqXX"
                                                                id="style-NEqXX"
                                                              ></i>
                                                            </div>
                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                              Reset Column
                                                              Widths
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                    <div
                                                      class="x3oybdh xuxw1ft x1lliihq xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb"
                                                      role="group"
                                                    >
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz style-hdOyp"
                                                        role="none"
                                                        id="style-hdOyp"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss-n3oft style-ZTMWd"
                                                          role="button"
                                                          tabindex="0"
                                                          data-auto-logging-id="f34a02e38c126f"
                                                          id="style-ZTMWd"
                                                        >
                                                          <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                  <i
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    class="img style-Bh8PG"
                                                                    id="style-Bh8PG"
                                                                  ></i>
                                                                </div>
                                                                <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                  Format
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz style-V4cID"
                                                        role="none"
                                                        id="style-V4cID"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 x1e4gqcv x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss-REdM5 style-3mDzk"
                                                          role="button"
                                                          tabindex="0"
                                                          id="js_n7"
                                                          data-auto-logging-id="f31ac18e838b808"
                                                        >
                                                          <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                  <i
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    class="img style-SaolC"
                                                                    id="style-SaolC"
                                                                  ></i>
                                                                </div>
                                                                <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                  Customise
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* Table Goes here brothere */}
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
                                                className="campaign-table-container dddd767t6t"
                                                style={{ height: "100%" }}
                                              >
                                                <Table
                                                  className="dddd767t6t"
                                                  columns={columns}
                                                  bordered={true}
                                                  dataSource={campaings}
                                                  size="large"
                                                  sticky
                                                  pagination={false}
                                                  rowKey={(record) =>
                                                    record._id
                                                  }
                                                  scroll={{
                                                    x: columns.length * 150,
                                                    y: 2000,
                                                  }}
                                                />
                                                {error && (
                                                  <div className="error-message">
                                                    {error}
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                            <div>
                                              <div class="">
                                                <div class="">
                                                  <div
                                                    style={{
                                                      height: "100vh",
                                                      width: "100%",
                                                    }}
                                                    class="style-P4IHn"
                                                    id="style-P4IHn"
                                                  >
                                                    <div
                                                      class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69 uuvcgtrr00">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div class="x139jcc6 x1wsgfga">
                                                              <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                                <div class="x1iyjqo2 xeuugli">
                                                                  <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                    <div class="x1iyjqo2 xeuugli">
                                                                      <div
                                                                        aria-level="3"
                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe xeuugli"
                                                                        id="js_15"
                                                                        role="heading"
                                                                      >
                                                                        Customise
                                                                        pivot
                                                                        table
                                                                      </div>
                                                                    </div>
                                                                    <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga">
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div
                                                                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                              data-sscoverage-ignore="true"
                                                                            >
                                                                              Close
                                                                            </div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div
                                                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                role="presentation"
                                                                              >
                                                                                <div
                                                                                  class="xtwfq29 style-bM9ol"
                                                                                  id="style-bM9ol"
                                                                                ></div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              id="style-9brfl"
                                                              class="style-9brfl"
                                                            >
                                                              <div class="x1ye3gou xsag5q8">
                                                                <div
                                                                  aria-label="onboarding for EVC Nux"
                                                                  class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1rg5ohu x1t137rt xzolkzo x12go9s9 x1rnf11y xprq8jg"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                    <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg x8t9es0 xw23nyj x63nzvj xuxw1ft x2b8uid xo1l8bm x140t73q xgyuhzn">
                                                                      <div class="x8t9es0 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                        What's
                                                                        new
                                                                      </div>
                                                                    </span>
                                                                    <div
                                                                      aria-atomic="true"
                                                                      aria-live="polite"
                                                                      role="status"
                                                                      id="js_16"
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      onboarding
                                                                      for EVC
                                                                      Nux
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="_2pi9 _2pin _3qn7 _61-3 _2fyi _3qng">
                                                              <div>
                                                                <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                  <div
                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-DHrAc"
                                                                    data-sscoverage-ignore="true"
                                                                    id="style-DHrAc"
                                                                  >
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                      <div class="x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                          <label
                                                                            id="js_18"
                                                                            for="js_17"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                              search
                                                                              columns
                                                                            </span>
                                                                          </label>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="xhk9q7s x1otrzb0 xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                    <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                      <div class="x1iyjqo2">
                                                                        <div class="x1n2onr6 xh8yej3">
                                                                          <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1gzqxud x108nfp6 xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                            <div class=""></div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xqcrz7y x2lah0s">
                                                                                    ​
                                                                                    <div class="x3nfvp2">
                                                                                      <i
                                                                                        alt=""
                                                                                        data-visualcompletion="css-img"
                                                                                        class="img style-w2xJ1"
                                                                                        id="style-w2xJ1"
                                                                                      ></i>
                                                                                    </div>
                                                                                  </div>
                                                                                  <input
                                                                                    placeholder="Search"
                                                                                    id="js_17"
                                                                                    aria-labelledby="js_18"
                                                                                    aria-busy="false"
                                                                                    aria-disabled="false"
                                                                                    class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 x6lvj10 x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe x8t9es0 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                                                    type="text"
                                                                                    value=""
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="_2pis">
                                                                <div>
                                                                  <div
                                                                    aria-busy="false"
                                                                    aria-controls="js_1c"
                                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                    role="button"
                                                                    tabindex="0"
                                                                  >
                                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                      <div class="x78zum5">
                                                                        <div
                                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                          data-sscoverage-ignore="true"
                                                                        >
                                                                          Action
                                                                          drop-down
                                                                          menu
                                                                        </div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 style-67XPZ"
                                                                              id="style-67XPZ"
                                                                            ></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div id="left_rail_nux_target_node">
                                                              <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1ye3gou xn6708d bolarecrod">
                                                                <div
                                                                  class="_6g3g style-QAcg2"
                                                                  id="style-QAcg2"
                                                                >
                                                                  <div class="x1s1d1n7 xwib8y2">
                                                                    <div
                                                                      class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x8t9es0 x1fvot60 xo1l8bm xxio538"
                                                                      role="tablist"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          pivottable ===
                                                                          "breakdown"
                                                                            ? {
                                                                                backgroundColor:
                                                                                  "#e7f1fd",
                                                                                paddingRight:
                                                                                  "5px",
                                                                                color:
                                                                                  "#1461cc",
                                                                              }
                                                                            : {
                                                                                backgroundColor:
                                                                                  "transparent",
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        onClick={() =>
                                                                          setPovitTable(
                                                                            "breakdown"
                                                                          )
                                                                        }
                                                                        aria-hidden="false"
                                                                        aria-label="Breakdowns"
                                                                        aria-selected="true"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou "
                                                                        role="tab"
                                                                        tabindex="0"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                          <div
                                                                            aria-hidden="true"
                                                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                          >
                                                                            <span class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4">
                                                                              Breakdowns
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div
                                                                        style={
                                                                          pivottable ===
                                                                          "metrics"
                                                                            ? {
                                                                                backgroundColor:
                                                                                  "#e7f1fd",
                                                                                color:
                                                                                  "#1461cc",
                                                                              }
                                                                            : {
                                                                                backgroundColor:
                                                                                  "none",
                                                                              }
                                                                        }
                                                                        onClick={() =>
                                                                          setPovitTable(
                                                                            "metrics"
                                                                          )
                                                                        }
                                                                        aria-hidden="false"
                                                                        aria-label="Metrics"
                                                                        aria-selected="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou xn6708d x1iyjqo2 xs83m0k x1r8uery xo1l8bm x108nfp6 x1v911su x1i64zmx"
                                                                        role="tab"
                                                                        tabindex="0"
                                                                        id="js_qx"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                          <div
                                                                            aria-hidden="true"
                                                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                          >
                                                                            <span class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid">
                                                                              Metrics
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="xurb0ha xwib8y2">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
                                                                      aria-busy="false"
                                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                      role="button"
                                                                      tabindex="0"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                        <div class="x78zum5">
                                                                          <div
                                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                            data-sscoverage-ignore="true"
                                                                          >
                                                                            Collapse
                                                                            breakdowns
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                              <i
                                                                                alt=""
                                                                                data-visualcompletion="css-img"
                                                                                class="img style-3g3eG"
                                                                                id="style-3g3eG"
                                                                              ></i>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              {pivottable ===
                                                              "breakdown" ? (
                                                                <div
                                                                  style={{
                                                                    overflowY:
                                                                      "scroll",
                                                                    scrollbarWidth:
                                                                      "none",
                                                                    msOverflowStyle:
                                                                      "none",
                                                                  }}
                                                                  class="_5jln style-HBNw4"
                                                                  id="style-HBNw4"
                                                                >
                                                                  <div
                                                                    class="_4bn9"
                                                                    tabindex="0"
                                                                  >
                                                                    <div
                                                                      class="_2mum style-VolnR"
                                                                      id="style-VolnR"
                                                                    >
                                                                      <div class="_4u-c _2mun"></div>
                                                                      <div class="x1ye3gou xn6708d xz9dl7a xjkvuk6">
                                                                        <div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              class=""
                                                                              role="list"
                                                                            >
                                                                              <div
                                                                                style={{
                                                                                  padding:
                                                                                    "5px 0px",
                                                                                }}
                                                                              >
                                                                                {breakdownData.map(
                                                                                  (
                                                                                    category,
                                                                                    index
                                                                                  ) => (
                                                                                    <div
                                                                                      key={
                                                                                        index
                                                                                      }
                                                                                    >
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm x108nfp6 x1v911su snipcss-n89zC">
                                                                                        <div
                                                                                          style={{
                                                                                            textAlign:
                                                                                              "left",
                                                                                          }}
                                                                                          class="x1iyjqo2 xeuugli"
                                                                                        >
                                                                                          <div class="xh8yej3">
                                                                                            <div
                                                                                              class="x78zum5 x1iyjqo2"
                                                                                              role="listitem"
                                                                                            >
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xexx8yu x4uap5 x18d9i69 xkhd6sd xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                                                                <div
                                                                                                  class="x1iyjqo2 xamitd3"
                                                                                                  data-sscoverage-ignore="true"
                                                                                                >
                                                                                                  <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                    <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2">
                                                                                                      {
                                                                                                        category.title
                                                                                                      }
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x2lah0s xlup9mm">
                                                                                          <i
                                                                                            alt=""
                                                                                            data-visualcompletion="css-img"
                                                                                            class="img style-LTgZd"
                                                                                            id="style-LTgZd"
                                                                                          ></i>
                                                                                        </div>
                                                                                      </div>
                                                                                      {category.metrics.map(
                                                                                        (
                                                                                          metric,
                                                                                          idx
                                                                                        ) => (
                                                                                          <div
                                                                                            key={
                                                                                              idx
                                                                                            }
                                                                                          >
                                                                                            <label
                                                                                              htmlFor={`metric-${index}-${idx}`}
                                                                                            >
                                                                                              <div>
                                                                                                <div class="xs1vzh6 x139jcc6 x1e558r4 x1md24ng x1pko0hs x12aqbjl x1xyplig xgsxom x1277o0a">
                                                                                                  <label
                                                                                                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                                                    tabindex="-1"
                                                                                                    data-mouseoverable="1"
                                                                                                  >
                                                                                                    <div
                                                                                                      style={{
                                                                                                        textAlign:
                                                                                                          "left",
                                                                                                      }}
                                                                                                      class="x78zum5 x1iyjqo2"
                                                                                                    >
                                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                                                        <div
                                                                                                          class="x1iyjqo2 xamitd3"
                                                                                                          data-sscoverage-ignore="true"
                                                                                                        >
                                                                                                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                            <div
                                                                                                              style={{
                                                                                                                display:
                                                                                                                  "flex",
                                                                                                                alignItems:
                                                                                                                  "center",
                                                                                                              }}
                                                                                                              class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                                                                                              id="js_2t"
                                                                                                            >
                                                                                                              <input
                                                                                                                style={{
                                                                                                                  width:
                                                                                                                    "22px",
                                                                                                                  height:
                                                                                                                    "22px",
                                                                                                                  border:
                                                                                                                    "1px solid gainboro",
                                                                                                                  outline:
                                                                                                                    "none",
                                                                                                                  marginRight:
                                                                                                                    "8px",
                                                                                                                }}
                                                                                                                type="checkbox"
                                                                                                                id={`metric-${index}-${idx}`}
                                                                                                                value={
                                                                                                                  metric
                                                                                                                }
                                                                                                                onChange={() =>
                                                                                                                  handleCheckboxChange(
                                                                                                                    metric
                                                                                                                  )
                                                                                                                }
                                                                                                                checked={selectedMetrics.includes(
                                                                                                                  metric
                                                                                                                )} // Keeps checkbox state in sync
                                                                                                              />{" "}
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize:
                                                                                                                    "14px",
                                                                                                                }}
                                                                                                              >
                                                                                                                {
                                                                                                                  metric
                                                                                                                }
                                                                                                              </span>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </label>
                                                                                                </div>
                                                                                                <div></div>
                                                                                              </div>
                                                                                            </label>
                                                                                          </div>
                                                                                        )
                                                                                      )}
                                                                                    </div>
                                                                                  )
                                                                                )}
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <div
                                                                  style={{
                                                                    overflowY:
                                                                      "scroll",
                                                                    scrollbarWidth:
                                                                      "none",
                                                                    msOverflowStyle:
                                                                      "none",
                                                                  }}
                                                                  class="_5jln style-HBNw4"
                                                                  id="style-HBNw4"
                                                                >
                                                                  <div
                                                                    class="_4bn9"
                                                                    tabindex="0"
                                                                  >
                                                                    <div
                                                                      class="_2mum style-VolnR"
                                                                      id="style-VolnR"
                                                                    >
                                                                      <div class="_4u-c _2mun"></div>
                                                                      <div class="x1ye3gou xn6708d xz9dl7a xjkvuk6">
                                                                        <div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              class=""
                                                                              role="list"
                                                                            >
                                                                              <div
                                                                                style={{
                                                                                  padding:
                                                                                    "5px 0px",
                                                                                }}
                                                                              >
                                                                                {metricsData.map(
                                                                                  (
                                                                                    category,
                                                                                    index
                                                                                  ) => (
                                                                                    <div
                                                                                      key={
                                                                                        index
                                                                                      }
                                                                                    >
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm x108nfp6 x1v911su snipcss-n89zC">
                                                                                        <div
                                                                                          style={{
                                                                                            textAlign:
                                                                                              "left",
                                                                                          }}
                                                                                          class="x1iyjqo2 xeuugli"
                                                                                        >
                                                                                          <div class="xh8yej3">
                                                                                            <div
                                                                                              class="x78zum5 x1iyjqo2"
                                                                                              role="listitem"
                                                                                            >
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xexx8yu x4uap5 x18d9i69 xkhd6sd xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                                                                <div
                                                                                                  class="x1iyjqo2 xamitd3"
                                                                                                  data-sscoverage-ignore="true"
                                                                                                >
                                                                                                  <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                    <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2">
                                                                                                      {
                                                                                                        category.title
                                                                                                      }
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x2lah0s xlup9mm">
                                                                                          <i
                                                                                            alt=""
                                                                                            data-visualcompletion="css-img"
                                                                                            class="img style-LTgZd"
                                                                                            id="style-LTgZd"
                                                                                          ></i>
                                                                                        </div>
                                                                                      </div>
                                                                                      {category.metrics.map(
                                                                                        (
                                                                                          metric,
                                                                                          idx
                                                                                        ) => (
                                                                                          <div
                                                                                            key={
                                                                                              idx
                                                                                            }
                                                                                          >
                                                                                            <label
                                                                                              htmlFor={`metric-${index}-${idx}`}
                                                                                            >
                                                                                              <div>
                                                                                                <div class="xs1vzh6 x139jcc6 x1e558r4 x1md24ng x1pko0hs x12aqbjl x1xyplig xgsxom x1277o0a">
                                                                                                  <label
                                                                                                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                                                    tabindex="-1"
                                                                                                    data-mouseoverable="1"
                                                                                                  >
                                                                                                    <div
                                                                                                      style={{
                                                                                                        textAlign:
                                                                                                          "left",
                                                                                                      }}
                                                                                                      class="x78zum5 x1iyjqo2"
                                                                                                    >
                                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                                                        <div
                                                                                                          class="x1iyjqo2 xamitd3"
                                                                                                          data-sscoverage-ignore="true"
                                                                                                        >
                                                                                                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                            <div
                                                                                                              style={{
                                                                                                                display:
                                                                                                                  "flex",
                                                                                                                alignItems:
                                                                                                                  "center",
                                                                                                              }}
                                                                                                              class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                                                                                              id="js_2t"
                                                                                                            >
                                                                                                              <input
                                                                                                                style={{
                                                                                                                  width:
                                                                                                                    "22px",
                                                                                                                  height:
                                                                                                                    "22px",
                                                                                                                  border:
                                                                                                                    "1px solid gainboro",
                                                                                                                  outline:
                                                                                                                    "none",
                                                                                                                  marginRight:
                                                                                                                    "8px",
                                                                                                                }}
                                                                                                                type="checkbox"
                                                                                                                id={`metric-${index}-${idx}`}
                                                                                                                value={
                                                                                                                  metric
                                                                                                                }
                                                                                                                onChange={() =>
                                                                                                                  handleCheckboxChange(
                                                                                                                    metric
                                                                                                                  )
                                                                                                                }
                                                                                                                checked={selectedMetrics.includes(
                                                                                                                  metric
                                                                                                                )} // Keeps checkbox state in sync
                                                                                                              />{" "}
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize:
                                                                                                                    "14px",
                                                                                                                }}
                                                                                                              >
                                                                                                                {
                                                                                                                  metric
                                                                                                                }
                                                                                                              </span>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </label>
                                                                                                </div>
                                                                                                <div></div>
                                                                                              </div>
                                                                                            </label>
                                                                                          </div>
                                                                                        )
                                                                                      )}
                                                                                    </div>
                                                                                  )
                                                                                )}
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              )}
                                                            </div>
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                          </div>
                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
