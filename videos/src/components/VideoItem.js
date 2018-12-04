import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div key={video.id.videoId} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="avatar"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
