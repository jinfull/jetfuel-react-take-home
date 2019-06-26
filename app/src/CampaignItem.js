import React from 'react';
import CampaignItemMedia from './CampaignItemMedia';

class CampaignItem extends React.Component {
  render() {
    let campaign = this.props.campaign;

    if (!campaign) return null;

    console.log(campaign);

    return (
      <li className='campaign-li'>
        <div className='campaign-info'>
          <img className='campaign-logo' src={this.props.campaign.campaign_icon_url}></img>
          <div className='campaign-details'>
            <div className='campaign-name'>{campaign.campaign_name}</div>
            <div className='campaign-pay'>{campaign.pay_per_install} per install</div>
          </div>
        </div>
        <CampaignItemMedia campaign={this.props.campaign} />
      </li>
    )
  }
}

export default CampaignItem;