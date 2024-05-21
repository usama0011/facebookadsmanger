import React, { useEffect, useState } from 'react'
import '../styles/Ads.css'
import { Switch, Table } from 'antd';
import axios from 'axios';
import { BarChartOutlined, CaretDownOutlined, FileTextOutlined, PushpinOutlined } from '@ant-design/icons';
import EditImage from '../assets/edit.png'
import { Link } from 'react-router-dom';
const Ads = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [togglebutton, settogglebutton] = useState(false)

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('https://facebookadsmangerserver.vercel.app/api/ads');
                setCampaigns(response.data);
            } catch (err) {
                setError('Error fetching campaigns');
                message.error('Error fetching campaigns');
            } finally {
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, []);
    console.log(campaigns.map((item) => item.adsImage))
    const truncateText = (text, charLimit = 30) => {
        if (text?.length > charLimit) {
            return text.slice(0, charLimit) + '...';
        }
        return text;
    };
    const columns = [
        {
            title: () => <input style={{ width: "30px", height: '23px', border: "1px solid #f5f4f4" }} type="checkbox" />,
            width: 50,
            key: 'checkbox',
            fixed: 'left',
            render: () => <input style={{ width: "30px", height: '23px', border: "1px solid #f5f4f4" }} type="checkbox" />
        },
        {
            title: 'Off/On',
            width: 70,
            dataIndex: 'currentSwitch',
            key: 'currentSwitch',
            fixed: 'left',
            render: (text, record) => (
                <div onClick={() => settogglebutton((prev) => !prev)}>
                    {record.currentSwitch === false ? <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy snipcss-5XQZY">
                        <div class=""></div>
                        <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
                    </div> :
                        <div data-visualcompletion="ignore" class="">
                            <div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                    <div class="x1rg5ohu x1n2onr6 x3oybdh"><input aria-checked="true" aria-label="On/Off" role="switch" aria-describedby="js_36" aria-labelledby="js_34" class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm" id="js_35" type="checkbox" value="true" checked="" />
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
                    }
                </div>
            ),
        },
        {
            title: <div className='resulsconainer'> <div>Ad</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Adname',
            key: 'Adname',
            fixed: 'left',
            width: 350,
            render: (text, record) => (
                <>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='mainparentcontainer'>
                        <div style={{ width: '35px', height: '32px', marginRight: "5px" }}>
                            <img style={{ width: "100%", height: "100%" }} src={record.adImage} alt="" />
                        </div>
                        <div>
                            <div style={{ overflow: "hidden" }}
                                className="campaign-name-cell">

                                <div style={{ display: 'flex', alignItems: "center" }} className="campaign-name">
                                    <div class="_62i0 snipcss-9NrJ2">
                                        <div class="ellipsis _13is" data-hover="tooltip" data-tooltip-content="Promoting website: https://thesearchguide.xyz/cf/r/661b84e19cfeda0012066a3c?ad_id={{ad.id}}&amp;adset_id={{adset.id}}&amp;campaign_id..." data-tooltip-display="overflow" data-tooltip-position="above" data-tooltip-text-direction="auto" id="js_5hd">
                                            <div data-visualcompletion="ignore" class="xt0psk2"></div>
                                            <div class="xt0psk2 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj"><span class="_3dfi _3dfj" >{truncateText(text, 40)}</span></div>
                                        </div>
                                        <div data-visualcompletion="ignore" class=""><a aria-label="Edit" class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u" href="#" id="js_5oz">
                                            <div class="_5_6n"><span class="_5_6o"></span></div>
                                        </a></div>
                                    </div>
                                    <img className='largetimagepenc' style={{ width: "10px", height: "10px", marginLeft: "3px" }} src={EditImage} alt="" />
                                </div>
                            </div>
                            <div className='hoverbuttonsmyspec'>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <div style={{ marginRight: '10px' }}> <BarChartOutlined style={{ width: '12px', height: "12px", color: "black", marginRight: '3px' }} /><Link style={{ color: "unset" }} to="/editmainchart">

                                        View Charts
                                    </Link></div>
                                    <div style={{ marginRight: '10px' }}><Link style={{ color: "unset" }} to="/editcampaing">
                                        <img style={{ width: "10px", height: "10px", marginRight: "3px" }} src={EditImage} alt="" />
                                        Edit
                                    </Link></div>
                                    <div style={{ marginRight: '10px' }}>
                                        <FileTextOutlined style={{ marginRight: "3px" }} />
                                        Duplicate</div>

                                    <div style={{ marginRight: '10px' }}>
                                        <PushpinOutlined style={{ marginRight: "3px" }} />
                                        Pin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: <div className='resulsconainer'> <div>Delivery</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Delivery',
            key: 'Delivery',
            width: 150,
            render: (text) => (
                <div className="campaign-name-cell">
                    <div style={{ border: "none" }} class="_1b33 snipcss-B7bFk tether-target tether-enabled tether-element-attached-bottom tether-abutted tether-abutted-top tether-target-attached-top tether-element-attached-right tether-target-attached-right"><span>
                        <div class="ellipsis">
                            <div class="clearfix _ikh">
                                <div class="_4bl7">
                                    <div class="x1yc453h x1kky2od x1y5rjcf"><i alt="" data-visualcompletion="css-img" class="img style-ftbBX" id="style-ftbBX"></i></div>
                                </div>
                                <div class="_4bl9"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">Active</span></div>
                            </div>
                        </div>
                    </span></div>

                </div>
            ),
        },
        {
            title: <div className='resulsconainer'> <div>Ad set name</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'AdsetName',
            key: 'AdsetName',
            width: 250,
            render: (text) => (
                <div className="campaign-name-cell">
                    <div style={{ border: 'none' }} class="_1b33 ellipsis" data-hover="tooltip" data-tooltip-display="overflow"><a class="x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u x1lliihq" data-hover="tooltip" data-tooltip-display="overflow" href="#">[05/16/2024] Promoting https://thesearchguide.xyz/cf/r/661b84e19cfeda0012066a3c?ad_id=&amp;campaig...</a>
                        <div data-visualcompletion="ignore" class="">
                            <div class="x1rg5ohu x67bb7w"><span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">1 active ad</span></div>
                        </div>
                    </div>

                </div>
            ),
        },

        {
            title: 'Bid Strategy',
            dataIndex: 'Bidstrategy',
            key: 'Bidstrategy',
            width: 130,
            render: (text) => (
                <div class="snipcss-UtGF5">
                    <div geotextcolor="value" data-hover="tooltip" data-tooltip-display="overflow" data-tooltip-text-direction="auto" class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"><span>
                        <div data-visualcompletion="ignore" class=""></div>{text}
                    </span></div>
                    <div class="ellipsis _1ha4" data-hover="tooltip" data-tooltip-display="overflow" data-tooltip-text-direction="auto">
                        <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">Link clicks</div>
                    </div>
                </div>
            )
        },
        {
            title: 'Budget',
            dataIndex: 'Budget',
            key: 'Budget',
            width: 140,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {truncateText(text, 30)}
                </div>
            )
        },
        {
            title: 'Last Significant Edit',
            dataIndex: 'Lastsignificantedit',
            key: 'Lastsignificantedit',
            width: 120,
            render: (text) => (
                <div style={{ fontSize: "14px" }}> {truncateText(text, 11)}</div>
            )
        },
        {
            title: 'Attribution Settings',
            dataIndex: 'Attributionsetting',
            key: 'Attributionsetting',
            width: 120,
            render: (text) => (
                <div style={{ fontSize: "14px" }}> {truncateText(text, 11)}</div>
            )
        },
        {
            title: () => <div className='resulsconainer'> <div><span style={{ marginRight: "5px" }} id="js_26j" class="snipcss-1Co3h"><i alt="" data-visualcompletion="css-img" class="img style-JFqyS" id="style-JFqyS"></i></span>Results</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'results',
            key: 'results',
            width: 120,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                    <br />
                    <span style={{ fontSize: '12px', color: 'gray' }}>Link clicks</span>
                </div>
            )
        },
        {
            title: <div className='resulsconainer'> <div>Reach</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Reach',
            key: 'Reach',
            width: 150,
        },
        {
            title: <div className='resulsconainer'> <div>Impressions</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Impressions',
            key: 'Impressions',
            width: 150,
        },
        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Cost per <br /> results</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Costperresult',
            key: 'Costperresult',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                    <br />
                    <span style={{ fontSize: '12px', color: 'gray', whiteSpace: "nowrap" }}>Per link click</span>
                </div>
            )
        },
        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Quality Ranking</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Amountspent',
            key: 'Amountspent',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                </div>
            )
        },
        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Engagement rate ranking</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'EngagementRateRanking',
            key: 'EngagementRateRanking',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                </div>
            )
        },
        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Conversion rate ranking</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'ConversionRateRanking',
            key: 'ConversionRateRanking',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                </div>
            )
        },

        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Amount Spend</div><div><CaretDownOutlined style={{ color: "gray" }} color='red' /></div> </div>,
            dataIndex: 'Amountspent',
            key: 'Amountspent',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                </div>
            )
        },
        {
            title: <div className='resulsconainer'> <div style={{ padding: 0, margin: 0 }}>Ends</div><div><CaretDownOutlined style={{ color: "gray" }} color='blue' /></div> </div>,
            dataIndex: 'Ends',
            key: 'Ends',
            width: 150,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}

                </div>
            )

        },

        {
            title: () => <i alt="Customise columns..." aria-label="Customise columns..." data-visualcompletion="css-img" class="img snipcss-saPsI style-kgHNC" id="style-kgHNC"><u>Customise columns...</u></i>,
            dataIndex: 'Plus',
            key: 'Plus',
            width: 30,
            render: (text) => (
                <div style={{ fontSize: '14px' }} className="budygetcontainer">
                    {text}
                </div>
            )

        },
    ];
    const Footer = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0 -4px 8px rgba(0,0,0,0.1)', padding: '10px 20px', background: '#fff' }}>
            footer
        </div>
    );
    return (
        <div class="_3-9a style-5nd4I" id="style-5nd4I">
            <div class="_2utz style-Seeed" id="style-Seeed">
                <div class="_1hv5 style-voLCB" id="style-voLCB">
                    <div id="style-C85Qh" class="style-C85Qh">
                        <div class="_3c5b _7jnt" id="pe_toolbar">
                            <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                                <div class="_9p_z">
                                    <div class="_9p_y" role="toolbar">
                                        <div data-pagelet="AdsPEMainPaneLeftToolbar" >
                                            <div class="_9p_y">
                                                <div class="_9p_y"><span class=" " data-tracked="true" data-clickable="1"><span class=" " data-tracked="true" data-clickable="1">
                                                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                        <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xasdndc x1y1aw1k xwib8y2 x1pi30zi x1ye3gou" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div class="x3nfvp2 x2lah0s x1c4vz4f"><i alt="" data-visualcompletion="css-img" class="img style-jLgmC" id="style-jLgmC"></i></div>
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">Create</div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                    </div>
                                                </span></span>
                                                    <div id="DUPLICATE_BUTTON_ID">
                                                        <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli" role="group">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-CO7Ly" role="button" tabindex="-1" id="style-CO7Ly"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Duplicate</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                            <div class="xtwfq29 style-aWvjn" id="style-aWvjn"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                            <div class="x1rg5ohu x39eecv">
                                                                <div aria-busy="false" aria-controls="js_5" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-NvzlP" role="button" tabindex="-1" id="style-NvzlP"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div class="x78zum5">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Open Drop-down</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                            <div class="xtwfq29 style-kG7Uh" id="style-kG7Uh"></div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                    </div><span class=" " data-tracked="true" data-clickable="1">
                                                        <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli" role="group">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-thQNT" role="button" tabindex="-1" id="style-thQNT"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                            <div class="xtwfq29 style-vf3oT" id="style-vf3oT"></div>
                                                                        </div>
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">Edit</div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                            <div class="x1rg5ohu x39eecv">
                                                                <div aria-busy="false" aria-controls="js_74" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-8E6OI" role="button" tabindex="-1" id="style-8E6OI"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div class="x78zum5">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Edit</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                            <div class="xtwfq29 style-RQFmQ" id="style-RQFmQ"></div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                        <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                        <div class="xtwfq29 style-9sJ3D" id="style-9sJ3D"></div>
                                                                    </div>
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">A/B test</div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                    </div>
                                                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                                                        <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                                <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">You haven't copied any items.</div>
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                        <div class="xtwfq29 style-P73Vi" id="style-P73Vi"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                    </div>
                                                    <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1rg5ohu x1lcm9me x1yr5g0i xrt01vj x10y3i5r" role="group">
                                                        <div class="x3nfvp2 x193iq5w xxymvpz style-S2z2o" role="none" id="style-S2z2o">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-ih51k" role="button" tabindex="-1" id="style-ih51k"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Discard draft</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                            <div class="xtwfq29 style-fo9Vm" id="style-fo9Vm"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div class="x3nfvp2 x193iq5w xxymvpz style-Uio4A" role="none" id="style-Uio4A">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-ZC1EZ" role="button" tabindex="-1" id="style-ZC1EZ"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Delete isn't available with your current campaign selection.</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                            <div class="xtwfq29 style-88ptq" id="style-88ptq"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div style={{ height: '32px' }} class="x3nfvp2 x193iq5w xxymvpz style-cSERk" role="none" id="style-cSERk">
                                                            <div aria-busy="false" aria-controls="js_9" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-cKL4m" role="button" tabindex="0" id="style-cKL4m"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Export and import ad configuration data</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x3nfvp2 x2lah0s x1c4vz4f"><i alt="" data-visualcompletion="css-img" class="img style-y4Y9r" id="style-y4Y9r"></i></div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div><span class="">
                                                            <div class="x1rg5ohu x67bb7w">
                                                                <div class="x3nfvp2 x193iq5w xxymvpz style-g4lI8" role="none" id="style-g4lI8">
                                                                    <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-pjLJz" role="button" tabindex="-1" id="js_o"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                        <div class="x78zum5">
                                                                            <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Tag</div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                                    <div class="xtwfq29 style-bYYxd" id="style-bYYxd"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </span></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div><span>
                                                    <div>
                                                        <div aria-busy="false" aria-controls="js_5t" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d" id="js_a" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">Rules</div>
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                        <div class="xtwfq29 style-5YroX" id="style-5YroX"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                        <div data-visualcompletion="ignore" class=""></div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="_9p_w"></div>
                                        <div data-pagelet="AdsPEMainPaneRightToolbar">
                                            <div class="_9p_y">
                                                <div class="x1rg5ohu x67bb7w">
                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                                        <div>
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av"><label class="x1ypdohk" for="js_76"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">View Setup</span></label></div>
                                                        </div>
                                                        <div class="x1rg5ohu x1n2onr6 x3oybdh"><input aria-checked="false" aria-label="View Setup" role="switch" aria-describedby="js_77" class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm" id="js_76" type="checkbox" value="false" />
                                                            <div class="x1n2onr6 xh8yej3">
                                                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                                                                    <div class=""></div>
                                                                    <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
                                                                </div>
                                                                <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><span><span class=" " data-tracked="true" data-clickable="1">
                                                    <div id="ads_manager_table_column_dropdown_id">
                                                        <div id="ads_manager_nux_for_attribution_setting_column_aem_v2_mai_action_dropdown_nux">
                                                            <div aria-busy="false" aria-controls="js_79" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Columns: Performance</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                            <div class="xtwfq29 style-wX8Ma" id="style-wX8Ma"></div>
                                                                        </div>​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                            <div class="xtwfq29 style-WoIMj" id="style-WoIMj"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div id="ads_manager_7dct_28dct_nux_aem_v2_mai_step"></div>
                                                    </div>
                                                </span></span><span id="ads_manager_breakdown_dropdown_id"><span class=" " data-tracked="true" data-clickable="1">
                                                    <div aria-busy="false" aria-controls="js_7b" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                        <div class="x78zum5">
                                                            <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Breakdown</div>
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                    <div class="xtwfq29 style-rJ7N1" id="style-rJ7N1"></div>
                                                                </div>​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                    <div class="xtwfq29 style-2EUoB" id="style-2EUoB"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                </span></span>
                                                <div data-visualcompletion="ignore" class=""></div>
                                                <div data-visualcompletion="ignore" class=""></div><span>
                                                    <div aria-busy="false" aria-controls="js_7d" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                        <div class="x78zum5">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                    <div class="xtwfq29 style-FwWYw" id="style-FwWYw"></div>
                                                                </div>
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">Reports</div>
                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                    <div class="xtwfq29 style-5Pwcg" id="style-5Pwcg"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                </span>
                                                <div aria-busy="false" aria-controls="js_7f" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d x1i64zmx" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                    <div class="x78zum5">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f" role="presentation">
                                                                <div class="xtwfq29 style-tV6EN" id="style-tV6EN"></div>
                                                            </div>
                                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">Export</div>
                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu" role="presentation">
                                                                <div class="xtwfq29 style-oxVUw" id="style-oxVUw"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span></div>
                                                <div id="style-3lRkG" class="style-3lRkG"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* table start here from */}
                        <div className="campaign-table-container">
                            <Table style={{ borderRadius: "10px" }}
                                columns={columns}
                                dataSource={campaigns}
                                loading={loading}
                                scroll={{
                                    x: 2000,
                                    y: 420,
                                }}
                                bordered
                                pagination={false}
                                rowKey={(record) => record._id}
                                className="campaign-table yete"


                            />
                            {error && <div className="error-message">{error}</div>}
                        </div>
                        {/* talbe end here  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads


// < div class="_3h1i _1mie style-KWOnZ" role = "table" id = "style-KWOnZ" >


//                         </ >