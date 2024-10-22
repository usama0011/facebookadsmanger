import React, { useEffect, useState } from "react";
import "./App.css";
import CompaingsData from "./components/CompaingsData";
import AdsSets from "./components/AdsSets";
import Ads from "./components/Ads";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import "./styles/NewCalender.css";
import SearchAndFilter from "./components/SearchAndFilter";

const App = () => {
  const [showcalender, setShowCalender] = useState(false);
  const [showmyaccount, setShowmyAccount] = useState(false);
  const [showcustomizedbanner, setShowCustumizeBanner] = useState(false);
  const [showcustumizedcoloums, setShowCustumizedlayout] = useState(false);
  const [currentfolder, setcurrentFolder] = useState("Campaings");
  const [showsearchfilterbar, setshowsearchfilterbar] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
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
  const [activeSection, setActiveSection] = useState(null); // Track active section

  const handleSectionClick = (index) => {
    setActiveSection(index); // Update active section
  };
  const data = [
    {
      sectionTitle: "Performance",
      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Results", value: "Results" },
            { title: "Result Rate", value: "Result Rate" },
            { title: "Reach", value: "Reach" },
            { title: "Frequency", value: "Frequency" },
            { title: "Impressions", value: "Impressions" },
            { title: "Delivery", value: "Delivery" },
            { title: "Ad set delivery", value: "Ad set delivery" },
            { title: "Amount spent", value: "Amount spent" },
            { title: "Clicks (all)", value: "Clicks (all)" },
            { title: "CPC (all)", value: "CPC (all)" },
            { title: "CTR (all)", value: "CTR (all)" },
            {
              title:
                "Gross impressions (includes invalid impressions from non-human traffic)",
              value:
                "Gross impressions (includes invalid impressions from non-human traffic)",
            },
            {
              title: "Auto-refresh impressions",
              value: "Auto-refresh impressions",
            },
            { title: "Attribution setting", value: "Attribution setting" },
            {
              title: "Average purchases conversion value",
              value: "Average purchases conversion value",
            },
          ],
        },
        {
          sectionTitle: "Ad relevance diagnostics",
          attributes: [
            { title: "Quality ranking", value: "Quality ranking" },
            {
              title: "Engagement rate ranking",
              value: "Engagement rate ranking",
            },
            {
              title: "Conversion rate ranking",
              value: "Conversion rate ranking",
            },
          ],
        },
        {
          sectionTitle: "Cost",
          attributes: [
            { title: "Cost per result", value: "Cost per result" },
            {
              title: "Cost per 1,000 Accounts Centre accounts reached",
              value: "Cost per 1,000 Accounts Centre accounts reached",
            },
            {
              title: "CPM (cost per 1,000 impressions)",
              value: "CPM (cost per 1,000 impressions)",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Engagement",
      subSections: [
        {
          sectionTitle: "Page Post",
          attributes: [
            { title: "Page engagement", value: "Page engagement" },
            { title: "Follows or likes", value: "Follows or likes" },
            { title: "Join group requests", value: "Join group requests" },
            { title: "Post comments", value: "Post comments" },
            { title: "Post engagements", value: "Post engagements" },
            { title: "Post reactions", value: "Post reactions" },
            { title: "Post saves", value: "Post saves" },
            { title: "Post shares", value: "Post shares" },
            { title: "Photo views", value: "Photo views" },
            { title: "Event responses", value: "Event responses" },
            { title: "Check-ins", value: "Check-ins" },
            { title: "Effect share", value: "Effect share" },
          ],
        },
        {
          sectionTitle: "Cost: Page and post",
          attributes: [
            {
              title: "Cost per Page engagement",
              value: "Cost per Page engagement",
            },
            {
              title: "Cost per follow or like",
              value: "Cost per follow or like",
            },
            {
              title: "Cost per join group request",
              value: "Cost per join group request",
            },
            {
              title: "Cost per post engagement",
              value: "Cost per post engagement",
            },
            {
              title: "Cost per event response",
              value: "Cost per event response",
            },
          ],
        },
        {
          sectionTitle: "Calling",
          attributes: [
            {
              title: "Estimated call confirmation clicks",
              value: "Estimated call confirmation clicks",
            },
            {
              title: "Callback requests submitted",
              value: "Callback requests submitted",
            },
            {
              title: "Messenger calls placed",
              value: "Messenger calls placed",
            },

            {
              title: "20-second Messenger calls",
              value: "20-second Messenger calls",
            },
            {
              title: "60-second Messenger calls",
              value: "60-second Messenger calls",
            },
          ],
        },
        {
          sectionTitle: "Messaging",
          attributes: [
            {
              title: "New messaging contacts",
              value: "New messaging contacts",
            },
            { title: "Blocks", value: "Blocks" },
            {
              title: "Messaging conversations started",
              value: "Messaging conversations started",
            },
            {
              title: "Messaging subscriptions",
              value: "Messaging subscriptions",
            },
            { title: "Welcome message views", value: "Welcome message views" },
            {
              title: "Messaging conversations replied",
              value: "Messaging conversations replied",
            },
          ],
        },
        {
          sectionTitle: "Cost: messaging",
          attributes: [
            {
              title: "Cost per new messaging contact",
              value: "Cost per new messaging contact",
            },
            {
              title: "Cost per messaging conversation started",
              value: "Cost per messaging conversation started",
            },
            {
              title: "Cost per messaging subscription",
              value: "Cost per messaging subscription",
            },
          ],
        },
        {
          sectionTitle: "Media",
          attributes: [
            {
              title: "Unique 2-second continuous video views",
              value: "Unique 2-second continuous video views",
            },
            {
              title: "2-second continuous video plays",
              value: "2-second continuous video plays",
            },
            { title: "3-second video plays", value: "3-second video plays" },
            { title: "ThruPlays", value: "ThruPlays" },

            { title: "Video plays at 25%", value: "Video plays at 25%" },
            { title: "Video plays at 50%", value: "Video plays at 50%" },
            { title: "Video plays at 75%", value: "Video plays at 75%" },
            { title: "Video plays at 95%", value: "Video plays at 95%" },
            { title: "Video plays at 100%", value: "Video plays at 100%" },
            {
              title: "Video average play time",
              value: "Video average play time",
            },
            { title: "Video plays", value: "Video plays" },
            {
              title: "Instant Experience view time",
              value: "Instant Experience view time",
            },
            {
              title: "Instant Experience view percentage",
              value: "Instant Experience view percentage",
            },
            {
              title: "Instant Experience impressions",
              value: "Instant Experience impressions",
            },
            {
              title: "Instant Experience reach",
              value: "Instant Experience reach",
            },
          ],
        },
        {
          sectionTitle: "Cost: Media",
          attributes: [
            {
              title: "Cost per 2-second continuous video play",
              value: "Cost per 2-second continuous video play",
            },
            {
              title: "Cost per 3-second video play",
              value: "Cost per 3-second video play",
            },
            {
              title: "Cost per ThruPlay",
              value: "Cost per ThruPlay",
            },
          ],
        },
        {
          sectionTitle: "Clicks",
          attributes: [
            {
              title: "Link clicks",
              value: "Link clicks",
            },
            {
              title: "Unique link clicks",
              value: "Unique link clicks",
            },
            {
              title: "Outbound clicks",
              value: "Outbound clicks",
            },
            {
              title: "Unique outbound clicks",
              value: "Unique outbound clicks",
            },
            {
              title: "CTR (link click-through rate)",
              value: "CTR (link click-through rate)",
            },
            {
              title: "Unique CTR (link click-through rate)",
              value: "Unique CTR (link click-through rate)",
            },
            {
              title: "Outbound CTR (click-through rate)",
              value: "Outbound CTR (click-through rate)",
            },

            {
              title: "Unique outbound CTR (click-through rate)",
              value: "Unique outbound CTR (click-through rate)",
            },
            {
              title: "Unique clicks (all)",
              value: "Unique clicks (all)",
            },

            {
              title: "Unique CTR (all)",
              value: "Unique CTR (all)",
            },

            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },

            {
              title: "Instant Experience clicks to start",
              value: "Instant Experience clicks to start",
            },

            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },
            {
              title: "Instant Experience outbound clicks",
              value: "Instant Experience outbound clicks",
            },
            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },
            {
              title: "Net reminders on",
              value: "Net reminders on",
            },
            {
              title: "Instagram profile visits",
              value: "Instagram profile visits",
            },
          ],
        },
        {
          sectionTitle: "Cost: clicks",
          attributes: [
            {
              title: "CPC (cost per link click)",
              value: "CPC (cost per link click)",
            },
            {
              title: "Cost per unique link click",
              value: "Cost per unique link click",
            },
            {
              title: "Cost per unique click (all)",
              value: "Cost per unique click (all)",
            },
          ],
        },
        {
          sectionTitle: "Awareness",
          attributes: [
            {
              title: "Estimated ad recall lift (people)",
              value: "Estimated ad recall lift (people)",
            },
            {
              title: "Estimated ad recall lift rate",
              value: "Estimated ad recall lift rate",
            },
          ],
        },
        {
          sectionTitle: "Cost: awareness",
          attributes: [
            {
              title: "Cost per estimated ad recall lift (people)",
              value: "Cost per estimated ad recall lift (people)",
            },
          ],
        },
      ],
    },
    // Add the new "Conversions" section
    {
      sectionTitle: "Conversions",
      subSections: [
        {
          sectionTitle: "Standard Events",
          // Only show the table, no checkboxes for these events
          tableHeaders: [
            "Metric to Include",
            "Total",
            "Unique",
            "Value",
            "Cost",
            "Unique Cost",
          ],
          tableData: [
            {
              metric: "Achievements Unlocked",
              values: [
                "Total Achievement Unlocked",
                "Unique Achievement Unlocked",
                "Value Achievement Unlocked",
                "Cost Achievement Unlocked",
                "Unique Cost Achievement Unlocked",
              ],
            },
            {
              metric: "Add Payment Info",
              values: [
                "Total Payment Info",
                "Unique Payment Info",
                "Value Payment Info",
                "Cost Payment Info",
                "Unique Cost Payment Info",
              ],
            },
            {
              metric: "Adds to Cart",
              values: [
                "Total Adds to Cart",
                "Unique Adds to Cart",
                "Value Adds to Cart",
                "Cost Adds to Cart",
                "Unique Cost Adds to Cart",
              ],
            },
            {
              metric: "Adds to Wishlist",
              values: [
                "Total Adds to Wishlist",
                "Unique Adds to Wishlist",
                "Value Adds to Wishlist",
                "Cost Adds to Wishlist",
                "Unique Cost Adds to Wishlist",
              ],
            },
            {
              metric: "App Activations",
              values: [
                "Total App Activations",
                "Unique App Activations",
                "Value App Activations",
                "Cost App Activations",
                "Unique Cost App Activations",
              ],
            },
            {
              metric: "App Installs",
              values: [
                "Total App Installs",
                "Unique App Installs",
                "Value App Installs",
                "Cost App Installs",
                "Unique Cost App Installs",
              ],
            },
            {
              metric: "Applications Submitted",
              values: [
                "Total Applications Submitted",
                "Unique Applications Submitted",
                "Value Applications Submitted",
                "Cost Applications Submitted",
                "Unique Cost Applications Submitted",
              ],
            },
            {
              metric: "Appointments Scheduled",
              values: [
                "Total Appointments Scheduled",
                "Unique Appointments Scheduled",
                "Value Appointments Scheduled",
                "Cost Appointments Scheduled",
                "Unique Cost Appointments Scheduled",
              ],
            },
            {
              metric: "Checkouts Initiated",
              values: [
                "Total Checkouts Initiated",
                "Unique Checkouts Initiated",
                "Value Checkouts Initiated",
                "Cost Checkouts Initiated",
                "Unique Cost Checkouts Initiated",
              ],
            },
            {
              metric: "Contacts",
              values: [
                "Total Contacts",
                "Unique Contacts",
                "Value Contacts",
                "Cost Contacts",
                "Unique Cost Contacts",
              ],
            },
            {
              metric: "Content Views",
              values: [
                "Total Content Views",
                "Unique Content Views",
                "Value Content Views",
                "Cost Content Views",
                "Unique Cost Content Views",
              ],
            },
            {
              metric: "Credit Spends",
              values: [
                "Total Credit Spends",
                "Unique Credit Spends",
                "Value Credit Spends",
                "Cost Credit Spends",
                "Unique Cost Credit Spends",
              ],
            },
            {
              metric: "Custom Events",
              values: [
                "Total Custom Events",
                "Unique Custom Events",
                "Value Custom Events",
                "Cost Custom Events",
                "Unique Cost Custom Events",
              ],
            },
            {
              metric: "Desktop App Engagements",
              values: [
                "Total Desktop App Engagements",
                "Unique Desktop App Engagements",
                "Value Desktop App Engagements",
                "Cost Desktop App Engagements",
                "Unique Cost Desktop App Engagements",
              ],
            },
            {
              metric: "Desktop App Story Engagements",
              values: [
                "Total Desktop App Story Engagements",
                "Unique Desktop App Story Engagements",
                "Value Desktop App Story Engagements",
                "Cost Desktop App Story Engagements",
                "Unique Cost Desktop App Story Engagements",
              ],
            },
            {
              metric: "Desktop App Uses",
              values: [
                "Total Desktop App Uses",
                "Unique Desktop App Uses",
                "Value Desktop App Uses",
                "Cost Desktop App Uses",
                "Unique Cost Desktop App Uses",
              ],
            },
            {
              metric: "Donation ROAS",
              values: [
                "Total Donation ROAS",
                "Unique Donation ROAS",
                "Value Donation ROAS",
                "Cost Donation ROAS",
                "Unique Cost Donation ROAS",
              ],
            },
            {
              metric: "Donations",
              values: [
                "Total Donations",
                "Unique Donations",
                "Value Donations",
                "Cost Donations",
                "Unique Cost Donations",
              ],
            },
            {
              metric: "Game Plays",
              values: [
                "Total Game Plays",
                "Unique Game Plays",
                "Value Game Plays",
                "Cost Game Plays",
                "Unique Cost Game Plays",
              ],
            },
            {
              metric: "Get Directions Clicks",
              values: [
                "Total Get Directions Clicks",
                "Unique Get Directions Clicks",
                "Value Get Directions Clicks",
                "Cost Get Directions Clicks",
                "Unique Cost Get Directions Clicks",
              ],
            },
            {
              metric: "In-app Ad Clicks",
              values: [
                "Total In-app Ad Clicks",
                "Unique In-app Ad Clicks",
                "Value In-app Ad Clicks",
                "Cost In-app Ad Clicks",
                "Unique Cost In-app Ad Clicks",
              ],
            },
            {
              metric: "In-app Ad Impressions",
              values: [
                "Total In-app Ad Impressions",
                "Unique In-app Ad Impressions",
                "Value In-app Ad Impressions",
                "Cost In-app Ad Impressions",
                "Unique Cost In-app Ad Impressions",
              ],
            },
            {
              metric: "Landing Page Views",
              values: [
                "Total Landing Page Views",
                "Unique Landing Page Views",
                "Value Landing Page Views",
                "Cost Landing Page Views",
                "Unique Cost Landing Page Views",
              ],
            },
            {
              metric: "Leads",
              values: [
                "Total Leads",
                "Unique Leads",
                "Value Leads",
                "Cost Leads",
                "Unique Cost Leads",
              ],
            },
            {
              metric: "Levels Achieved",
              values: [
                "Total Levels Achieved",
                "Unique Levels Achieved",
                "Value Levels Achieved",
                "Cost Levels Achieved",
                "Unique Cost Levels Achieved",
              ],
            },
            {
              metric: "Location Searches",
              values: [
                "Total Location Searches",
                "Unique Location Searches",
                "Value Location Searches",
                "Cost Location Searches",
                "Unique Cost Location Searches",
              ],
            },
            {
              metric: "Meta Workflow Completions",
              values: [
                "Total Meta Workflow Completions",
                "Unique Meta Workflow Completions",
                "Value Meta Workflow Completions",
                "Cost Meta Workflow Completions",
                "Unique Cost Meta Workflow Completions",
              ],
            },
            {
              metric: "Mobile App D2 Retention",
              values: [
                "Total Mobile App D2 Retention",
                "Unique Mobile App D2 Retention",
                "Value Mobile App D2 Retention",
                "Cost Mobile App D2 Retention",
                "Unique Cost Mobile App D2 Retention",
              ],
            },
            {
              metric: "Mobile App D7 Retention",
              values: [
                "Total Mobile App D7 Retention",
                "Unique Mobile App D7 Retention",
                "Value Mobile App D7 Retention",
                "Cost Mobile App D7 Retention",
                "Unique Cost Mobile App D7 Retention",
              ],
            },
            {
              metric: "Orders Created",
              values: [
                "Total Orders Created",
                "Unique Orders Created",
                "Value Orders Created",
                "Cost Orders Created",
                "Unique Cost Orders Created",
              ],
            },
            {
              metric: "Orders Dispatched",
              values: [
                "Total Orders Dispatched",
                "Unique Orders Dispatched",
                "Value Orders Dispatched",
                "Cost Orders Dispatched",
                "Unique Cost Orders Dispatched",
              ],
            },
            {
              metric: "Other Offline Conversions",
              values: [
                "Total Other Offline Conversions",
                "Unique Other Offline Conversions",
                "Value Other Offline Conversions",
                "Cost Other Offline Conversions",
                "Unique Cost Other Offline Conversions",
              ],
            },
            {
              metric: "Phone Number Clicks",
              values: [
                "Total Phone Number Clicks",
                "Unique Phone Number Clicks",
                "Value Phone Number Clicks",
                "Cost Phone Number Clicks",
                "Unique Cost Phone Number Clicks",
              ],
            },
            {
              metric: "Products Customised",
              values: [
                "Total Products Customised",
                "Unique Products Customised",
                "Value Products Customised",
                "Cost Products Customised",
                "Unique Cost Products Customised",
              ],
            },
            {
              metric: "Purchase ROAS",
              values: [
                "Total Purchase ROAS",
                "Unique Purchase ROAS",
                "Value Purchase ROAS",
                "Cost Purchase ROAS",
                "Unique Cost Purchase ROAS",
              ],
            },
            {
              metric: "Purchases",
              values: [
                "Total Purchases",
                "Unique Purchases",
                "Value Purchases",
                "Cost Purchases",
                "Unique Cost Purchases",
              ],
            },
            {
              metric: "Ratings Submitted",
              values: [
                "Total Ratings Submitted",
                "Unique Ratings Submitted",
                "Value Ratings Submitted",
                "Cost Ratings Submitted",
                "Unique Cost Ratings Submitted",
              ],
            },
            {
              metric: "Registrations Completed",
              values: [
                "Total Registrations Completed",
                "Unique Registrations Completed",
                "Value Registrations Completed",
                "Cost Registrations Completed",
                "Unique Cost Registrations Completed",
              ],
            },
            {
              metric: "Searches",
              values: [
                "Total Searches",
                "Unique Searches",
                "Value Searches",
                "Cost Searches",
                "Unique Cost Searches",
              ],
            },
            {
              metric: "Subscriptions",
              values: [
                "Total Subscriptions",
                "Unique Subscriptions",
                "Value Subscriptions",
                "Cost Subscriptions",
                "Unique Cost Subscriptions",
              ],
            },
            {
              metric: "Trials Started",
              values: [
                "Total Trials Started",
                "Unique Trials Started",
                "Value Trials Started",
                "Cost Trials Started",
                "Unique Cost Trials Started",
              ],
            },
            {
              metric: "Tutorials Completed",
              values: [
                "Total Tutorials Completed",
                "Unique Tutorials Completed",
                "Value Tutorials Completed",
                "Cost Tutorials Completed",
                "Unique Cost Tutorials Completed",
              ],
            },
          ],
        },
        {
          sectionTitle: "Custom Events",
          attributes: [
            { title: "No Events Available", value: "No Events Available" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Settings",
      subSections: [
        {
          sectionTitle: "Object Names and IDs",
          attributes: [
            { title: "Account ID", value: "Account ID" },
            { title: "Account name", value: "Account name" },
            { title: "Campaign ID", value: "Campaign ID" },
            { title: "Ad set name", value: "Ad set name" },
            { title: "Ad set ID", value: "Ad set ID" },
            { title: "Ad ID", value: "Ad ID" },
            { title: "Ad name", value: "Ad name" },
            { title: "Tags", value: "Tags" },
          ],
        },
        {
          sectionTitle: "Status and Dates",
          attributes: [
            { title: "Date created", value: "Date created" },
            { title: "Date last edited", value: "Date last edited" },
            { title: "Starts", value: "Starts" },
            { title: "Ends", value: "Ends" },
            { title: "Reporting starts", value: "Reporting starts" },
            { title: "Reporting ends", value: "Reporting ends" },
            {
              title: "Time elapsed percentage",
              value: "Time elapsed percentage",
            },
          ],
        },
        {
          sectionTitle: "Goal, Budget & Schedule",
          attributes: [
            { title: "Objective", value: "Objective" },
            { title: "Buying type", value: "Buying type" },
            { title: "Bid strategy", value: "Bid strategy" },
            { title: "Budget", value: "Budget" },
            { title: "Buying type", value: "Buying type" },
            { title: "Budget Remaining", value: "Budget Remaining" },
            { title: "Schedule", value: "Schedule" },
            {
              title: "Amount spent percentage",
              value: "Amount spent percentage",
            },
            {
              title: "Campaign spending limit",
              value: "Campaign spending limit",
            },
            { title: "Ad schedule", value: "Ad schedule" },
            { title: "Conversion location", value: "Conversion location" },
          ],
        },
        {
          sectionTitle: "Targeting",
          attributes: [
            {
              title: "Audience location (ad set settings)",
              value: "Audience location (ad set settings)",
            },
            {
              title: "Audience age (ad set settings)",
              value: "Audience age (ad set settings)",
            },
            {
              title: "Audience gender (ad set settings)",
              value: "Audience gender (ad set settings)",
            },
            {
              title: "Included custom audiences",
              value: "Included custom audiences",
            },
            {
              title: "Excluded custom audiences",
              value: "Excluded custom audiences",
            },
          ],
        },
        {
          sectionTitle: "Ad creative",
          attributes: [
            { title: "Page name", value: "Page name" },
            {
              title: "Headline (ad settings)",
              value: "Headline (ad settings)",
            },
            { title: "Body (ad settings)", value: "Body (ad settings)" },
            { title: "Link (ad settings)", value: "Link (ad settings)" },
            { title: "Destination", value: "Destination" },
            { title: "Preview link", value: "Preview link" },
          ],
        },
        {
          sectionTitle: "Tracking",
          attributes: [
            { title: "URL parameters", value: "URL parameters" },
            { title: "Meta pixel", value: "Meta pixel" },
            { title: "App event", value: "App event" },
            { title: "Offline event", value: "Offline event" },
          ],
        },
      ],
    },
    {
      sectionTitle: "A/B test",
      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Split", value: "Split" },
            { title: "Variable", value: "Variable" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Optimisation",

      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Optimisation events", value: "Optimisation events" },
            {
              title: "Cost per optimisation event",
              value: "Cost per optimisation event",
            },
            { title: "Last significant edit", value: "Last significant edit" },
          ],
        },
      ],
    },
  ];
  const handleCheckboxChange = (
    section,
    value,
    isMain,
    metricType,
    subMetric
  ) => {
    if (isMain) {
      // Check/uncheck all values in the section
      const newSelectedValues = [...selectedValues];
      section.subSections.forEach((subSection) => {
        subSection.attributes.forEach((attr) => {
          if (newSelectedValues.includes(attr.value)) {
            newSelectedValues.splice(newSelectedValues.indexOf(attr.value), 1);
          } else {
            newSelectedValues.push(attr.value);
          }
        });
      });
      setSelectedValues(newSelectedValues);
    } else {
      // Toggle individual value or specific metric
      const formattedValue = subMetric ? `${subMetric} ${metricType}` : value;
      if (selectedValues.includes(formattedValue)) {
        setSelectedValues(
          selectedValues.filter((val) => val !== formattedValue)
        );
      } else {
        setSelectedValues([...selectedValues, formattedValue]);
      }
    }
  };
  // Function to remove an item from the selected list and uncheck it
  const handleRemoveItem = (value) => {
    setSelectedValues(selectedValues.filter((val) => val !== value));
  };
  // CustomCheckbox Component
  const CustomCheckbox = ({ checked, onChange }) => {
    return (
      <div
        onClick={onChange} // Trigger the change on click
        style={{
          width: "12px", // Increased width for the icon
          height: "12px", // Increased height for the ico
          border: "2px solid gainsboro", // Gray border

          borderRadius: "2px", // Slightly rounded corners
          display: "flex", // Flexbox for centering the icon
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          cursor: "pointer", // Change cursor to pointer
          position: "relative", // Position relative for absolute positioning of the checkmark
        }}
      >
        {checked && (
          <img
            src="https://www.svgrepo.com/show/61127/tick-sign.svg"
            style={{ width: "10px", height: "10px" }}
            alt=""
          />
        )}
      </div>
    );
  };
  const TitleCheckbox = ({ checked, onChange }) => {
    return (
      <div
        onClick={onChange} // Trigger the change on click
        style={{
          width: "12px", // Width for the checkbox
          height: "12px", // Height for the checkbox
          border: "2px solid gainsboro", // Gray border
          borderRadius: "2px", // Slightly rounded corners
          display: "flex", // Flexbox for centering the icon
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          cursor: "pointer", // Change cursor to pointer
          position: "relative", // Position relative for absolute positioning of the icons
        }}
      >
        {checked ? (
          <img
            src="https://www.svgrepo.com/show/61127/tick-sign.svg" // Image when checked
            style={{ width: "10px", height: "10px" }}
            alt="Checked"
          />
        ) : (
          <img
            src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png" // Image when unchecked
            style={{ width: "10px", height: "10px" }}
            alt="Unchecked"
          />
        )}
      </div>
    );
  };
  const handleapplybutton = () => {
    setShowCustumizedlayout(false);
    setShowCustumizeBanner(false);
  };

  return (
    <div>
      <div
        style={{ position: "relative" }}
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
                                                                      src="https://scontent.flhe32-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=108&ccb=1-7&_nc_sid=19114f&_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&_nc_ohc=cbZqWQHSYPgQ7kNvgGcdRwg&_nc_zt=24&_nc_ht=scontent.flhe32-1.fna&_nc_gid=AzqetjE_6fNTSPCeUC1d8rp&oh=00_AYBJjp49dui8-A3cGVH38Dl4PvDBIcg642FFv_j58k9ZCw&oe=671D95FF"
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
                                                            <Link to="/overviewaccount">
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
                                                            </Link>
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
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    class="x1i64zmx snipcss0-3-3-6"
                                                  >
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
                                                              class="_af4f snipcss0-8-10-11 style-l5AWB onserparent"
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
                                                                    onClick={(
                                                                      previous
                                                                    ) =>
                                                                      !previous
                                                                    }
                                                                    class="snipcss0-11-13-14 style-JHIWA"
                                                                    id="style-JHIWA"
                                                                  >
                                                                    Peak Leadsm
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
                                                    {showmyaccount && (
                                                      <div className="accountonser">
                                                        <div class="x1qjc9v5 x78zum5 xdt5ytf x2lwn1j xeuugli snipcss-e12RJ">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                            <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                              <div
                                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-Q1mkT"
                                                                data-sscoverage-ignore="true"
                                                                id="style-Q1mkT"
                                                              >
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1iyjqo2">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                                                      <label
                                                                        id="js_9t"
                                                                        for="js_9s"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli"></span>
                                                                        </span>
                                                                      </label>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                  <div class="x1iyjqo2">
                                                                    <div class="x1n2onr6 xh8yej3">
                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                        <div class=""></div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                                ​
                                                                                <div class="x3nfvp2">
                                                                                  <div
                                                                                    class="xtwfq29 style-9xRzH"
                                                                                    id="style-9xRzH"
                                                                                  ></div>
                                                                                </div>
                                                                              </div>
                                                                              <input
                                                                                placeholder="Search for an ad account"
                                                                                id="js_9s"
                                                                                aria-labelledby="js_9t"
                                                                                aria-busy="false"
                                                                                aria-disabled="false"
                                                                                class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 x1541jtf x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                                                type="text"
                                                                                value=""
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="x8gbvx8 x78zum5 x1q0g3np x2lwn1j xeuugli x1b3vtwk x13fuv20 x178xt8z">
                                                            <div
                                                              style={{
                                                                backgroundColor:
                                                                  "#edf5ff",
                                                                padding:
                                                                  "5px 30px",
                                                              }}
                                                              class="x78zum5 xdt5ytf x2lwn1j xeuugli x1uxo832 x7kga7y x1dp7odi x1nti1gv x10y3i5r x2lah0s x1qughib xinu3np"
                                                            >
                                                              <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel xhft0lx">
                                                                <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                                  <div class="xeuugli x1d52u69 xqmxbcd xw7yly9">
                                                                    <div></div>
                                                                    <div
                                                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                                      role="grid"
                                                                    >
                                                                      <div class="x78zum5 x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x65s2av">
                                                                            <div
                                                                              aria-level="4"
                                                                              class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                              role="heading"
                                                                            >
                                                                              <div class="x78zum5 x1q0g3np x17zd0t2 x1r0jzty x2lwn1j xeuugli xm3z3ea x1x8b98j x131883w x16mih1h x11yfylt xl010v5 x6wrskw x16m5f1z">
                                                                                <div
                                                                                  aria-level="4"
                                                                                  class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                  role="heading"
                                                                                >
                                                                                  Your
                                                                                  account
                                                                                </div>
                                                                                <div class="x1rg5ohu x67bb7w">
                                                                                  <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                                    <span>
                                                                                      ​
                                                                                    </span>
                                                                                    <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                                      <div class="x78zum5 x1ypdohk x1uuroth x67bb7w xsgj6o6 xw3qccf">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-1aYND"
                                                                                            id="style-1aYND"
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
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1k4ywey">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_9y"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div
                                                                                    class="xh8yej3"
                                                                                    id="north_star_personal_first_level_scope_item"
                                                                                  >
                                                                                    <div class="xy99zzx x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1rdy4ex x4vbgl9 xp7jhwk x1n0m28w x1iorvi4 xjkvuk6 xurb0ha x1sxyh0">
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1gg8mnh">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                          <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                                              <img
                                                                                                alt=""
                                                                                                class="img"
                                                                                                src="https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=19114f&amp;_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&amp;_nc_ohc=aTbESaDIFVYQ7kNvgHnHz2B&amp;_nc_zt=24&amp;_nc_ht=scontent.flhe41-1.fna&amp;_nc_gid=AtwakHmDmbx4pVNL43tARy9&amp;oh=00_AYDXnzBkFOADzqqkGSAf7xcD6ajAlKH9bqOLmcAs7heZdA&amp;oe=671AF2FF"
                                                                                              />
                                                                                              <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x4elba9 x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="xeuugli">
                                                                                            <div
                                                                                              aria-level="3"
                                                                                              class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                              role="heading"
                                                                                              tabindex="-1"
                                                                                            >
                                                                                              <div
                                                                                                aria-level="4"
                                                                                                class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj x140t73q xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                                role="heading"
                                                                                              >
                                                                                                Ali
                                                                                                Hamza
                                                                                              </div>
                                                                                            </div>
                                                                                            <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli">
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                                <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x140t73q xq9mrsl x1h4wwuj xeuugli">
                                                                                                  2
                                                                                                  ad
                                                                                                  accounts
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x140t73q"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-ycmUl"
                                                                                            id="style-ycmUl"
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
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-Qg3sA"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-Qg3sA"
                                                                ></div>
                                                                <div
                                                                  class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-WKehQ"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-WKehQ"
                                                                >
                                                                  <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                                                </div>
                                                              </div>
                                                              <div>
                                                                <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i xw7yly9 x1yztbdb" />
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1yztbdb x1d52u69 xktsk01">
                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x">
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz style-opN9C"
                                                                      role="none"
                                                                      id="style-opN9C"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Create
                                                                                a
                                                                                business
                                                                                portfolio
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz style-IrGgn"
                                                                      role="none"
                                                                      id="style-IrGgn"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Log
                                                                                out
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
                                                            <div class="xvziehe x1kmanbg">
                                                              <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x8g9x59 xw7yly9 x1yztbdb">
                                                                <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1d52u69 xktsk01">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                        <div class="xeuugli">
                                                                          <div
                                                                            aria-level="3"
                                                                            class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                            role="heading"
                                                                          >
                                                                            Ali
                                                                            Hamza
                                                                          </div>
                                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli">
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              2
                                                                              ad
                                                                              accounts
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    aria-level="4"
                                                                    class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1d52u69 xktsk01 xw7yly9"
                                                                    role="heading"
                                                                  >
                                                                    Ad accounts
                                                                  </div>
                                                                  <div class="xeuugli xmupa6y xqmxbcd x1xmf6yo x1e56ztr">
                                                                    <div></div>
                                                                    <div
                                                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                                      role="grid"
                                                                    >
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1k4ywey">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_a0"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                                    <div class="x1n2onr6 x14atkfc">
                                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                                        <div class=""></div>
                                                                                        <input
                                                                                          aria-checked="true"
                                                                                          aria-disabled="false"
                                                                                          aria-labelledby="js_a0"
                                                                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                          type="radio"
                                                                                          value="true"
                                                                                          checked=""
                                                                                        />
                                                                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                                                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                                    <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas xzolkzo x12go9s9 x1rnf11y xprq8jg">
                                                                                      <div
                                                                                        class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-c5koq"
                                                                                            id="style-c5koq"
                                                                                          ></div>
                                                                                        </div>
                                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                                      <div class="x1rg5ohu x67bb7w">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                                                                                          <div
                                                                                            aria-level="4"
                                                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                            role="heading"
                                                                                          >
                                                                                            1387295665246598
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                          Ad
                                                                                          account
                                                                                          ID:
                                                                                          1387295665246598
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
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1v911su">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_a1"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                                    <div class="x1n2onr6 x14atkfc">
                                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                                        <div class=""></div>
                                                                                        <input
                                                                                          aria-checked="false"
                                                                                          aria-disabled="false"
                                                                                          aria-labelledby="js_a1"
                                                                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                          type="radio"
                                                                                          value="false"
                                                                                        />
                                                                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                                    <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas xzolkzo x12go9s9 x1rnf11y xprq8jg">
                                                                                      <div
                                                                                        class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-w7sUo"
                                                                                            id="style-w7sUo"
                                                                                          ></div>
                                                                                        </div>
                                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                                      <div class="x1rg5ohu x67bb7w">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                                                                                          <div
                                                                                            aria-level="4"
                                                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                            role="heading"
                                                                                          >
                                                                                            1789195501571701
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                          Ad
                                                                                          account
                                                                                          ID:
                                                                                          1789195501571701
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
                                                                </div>
                                                                <div
                                                                  class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-lMqPS"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-lMqPS"
                                                                ></div>
                                                                <div
                                                                  class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-7IoYr"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-7IoYr"
                                                                >
                                                                  <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )}
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
                                                                    <div
                                                                      onClick={(
                                                                        prev
                                                                      ) =>
                                                                        setshowsearchfilterbar(
                                                                          !prev
                                                                        )
                                                                      }
                                                                      class="x6s0dn4 x78zum5"
                                                                    >
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
                                                                            "270px",
                                                                          border:
                                                                            "none",
                                                                          height:
                                                                            "26px",
                                                                          borderRadius:
                                                                            "10px",
                                                                          outline:
                                                                            "none",
                                                                          width:
                                                                            "100%",
                                                                          paddingLeft:
                                                                            "5px",
                                                                        }}
                                                                        type="text"
                                                                        onFocus={(
                                                                          e
                                                                        ) =>
                                                                          (e.target.style.border =
                                                                            "2px solid #0878c1")
                                                                        }
                                                                        onBlur={(
                                                                          e
                                                                        ) =>
                                                                          (e.target.style.border =
                                                                            "2px solid #0878c1")
                                                                        }
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
                                                      marginRight: "20px",
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
                                          {showsearchfilterbar && (
                                            <div
                                              className="outerserachandfilercontar"
                                              style={{
                                                position: "absolute",
                                                top: "88px",
                                                zIndex: "999",
                                                left: "55px",
                                                backgroundColor: "white",
                                              }}
                                            >
                                              <SearchAndFilter />
                                            </div>
                                          )}
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
                                              showcustumizedcoloums={
                                                showcustumizedcoloums
                                              }
                                              setShowCustumizedlayout={
                                                setShowCustumizedlayout
                                              }
                                              campaigns={filteredCampaigns}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                              selectedValues={selectedValues}
                                              showcustomizedbanner={
                                                showcustomizedbanner
                                              }
                                              setShowCustumizeBanner={
                                                setShowCustumizeBanner
                                              }
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
      {showcustumizedcoloums && (
        <div className="mycustomlayoutteamd">
          <div
            style={{ marginTop: "25px" }}
            class="_59s7 _9l2g snipcss0-1-1-3 style-RZxFc"
            role="dialog"
            aria-labelledby="js_vo"
            id="style-RZxFc"
          >
            <div class="_4t2a snipcss0-2-3-4">
              <div class="snipcss0-3-4-5">
                <div
                  data-surface="/am/table"
                  data-clickable="1"
                  data-inputable="1"
                  data-keydownable="1"
                  data-keyupable="1"
                  data-mouseoverable="1"
                  data-changeable="1"
                  class="snipcss0-4-5-6"
                >
                  <div
                    data-auto-logging-id="f32bd349120e60c"
                    class="snipcss0-5-6-7"
                  >
                    <div class="_4-i0 _9l16 _2gb3 snipcss0-6-7-8">
                      <div class="clearfix snipcss0-7-8-9">
                        <div class="_ohe snipcss0-8-9-10">
                          <h3
                            class="_52c9 _9l17 snipcss0-9-10-11"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                            id="js_vo"
                          >
                            Customise columns
                          </h3>
                        </div>
                        <div class="_ohf snipcss0-8-9-12">
                          <div class="_51-u snipcss0-9-12-13">
                            <button
                              class="layerCancel _51-t _9l15 _50zy _50-0 _50z- _5upp _42ft snipcss0-10-13-14"
                              type="button"
                              title="Close"
                              tabindex="0"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      data-surface-wrapper="1"
                      data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/table/hero_root:/hero_root:AdsColumnSetEditor.react"
                      data-auto-logging-id="fc18afd906977"
                      class="snipcss0-6-7-15 style-QUODW"
                      id="style-QUODW"
                    >
                      <div class="snipcss0-7-15-16">
                        <div
                          font-size="medium"
                          class="_4-i2 _50f4 snipcss0-8-16-17"
                        >
                          <div class="_t5z _5aj7 snipcss0-9-17-18">
                            <div className="_t5o _4bl7 snipcss0-10-18-19">
                              <ul
                                className="_13pf _43o4 _4470 snipcss0-11-19-20"
                                role="tablist"
                              >
                                {data.map((section, index) => (
                                  <div
                                    className="_13pe snipcss0-12-20-21"
                                    tabindex="0"
                                    key={index}
                                  >
                                    <div className="snipcss0-13-21-22">
                                      <ul
                                        style={{ textAlign: "left" }}
                                        className="_1pgx _43o4 _4470 snipcss0-14-22-23"
                                        role="tablist"
                                      >
                                        <a
                                          style={{
                                            color:
                                              activeSection === index
                                                ? "#2887e6"
                                                : "black", // Set color based on active section
                                            fontWeight: "bold",
                                          }}
                                          aria-haspopup="false"
                                          tabIndex="0"
                                          role="tab"
                                          href={`#section-${index}`}
                                          className="snipcss0-15-23-24"
                                          aria-selected={
                                            activeSection === index
                                              ? "true"
                                              : "false"
                                          } // Set aria-selected for accessibility
                                          onClick={() =>
                                            handleSectionClick(index)
                                          } // Set active section on click
                                        >
                                          {section.sectionTitle}
                                        </a>
                                        {section.subSections
                                          .filter(
                                            (subSection) =>
                                              ![
                                                "Cost: Page and post",
                                                "Cost: messaging",
                                                "Cost: Media",
                                                "Cost: clicks",
                                                "Cost: awareness",
                                                "Performance",
                                              ].includes(
                                                subSection.sectionTitle
                                              )
                                          )
                                          .map((subSection, subIndex) => (
                                            <a
                                              key={subIndex}
                                              style={{ textAlign: "left" }}
                                              aria-haspopup="false"
                                              tabIndex="-1"
                                              role="tab"
                                              className="_1pgv _45hc _3m1v _468f snipcss0-15-23-25"
                                              aria-selected="false"
                                            >
                                              <div
                                                className="_6a snipcss0-16-25-26"
                                                style={{ textAlign: "left" }}
                                              >
                                                {subSection.sectionTitle}
                                              </div>
                                            </a>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </ul>
                            </div>
                            <div class="_afhd _4bl9 snipcss0-10-18-77">
                              <div class="_37yx snipcss0-11-77-78">
                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-12-78-79">
                                  <div class="_37yz snipcss0-13-79-80">
                                    <div class="_1qqs snipcss0-14-80-81">
                                      <label
                                        class="_4b7j _53rs _642b snipcss0-15-81-82 style-S8Est"
                                        tabindex="-1"
                                        id="style-S8Est"
                                      >
                                        <i
                                          class="_4b7o img snipcss0-16-82-83 style-kw7cQ"
                                          alt=""
                                          data-visualcompletion="css-img"
                                          id="style-kw7cQ"
                                        ></i>
                                        <input
                                          class="_4b7k _4b7k_big _53rs snipcss0-16-82-84 style-6JOEj"
                                          placeholder="Search"
                                          value=""
                                          id="style-6JOEj"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div class="_8-m0 _2pi4 _2pil snipcss0-13-79-85">
                                    <a
                                      style={{ textAlign: "left" }}
                                      data-hover="tooltip"
                                      data-tooltip-display="overflow"
                                      class="_231w _231z _8y2_ snipcss0-14-85-86 style-zKWh4"
                                      href="#"
                                      id="style-zKWh4"
                                    >
                                      Create custom metric
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="x1n2onr6 snipcss0-11-77-87">
                                <div
                                  class="x6s0dn4 x78zum5 x13a6bvl x2lwn1j xeuugli x1hxswl6 x178xt8z x13fuv20 xx1l10f x9f619 xyamay9 x1pi30zi xwib8y2 x5ib6vp xh8yej3 x1ccr1t9 snipcss0-12-87-88 style-fsor3"
                                  id="style-fsor3"
                                >
                                  <span
                                    role="heading"
                                    aria-level="4"
                                    class="snipcss0-13-88-89 style-WojKt"
                                    id="style-WojKt"
                                  >
                                    Metrics to include
                                  </span>
                                  <div
                                    class="x1bl4301 snipcss0-13-88-90 style-t8voQ"
                                    id="CONVERSION_CATEGORY_HEADER_LABEL"
                                  >
                                    <div class="_3qn7 _61-2 _2fyi _3qng snipcss0-14-90-91">
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-92">
                                        <span
                                          class="snipcss0-16-92-93 style-113ov"
                                          id="style-113ov"
                                        >
                                          Total
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-94">
                                        <span
                                          class="snipcss0-16-94-95 style-o3REE"
                                          id="style-o3REE"
                                        >
                                          Unique
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-96">
                                        <span
                                          class="snipcss0-16-96-97 style-Oaz1C"
                                          id="style-Oaz1C"
                                        >
                                          Value
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-98">
                                        <span
                                          class="snipcss0-16-98-99 style-7bUbd"
                                          id="style-7bUbd"
                                        >
                                          Cost
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-100">
                                        <span
                                          class="snipcss0-16-100-101 style-XU9lp"
                                          id="style-XU9lp"
                                        >
                                          Unique cost
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  overflowY: "scroll",
                                  scrollbarWidth: "none",
                                  msOverflowStyle: "none",
                                }}
                                class="_3qp4 snipcss0-11-77-102 style-ZT9dC"
                                id="style-ZT9dC"
                              >
                                {data.map((section, index) => (
                                  <div
                                    key={index}
                                    className="section"
                                    id={`section-${index}`}
                                  >
                                    <header
                                      style={{ textAlign: "left" }}
                                      class="_28r6 snipcss0-15-105-106"
                                    >
                                      <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-16-106-107">
                                        <TitleCheckbox
                                          checked={section.checked} // Replace with your state management for checked
                                          onChange={() =>
                                            handleCheckboxChange(
                                              section,
                                              null,
                                              true
                                            )
                                          } // Function to handle checkbox state change
                                        />
                                        <label
                                          style={{
                                            marginLeft: "8px",
                                            color: "#90949c",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          {section.sectionTitle}
                                        </label>
                                      </div>
                                    </header>

                                    {/* Display subSections */}
                                    {section.subSections &&
                                      section.subSections.map(
                                        (subSection, subIndex) => (
                                          <div
                                            key={subIndex}
                                            className="sub-section"
                                          >
                                            <header
                                              style={{
                                                textAlign: "left",
                                                paddingLeft: "23px",
                                                marginTop: "15px",
                                              }}
                                              class="_28r4 snipcss0-16-312-313"
                                            >
                                              <span
                                                class="_4qe6 snipcss0-17-313-314 style-qzzwI"
                                                id="style-qzzwI"
                                              >
                                                <span class="snipcss0-18-314-315">
                                                  {subSection.sectionTitle}
                                                </span>
                                              </span>
                                            </header>

                                            {/* Complex table for Standard Events */}
                                            {subSection.sectionTitle ===
                                              "Standard Events" && (
                                              <table
                                                style={{
                                                  borderCollapse: "collapse",
                                                }}
                                              >
                                                <thead
                                                  style={{
                                                    backgroundColor: "#f6f7f9",
                                                    marginBottom: "10px",
                                                  }}
                                                >
                                                  <tr>
                                                    {subSection.tableHeaders.map(
                                                      (header, idx) => (
                                                        <th
                                                          style={{
                                                            paddingRight:
                                                              "15px",
                                                            paddingLeft: "8px",
                                                            paddingTop: "15px",
                                                            paddingBottom:
                                                              "15px",
                                                            fontSize: "13px",
                                                          }}
                                                          key={idx}
                                                        >
                                                          {header}
                                                        </th>
                                                      )
                                                    )}
                                                  </tr>
                                                </thead>
                                                <br />
                                                <tbody>
                                                  {subSection.tableData.map(
                                                    (row, rowIndex) => (
                                                      <tr
                                                        style={{
                                                          paddingLeft: "10px",
                                                        }}
                                                        key={rowIndex}
                                                      >
                                                        <td
                                                          style={{
                                                            paddingLeft: "12px",
                                                            fontSize: "14px",
                                                          }}
                                                        >
                                                          {row.metric}
                                                        </td>
                                                        {row.values.map(
                                                          (
                                                            metric,
                                                            metricIdx
                                                          ) => (
                                                            <td
                                                              style={{
                                                                paddingLeft:
                                                                  "12px",
                                                                paddingBottom:
                                                                  "8px",
                                                              }}
                                                              key={metricIdx}
                                                            >
                                                              <CustomCheckbox
                                                                checked={selectedValues.includes(
                                                                  metric
                                                                )} // Determine if the checkbox is checked
                                                                onChange={() =>
                                                                  handleCheckboxChange(
                                                                    null,
                                                                    metric,
                                                                    false,
                                                                    subSection
                                                                      .tableHeaders[
                                                                      metricIdx +
                                                                        1
                                                                    ],
                                                                    row.metric
                                                                  )
                                                                }
                                                              />
                                                            </td>
                                                          )
                                                        )}
                                                      </tr>
                                                    )
                                                  )}
                                                </tbody>
                                              </table>
                                            )}

                                            {/* Regular attributes for other sections */}
                                            {subSection.attributes &&
                                              subSection.attributes.map(
                                                (attr, idx) => (
                                                  <span class="snipcss0-17-112-113">
                                                    <li
                                                      style={{
                                                        listStyleType: "none",
                                                        textAlign: "left",
                                                      }}
                                                      class="_2jin"
                                                      tabindex="0"
                                                      data-mouseoverable="1"
                                                      id="js_1sq"
                                                    >
                                                      <div
                                                        className="mainitemkamila"
                                                        class="_2jip _3qn7 _61-0 _2fyi _3qnf snipcss0-19-114-115"
                                                      >
                                                        <label
                                                          style={{
                                                            textAlign: "left",

                                                            width: "100%",
                                                          }}
                                                          class="_1gcq _29c- snipcss0-20-115-116 style-CbcRG"
                                                          data-tooltip-alignh="center"
                                                          id="style-CbcRG"
                                                        >
                                                          <span
                                                            style={{
                                                              display: "flex",
                                                              alignItems:
                                                                "center",
                                                            }}
                                                            className="internalsupan"
                                                            class="_1gcr snipcss0-21-116-119"
                                                            id="js_vv"
                                                          >
                                                            {/* kamila he ana  */}
                                                            <input
                                                              type="hidden" // Hide the default checkbox
                                                              checked={selectedValues.includes(
                                                                attr.value
                                                              )}
                                                              onChange={() =>
                                                                handleCheckboxChange(
                                                                  null,
                                                                  attr.value,
                                                                  false
                                                                )
                                                              }
                                                            />
                                                            <CustomCheckbox
                                                              checked={selectedValues.includes(
                                                                attr.value
                                                              )} // Pass checked state
                                                              onChange={() =>
                                                                handleCheckboxChange(
                                                                  null,
                                                                  attr.value,
                                                                  false
                                                                )
                                                              } // Pass the change handler
                                                            />

                                                            <span
                                                              style={{
                                                                marginLeft:
                                                                  "8px",

                                                                width: "100%",
                                                              }}
                                                              class="snipcss0-22-119-120 style-j164n"
                                                              id="style-j164n"
                                                            >
                                                              {attr.title}
                                                            </span>
                                                          </span>
                                                        </label>
                                                      </div>
                                                    </li>
                                                    <div class="snipcss0-18-113-125"></div>
                                                  </span>
                                                )
                                              )}
                                          </div>
                                        )
                                      )}
                                    {index !== data.length - 1 && <hr />}
                                  </div>
                                ))}
                                <div
                                  class="_1t0r _1t0s _4jdr snipcss0-12-102-3612 style-Qjfhk"
                                  tabindex="0"
                                  id="style-Qjfhk"
                                >
                                  <div
                                    class="_1t0w _1t0z _1t0_ snipcss0-13-3612-3613 style-TAKY5"
                                    id="style-TAKY5"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="_t5- _4bl7 snipcss0-10-18-3614">
                              <div class="_t5u snipcss0-11-3614-3615">
                                <div class="_t5v _2pib snipcss0-12-3615-3616">
                                  <div
                                    class="_3-8- _3-96 snipcss0-13-3616-3617 style-KhPqZ"
                                    id="style-KhPqZ"
                                  >
                                    <div class="snipcss0-14-3617-3618">
                                      {selectedValues.length} columns selected
                                    </div>
                                  </div>
                                  <ul>
                                    {selectedValues.map((value, index) => (
                                      <li
                                        class="_6qr6 snipcss0-14-3619-3712"
                                        id="cost_per_result"
                                      >
                                        <ul
                                          style={{ textAlign: "left" }}
                                          class="snipcss0-15-3712-3713"
                                        >
                                          <li class="_6qr8 snipcss0-16-3713-3714">
                                            <div class="_58zo _58z_ _58-8 _23n- snipcss0-17-3714-3715">
                                              <div class="_6qrm snipcss0-18-3715-3716">
                                                <span
                                                  class="snipcss0-19-3716-3717 style-g6SvI"
                                                  id="style-g6SvI"
                                                >
                                                  {value}
                                                </span>
                                              </div>
                                              <div class="_32rk _32rg _32ri _32rj snipcss0-18-3715-3718">
                                                <div class="_3bwv snipcss0-19-3718-3719">
                                                  <div class="_3bwy snipcss0-20-3719-3720">
                                                    <div class="_3bwx snipcss0-21-3720-3721">
                                                      <div class="_6qrn snipcss0-22-3721-3722"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="_58zn _32rk _32rg _32ri _32rj snipcss0-18-3715-3723"
                                                data-clickable="1"
                                              ></div>
                                              <span class="_6qf3 _32rk _32rh _32ri _32rj snipcss0-18-3715-3724">
                                                <button
                                                  onClick={() =>
                                                    handleRemoveItem(value)
                                                  }
                                                  class="_42d_ _32qq _3n5r snipcss0-19-3724-3725 style-yzUnj"
                                                  type="button"
                                                  id="style-yzUnj"
                                                >
                                                  <span class="accessible_elem snipcss0-20-3725-3726">
                                                    Close
                                                  </span>
                                                  <span
                                                    aria-hidden="true"
                                                    class="_3n5s snipcss0-20-3725-3727 style-CPFAN"
                                                    id="style-CPFAN"
                                                  >
                                                    <i
                                                      size="12"
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img snipcss0-21-3727-3728 style-SxWNG"
                                                      id="style-SxWNG"
                                                    ></i>
                                                  </span>
                                                </button>
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                  <div class="snipcss0-13-3616-3984"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <div
                      font-size="medium"
                      class="_5a8u _5lnf uiOverlayFooter snipcss0-6-7-3985"
                    >
                      <div font-size="medium" class="snipcss0-7-3985-3986">
                        <div class="clearfix snipcss0-8-3986-3987">
                          <div class="_ohe snipcss0-9-3987-3988">
                            <div class="snipcss0-10-3988-3989">
                              <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 snipcss0-11-3989-3990">
                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-12-3990-3991">
                                  <div
                                    class="x78zum5 x1emribx uiInputLabel clearfix snipcss0-13-3991-3992"
                                    display="block"
                                  >
                                    <button
                                      aria-checked="false"
                                      aria-disabled="false"
                                      class="_1gcq _29c- _1gco _5e9w snipcss0-14-3992-3993 style-KA8V9"
                                      id="js_11x"
                                      role="checkbox"
                                      type="button"
                                    >
                                      <i
                                        aria-hidden="true"
                                        class="_3w08 accessible_elem monochrome img snipcss0-15-3993-3994 style-cnNyL"
                                        alt=""
                                        data-visualcompletion="css-img"
                                        id="style-cnNyL"
                                      ></i>
                                    </button>
                                    <label
                                      class="uiInputLabelLabel snipcss0-14-3992-3995"
                                      for="js_11x"
                                    >
                                      Save as a column preset
                                    </label>
                                  </div>
                                  <span
                                    class="_36g4 _4yei xlshs6z x1n2onr6 _58ah snipcss0-13-3991-3996 style-cFXnI"
                                    placeholder="Type a name"
                                    errortooltipposition="above"
                                    borderedsides="top,right,bottom,left"
                                    autocomplete="off"
                                    autocorrect="off"
                                    id="js_vp"
                                  >
                                    <label class="_58ak _3ct8 snipcss0-14-3996-3997">
                                      <input
                                        class="_58al snipcss0-15-3997-3998 style-Vvawt"
                                        aria-autocomplete="list"
                                        aria-controls="js_vn"
                                        aria-haspopup="listbox"
                                        aria-expanded="false"
                                        role="combobox"
                                        placeholder="Type a name"
                                        autocomplete="off"
                                        autocorrect="off"
                                        type="text"
                                        value=""
                                        id="style-Vvawt"
                                      />
                                    </label>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="_ohf snipcss0-9-3987-3999">
                            <div class="snipcss0-10-3999-4000">
                              <div
                                class="snipcss0-11-4000-4001 style-PmmRW"
                                id="style-PmmRW"
                              >
                                <div
                                  class="snipcss0-12-4001-4002 style-G8CJP"
                                  id="style-G8CJP"
                                >
                                  <button
                                    type="button"
                                    aria-disabled="false"
                                    class="_271k _271m _1qjd layerCancel _ai7j _ai7k _ai7m snipcss0-13-4002-4003 style-PoAoB"
                                    id="style-PoAoB"
                                  >
                                    <div class="_43rl snipcss0-14-4003-4004">
                                      <div
                                        data-hover="tooltip"
                                        data-tooltip-display="overflow"
                                        class="_43rm snipcss0-15-4004-4005"
                                      >
                                        Cancel
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div
                                  class="snipcss0-12-4001-4006 style-a3jUd"
                                  id="style-a3jUd"
                                >
                                  <span
                                    class="snipcss0-13-4006-4007"
                                    data-tracked="true"
                                    data-clickable="1"
                                  >
                                    <button
                                      type="button"
                                      aria-disabled="false"
                                      class="_271k _271m _1qjd layerConfirm _ai7j _ai7k _ai7m snipcss0-14-4007-4008 style-kKnrS"
                                      id="style-kKnrS"
                                    >
                                      <div class="_43rl snipcss0-15-4008-4009">
                                        <div
                                          onClick={handleapplybutton}
                                          data-hover="tooltip"
                                          data-tooltip-display="overflow"
                                          class="_43rm snipcss0-16-4009-4010"
                                        >
                                          Apply
                                        </div>
                                      </div>
                                    </button>
                                  </span>
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
        </div>
      )}
    </div>
  );
};

export default App;
