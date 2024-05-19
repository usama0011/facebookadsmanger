import React from 'react'
import '../styles/Calender.css'
const Calender = ({ setShowCalender }) => {
    return (
        <div>
            <div class="uiContextualLayer uiContextualLayerBelowRight snipcss-lUbDv style-rywGX" aria-labelledby="" id="style-rywGX">
                <div data-surface="/am/table/search_and_filter" data-clickable="1" data-inputable="1" data-keydownable="1" data-keyupable="1" data-changeable="1" class="">
                    <div data-auto-logging-id="f20345b90f5dd6" class="">
                        <div class="">
                            <div aria-label="Date range selection" class="_4iqg _75pp _5mwk _75pn" role="dialog">
                                <div class="_4iqr _665i">
                                    <div class="_2pi5 _4iqs">
                                        <ul aria-label="Date range selection" aria-orientation="vertical" class="_rcb" role="menu">
                                            <li data-hover="tooltip" data-tooltip-display="overflow" class="_1qpp">Date presets</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Maximum</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Today</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Yesterday</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Last 7 days</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Last 14 days</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Last 30 days</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">This week</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Last week</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="true" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="0"><i class="_41q0 img style-PAjc7" alt="" data-visualcompletion="css-img" id="style-PAjc7"></i>This month</li>
                                            <li data-hover="tooltip" data-tooltip-display="overflow" aria-checked="false" aria-disabled="false" class=" _rce" role="menuitemradio" tabindex="-1">Last month</li>
                                        </ul>
                                    </div>
                                    <div class="_1vj1">
                                        <div class="_2pi3 _4iqu">
                                            <div class="_2pi9 _3-95 _4p44">
                                                <div class="_3-95">
                                                    <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                        <div class="_3-8_"></div>
                                                        <div class="_2pic _38_g">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                                                <div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av"><label class="x1ypdohk" for="js_6o"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">Compare dates</span></label></div>
                                                                </div>
                                                                <div class="x1rg5ohu x1n2onr6 x3oybdh"><input aria-checked="false" aria-label="Compare dates" role="switch" aria-describedby="js_6p" class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm" id="js_6o" type="checkbox" value="false" />
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
                                                    <div id="style-pkxTS" class="style-pkxTS"></div>
                                                </div>
                                            </div>
                                            <div class="_2pib">
                                                <div selection="[object Object]" timezoneid="105" class="_2f0r" data-count="2">
                                                    <div class="_4_hv"><button class="_2f0o _2f0p _42ft" tabindex="0" type="button"><i alt="" class="_2f0y img style-LN6bi" data-visualcompletion="css-img" id="style-LN6bi"></i><span class="_afhc">Previous month</span></button><button class="_2f0o _2f0q _42ft _42fr" tabindex="0" type="button" disabled=""><i alt="" class="_2f0y img style-5HzLU" data-visualcompletion="css-img" id="style-5HzLU"></i><span class="_afhc">Next month</span></button></div>
                                                    <div class="_30w2 clearfix">
                                                        <div class="_4_hw">
                                                            <h2 class="_2f0s" id="js_6i-5-2024"><span class="_2f0w">May</span> <span class="_2f0x">2024</span></h2>
                                                            <div aria-labelledby="js_6i-5-2024" class="_ow- _75p_ _owy" role="grid">
                                                                <ul class="_owx uiList  _4ki _509-" role="row">
                                                                    <li class="_oww" role="columnheader">Sun</li>
                                                                    <li class="_oww" role="columnheader">Mon</li>
                                                                    <li class="_oww" role="columnheader">Tues</li>
                                                                    <li class="_oww" role="columnheader">Wed</li>
                                                                    <li class="_oww" role="columnheader">Thurs</li>
                                                                    <li class="_oww" role="columnheader">Fri</li>
                                                                    <li class="_oww" role="columnheader">Sat</li>
                                                                </ul>
                                                                <div class="_owz clearfix">
                                                                    <div class="_ow_ clearfix" role="row"><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span aria-selected="true" class="_ox5 _ox6 _ox7 _ox8 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" aria-pressed="true" class="_oxc _oxe" role="button" tabindex="0">1</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">2</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">3</span></span><span aria-selected="true" class="_ox5 _ox6 _oxa _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">4</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="true" class="_ox5 _ox6 _ox8 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">5</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">6</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">7</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">8</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">9</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">10</span></span><span aria-selected="true" class="_ox5 _ox6 _oxa _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">11</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="true" class="_ox5 _ox6 _ox8 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">12</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">13</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">14</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">15</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">16</span></span><span aria-selected="true" class="_ox5 _ox6 _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">17</span></span><span aria-selected="true" class="_ox5 _ox6 _oxa _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc" role="button" tabindex="-1">18</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="true" class="_ox5 _ox6 _ox7 _ox9 _oxa _oxb" data-sigil="touchable" role="gridcell"><span aria-disabled="false" class="_oxc _oxd" role="button" tabindex="-1">19</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">20</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">21</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">22</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">23</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">24</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">25</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">26</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">27</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">28</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">29</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">30</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">31</span></span><span class="_ox0" role="gridcell"></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span class="_ox0" role="gridcell"></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="_4_hw">
                                                            <h2 class="_2f0s" id="js_6i-6-2024"><span class="_2f0w">June</span> <span class="_2f0x">2024</span></h2>
                                                            <div aria-labelledby="js_6i-6-2024" class="_ow- _75p_ _owy" role="grid">
                                                                <ul class="_owx uiList  _4ki _509-" role="row">
                                                                    <li class="_oww" role="columnheader">Sun</li>
                                                                    <li class="_oww" role="columnheader">Mon</li>
                                                                    <li class="_oww" role="columnheader">Tues</li>
                                                                    <li class="_oww" role="columnheader">Wed</li>
                                                                    <li class="_oww" role="columnheader">Thurs</li>
                                                                    <li class="_oww" role="columnheader">Fri</li>
                                                                    <li class="_oww" role="columnheader">Sat</li>
                                                                </ul>
                                                                <div class="_owz clearfix">
                                                                    <div class="_ow_ clearfix" role="row"><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span aria-selected="false" class="_ox5 _ox9" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">1</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">2</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">3</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">4</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">5</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">6</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">7</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">8</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">9</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">10</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">11</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">12</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">13</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">14</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">15</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">16</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">17</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">18</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">19</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">20</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">21</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">22</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">23</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">24</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">25</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">26</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">27</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">28</span></span><span aria-selected="false" class="_ox5" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">29</span></span></div>
                                                                    <div class="_ow_ clearfix" role="row"><span aria-selected="false" class="_ox5 _ox9" role="gridcell"><span aria-disabled="true" class="_oxc" role="button" tabindex="-1">30</span></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span><span class="_ox0" role="gridcell"></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div aria-atomic="true" aria-live="polite" class="accessible_elem"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="_4iqv _2pi9 _2pi3 _3qn7 _61-3 _2fyi _3qng">
                                            <div></div>
                                            <div id="style-kzDKj" class="style-kzDKj">
                                                <div id="style-8VIoe" class="style-8VIoe">
                                                    <div aria-atomic="true" aria-live="polite" aria-readonly="true" class=" _4iqx" id="js_6h-selectedLabel" role="textbox">
                                                        <div>1 May 2024 - 19 May 2024<div class="_5wr">Karachi Time</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="style-LDZSI" class="style-LDZSI"><button type="button" aria-disabled="false" class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-3a3at" id="style-3a3at">
                                                    <div class="_43rl">
                                                        <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">Cancel</div>
                                                    </div>
                                                </button></div>
                                                <div id="style-QIOO5" class="style-QIOO5"><button type="button" aria-disabled="false" class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-cD2t8" id="style-cD2t8">
                                                    <div class="_43rl">
                                                        <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">Update</div>
                                                    </div>
                                                </button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><a class="accessible_elem layer_close_elem" href="#" role="button" data-clickable="1">Close pop-up and return</a>
            </div>
        </div>
    )
}

export default Calender