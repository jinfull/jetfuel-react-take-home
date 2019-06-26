import React from 'react';
import CampaignItemMediaList from './CampaignItemMediaList';

class CampaignItem extends React.Component {
  render() {
    let campaign = this.props.campaign;

    if (!campaign) return null;

    return (
      <li className='campaign-li'>
        <div className='campaign-info'>
          <img className='campaign-logo' src={campaign.campaign_icon_url} alt='campaign logo'></img>
          <div className='campaign-details'>
            <div className='campaign-name'>{campaign.campaign_name}</div>
            <div className='campaign-pay'><strong>{campaign.pay_per_install}</strong> per install</div>
          </div>
        </div>
        <CampaignItemMediaList campaign={this.props.campaign} />
      </li>
    )
  }
}

export default CampaignItem;