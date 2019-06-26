import React from 'react';

class MediaItem extends React.Component {
  render() {
    let media = this.props.media;

    if (!media) return null;

    return (
      <li className='media-li'>
        <a href={media.download_url}><img className='media-preview' src={media.cover_photo_url}></img></a>
        <div className='media-bottom-row'>
          <div className='copy-link'></div>
          <div className='download-url'></div>
        </div>
      </li>
    )
  }
}

export default MediaItem;