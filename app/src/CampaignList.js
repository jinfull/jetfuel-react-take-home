import React from 'react';
import CampaignItem from './CampaignItem';

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    // this.requestSuccess = null;
    this.state = {};
  }

  componentDidMount() {
    let xhr = fetch('https://www.plugco.in/public/take_home_sample_feed');

    console.log(xhr);

    // if (xhr[[PromiseStatus]] === "rejected") {
    //   return null;
    // }

    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => alert(error.message));
  }

  render() {
    if (!this.state.data) return null;

    let campaigns = this.state.data.campaigns.map(campaign => (
      <CampaignItem
        campaign={campaign}
        key={campaign.id}
      />
    ));

    // if (!this.requestSuccess) {
    //   return (
    //     <div className='apiBroke'>Sorry, wrong page!</div>
    //   )
    // }

    return (
      <ul className='campaign-ul'>
        { campaigns }
      </ul>
    )
  }
}

export default CampaignList;