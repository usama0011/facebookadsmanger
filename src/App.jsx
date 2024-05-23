import React, { useEffect, useState } from 'react'
import './App.css'
import CompaingsData from './components/CompaingsData'
import AdsSets from './components/AdsSets'
import Ads from './components/Ads'
import { Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import axios from 'axios'
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

const App = () => {
  const [showcalender, setShowCalender] = useState(false)
  const [currentfolder, setcurrentFolder] = useState("Campaings");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  // Initialize state with the current date
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const handleClickRun = (currentfolder) => {
    setcurrentFolder(currentfolder)
  }
  // Update state with selected date range
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleUpdatbtn = () => {
    setShowCalender((per) => !per)
  }
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        console.log('Fetching campaigns with dates:', formatDate(selectionRange.startDate), formatDate(selectionRange.endDate));
        const response = await axios.get('https://facebookadsmangerserver.vercel.app/api/newcampaing', {
          params: {
            startDate: formatDate(selectionRange.startDate),
            endDate: formatDate(selectionRange.endDate)
          }
        });
        console.log('Response:', response);
        setCampaigns(response.data);
      } catch (err) {
        setError('Error fetching campaigns');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [selectionRange.startDate, selectionRange.endDate]);


  return (
    <div>
      <div class="_605a _6nw _jn7 _2is9 _61ve roboto bizsitePage chrome webkit win x1 Locale_en_GB snipcss-WaAOv" dir="ltr" cz-shortcut-listen="true" tabindex="-1">
        <div class="_li">
          <div class="_li _30l2 _-f_" id="u_0_0_RF">
            <div class="_3b5k _ab_" id="bizsitePageContainer">
              <div id="globalContainer" class="uiContextualLayerParent bizWebLoginContainer">
                <div class="">
                  <div class="_1o9r _7wig" id="power_editor_root" data-clickable="1" data-inputable="1" data-keydownable="1" data-keyupable="1" data-changeable="1" data-auto-logging-id="f16f5724740de7c"><span data-surface-wrapper="1" data-surface="/am" data-auto-logging-id="f3b67bc72affb8c" class="style-Rcqjv" id="style-Rcqjv">
                    <div class="x5yr21d x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9 x10wlt62" id="ads_pe_container"><span data-surface-wrapper="1" data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react" data-auto-logging-id="f63af372a2f6d" class="style-575QJ" id="style-575QJ">
                      <div class="" data-visualcompletion="ignore-dynamic">
                        <div class="">
                          <div class="_2ww0">
                            <div class="_2ww1 _7y7x">
                              <div data-pagelet="AdsSideNavWithContent.react" class=""><span data-surface-wrapper="1" data-surface="/am/navigation_toolbar" data-auto-logging-id="f2e26c5d802f984" class="style-cIfEa" id="style-cIfEa">
                                <div class="_2y5j _2y5k style-zGyTf" id="style-zGyTf">
                                  <div class="_7o1x style-5J6RB" id="style-5J6RB">
                                    <div data-visualcompletion="ignore" class=""></div>
                                    <div class="x9f619 x6ikm8r x10wlt62 x15yg21f"><span data-surface-wrapper="1" data-surface="/am/navigation_toolbar/navigation_tools" data-auto-logging-id="f156c0b1562d558" id="style-t2vDI" class="style-t2vDI">
                                      <div class="xa9qn9j x1trwbdj x6a0fk7 xuyh7jl">
                                        <div id="global_nav_flyout_menu_id"></div>
                                      </div>
                                    </span>
                                      <div>
                                        <div></div>
                                      </div>
                                    </div>
                                    <div class="x1gzqxud x13dflua xxziih7 x12w9bfk xavht8x x6ikm8r x10wlt62 x15yg21f x9f619 xxrbq2n x87ps6o x78zum5 xdt5ytf x2lah0s x1y1aw1k xwib8y2 x5yr21d">
                                      <div class="x2lah0s xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x15yg21f">
                                        <div>
                                          <div class="x6s0dn4 x78zum5 xdt5ytf x1qughib x2lwn1j xeuugli x1yztbdb">
                                            <div class="x3nfvp2 x193iq5w xxymvpz x12nagc" role="none"><a aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" href="/adsmanager/?act=1387295665246598" role="link" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                              <div class="x78zum5">
                                                <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Ads Manager</div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f"><img alt="Meta" class="img" height="28" src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg?_nc_eui2=AeHKwknQesn94TNLWmx-T_z_tf_JPOr9hBa1_8k86v2EFmaBEik4xi7pURPecXmNF-1-npcsN93AIkwa-uvDfPYO" width="28" /></div>
                                                </div>
                                              </div>
                                            </span></a></div>
                                            <div class="xng8ra">
                                              <div class="_3-95">
                                                <div class="_96sk" id="global_scope_selector">
                                                  <div class="x1rg5ohu x67bb7w">
                                                    <div aria-label="Global Scope Selector" class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x2lah0s x10w6t97 x1td3qas x1n2onr6">
                                                        <div class="x78zum5 x2lwn1j xeuugli">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8" role="img"><img src="https://scontent.flhe11-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_p50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&amp;_nc_ohc=2rwCWuFOrp4Q7kNvgFu7tOu&amp;_nc_ht=scontent.flhe11-1.fna&amp;oh=00_AYDQ4DpBZLgnZzR9aiSI1e88oNwAeU1Er26GG8HP3jMa7w&amp;oe=664802FF" alt="" class="img" /></div>
                                                          </div>
                                                          <div class="x78zum5 x2lwn1j xeuugli x1exxf4d x1y71gwh x1nb4dca xu1343h x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x10l6tqk style-iFQws" id="style-iFQws"></div>
                                                        </div>
                                                      </div>
                                                    </span></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <div data-surface="/am/navigation_toolbar" data-clickable="1" data-inputable="1" data-keydownable="1" data-keyupable="1" data-changeable="1"></div>
                                        </div>
                                      </div>
                                      <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x5yr21d">
                                        <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                          <div class="x1kxxb1g">
                                            <nav aria-label="tools" class="xavht8x">
                                              <div class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi" role="list">
                                                <div class="x1n2onr6 x3oybdh" role="listitem">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                    <div aria-labelledby="js_1b" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2" id="js_15" role="button" tabindex="0">
                                                      <div class="x78zum5 x1iyjqo2">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                            <div class="x3nfvp2"><i class="img style-CP1ko" alt="" data-visualcompletion="css-img" id="style-CP1ko"></i></div>
                                                            <div class="x13dflua xxziih7 x12w9bfk x10l6tqk x1fo6t33 xoo4vsp x78zum5 x6s0dn4 x11xpdln x3oybdh"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1b" role="heading">Account overview</div>
                                                          </div>
                                                        </div>
                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="x1n2onr6 x3oybdh" role="listitem" aria-current="page">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                    <div aria-labelledby="js_1d" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2" role="button" tabindex="0">
                                                      <div class="x78zum5 x1iyjqo2">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1k4ywey">
                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k x1qsmy5i xvy4d1p xxk0z11">
                                                            <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-GPoZh" id="style-GPoZh"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli" id="js_1d" role="heading">{currentfolder === "Campaings" ? "Campaigns" : null}
                                                              {currentfolder === "Ads" ? "Ads" : null}
                                                              {currentfolder === "AdsSets" ? "AdsSets" : null}</div>
                                                          </div>
                                                        </div>
                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="x1n2onr6 x3oybdh" role="listitem">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0"><a aria-labelledby="js_1f" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv" href="/adsreporting/?act=1387295665246598" id="ecosystem_nav_more_tools_context_id" role="link" tabindex="0">
                                                    <div class="x78zum5 x1iyjqo2">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                        <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                          <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-hn62s" id="style-hn62s"></i></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a></div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1f" role="heading">Ads reporting</div>
                                                          </div>
                                                        </div>
                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="x1n2onr6 x3oybdh" role="listitem">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0"><a aria-labelledby="js_1h" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv" href="/adsmanager/?act=1387295665246598&amp;tool=AUDIENCES&amp;nav_entry_point=ads_ecosystem_navigation_menu&amp;nav_source=ads_manager" role="link" tabindex="0">
                                                    <div class="x78zum5 x1iyjqo2">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                        <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                          <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-c55rP" id="style-c55rP"></i></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a></div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1h" role="heading">Audiences</div>
                                                          </div>
                                                        </div>
                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <Link to="/payment">
                                                  <div class="x1n2onr6 x3oybdh" role="listitem">
                                                    <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0"><a aria-labelledby="js_1j" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xggy1nq x1ja2u2z x1t137rt x1iyjqo2 x1hl2dhg x1lku1pv" href="/billing_hub/payment_activity/?asset_id=1387295665246598&amp;business_id=&amp;placement=ads_manager" role="link" tabindex="0">
                                                      <div class="x78zum5 x1iyjqo2">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                            <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-YIDBt" id="style-YIDBt"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </a></div>
                                                    <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                      <div class="x78zum5 x1iyjqo2" role="listitem">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                            <div class="xeuugli">
                                                              <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1j" role="heading">Billing &amp; payments</div>
                                                            </div>
                                                          </div>
                                                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Link>
                                                <div class="x1n2onr6 x3oybdh" role="listitem">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                    <div aria-labelledby="js_1l" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2" id="ecosystem_nav_advertising_preferences_context_id" role="button" tabindex="0">
                                                      <div class="x78zum5 x1iyjqo2">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                            <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-EDeNZ" id="style-EDeNZ"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1l" role="heading">Advertising settings</div>
                                                          </div>
                                                        </div>
                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="x1n2onr6 x3oybdh" role="listitem">
                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                    <div aria-labelledby="js_1n" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2" id="ecosystem_nav_all_tools_context_id" role="button" tabindex="0">
                                                      <div class="x78zum5 x1iyjqo2">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                            <div class="x3nfvp2"><i alt="" data-visualcompletion="css-img" class="img style-TCC6M" id="style-TCC6M"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 xdzyupr">
                                                    <div class="x78zum5 x1iyjqo2" role="listitem">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni xg01cxk xjbqb8w xjwf9q1">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                          <div class="xeuugli">
                                                            <div aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli" id="js_1n" role="heading">All tools</div>
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
                                        <div class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-x3Jop" data-visualcompletion="ignore" data-thumb="1" id="style-x3Jop"></div>
                                        <div class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x150jy0e x18d9i69 x1e558r4 x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-Rk5FT" data-visualcompletion="ignore" data-thumb="1" id="style-Rk5FT">
                                          <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                        </div>
                                      </div>
                                      <div class="xurb0ha x1sxyh0">
                                        <div class="_85b_">
                                          <hr class="xjbqb8w xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x1emribx x1e56ztr x1i64zmx xdj266r" />
                                          <div class="_3qn7 _61-3 _2fyh _3qng">
                                            <div class="_9axj _3qn7 _61-0 _2fyh _3qng _4tau"><span class=" " data-tracked="true" data-clickable="1">
                                              <div class="x10vuhgg x1883u4 xr1wzlq xb8s3i7 x6ikm8r x10wlt62 x14qfxbe x12nagc">
                                                <div class="x1n2onr6 x6s0dn4 x78zum5 xl56j7k x139jcc6 x187nhsf">
                                                  <div aria-label="Help" class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k xrbr6if x1hc1fzr" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                    <div class="x78zum5 xl56j7k xfex06f x3pnbk8 x2lwn1j xeuugli x9f619 xc9qbxq x1y1aw1k xwib8y2 xurb0ha x1sxyh0"><i alt="" data-visualcompletion="css-img" class="img style-LTymw" id="style-LTymw"></i></div>
                                                  </span></div>
                                                </div>
                                              </div>
                                            </span>
                                              <div id="ads_manager_nux_privacy_guidance_onboarding_button">
                                                <div id="style-zM5g1" class="style-zM5g1">
                                                  <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                    <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x78zum5">
                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Ad account updates</div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                          <div class="x3nfvp2 x2lah0s x1c4vz4f"><i alt="" data-visualcompletion="css-img" class="img style-8JNcR" id="style-8JNcR"></i></div>
                                                        </div>
                                                      </div>
                                                    </span></div>
                                                  </div>
                                                  <div id="style-9oKL5" class="style-9oKL5"><span class="x3nfvp2 xmix8c7 x1n2onr6"><span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xmi5d70 xw23nyj x63nzvj x140t73q xuxw1ft x2b8uid x117nqv4 xbmvcp8">
                                                    <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">1</div>
                                                  </span>
                                                    <div aria-atomic="true" aria-live="polite" role="status" class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">You have 1 notification</div>
                                                  </span></div>
                                                </div>
                                              </div>
                                              <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                  <div class="x78zum5">
                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Settings</div>
                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                      <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                        <div class="xtwfq29 style-LNPrX" id="style-LNPrX"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span></div>
                                              </div><span class=" " data-tracked="true" data-clickable="1">
                                                <div class="_85c1 _9opo">
                                                  <div data-clickable="1">
                                                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                      <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                        <div class="x78zum5">
                                                          <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Notifications</div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                              <div class="xtwfq29 style-ilGo5" id="style-ilGo5"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span></div>
                                                    </div>
                                                  </div>
                                                  <div id="globalNavNotificationsJewel">
                                                    <div id="u_a_1_ds" data-clickable="1">
                                                      <div class="uiToggle _4962 _4xi2 _5orl _85d4" id="fbNotificationsJewel" data-toggle-wc="1"><a class="jewelButton _3eo9" href="#" rel="toggle" role="button" aria-labelledby="u_a_0_qu" name="notifications" data-gt="{&quot;ua_id&quot;:&quot;jewel:notifications&quot;}" data-target="fbNotificationsFlyout" data-hover="tooltip" data-tooltip-delay="500" aria-hidden="true" tabindex="-1">
                                                        <div class="_2n_9">
                                                          <div class="_76t_ _7257" id="NotifIndeterminateBadge">0</div>
                                                        </div>
                                                      </a>
                                                        <div class="__tw toggleTargetClosed _4xi1 _85d5 uiToggleFlyout" role="dialog" id="fbNotificationsFlyout" aria-labelledby="fbNotificationsJewelHeader">
                                                          <div data-clickable="1" data-inputable="1" data-keydownable="1" data-keyupable="1" data-changeable="1">
                                                            <div class=" _9q20">
                                                              <div id="biz_notif_jewel_title" class=" _9q29">Notifications</div>
                                                              <div class="_6rji">
                                                                <div id="biz_notif_jewel_preference_button" class="_6_5s"><button data-tooltip-content="Preferences" data-hover="tooltip" data-tooltip-position="below" type="button" aria-disabled="false" class="_271k _271l _1o4e _271m _1qjd _ai7j _ai7k _ai7m style-tYm19" id="style-tYm19">
                                                                  <div class="_43rl"><i aria-hidden="true" class="_271o img style-Xyrqf" alt="" data-visualcompletion="css-img" id="style-Xyrqf"></i><span class="accessible_elem">Preferences</span></div>
                                                                </button></div><img class="_6rk- img" data-hover="tooltip" data-tooltip-position="below" data-tooltip-content="Notifications are personalised for this account" height="20" width="20" src="https://scontent.flhe11-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_p50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&amp;_nc_ohc=2rwCWuFOrp4Q7kNvgFu7tOu&amp;_nc_ht=scontent.flhe11-1.fna&amp;oh=00_AYDQ4DpBZLgnZzR9aiSI1e88oNwAeU1Er26GG8HP3jMa7w&amp;oe=664802FF" alt="" />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="_33p">
                                                            <div id="u_a_3_sp"><span class="img _55ym _55yn _55yo jewelLoading" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading..."></span></div>
                                                          </div>
                                                          <div data-clickable="1" data-inputable="1" data-keydownable="1" data-keyupable="1" data-changeable="1">
                                                            <div class="x178xt8z x13fuv20 xc074nb x1o1nzlu x1y1aw1k xwib8y2 x1swvt13 x1pi30zi">
                                                              <div class="x1rg5ohu"><a class="_231w _231z  _4yef style-UoUyv" href="#" id="style-UoUyv">Mark all as read</a></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </span>
                                              <div>
                                                <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                  <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                    <div class="x78zum5">
                                                      <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Search</div>
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                          <div class="xtwfq29 style-RAzNq" id="style-RAzNq"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </span></div>
                                                </div>
                                              </div>
                                              <Link to="/mainnavigation">
                                                <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                  <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                    <div class="x78zum5">
                                                      <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Report a problem</div>
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                        <div class="x3nfvp2 x2lah0s x1c4vz4f"><i alt="" data-visualcompletion="css-img" class="img style-PGmEQ" id="style-PGmEQ"></i></div>
                                                      </div>
                                                    </div>
                                                  </span></div>
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
                              </span></div>

                            </div>

                            <div class="_2ww2">
                              <div>
                                <div class="_4u-c">
                                  <div data-pagelet="AdsPETopNavContainer.react"><span data-surface-wrapper="1" data-surface="/am/msg:AdsPETopNavContainer" data-auto-logging-id="f9dd96f13078b" id="style-HrtWD" class="style-HrtWD"></span>
                                    <div id="style-UaX4C" class="style-UaX4C">
                                      <div class="_9g6y _2ph-">
                                        <div class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-0-0-1" role="toolbar" data-auto-logging-component-type="GeoToolBar">
                                          <div class="_8fgf _8ox0 snipcss0-1-1-2">
                                            <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-2-2-3">
                                              <div class="x1t2a60a x1mpkggp snipcss0-3-3-4">
                                                <div aria-level="2" class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli snipcss0-4-4-5" role="heading">{currentfolder === "Campaings" ? "Campaings" : currentfolder === "AdsSets" ? "Ad Sets" : "Ads"}</div>
                                              </div>
                                              <div class="x1i64zmx snipcss0-3-3-6">
                                                <div class="snipcss0-4-6-7">
                                                  <div class="snipcss0-5-7-8">
                                                    <div class="snipcss0-6-8-9 style-Hv2fJ" id="style-Hv2fJ">
                                                      <div class="x1a2a7pz xh8yej3 snipcss0-7-9-10">
                                                        <div aria-disabled="false" class="_af4f snipcss0-8-10-11 style-l5AWB" id="js_7t" role="button" tabindex="0"><span class="_aee4 snipcss0-9-11-12"><span class="snipcss0-10-12-13"><span class="snipcss0-11-13-14 style-JHIWA" id="style-JHIWA">Hackta LLC (1387295665246598)</span></span></span><span class="_aee5 snipcss0-9-11-15"></span></div>
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
                                            <div class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-19" data-auto-logging-component-type="GeoToolBar">
                                              <div class="x19991ni x16fj20d x1hc1fzr snipcss0-3-19-20"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli snipcss0-4-20-21">Updated just now</span></div><span class="x10wh9bi x1wdrske x8viiok x18hxmgj snipcss0-3-19-22" data-tracked="true" data-clickable="1">
                                                <div class="x3nfvp2 x193iq5w xxymvpz x1i64zmx snipcss0-4-22-23" role="none">
                                                  <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-5-23-24" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-6-24-25">
                                                    <div class="x78zum5 snipcss0-7-25-26">
                                                      <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-8-26-27" data-sscoverage-ignore="true">Refresh Table Data</div>
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-8-26-28">
                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-9-28-29" role="presentation">
                                                          <div class="xtwfq29 snipcss0-10-29-30 style-hyrq1" id="style-hyrq1"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </span></div>
                                                </div>
                                              </span>
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-31" data-auto-logging-component-type="GeoToolBar">
                                              <div class="_4g7v snipcss0-3-31-32">
                                                <div class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-4-32-33" data-auto-logging-component-type="GeoToolBar">
                                                  <div class="_4g7x snipcss0-5-33-34">
                                                    <div class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-6-34-35" data-auto-logging-component-type="GeoToolBar">
                                                      <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-7-35-36" role="none">
                                                        <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-8-36-37" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-37-38">
                                                          <div class="x78zum5 snipcss0-10-38-39">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-11-39-40">
                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-12-40-41">Discard Drafts</div>
                                                            </div>
                                                          </div>
                                                        </span></div>
                                                      </div><span class="snipcss0-7-35-42" data-tracked="true" data-clickable="1">
                                                        <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-42-43" role="none">
                                                          <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-9-43-44" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-44-45">
                                                            <div class="x78zum5 snipcss0-11-45-46">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-46-47">
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-13-47-48">Review and publish</div>
                                                              </div>
                                                            </div>
                                                          </span></div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="_4540 snipcss0-2-18-49">
                                              <div aria-busy="false" aria-controls="js_73" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-3-49-50" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-50-51">
                                                <div class="x78zum5 snipcss0-5-51-52">
                                                  <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-6-52-53" data-sscoverage-ignore="true">Menu</div>
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-52-54">
                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-7-54-55" role="presentation">
                                                      <div class="xtwfq29 snipcss0-8-55-56 style-izxoA" id="style-izxoA"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </span></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div><span></span><span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="_49wu style-cyQ1t" id="style-cyQ1t">
                                  <div></div>
                                  <div class="_4u-c">
                                    <div class="xqtp20y x17qophe xib59rt xkrivgy xat24cr x1gryazu x1ap80js xexx8yu x6x52a7 x18d9i69 xxpdul3 x10l6tqk xds687c xhtitgo">
                                      <div class="_5il"></div>
                                    </div>
                                    <div class="_1saj"></div>
                                  </div><span data-surface-wrapper="1" data-surface="/am/editor_drawer" data-auto-logging-id="f2e71fc45fb23f" id="style-7dZ4m" class="style-7dZ4m">
                                    <div class="_2k0c _8_1l style-rd1rQ" id="style-rd1rQ">
                                      <div class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4">
                                        <div class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1lcm9me x1yr5g0i xrt01vj x10y3i5r" icon="[object Object]" aria-label="Close" role="button" tabindex="-1"><i alt="" data-visualcompletion="css-img" class="img style-Wr938" id="style-Wr938"></i>
                                          <div class="xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz xx83zyx xt0e3qv"></div>
                                        </div>
                                        <div id="INSIGHTS_DRAWER_tip"><span>
                                          <div class="x1rg5ohu x67bb7w"><span class=" " data-tracked="true" data-clickable="1">
                                            <div aria-disabled="false" aria-label="View charts (Ctrl+Y)" class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w" data-pitloot-persistonclick="false" id="insights_tray_button" role="button" tabindex="0">
                                              <div class="xbsr9hj">
                                                <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                                                  <div class="xtwfq29 style-5ho1q" id="style-5ho1q"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </span></div>
                                        </span></div>
                                        <div id="EDITOR_DRAWER_tip">
                                          <div class="x1rg5ohu x67bb7w"><span class=" " data-tracked="true" data-clickable="1">
                                            <div aria-disabled="true" aria-label="Select at least one campaign to edit." class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w" data-pitloot-persistonclick="true" role="button" tabindex="0">
                                              <div class="xbsr9hj">
                                                <div class="x3nfvp2 x120ccyz xto31z9" role="presentation">
                                                  <div class="xtwfq29 style-MsQPd" id="style-MsQPd"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </span></div>
                                        </div>
                                        <div id="ACTIVITY_HISTORY_DRAWER_tip">
                                          <div class="x1rg5ohu x67bb7w"><span class=" " data-tracked="true" data-clickable="1">
                                            <div aria-disabled="true" aria-label="Select at least one campaign to see a history of changes." class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w" data-pitloot-persistonclick="true" role="button" tabindex="0">
                                              <div class="xbsr9hj">
                                                <div class="x3nfvp2 x120ccyz xto31z9" role="presentation">
                                                  <div class="xtwfq29 style-1Ia8e" id="style-1Ia8e"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </span></div>
                                        </div>
                                        <div class="x10l6tqk xwa60dl"></div>
                                      </div>
                                    </div>
                                  </span><span data-surface-wrapper="1" data-surface="/am/table" data-auto-logging-id="f2d89c89cfc2afc" id="style-C1jKI" class="style-C1jKI">
                                    <div class="_2utw style-HmW1X" id="style-HmW1X">
                                      <div class="_4u-c"></div>
                                      <div class="_4u-c"></div><span data-surface-wrapper="1" data-surface="/am/table/search_and_filter" data-auto-logging-id="f3821f470ed9b98" id="style-Y2t4j" class="style-Y2t4j">
                                        <div>
                                          <div class="x1i64zmx x1emribx xwib8y2">
                                            <div class="_4u-c x78zum5 x1qughib">
                                              <div class="x78zum5 x1qughib xh8yej3">
                                                <div class="xgyuaek x1ed109x">
                                                  <div class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3" data-auto-logging-component-type="GeoCard">
                                                    <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                      <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                        <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                          <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                          <div class="x78zum5 x1nhvcw1 x6s0dn4 x1iyjqo2 x1ye3gou xc9qbxq">
                                                            <div class="x78zum5 x6s0dn4 x5yr21d">
                                                              <div class="x1kky2od x6s0dn4 x78zum5 x5yr21d"><i alt="" data-visualcompletion="css-img" class="img style-qZyZz" id="style-qZyZz"></i></div>
                                                              <div class="x1sliqq">
                                                                <div class="x6s0dn4 x78zum5"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xq9mrsl x1h4wwuj xeuugli">Search and filter</span></div>
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
                                              <div style={{ position: "relative" }} class="xsgj6o6">
                                                <div><span class=" " data-tracked="true" data-clickable="1"><span class="_5ldw"><span><button aria-haspopup="true" type="button" aria-disabled="false" class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-z8QcL" id="style-z8QcL">
                                                  <div onClick={() => setShowCalender((prev) => !prev)} class="_43rl">
                                                    <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">
                                                      <div class="_1uz0">
                                                        <div>  {formatDate(selectionRange.startDate)} - {formatDate(selectionRange.endDate)}&nbsp;</div>
                                                      </div>
                                                    </div><i aria-hidden="true" class="_271o img style-fq3tz" alt="" data-visualcompletion="css-img" id="style-fq3tz"></i>
                                                  </div>
                                                </button></span></span></span></div>
                                                {showcalender && <div style={{ position: "absolute", top: "40px", right: "20px", zIndex: 999 }}>
                                                  <DateRangePicker
                                                    ranges={[selectionRange]}
                                                    onChange={handleSelect}
                                                  />
                                                  <div style={{ backgroundColor: 'white', paddingRight: '10px', paddingBottom: "10px" }} class="_4iqv _2pi9 _2pi3 _3qn7 _61-3 _2fyi _3qng">
                                                    <div></div>
                                                    <div id="style-kzDKj" class="style-kzDKj">
                                                      <div id="style-8VIoe" class="style-8VIoe">
                                                        <div style={{ paddingRight: '10px' }} aria-atomic="true" aria-live="polite" aria-readonly="true" class=" _4iqx" id="js_6h-selectedLabel" role="textbox">
                                                          {formatDate(selectionRange.startDate)} - {formatDate(selectionRange.endDate)}
                                                          <div className="_5wr">Karachi Time</div>
                                                        </div>
                                                      </div>
                                                      <div id="style-LDZSI" class="style-LDZSI"><button type="button" aria-disabled="false" class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-3a3at" id="style-3a3at">
                                                        <div class="_43rl">
                                                          <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">Cancel</div>
                                                        </div>
                                                      </button></div>
                                                      <div id="style-QIOO5" class="style-QIOO5"><button type="button" aria-disabled="false" class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-cD2t8" id="style-cD2t8">
                                                        <div class="_43rl">
                                                          <div onClick={handleUpdatbtn} data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">Update</div>
                                                        </div>
                                                      </button></div>
                                                    </div>
                                                  </div>
                                                </div>
                                                }                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                      <div class="_3-8r" id="peTabs">
                                        <div class="x78zum5">
                                          <div class="x1iyjqo2 x2lah0s xdl72j9">
                                            <ul class="x78zum5 xuk3077 x1rdy4ex _43o4 _4470" role="tablist"><span data-surface-wrapper="1" data-surface="/am/table/table_tab:campaign" data-auto-logging-id="f21ee556f7cacf8" id="style-o9ibw" class="style-o9ibw">
                                              <li class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 x1vjfegm x1jyxor1 _45hc _1hqh" role="presentation"><a aria-haspopup="false" role="tab" tabindex="-1" class="_3m1v _468f _8z64" aria-selected="true"><span class=" " data-tracked="true" data-clickable="1">
                                                <div onClick={() => handleClickRun("Campaings")} class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${currentfolder === "Campaings" ? "x2izyaf" : ""} `} id="CAMPAIGN_GROUP_AdsClassicTab">
                                                  <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                    <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                      <div class="x1rg5ohu x67bb7w">
                                                        <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">{currentfolder === "Campaings" ? <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" class="x1qsmy5i xxk0z11 xvy4d1p">
                                                          <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5zm-9.83 23.73c-.2.18-.46.27-.72.27-.17 0-.35-.04-.51-.13L24 30.98l-5.44 2.89c-.4.21-.89.15-1.23-.14a.98.98 0 0 1-.23-1.16l5.95-12c.17-.35.54-.57.95-.57s.77.22.95.57l5.95 12c.19.39.1.86-.23 1.16z"></path>
                                                        </svg> : <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" class="x4s1yf2 x1qx5ct2 xw4jnvo snipcss-MI9sc">
                                                          <path d="m19.95 8.76-.18-.53a4 4 0 0 0-3.79-2.74H6.5c-1.66 0-3 1.34-3 3v30c0 2.21 1.79 4 4 4h33c2.21 0 4-1.79 4-4V15.5c0-2.21-1.79-4-4-4H23.74c-1.72 0-3.25-1.1-3.79-2.74z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3px" fill="none"></path>
                                                          <path d="m30.9 32.57-5.95-12c-.17-.35-.54-.57-.95-.57s-.77.22-.95.57l-5.95 12c-.19.39-.1.86.23 1.16.33.3.83.36 1.23.14L24 30.98l5.44 2.89a1.075 1.075 0 0 0 1.23-.14c.33-.3.42-.76.23-1.16z"></path>
                                                        </svg>}
                                                          <div class="x6ikm8r" data-sscoverage-ignore="true">
                                                            <div style={currentfolder === "Campaings" ? { color: '#0a78be' } : { color: 'black' }} aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4  x1i64zmx" role="heading">Campaigns </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </span></a></li>
                                            </span><span data-surface-wrapper="1" data-surface="/am/table/table_tab:adset" data-auto-logging-id="f281680e3b25a24" id="style-fOWQi" class="style-fOWQi">
                                                <li class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc" role="presentation"><a aria-haspopup="false" role="tab" tabindex="-1" class="_3m1v _468f _8z64" aria-selected="false"><span class=" " data-tracked="true" data-clickable="1">
                                                  <div onClick={() => handleClickRun("AdsSets")} class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${currentfolder === "AdsSets" ? "x2izyaf" : ""} `}>
                                                    <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                      <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                        <div class="x1rg5ohu x67bb7w">
                                                          <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">{currentfolder === "AdsSets" ? <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" class="x1qsmy5i xxk0z11 xvy4d1p snipcss-exTTP">
                                                            <rect x="26" y="2" width="20" height="20" rx="4.5" ry="4.5"></rect>
                                                            <rect x="2" y="26" width="20" height="20" rx="4.5" ry="4.5"></rect>
                                                            <path d="M17.5 2h-11C4.02 2 2 4.02 2 6.5v11C2 19.98 4.02 22 6.5 22h11c2.48 0 4.5-2.02 4.5-4.5v-11C22 4.02 19.98 2 17.5 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM41.5 26h-11c-2.48 0-4.5 2.02-4.5 4.5v11c0 2.48 2.02 4.5 4.5 4.5h11c2.48 0 4.5-2.02 4.5-4.5v-11c0-2.48-2.02-4.5-4.5-4.5zM36 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                                                          </svg> : <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" class="x4s1yf2 x1qx5ct2 xw4jnvo">
                                                            <g>
                                                              <g>
                                                                <rect class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="27.5" y="3.5" width="17" height="17" rx="3" ry="3"></rect>
                                                                <rect class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="3.5" y="27.5" width="17" height="17" rx="3" ry="3"></rect>
                                                                <rect class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="3.5" y="3.5" width="17" height="17" rx="3" ry="3" transform="rotate(90 12 12)"></rect>
                                                                <rect class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="9.5" y="9.5" width="5" height="5" rx="2.5" ry="2.5" transform="rotate(90 12 12)"></rect>
                                                                <rect class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="33.5" y="33.5" width="5" height="5" rx="2.5" ry="2.5" transform="rotate(90 36 36)"></rect>
                                                                <rect class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3" x="27.5" y="27.5" width="17" height="17" rx="3" ry="3" transform="rotate(90 36 36)"></rect>
                                                              </g>
                                                            </g>
                                                          </svg>}
                                                            <div class="x6ikm8r" data-sscoverage-ignore="true">
                                                              <div style={currentfolder === "AdsSets" ? { color: '#0a78be' } : { color: 'black' }} aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx" role="heading">Ad sets </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span></a></li>
                                              </span><span data-surface-wrapper="1" data-surface="/am/table/table_tab:ad" data-auto-logging-id="f191984a1c2abb4" id="style-j557g" class="style-j557g">
                                                <li class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc" role="presentation"><a aria-haspopup="false" role="tab" tabindex="-1" class="_3m1v _468f _8z64" aria-selected="false"><span class=" " data-tracked="true" data-clickable="1">
                                                  <div onClick={() => handleClickRun("Ads")} class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${currentfolder === "Ads" ? "x2izyaf" : ""} `} id="ADGROUP_AdsClassicTab">
                                                    <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                      <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                        <div class="x1rg5ohu x67bb7w">
                                                          <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">{currentfolder === "Ads" ? <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="x1qsmy5i xxk0z11 xvy4d1p snipcss-xPvhS">
                                                            <g data-name="Layer 2">
                                                              <path d="M13.25 1H2.75A1.76 1.76 0 0 0 1 2.75v10.5A1.76 1.76 0 0 0 2.75 15h10.5A1.76 1.76 0 0 0 15 13.25V2.75A1.76 1.76 0 0 0 13.25 1zM4.5 5.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8-.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z" data-name="16"></path>
                                                            </g>
                                                          </svg> : <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="x4s1yf2 x1qx5ct2 xw4jnvo">
                                                            <g data-name="Layer 2">
                                                              <g data-name="16">
                                                                <rect x="1.5" y="1.5" width="13" height="13" rx="1.25" stroke="currentColor" fill="none"></rect>
                                                                <circle cx="4.5" cy="4.5" r="1"></circle>
                                                                <path stroke-linecap="round" stroke="currentColor" fill="none" d="M7.5 4.5 12.5 4.5"></path>
                                                              </g>
                                                            </g>
                                                          </svg>}
                                                            <div class="x6ikm8r" data-sscoverage-ignore="true">
                                                              <div style={currentfolder === "Ads" ? { color: '#0a78be' } : { color: 'black' }} aria-level="3" class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx" role="heading">Ads</div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span></a></li>
                                              </span></ul>
                                          </div>
                                          <div class="x1c4vz4f xs83m0k xdl72j9"></div>
                                        </div>
                                      </div>
                                      {/* compaing data start here  */}
                                      {currentfolder === "Campaings" && <CompaingsData campaigns={campaigns} loading={loading} setLoading={setLoading} setError={setError} />}
                                      {currentfolder === "AdsSets" && < AdsSets />}
                                      {currentfolder === "Ads" && <Ads />}

                                      {/* comaping data end here  */}

                                      <div class="xeq5yr9 x12peec7 x1lcm9me x1yr5g0i x5pf9jr xo71vjh x1n2onr6 xiaao90 x1i64zmx"></div>
                                    </div>
                                  </span>
                                  <div class="xixxii4 xjnlgov x1vw3jpx x1memqgq"><span></span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span><span data-surface-wrapper="1" data-non-int-surface="/am/hero_root:AdsPEModalStatusContainer.react" data-auto-logging-id="f40ab3df733bd" id="style-YtINJ" class="style-YtINJ">
                        <div class=""></div>
                      </span>
                      <div id="web_ads_guidance_tips"></div>
                    </div>
                  </span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App