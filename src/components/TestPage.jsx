import React, { useState } from 'react';
import '../styles/Test.css';

const TestPage = () => {
    const [campaigns, setCampaigns] = useState([
        {
            id: 1,
            onOff: true,
            name: 'Campaign 1',
            delivery: 'Active',
            bidStrategy: 'Lowest Cost',
            budget: '$500',
            attributionSetting: '7-day click',
            results: '1500',
            reach: '20000',
            impressions: '30000',
            costPerResult: '$3.33',
            amountSpent: '$5000',
            ends: '2024-06-01',
            impressions: '30000',
            costPerResult: '$3.33',
            amountSpent: '$5000',
            ends: '2024-06-01',
        },
        // Add more campaign data here
    ]);

    const toggleCampaign = (id) => {
        setCampaigns(campaigns.map(campaign => campaign.id === id ? { ...campaign, onOff: !campaign.onOff } : campaign));
    };

    return (
        <div className="campaign-table-container">
            <table className="campaign-table">
                <thead>
                    <tr>
                        <th className="fixed-column"><input type="checkbox" /></th>
                        <th className="fixed-column">Off/On</th>
                        <th className="fixed-column">Campaigns</th>
                        <th>Delivery</th>
                        <th>Bid Strategy</th>
                        <th>Budget</th>
                        <th>Attribution Settings</th>
                        <th>Results</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                        <th>Reach</th>
                        <th>Impressions</th>
                        <th>Cost per Result</th>
                        <th>Amount Spent</th>
                        <th>Ends</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => (
                        <tr key={campaign.id} className={`campaign-row ${index % 2 === 0 ? 'even-row' : ''}`}>
                            <td className="fixed-column"><input type="checkbox" /></td>
                            <td className="fixed-column">
                                <label className="switch">
                                    <input type="checkbox" checked={campaign.onOff} onChange={() => toggleCampaign(campaign.id)} />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td className="fixed-column campaign-name-cell">
                                <div className="campaign-name">
                                    {campaign.name}
                                    <div className="campaign-actions">
                                        <div>View Chart</div>
                                        <div>Edit</div>
                                        <div>Duplicate</div>
                                        <div>Pin</div>
                                    </div>
                                </div>
                            </td>
                            <td>{campaign.delivery}</td>
                            <td>{campaign.bidStrategy}</td>
                            <td>{campaign.budget}</td>
                            <td>{campaign.attributionSetting}</td>
                            <td>{campaign.results}</td>
                            <td>{campaign.reach}</td>
                            <td>{campaign.impressions}</td>
                            <td>{campaign.costPerResult}</td>
                            <td>{campaign.amountSpent}</td>
                            <td>{campaign.ends}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="fixed-column"><input type="checkbox" /></td>
                        <td className="fixed-column"></td>
                        <td className="fixed-column">Results from {campaigns.length} campaigns</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>7-day click or 1-day view</td>
                        <td>1,931</td>
                        <td>153,356</td>
                        <td>54,454</td>
                        <td>323</td>
                        <td>3,434</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TestPage;
