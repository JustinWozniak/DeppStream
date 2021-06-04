import React from 'react';
import YouTube from 'react-youtube';

const Video = ({videoId}) => {
  console.log(videoId)
    return (
        <div>
          <YouTube
            videoId={videoId}
          />
        </div>
    )
}

export default Video;
