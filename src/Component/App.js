import React, { useState, useEffect } from "react";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
import SearchBar from "./SearchBar";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
    console.log(videos);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
