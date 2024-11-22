import React from "react";
import "../styles/Table.css";
const SimpleTable = ({ startDate, endDate }) => {
  const renderContent = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if the month is October
    if (
      start >= new Date("2024-10-01T00:00:00+0500") &&
      end <= new Date("2024-10-31T23:59:59+0500")
    ) {
      return (
        <div>
          {/* October content */}

          <div className="table-container" style={{ position: "relative" }}>
            {/* Six Campaing Octobor */}
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ minWidth: "150px", backgroundColor: "white" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>

                  <th style={{ minWidth: "160px", backgroundColor: "white" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "184px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "159px" }}>$33.49</td>
                  <td style={{ minWidth: "130px" }}>152</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$33.49</td>
                  <td>152</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$33.49</td>
                  <td>152</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$33.49</td>
                  <td>152</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/BN7zWVL/Whats-App-Image-2024-11-21-at-1-17-11-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$6.42</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.85</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$5.15</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.001</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$22.74</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1.11$</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$20.82</td>
                  <td>92</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.75</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.5</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$0.08</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.07</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$3.24</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.28</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$2.78</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.01</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.16</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$0.03</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.01</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.01</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
            {/* Campaings seven october */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="34" style={{ minWidth: "150px" }}>
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "231px" }}>All</td>
                  <td style={{ minWidth: "229px" }}>All</td>

                  <td style={{ minWidth: "159px" }}>$4,398</td>
                  <td style={{ minWidth: "130px" }}>25,673</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$4,398</td>
                  <td>25,673</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$4,398</td>
                  <td>25,673</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$4,398</td>
                  <td>25,673</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/fGgmYF6/Whats-App-Image-2024-11-21-at-1-17-27-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$540.4</td>
                  <td>3,153.94</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$87.63</td>
                  <td>511</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$175.26</td>
                  <td>1,023</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$183</td>
                  <td>1,066</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$95</td>
                  <td>554</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$1,157.04</td>
                  <td>5,888.04</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$187.68</td>
                  <td>954</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$375.23</td>
                  <td>1910</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$391</td>
                  <td>1,990</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$203.25</td>
                  <td>1,035</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$4.55</td>
                  <td>27.68</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.73</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1.47</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1.53</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.8</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$1,509.24</td>
                  <td>8,333.94</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$244.74</td>
                  <td>1,351</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$489.48</td>
                  <td>2,703</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$509.88</td>
                  <td>2,816</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$265.14</td>
                  <td>1,464</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$11.72</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1.9</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$3.2</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$3.96</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>2.06</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
            {/* Campaign Eight October */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "184px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "159px" }}>$7,190.11</td>
                  <td style={{ minWidth: "130px" }}>19,429</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$7,190.11</td>
                  <td>19,429</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$7,190.11</td>
                  <td>19,429</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$7,190.11</td>
                  <td>19,429</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/4pSBQWC/Whats-App-Image-2024-11-21-at-1-17-59-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-59-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$781.02</td>
                  <td>2,109.76</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$126.65</td>
                  <td>342</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$253.30</td>
                  <td>684</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$264</td>
                  <td>713</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$137</td>
                  <td>371</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$1,891.5</td>
                  <td>5,145.9</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$306.73</td>
                  <td>834</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$613.46</td>
                  <td>1,669</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$639</td>
                  <td>1,739</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$332.29</td>
                  <td>904</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$1,467.4</td>
                  <td>6,638</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$400.12</td>
                  <td>1,076</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$800.24</td>
                  <td>2,153</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$833.58</td>
                  <td>2,243</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$533.46</td>
                  <td>1166</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$19.15</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$3.11</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$6.21</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$6.47</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$3.36</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            {/* Nine Campaing Octobr  */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "160px" }}>$6,549.98</td>
                  <td style={{ minWidth: "132px" }}>23,330</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad M...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$6,549.98</td>
                  <td>23,330</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$6,549.98</td>
                  <td>23,330</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad M...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$6,549.98</td>
                  <td>23,330</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/zrTctLR/Whats-App-Image-2024-11-21-at-1-16-25-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$857.21</td>
                  <td>3,052</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$139.08</td>
                  <td>495</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$278.08</td>
                  <td>990</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$289.60</td>
                  <td>1,032</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$150.51</td>
                  <td>536</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$1,723.1</td>
                  <td>6,138</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$279.42</td>
                  <td>995</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$558.84</td>
                  <td>1,991</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$582.13</td>
                  <td>2,074</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$302.71</td>
                  <td>1,078</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$1.04</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.17</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$0.34</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.35</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.18</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$2,247.73</td>
                  <td>8,005</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$364.50</td>
                  <td>1,298</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$728.99</td>
                  <td>2,596</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$759.37</td>
                  <td>2,705</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$394.87</td>
                  <td>416</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$17.45</td>
                  <td>62</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$2.83</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$5.66</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$5.89</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$3.07</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
            {/* Ten Campaing Octobr */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "159px" }}>$5,098</td>
                  <td style={{ minWidth: "133px" }}>24,423</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$5,098</td>
                  <td>24,423</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$5,098</td>
                  <td>24,423</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$5,098</td>
                  <td>24,423</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/X8yXMZq/Whats-App-Image-2024-11-21-at-1-17-43-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$528</td>
                  <td>2,670</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$86</td>
                  <td>433</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$171</td>
                  <td>866</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$178</td>
                  <td>903</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$93</td>
                  <td>469</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$1,207.21</td>
                  <td>5,901</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$195.76</td>
                  <td>957</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$391.53</td>
                  <td>1,914</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$407.84</td>
                  <td>1,994</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$212.08</td>
                  <td>1,037</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$2.26</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.37</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$0.73</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.76</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.40</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$1,660</td>
                  <td>8,113</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$269</td>
                  <td>1,316</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$538</td>
                  <td>2,631</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$561</td>
                  <td>2,741</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$292</td>
                  <td>1,425</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$6</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$2</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$2</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$1</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                position: "fixed",
                top: "870px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "white",
                left: "0",
                marginLeft: "81px",
                width: "74.9%",
                height: "70px",
                zIndex: "999",
                boxShadow:
                  "rgba(60, 64, 67, 0.2) 0px -1px 1px 0px, rgba(60, 64, 67, 0.1) 0px -1px 4px 1px",
              }}
            >
              {renderFooter()}
            </div>
          </div>
        </div>
      );
    }
    // Check if the month is September
    else if (
      start >= new Date("2024-09-01T00:00:00+0500") &&
      end <= new Date("2024-09-30T23:59:59+0500")
    ) {
      return (
        <div>
          {/* September content */}

          <div className="table-container">
            {/* First campaing data sepetember */}
            <table className="custom-table">
              <thead style={{ backgroundColor: "white" }}>
                <tr style={{ backgroundColor: "white" }}>
                  <th style={{ minWidth: "150px", backgroundColor: "white" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>

                  <th style={{ minWidth: "160px", backgroundColor: "white" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px", backgroundColor: "white" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="34">Emrys Technologies</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$31.2</td>
                  <td>149</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$31.2</td>
                  <td>149</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$31.2</td>
                  <td>149</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Bathroom - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$31.2</td>
                  <td>149</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/BN7zWVL/Whats-App-Image-2024-11-21-at-1-17-11-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$7.61</td>
                  <td>3,439</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.82</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$6.37</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.36</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.064</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$18.36</td>
                  <td>234</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.73$</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$16.88</td>
                  <td>173</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.67</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.08</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$0.17</td>
                  <td>342</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.02</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$0.14</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.00</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$3.29</td>
                  <td>380</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.17</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$3.02</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.00</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$0.09</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$0.24</td>
                  <td>389</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$0.11</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$0.12</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$0.00</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
              <div
                style={{
                  position: "fixed",
                  top: "870px",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  backgroundColor: "white",
                  left: "0",
                  marginLeft: "81px",
                  width: "74.9%",
                  height: "70px",
                  zIndex: "999",
                  boxShadow:
                    "rgba(60, 64, 67, 0.2) 0px -1px 1px 0px, rgba(60, 64, 67, 0.1) 0px -1px 4px 1px",
                }}
              >
                {renderFooter()}
              </div>
            </table>
            {/* Second Campaings Data Sepember */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "159px" }}>$10,190.12</td>
                  <td style={{ minWidth: "130px" }}>26,540</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$10,190.12</td>
                  <td>26,540</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$10,190.12</td>
                  <td>26,540</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Solar - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$10,190.12</td>
                  <td>26,540</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/fGgmYF6/Whats-App-Image-2024-11-21-at-1-17-27-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$1427.86</td>
                  <td>2734.48</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$214.91</td>
                  <td>443</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$429.86</td>
                  <td>887</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$548.71</td>
                  <td>924</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$234.38</td>
                  <td>480</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$2680.72</td>
                  <td>14036.6</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$434.72</td>
                  <td>2276</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$869.42</td>
                  <td>4552</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$906</td>
                  <td>4,743</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$470.93</td>
                  <td>2466</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$10.56</td>
                  <td>15.36</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1.72</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$3.42</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$3.57</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>1.85</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$3496.89</td>
                  <td>1597.42</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$567.06</td>
                  <td>259</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1,134.13</td>
                  <td>518</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1,181.38</td>
                  <td>540</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$614.32</td>
                  <td>281</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$27.14</td>
                  <td>67.69</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$4.4</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$8.8</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$9.17</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>4.77</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
            {/* Third Campaigs Data */}

            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "158px" }}>$26,302</td>
                  <td style={{ minWidth: "130px" }}>9,103.32</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$26,302</td>
                  <td>9,103.32</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$26,302</td>
                  <td>9,103.32</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Mortgage - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$26,302</td>
                  <td>9,103.32</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/4pSBQWC/Whats-App-Image-2024-11-21-at-1-17-59-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$1080.83</td>
                  <td>3122</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$175.27</td>
                  <td>506</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$350.54</td>
                  <td>1,012</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$365</td>
                  <td>1,055</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$190</td>
                  <td>549</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$2394.97</td>
                  <td>14169</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$388.34</td>
                  <td>2,298</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$776.69</td>
                  <td>4,595</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$809</td>
                  <td>4,787</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$420.7</td>
                  <td>2,489</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$9.42</td>
                  <td>17.36</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1.53</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$3.05</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$3.19</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>1.65</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$3,123.95</td>
                  <td>1,704.9</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$506.59</td>
                  <td>276</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1,013.17</td>
                  <td>553</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1,055.39</td>
                  <td>576</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$548.8</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$24.25</td>
                  <td>31.72</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$3.93</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$7.87</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$8.19</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$4.26</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
            {/* Fouth Campaign Sepetember */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "130px", backgroundColor: "red" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "188px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "160px" }}>$9,871.99</td>
                  <td style={{ minWidth: "130px" }}>27,540</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad M...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$9,871.99</td>
                  <td>27,540</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad M...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$9,871.99</td>
                  <td>27,540</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Home Renovation - Mad M...
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$9,871.99</td>
                  <td>27,540</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/zrTctLR/Whats-App-Image-2024-11-21-at-1-16-25-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$1552.91</td>
                  <td>4692</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$272.75</td>
                  <td>760</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$416.42</td>
                  <td>1,522</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$568</td>
                  <td>1,585</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$295</td>
                  <td>824</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$2597.02</td>
                  <td>12432.76</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$421.13</td>
                  <td>2,016</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$842.29</td>
                  <td>4,032</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$877</td>
                  <td>4,201</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$456.23</td>
                  <td>2,184</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$10.21</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$1.66</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$3.31</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$3.45</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>1.79</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$3,387.72</td>
                  <td>3,173.23</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$549.36</td>
                  <td>514</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1,098.72</td>
                  <td>1,029</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1,144.50</td>
                  <td>1,073</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$595.14</td>
                  <td>558</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$26.29</td>
                  <td>67.96</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$4.26</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$8.53</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$8.88</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$4.62</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
            {/* fifth campaing sepetember */}
            <table className="custom-table">
              <thead style={{ display: "none" }}>
                <tr>
                  <th style={{ minWidth: "150px" }}>
                    <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                      <div
                        style={{ height: "30px" }}
                        class="_68tl style-w3T3I"
                        id="style-w3T3I"
                      >
                        <div class="_2eqm style-iTqdO" id="style-iTqdO">
                          <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-2hzcc"
                                            id="style-2hzcc"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-h6WcA"
                                              id="style-h6WcA"
                                            >
                                              <div
                                                id="style-7icMt"
                                                class="style-7icMt"
                                              >
                                                Page Name
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                        id="style-Mljgm"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-bY7sy"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-bY7sy"
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
                    </div>
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Campaign name
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
                  </th>
                  <th style={{ minWidth: "188px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad set name
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
                  </th>
                  <th style={{ minWidth: "187px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad name
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
                  </th>
                  <th style={{ minWidth: "250px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Ad creative
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impression device
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
                  </th>
                  <th style={{ minWidth: "230px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Placement
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Reach
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
                  </th>
                  <th>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Impressions
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
                  </th>
                  <th>
                    <div class="" id="style-AS2gz">
                      <div
                        class="_4lg9 style-64UIe"
                        role="separator"
                        id="style-64UIe"
                      >
                        <div
                          class="_4lga _4lgb style-XzgXk"
                          id="style-XzgXk"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-QS9YF" id="style-QS9YF">
                          <div class="_2eqm style-wtLUJ" id="style-wtLUJ">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
                                  <div class="x1vjfegm xsgj6o6 x1gslohp">
                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                        <span
                                          aria-expanded="false"
                                          aria-label="information symbol, button, tap for more information"
                                          class="x1emribx"
                                        >
                                          <span>
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tWKjn"
                                              id="style-tWKjn"
                                            ></i>
                                          </span>
                                        </span>
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
                                            <div
                                              class="_90u_ style-cgk2j"
                                              id="style-cgk2j"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-Nysnm"
                                                id="style-Nysnm"
                                              >
                                                <div
                                                  id="style-rpaKB"
                                                  class="style-rpaKB"
                                                >
                                                  Results
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8Odwq"
                                          id="style-8Odwq"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-JmBx2"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JmBx2"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "160px" }}>
                    <div class="" id="style-Y1RG2">
                      <div
                        class="_4lg9 style-7SDkl"
                        role="separator"
                        id="style-7SDkl"
                      >
                        <div
                          class="_4lga _4lgb style-BGiM1"
                          id="style-BGiM1"
                        ></div>
                      </div>
                      <div class="x5yr21d x1n2onr6">
                        <div class="_68tl style-UyU6F" id="style-UyU6F">
                          <div class="_2eqm style-7PPCS" id="style-7PPCS">
                            <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                              <div class=" _8wod" draggable="true">
                                <a
                                  aria-label="clickable background"
                                  class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                  href="#"
                                >
                                  <u class="_8_x7 _3sqf"></u>
                                </a>
                                <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                  <div class="_741s _8_x6 _8_vu"></div>
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
                                            <div
                                              class="_90u_ style-zTS5K"
                                              id="style-zTS5K"
                                            >
                                              <div
                                                class="_4ik4 _4ik5 style-lHVom"
                                                id="style-lHVom"
                                              >
                                                <div
                                                  id="style-VoVRE"
                                                  class="style-VoVRE"
                                                >
                                                  Amount spent
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div></div>
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
                                          class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                          id="style-8N14N"
                                        >
                                          <div class="_43rl">
                                            <i
                                              aria-hidden="true"
                                              class="_271o img style-WSHUm"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-WSHUm"
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
                      </div>
                    </div>
                  </th>
                  <th style={{ minWidth: "130px" }}>
                    <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                      <div class="_741s _8_x6 _8_vu"></div>
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
                                  <div
                                    class="_4ik4 _4ik5 style-qAlZS"
                                    id="style-qAlZS"
                                  >
                                    <div id="style-zqMp6" class="style-zqMp6">
                                      Link results
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }} rowSpan="34">
                    Emrys Technologies
                  </td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "187px" }}>All</td>
                  <td style={{ minWidth: "250px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>
                  <td style={{ minWidth: "230px" }}>All</td>

                  <td style={{ minWidth: "161px" }}>$12,099.77</td>
                  <td style={{ minWidth: "130px" }}>24,248</td>
                </tr>
                <tr>
                  <td rowSpan="30">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$12,099.77</td>
                  <td>24,248</td>
                </tr>
                <tr>
                  <td rowSpan="28">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$12,099.77</td>
                  <td>24,248</td>
                </tr>
                <tr>
                  <td rowSpan="26">
                    <div class="_2eqm style-JrhNe" id="style-JrhNe">
                      <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                        <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                          <div
                            class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                          >
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                target="_blank"
                                href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                              >
                                <div
                                  class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  id="js_18r"
                                >
                                  Roofing - Mad Max T Tonic
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>All</td>
                  <td>All</td>

                  <td>$12,099.77</td>
                  <td>24,248</td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }} rowSpan="25">
                    <div className="ad-creative-cell">
                      <img
                        src="https://i.ibb.co/BN7zWVL/Whats-App-Image-2024-11-21-at-1-17-11-AM.jpg"
                        alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                        border="0"
                        className="ad-creative-img"
                      />
                      <div>
                        <strong style={{ fontWeight: "bold" }}>
                          Turn up the Brightness
                        </strong>
                        <p style={{ fontWeight: "500" }}>
                          Stop compromising the future of...
                        </p>
                        <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                      </div>
                    </div>
                  </td>
                  <td rowSpan="5">Device: Android Smartphone</td>
                  <td>All</td>
                  <td>$1,248.46</td>
                  <td>2,502</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$202.45</td>
                  <td>405.72</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$404.9</td>
                  <td>811.44</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$422</td>
                  <td>845</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$219</td>
                  <td>440</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPhone</td>
                  <td>All</td>
                  <td>$3,183.08</td>
                  <td>13,389</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$516.17</td>
                  <td>2,171.16</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1,032.35</td>
                  <td>4,342.32</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1,075</td>
                  <td>4,523</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$559.13</td>
                  <td>2,352</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Desktop</td>
                  <td>All</td>

                  <td>$12.53</td>
                  <td>9.62</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$2.03</td>
                  <td>1.56</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$4.06</td>
                  <td>3.12</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$4.24</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$2.2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: iPad</td>
                  <td>All</td>

                  <td>$4,152.22</td>
                  <td>2,981</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$673.33</td>
                  <td>483</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$1,346.67</td>
                  <td>966.96</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$1,402.78</td>
                  <td>1,007</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$729.44</td>
                  <td>524</td>
                </tr>
                <tr>
                  <td rowSpan="5">Device: Android Tablet</td>
                  <td>All</td>

                  <td>$32.23</td>
                  <td>68.08</td>
                </tr>
                <tr>
                  <td>Marketplace</td>

                  <td>$5.23</td>
                  <td>11.04</td>
                </tr>
                <tr>
                  <td>Feed</td>

                  <td>$10.45</td>
                  <td>22.08</td>
                </tr>
                <tr>
                  <td>Search Results</td>

                  <td>$10.89</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Feed: Video Feeds</td>

                  <td>$5.66</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    // Default case
    else {
      return (
        <div>
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ minWidth: "150px", backgroundColor: "white" }}>
                  <div class="x5yr21d x1n2onr6 x10qsr78 xu3j5b3 xotfvf0">
                    <div
                      style={{ height: "30px" }}
                      class="_68tl style-w3T3I"
                      id="style-w3T3I"
                    >
                      <div class="_2eqm style-iTqdO" id="style-iTqdO">
                        <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                          <div class=" _8wod" draggable="true">
                            <a
                              aria-label="clickable background"
                              class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                              href="#"
                            >
                              <u class="_8_x7 _3sqf"></u>
                            </a>
                            <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                              <div class="_741s _8_x6 _8_vu"></div>
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
                                        <div
                                          class="_90u_ style-2hzcc"
                                          id="style-2hzcc"
                                        >
                                          <div
                                            class="_4ik4 _4ik5 style-h6WcA"
                                            id="style-h6WcA"
                                          >
                                            <div
                                              id="style-7icMt"
                                              class="style-7icMt"
                                            >
                                              Page Name
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
                                      class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-Mljgm"
                                      id="style-Mljgm"
                                    >
                                      <div class="_43rl">
                                        <i
                                          aria-hidden="true"
                                          class="_271o img style-bY7sy"
                                          alt=""
                                          data-visualcompletion="css-img"
                                          id="style-bY7sy"
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
                  </div>
                </th>
                <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Campaign name
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
                </th>
                <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Ad set name
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
                </th>
                <th style={{ minWidth: "180px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Ad name
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
                </th>
                <th style={{ minWidth: "250px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Ad creative
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
                </th>
                <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Impression device
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
                </th>
                <th style={{ minWidth: "230px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Placement
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
                </th>

                <th style={{ minWidth: "160px", backgroundColor: "white" }}>
                  <div class="" id="style-Y1RG2">
                    <div
                      class="_4lg9 style-7SDkl"
                      role="separator"
                      id="style-7SDkl"
                    >
                      <div
                        class="_4lga _4lgb style-BGiM1"
                        id="style-BGiM1"
                      ></div>
                    </div>
                    <div class="x5yr21d x1n2onr6">
                      <div class="_68tl style-UyU6F" id="style-UyU6F">
                        <div class="_2eqm style-7PPCS" id="style-7PPCS">
                          <div class="_2eqm _3qn7 _61-2 _2fyi _3qng">
                            <div class=" _8wod" draggable="true">
                              <a
                                aria-label="clickable background"
                                class="x1ey2m1c x17qophe x10l6tqk xds687c x13vifvy"
                                href="#"
                              >
                                <u class="_8_x7 _3sqf"></u>
                              </a>
                              <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                                <div class="_741s _8_x6 _8_vu"></div>
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
                                          <div
                                            class="_90u_ style-zTS5K"
                                            id="style-zTS5K"
                                          >
                                            <div
                                              class="_4ik4 _4ik5 style-lHVom"
                                              id="style-lHVom"
                                            >
                                              <div
                                                id="style-VoVRE"
                                                class="style-VoVRE"
                                              >
                                                Amount spent
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                    <div></div>
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
                                        class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-8N14N"
                                        id="style-8N14N"
                                      >
                                        <div class="_43rl">
                                          <i
                                            aria-hidden="true"
                                            class="_271o img style-WSHUm"
                                            alt=""
                                            data-visualcompletion="css-img"
                                            id="style-WSHUm"
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
                    </div>
                  </div>
                </th>
                <th style={{ minWidth: "130px", backgroundColor: "white" }}>
                  <div class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e">
                    <div class="_741s _8_x6 _8_vu"></div>
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
                                <div
                                  class="_4ik4 _4ik5 style-qAlZS"
                                  id="style-qAlZS"
                                >
                                  <div id="style-zqMp6" class="style-zqMp6">
                                    Link results
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
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ minWidth: "150px" }} rowSpan="34">
                  Emrys Technologies
                </td>
                <td style={{ minWidth: "187px" }}>All</td>
                <td style={{ minWidth: "188px" }}>All</td>
                <td style={{ minWidth: "184px" }}>All</td>
                <td style={{ minWidth: "250px" }}>All</td>
                <td style={{ minWidth: "230px" }}>All</td>
                <td style={{ minWidth: "230px" }}>All</td>

                <td style={{ minWidth: "159px" }}>$33.49</td>
                <td style={{ minWidth: "130px" }}>152</td>
              </tr>
              <tr>
                <td rowSpan="30">
                  <div class="_2eqm style-JrhNe" id="style-JrhNe">
                    <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                        <div
                          class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                        >
                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                            <a
                              class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                              target="_blank"
                              href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                            >
                              <div
                                class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                id="js_18r"
                              >
                                Bathroom - Mad Max T Tonic
                              </div>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>All</td>
                <td>All</td>
                <td>All</td>
                <td>All</td>
                <td>All</td>

                <td>$33.49</td>
                <td>152</td>
              </tr>
              <tr>
                <td rowSpan="28">
                  <div class="_2eqm style-JrhNe" id="style-JrhNe">
                    <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                        <div
                          class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                        >
                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                            <a
                              class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                              target="_blank"
                              href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                            >
                              <div
                                class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                id="js_18r"
                              >
                                Bathroom - Mad Max T Tonic
                              </div>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>All</td>
                <td>All</td>
                <td>All</td>
                <td>All</td>

                <td>$33.49</td>
                <td>152</td>
              </tr>
              <tr>
                <td rowSpan="26">
                  <div class="_2eqm style-JrhNe" id="style-JrhNe">
                    <div class="_2eqm _3qn7 _61-0 _2fyi _3qng">
                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qng">
                        <div
                          class="x6ikm8r x10wlt62 x1iorvi4 x150jy0e xjkvuk6 x1e558r4 xuxw1ft xlyipyv"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                        >
                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                            <a
                              class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                              target="_blank"
                              href="/adsmanager/manage/adsets?act=1387295665246598&amp;selected_adset_ids=120211976353780644&amp;filter_set=CAMPAIGN_SELECTED-STRING_SET%1EIN%1E[%22120211976353780644%22]&amp;nav_source=report_builder"
                            >
                              <div
                                class="x6ikm8r x10wlt62 xuxw1ft xlyipyv"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                id="js_18r"
                              >
                                Bathroom - Mad Max T Tonic
                              </div>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>All</td>
                <td>All</td>
                <td>All</td>

                <td>$33.49</td>
                <td>152</td>
              </tr>
              <tr>
                <td style={{ padding: "0" }} rowSpan="25">
                  <div className="ad-creative-cell">
                    <img
                      src="https://i.ibb.co/BN7zWVL/Whats-App-Image-2024-11-21-at-1-17-11-AM.jpg"
                      alt="Whats-App-Image-2024-11-21-at-1-17-11-AM"
                      border="0"
                      className="ad-creative-img"
                    />
                    <div>
                      <strong style={{ fontWeight: "bold" }}>
                        Turn up the Brightness
                      </strong>
                      <p style={{ fontWeight: "500" }}>
                        Stop compromising the future of...
                      </p>
                      <span style={{ fontSize: "13px" }}>Used in 1 ad</span>
                    </div>
                  </div>
                </td>
                <td rowSpan="5">Device: Android Smartphone</td>
                <td>All</td>

                <td>$7.61</td>
                <td>3,439</td>
              </tr>
              <tr>
                <td>Marketplace</td>

                <td>$0.85</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Feed</td>

                <td>$5.15</td>
                <td>22</td>
              </tr>
              <tr>
                <td>Search Results</td>

                <td>$0.4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Feed: Video Feeds</td>

                <td>$0.001</td>
                <td>—</td>
              </tr>
              <tr>
                <td rowSpan="5">Device: iPhone</td>
                <td>All</td>

                <td>$18.36</td>
                <td>234</td>
              </tr>
              <tr>
                <td>Marketplace</td>

                <td>$1.11$</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Feed</td>

                <td>$20.82</td>
                <td>92</td>
              </tr>
              <tr>
                <td>Search Results</td>

                <td>$0.75</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Feed: Video Feeds</td>

                <td>$0.5</td>
                <td>—</td>
              </tr>
              <tr>
                <td rowSpan="5">Device: Desktop</td>
                <td>All</td>

                <td>$0.17</td>
                <td>342</td>
              </tr>
              <tr>
                <td>Marketplace</td>

                <td>$0.07</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Feed</td>

                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Search Results</td>

                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Feed: Video Feeds</td>

                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td rowSpan="5">Device: iPad</td>
                <td>All</td>

                <td>$3.29</td>
                <td>380</td>
              </tr>
              <tr>
                <td>Marketplace</td>

                <td>$0.28</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Feed</td>

                <td>$2.78</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Search Results</td>

                <td>$0.01</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Feed: Video Feeds</td>

                <td>$0.16</td>
                <td>2</td>
              </tr>
              <tr>
                <td rowSpan="5">Device: Android Tablet</td>
                <td>All</td>

                <td>$0.24</td>
                <td>389</td>
              </tr>
              <tr>
                <td>Marketplace</td>

                <td>$0.01</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Feed</td>

                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Search Results</td>

                <td>$0.01</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Feed: Video Feeds</td>

                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
            <div
              style={{
                position: "fixed",
                top: "870px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "white",
                left: "0",
                marginLeft: "81px",
                width: "74.9%",
                height: "70px",
                zIndex: "999",
                boxShadow:
                  "rgba(60, 64, 67, 0.2) 0px -1px 1px 0px, rgba(60, 64, 67, 0.1) 0px -1px 4px 1px",
              }}
            >
              {renderFooter()}
            </div>
          </table>
        </div>
      );
    }
  };
  const renderFooter = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if the month is October
    if (
      start >= new Date("2024-10-01T00:00:00+0500") &&
      end <= new Date("2024-10-31T23:59:59+0500")
    ) {
      return (
        <tfoot style={{ height: "70px" }}>
          <tr>
            <td
              style={{
                minWidth: "150px",
                textAlign: "left",
              }}
              colSpan="6"
            >
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                Total results
              </span>
              <br />
              <span style={{ fontSize: "12px", color: "#666" }}>
                100/189 rows displayed
              </span>
            </td>
            <td
              style={{
                minWidth: "185px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "249px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "160px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              93,007
            </td>
            <td
              style={{
                minWidth: "153px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              $23,269.58
            </td>
          </tr>
        </tfoot>
      );
    }
    // Check if the month is September
    else if (
      start >= new Date("2024-09-01T00:00:00+0500") &&
      end <= new Date("2024-09-30T23:59:59+0500")
    ) {
      return (
        <tfoot style={{ height: "70px" }}>
          <tr>
            <td
              style={{
                minWidth: "150px",
                textAlign: "left",
              }}
              colSpan="6"
            >
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                Total results
              </span>
              <br />
              <span style={{ fontSize: "12px", color: "#666" }}>
                100/189 rows displayed
              </span>
            </td>
            <td
              style={{
                minWidth: "185px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "249px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "160px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              83,264
            </td>
            <td
              style={{
                minWidth: "160px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              $33,002.08
            </td>
          </tr>
        </tfoot>
      );
    }
    // Default case
    else {
      return (
        <tfoot style={{ height: "70px" }}>
          <tr>
            <td
              style={{
                minWidth: "150px",
                textAlign: "left",
              }}
              colSpan="6"
            >
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                Total results
              </span>
              <br />
              <span style={{ fontSize: "12px", color: "#666" }}>
                100/189 rows displayed
              </span>
            </td>
            <td
              style={{
                minWidth: "185px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "187px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "249px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></td>
            <td
              style={{
                minWidth: "166px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              93,007
            </td>
            <td
              style={{
                minWidth: "153px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              $23,269.58
            </td>
          </tr>
        </tfoot>
      );
    }
  };

  return <div style={{ position: "relative" }}>{renderContent()}</div>;
};

export default SimpleTable;
