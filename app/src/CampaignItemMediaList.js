import React from 'react';
import MediaItem from './MediaItem';

class CampaignItemMediaList extends React.Component {
  render() {
    let medias = this.props.campaign.medias.map(media => (
      <MediaItem
        media={media}
        key={media.download_url}
      />
    ))

    return (
      <ul className='media-ul'>
        { medias }
      </ul>
    )
  }
}

export default CampaignItemMediaList;