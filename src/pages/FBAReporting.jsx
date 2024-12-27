import React, { useEffect, useState } from "react";
import { Table, Button, Upload } from "antd";
import "../styles/FBAReporting.css";
import axios from "axios";

const FBAReporting = ({ selectedMetrics }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  const calculateRowSpan = (data, rowIndex, key) => {
    if (
      rowIndex === 0 ||
      JSON.stringify(data[rowIndex][key]) !==
        JSON.stringify(data[rowIndex - 1][key]) ||
      data[rowIndex][key] === "All"
    ) {
      let rowSpan = 1;
      for (let i = rowIndex + 1; i < data.length; i++) {
        if (
          JSON.stringify(data[i][key]) ===
            JSON.stringify(data[rowIndex][key]) &&
          data[rowIndex][key] !== "All"
        ) {
          rowSpan++;
        } else {
          break;
        }
      }
      return rowSpan;
    }
    return 0; // Hide duplicate rows
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://facebookadsmangerserver.vercel.app/api/reporting/get-data"
      );
      setLoading(false);
      const csvData = response.data
        .map((row) => {
          if (
            row["Ad Creative"] &&
            typeof row["Ad Creative"] === "string" &&
            row["Ad Creative"].trim().startsWith("{")
          ) {
            try {
              const adCreative = JSON.parse(row["Ad Creative"]);
              row["Ad Creative"] = (
                <div className="ad-creative">
                  <div>
                    {adCreative.image && (
                      <img
                        src={adCreative.image}
                        alt={adCreative.title || "Ad Creative"}
                        style={{
                          width: "60px",
                          height: "60px",
                          marginRight: "5px",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: "bold" }}>
                      {adCreative.title || "No Title"}
                    </span>
                    <span>
                      {adCreative.description
                        ? adCreative.description.length > 28
                          ? adCreative.description.slice(0, 28) + "..."
                          : adCreative.description
                        : "No Description"}
                    </span>
                    <span style={{ color: "#8d949e" }}>
                      {adCreative.adText || "No Ad Text"}
                    </span>
                  </div>
                </div>
              );
              row[
                "Ad Creative Key"
              ] = `${adCreative.title}-${adCreative.description}`;
            } catch (error) {
              console.error("Invalid Ad Creative JSON:", row["Ad Creative"]);
              row["Ad Creative"] = "Invalid Ad Creative Data";
              row["Ad Creative Key"] = "Invalid Ad Creative Data";
            }
          } else {
            row["Ad Creative Key"] = row["Ad Creative"];
          }

          return row;
        })
        .filter((row) =>
          Object.values(row).some(
            (value) => value !== "—" && value !== 0 && value !== "All"
          )
        );

      const updatedColumns = Object.keys(csvData[0] || {})
        .filter(
          (key) =>
            key !== "Page ID" &&
            key !== "_id" &&
            key !== "Entry Date" &&
            key !== "__v" &&
            key !== "Ad Creative Key"
        )
        .map((key) => ({
          title: (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start", // Align items to the top
                justifyContent: "flex-start", // Align items horizontally to the start
                minWidth: "120px",
                minHeight: "50px",
              }}
            >
              <div class="x1vjfegm xsgj6o6 x1gslohp">
                <div class="_3qn7 _61-0 _2fyh _3qnf">
                  <div class="_3qn7 _61-0 _2fyi _3qnf">
                    <div
                      role="columnheader"
                      tabindex="-1"
                      data-interactable="|mouseover|"
                    >
                      <span
                        aria-level="2"
                        class="x1xqt7ti xm46was x1jrz1v4 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli"
                        role="heading"
                      >
                        <div class="_90u_ style-rFHj4" id="style-rFHj4">
                          <div class="_4ik4 _4ik5 style-qAlZS" id="style-qAlZS">
                            <div id="style-zqMp6" class="style-zqMp6">
                              {key}
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                </div>
              </div>
              <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                <div class="x1gryazu xxk0z11">
                  <div>
                    <button
                      aria-pressed="false"
                      type="button"
                      aria-disabled="false"
                      class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-X4qQs"
                      id="style-X4qQs"
                    >
                      <div class="_43rl">
                        <i
                          aria-hidden="true"
                          class="_271o img style-DgV47"
                          alt=""
                          data-visualcompletion="css-img"
                          id="style-DgV47"
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
          ),
          dataIndex: key,
          key,
          width:
            key === "Page Name"
              ? 150
              : key === "Campaign Name"
              ? 230
              : key === "Ad Set Name"
              ? 230
              : key === "Ad Name"
              ? 230
              : key === "Ad Creative"
              ? 300
              : key === "Placement"
              ? 180
              : key === "Amount Spent"
              ? 150
              : key === "Impression Device"
              ? 240
              : key === "Link Clicks"
              ? 150
              : 200,
          onCell: (record, rowIndex) => {
            if (
              [
                "Page Name",
                "Campaign Name",
                "Ad Set Name",
                "Ad Name",
                "Ad Creative",
                "Impression Device",
              ].includes(key)
            ) {
              const spanKey = key === "Ad Creative" ? "Ad Creative Key" : key;
              return {
                rowSpan: calculateRowSpan(csvData, rowIndex, spanKey),
              };
            }
            return {};
          },
          render: (value, record, index) => {
            if (key === "Page Name") {
              return <div style={{ color: "#1c2b33" }}>{value}</div>;
            }
            if (key === "Campaign Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Ad Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Ad Set Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Impression Device") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Placement") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Amount Spent") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Reach") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Results") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Link Clicks") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Ad Creative") {
              return (
                <div
                  style={{
                    width: "280px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {value}
                </div>
              );
            }

            if (key === "Ad Creative") {
              const rowSpan = calculateRowSpan(
                csvData,
                index,
                "Ad Creative Key"
              );
              if (rowSpan === 0) return null; // Hide duplicates
              if (record[key] === "All") return "All"; // Show "All" explicitly
            }

            if (
              [
                "Page Name",
                "Campaign Name",
                "Ad Set Name",
                "Ad Name",
                "Impression Device",
              ].includes(key)
            ) {
              const rowSpan = calculateRowSpan(csvData, index, key);
              if (rowSpan === 0) return null; // Hide duplicates
            }
            return value !== undefined && value !== null ? value : "—";
          },
        }));

      setData(csvData);
      setColumns(updatedColumns);
    } catch (error) {}
  };

  const calculateSummary = (data) => {
    const totals = {
      "Amount Spent": 0,
      Impressions: 0,
      Reach: 0,
      Results: 0,
      "Link Clicks": 0,
    };
    data.forEach((row) => {
      totals["Amount Spent"] += row["Amount Spent"] || 0;
      totals.Impressions += row.Impressions || 0;
      totals.Reach += row.Reach || 0;
      totals.Results += row.Results || 0;
      totals["Link Clicks"] += row["Link Clicks"] || 0;
    });
    return totals;
  };

  const summary = calculateSummary(data);
  const getRowClassName = (record, index) => {
    // Check if the row is the first for a specific "Page Name"
    const isFirstRowForPageName =
      index ===
      data.findIndex((row) => row["Page Name"] === record["Page Name"]);

    // Apply a unique class only for the first row
    return isFirstRowForPageName ? "highlight-first-cell-row" : "";
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="testmyreproing">
      <Table
        dataSource={data}
        columns={columns}
        bordered
        loading={loading}
        pagination={false}
        rowKey={(record, index) => index}
        scroll={{ y: 555 }} // Adds vertical scroll
        sticky // Makes the table headers sticky
        rowClassName={getRowClassName}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              {columns.map((col, index) => {
                if (col.dataIndex === "Page Name") {
                  return (
                    <Table.Summary.Cell key={index} index={index}>
                      <div>
                        <div className="_2pi7">
                          <div className="_68tl style-BF6vh" id="style-BF6vh">
                            <div className="_2eqm style-msgLz" id="style-msgLz">
                              <div className="_2eqm _3qn7 _61-0 _2fyi _3qng">
                                <div className="_3qn7 _61-0 _2fyh _3qnf">
                                  <div className="_3qn7 _61-0 _2fyi _3qng">
                                    <div className="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli">
                                      Total results
                                    </div>
                                  </div>
                                  <div className="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                    56/56 rows displayed
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Table.Summary.Cell>
                  );
                }
                if (col.dataIndex === "Amount Spent") {
                  return (
                    <Table.Summary.Cell
                      style={{ border: "none" }}
                      key={index}
                      index={index}
                    >
                      <div class="_e9n">
                        <div class="">
                          <div
                            geotextcolor="value"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                            data-tooltip-text-direction="auto"
                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                          >
                            <span class="_3dfi _3dfj">$75,087</span>
                          </div>
                          <div
                            class="ellipsis _1ha4"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                            data-tooltip-text-direction="auto"
                          >
                            <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                              Total Spent
                            </div>
                          </div>
                        </div>
                      </div>
                    </Table.Summary.Cell>
                  );
                }

                return (
                  <Table.Summary.Cell key={index} index={index}>
                    {summary[col.dataIndex] !== undefined
                      ? summary[col.dataIndex].toFixed(2)
                      : ""}
                  </Table.Summary.Cell>
                );
              })}
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </div>
  );
};

export default FBAReporting;