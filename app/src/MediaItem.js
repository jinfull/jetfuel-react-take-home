import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class MediaItem extends React.Component {
  render() {
    let media = this.props.media;

    if (!media) return null;

    return (
      <li className='media-li'>
        <a href={media.download_url}><img className='media-preview' src={media.cover_photo_url} alt='media preview'></img></a>
        <div className='media-bottom-row'>
          <CopyToClipboard text={media.tracking_link}>
            <img className='media-button' src={require('./assets/link.png')} alt='link button'></img>
          </CopyToClipboard>
          <a href={media.download_url} download><img className='media-button' src={require('./assets/download.png')} alt='download button'></img></a>
        </div>
      </li>
    )
  }
}

export default MediaItem;