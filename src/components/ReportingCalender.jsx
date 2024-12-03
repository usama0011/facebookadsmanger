import React, { useState } from "react";
import "../styles/ReportingCalendar.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const ReportingCalendar = () => {
  const [selectedPreset, setSelectedPreset] = useState("Maximum");
  // Array of presets
  const presets = [
    "Maximum",
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 14 days",
    "Last 30 days",
    "This week",
    "Last week",
    "This month",
    "Last month",
    "This quarter",
    "Last quarter",
    "This Year",
    "Last Year",
    "Custom",
  ];
  const getFirstDayOfMonth = () =>
    new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const getLastDayOfMonth = () =>
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

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

  const handleDayMouseEnter = (date) => setHoverDate(date);

  const handlePrevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );

  const handleNextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();

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
      const isFutureDate = currentDate > today;

      days.push(
        <div
          key={day}
          className={`day ${isInRange ? "in-range" : ""} ${
            isSelectedStart ? "selected-start" : ""
          } ${isSelectedEnd ? "selected-end" : ""} ${
            isHovering ? "hover" : ""
          } ${isFutureDate ? "disabled" : ""}`}
          onClick={() => handleDayClick(currentDate)}
          onMouseEnter={() => handleDayMouseEnter(currentDate)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const formatDate = (date) =>
    date?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="reporting-calendar mybackgoddd">
      <div className="sidebar">
        <div className="radio-buttons">
          {presets.map((preset, index) => (
            <label
              style={{
                fontWeight: "normal",
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <input
                type="radio"
                style={{ width: "20px", height: "20px" }}
                name="preset"
                value={preset}
                checked={selectedPreset === preset}
                onChange={() => setSelectedPreset(preset)}
              />
              <span style={{ marginLeft: "5px", whiteSpace: "nowrap" }}>
                {preset}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="" style={{ paddingTop: "20px" }}>
        <div className="calendars-container">
          <div className="calendar">
            <div className="calendar-header">
              <button
                onClick={handlePrevMonth}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronLeftIcon
                  style={{ width: "22px", height: "22px", color: "gray" }}
                />
              </button>
              <div>
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <button
                onClick={handleNextMonth}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronRightIcon
                  style={{ width: "22px", height: "22px", color: "gray" }}
                />
              </button>
            </div>
            {/* Weekday Row */}
            <div className="weekday-headers">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div
                    key={index}
                    className="weekday"
                    style={{
                      fontWeight: "normal",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    {day}
                  </div>
                )
              )}
            </div>
            <div className="calendar-grid yarachagehere">
              {renderCalendar(currentMonth)}
            </div>
          </div>
          <div className="calendar">
            <div className="calendar-header">
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                ).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <button
                onClick={handleNextMonth}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <ChevronRightIcon
                  style={{ width: "22px", height: "22px", color: "gray" }}
                />
              </button>
            </div>
            {/* Weekday Row */}
            <div className="weekday-headers">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div
                    key={index}
                    className="weekday"
                    style={{
                      fontWeight: "normal",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    {day}
                  </div>
                )
              )}
            </div>
            {/* Calendar Dates */}
            <div className="calendar-grid yarachagehere">
              {renderCalendar(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                )
              )}
            </div>
          </div>
        </div>
        {/* optoins div */}
        <div style={{ marginTop: "10px" }}>
          <div className="options">
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                style={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid gainsboro",
                }}
                type="checkbox"
              />
              Compare
            </label>

            <br />
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <select
                style={{
                  width: "45%",
                  height: "40px",
                  outline: "none",
                  border: "1px solid gainsboro",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                }}
              >
                <option>Maximum</option>
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
                <option>Last 14 days</option>
                <option>Last 30 days</option>
                <option>This week</option>
                <option>Last week</option>
                <option>This month</option>
                <option>Last month</option>
                <option>This quarter</option>
                <option>Last quarter</option>
              </select>
              <div
                className="date-range"
                style={{
                  width: "55%",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <input
                  value="1 November"
                  readOnly
                  style={{
                    width: "100%",
                    height: "35px",
                    outline: "none",
                    border: "1px solid gainsboro",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                  }}
                />
                <input
                  value="30 November"
                  readOnly
                  style={{
                    width: "100%",
                    height: "35px",
                    outline: "none",
                    border: "1px solid gainsboro",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                  }}
                />
              </div>
            </div>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "gray" }}>
                Dates are shown in Karachi time
              </div>
              <div className="footer-buttons">
                <button
                  className="cancel-btn"
                  style={{
                    background: "transparent",
                    border: "1px solid gainsboro",
                  }}
                >
                  Cancel
                </button>
                <button className="update-btn">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingCalendar;
