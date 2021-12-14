import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video);

  // const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer" src={videoSrc}></iframe>
      </div>
      <div className=" ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
  console.log("video" + video);
  return <h1>{JSON.stringify(video)}</h1>;
};

export default VideoDetail;
