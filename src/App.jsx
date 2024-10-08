import React, { useEffect, useState } from "react";
import "./App.css";
import CompaingsData from "./components/CompaingsData";
import AdsSets from "./components/AdsSets";
import Ads from "./components/Ads";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import "./styles/NewCalender.css";

const App = () => {
  const [showcalender, setShowCalender] = useState(false);
  const [currentfolder, setcurrentFolder] = useState("Campaings");
  const [showupdatejustnow, setShowUpdateJustNow] = useState(false);
  const [campaings, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);
  const handleUpdateJustNow = () => {
    setShowUpdateJustNow(true);
    fetchCampaigns();
  };
  const handleupdatebutton = () => {
    setShowCalender(false);
    fetchCampaigns();
  };
  const handleClickRun = (value) => {
    setcurrentFolder(value);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(searchQuery);
  const filteredCampaigns = campaings?.filter((campaign) =>
    campaign.campaingname.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
                                              <div>
                                                {" "}
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
                                                                      src="https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=19114f&amp;_nc_ohc=4TsCt3nmUrkQ7kNvgF-MhP1&amp;_nc_ht=scontent.flhe3-1.fna&amp;_nc_gid=A3iIw_XVUd9pvI1tRN5o396&amp;oh=00_AYAafkUkmWmqI9FID5YTmB0pyqd4inQpY_N38zMLFctXcw&amp;oe=670B917F"
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
                                                                      <div class="x78zum5 x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1k4ywey">
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
                                                                              class="x1xqt7ti x1uxerd5 xrohxju x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli"
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
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
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
                                                                          All
                                                                          tools
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
                                                                        Ad
                                                                        account
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
                                                                              Mark
                                                                              all
                                                                              as
                                                                              read
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
                                                          <Link to="/mainnavigation">
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
                                                                      Report a
                                                                      problems
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
                                                          </Link>
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
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>

                                <div class="_2ww2">
                                  <div>
                                    <div class="_4u-c">
                                      <div data-pagelet="AdsPETopNavContainer.react">
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/msg:AdsPETopNavContainer"
                                          data-auto-logging-id="f9dd96f13078b"
                                          id="style-HrtWD"
                                          class="style-HrtWD"
                                        ></span>
                                        <div
                                          id="style-UaX4C"
                                          class="style-UaX4C"
                                        >
                                          <div class="_9g6y _2ph-">
                                            <div
                                              class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-0-0-1"
                                              role="toolbar"
                                              data-auto-logging-component-type="GeoToolBar"
                                            >
                                              <div class="_8fgf _8ox0 snipcss0-1-1-2">
                                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-2-2-3">
                                                  <div class="x1t2a60a x1mpkggp snipcss0-3-3-4">
                                                    <div
                                                      aria-level="2"
                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli snipcss0-4-4-5"
                                                      role="heading"
                                                    >
                                                      {currentfolder ===
                                                      "Campaings"
                                                        ? "Campaings"
                                                        : currentfolder ===
                                                          "AdsSets"
                                                        ? "Ad Sets"
                                                        : "Ads"}
                                                    </div>
                                                  </div>
                                                  <div class="x1i64zmx snipcss0-3-3-6">
                                                    <div class="snipcss0-4-6-7">
                                                      <div class="snipcss0-5-7-8">
                                                        <div
                                                          class="snipcss0-6-8-9 style-Hv2fJ"
                                                          id="style-Hv2fJ"
                                                        >
                                                          <div class="x1a2a7pz xh8yej3 snipcss0-7-9-10">
                                                            <div
                                                              style={{
                                                                display: "flex",
                                                                alignItems:
                                                                  "center",
                                                                justifyContent:
                                                                  "space-between",
                                                              }}
                                                              aria-disabled="false"
                                                              class="_af4f snipcss0-8-10-11 style-l5AWB"
                                                              id="js_7t"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <span
                                                                style={{
                                                                  paddingLeft:
                                                                    "10px",
                                                                }}
                                                                class=""
                                                              >
                                                                <span class="">
                                                                  <span
                                                                    class="snipcss0-11-13-14 style-JHIWA"
                                                                    id="style-JHIWA"
                                                                  >
                                                                    Peak Leads
                                                                    (1387295665246598)
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <span class="_aee5 snipcss0-9-11-15"></span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli snipcss0-3-3-16"></div>
                                                </div>
                                              </div>
                                              <div class="x1iyjqo2 xs83m0k xdl72j9 snipcss0-1-1-17"></div>
                                              <div class="_8fgf snipcss0-1-1-18">
                                                <div
                                                  onClick={handleUpdateJustNow}
                                                  class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-19"
                                                  data-auto-logging-component-type="GeoToolBar"
                                                >
                                                  <div class="x19991ni x16fj20d x1hc1fzr snipcss0-3-19-20">
                                                    <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli snipcss0-4-20-21">
                                                      {showupdatejustnow
                                                        ? "Updated just now"
                                                        : ""}
                                                    </span>
                                                  </div>
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss-qo5or"
                                                    role="button"
                                                    tabindex="0"
                                                    id="js_y2"
                                                    data-auto-logging-id="f8e2d33ad475"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x78zum5">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Refresh Table Data
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-kEtSL"
                                                              id="style-kEtSL"
                                                            ></div>
                                                          </div>
                                                          ​
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-31"
                                                  data-auto-logging-component-type="GeoToolBar"
                                                >
                                                  <div class="_4g7v snipcss0-3-31-32">
                                                    <div
                                                      class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-4-32-33"
                                                      data-auto-logging-component-type="GeoToolBar"
                                                    >
                                                      <div class="_4g7x snipcss0-5-33-34">
                                                        <div
                                                          class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-6-34-35"
                                                          data-auto-logging-component-type="GeoToolBar"
                                                        >
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz snipcss0-7-35-36"
                                                            role="none"
                                                          >
                                                            <div
                                                              aria-busy="false"
                                                              aria-disabled="true"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-8-36-37"
                                                              role="button"
                                                              tabindex="-1"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-37-38">
                                                                <div class="x78zum5 snipcss0-10-38-39">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-11-39-40">
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-12-40-41">
                                                                      Discard
                                                                      Drafts
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <span
                                                            class="snipcss0-7-35-42"
                                                            data-tracked="true"
                                                            data-clickable="1"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-42-43"
                                                              role="none"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                aria-disabled="true"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-9-43-44"
                                                                role="button"
                                                                tabindex="-1"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-44-45">
                                                                  <div class="x78zum5 snipcss0-11-45-46">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-46-47">
                                                                      <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-13-47-48">
                                                                        Review
                                                                        and
                                                                        publish
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="_4540 snipcss0-2-18-49">
                                                  <div
                                                    aria-busy="false"
                                                    aria-controls="js_73"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-3-49-50"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-50-51">
                                                      <div class="x78zum5 snipcss0-5-51-52">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-6-52-53"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Menu
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-52-54">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-7-54-55"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 snipcss0-8-55-56 style-izxoA"
                                                              id="style-izxoA"
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
                                          <span></span>
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="_49wu style-cyQ1t"
                                      id="style-cyQ1t"
                                    >
                                      <div></div>
                                      <div class="_4u-c">
                                        <div class="xqtp20y x17qophe xib59rt xkrivgy xat24cr x1gryazu x1ap80js xexx8yu x6x52a7 x18d9i69 xxpdul3 x10l6tqk xds687c xhtitgo">
                                          <div class="_5il"></div>
                                        </div>
                                        <div class="_1saj"></div>
                                      </div>
                                      <span
                                        data-surface-wrapper="1"
                                        data-surface="/am/editor_drawer"
                                        data-auto-logging-id="f2e71fc45fb23f"
                                        id="style-7dZ4m"
                                        class="style-7dZ4m"
                                      >
                                        <div
                                          class="_2k0c _8_1l style-rd1rQ"
                                          id="style-rd1rQ"
                                        >
                                          <div class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4">
                                            <div
                                              class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                              icon="[object Object]"
                                              aria-label="Close"
                                              role="button"
                                              tabindex="-1"
                                            >
                                              <i
                                                alt=""
                                                data-visualcompletion="css-img"
                                                class="img style-Wr938"
                                                id="style-Wr938"
                                              ></i>
                                              <div class="xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz xx83zyx xt0e3qv"></div>
                                            </div>
                                            <div id="INSIGHTS_DRAWER_tip">
                                              <span>
                                                <div class="x1rg5ohu x67bb7w">
                                                  <span
                                                    class=" "
                                                    data-tracked="true"
                                                    data-clickable="1"
                                                  >
                                                    <div
                                                      aria-disabled="false"
                                                      aria-label="View charts (Ctrl+Y)"
                                                      class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                      data-pitloot-persistonclick="false"
                                                      id="insights_tray_button"
                                                      role="button"
                                                      tabindex="0"
                                                    >
                                                      <div class="xbsr9hj">
                                                        <div
                                                          class="x3nfvp2 x120ccyz x140t73q"
                                                          role="presentation"
                                                        >
                                                          <div
                                                            class="xtwfq29 style-5ho1q"
                                                            id="style-5ho1q"
                                                          ></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </span>
                                                </div>
                                              </span>
                                            </div>
                                            <div id="EDITOR_DRAWER_tip">
                                              <div class="x1rg5ohu x67bb7w">
                                                <span
                                                  class=" "
                                                  data-tracked="true"
                                                  data-clickable="1"
                                                >
                                                  <div
                                                    aria-disabled="true"
                                                    aria-label="Select at least one campaign to edit."
                                                    class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                    data-pitloot-persistonclick="true"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <div class="xbsr9hj">
                                                      <div
                                                        class="x3nfvp2 x120ccyz xto31z9"
                                                        role="presentation"
                                                      >
                                                        <div
                                                          class="xtwfq29 style-MsQPd"
                                                          id="style-MsQPd"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div id="ACTIVITY_HISTORY_DRAWER_tip">
                                              <div class="x1rg5ohu x67bb7w">
                                                <span
                                                  class=" "
                                                  data-tracked="true"
                                                  data-clickable="1"
                                                >
                                                  <div
                                                    aria-disabled="true"
                                                    aria-label="Select at least one campaign to see a history of changes."
                                                    class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                    data-pitloot-persistonclick="true"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <div class="xbsr9hj">
                                                      <div
                                                        class="x3nfvp2 x120ccyz xto31z9"
                                                        role="presentation"
                                                      >
                                                        <div
                                                          class="xtwfq29 style-1Ia8e"
                                                          id="style-1Ia8e"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div class="x10l6tqk xwa60dl"></div>
                                          </div>
                                        </div>
                                      </span>
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
                                          <span
                                            data-surface-wrapper="1"
                                            data-surface="/am/table/search_and_filter"
                                            data-auto-logging-id="f3821f470ed9b98"
                                            id="style-Y2t4j"
                                            class="style-Y2t4j"
                                          >
                                            <div>
                                              <div class="x1i64zmx x1emribx xwib8y2">
                                                <div class="_4u-c x78zum5 x1qughib">
                                                  <div class="x78zum5 x1qughib xh8yej3">
                                                    <div class="xgyuaek x1ed109x">
                                                      <div
                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                        data-auto-logging-component-type="GeoCard"
                                                      >
                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                              <div class="x78zum5 x1nhvcw1 x6s0dn4 x1iyjqo2 x1ye3gou xc9qbxq">
                                                                <div class="x78zum5 x6s0dn4 x5yr21d">
                                                                  <div class="x1kky2od x6s0dn4 x78zum5 x5yr21d">
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-qZyZz"
                                                                      id="style-qZyZz"
                                                                    ></i>
                                                                  </div>
                                                                  <div class="x1sliqq">
                                                                    <div class="x6s0dn4 x78zum5">
                                                                      <input
                                                                        value={
                                                                          searchQuery
                                                                        }
                                                                        onChange={
                                                                          handleSearchChange
                                                                        }
                                                                        placeholder="Search and Filter"
                                                                        style={{
                                                                          minWidth:
                                                                            "1000px",
                                                                          border:
                                                                            "none",
                                                                          outline:
                                                                            "none",
                                                                          width:
                                                                            "100%",
                                                                        }}
                                                                        type="text"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                            </div>
                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                    }}
                                                    class="xsgj6o6"
                                                  >
                                                    <div>
                                                      <span
                                                        class=" "
                                                        data-tracked="true"
                                                        data-clickable="1"
                                                      >
                                                        <span class="_5ldw">
                                                          <span>
                                                            <button
                                                              aria-haspopup="true"
                                                              type="button"
                                                              aria-disabled="false"
                                                              class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-z8QcL"
                                                              id="style-z8QcL"
                                                            >
                                                              <div
                                                                onClick={() =>
                                                                  setShowCalender(
                                                                    (prev) =>
                                                                      !prev
                                                                  )
                                                                }
                                                                class="_43rl"
                                                              >
                                                                <div
                                                                  data-hover="tooltip"
                                                                  data-tooltip-display="overflow"
                                                                  class="_43rm"
                                                                >
                                                                  <div class="_1uz0">
                                                                    <div>
                                                                      {" "}
                                                                      {formatDate(
                                                                        startDate
                                                                      )}{" "}
                                                                      -{" "}
                                                                      {formatDate(
                                                                        endDate
                                                                      )}
                                                                      &nbsp;
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <i
                                                                  aria-hidden="true"
                                                                  class="_271o img style-fq3tz"
                                                                  alt=""
                                                                  data-visualcompletion="css-img"
                                                                  id="style-fq3tz"
                                                                ></i>
                                                              </div>
                                                            </button>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    {showcalender && (
                                                      <div
                                                        style={{
                                                          position: "absolute",
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
                                                                    Karachi Time
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
                                                                  Date presets
                                                                </li>
                                                              </span>
                                                              {renderDatePresets()}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )}{" "}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                          <div class="_3-8r" id="peTabs">
                                            <div class="x78zum5">
                                              <div class="x1iyjqo2 x2lah0s xdl72j9">
                                                <ul
                                                  class="x78zum5 xuk3077 x1rdy4ex _43o4 _4470"
                                                  role="tablist"
                                                >
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:campaign"
                                                    data-auto-logging-id="f21ee556f7cacf8"
                                                    id="style-o9ibw"
                                                    class="style-o9ibw"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 x1vjfegm x1jyxor1 _45hc _1hqh"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="true"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "Campaings"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "Campaings"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                            id="CAMPAIGN_GROUP_AdsClassicTab"
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "Campaings" ? (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p"
                                                                      >
                                                                        <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5zm-9.83 23.73c-.2.18-.46.27-.72.27-.17 0-.35-.04-.51-.13L24 30.98l-5.44 2.89c-.4.21-.89.15-1.23-.14a.98.98 0 0 1-.23-1.16l5.95-12c.17-.35.54-.57.95-.57s.77.22.95.57l5.95 12c.19.39.1.86-.23 1.16z"></path>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo snipcss-MI9sc"
                                                                      >
                                                                        <path
                                                                          d="m19.95 8.76-.18-.53a4 4 0 0 0-3.79-2.74H6.5c-1.66 0-3 1.34-3 3v30c0 2.21 1.79 4 4 4h33c2.21 0 4-1.79 4-4V15.5c0-2.21-1.79-4-4-4H23.74c-1.72 0-3.25-1.1-3.79-2.74z"
                                                                          stroke="currentColor"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"
                                                                          stroke-width="3px"
                                                                          fill="none"
                                                                        ></path>
                                                                        <path d="m30.9 32.57-5.95-12c-.17-.35-.54-.57-.95-.57s-.77.22-.95.57l-5.95 12c-.19.39-.1.86.23 1.16.33.3.83.36 1.23.14L24 30.98l5.44 2.89a1.075 1.075 0 0 0 1.23-.14c.33-.3.42-.76.23-1.16z"></path>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "Campaings"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4  x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Campaigns{" "}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:adset"
                                                    data-auto-logging-id="f281680e3b25a24"
                                                    id="style-fOWQi"
                                                    class="style-fOWQi"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="false"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "AdsSets"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "AdsSets"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "AdsSets" ? (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p snipcss-exTTP"
                                                                      >
                                                                        <rect
                                                                          x="26"
                                                                          y="2"
                                                                          width="20"
                                                                          height="20"
                                                                          rx="4.5"
                                                                          ry="4.5"
                                                                        ></rect>
                                                                        <rect
                                                                          x="2"
                                                                          y="26"
                                                                          width="20"
                                                                          height="20"
                                                                          rx="4.5"
                                                                          ry="4.5"
                                                                        ></rect>
                                                                        <path d="M17.5 2h-11C4.02 2 2 4.02 2 6.5v11C2 19.98 4.02 22 6.5 22h11c2.48 0 4.5-2.02 4.5-4.5v-11C22 4.02 19.98 2 17.5 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM41.5 26h-11c-2.48 0-4.5 2.02-4.5 4.5v11c0 2.48 2.02 4.5 4.5 4.5h11c2.48 0 4.5-2.02 4.5-4.5v-11c0-2.48-2.02-4.5-4.5-4.5zM36 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo"
                                                                      >
                                                                        <g>
                                                                          <g>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="27.5"
                                                                              y="3.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="3.5"
                                                                              y="27.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="3.5"
                                                                              y="3.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                              transform="rotate(90 12 12)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="9.5"
                                                                              y="9.5"
                                                                              width="5"
                                                                              height="5"
                                                                              rx="2.5"
                                                                              ry="2.5"
                                                                              transform="rotate(90 12 12)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="33.5"
                                                                              y="33.5"
                                                                              width="5"
                                                                              height="5"
                                                                              rx="2.5"
                                                                              ry="2.5"
                                                                              transform="rotate(90 36 36)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="27.5"
                                                                              y="27.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                              transform="rotate(90 36 36)"
                                                                            ></rect>
                                                                          </g>
                                                                        </g>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "AdsSets"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Ad sets{" "}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:ad"
                                                    data-auto-logging-id="f191984a1c2abb4"
                                                    id="style-j557g"
                                                    class="style-j557g"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="false"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "Ads"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "Ads"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                            id="ADGROUP_AdsClassicTab"
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "Ads" ? (
                                                                      <svg
                                                                        viewBox="0 0 16 16"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p snipcss-xPvhS"
                                                                      >
                                                                        <g data-name="Layer 2">
                                                                          <path
                                                                            d="M13.25 1H2.75A1.76 1.76 0 0 0 1 2.75v10.5A1.76 1.76 0 0 0 2.75 15h10.5A1.76 1.76 0 0 0 15 13.25V2.75A1.76 1.76 0 0 0 13.25 1zM4.5 5.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8-.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"
                                                                            data-name="16"
                                                                          ></path>
                                                                        </g>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 16 16"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo"
                                                                      >
                                                                        <g data-name="Layer 2">
                                                                          <g data-name="16">
                                                                            <rect
                                                                              x="1.5"
                                                                              y="1.5"
                                                                              width="13"
                                                                              height="13"
                                                                              rx="1.25"
                                                                              stroke="currentColor"
                                                                              fill="none"
                                                                            ></rect>
                                                                            <circle
                                                                              cx="4.5"
                                                                              cy="4.5"
                                                                              r="1"
                                                                            ></circle>
                                                                            <path
                                                                              stroke-linecap="round"
                                                                              stroke="currentColor"
                                                                              fill="none"
                                                                              d="M7.5 4.5 12.5 4.5"
                                                                            ></path>
                                                                          </g>
                                                                        </g>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "Ads"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Ads
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                </ul>
                                              </div>
                                              <div class="x1c4vz4f xs83m0k xdl72j9"></div>
                                            </div>
                                          </div>
                                          {/* compaing data start here  */}
                                          {currentfolder === "Campaings" && (
                                            <CompaingsData
                                              campaigns={filteredCampaigns}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                            />
                                          )}
                                          {currentfolder === "AdsSets" && (
                                            <AdsSets
                                              campaigns={filteredCampaigns}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                            />
                                          )}
                                          {currentfolder === "Ads" && (
                                            <Ads
                                              campaigns={filteredCampaigns}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                            />
                                          )}

                                          <div class="xeq5yr9 x12peec7 x1lcm9me x1yr5g0i x5pf9jr xo71vjh x1n2onr6 xiaao90 x1i64zmx"></div>
                                        </div>
                                      </span>
                                      <div class="xixxii4 xjnlgov x1vw3jpx x1memqgq">
                                        <span></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span
                          data-surface-wrapper="1"
                          data-non-int-surface="/am/hero_root:AdsPEModalStatusContainer.react"
                          data-auto-logging-id="f40ab3df733bd"
                          id="style-YtINJ"
                          class="style-YtINJ"
                        >
                          <div class=""></div>
                        </span>
                        <div id="web_ads_guidance_tips"></div>
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

export default App;
