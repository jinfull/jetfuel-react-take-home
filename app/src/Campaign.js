import React from 'react';
import CampaignMedia from './CampaignMedia';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is my campaign component
        <CampaignMedia />
      </div>
    )
  }
}

export default Campaign;