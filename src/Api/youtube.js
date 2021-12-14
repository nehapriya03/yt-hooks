import axios from "axios";

const KEY = "AIzaSyBuXHbIjCvsaOj3BLKYTqDl1Wj5AOscgPA";

export const youtube = (term) => {
  return axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      maxResults: 5,
      key: KEY,
      q: term,
    },
  });
};

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     maxResults: 5,
//     type: "video",
//     key: KEY,
//     // q: term,
//   },
// });
