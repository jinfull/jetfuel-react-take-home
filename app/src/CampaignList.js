import React from 'react';
import CampaignItem from './CampaignItem';

class CampaignList extends React.Component {
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

    let campaigns = this.state.data.campaigns.map(campaign => (
      <CampaignItem
        campaign={campaign}
        key={campaign.id}
      />
    ));
    // console.log(campaigns);

    return(
      <ul>
        {/* <li>{campaigns[0].campaign_name}</li> */}
        {campaigns}
      </ul>
    )
  }

}

export default CampaignList;