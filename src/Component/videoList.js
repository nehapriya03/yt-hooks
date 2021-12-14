import React from "react";
import VideoItem from "./videoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    console.log("It is coming here");
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      ></VideoItem>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
