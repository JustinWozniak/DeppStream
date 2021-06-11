import React from 'react'
import ReactPlayer from 'react-player/lazy'

const VideoComponent = props => {
    let title = props.title;
    let url = props.url
    let info = props.info
  return (
  <div>
    <h1 className="video-title">{title}</h1>
      <ReactPlayer width="400px" controls={true}  url={url} />
      <p className="video-info">{info}</p>
    </div>
  )
}

export default VideoComponent