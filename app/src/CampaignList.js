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
      .then(data => this.setState({ data }))
      .catch(error => alert(error.message));
  }

  render() {
    if (!this.state.data) return null;

    // if (!this.state.data) {
    //   return (
    //     <div>Sorry! No campaigns to display!</div>
    //   )
    // }

    let campaigns = this.state.data.campaigns.map(campaign => (
      <CampaignItem
        campaign={campaign}
        key={campaign.id}
      />
    ));

    return (
      <ul className='campaign-ul'>
        { campaigns }
      </ul>
    )
  }
}

export default CampaignList;