import React from 'react';
import CampaignMedia from './CampaignMedia';

var xhr;
class Campaign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // ip_address: "..."
    };

    // this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {

    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  // processRequest() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     var response = JSON.parse(xhr.responseText);

  //     console.log(response);

  //     this.setState({
  //       ip_address: response.ip
  //     });
  //   }
  // }


  render() {
    if (!this.state.data) return null;

    let campaigns = this.state.data.campaigns;
    console.log(campaigns);

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
        <CampaignMedia />
      </div>
    )
  }
}

export default Campaign;