import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0d11074aad21beed6de3efa48fd3051ade80f08f5f91afecfb3b666d73ff281e"
  }
});
