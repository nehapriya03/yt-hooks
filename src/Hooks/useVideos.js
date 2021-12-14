import { useState, useEffect } from "react";
import { youtube } from "../Api/youtube.js";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube("/search", {
      params: {
        q: term,
      },
    });

    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
