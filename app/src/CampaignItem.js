import React from 'react';
import CampaignItemMedia from './CampaignItemMedia';

class CampaignItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) return null;

    let campaigns = this.state.data.campaigns;
    // console.log(campaigns);

    return (
      <div>
        <div className='campaign-info'>
          {/* <div className='campaign-logo'>{campaigns[1].campaign_icon_url}</div> */}
          <div className='campaign-logo'>hi</div>
          <div className='campaign-details'>
            <div className='campaign-name'>{campaigns[1].campaign_name}</div>
            <div className='campaign-pay'>{campaigns[1].pay_per_install} per install</div>
          </div>
        </div>
        <CampaignItemMedia />
      </div>
    )
  }
}

export default CampaignItem;