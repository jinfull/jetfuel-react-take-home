import React from 'react';
import CampaignItemMedia from './CampaignItemMedia';

class CampaignItem extends React.Component {
  render() {
    if (!this.props.campaign) return null;

    return (
      <li>
        <div className='campaign-info'>
          <div className='campaign-logo'>hi</div>
          <div className='campaign-details'>
            <div className='campaign-name'>{this.props.campaign.campaign_name}</div>
            <div className='campaign-pay'>{this.props.campaign.pay_per_install} per install</div>
          </div>
        </div>
        <CampaignItemMedia campaign={this.props.campaign} />
      </li>
    )
  }
}

export default CampaignItem;