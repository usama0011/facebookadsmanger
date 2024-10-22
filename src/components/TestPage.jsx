import "../styles/Test.css";
import React, { useState } from "react";

const TestPage = () => {
  // State to track checked values
  const [selectedValues, setSelectedValues] = useState([]);

  // Updated Data structure for the table sections
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
          ],
        },
        {
          sectionTitle: "Ad Relevance Diagnostics",
          attributes: [
            { title: "Quality Ranking", value: "Quality Ranking" },
            { title: "Engagement Ranking", value: "Engagement Ranking" },
          ],
        },
        {
          sectionTitle: "Cost",
          attributes: [
            { title: "Cost Per Result", value: "Cost Per Result" },
            {
              title: "Cost Per 1,000 Accounts",
              value: "Cost Per 1,000 Accounts",
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
            { title: "Page Engagement", value: "Page Engagement" },
            { title: "Follows or Likes", value: "Follows or Likes" },
            { title: "Join Group Request", value: "Join Group Request" },
          ],
        },
        {
          sectionTitle: "Calling",
          attributes: [
            {
              title: "Estimated Call Confirmation",
              value: "Estimated Call Confirmation",
            },
            { title: "Callback Requests", value: "Callback Requests" },
          ],
        },
        {
          sectionTitle: "Messaging",
          attributes: [
            { title: "New Messaging", value: "New Messaging" },
            { title: "Blocks", value: "Blocks" },
            { title: "Messaging", value: "Messaging" },
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
            { title: "Account Name", value: "Account Name" },
          ],
        },
        {
          sectionTitle: "Status and Dates",
          attributes: [
            { title: "Date Created", value: "Date Created" },
            { title: "Date Last Edited", value: "Date Last Edited" },
          ],
        },
        {
          sectionTitle: "Goal, Budget & Schedule",
          attributes: [
            { title: "Objective", value: "Objective" },
            { title: "Buying Type", value: "Buying Type" },
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
  ];

  // Function to handle checking/unchecking checkboxes
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

  return (
    <div
      className="table-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Side Titles */}
      <div className="left-side">
        {data.map((section, index) => (
          <div key={index} className="section">
            <h4>{section.sectionTitle}</h4>
            {section.subSections &&
              section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="sub-section">
                  <h5>{subSection.sectionTitle}</h5>
                </div>
              ))}
            <hr />
          </div>
        ))}
      </div>

      {/* Center Section with checkboxes */}
      <div className="center-section">
        {data.map((section, index) => (
          <div key={index} className="section">
            <header
              style={{ textAlign: "left" }}
              class="_28r6 snipcss0-15-105-106"
            >
              <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-16-106-107">
                <button
                  aria-checked="mixed"
                  aria-disabled="false"
                  class="_1gcq _29c- _3-90 _1gco _5e9w snipcss0-17-107-108 style-zUBVP"
                  role="checkbox"
                  type="button"
                  id="style-zUBVP"
                >
                  <i
                    aria-hidden="true"
                    class="_3w08 monochrome img snipcss0-18-108-109 style-hZmJs"
                    alt=""
                    data-visualcompletion="css-img"
                    id="style-hZmJs"
                  ></i>
                </button>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(section, null, true)}
                />
                <label>{section.sectionTitle}</label>
              </div>
            </header>

            {/* Display subSections */}
            {section.subSections &&
              section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="sub-section">
                  <h5>{subSection.sectionTitle}</h5>

                  {/* Complex table for Standard Events */}
                  {subSection.sectionTitle === "Standard Events" && (
                    <table>
                      <thead>
                        <tr>
                          {subSection.tableHeaders.map((header, idx) => (
                            <th key={idx}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {subSection.tableData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td>{row.metric}</td>
                            {row.values.map((metric, metricIdx) => (
                              <td key={metricIdx}>
                                <input
                                  type="checkbox"
                                  checked={selectedValues.includes(metric)}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      null,
                                      metric,
                                      false,
                                      subSection.tableHeaders[metricIdx + 1],
                                      row.metric
                                    )
                                  }
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Regular attributes for other sections */}
                  {subSection.attributes &&
                    subSection.attributes.map((attr, idx) => (
                      <span class="snipcss0-17-112-113">
                        <li
                          class="_2jin"
                          tabindex="0"
                          data-mouseoverable="1"
                          id="js_1sq"
                        >
                          <div class="_2jip _3qn7 _61-0 _2fyi _3qnf snipcss0-19-114-115">
                            <label
                              style={{ textAlign: "left" }}
                              class="_1gcq _29c- snipcss0-20-115-116 style-CbcRG"
                              data-tooltip-alignh="center"
                              id="style-CbcRG"
                            >
                              <span
                                class="_1gcr snipcss0-21-116-119"
                                id="js_vv"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedValues.includes(attr.value)}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      null,
                                      attr.value,
                                      false
                                    )
                                  }
                                />
                                <span
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
                    ))}
                </div>
              ))}
            <hr />
          </div>
        ))}
      </div>

      {/* Right Side to display selected values */}
      <div className="right-side">
        <h3>Selected Metrics:</h3>
        <ul>
          {selectedValues.map((value, index) => (
            <li key={index}>
              {value}{" "}
              <button onClick={() => handleRemoveItem(value)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
<li class="_6qr6 snipcss0-14-3619-3712" id="cost_per_result">
  <ul style={{ textAlign: "left" }} class="snipcss0-15-3712-3713">
    <li class="_6qr8 snipcss0-16-3713-3714">
      <div class="_58zo _58z_ _58-8 _23n- snipcss0-17-3714-3715">
        <div class="_6qrm snipcss0-18-3715-3716">
          <span class="snipcss0-19-3716-3717 style-g6SvI" id="style-g6SvI">
            Cost per result
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
            class="_42d_ _32qq _3n5r snipcss0-19-3724-3725 style-yzUnj"
            type="button"
            id="style-yzUnj"
          >
            <span class="accessible_elem snipcss0-20-3725-3726">Close</span>
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
</li>;
