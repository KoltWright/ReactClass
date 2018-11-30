import axios from "axios";

const KEY = "AIzaSyDqK40aXxB3AmJwHsLjhInaW-PM_mCe5uk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
