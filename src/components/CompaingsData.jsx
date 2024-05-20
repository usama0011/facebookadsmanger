import React, { useEffect, useState } from 'react'
import '../styles/CompaingsData.css'
import axios from 'axios';
import { Switch, Table } from 'antd';

const CompaingsData = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('https://facebookadsmangerserver.vercel.app/api/newcampaing');
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

    const columns = [
        {
            title: () => <input style={{ width: "30px", height: '23px', border: "1px solid #f5f4f4" }} type="checkbox" />,
            width: 100,
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
                <Switch className='custom-switch' handleBg="red" style={{ width: '25px' }} size='default' checked={record.currentSwitch} />
            ),
        },
        {
            title: 'Campaigns',
            dataIndex: 'campaingname',
            key: 'campaingname',
            fixed: 'left',
            width: 250,
            render: (text) => (
                <div className="campaign-name-cell">
                    <div style={{ color: "#297def", textTransform: 'uppercase' }} className="campaign-name">
                        {text}
                    </div>

                </div>
            ),
        },
        {
            title: 'Delivery',
            dataIndex: 'Delivery',
            key: 'Delivery',
            width: 150,
        },
        {
            title: 'Bid Strategy',
            dataIndex: 'Bidstrategy',
            key: 'Bidstrategy',
            width: 150,
        },
        {
            title: 'Budget',
            dataIndex: 'Budget',
            key: 'Budget',
            width: 100,
        },
        {
            title: 'Attribution Settings',
            dataIndex: 'Attributionsetting',
            key: 'Attributionsetting',
            width: 150,
        },
        {
            title: 'Results',
            dataIndex: 'Results',
            key: 'Results',
            width: 100,
        },
        {
            title: 'Reach',
            dataIndex: 'Reach',
            key: 'Reach',
            width: 100,
        },
        {
            title: 'Impressions',
            dataIndex: 'Impressions',
            key: 'Impressions',
            width: 150,
        },
        {
            title: 'Cost per Result',
            dataIndex: 'Costperresult',
            key: 'Costperresult',
            width: 150,
        },
        {
            title: 'Amount Spent',
            dataIndex: 'Amountspent',
            key: 'Amountspent',
            width: 150,
        },
        {
            title: 'Ends',
            dataIndex: 'Ends',
            key: 'Ends',
            width: 150,
        },
    ];
    const footerData = {
        results: '50 camapings',
        attributionSettings: '70-day click or 1-day view',
        resultsCount: '1,931',
        reach: '153,356',
        impressions: '54,454',
        costPerResult: '323',
        amountSpent: '3,434',
    };

    const renderFooter = () => (
        <div className="table-footer">
            <div className="footer-checkbox" />
            <div className="footer-switch" />
            <div className="footer-campaigns">{footerData.results}</div>
            <div className="footer-delivery" />
            <div className="footer-bidstrategy" />
            <div className="footer-budget" />
            <div className="footer-attributionsetting">{footerData.attributionSettings}</div>
            <div className="footer-results">{footerData.resultsCount}</div>
            <div className="footer-reach">{footerData.reach}</div>
            <div className="footer-impressions">{footerData.impressions}</div>
            <div className="footer-costperresult">{footerData.costPerResult}</div>
            <div className="footer-amountspent">{footerData.amountSpent}</div>
            <div className="footer-ends" />
        </div>
    );
    return (
        <div>
            <div class="_2utw snipcss-91VzL style-dnFY6" id="style-dnFY6">
                <div class="_4u-c"></div>
                <div class="_4u-c"></div><span data-surface-wrapper="1" data-surface="/am/table/search_and_filter" data-auto-logging-id="f73ca3df53793" id="style-4ecUO" class="style-4ecUO">

                </span>

                <div style={{ marginLeft: '8px' }} class="_2utz style-yMVkq" id="style-yMVkq">
                    <div class="_1hv5 style-yCIRi" id="style-yCIRi">
                        <div id="style-8LROU" class="style-8LROU">
                            <div class="_3c5b _7jnt snipcss0-0-0-1" id="pe_toolbar">
                                <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6 snipcss0-1-1-2">
                                    <div class="_9p_z snipcss0-2-2-3">
                                        <div class="_9p_y snipcss0-3-3-4" role="toolbar">
                                            <div data-pagelet="AdsPEMainPaneLeftToolbar" class="snipcss0-4-4-5">
                                                <div class="_9p_y snipcss0-5-5-6">
                                                    <div class="_9p_y snipcss0-6-6-7"><span class="snipcss0-7-7-8" data-tracked="true" data-clickable="1"><span class="snipcss0-8-8-9" data-tracked="true" data-clickable="1">
                                                        <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-9-9-10" role="none">
                                                            <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xasdndc x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss0-10-10-11" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-11-11-12">
                                                                <div class="x78zum5 snipcss0-12-12-13">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-13-13-14">
                                                                        <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-14-14-15"><i alt="" data-visualcompletion="css-img" class="img snipcss0-15-15-16 style-nEUIB" id="style-nEUIB"></i></div>
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-14-14-17">Create</div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                    </span></span>
                                                        <div id="DUPLICATE_BUTTON_ID" class="snipcss0-7-7-18">
                                                            <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli snipcss0-8-18-19" role="group">
                                                                <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-9-19-20 style-5xP1g" role="button" tabindex="-1" id="style-5xP1g"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-20-21">
                                                                    <div class="x78zum5 snipcss0-11-21-22">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-12-22-23" data-sscoverage-ignore="true">Duplicate</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-22-24">
                                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-13-24-25" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-14-25-26 style-vn91x" id="style-vn91x"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                                <div class="x1rg5ohu x39eecv snipcss0-9-19-27">
                                                                    <div aria-busy="false" aria-controls="js_11m" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-10-27-28 style-3BfDf" role="button" tabindex="-1" id="style-3BfDf"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-11-28-29">
                                                                        <div class="x78zum5 snipcss0-12-29-30">
                                                                            <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-13-30-31" data-sscoverage-ignore="true">Open Drop-down</div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-13-30-32">​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-14-32-33" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-15-33-34 style-oryRd" id="style-oryRd"></div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </span></div>
                                                                </div>
                                                            </div>
                                                        </div><span class="snipcss0-7-7-35" data-tracked="true" data-clickable="1">
                                                            <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli snipcss0-8-35-36" role="group">
                                                                <div aria-busy="false" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss0-9-36-37 style-gAnmO" role="button" tabindex="-1" aria-disabled="true" id="style-gAnmO"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-37-38">
                                                                    <div class="x78zum5 snipcss0-11-38-39">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-39-40">
                                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-13-40-41" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-14-41-42 style-xfZPo" id="style-xfZPo"></div>
                                                                            </div>
                                                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-13-40-43">Edit</div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                                <div class="x1rg5ohu x39eecv snipcss0-9-36-44">
                                                                    <div aria-busy="false" aria-controls="js_qr" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-10-44-45 style-KHsSg" role="button" tabindex="-1" aria-disabled="true" id="style-KHsSg"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-11-45-46">
                                                                        <div class="x78zum5 snipcss0-12-46-47">
                                                                            <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-13-47-48" data-sscoverage-ignore="true">Edit</div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-13-47-49">​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-14-49-50" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-15-50-51 style-W3ooi" id="style-W3ooi"></div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </span></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-7-7-52" role="none">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou snipcss0-8-52-53" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-53-54">
                                                                <div class="x78zum5 snipcss0-10-54-55">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-11-55-56">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-12-56-57" role="presentation">
                                                                            <div class="xtwfq29 snipcss0-13-57-58 style-nNHrI" id="style-nNHrI"></div>
                                                                        </div>
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-12-56-59">A/B test</div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-7-7-60" role="none">
                                                            <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-8-60-61" role="button" tabindex="-1"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-61-62">
                                                                <div class="x78zum5 snipcss0-10-62-63">
                                                                    <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-11-63-64" data-sscoverage-ignore="true">You haven't copied any items.</div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-11-63-65">
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-12-65-66" role="presentation">
                                                                            <div class="xtwfq29 snipcss0-13-66-67 style-1LfM8" id="style-1LfM8"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1rg5ohu x1lcm9me x1yr5g0i xrt01vj x10y3i5r snipcss0-7-7-68" role="group">
                                                            <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-68-69 style-6M3sp" role="none" id="style-6M3sp">
                                                                <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-9-69-70 style-JtWLO" role="button" tabindex="-1" id="style-JtWLO"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-70-71">
                                                                    <div class="x78zum5 snipcss0-11-71-72">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-12-72-73" data-sscoverage-ignore="true">Discard draft</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-72-74">
                                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-13-74-75" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-14-75-76 style-SZZlN" id="style-SZZlN"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                            <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-68-77 style-EzjBU" role="none" id="style-EzjBU">
                                                                <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-9-77-78 style-fpgLe" role="button" tabindex="-1" id="style-fpgLe"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-78-79">
                                                                    <div class="x78zum5 snipcss0-11-79-80">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-12-80-81" data-sscoverage-ignore="true">Delete isn't available with your current campaign selection.</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-80-82">
                                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-13-82-83" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-14-83-84 style-SkoSf" id="style-SkoSf"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                            <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-68-85 style-6Pl4y" role="none" id="style-6Pl4y">
                                                                <div style={{ height: '32px' }} aria-busy="false" aria-controls="js_we" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-9-77-78 style-fpgLe" role="button" tabindex="0" id="style-JaAH3"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-86-87">
                                                                    <div class="x78zum5 snipcss0-11-87-88">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-12-88-89" data-sscoverage-ignore="true">Export and import ad configuration data</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-88-90">
                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-13-90-91"><i alt="" data-visualcompletion="css-img" class="img snipcss0-14-91-92 style-rnGaA" id="style-rnGaA"></i></div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div><span class="snipcss0-8-68-93">
                                                                <div class="x1rg5ohu x67bb7w snipcss0-9-93-94">
                                                                    <div class="x3nfvp2 x193iq5w xxymvpz snipcss0-10-94-95 style-8L6NZ" role="none" id="style-8L6NZ">
                                                                        <div aria-busy="false" aria-disabled="true" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-11-95-96 style-j4oUm" role="button" tabindex="-1" id="js_11q"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-12-96-97">
                                                                            <div class="x78zum5 snipcss0-13-97-98">
                                                                                <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-14-98-99" data-sscoverage-ignore="true">Tag</div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-14-98-100">
                                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-15-100-101" role="presentation">
                                                                                        <div class="xtwfq29 snipcss0-16-101-102 style-r5U9t" id="style-r5U9t"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </span></div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div><span class="snipcss0-6-6-103">
                                                        <div class="snipcss0-7-103-104">
                                                            <div aria-busy="false" aria-controls="js_y4" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d snipcss0-8-104-105" id="js_c" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-105-106">
                                                                <div class="x78zum5 snipcss0-10-106-107">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-11-107-108">
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2 snipcss0-12-108-109">Rules</div>
                                                                        <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-12-108-110" role="presentation">
                                                                            <div class="xtwfq29 snipcss0-13-110-111 style-Yilbv" id="style-Yilbv"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                            <div data-visualcompletion="ignore" class="snipcss0-8-104-112"></div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="_9p_w snipcss0-4-4-113"></div>
                                            <div data-pagelet="AdsPEMainPaneRightToolbar" class="snipcss0-4-4-114">
                                                <div class="_9p_y snipcss0-5-114-115">
                                                    <div class="x1rg5ohu x67bb7w snipcss0-6-115-116">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f snipcss0-7-116-117">
                                                            <div class="snipcss0-8-117-118">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av snipcss0-9-118-119"><label class="x1ypdohk snipcss0-10-119-120" for="js_qx"><span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli snipcss0-11-120-121">View Setup</span></label></div>
                                                            </div>
                                                            <div class="x1rg5ohu x1n2onr6 x3oybdh snipcss0-8-117-122"><input aria-checked="false" aria-label="View Setup" role="switch" aria-describedby="js_qy" class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm snipcss0-9-122-123" id="js_qx" type="checkbox" value="false" />
                                                                <div class="x1n2onr6 xh8yej3 snipcss0-9-122-124">
                                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy snipcss0-10-124-125">
                                                                        <div class="snipcss0-11-125-126"></div>
                                                                        <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2 snipcss0-11-125-127"></div>
                                                                    </div>
                                                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5 snipcss0-10-124-128"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><span class="snipcss0-6-115-129"><span class="snipcss0-7-129-130" data-tracked="true" data-clickable="1">
                                                        <div id="ads_manager_table_column_dropdown_id" class="snipcss0-8-130-131">
                                                            <div id="ads_manager_nux_for_attribution_setting_column_aem_v2_mai_action_dropdown_nux" class="snipcss0-9-131-132">
                                                                <div aria-busy="false" aria-controls="js_r0" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-10-132-133" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-11-133-134">
                                                                    <div class="x78zum5 snipcss0-12-134-135">
                                                                        <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Columns: Performance</div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-13-135-137">
                                                                            <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-14-137-138" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-15-138-139 style-EelON" id="style-EelON"></div>
                                                                            </div>​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-14-137-140" role="presentation">
                                                                                <div class="xtwfq29 snipcss0-15-140-141 style-kqTTJ" id="style-kqTTJ"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                            <div id="ads_manager_7dct_28dct_nux_aem_v2_mai_step" class="snipcss0-9-131-142"></div>
                                                        </div>
                                                    </span></span><span class="snipcss0-6-115-143" id="ads_manager_breakdown_dropdown_id"><span class="snipcss0-7-143-144" data-tracked="true" data-clickable="1">
                                                        <div aria-busy="false" aria-controls="js_r2" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-8-144-145" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-145-146">
                                                            <div class="x78zum5 snipcss0-10-146-147">
                                                                <div class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s" data-sscoverage-ignore="true">Breakdown</div>
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-11-147-149">
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-12-149-150" role="presentation">
                                                                        <div class="xtwfq29 snipcss0-13-150-151 style-yqpjm" id="style-yqpjm"></div>
                                                                    </div>​<div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-12-149-152" role="presentation">
                                                                        <div class="xtwfq29 snipcss0-13-152-153 style-BjnOQ" id="style-BjnOQ"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                    </span></span>
                                                    <div data-visualcompletion="ignore" class="snipcss0-6-115-154"></div>
                                                    <div data-visualcompletion="ignore" class="snipcss0-6-115-155"></div><span class="snipcss0-6-115-156">
                                                        <div aria-busy="false" aria-controls="js_r4" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-7-156-157" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-8-157-158">
                                                            <div class="x78zum5 snipcss0-9-158-159">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-10-159-160">
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-11-160-161" role="presentation">
                                                                        <div class="xtwfq29 snipcss0-12-161-162 style-Eo8bK" id="style-Eo8bK"></div>
                                                                    </div>
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2 snipcss0-11-160-163">Reports</div>
                                                                    <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-11-160-164" role="presentation">
                                                                        <div class="xtwfq29 snipcss0-12-164-165 style-5d6FS" id="style-5d6FS"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span></div>
                                                    </span>
                                                    <div aria-busy="false" aria-controls="js_r6" class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d x1i64zmx snipcss0-6-115-166" role="button" tabindex="0"><span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-7-166-167">
                                                        <div class="x78zum5 snipcss0-8-167-168">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-9-168-169">
                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-10-169-170" role="presentation">
                                                                    <div class="xtwfq29 snipcss0-11-170-171 style-mpiAQ" id="style-mpiAQ"></div>
                                                                </div>
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2 snipcss0-10-169-172">Export</div>
                                                                <div class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-10-169-173" role="presentation">
                                                                    <div class="xtwfq29 snipcss0-11-173-174 style-254iX" id="style-254iX"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                    <div class="snipcss0-6-115-175 style-HAvxt" id="style-HAvxt"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="campaign-table-container">
                                <Table style={{ borderRadius: "10px" }}
                                    columns={columns}
                                    bordered={true}

                                    dataSource={campaigns}
                                    loading={loading}
                                    scroll={{
                                        x: 2000,
                                        y: 420,
                                    }}
                                    pagination={false}
                                    rowKey={(record) => record._id}
                                    className="campaign-table"

                                />
                                {error && <div className="error-message">{error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xeq5yr9 x12peec7 x1lcm9me x1yr5g0i x5pf9jr xo71vjh x1n2onr6 xiaao90 x1i64zmx"></div>
            </div>
        </div>
    )
}

export default CompaingsData